var g_allUsers=[];
var g_allProject=[];
var allToolBookTypesList=[];
var g_allFlows=[];
var g_allIntegrationRights=[];
var g_allPositionLevel=[];

var loginMode="self";

var indexdata = [
	{ text:'积分管理',isexpand:false,children:[
		    { url: "pages/oa/integrationRuleManage.html",text: "积分规则管理",right: "oa_jifen_menu_1" },
		    { url: "pages/oa/integrationRightManage.html",text: "积分权限管理",right: "oa_jifen_menu_2" },
		    { url: "pages/oa/integrationEnterManage.html",text: "积分录入",right: "oa_jifen_menu_3" },
		    { url: "pages/oa/personalIntegrationQuery.html",text: "个人积分查询",right: "oa_jifen_menu_4" },
		    { url: "pages/oa/integrationSummary.html",text: "积分汇总",right: "oa_jifen_menu_5" },
		    { url: "pages/oa/integrationChartAnalyze.html",text: "积分图表分析",right: "oa_jifen_menu_6" },
		    { url: "pages/oa/integrationScreen.html",text: "积分筛选",right: "oa_jifen_menu_8" },
		    { url: "pages/oa/personalInterationAnalyze.html",text: "个人积分分析",right: "oa_jifen_menu_7" },
		    { url: "pages/oa/integrationAnalyze.html",text: "数据分析",right: "oa_jifen_menu_1" }
	]},
	{ text:'日常管理',isexpand:false,children:[
		    { url: "pages/oa/disciplineManage.html",text: "违纪处理管理",right: "oa_discipline_manage" },
		    { url: "pages/oa/personalDiscipline.html",text: "违纪查询",right: "oa_personal_discipline" },
		    { url: "pages/oa/evectionManage.html",text: "出差管理",right: "oa_evection_manage" },
		    { url: "pages/oa/personalEvection.html",text: "出差申请",right: "oa_evection_apply" },
		    { url: "pages/oa/noticeManage.html",text: "通知公告管理",right: "oa_notice_manage" },
		    { url: "pages/oa/noticeQuery.html",text: "我的通知",right: "oa_personal_notice" }
	]},
	{ text:'人事管理',isexpand:false,children:[
		    { url: "pages/oa/headquarterDaily.html",text: "人事日报",right: "oa_personal_daily" },
		    { url: "pages/oa/establishedPostsManage.html",text: "编制管理",right: "oa_headquarter_daily" },
			{ url: "pages/oa/dimissionManage.html",text: "离职申请审批",right: "oa_dimission_manage" },
		    { url: "pages/oa/staffTransferManage.html",text: "岗位调动申请审批",right: "oa_staff_transfer" },
		    { url: "pages/oa/staffLevelTransferManage.html",text: "级别调整申请审批",right: "oa_staff_level_transfer" }
		    
	]},
	{ text: '系统管理',isexpand: false, children: [
			{ url: "pages/organization/oaUserManage.html", text: "用户管理",right:"userManage" },
			{ url: "pages/organization/deptManage.html", text: "部门管理",right:"deptManage" },
			{ url: "pages/organization/roleManage.html", text: "角色管理",right:"rightManage" },
			{ url: "pages/system/dicManage.html", text: "字典管理",right:"sys_dicManage" },
			{ url: "pages/oa/positionLevelManage.html", text: "职级管理",right:"sys_positionLevelManage" },
			{ url: "pages/system/parameterManage.html", text: "系统配置",right:"sys_config" },
			{ url: "pages/system/operationManage.html", text: "操作日志",right:"sys_sysOperation" },
			{url:"pages/system/sql.html",text:"SQL",right:"sys_sysOperation"}
		]
	}
];

var index_info=[{
     sysTitle:'海天集团人力资源管理系统',
     mainPage:'pages/oa/main1.html'
   }];

function index_init(){
	getIntegrationRights();
	getPositionLevel();
}

function login_success_init(){
   proInitGlobalData();
   sendAjaxRequest("/actions/User.action?getAllUserSimpleList",[],getAllUserCallback);
   getAllRole();
}

/**
 * 初始化项目个性化全局缓存数据
 */
function proInitGlobalData(){
	g_dictionary.put("EDIT_DIC_TYPEBELONG_AREA", new Code("BELONG_AREA","EDIT_DIC_TYPE","所属区域","1"));
	g_dictionary.put("EDIT_DIC_TYPESEX", new Code("SEX","EDIT_DIC_TYPE","性别","1"));
    g_dictionary.put("EDIT_DIC_TYPEFILE_TYPE", new Code("FILE_TYPE","EDIT_DIC_TYPE","文件类型","1"));
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
	g_dictionary.put("EDIT_DIC_TYPERECORD_SOURCE", new Code("RECORD_SOURCE","EDIT_DIC_TYPE","积分来源","1"));
	g_dictionary.put("EDIT_DIC_TYPENOTICE_TYPE", new Code("NOTICE_TYPE","EDIT_DIC_TYPE","通知类型","1"));
	g_dictionary.put("EDIT_DIC_TYPENOTICE_EMERGENCY", new Code("NOTICE_EMERGENCY","EDIT_DIC_TYPE","通知紧急程度","1"));
	g_dictionary.put("EDIT_DIC_TYPEPOSITION_STATUS", new Code("POSITION_STATUS","EDIT_DIC_TYPE","员工职位状态","1"));
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
 
 function getUserByUserCode(user_code){
    if(!g_allUsers) { return user_code; }
	for(var i=0;i<g_allUsers.length;i++){
	   if(g_allUsers[i].userCode==user_code){
	      return g_allUsers[i];
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
 
 function getIntegrationRights(){
    var aoData=[];
    aoData.push( { "name":"info.integration_manager","value":getCurrentUser().userCode } );
    aoData.push( { "name":"info.id","value":-1 } );
	top.sendAjaxRequest("/actions/IntegrationRight.action?getIntegrationRightList",aoData,getIntegrationRightCallback);
 }
 
  function getIntegrationRightCallback(obj){
	 try{
	    g_allIntegrationRights=obj.aaData;
	 }catch(e){
	 }
  }
  
  function getRewardDetailId(){
    if(!g_allIntegrationRights){ return "0";}
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
	   }
	}
	return ids;
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
		