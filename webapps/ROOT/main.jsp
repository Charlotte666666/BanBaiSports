<%@ page import="com.helpyouworkeasy.Configure"  %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>管理系统</title>
	<link href="css/login_css.css" rel="stylesheet" type="text/css">
    <link href="lib/ligerUI/skins/Aqua/css/ligerui-all.css" rel="stylesheet" type="text/css" />  
    <link rel="stylesheet" type="text/css" id="mylink"/>
	<link href="css/redmond/jquery.ui.all.css" rel="stylesheet" type="text/css">
	<script type="text/javascript" src="js/jquery-1.6.2.min.js"></script>
    <script src="lib/ligerUI/js/ligerui.all.js" type="text/javascript"></script> 
    <script src="lib/ligerUI/js/plugins/ligerTab.js"></script>
    <script src="lib/jquery.cookie.js"></script>
    <script src="lib/json2.js"></script>
	

<script type="text/javascript" src="js/SimpleMap.js"></script>
<script type="text/javascript" src="js/helpyouworkeasy-core.js"></script>
<script type="text/javascript" src="js/md5.js"></script>
<script type="text/javascript" src="js/jquery-ui-1.8.16.custom.min.js"></script>
<script src="<%= Configure.getParameter("SYS_INDEX_JS") %>" type="text/javascript"></script>

	
<script type="text/javascript">
var userConfig = null;
var tab = null;
var accordion = null;
var tree = null;
var tabItems = [];

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
   $("#sysTitleLogin").html("<font size='5' color='#006096'><b>"+index_info[0].sysTitle+"</b></font>");
   $(document).attr("title",index_info[0].sysTitle);
   $('#loginMain').height($(window).height() - 51);
});

function f_heightChanged(options){  
  if (tab) tab.addHeight(options.diff);
  if (accordion && options.middleHeight - 24 > 0) accordion.setHeight(options.middleHeight - 24);
}
			
