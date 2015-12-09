<%@ page import="com.helpyouworkeasy.Configure"  %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>管理系统</title>
	<link href="css/login_css.css" rel="stylesheet" type="text/css">
    <link href="lib/ligerUI/skins/Aqua/css/ligerui-all.css" rel="stylesheet" type="text/css" />  
    <link rel="stylesheet" type="text/css" id="mylink"/>
	<link href="css/redmond/jquery.ui.all.css" rel="stylesheet" type="text/css">
	
	<link rel="stylesheet" href="pickadate/themes/default.css" id="theme_base">
    <link rel="stylesheet" href="pickadate/themes/default.date.css" id="theme_date">
    <link rel="stylesheet" href="pickadate/themes/default.time.css" id="theme_time">
	<link rel="stylesheet" href="css/alertify.core.css" />
	<link rel="stylesheet" href="css/alertify.default.css" id="toggleCSS" />
	
	<script type="text/javascript" src="js/jquery-1.7.2.min.js"></script>
    <script src="lib/ligerUI/js/ligerui.min.js" type="text/javascript"></script> 
    <script src="lib/ligerUI/js/plugins/ligerTab.js"></script>
    <script src="lib/jquery.cookie.js"></script>
    <script src="lib/json2.js"></script>

<script type="text/javascript" src="js/SimpleMap.js"></script>
<script type="text/javascript" src="js/helpyouworkeasy-core.js"></script>
<script type="text/javascript" src="js/md5.js"></script>
<script type="text/javascript" src="js/jquery-ui-1.8.16.custom.min.js"></script>
<script type="text/javascript" src="pickadate/picker.js"></script>
<script type="text/javascript" src="pickadate/picker.date.js"></script>
<script type="text/javascript" src="lib/alertify.min.js"></script>
<script type="text/javascript" src="<%= Configure.getParameter("SYS_INDEX_JS") %>" type="text/javascript"></script>

<script type="text/javascript">
var userConfig = null;
var tab = null;
var accordion = null;
var tree = null;
var tabItems = [];
var theme="aqua";//主题
var g_logo_html='<img src="img/logo32.png" style="width:120px;height:32px;margin:0px 10px 10px 10px;padding:0px;display:inline;vertical-align:middle;" />';
var failLoaded=false;
var interGetResult=0;
var interMesResult=0;
var curId="";
var currentSelectDateObj=null;
var config_use_positon_model=true;

