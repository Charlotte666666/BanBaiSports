var g_allUsers=[];
var g_allDesigner=[];
var g_allBuildinfo=[];
var g_allRoleUser=[];
var g_curUser={};
var lc=[];
var g_allWorkGroup=[];
var g_allSupplier=[]; 
var loginMode="index_login.html";

	var indexdata = [
		{ text: '会员管理',isexpand:false, children: [
		    {url:"pages/pro13/WebUserManage.html",text:"会员管理",right:""}
		]
		}
	];

	var index_info=[{
	   sysTitle:'任务平台后台管理系统',
	   mainPage:'pages/pro13/main.html'
	}];

	function index_init(){
		config_use_positon_model=false;// 不启用工作岗位模块
	}

	function login_success_init(){
	   g_logo_html='&nbsp;&nbsp;';
	   proInitGlobalData();
	   sendAjaxRequest("/actions/User.action?getAllUserSimpleList",[],getAllUserCallback);
	}

/**
 * 初始化项目个性化全局缓存数据
 */
	function proInitGlobalData(){
		//common
		g_dictionary.put("EDIT_DIC_TYPEDEPT_TYPE", new Code("DEPT_TYPE","EDIT_DIC_TYPE","部门属性","1"));
		g_dictionary.put("EDIT_DIC_TYPEISYESORNO", new Code("ISYESORNO","EDIT_DIC_TYPE","是否","1"));
		g_dictionary.put("EDIT_DIC_TYPESEX", new Code("SEX","EDIT_DIC_TYPE","性别","1"));
		//用于我的工作 工作流程
		g_dictionary.put("EDIT_DIC_TYPELCTYPE", new Code("LCTYPE","EDIT_DIC_TYPE","系统流程","1"));
		g_dictionary.put("EDIT_DIC_TYPEFILE_TYPE", new Code("FILE_TYPE","EDIT_DIC_TYPE","文件类型","1"));

		g_dictionary.put("EDIT_DIC_TYPEFILESOURCE", new Code("FILESOURCE","EDIT_DIC_TYPE","文件来源","1"));
		
		g_dictionary.put("EDIT_DIC_TYPENOTICE_TYPE", new Code("NOTICE_TYPE","EDIT_DIC_TYPE","通知类型","1"));
		g_dictionary.put("EDIT_DIC_TYPENOTICE_EMERGENCY", new Code("NOTICE_EMERGENCY","EDIT_DIC_TYPE","通知紧急程度","1"));
		//用于文件上传
		g_dictionary.put("EDIT_DIC_TYPEBELONGTYPE", new Code("BELONGTYPE","EDIT_DIC_TYPE","所属模块","1"));
		//系统
	    g_dictionary.put("EDIT_DIC_TYPESYS_POSITION", new Code("SYS_POSITION","EDIT_DIC_TYPE","岗位","1"));
		g_dictionary.put("EDIT_DIC_TYPEDESIGNER_LEVEL", new Code("DESIGNER_LEVEL","EDIT_DIC_TYPE","设计师级别","1"));
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
