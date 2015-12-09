var g_allUsers=[];
var g_allProject=[];
var allToolBookTypesList=[];
var g_allFlows=[];
var g_allPositionLevel=[];

var loginMode="self";

var indexdata = [
    { text: '项目管理',isexpand:false, children: [ 
		{url:"pages/oa/projectManage.html",text:"项目信息管理",right:"projectManage"},
		{url:"pages/oa/projectTaskManage.html",text:"项目任务管理",right:"projectTaskManage"},
		{url:"pages/oa/projectTableManage.html",text:"数据表管理",right:"projectTableManage"},
		{url:"pages/bug/bugManage.html",text:"Bug管理",right:"projectBugManage"},
		{url:"pages/system/sql.html",text:"SQL",right:"sys_sysOperation"}
	  ]
    },
	{ text: '工作流引擎',isexpand:false, children: [ 
	    { url: "pages/oa/flowManage.html", text: "流程管理",right:"userManage" },
		{ url: "pages/oa/templateManage.html", text: "表单管理",right:"userManage" },
		{ url: "pages/oa/flowRuleManage.html", text: "自定义逻辑",right:"userManage" },
		{ url: "pages/oa/flowTaskManage.html", text: "任务管理",right:"userManage" },
		{ url: "pages/oa/flowMyTaskQuery.html", text: "我的任务",right:"userManage" },
		{ url: "pages/oa/flowOrderStatistics.html", text: "任务统计",right:"userManage" },
		{ url: "pages/oa/flowTaskAlarm.html", text: "任务报警",right:"userManage" },
		{ url: "pages/oa/flowInstanceManage.html", text: "流程实例查询",right:"userManage" }
	  ]
    },
	{ text: '通知公告',isexpand:false, children: [ 
	    { url: "pages/oa/noticeManage.html", text: "通知公告管理",right:"userManage" },
		{ url: "pages/oa/noticeQuery.html", text: "我的通知",right:"userManage" }
	  ]
    },
    { text: '知识库', isexpand: false, children: [
		{ url: "pages/oa/tooltypeManage.html", text: "知识库管理",right:"userManage" },
		{ url: "pages/oa/queryToolBookManage.html", text: "知识库查询",right:"userManage" }
	  ]
    },
	{ text:'积分管理',isexpand:false,children:[
		    { url: "pages/oa/integrationRuleManage.html",text: "积分规则管理",right: "oa_jifen_menu_1" },
		    { url: "pages/oa/integrationRightManage.html",text: "积分权限管理",right: "oa_jifen_menu_2" },
		    { url: "pages/oa/integrationEnterManage.html",text: "积分录入",right: "oa_jifen_menu_3" },
		    { url: "pages/oa/personalIntegrationQuery.html",text: "个人积分查询",right: "oa_jifen_menu_4" },
		    { url: "pages/oa/integrationSummary.html",text: "积分汇总",right: "oa_jifen_menu_5" }
	]},
	{ text:'日常管理',isexpand:false,children:[
		    { url: "pages/oa/disciplineManage.html",text: "违纪处理管理",right: "oa_discipline_manage" },
		    { url: "pages/oa/evectionManage.html",text: "出差管理",right: "oa_evection_manage" },
		    { url: "pages/oa/personalEvection.html",text: "出差申请",right: "oa_evection_apply" }
	]},
	{ text:'人事管理',isexpand:false,children:[
		    { url: "pages/oa/personalDaily.html",text: "人事日报",right: "oa_personal_daily" },
		    { url: "pages/oa/dimissionManage.html",text: "离职管理",right: "oa_dimission_manage" },
		    { url: "pages/oa/staffTransferManage.html",text: "岗位调动管理",right: "oa_staff_transfer" },
		    { url: "pages/oa/staffLevelTransferManage.html",text: "级别调整管理",right: "oa_staff_level_transfer" }
	]},
	{ text:'招聘管理',isexpand:false,children:[
	        { url: "pages/oa/stationManage.html",text: "岗位管理",right: "oa_station_manage" },
			{ url: "pages/oa/resumeManage.html",text: "简历管理",right: "oa_resume_manage" }
	]}, 
	{ text:'绩效管理',isexpand:false,children:[
	        { url: "pages/oa/performenceApply.html",text: "绩效申请",right: "oa_performanceApply" },
			{ url: "pages/oa/performenceGrade.html",text: "绩效评分",right: "oa_performance_grade" },
			{ url: "pages/oa/resumeManage.html",text: "绩效查看",right: "oa_performance_query" }
	]}, 
	{ text: '系统管理',isexpand: false, children: [
			{ url: "pages/organization/oaUserManage.html", text: "用户管理",right:"userManage" },
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
	      sysTitle:'慧动工单管理系统',
	      mainPage:'pages/oa/main.html'
    }];
}