alertify.set({
	labels : {
		ok     : "确定",
		cancel : "取消"
	},
	delay : 5000,
	buttonReverse : false,
	buttonFocus   : "ok"
});

	var skin_links = {
        "aqua": "lib/ligerUI/skins/Aqua/css/ligerui-all.css",
        "gray": "lib/ligerUI/skins/Gray/css/all.css",
        "silvery": "lib/ligerUI/skins/Silvery/css/style.css",
        "gray2014": "lib/ligerUI/skins/gray2014/css/all.css"
	};

	jQuery(document).ready(function() {
	   g_systemVersion="v1.0.0";
	   initGlobalData(true);
	   $("#userCode").focus();
	   //$("#sysTitleLogin").html("<font size='5' color='#006096'>"+index_info[0].sysTitle+"</font>");
	   //$(document).attr("title",index_info[0].sysTitle);
	   $('#loginMain').height($(window).height() - 51);
	});
	function f_heightChanged(options){  
	  if (tab) tab.addHeight(options.diff);
	  if (accordion && options.middleHeight - 24 > 0) accordion.setHeight(options.middleHeight - 24);
	}
			
	function f_addTab(tabid, text, url) {
	
	    tab.removeTabItem( tabid );
	
        tab.addTabItem({
            tabid: tabid,
            text: text,
            url: url,
            callback: function () {
                addFrameSkinLink(tabid); 
            }
        });
	}
	function addFrameSkinLink(tabid){
        var prevHref = getLinkPrevHref(tabid) || "";
        var skin = getQueryString("skin");
        if (!skin) return;
        skin = skin.toLowerCase();
        attachLinkToFrame(tabid, prevHref + skin_links[skin]);
	}
	function pages_init() {
	}
	function saveTabStatus() { 
	}
	function skinChange(color_value){
		$(".themeList li."+theme+" div").removeClass("selected");
		theme=color_value;
		$(".themeList li."+theme+" div").addClass("selected");
		if (color_value){
			location.href = "index_main.jsp?skin="+color_value;
		}else{
			location.href = "index_main.jsp";
		}
	}
	function css_init() {
        var css = $("#mylink").get(0), skin = getQueryString("skin");
        $("#skinSelect").val(skin);
		$(".themeList li."+theme+" div").removeClass("selected");
		theme=skin;
		$(".themeList li."+theme+" div").addClass("selected");
         /* $("#skinSelect").change(function (){ 
            if (this.value){
                location.href = "index_main.html?skin=" + this.value;
            } else {
                location.href = "index_main.html";
            }
        });*/
		if (!css || !skin) return;
        skin = skin.toLowerCase();
        $('body').addClass("body-" + skin); 
        $(css).attr("href", skin_links[skin]); 
	}
	function getQueryString(name) {
        var now_url = document.location.search.slice(1), q_array = now_url.split('&');
        for (var i = 0; i < q_array.length; i++){
            var v_array = q_array[i].split('=');
            if (v_array[0] == name) {
                return v_array[1];
            }
        }
        return false;
	}
	function attachLinkToFrame(iframeId, filename) { 
        if(!window.frames[iframeId]) return;
        var head = window.frames[iframeId].document.getElementsByTagName('head').item(0);
        var fileref = window.frames[iframeId].document.createElement("link");
        if (!fileref) return;
        fileref.setAttribute("rel", "stylesheet");
        fileref.setAttribute("type", "text/css");
        fileref.setAttribute("href", filename);
        head.appendChild(fileref);
	}
	function getLinkPrevHref(iframeId) {
		if (!window.frames[iframeId]) return;
            var head = window.frames[iframeId].document.getElementsByTagName('head').item(0);
            var links = $("link:first", head);
            for (var i = 0; links[i]; i++){
                var href = $(links[i]).attr("href");
                if (href && href.toLowerCase().indexOf("ligerui") > 0) {
                    return href.substring(0, href.toLowerCase().indexOf("lib") );
                }
            }
	}
	
 function isUseFullDateSelecter(){
    return true;
 }
			
			
	// 自定义的函数
	function loginSuccess(){
		$('#loginDiv').hide();
		$('#pageloading').hide();
		$('#topmenu').show();
		$('#layout1').show();
		//$("#themeList").show();
		
		 //布局
					$("#layout1").ligerLayout({ topHeight:200, leftWidth: 190, height: '100%',heightDiff:-3,space:5, onHeightChanged: f_heightChanged });

					var height = $(".l-layout-center").height();

					//Tab
					$("#framecenter").ligerTab({
						height: height,
						showSwitchInTab : true,
						showSwitch: true,
						onAfterAddTabItem: function (tabdata)
						{
							tabItems.push(tabdata);
							saveTabStatus();
						},
						onAfterRemoveTabItem: function (tabid)
						{ 
							for (var i = 0; i < tabItems.length; i++)
							{
								var o = tabItems[i];
								if (o.tabid == tabid)
								{
									tabItems.splice(i, 1);
									saveTabStatus();
									break;
								}
							}
						},
						onReload: function (tabdata)
						{
							var tabid = tabdata.tabid;
							addFrameSkinLink(tabid);
						}
					});

					//面板
					$("#accordion1").ligerAccordion({
						height: height - 24, speed: null
					});

					$(".l-link").hover(function ()
					{
						$(this).addClass("l-link-over");
					}, function ()
					{
						$(this).removeClass("l-link-over");
					});
					
					try{
					  index_init();
					}catch(e){}
					
					// 判断权限
					var right_indexdata=checkRight();

					//树
					$("#tree1").ligerTree({
						data : right_indexdata,
						checkbox: false,
						slide: false,
						nodeWidth: 120,
						attribute: ['nodename', 'url'],
						onSelect: function (node)
						{
							if (!node.data.url) return;
							var tabid = $(node.target).attr("tabid");
							if (!tabid)
							{
								tabid = new Date().getTime();
								$(node.target).attr("tabid", tabid)
							} 
							f_addTab(tabid, node.data.text, node.data.url);
						}
					});

					tab = liger.get("framecenter");
					accordion = liger.get("accordion1");
					tree = liger.get("tree1");
					$("#pageloading").hide();

					css_init();
					pages_init();

		try{
		  login_success_init();
		}catch(e){}

		$("#logoDiv").html( g_logo_html );
		
		$("#userPass").val("");
		$('#loginResult').html("");
		$("#sysTitle").html(index_info[0].sysTitle);
		var today=new Date();
		var year=today.getFullYear();
		var mouth=today.getMonth()+1;
		var day=today.getDate();
		var week=today.getDay();
		if(week=='0'){
			week="日";
		}else if(week=='1'){
			week="一";
		}else if(week=='2'){
			week="二";
		}else if(week=='3'){
			week="三";
		}else if(week=='4'){
			week="四";
		}else if(week=='5'){
			week="五";
		}else if(week=='6'){
			week="六";
		}
		var dateStr=year+'年 '+mouth+'月 '+day+'日 星期'+week;
		$("#span_date").html("【今天是"+dateStr+"】");
	}

	function MenuObj(txt,ise){
		this.text=txt;
		this.isexpand=ise;
		this.children=[];
	}

	function checkRight(){
		var right_indexdata1=[];
		try{
		  for ( var i=0;i<indexdata.length;i++ ) {
			var m=new MenuObj(indexdata[i].text, indexdata[i].isexpand);
			for ( var j=0;j<indexdata[i].children.length;j++ ) {
			  if ( indexdata[i].children[j].right == '' || top.g_isPermit( indexdata[i].children[j].right ) ) {
				m.children[m.children.length]=indexdata[i].children[j];
			  }
			}
			if ( m.children.length > 0 ) {
			  right_indexdata1[right_indexdata1.length]=m;
			}
		  }
		}catch(e){
		}
		return right_indexdata1;
	}
 
	function loginFail(){
		if ( loginMode == 'self' ) {
			$('#loginDiv').show();
			$('#pageloading').hide();
			$('#topmenu').hide();
			$('#layout1').hide();
			$("#themeList").hide();
		} else {
			location.href = loginMode;
		}
	}

	function logoutSuccess(){
		if ( loginMode == 'self' ) {
			location.href = "index_main.jsp";
		} else {
			location.href = loginMode;
		}
	}
	
	function loadMainPage(){
	    $("#home").attr("src",index_info[0].mainPage);
	}
 
	function toSysTab(title,xurl){
		try{
		  f_addTab(title,title,xurl);
		}catch(e){}
	}
  
	function doLogin(){
   	   var userCode = $("#userCode").val();
   	   var pass = $("#userPass").val();
   	   if ( userCode == '' || pass == '' ) {
   	 	 showInfoWin("请输入登录账号和密码");
   	 	 return ;
   	   }
	   $('#loginResult').html("");
	   var aoData=[];
       aoData.push( { "name": "user.userCode", "value": userCode } );
       aoData.push( { "name": "user.password", "value": hex_md5(pass) } );
	   sendAjaxRequest("/actions/System.action?signon",aoData,loginCallback);
	}
	function loginCallback(obj){
	   try{
	    if ( obj.status == true ){
	    	setCurrentUser(obj.body,obj.msg);
			loginSuccess();
	    }else{
		  $('#loginResult').html("登录失败:"+obj.msg);
	    }
	   }catch(e){
		  $('#loginResult').html("登录异常:"+e.message);
	   }
	}
 
	function register(){
		var xurl="pages/organization/userInfo.html?opt=register";
		top.openDialog("用户注册",xurl,true,400,400,null);
	}

	function setScrollMesTimer(){
		clearInterval( interMesResult );
		interMesResult=self.setInterval("getMesList()",18000);
	}
	
