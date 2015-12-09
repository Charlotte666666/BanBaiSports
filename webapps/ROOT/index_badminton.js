var g_allUsers=[];
var g_allProject=[];
var allToolBookTypesList=[];
var g_allFlows=[];
var centerLon=116.405006;// 默认地图默认中心点经纬度
var centerLat=39.921806;
var defaultMapLevel=12; // 地图默认放大级别

var loginMode="self";

var indexdata = [
	{ text: '比赛管理',isexpand:false, children: [ 
		{ url: "pages/badminton/competitionResultManage.html", text: "比赛结果",right:"" },
		{ url: "pages/badminton/competitionRankManage.html", text: "比赛名次",right:"" },
	    { url: "pages/badminton/competitionScheduleManage.html", text: "大型赛程信息",right:"" },
		{ url: "pages/badminton/competitionSmallScheduleManage.html", text: "小型比赛信息",right:"" },
		{ url: "pages/badminton/teamManage.html", text: "球队信息",right:"" },
		{ url: "pages/badminton/teamMemberManage.html", text: "球员信息",right:"" },
		{ url: "pages/badminton/competitionJudgeManage.html", text: "裁判信息",right:"" },
		{ url: "pages/badminton/groupManage.html", text: "分组信息",right:""},
		{ url: "pages/badminton/scoreManage.html", text: "积分信息",right:""},
		{ url: "pages/badminton/wonderfulManage.html", text: "精彩瞬间",right:"" },
		{ url: "pages/badminton/guessManage.html", text: "竞猜信息",right:"" },
		{ url: "pages/badminton/applyCompetitionInfoManage.html", text: "报名信息",right:"" }
	  ]
    },
	{ text: '会员管理',isexpand:false, children: [ 
	    { url: "pages/badminton/memberManage.html", text: "会员管理",right:"" },
		{url:"pages/system/feedbackManage.html",text:"使用反馈信息",right:""}
	  ]
    },
	{ text: '羽球圈管理',isexpand:false, children: [ 
	    { url: "pages/badminton/shareInfoManage.html", text: "羽球圈信息",right:"" }
	  ]
    },
	{ text: '基本信息',isexpand:false, children: [ 
		{ url: "pages/badminton/courtInfoManage.html", text: "球馆信息",right:"" },
		{ url: "pages/badminton/competitionAreaManage.html", text: "场地信息",right:"" },
		{ url: "pages/badminton/schoolInfoManage.html", text: "院校信息",right:""},
		{ url: "pages/badminton/industryCategoryManage.html", text: "行业信息分类",right:""}
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

var index_info=[{
   sysTitle:'羽毛球运动平台',
   mainPage:'pages/badminton/main.html'
}];

function index_init(){
	g_logo_html='';
}

function login_success_init(){
   proInitGlobalData();
   loadMainPage();
}

/**
 * 初始化项目个性化全局缓存数据
 */
function proInitGlobalData(){
	g_dictionary.put("EDIT_DIC_TYPESCHEDULE_TYPE", new Code("SCHEDULE_TYPE","EDIT_DIC_TYPE","赛事类型","1"));
	g_dictionary.put("EDIT_DIC_TYPESCHEDULE_STATUS", new Code("SCHEDULE_STATUS","EDIT_DIC_TYPE","赛程状态","1"));
	g_dictionary.put("EDIT_DIC_TYPERESULT_STATUS", new Code("RESULT_STATUS","EDIT_DIC_TYPE","比赛状态","1"));
	g_dictionary.put("EDIT_DIC_TYPECOMPETITION_TYPE", new Code("COMPETITION_TYPE","EDIT_DIC_TYPE","比赛单项类型","1"));
	g_dictionary.put("EDIT_DIC_TYPERANK_TYPE", new Code("RANK_TYPE","EDIT_DIC_TYPE","比赛名次类型","1"));
	g_dictionary.put("EDIT_DIC_TYPEINDUSTRY_CATEGORY", new Code("INDUSTRY_CATEGORY","EDIT_DIC_TYPE","行业分类","1"));
	g_dictionary.put("EDIT_DIC_TYPESTADIUMS", new Code("STADIUMS","EDIT_DIC_TYPE","场馆","1"));
	g_dictionary.put("EDIT_DIC_TYPECOMPETITION_STATUS", new Code("COMPETITION_STATUS","EDIT_DIC_TYPE","比赛状态","1"));
	g_dictionary.put("EDIT_DIC_TYPESEX", new Code("SEX","EDIT_DIC_TYPE","性别","1"));
	g_dictionary.put("EDIT_DIC_TYPEEDU_LEVEL", new Code("EDU_LEVEL","EDIT_DIC_TYPE","学历","1"));
	g_dictionary.put("EDIT_DIC_TYPEPLAYER_LEVEL", new Code("PLAYER_LEVEL","EDIT_DIC_TYPE","级别","1"));
	g_dictionary.put("EDIT_DIC_TYPESCHEDULE_PHASES", new Code("SCHEDULE_PHASES","EDIT_DIC_TYPE","比赛阶段","1"));
	g_dictionary.put("EDIT_DIC_TYPESMALL_SCHEDULE_TYPE", new Code("SMALL_SCHEDULE_TYPE","EDIT_DIC_TYPE","小型比赛类型","1"));
	g_dictionary.put("EDIT_DIC_TYPESMEMBER_STATUS", new Code("MEMBER_STATUS","EDIT_DIC_TYPE","会员状态","1"));
	g_dictionary.put("EDIT_DIC_TYPECITY", new Code("CITY","EDIT_DIC_TYPE","城市","1"));
	g_dictionary.put("EDIT_DIC_TYPEGUESS_TYPE", new Code("GUESS_TYPE","EDIT_DIC_TYPE","竞猜类型","1"));
} 

 function getScheduleSelectHtml(scheduleList,sid){
    if ( !scheduleList ) return "";
	var ht="<select id='"+sid+"' style='width:260px'>";
	for(var i=0;i<scheduleList.length;i++){
	  ht+="<option value='"+scheduleList[i].id+"'";
	  ht+=">"+scheduleList[i].title+"</option>";
	}
	ht+="</select>";
	return ht;
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