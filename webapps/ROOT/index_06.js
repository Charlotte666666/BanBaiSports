var g_allUsers=[];
var g_allDesigner=[];
var g_allBuildinfo=[];
var g_allRoleUser=[];
var g_curUser={};
var lc=[];
var g_allWorkGroup=[];
var g_allSupplier=[];
var g_allProcessInfo=[];
var loginMode="self";
var centerLon=116.405006;// 默认地图默认中心点经纬度
var centerLat=39.921806;
var defaultMapLevel=12; // 地图默认放大级别

	var indexdata = [
		{ text:'用户管理',isexpand:false,children: [
		  {url:"pages/pro06/memberManage.html", text: "用户信息管理",right:"" },
		  {url:"pages/pro06/doctorManage.html",text:"医生信息管理",right:""},
		  {url:"pages/pro06/modifyRecdManage.html",text:"医生信息变更审核",right:""},
		  {url:"pages/pro06/recommendRecdManage.html",text:"推荐奖励信息",right:""},
		  {url:"pages/pro06/luckyMoneyManage.html",text:"红包信息查询",right:""},
		  {url:"pages/pro06/hospitalManage.html",text:"医院信息管理",right:""},
		  {url:"pages/system/feedbackManage.html",text:"使用反馈信息",right:""}
		]
		},
		{ text:'诊单管理',isexpand:false,children: [
		  {url:"pages/pro06/orderManage.html",text:"订单信息管理",right:""},
		  {url:"pages/pro06/evaluateManage.html",text:"评价信息查询",right:""},
		  {url:"pages/pro06/appealInfoManage.html",text:"申诉信息审核",right:""}
		]
		},
		{ text:'财务管理',isexpand:false,children: [
		  {url:"pages/pro06/returnPayManage.html",text:"退款单管理",right:""},
		  {url:"pages/pro06/payDoctorManage.html",text:"医生打款管理",right:""}
		]
		},
		{ text: '系统管理',isexpand: false, children: [
			{ url: "pages/organization/userManage.html", text: "用户管理",right:"userManage" },
			{ url: "pages/organization/deptManage.html", text: "部门管理",right:"deptManage" },
			{ url: "pages/organization/roleManage.html", text: "角色管理",right:"rightManage" },
			{url:"pages/pro06/hospitalDeptManage.html",text:"科室信息管理",right:""},
			{ url: "pages/system/dicManage.html", text: "字典管理",right:"sys_dicManage" },
			{ url: "pages/system/parameterManage.html", text: "系统配置",right:"sys_config" },
			{ url: "pages/system/operationManage.html", text: "操作日志",right:"sys_sysOperation" }
		   ]
		}
	];

	function index_init(){
	    index_info=[{
	      sysTitle:' 斑马医生后台管理系统',
	      mainPage:'pages/pro06/main.html'
	    }];
		$("#sysTitleLogin").html("<font size='5' color='#006096'>"+index_info[0].sysTitle+"</font>");
	    $(document).attr("title",index_info[0].sysTitle);
		config_use_positon_model=false;
	}

	function login_success_init(){
	   //g_logo_html='<img src="pages/pro09/image/logo.png" style="margin:0px;padding:0px;display:inline;vertical-align:top;height:70px" />';
       g_logo_html='';

	   proInitGlobalData();
	   sendAjaxRequest("/actions/User.action?getAllUserSimpleList",[],getAllUserCallback);
	   getAllToolBookTypes();
	}

