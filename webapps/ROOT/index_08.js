var g_allUsers=[];
var g_allProject=[];
var allToolBookTypesList=[];
var isLoadedPathMap=false;
var centerLon=127.534221;// 默认地图默认中心点经纬度
var centerLat=50.25086;
var defaultMapLevel=12; // 地图默认放大级别
var allAreaList=[];

var loginMode="index_login8.html";

var indexdata = [
    { text: '人员管理',isexpand:false, children: [ 
		{url:"pages/pro08/delegateManage.html",text:"委托调查",right:"08_correct_manage_menu_01"},
		{url:"pages/pro08/CorrectionUserManage.html",text:"服刑人员信息",right:"08_correct_manage_menu_02"},
		{url:"pages/pro08/reportInfo.html",text:"每月评估报告",right:"08_correct_manage_menu_03"},
		{url:"pages/pro08/chartAnalysis.html",text:"数据图形分析",right:"08_correct_manage_menu_04"}
	  ]
    },
	{ text: '报表统计',isexpand:false, children: [ 
	    { url: "pages/pro08/monthInfoCountEntry.html", text: "月报表录入",right:"08_table_count_menu_01" },
		{ url: "pages/pro08/monthInfoCount.html", text: "月报表统计",right:"08_table_count_menu_02" },
		{ url: "pages/pro08/monthInfoCountQuery.html", text: "月报表查询",right:"08_table_count_menu_03" },
		{ url: "pages/pro08/quarterInfoCountEntry.html", text: "季报表录入",right:"08_table_count_menu_04" },
		{ url: "pages/pro08/quarterInfoCount.html", text: "季报表统计",right:"08_table_count_menu_05" },
		{ url: "pages/pro08/quarterInfoCountQuery.html", text: "季报表查询",right:"08_table_count_menu_06" }
	  ]
    },
	{ text: '定位监控',isexpand:false, children: [ 
	    { url: "pages/pro08/pathManage.html", text: "个人定位跟踪",right:"08_location_manage_menu_01" },
		{ url: "pages/pro08/pathGroupManage.html", text: "部门定位跟踪",right:"08_location_manage_menu_02" },
	    { url: "pages/pro08/pathQuery.html", text: "轨迹列表查询",right:"08_location_manage_menu_03" },
		{ url: "pages/pro08/alarmManage.html", text: "报警信息查询",right:"08_location_manage_menu_04" },
	    { url: "pages/pro08/forbiddenAreaManage.html", text: "禁区信息管理",right:"08_location_manage_menu_05" },
		/**{ url: "pages/pro08/checkInManage.html", text: "签到信息查询",right:"08_location_manage_menu_06" },
		{ url: "pages/pro08/locationManage.html", text: "签到地点管理",right:"08_location_manage_menu_07" },*/
		{url:"pages/pro08/AreaManage.html",text:"活动范围管理",right:"08_correct_manage_menu_05"}
	  ]
    },
    { text: '日常管理',isexpand:false, children: [ 
	    { url: "pages/pro08/specialInfo.html", text: "进入特定区域",right:"08_daily_manage_menu_01" },
		{ url: "pages/pro08/addressInfo.html", text: "居住地变更",right:"08_daily_manage_menu_02" },
	    { url: "pages/pro08/holidayInfoManage.html", text: "外出申请管理",right:"08_daily_manage_menu_03" },
		{ url: "pages/pro08/workGroupManage.html", text: "工作队伍管理",right:"08_daily_manage_menu_04" },
	   	{ url: "pages/oa/noticeManage.html", text: "通知公告管理",right:"08_daily_manage_menu_05" },
		{ url: "pages/oa/noticeQuery.html", text: "我的通知",right:"" },
		{ url: "pages/oa/tooltypeManage.html", text: "工具书管理",right:"08_daily_manage_menu_07" },
		{ url: "pages/oa/queryToolBookManage.html", text: "工具书查询",right:"08_daily_manage_menu_08" }
		]
    },
	{ text: '系统管理',isexpand: false, children: [
			{ url: "pages/organization/userManage.html", text: "用户管理",right:"userManage" },
			{ url: "pages/organization/deptManage.html", text: "部门管理",right:"deptManage" },
			{ url: "pages/organization/roleManage.html", text: "角色管理",right:"rightManage" },
			{ url: "pages/system/dicManage.html", text: "字典管理",right:"sys_dicManage" },
			{ url: "pages/system/parameterManage.html", text: "系统配置",right:"sys_config" },
			{ url: "pages/system/operationManage.html", text: "操作日志",right:"sys_sysOperation" }
		]
	}
];