function f_addTab(tabid, text, url) {
                tab.addTabItem({
                    tabid: tabid,
                    text: text,
                    url: url,
                    callback: function ()
                    {
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
                /** var tabJson = $.cookie('liger-home-tab'); 
                if (tabJson)
                { 
                    var tabitems = JSON2.parse(tabJson);
                    for (var i = 0; tabitems && tabitems[i];i++)
                    { 
                        f_addTab(tabitems[i].tabid, tabitems[i].text, tabitems[i].url);
                    } 
                } */
}
function saveTabStatus() { 
                $.cookie('liger-home-tab', JSON2.stringify(tabItems));
}
function css_init() {
                var css = $("#mylink").get(0), skin = getQueryString("skin");
                $("#skinSelect").val(skin);
                $("#skinSelect").change(function ()
                { 
                    if (this.value)
                    {
                        location.href = "index.html?skin=" + this.value;
                    } else
                    {
                        location.href = "index.html";
                    }
                });

               
                if (!css || !skin) return;
                skin = skin.toLowerCase();
                $('body').addClass("body-" + skin); 
                $(css).attr("href", skin_links[skin]); 
}
function getQueryString(name) {
                var now_url = document.location.search.slice(1), q_array = now_url.split('&');
                for (var i = 0; i < q_array.length; i++)
                {
                    var v_array = q_array[i].split('=');
                    if (v_array[0] == name)
                    {
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
                for (var i = 0; links[i]; i++)
                {
                    var href = $(links[i]).attr("href");
                    if (href && href.toLowerCase().indexOf("ligerui") > 0)
                    {
                        return href.substring(0, href.toLowerCase().indexOf("lib") );
                    }
                }
}
			
			
// 自定义的函数
function loginSuccess(){
    $('#loginDiv').hide();
	$('#pageloading').hide();
	$('#topmenu').show();
	$('#layout1').show();

     //布局
                $("#layout1").ligerLayout({ leftWidth: 190, height: '100%',heightDiff:-3,space:3, onHeightChanged: f_heightChanged });

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
				  index_init();
				}catch(e){}


    try{
	  login_success_init();
	}catch(e){}

	$("#userPass").val("");
	$('#loginResult').html("");
    $("#sysTitle").html("<font size='4' color='#ffffff'><b>"+index_info[0].sysTitle+"</b></font>");
	$("#home").attr("src",index_info[0].mainPage);
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
	$('#loginDiv').show();
	$('#pageloading').hide();
	$('#topmenu').hide();
	$('#layout1').hide();
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
	   sendAjaxRequest("/actions/User.action?signon",aoData,loginCallback);
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

</script> 
<style type="text/css"> 
    body,html{height:100%;}
    body{ padding:0px; margin:0;   overflow:hidden;}  
    .l-link{ display:block; height:26px; line-height:26px; padding-left:10px; text-decoration:underline; color:#333;}
    .l-link2{text-decoration:underline; color:white; margin-left:2px;margin-right:2px;}
    .l-layout-top{background:#102A49; color:White;}
    .l-layout-bottom{ background:#E5EDEF; text-align:center;}
    #pageloading{position:absolute; left:0px; top:0px; background:white url('loading.gif') no-repeat center; width:100%; height:100%;z-index:99999;}
    .l-link{ display:block; line-height:22px; height:22px; padding-left:16px;border:1px solid white; margin:4px;}
    .l-link-over{ background:#FFEEAC; border:1px solid #DB9F00;} 
    .l-winbar{ background:#2B5A76; height:30px; position:absolute; left:0px; bottom:0px; width:100%; z-index:99999;}
    .space{ color:#E7E7E7;}
    /* 顶部 */ 
    .l-topmenu{ margin:0; padding:0; height:31px; line-height:31px; background:url('lib/images/top.jpg') repeat-x bottom;  position:relative; border-top:1px solid #1D438B;  }
    .l-topmenu-logo{ color:#E7E7E7; padding-left:10px; line-height:26px;}
    .l-topmenu-welcome{  position:absolute; height:24px; line-height:24px;  right:30px; top:2px;color:#070A0C;}
    .l-topmenu-welcome a{ color:#E7E7E7; text-decoration:underline} 
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
 </style>
</head>
<body style="padding:0px;background:#EAEEF5;">
 <div id="loginDiv" style="width:100%;height:100%;background-image:url(img/bg1_home2.jpg)">
	<div id="loginTop"></div>
	<div id="loginClear" class="clear"></div>
	<div id="loginMain">
	  <div class="ind_logo" style="padding-top: 75px;padding-left: 85px;"><img src="img/logo32.png" ></div>
	  <div class="ind_info" style="margin-top: 20px;background-image: url(img/bg1_info_none.png);">
	    <ul style="padding-top: 20px;padding-left: 75px;"><li id="sysTitleLogin">
	      <font size="5" color="#006096"><b>管理系统</b></font>
		</li>
		</ul>
		<ul class="user_1" style="padding: 10px 0px 0px 60px;">
		  <li class="u1_1"><img src="img/pic1_user.png" width="29" height="35"></li>
		  <li class="u1_2">账&nbsp;&nbsp;号：</li>
		  <li class="u1_3">
			<input type="text" name="textfield" id="userCode" style="width:160px;" onkeydown="if(event.keyCode==13) doLogin();" >
		  </li>
		</ul><div class="clear"></div>
		<ul class="user_2" style="padding: 0px 0px 0px 60px;">
		  <li class="u2_1"><img src="img/pic_1user2.png" width="24" height="30"></li>
		  <li class="u2_2">密&nbsp;&nbsp;码：</li>
		  <li class="u2_3"> 
			<input type="password" name="textfield" id="userPass" style="width:160px;" onkeydown="if(event.keyCode==13) doLogin();" >
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
    <div class="l-topmenu-logo" id="sysTitle">管理系统</div>
    <div class="l-topmenu-welcome">
        <label>界面风格：</label>
        <select id="skinSelect">
            <option value="aqua">默认</option> 
            <option value="silvery">银色</option>
            <option value="gray">灰色</option>
            <option value="gray2014">淡蓝</option>
        </select>
        <font color="white"><span  id="currentUserInfo">当前用户：系统管理员</span></font>
        <span class="space">|</span>
        <a href="javascript:g_changepass()" class="l-link2">修改密码</a> 
        <span class="space">|</span>
         <a href="javascript:isLogout()" class="l-link2">退出</a>
    </div>
</div>
<div id="layout1" style="width:99.2%; margin:0 auto; margin-top:4px; display:none"> 
        <div position="left"  title="功能菜单" id="accordion1"> 
                     <div title="业务系统" class="l-scroll">
                         <ul id="tree1" style="margin-top:3px;">
                    </div>
                    <div title="系统管理">
                    <div style=" height:7px;"></div>
                        <a class="l-link" href="javascript:f_addTab('userManage','用户管理','pages/organization/userManage.html')">用户管理</a> 
                        <a class="l-link" href="javascript:f_addTab('deptManage','部门管理','pages/organization/deptManage.html')">部门管理</a> 
                        <a class="l-link" href="javascript:f_addTab('roleManage','角色管理','pages/organization/roleManage.html')">角色管理</a>
						<a class="l-link" href="javascript:f_addTab('dicManage','字典管理','pages/system/dicManage.html')">字典管理</a> 
						<a class="l-link" href="javascript:f_addTab('systemConfig','系统配置','pages/system/parameterManage.html')">系统配置</a> 
						<a class="l-link" href="javascript:f_addTab('systemLog','操作日志','pages/system/operationManage.html')">操作日志</a> 
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