function login_success_init(){
   proInitGlobalData();
   sendAjaxRequest("/actions/User.action?getAllUserSimpleList",[],getAllUserCallback);
   sendAjaxRequest("/actions/OAProject.action?getAllProjectSimpleList",[],getAllProjectCallback);
   getAllToolBookTypes();
   getAllFlowsList();
   getAllRole();
}

/**
 * 初始化项目个性化全局缓存数据
 */
function proInitGlobalData(){
	g_dictionary.put("EDIT_DIC_TYPEBELONG_AREA", new Code("BELONG_AREA","EDIT_DIC_TYPE","所属区域","1"));
	g_dictionary.put("EDIT_DIC_TYPESEX", new Code("SEX","EDIT_DIC_TYPE","性别","1"));
    g_dictionary.put("EDIT_DIC_TYPENOTICE_TYPE", new Code("NOTICE_TYPE","EDIT_DIC_TYPE","通知类型","1"));
    g_dictionary.put("EDIT_DIC_TYPENOTICE_EMERGENCY", new Code("NOTICE_EMERGENCY","EDIT_DIC_TYPE","通知紧急程度","1"));
    g_dictionary.put("EDIT_DIC_TYPEOA_PROJECT_STATUS", new Code("OA_PROJECT_STATUS","EDIT_DIC_TYPE","项目状态","1"));
	g_dictionary.put("EDIT_DIC_TYPEOA_PROJECT_TASK_STATUS", new Code("OA_PROJECT_TASK_STATUS","EDIT_DIC_TYPE","项目任务状态","1"));
	g_dictionary.put("EDIT_DIC_TYPEOA_PROJECT_TASK_EMG", new Code("OA_PROJECT_TASK_EMG","EDIT_DIC_TYPE","项目任务紧急程度","1"));
	g_dictionary.put("EDIT_DIC_TYPEOA_PROJECT_TASK_IMP", new Code("OA_PROJECT_TASK_IMP","EDIT_DIC_TYPE","项目任务重要程度","1"));
	g_dictionary.put("EDIT_DIC_TYPEOA_PROJECT_TASK_DONE", new Code("OA_PROJECT_TASK_DONE","EDIT_DIC_TYPE","项目任务完成情况","1"));
	g_dictionary.put("EDIT_DIC_TYPEFIELD_TYPE", new Code("FIELD_TYPE","EDIT_DIC_TYPE","数据表字段类型","1"));
	g_dictionary.put("EDIT_DIC_TYPETEMPLATE_STATUS", new Code("TEMPLATE_STATUS","EDIT_DIC_TYPE","流程表单状态","1"));
	g_dictionary.put("EDIT_DIC_TYPETEMPLATE_FIELD_TYPE", new Code("TEMPLATE_FIELD_TYPE","EDIT_DIC_TYPE","字段HTML类型","1"));
	g_dictionary.put("EDIT_DIC_TYPEFLOW_STATUS", new Code("FLOW_STATUS","EDIT_DIC_TYPE","流程状态","1"));
	g_dictionary.put("EDIT_DIC_TYPEBUG_STATUS", new Code("BUG_STATUS","EDIT_DIC_TYPE","Bug状态","1"));
	g_dictionary.put("EDIT_DIC_TYPEBUG_PRIORITY", new Code("BUG_PRIORITY","EDIT_DIC_TYPE","Bug优先级","1"));
	g_dictionary.put("EDIT_DIC_TYPEBUG_PROJECT", new Code("BUG_PROJECT","EDIT_DIC_TYPE","Bug项目","1"));
	g_dictionary.put("EDIT_DIC_TYPEBUG_TYPE", new Code("BUG_TYPE","EDIT_DIC_TYPE","Bug类型","1"));
	g_dictionary.put("EDIT_DIC_TYPEBUG_PROJECT_JJZS", new Code("BUG_PROJECT_JJZS","EDIT_DIC_TYPE","Bug项目家具装饰系统子模块","1"));
	g_dictionary.put("EDIT_DIC_TYPEFILE_TYPE", new Code("FILE_TYPE","EDIT_DIC_TYPE","文件类型","1"));
	g_dictionary.put("EDIT_DIC_TYPEFLOW_INSTANCE_STATUS", new Code("FLOW_INSTANCE_STATUS","EDIT_DIC_TYPE","流程实例状态","1"));
	g_dictionary.put("EDIT_DIC_TYPEISALARM", new Code("ISALARM","EDIT_DIC_TYPE","任务超时报警","1"));
	g_dictionary.put("EDIT_DIC_TYPEFORM_TYPE", new Code("FORM_TYPE","EDIT_DIC_TYPE","表单分类","1"));
	g_dictionary.put("EDIT_DIC_TYPEARRANGEMENT_MODE", new Code("ARRANGEMENT_MODE","EDIT_DIC_TYPE","表单字段排列方式","1"));
	g_dictionary.put("EDIT_DIC_TYPESOURCE_AWARD_POINTS", new Code("SOURCE_AWARD_POINTS","EDIT_DIC_TYPE","奖扣分来源","1"));
	g_dictionary.put("EDIT_DIC_TYPEDEPT_TYPE", new Code("DEPT_TYPE","EDIT_DIC_TYPE","部门属性","1"));
	g_dictionary.put("EDIT_DIC_TYPEJOB_LEVEL", new Code("JOB_LEVEL","EDIT_DIC_TYPE","职级","1"));
	g_dictionary.put("EDIT_DIC_TYPEHOUSING_STATE", new Code("HOUSING_STATE","EDIT_DIC_TYPE","现住房情况","1"));
	g_dictionary.put("EDIT_DIC_TYPEBABY_STATE", new Code("BABY_STATE","EDIT_DIC_TYPE","婚育状态","1"));
	g_dictionary.put("EDIT_DIC_TYPEEDUCATION_BACKGROUND", new Code("EDUCATION_BACKGROUND","EDIT_DIC_TYPE","学历","1"));
	g_dictionary.put("EDIT_DIC_TYPEISYESORNO", new Code("ISYESORNO","EDIT_DIC_TYPE","是否","1"));
	g_dictionary.put("EDIT_DIC_TYPESYS_POSITION", new Code("SYS_POSITION","EDIT_DIC_TYPE","职位","1"));
	g_dictionary.put("EDIT_DIC_TYPEAPPROVAL_STAGE", new Code("APPROVAL_STAGE","EDIT_DIC_TYPE","审核阶段","1"));
	g_dictionary.put("EDIT_DIC_TYPEAPPROVAL_STATUS", new Code("APPROVAL_STATUS","EDIT_DIC_TYPE","审核状态","1"));
	g_dictionary.put("EDIT_DIC_TYPEAPPLY_STATUS", new Code("APPLY_STATUS","EDIT_DIC_TYPE","申请状态","1"));
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
	  alert(e.message);
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
	loadMainPage();
 }
 
 function getUserRoleByUserCode(user_code){
    if(!g_allRoleUser){ return user_code; }
	for(var i=0;i<g_allRoleUser.length;i++){
	  if(g_allRoleUser[i].userCode==user_code){
	    return g_allRoleUser[i].roleId;
	  }
	}
	return user_code;
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
	var ht="<select id='"+sid+"' style='width:200px'>";
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
//获取所有的流程
 function getAllFlowsList(){
    var aoData=[];
	aoData.push({ "name":"woFlow.flow_status","value":"-1"});
	aoData.push({ "name":"iDisplayStart","value":"0"});
	aoData.push({ "name":"iDisplayLength","value":"100"});
    sendAjaxRequest("/actions/WorkOrder.action?getWOFlowList",aoData,getAllFlowsListCallBack);
 }
 //获取所有流程回调函数
 function getAllFlowsListCallBack(obj){
     try{
	   g_allFlows=obj.aaData;
	 }catch(e){
	 }
 }
 //将所有的流程以select选择框展示 
 //sid：显示的select 的id; 
 //init_flow_id:若要指定select选项中某个流程为当前值，设置该参数; 
 //is_empty:设置select选项中是否显示空白行
 function getAllFlowsSelect(sid,init_flow_id,is_empty){
    var ht="<select id='"+sid+"' style='width:120px;'>";
	if(is_empty){
	   ht+="<option value='0'></option>";
	}
	for(var i=0;i<g_allFlows.length;i++){
	   ht+="<option value='"+g_allFlows[i].flow_id+"'";
	   if(g_allFlows[i].flow_id==init_flow_id){
	     ht+=" selected='selected'";
	   }
	   ht+=">"+g_allFlows[i].flow_name+"</option>";
	}
	ht+="</select>";
	return ht;
 }
 //根据流程id(flow_id)返回流程名称(flow_name)
 function getFlowNameById(flow_id){
     if(g_allFlows==null) return flow_id;
     for(var i=0;i<g_allFlows.length;i++){
	    if(g_allFlows[i].flow_id==flow_id){
		   return  g_allFlows[i].flow_name;
		}
	 }
	 return flow_id;
 }
 
 
 
   function getRewardDetailSelectHtml(){
    var ht="<select id='dept' style='width:120px;'>";
	var content="";
	var ids="";
	if(g_allIntegrationRights.length==0){
	  ids="0";
	}
	for(var i=0;i<g_allIntegrationRights.length;i++){
	   if(i>0){
	     ids+=',';
	   }
	   var detail_id=g_allIntegrationRights[i].reward_detail_id.split(",");
	   for(var j=0;j<detail_id.length;j++){
	      if(j>0){
		    ids+=",";
		  }
	      ids+=detail_id[j];
		  content+="<option value='"+detail_id[j]+"'>"+getDeptPath(detail_id[j])+"</option>";
	   }
	}
    ht+="<option value='"+ids+"'>全部</option>";
	ht+=content;
	ht+="</select>";
	return ht;
  }
  
  function  getPositionLevel(){
    var aoData=[];
	aoData.push( { "name":"iDisplayStart:","value":0} );
	aoData.push( { "name":"iDisplayLength","value":1000} );
	aoData.push( { "name":"time1","value":"-1" } );
	aoData.push( { "name":"time2","value":"-1" } );
	 
    top.sendAjaxRequest("/actions/PositionLevel.action?getPositionLevelList",aoData,getPositionLevelCallback);
  }
  
  function getPositionLevelCallback(obj){
    try{
	    g_allPositionLevel=obj.aaData;
	}catch(e){
	}
  }
  
  function getJobLevelSelectHtml(name,position_code){
      var ht="<select id='"+name+"' style='width:120px'>";
	  ht+="<option value=''></option>";
      if(g_allPositionLevel){
		  for(var i=0;i<g_allPositionLevel.length;i++){
			if(g_allPositionLevel[i].position_code==position_code){
			  ht+="<option value='"+g_allPositionLevel[i].level_code+"'>"+g_allPositionLevel[i].level_name+"</option>";
			}
		  }
	  }
	  ht+="</select>";
	  return ht;
  }
  
  function getJobLevelNameByCode(code,job_title){
	if(g_allPositionLevel==null){
		return code;
	}
	for(var i=0;i<g_allPositionLevel.length;i++){
		if(job_title==g_allPositionLevel[i].position_code && g_allPositionLevel[i].level_code==code){
		   return g_allPositionLevel[i].level_name;
		}
	}
	if(code==null){
	  return "";
	}
	return code;
  }
	