//消息滚动
 
	function getMesList(){
		var aoData=[];
		aoData.push( { "name": "iDisplayStart", "value": 0 } );
		aoData.push( { "name": "iDisplayLength", "value": 100 } );
		aoData.push( { "name": "noticeUser.status", "value": 0 } );
		var xurl=top.getUrlBase()+"/actions/OANotice.action?getOANoticeUserList";
		top.sendAjaxRequest(xurl,aoData,getMesCallback,true);
	}
	function getMesCallback(obj) {
		var mesList=obj.aaData;
		var ht="";
		if(mesList){
			for(var i=0;i<mesList.length;i++){
				if(mesList[i].emergency==2){
					ht+='<a style="color:red;margin-right:15px;cursor:pointer" onclick="showNoticeInfo(\''+mesList[i].id+'\')" href="javascript:void(0)">['+top.getCodeName("NOTICE_TYPE",mesList[i].notice_type)+'] '+mesList[i].notice_title.substring(0,30)+'</a>';
				}else if(mesList[i].emergency==1){
					ht+='<a style="color:blue;margin-right:15px;cursor:pointer" onclick="showNoticeInfo(\''+mesList[i].id+'\')" href="javascript:void(0)">['+top.getCodeName("NOTICE_TYPE",mesList[i].notice_type)+'] '+mesList[i].notice_title.substring(0,30)+'</a>';
				}else{
					ht+='<a style="color:#66cc00;margin-right:15px;cursor:pointer" onclick="showNoticeInfo(\''+mesList[i].id+'\')" href="javascript:void(0)">['+top.getCodeName("NOTICE_TYPE",mesList[i].notice_type)+'] '+mesList[i].notice_title.substring(0,30)+'</a>';
				}
			}
		}
		$("#scrollContent").html(ht);
		setScrollMesTimer();
	}

	function showNoticeInfo(id){
		curId=id;
		var xurl="pages/oa/noticeView.html?optType=update&id="+curId;
		top.openDialog("通知公告信息",xurl,true,600,400,null);
	}
	function colseCurPage(){
	    if($("li.l-selected").attr("tabid")=='home') return;
		tab.removeTabItem($("li.l-selected").attr("tabid"));
	}
	function returnHome(){
		 tab.selectTabItem("home");
    }
	
 function selectDate(obj){
     currentSelectDateObj=obj;
	 if ( obj ) {
	   $("#date__container").val( obj.value );
	 }
     var $input = $('#date__container').pickadate({
		monthsFull: [ '一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月' ],
		monthsShort: [ '一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月' ],
		weekdaysShort: [ '日', '一', '二', '三', '四', '五', '六' ],
		today: '今天',
		clear: '清空',
		close: '关闭',
		format: 'yyyy-mm-dd',
		formatSubmit: 'yyyy-mm-dd',
		selectYears:40,
		selectMonths:true,
		onClose:function () {
		 try{
		  setSelectDate($("#date__container").val());
		 }catch(e){
		 }
		}
	   });
	 var picker = $input.pickadate('picker');
	 var setDateValue=obj.value;
	 if ( obj.value == '' ) {
	    var today=new Date();
	    var y=today.getFullYear();
        var m=today.getMonth() + 1;
        var d = today.getDate();
		if ( m < 10 ) m="0"+m;
		if ( d < 10 ) d="0"+d;
		setDateValue=y+"-"+m+"-"+d;
	 }
	 picker.set('select', setDateValue, { format: 'yyyy-mm-dd' })
	 picker.start();
	 picker.open();
	 $("#date__container").hide();
 }
 function setSelectDate(v){
     try{
	    currentSelectDateObj.value=v;
		
		if (currentSelectDateObj.fireEvent){
		  currentSelectDateObj.fireEvent('onchange');
		}else{
		  currentSelectDateObj.onchange();
		}
	 }catch(e){
	 }
 }
 
 function getConfig_use_positon_model(){
   return config_use_positon_model;
 }