/**
 * 初始化项目个性化全局缓存数据
 */
	function proInitGlobalData(){
		//common
		g_dictionary.put("EDIT_DIC_TYPEDEPT_TYPE", new Code("DEPT_TYPE","EDIT_DIC_TYPE","部门属性","1"));
		g_dictionary.put("EDIT_DIC_TYPEFILE_TYPE", new Code("FILE_TYPE","EDIT_DIC_TYPE","文件类型","1"));
	    g_dictionary.put("EDIT_DIC_TYPESYS_POSITION", new Code("SYS_POSITION","EDIT_DIC_TYPE","岗位","1"));
		g_dictionary.put("EDIT_DIC_TYPECITY", new Code("CITY","EDIT_DIC_TYPE","城市","1"));
		g_dictionary.put("EDIT_DIC_TYPESEX", new Code("SEX","EDIT_DIC_TYPE","性别","1"));
		//g_dictionary.put("EDIT_DIC_TYPEPLACE_TYPE", new Code("PLACE_TYPE","EDIT_DIC_TYPE","公共场所类型","1"));
		//g_dictionary.put("EDIT_DIC_TYPEVISIT_TYPE", new Code("VISIT_TYPE","EDIT_DIC_TYPE","面诊方式(用户)","1"));
		//g_dictionary.put("EDIT_DIC_TYPEDOT_VISIT_TYPE", new Code("DOT_VISIT_TYPE","EDIT_DIC_TYPE","面诊方式(医生)","1"));
		g_dictionary.put("EDIT_DIC_TYPEHOSPITAL_DEPT_TYPE", new Code("HOSPITAL_DEPT_TYPE","EDIT_DIC_TYPE","科室分类","1"));
		g_dictionary.put("EDIT_DIC_TYPEJOB_LEVEL", new Code("JOB_LEVEL","EDIT_DIC_TYPE","医生职称","1"));
		g_dictionary.put("EDIT_DIC_TYPERETURN_TYPE", new Code("RETURN_TYPE","EDIT_DIC_TYPE","退款类型","1"));
		g_dictionary.put("EDIT_DIC_TYPERETURN_STATUS", new Code("RETURN_STATUS","EDIT_DIC_TYPE","退款状态","1"));
		g_dictionary.put("EDIT_DIC_TYPEDOC_STATUS", new Code("DOC_STATUS","EDIT_DIC_TYPE","医生账号状态","1"));
		g_dictionary.put("EDIT_DIC_TYPELUCKMONEY_TYPE", new Code("LUCKMONEY_TYPE","EDIT_DIC_TYPE","红包类型","1"));
		g_dictionary.put("EDIT_DIC_TYPELUCKMONEY_STATUS", new Code("LUCKMONEY_STATUS","EDIT_DIC_TYPE","红包状态","1"));
		g_dictionary.put("EDIT_DIC_TYPEORDER_STATUS", new Code("ORDER_STATUS","EDIT_DIC_TYPE","诊单状态","1"));
		g_dictionary.put("EDIT_DIC_TYPEMEMBER_STATUS", new Code("MEMBER_STATUS","EDIT_DIC_TYPE","普通用户状态","1"));
		g_dictionary.put("EDIT_DIC_TYPERECOMMEND_STATUS", new Code("RECOMMEND_STATUS","EDIT_DIC_TYPE","推荐奖励状态","1"));
		g_dictionary.put("EDIT_DIC_TYPEPAY_STATUS", new Code("PAY_STATUS","EDIT_DIC_TYPE","付款状态","1"));
		g_dictionary.put("EDIT_DIC_TYPECHECK_STATUS", new Code("CHECK_STATUS","EDIT_DIC_TYPE","审核状态","1"));
		g_dictionary.put("EDIT_DIC_TYPEEDUCATION", new Code("EDUCATION","EDIT_DIC_TYPE","学历","1"));
		g_dictionary.put("EDIT_DIC_TYPEMODIFY_COLUMN", new Code("MODIFY_COLUMN","EDIT_DIC_TYPE","修改字段类型","1"));
	}

	function getUserNameByCode(code){
		if ( g_allUsers == null ) return code;
		for ( var i=0;i<g_allUsers.length;i++ ) {
		  if ( g_allUsers[i].userCode == code ) return g_allUsers[i].userName;
		}
		return code;
	}
 
	function getAllUserCallback(obj){
		try{
		  g_allUsers=obj.aaData;
		  sendAjaxRequest("/actions/Role.action?getAllRoleUserSimpleList",[],getAllRoleUserCallback);
		}catch(e){
		}
	}
 
	function getAllRoleUserCallback(obj){
		try{
		  g_allRoleUser=obj.aaData;
		  for(var i=0;i<g_allRoleUser.length;i++){
			g_allRoleUser[i].userName=getUserNameByCode( g_allRoleUser[i].userCode );
		  }
		  loadMainPage();
		}catch(e){
		}
	}
 
	function getAllUserSelect(sid,initUserCode){
		if ( !initUserCode ) initUserCode="";
		var ht="<select id='"+sid+"' style='width:120px'>";
		ht+="<option value=''></option>";
		for(var i=0;i<g_allUsers.length;i++){
		  ht+="<option value='"+g_allUsers[i].userCode+"'";
		  if ( g_allUsers[i].userCode == initUserCode ) ht+="selected ";
		  ht+=">"+g_allUsers[i].userName+"</option>";
		}
		ht+="</select>";
		return ht;
	}
	 // rid:角色ID   sid:生成select语句的对象ID  isHasEmpty：是否有空选项
	function getUserListByRole(rid,sid,isHasEmpty,ww){
		if ( !ww ) ww="120px";
		var ht="<select id='"+sid+"' style='width:"+ww+"'>";
		if ( isHasEmpty ) ht+="<option value=''></option>";
		for(var i=0;i<g_allRoleUser.length;i++){
		  if ( g_allRoleUser[i].roleId == rid ){
			ht+="<option value='"+g_allRoleUser[i].userCode+"'>"+g_allRoleUser[i].userName+"</option>";
		  }
		}
		ht+="</select>";
		return ht;
	}
 
	function isCanPreview(fileName){
    if ( !fileName ) return false;
    var endWiths="jpg|png|gif|jpeg|bmp|swf|jpeg2000|svg|tgA|eps|fli|flc|emf|wmf|dxf|pcx";

	var ews=endWiths.split("|");
	fileName=fileName.toLocaleLowerCase();
	for (var i=0;i<ews.length;i++ ) {
	  if (endWith(fileName,"."+ews[i])) return true;
	}
	 return false;
 }
	function endWith(str1,str2){
	if(!str1) return false;
	if(!str2) return true;
	for(var i=0;i<str2.length;i++){
		if(str1.substring(str1.length-str2.length)==str2)
		return true;
	 }
	return false;
 }
 
	function getAllToolBookTypes(){
	  top.sendAjaxRequest("/actions/ToolBook.action?getToolTypeList",[],getAllToolBookTypesCallback);
	}
	function getAllToolBookTypesCallback(obj){
		try{
		  allToolBookTypesList=obj.aaData;
		}catch(e){
		}
	}
	function getAllToolBookTypesSelect(sid,init_type_code){
        if ( !allToolBookTypesList ) return "";
		if ( !init_type_code ) init_type_code="";
		var ht="<select id='"+sid+"' style='width:120px'>";
		ht+="<option value=''></option>";
		for(var i=0;i<allToolBookTypesList.length;i++){
		  ht+="<option value='"+allToolBookTypesList[i].init_type_code+"'";
		  if ( allToolBookTypesList[i].type_id == init_type_code ) ht+="selected ";
		  ht+=">"+allToolBookTypesList[i].type_name+"</option>";
		}
		ht+="</select>";
		return ht;
	}

	function getToolBookTypeNameById(typeId){
		for(var i=0;i<allToolBookTypesList.length;i++){
			  if( allToolBookTypesList[i].type_id == typeId ) {
				return allToolBookTypesList[i].type_name;
			  }
		}
		return "";
	}
 
	function getToolBookTypeById(typeId){
		for(var i=0;i<allToolBookTypesList.length;i++){
			if( allToolBookTypesList[i].type_id == typeId ) {
				return allToolBookTypesList[i];
			}
		}
		return null;
	}
 
	//得到用户角色 custManager  designer designerLeader engineer_manager store_manager project_manager
	function getUserRole(){
		var nowUser=getCurrentUser();
		var nowUserCode=nowUser.userCode;
		var roles='';
		for(var i=0;i<g_allRoleUser.length;i++){
		  if ( g_allRoleUser[i].userCode == nowUserCode ){
			if(roles!=''){
				roles=roles+','+g_allRoleUser[i].roleId;
			}else{
				roles=roles+','+g_allRoleUser[i].roleId;
			}
		  }
		}
		return roles;
	}
	
	//获取当前日期
	function getCurrentDate(){
		var d = new Date();
		var month=d.getMonth()+1;
		var day=d.getDate();
		var str = '';
		str += d.getFullYear()+'-';
		if(month>9){
		  str += month+'-';
		}else{
		  str+='0'+month+'-';
		}
		if(day>9){
		  str += day;
		}else{
		  str +='0'+day;
		}
		return str;
	}
	
 function getCenterLon(){
    return centerLon;
 }

 function getCenterLat(){
    return centerLat;
 }
 
 function getDefaultMapLevel(){
    return defaultMapLevel;
 }
