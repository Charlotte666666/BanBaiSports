var g_allUsers=[];
var g_allGoodsArr=[];
var isNeedRefreshGoodsType=false;

var loginMode="self";

var index_info=[{
	      sysTitle:'ERP管理系统',
	      mainPage:'pages/erp/saleMain.html'
	}];

var indexdata = [
	{ text:'ERP系统',isexpand:false,children:[
	        //{ url: "pages/erp/saleMain.html",text: "销售单",right: "" },
			{ url: "pages/erp/purchaseManage.html",text: "采购入库管理",right: "" },
		    { url: "pages/erp/saleManage.html",text: "销售出库管理",right: "" },
		    { url: "pages/erp/goodsManage.html",text: "商品信息管理",right: "" },
		    { url: "pages/erp/providerManage.html",text: "供应商信息管理",right: "" }
	]},
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
}

function login_success_init(){
   proInitGlobalData();
   sendAjaxRequest("/actions/User.action?getAllUserSimpleList",[],getAllUserCallback);
   sendAjaxRequest("/actions/ProGoods.action?getGoodsTypeList",[],callbackGetTypeList);
   loadAllGoodsData();
}

/**
 * 初始化项目个性化全局缓存数据
 */
function proInitGlobalData(){
	g_dictionary.put("EDIT_DIC_TYPEBELONG_AREA", new Code("BELONG_AREA","EDIT_DIC_TYPE","所属区域","1"));
	g_dictionary.put("EDIT_DIC_TYPESEX", new Code("SEX","EDIT_DIC_TYPE","性别","1"));
	g_dictionary.put("EDIT_DIC_TYPEDEPT_TYPE", new Code("DEPT_TYPE","EDIT_DIC_TYPE","部门属性","1"));
	g_dictionary.put("EDIT_DIC_TYPEJOB_LEVEL", new Code("JOB_LEVEL","EDIT_DIC_TYPE","职级","1"));
	g_dictionary.put("EDIT_DIC_TYPEHOUSING_STATE", new Code("HOUSING_STATE","EDIT_DIC_TYPE","现住房情况","1"));
	g_dictionary.put("EDIT_DIC_TYPEBABY_STATE", new Code("BABY_STATE","EDIT_DIC_TYPE","婚育状态","1"));
	g_dictionary.put("EDIT_DIC_TYPEEDUCATION_BACKGROUND", new Code("EDUCATION_BACKGROUND","EDIT_DIC_TYPE","学历","1"));
	g_dictionary.put("EDIT_DIC_TYPEISYESORNO", new Code("ISYESORNO","EDIT_DIC_TYPE","是否","1"));
	g_dictionary.put("EDIT_DIC_TYPESYS_POSITION", new Code("SYS_POSITION","EDIT_DIC_TYPE","职位","1"));
	g_dictionary.put("EDIT_DIC_TYPEAPPROVAL_STAGE", new Code("APPROVAL_STAGE","EDIT_DIC_TYPE","审核阶段","1"));
	g_dictionary.put("EDIT_DIC_TYPEAPPROVAL_STATUS", new Code("APPROVAL_STATUS","EDIT_DIC_TYPE","审核状态","1"));
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

 function setNeedRefreshType(){
    isNeedRefreshGoodsType=true;
 }
 
 function loadAllGoodsData(){
    sendAjaxRequest("/actions/ProGoods.action?getSimpleGoodsAllList",[],callBackLoadGoods);
 }
 
 function callBackLoadGoods(obj){
    if ( obj ) {
	    g_allGoodsArr = obj.aaData;
	}
}

function getCacheGoodsType(){
  return getCacheMap("ERP_GOODS_TYPE");
}

function getTypeNameById( tid ) {
  var typeArr=getCacheGoodsType();
  for (var i=0;i<typeArr.length;i++) {
     if ( typeArr[i].type_id == tid ) return  typeArr[i].name;
  }
  return "";
}

function getTypeById( tid ) {
  var typeArr=getCacheGoodsType();
  for (var i=0;i<typeArr.length;i++) {
     if ( typeArr[i].type_id == tid ) return  typeArr[i];
  }
  return null;
}

function getLev2TypeNameByIds( tids ) {
  if ( !tids || tids == '' ) return "";
  var typeArr=getCacheGoodsType();
  if ( !typeArr ) return "";
  var names="";
  for (var i=0;i<typeArr.length;i++) {
     if ( typeArr[i].type_level != 2 ) continue;
     if ( tids.indexOf(typeArr[i].type_id) != -1 ) names+=typeArr[i].name+",";
  }
  return names;
}

function getGoodsTypeLevel(name,lev,pid,initValue){
  if ( !initValue && initValue != 0) initValue=-1;
  var ht="<select id='"+name+"' onchange='s_changeType("+lev+")'>";
  if ( !pid && pid != 0) {
    ht += "</select>";
	return ht;
  }
  var typeArr=getCacheGoodsType();
  if ( !typeArr ) return "";
  
  for ( var i=0;i<typeArr.length;i++ ) {
    if ( typeArr[i].type_level == lev && pid == typeArr[i].parent_id ) {
	   ht+="<option value='"+typeArr[i].type_id+"' ";
	   if ( initValue == typeArr[i].type_id ) ht+=" selected ";
	   ht+=">"+typeArr[i].name+"</option>";
	}
  }
  ht += "</select>";
  return ht;
}

function getAllGoodsArr(){
  return g_allGoodsArr;
}

function getGoodsById(gid){
  for (var i=0;i<g_allGoodsArr.length;i++) {
     if ( g_allGoodsArr[i].goods_id == gid ) return  g_allGoodsArr[i];
  }
  return null;
}

function callbackGetTypeList(obj){
   try{
	top.setCacheMap("ERP_GOODS_TYPE",obj.aaData);
   }catch(e){}
   loadMainPage();
}

function myGetCodeName(type, code){
   return getCodeName(type, code);
}
 