function index_init(){
   index_info=[{
     sysTitle:'社区矫正工作数字化管理系统',
     mainPage:'pages/pro08/main.html'
   }];
}

function login_success_init(){
   getAllArea();
   getAllToolBookTypes();
   sendAjaxRequest("/actions/User.action?getAllUserSimpleList",[],getAllUserCallback,true);
}

/**
 * 初始化项目个性化全局缓存数据
 */
function proInitGlobalData(){
   g_dictionary.put("EDIT_DIC_TYPEFILE_TYPE", new Code("FILE_TYPE","EDIT_DIC_TYPE","文件类型","1"));
    g_dictionary.put("EDIT_DIC_TYPECORRECT_STATUS", new Code("CORRECT_STATUS","EDIT_DIC_TYPE","矫正状态","1"));
	g_dictionary.put("EDIT_DIC_TYPECRIMINAL_TYPE", new Code("CRIMINAL_TYPE","EDIT_DIC_TYPE","犯罪类型","1"));
	g_dictionary.put("EDIT_DIC_TYPESTRATEGY_TYPE", new Code("STRATEGY_TYPE","EDIT_DIC_TYPE","方案类型","1"));
	g_dictionary.put("EDIT_DIC_TYPESTOP_TYPE", new Code("STOP_TYPE","EDIT_DIC_TYPE","解除终止类型","1"));
	g_dictionary.put("EDIT_DIC_TYPEPRISON_EXECUTION", new Code("PRISON_EXECUTION","EDIT_DIC_TYPE","收监执行","1"));
	g_dictionary.put("EDIT_DIC_TYPEDEAD_TYPE", new Code("DEAD_TYPE","EDIT_DIC_TYPE","死亡","1"));
	g_dictionary.put("EDIT_DIC_TYPESTRATEGY_STATUS", new Code("STRATEGY_STATUS","EDIT_DIC_TYPE","方案状态","1"));
    g_dictionary.put("EDIT_DIC_TYPECORRECT_TYPE", new Code("CORRECT_TYPE","EDIT_DIC_TYPE","矫正管理等级","1"));
	g_dictionary.put("EDIT_DIC_TYPECORRECT_CATEGORY", new Code("CORRECT_CATEGORY","EDIT_DIC_TYPE","矫正类别","1"));
	g_dictionary.put("EDIT_DIC_TYPEREGISTRATION_NATURE", new Code("REGISTRATION_NATURE","EDIT_DIC_TYPE","户籍性质","1"));
	g_dictionary.put("EDIT_DIC_TYPENATIONAL", new Code("NATIONAL","EDIT_DIC_TYPE","民族","1"));
	g_dictionary.put("EDIT_DIC_TYPEHEALTH", new Code("HEALTH","EDIT_DIC_TYPE","健康状态","1"));
	g_dictionary.put("EDIT_DIC_TYPEEDUCATION", new Code("EDUCATION","EDIT_DIC_TYPE","文化程度","1"));
	g_dictionary.put("EDIT_DIC_TYPEPOLITICAL_STATUS", new Code("POLITICAL_STATUS","EDIT_DIC_TYPE","政治面貌","1"));
	g_dictionary.put("EDIT_DIC_TYPEMARITAL_STATUS", new Code("MARITAL_STATUS","EDIT_DIC_TYPE","婚姻状态","1"));
	g_dictionary.put("EDIT_DIC_TYPEFORBIDDEN_TYPE", new Code("FORBIDDEN_TYPE","EDIT_DIC_TYPE","禁区类型","1"));
	g_dictionary.put("EDIT_DIC_TYPECHECK_TYPE", new Code("CHECK_TYPE","EDIT_DIC_TYPE","审批类型","1"));
	g_dictionary.put("EDIT_DIC_TYPCHECK_STATUS", new Code("CHECK_STATUS","EDIT_DIC_TYPE","审批状态","1"));
	g_dictionary.put("EDIT_DIC_TYPALARM_TYPE", new Code("ALARM_TYPE","EDIT_DIC_TYPE","报警类型","1"));
	g_dictionary.put("EDIT_DIC_TYPEHOLIDAY_TYPE", new Code("HOLIDAY_TYPE","EDIT_DIC_TYPE","请假类型","1"));
	g_dictionary.put("EDIT_DIC_TYPEDELEGATE_STATUS", new Code("DELEGATE_STATUS","EDIT_DIC_TYPE","委托函状态","1"));
	g_dictionary.put("EDIT_DIC_TYPEDELEGATE_ASSESSMENT", new Code("DELEGATE_ASSESSMENT","EDIT_DIC_TYPE","委托调查评估意见","1"));
    g_dictionary.put("EDIT_DIC_TYPETOTAL_OPINION", new Code("TOTAL_OPINION","EDIT_DIC_TYPE","调查评估小组的评估意见","1"));
	g_dictionary.put("EDIT_DIC_TYPECONTROL_METHOD", new Code("CONTROL_METHOD","EDIT_DIC_TYPE","适用管型","1"));
	g_dictionary.put("EDIT_DIC_TYPEACCUSED_PERSON", new Code("ACCUSED_PERSON","EDIT_DIC_TYPE","被告人","1"));
	g_dictionary.put("EDIT_DIC_TYPEAPPLY_ADDRCHANGE_RESULT", new Code("APPLY_ADDRCHANGE_RESULT","EDIT_DIC_TYPE","审批结果","1"));
	g_dictionary.put("EDIT_DIC_TYPECALLBACK_STATUS", new Code("CALLBACK_STATUS","EDIT_DIC_TYPE","回复状态","1"));
	g_dictionary.put("EDIT_DIC_TYPEJOB_TYPE", new Code("JOB_TYPE","EDIT_DIC_TYPE","就学就业","1"));
	g_dictionary.put("EDIT_DIC_TYPEWORKER_STATUS", new Code("WORKER_STATUS","EDIT_DIC_TYPE","工作人员状态","1"));
	g_dictionary.put("EDIT_DIC_TYPEWORKER_TYPE", new Code("WORKER_TYPE","EDIT_DIC_TYPE","工作人员类别","1"));
	g_dictionary.put("EDIT_DIC_TYPEINFO_TYPE", new Code("INFO_TYPE","EDIT_DIC_TYPE","报表类型","1"));
	g_dictionary.put("EDIT_DIC_TYPEINFO_STATUS", new Code("INFO_STATUS","EDIT_DIC_TYPE","报表状态","1"));
	g_dictionary.put("EDIT_DIC_TYPENOTICE_STATUS", new Code("NOTICE_STATUS","EDIT_DIC_TYPE","通知公告状态","1"));
	g_dictionary.put("EDIT_DIC_TYPENOTICE_TYPE", new Code("NOTICE_TYPE","EDIT_DIC_TYPE","通知类型","1"));
	g_dictionary.put("EDIT_DIC_TYPENOTICE_EMERGENCY", new Code("NOTICE_EMERGENCY","EDIT_DIC_TYPE","通知紧急程度","1"));
	g_dictionary.put("EDIT_DIC_TYPEPATH_STATUS", new Code("PATH_STATUS","EDIT_DIC_TYPE","轨迹状态","1"));
	g_dictionary.put("EDIT_DIC_TYPEISYESORNO", new Code("ISYESORNO","EDIT_DIC_TYPE","是否","1"));
	
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
	  loadMainPage();
	}catch(e){
	}
 }
 
 function getAllRoleUserCallback(obj){
    try{
	  g_allRoleUser=obj.aaData;
	  for(var i=0;i<g_allRoleUser.length;i++){
	    g_allRoleUser[i].userName=getUserNameByCode( g_allRoleUser[i].userCode );
	  }
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
  function getUserListByRole(rid,sid,isHasEmpty){
    var ht="<select id='"+sid+"' style='width:120px'>";
	if ( isHasEmpty ) ht+="<option value=''></option>";
    for(var i=0;i<g_allRoleUser.length;i++){
	  if ( g_allRoleUser[i].roleId == rid ){
	    ht+="<option value='"+g_allRoleUser[i].userCode+"'>"+g_allRoleUser[i].userName+"</option>";
	  }
	}
	ht+="</select>";
	return ht;
 }
 
  function getAllProjectCallback(obj){
    try{
	  g_allProject=obj.aaData;
	}catch(e){
	}
 }
 
  function getAllProjectSelect(sid,initCode){
    if ( !initCode ) initCode="";
	var ht="<select id='"+sid+"' style='width:120px'>";
	ht+="<option value=''></option>";
    for(var i=0;i<g_allProject.length;i++){
	  ht+="<option value='"+g_allProject[i].project_code+"'";
	  if ( g_allProject[i].project_code == initCode ) ht+="selected ";
	  ht+=">"+g_allProject[i].project_name+"</option>";
	}
	ht+="</select>";
	return ht;
 }
 
 function getProjectNameByCode(code){
    if ( g_allProject == null ) return code;
	for ( var i=0;i<g_allProject.length;i++ ) {
	  if ( g_allProject[i].project_code == code ) return g_allProject[i].project_name;
	}
	return code;
}
 
 function getAllRoleUserCallback(obj){
    try{
	  g_allRoleUser=obj.aaData;
	  for(var i=0;i<g_allRoleUser.length;i++){
	    g_allRoleUser[i].userName=getUserNameByCode( g_allRoleUser[i].userCode );
	  }
	}catch(e){
	}
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
 
 // 获取所有活动范围
  function getAllArea(){
	  top.sendAjaxRequest("/actions/ProMonitor.action?getProAreaInfoList",[],getAllAreaCallback);
 }
	 
 function getAllAreaCallback(obj){
	try{
	  allAreaList=obj.aaData;
	}catch(e){
	}
 }
 function getAllAreaSelect(sid,init_area_code){
        if ( !allAreaList ) return "";
		if ( !init_area_code ) init_area_code="";
		var ht="<select id='"+sid+"' style='width:120px'>";
		ht+="<option value=''></option>";
		for(var i=0;i<allAreaList.length;i++){
		  ht+="<option value='"+allAreaList[i].id+"'";
		  if ( allAreaList[i].id == init_area_code ) ht+="selected ";
		  ht+=">"+allAreaList[i].area_name+"</option>";
		}
		ht+="</select>";
		return ht;
 }
 function getAreaName(init_area_code){
  for(var i=0;i<allAreaList.length;i++){
      if(allAreaList[i].id==init_area_code){
	  return allAreaList[i].area_name;
	  }
  }
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
 
 
function openUserConfig(){
  var xurl="pages/system/userConfig.html";
  openDialog("个人设置",xurl,true,350,320,null);
}

// 显示审核对象的明细
function viewCheckInfo(checkType, applyId, apply_user){
  if ( checkType == 1 || checkType == 4 || checkType == 3 ) {
    var xurl="pages/pro08/CorrectionUserInfo.html?optType=update&infoId="+applyId;
	//top.openDialog("矫正人员信息",xurl,true,1100,620,null);
	top.toSysTab('服刑人员详细信息',xurl,'21');
  } else if ( checkType == 2 ) {
    var xurl="pages/pro08/CorrectionUserInfo.html?optType=update&infoId="+apply_user;
	//top.openDialog("矫正人员信息",xurl,true,1100,620,null);
	top.toSysTab('服刑人员详细信息',xurl,'21');
  }
}

// 执行审核操作，更新审核对象状态
function doApproveCheck(optType, applyId, status, ext_info, doApproveSubmit){
  if ( optType == "1" ) { // 添加矫正人员申请
    var aoData=[];
	aoData.push( { "name": "info.user_code", "value": applyId } );
	if ( status == 1 ) {
	  status=2;// 状态改为等待矫正执行
	} else if ( status == 2 ) {
	  status=0;// 返回新建状态
	}
	aoData.push( { "name": "info.status", "value": status} );
	top.sendAjaxRequest("/actions/Prison.action?updateCorrectionUserStatus",aoData,doApproveSubmit);
  } else if ( optType == "2" ) { // 请假审批
    var aoData=[];
	aoData.push( { "name": "holiday.id", "value": applyId } );
	aoData.push( { "name": "holiday.status", "value": status} );
	top.sendAjaxRequest("/actions/Prison.action?updateProHoliday",aoData,doApproveSubmit);
  } else if ( optType == "3" ) { // 级别调整审批
    var aoData=[];
	aoData.push( { "name": "prison.prison_code", "value": applyId } );
	aoData.push( { "name": "prison.correct_type", "value": ext_info} );
	top.sendAjaxRequest("/actions/Prison.action?updatePrisonInfoLevel",aoData,doApproveSubmit);
  } else if ( optType == "4" ) { // 解除终止审批
    var aoData=[];
	aoData.push( { "name": "info.user_code", "value": applyId } );
	if ( status == 1 ) {
	  status=5;// 状态改为解除终止
	} else if ( status == 2 ) {
	  status=3;// 返回矫正执行状态
	}
	aoData.push( { "name": "info.status", "value": status} );
	top.sendAjaxRequest("/actions/Prison.action?updateCorrectionUserStatus",aoData,doApproveSubmit);
  }
}
 function register(){
    var xurl="pages/organization/userInfo.html?opt=register";
	top.openDialog("用户注册",xurl,true,400,400,null);
 }
 
 function getPrintSysTitle(){
    return "黑河市";
 }