</script> 
<style type="text/css"> 
    body,html{height:100%;}
    body{ padding:0px; margin:0; overflow:hidden;}  
    .l-link{ display:block; height:26px; line-height:26px; padding:2px 5px 2px 10px; text-decoration:underline; color:#333;}
    .l-link2{text-decoration:none; margin:2px;}
    .l-layout-top{background:#102A49; color:White;}
    .l-layout-bottom{ background:#E5EDEF; text-align:center;}
    #pageloading{position:absolute; left:0px; top:0px; background:white url('loading.gif') no-repeat center; width:100%; height:100%;z-index:99999;}
    .l-link{ display:block; line-height:22px; height:22px; padding-left:16px;border:1px solid white; margin:4px;}
    .l-link-over{ background:#FFEEAC; border:1px solid #DB9F00;} 
    .l-winbar{ background:#2B5A76; height:30px; position:absolute; left:0px; bottom:0px; width:100%; z-index:99999;}
    .space{ color:#E7E7E7;}
    /* 顶部 */ 
	.l-topmenu{margin:0px;padding:0px;vertical-align:middle;height:70px; line-height:70px; background-color:#79BAEC; background-image:url(img/bj.jpg); background-repeat: repeat-x; border:1px solid #79BAEC;  }
    #sysTitle{margin:0px;padding:0px;display:inline;height:70px;line-height:70px;font-size:25px;color:#0000ff;letter-spacing:2px;}
	.l-topmenu-welcome{float:right;margin-right:10px;height:70px;line-hieght:70px}
    .l-topmenu-welcome a{text-decoration:none} 
   .top-title{
	width:100px;heght:25px;backgroud-color:#E7E7E7;border:#E7E7E7 solid 1px;
   }
   .body-gray2014 #framecenter{
        margin-top:3px;
    }
      .viewsourcelink {
         background:#B3D9F7;  display:block; position:absolute; right:10px; top:3px; padding:6px 4px; color:#333; text-decoration:underline;
    }
    .viewsourcelink-over {
        background:#81C0F2;
    }
    .l-topmenu-welcome label {color:white;
    }
    #skinSelect {
        margin-right: 6px;
    }
	 .themeList li div { background:url(img/themeButton.png) no-repeat;}
	/* .themeList { position:absolute; top:80px; right:190px;}*/
	 .themeList {margin-right:20px}
	 .themeList li { float:left; padding:0 3px;}
	 .themeList li div { display:block; overflow:hidden; width:13px; height:11px; text-indent:-100px; cursor:pointer;}
	 .themeList li.aqua div { background-position:0 0;}
	 .themeList li.aqua .selected { background-position:0 -20px;}
	 .themeList li.silvery div { background-position:-20px 0;}
	 .themeList li.silvery .selected { background-position:-20px -20px;}
	 .themeList li.gray div { background-position:-40px 0;}
	 .themeList li.gray .selected { background-position:-40px -20px;}
	 .themeList li.gray2014 div { background-position:-60px 0;}
	 .themeList li.gray2014 .selected { background-position:-60px -20px;}
 </style>
</head>
<body style="padding:0px;background:#EAEEF5;">

 <input id="date__container" type="hidden" value=""/>
	
 <div id="loginDiv" style="width:100%;height:100%;background-image:url(img/bg1_home2.jpg)">
	<div id="loginTop"></div>
	<div id="loginClear" class="clear"></div>
	<div id="loginMain">
	  <div class="ind_logo" style="padding-top: 75px;padding-left: 85px;"><img src="img/logo32.png" ></div>
	  <div class="ind_info" style="margin-top: 20px;background-image: url(img/bg1_info_none.png);">
	    <ul style="padding-top: 20px;padding-left: 60px;"><li id="sysTitleLogin">
	      <font size="5" color="#006096"><b>管理系统</b></font>
		</li>
		</ul>
		<ul class="user_1" style="padding: 10px 0px 0px 60px;">
		  <li class="u1_1"><img src="img/pic1_user.png" width="29" height="35"></li>
		  <li class="u1_2">账&nbsp;&nbsp;号：</li>
		  <li class="u1_3">
			<input type="text" name="textfield" id="userCode" style="width:160px;" onkeydown="if(event.keyCode==13) doLogin();" value="">
		  </li>
		</ul><div class="clear"></div>
		<ul class="user_2" style="padding: 0px 0px 0px 60px;">
		  <li class="u2_1"><img src="img/pic_1user2.png" width="24" height="30"></li>
		  <li class="u2_2">密&nbsp;&nbsp;码：</li>
		  <li class="u2_3"> 
			<input type="password" name="textfield" id="userPass" style="width:160px;" onkeydown="if(event.keyCode==13) doLogin();" value="">
		  </li>
		</ul>
		<ul class="user_3" style="padding: 0px 0px 0px 60px;"><li class="u3_1" onclick="doLogin()"><a href="javascript:void(0)">登&nbsp;录</a></li><li class="u3_2" onclick="register()"><a href="javascript:void(0)" >注&nbsp;册</a></li></ul>
	  </div>
	</div>
	<div id="loginResult"></div>
	<div id="ind_footer" style="float:center;">
	  <font color='white'>&nbsp;&nbsp;Copyright &copy; 北京一维慧动科技有限公司&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span id='versionInfoTxt' >v1.0.0</span></font>
	</div>
</div>

<div id="pageloading"></div>
<div id="topmenu" class="l-topmenu" style="display:none">
	<span id="logoDiv"></span>
	<div id="sysTitle">管理系统</div>
	<div class="l-topmenu-welcome">
		<span id="currentUserInfo">&nbsp;</span>
        <span class="space">|</span>
        <a href="javascript:g_changepass()" style="text-decoration:none;" class="l-link2"><img src="img/edit.gif" style="margin-right:5px;"/>修改密码</a> 
        <span class="space">|</span>
         <a href="javascript:isLogout()" style="text-decoration:none;" class="l-link2"><img src="img/exit.png" style="margin-right:5px;"/>退出</a>
	</div>
</div>
	<div class="top-title" style="margin-left:5px;margin-right:15px;padding-right:15px;width:100%;height:22px;line-height:22px;">
		<table height="100%" width="100%" style="margin:0px 10px 0px 10px">
			<tr>
				<td height="100%" valign="middle" width="200px" id="span_date"></td>
				<td>
				<!--<DIV id="scrollobj" style="white-space:nowrap;overflow:hidden;width:850px;"><span id="scrollContent"></span></DIV>!-->
				<marquee id="rollObj" direction="left" behavior="scroll" scrollamount="10" onmouseover="this.stop()" onmouseout="this.start()"><span id="scrollContent"></span></marquee> 
				</td>
				<td width="100px" style="padding-left:10px">
					<ul class="themeList" id="themeList"style="margin-top:2px;display:none" >
						<li onclick='skinChange("aqua")' class="aqua"><div class="selected">蓝色</div></li>
						<li onclick='skinChange("silvery")' class="silvery"><div>绿色</div></li>
						<li onclick='skinChange("gray")' class="gray"><div>紫色</div></li>
						<li onclick='skinChange("gray2014")' class="gray2014"><div>银色</div></li>
					</ul>
				</td>
				<td width="200px">
					<a href="javascript:void(0)" style="text-decoration:none;"><img src="img/homePage.png" width="13px" height="13px"/><span style="height:20px;line-height:20px;padding:5px;margin:3px;color:black" onclick="returnHome()">返回首页</span></a>
					<a href="javascript:void(0)" style="text-decoration:none;"><img src="img/closePage.png" width="13px" height="13px"/><span style="height:20px;line-height:20px;padding:5px;margin:3px;color:black" onclick="colseCurPage()">关闭当前页</span></a>
				</td>
			</tr>
		</table>
	</div>
	<div style="background-color:#79BAEC;height:4px" width="100%"> </div>
<div id="layout1" style="width:99.2%; margin:0 auto; margin-top:4px; display:none"> 
        <div position="left"  title="功能菜单" id="accordion1"> 
                     <div title="业务系统" class="l-scroll">
                         <ul id="tree1" style="margin-top:3px;">
                    </div>
        </div>
        <div position="center" id="framecenter"> 
            <div tabid="home" title="首页" style="height:300px" >
                <iframe frameborder="0" name="home" id="home" src="about:blank"></iframe>
            </div> 
        </div> 
</div>
<div style="display:none"></div>
<script type="text/javascript" >writeCommonDiv();</script>

</body>
</html>
