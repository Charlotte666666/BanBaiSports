var g_allUsers=[];
var g_allDesigner=[];
var g_allBuildinfo=[];
var g_allRoleUser=[];
var g_curUser={};
var lc=[];
var g_allWorkGroup=[];
var g_allSupplier=[];
var g_allProcessInfo=[];
var loginMode="index_login.html";

	var indexdata = [
		{ text: '综合查询',isexpand:false, children: [
		    {url:"pages/pro09/custManage.html",text:"客户信息查询",right:"09_query_manage_01"},
			{ url: "pages/pro09/projectOrderQuery.html", text: "工程信息查询",right:"09_query_manage_02" },
			{url:"pages/pro09/workRemindManage.html?status=01",text:"待办事项",right:"09_query_manage_03"},
			{url:"pages/pro09/workRemindManage.html?status=02",text:"已办事项",right:"09_query_manage_04"},
			{url:"pages/pro09/myCustManage.html",text:"我的客户",right:"09_query_manage_05"},
			{ url: "pages/pro09/todayApplyManage.html", text: "我的申请",right:"09_query_manage_06" },
			{ url: "pages/pro09/myPlanManage.html", text: "我的计划",right:"09_query_manage_07" },
			{url:"pages/oa/noticeQuery.html",text:"我的通知",right:"09_query_manage_08"},
			{ url: "pages/oa/queryToolBookManage.html", text: "大易智库查询",right:"09_query_manage_09" },
			{ url: "pages/pro09/offerPolicyManage.html", text: "优惠政策信息",right:"09_query_manage_10" },
			{ url: "pages/pro09/dailyInspectionManage.html", text: "日常检查",right:"09_query_manage_11" },
			{ url: "pages/pro09/meetingManage.html", text: "会议管理",right:"09_query_manage_12" },
			{ url: "pages/pro09/discountApplyMange.html", text: "折扣申请管理",right:"09_query_manage_13" },
			{ url: "pages/pro09/planManage.html", text: "计划管理",right:"09_query_manage_14" },
			{ url: "pages/oa/tooltypeManage.html", text: "大易智库管理",right:"09_query_manage_15" },
			{ url: "pages/oa/noticeManage.html", text: "通知公告管理",right:"09_query_manage_16" }
		]
		},
		{ text:'预算系统',isexpand:false,children: [
		  { url: "pages/pro09/budgetModelManage.html", text: "预算模板管理",right:"09_budget_manager_menu_01" },
		  {url:"pages/pro09/projectBudgetManage.html",text:"工程预算",right:"09_budget_manager_menu_01"},
		  { url: "pages/pro09/quoteProductTypeManage.html", text: "工程基础信息",right:"09_budget_manager_menu_02" }
		]
		},
		{ text: '市场部',isexpand:false, children: [
		    { url: "pages/pro09/marketManage.html", text: "楼盘信息",right:"09_market_manage_menu_01" },
			{ url: "pages/pro09/potentialcustomersManage.html", text: "潜在客户",right:"09_market_manage_menu_02" }
		]
		},
		{ text: '客服部',isexpand:false, children: [
			{url:"pages/pro09/custCallbackManage.html",text:"客户回访管理",right:"09_cust_service_dept_manage_menu_01"},
			{url: "pages/pro09/custTousu.html", text: "客户投诉管理",right:"09_cust_service_dept_manage_menu_02" },
			{url: "pages/oa/onlineHelpManage.html", text: "在线求助管理",right:"09_online_help_manage" }
		]
		},
		{ text:'设计部',isexpand:false,children: [
		  { url: "pages/pro09/manInterOpt.html", text: "设计师派单",right:"09_design_service_dept_manage_menu_01" },
		  { url: "pages/pro09/manInterQuery.html", text: "人工干预历史",right:"09_design_service_dept_manage_menu_02" },
		  { url: "pages/pro09/designCaseManage.html",text:"设计案例管理",right:"09_design_service_dept_manage_menu_05"},
		  { url: "pages/pro09/designCaseShow.html",text:"设计案例欣赏",right:"09_design_service_dept_manage_menu_06"}
		  //{url:"",text:"部门目标管理",right:""},
		  //{url:"",text:"设计师目标管理",right:""}
		]
		},
		{ text: '工程部', isexpand: false, children: [
			//{ url: "", text: "工程日程",right:"" },
			//{ url: "pages/pro09/projectQuoteOrderManage.html", text: "工程报价",right:"09_project_manage_menu_02" },
			{ url: "pages/pro09/myProjectManage.html", text: "我的工程订单",right:"09_project_manage_menu_04" },
		 	{ url: "pages/pro09/orderManage.html", text: "工程订单管理",right:"09_project_manage_menu_01" },
			{ url: "pages/pro09/proManagerSchedulCount.html", text: "监理排班统计",right:"09_project_manage_menu_05" },
			{ url: "pages/pro09/projectIntegratedQuery.html", text: "项目经理查询",right:"09_project_manage_menu_07" },
			{ url: "pages/pro09/workerInfoManage.html", text: "工人管理",right:"09_worker_manage_menu" },
			{ url: "pages/pro09/processInfoManage.html", text: "工程进度信息管理",right:"09_process_info_manage_menu" }
		 ]
		},
		{ text: '产品部', isexpand: false, children: [
			//{ url: "", text: "采购对账管理",right:"09_product_manage_menu_01" },
			//{ url: "", text: "材料商综合统计",right:"09_product_manage_menu_01" },
			//{ url: "", text: "促销信息管理",right:"09_product_manage_menu_01" },
			//{ url: "", text: "材料商销售排行榜",right:"09_product_manage_menu_01" },
			{ url: "pages/pro09/productQuoteManage.html", text: "产品报价管理",right:"09_product_manage_menu_01" },
			{ url: "pages/pro09/myProOrderManage.html", text: "我的产品订单",right:"09_product_manage_menu_07" },
			{ url: "pages/pro09/ProOrderManage.html", text: "产品订单管理",right:"09_product_manage_menu_02" },
			//{ url: "pages/pro09/orderQuery.html", text: "产品订单处理",right:"09_product_manage_menu_04" },
			//{ url: "pages/pro09/orderFollow.html", text: "客户追销管理",right:"09_product_manage_menu_03" },
			{ url: "pages/pro09/orderHandle.html", text: "采购下单",right:"09_product_manage_menu_05" },
			{ url: "pages/pro09/purOrderManage.html", text: "采购单查询",right:"09_product_manage_menu_09" },
			{ url: "pages/pro09/purCheck.html", text: "采购验收管理",right:"09_product_manage_menu_10" },
			{ url: "pages/pro09/productCheck.html", text: "客户验收",right:"09_product_manage_menu_06" },
			{ url: "pages/pro09/productTypeManage.html", text: "产品信息",right:"09_product_manage_menu_12" },
			{ url: "pages/pro09/supplierManage.html", text: "供应商管理",right:"09_product_manage_menu_11" }
		 ]
		},
		{ text: '财务部',isexpand: false, children: [
		  //{ url:"",text:"应收、应付账款",right:""},
		  //{ url:"",text:"财务收入/支出审核",right:""},
		  //{ url:"",text:"施工清单",right:""},
		  //{ url:"",text:"行政办公科目",right:""},
		  //{ url:"",text:"行政办公费用管理",right:""},
		  //{ url:"",text:"主材业绩统计",right:""},
		  //{ url:"",text:"工程资金表",right:""},
		  { url: "pages/pro09/constractManager.html",text:"客户合同管理",right:"09_finance_manage_menu_02"},
		  { url: "pages/pro09/payPurchaseManage.html", text: "供应商结算管理",right:"09_finance_manage_menu_03"},
		  { url: "pages/pro09/reportManage.html", text: "财务报表",right:"09_finance_manage_menu_01" }
		]
		},
		{ text: '统计分析',isexpand: false, children: [
		  //{ url:"",text:"公司运营成本与业绩统计 ",right:""},
		  //{ url:"",text:"部门成本与业绩统计",right:""},
		  { url: "pages/pro09/yearTotalTargetManage.html", text: "业绩产值目标",right:"09_count_manage_menu_09" },
		  { url: "pages/pro09/yearFactAndTargetValue.html", text: "业绩产值对比信息",right:"09_count_manage_menu_10" },
		  //{ url:"",text:"部门新增客户统计",right:""},
		  {url:"pages/pro09/designerallotbill.html",text:"设计师派单一览表",right:"09_count_manage_menu_11"},
		  { url: "pages/pro09/proTableCount.html", text: "工程报表统计",right:"09_count_manage_menu_12" },
		  { url: "pages/pro09/dayTableManage.html", text: "日报统计",right:"09_count_manage_menu_01" },
			{ url: "pages/pro09/weekTableManage.html", text: "周报统计",right:"09_count_manage_menu_02" },
			{ url: "pages/pro09/monthTableManage.html", text: "月报统计",right:"09_count_manage_menu_03" },
			{ url: "pages/pro09/serviceTableManage.html", text: "服务流程统计表",right:"09_count_manage_menu_04" },
			{ url: "pages/pro09/failTableManage.html", text: "跑单原因分析表",right:"09_count_manage_menu_05" },
			{ url: "pages/pro09/vipCustTableManage.html", text: "重点客户统计",right:"09_count_manage_menu_06" },
			{url:"pages/pro09/funnelManage.html",text:"漏斗管理",right:"09_count_manage_menu_07"},
			{url:"pages/pro09/custOutPutStatistics.html",text:"客户产值统计",right:"09_count_manage_menu_08"}
		   ]
		},
		/*{ text: '基础信息设置',isexpand: false, children: [
			{ url: "pages/pro09/knowWay.html", text: "认识公司途径",right:"09_basic_manage_menu_02" },
			{ url: "pages/pro09/smsManage.html", text: "短信模板设置",right:"09_basic_manage_menu_05" },
		   ]
		},*/
		{ text: '系统管理',isexpand: false, children: [
			{ url: "pages/organization/userManage.html", text: "用户管理",right:"userManage" },
			{ url: "pages/organization/deptManageInline.html", text: "部门管理",right:"deptManage" },
			{ url: "pages/organization/deptAreaManageInline.html", text: "部门区域设置",right:"deptManage" },
			{ url: "pages/organization/roleManage.html", text: "角色管理",right:"rightManage" },
			{ url: "pages/system/dicManage.html", text: "字典管理",right:"sys_dicManage" },
			{ url: "pages/system/parameterManage.html", text: "系统配置",right:"sys_config" },
			{ url: "pages/system/operationManage.html", text: "操作日志",right:"sys_sysOperation" },
			{ url: "pages/pro09/knowWay.html", text: "认识公司途径",right:"09_basic_manage_menu_02" },
			{ url: "pages/pro09/smsManage.html", text: "短信模板设置",right:"09_basic_manage_menu_05" },
			{ url: "pages/pro09/designerManage.html", text: "设计师信息",right:"09_design_service_dept_manage_menu_03" },
			{ url: "pages/pro09/workGroupManage.html", text: "工作组信息",right:"09_design_service_dept_manage_menu_04" }
		   ]
		}
	];

	function index_init(){
	    index_info=[{
	      sysTitle:'中国家居装饰智能管理系统',
	      mainPage:'pages/pro09/main2.html'
	    }];
		$("#sysTitleLogin").html("<font size='5' color='#006096'>"+index_info[0].sysTitle+"</font>");
	    $(document).attr("title",index_info[0].sysTitle);
		config_use_positon_model=false;// 不启用工作岗位模块
		getAllDesigner();
		getAllBuilding();
		getAllWorkGroup();
		getAllSupplier();
		getProcessInfoList();
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
		g_dictionary.put("EDIT_DIC_TYPECITY", new Code("CITY","EDIT_DIC_TYPE","城市","1"));
		g_dictionary.put("EDIT_DIC_TYPEDEPT_TYPE", new Code("DEPT_TYPE","EDIT_DIC_TYPE","部门属性","1"));
		g_dictionary.put("EDIT_DIC_TYPEISYESORNO", new Code("ISYESORNO","EDIT_DIC_TYPE","是否","1"));
		g_dictionary.put("EDIT_DIC_TYPESEX", new Code("SEX","EDIT_DIC_TYPE","性别","1"));
		//用于我的工作 工作流程
		g_dictionary.put("EDIT_DIC_TYPELCTYPE", new Code("LCTYPE","EDIT_DIC_TYPE","系统流程","1"));
		g_dictionary.put("EDIT_DIC_TYPEFILE_TYPE", new Code("FILE_TYPE","EDIT_DIC_TYPE","文件类型","1"));
	
		g_dictionary.put("EDIT_DIC_TYPEFILESOURCE", new Code("FILESOURCE","EDIT_DIC_TYPE","文件来源","1"));
		
		g_dictionary.put("EDIT_DIC_TYPENOTICE_TYPE", new Code("NOTICE_TYPE","EDIT_DIC_TYPE","通知类型","1"));
		g_dictionary.put("EDIT_DIC_TYPENOTICE_EMERGENCY", new Code("NOTICE_EMERGENCY","EDIT_DIC_TYPE","通知紧急程度","1"));
		//会议状态
		g_dictionary.put("EDIT_DIC_TYPEMEEETING_STATUS", new Code("MEEETING_STATUS","EDIT_DIC_TYPE","会议状态","1"));
		//用于文件上传
		g_dictionary.put("EDIT_DIC_TYPEBELONGTYPE", new Code("BELONGTYPE","EDIT_DIC_TYPE","所属模块","1"));
		//系统
	    g_dictionary.put("EDIT_DIC_TYPESYS_POSITION", new Code("SYS_POSITION","EDIT_DIC_TYPE","岗位","1"));
		g_dictionary.put("EDIT_DIC_TYPEDESIGNER_LEVEL", new Code("DESIGNER_LEVEL","EDIT_DIC_TYPE","设计师级别","1"));
		g_dictionary.put("EDIT_DIC_TYPESTATUS", new Code("STATUS","EDIT_DIC_TYPE","设计师状态","1"));
		g_dictionary.put("EDIT_DIC_TYPEASSIGNSUPPLIERSTATUS", new Code("SUPPLIERSTATUS","EDIT_DIC_TYPE","供应商状态","1"));
		g_dictionary.put("EDIT_DIC_TYPESUPPLYER_TYPE", new Code("SUPPLYER_TYPE","EDIT_DIC_TYPE","供应商类别","1"));
		g_dictionary.put("EDIT_DIC_TYPEREPORT_TYPE", new Code("REPORT_TYPE","EDIT_DIC_TYPE","漏斗类型","1"));
		
		g_dictionary.put("EDIT_DIC_TYPECONTRACT_TYPE", new Code("CONTRACT_TYPE","EDIT_DIC_TYPE","合同类型","1"));
		g_dictionary.put("EDIT_DIC_TYPEMEETING_TYPE", new Code("MEETING_TYPE","EDIT_DIC_TYPE","会议类型","1"));
		g_dictionary.put("EDIT_DIC_TYPEMY_PLAN_STATUS", new Code("MY_PLAN_STATUS","EDIT_DIC_TYPE","工作计划状态","1"));
		g_dictionary.put("EDIT_DIC_TYPEWORKSTATUS", new Code("WORKSTATUS","EDIT_DIC_TYPE","工作状态","1"));
		g_dictionary.put("EDIT_DIC_TYPEEXAMINE_STATUS", new Code("EXAMINE_STATUS","EDIT_DIC_TYPE","审核状态","1"));
		//带新建状态的审核
        g_dictionary.put("EDIT_DIC_TYPEPRODUCT_STATUS", new Code("PRODUCT_STATUS","EDIT_DIC_TYPE","申请审核状态","1"));
		
		g_dictionary.put("EDIT_DIC_TYPEHANDEL_STATUS", new Code("HANDEL_STATUS","EDIT_DIC_TYPE","投诉处理状态","1"));
		//客户
		g_dictionary.put("EDIT_DIC_TYPECUST_FROM_TYPE", new Code("CUST_FROM_TYPE","EDIT_DIC_TYPE","客户来源","1"));
		g_dictionary.put("EDIT_DIC_TYPEWAY_TYPE", new Code("WAY_TYPE","EDIT_DIC_TYPE","认识途径类别","1"));
		g_dictionary.put("EDIT_DIC_TYPECUST_TYPE", new Code("CUST_TYPE","EDIT_DIC_TYPE","客户类型","1"));
		
		g_dictionary.put("EDIT_DIC_TYPECUST_JOB", new Code("CUST_JOB","EDIT_DIC_TYPE","客户职业","1"));
		g_dictionary.put("EDIT_DIC_TYPEVOCATION", new Code("VOCATION","EDIT_DIC_TYPE","行业","1"));
		g_dictionary.put("EDIT_DIC_TYPEWORK_TYPE", new Code("WORK_TYPE","EDIT_DIC_TYPE","工作类别","1"));
		g_dictionary.put("EDIT_DIC_TYPECUST_STATUS", new Code("CUST_STATUS","EDIT_DIC_TYPE","客户状态","1"));
		g_dictionary.put("EDIT_DIC_TYPEPOTENTIAL_CUST_STATUS", new Code("POTENTIAL_CUST_STATUS","EDIT_DIC_TYPE","潜在客户状态","1"));
		
		
		g_dictionary.put("EDIT_DIC_TYPECALLBACK_TYPE", new Code("CALLBACK_TYPE","EDIT_DIC_TYPE","回访类型","1"));
		g_dictionary.put("EDIT_DIC_TYPECB_STATUS", new Code("CB_STATUS","EDIT_DIC_TYPE","回访状态","1"));
		g_dictionary.put("EDIT_DIC_TYPERESULT_STATUS", new Code("RESULT_STATUS","EDIT_DIC_TYPE","首次回访结果达成","1"));
		g_dictionary.put("EDIT_DIC_TYPEINTENTION_EVALUATE", new Code("INTENTION_EVALUATE","EDIT_DIC_TYPE","意向评估","1"));
		g_dictionary.put("EDIT_DIC_TYPEAPPRAISE_DESIGNER", new Code("APPRAISE_DESIGNER","EDIT_DIC_TYPE","客户对设计师的评价","1"));
		
		g_dictionary.put("EDIT_DIC_TYPEIMPRESSION", new Code("IMPRESSION","EDIT_DIC_TYPE","印象","1"));
		g_dictionary.put("EDIT_DIC_TYPECUST_UNSATI_REASON", new Code("CUST_UNSATI_REASON","EDIT_DIC_TYPE","客户不满意原因","1"));
		g_dictionary.put("EDIT_DIC_TYPEFOLLOW_STATUS", new Code("FOLLOW_STATUS","EDIT_DIC_TYPE","跟进状态","1"));
		g_dictionary.put("EDIT_DIC_TYPEINTERPOSE_TYPE", new Code("INTERPOSE_TYPE","EDIT_DIC_TYPE","干预原因","1"));
		g_dictionary.put("EDIT_DIC_TYPEDISABLE_TYPE", new Code("DISABLE_TYPE","EDIT_DIC_TYPE","客户废单类型","1"));
		
		g_dictionary.put("EDIT_DIC_TYPEASSIGNSTATUS", new Code("ASSIGNSTATUS","EDIT_DIC_TYPE","派单状态","1"));
		g_dictionary.put("EDIT_DIC_TYPEREDISTRICT", new Code("DISTRICT","EDIT_DIC_TYPE","小区","1"));
		//客户需求
		g_dictionary.put("EDIT_DIC_TYPEROOM_TYPE", new Code("ROOM_TYPE","EDIT_DIC_TYPE","居室类型","1"));
		g_dictionary.put("EDIT_DIC_TYPEHOUSE_TYPES", new Code("HOUSE_TYPES","EDIT_DIC_TYPE","户型","1"));
		g_dictionary.put("EDIT_DIC_TYPECLASSICS_TYPE", new Code("CLASSICS_TYPE","EDIT_DIC_TYPE","古典户型","1"));
		g_dictionary.put("EDIT_DIC_TYPEHOUSE_TYPE", new Code("HOUSE_TYPE","EDIT_DIC_TYPE","住宅类型","1"));
		g_dictionary.put("EDIT_DIC_TYPEHAND_HOUSE_STATUS", new Code("HAND_HOUSE_STATUS","EDIT_DIC_TYPE","交房状态","1"));
		g_dictionary.put("EDIT_DIC_TYPEFITMENT_DEGREE", new Code("FITMENT_DEGREE","EDIT_DIC_TYPE","装修程度","1"));
		g_dictionary.put("EDIT_DIC_TYPEPRODESIGN_STYLE", new Code("PRODESIGN_STYLE","EDIT_DIC_TYPE","设计风格","1"));
		g_dictionary.put("EDIT_DIC_TYPEWATER_HEATER_TYPE", new Code("WATER_HEATER_TYPE","EDIT_DIC_TYPE","热水器类型","1"));
		
		g_dictionary.put("EDIT_DIC_TYPECHECK_RESULT", new Code("CHECK_RESULT","EDIT_DIC_TYPE","设计方案审核结果","1"));
		//设计计划状态
		g_dictionary.put("EDIT_DIC_TYPEDESIGN_PLAN_STATUS", new Code("DESIGN_PLAN_STATUS","EDIT_DIC_TYPE","设计计划状态","1"));
		//产品
		//g_dictionary.put("EDIT_DIC_TYPEPRODUCT_BRAND", new Code("PRODUCT_BRAND","EDIT_DIC_TYPE","产品品牌","1"));
		g_dictionary.put("EDIT_DIC_TYPEUNIT", new Code("UNIT","EDIT_DIC_TYPE","产品单位","1"));
		//经营方式
        g_dictionary.put("EDIT_DIC_TYPESALE_MODE", new Code("SALE_MODE","EDIT_DIC_TYPE","产品经营方式","1"));
        g_dictionary.put("EDIT_DIC_TYPEMAIN_OR_SUB", new Code("MAIN_OR_SUB","EDIT_DIC_TYPE","主辅材","1"));
        g_dictionary.put("EDIT_DIC_TYPEMADE_PRODUCT_TYPE", new Code("MADE_PRODUCT_TYPE","EDIT_DIC_TYPE","成品类","1"));
		
		g_dictionary.put("EDIT_DIC_TYPEPRODUCT_PROGRESS", new Code("PRODUCT_PROGRESS","EDIT_DIC_TYPE","产品进展","1"));
		g_dictionary.put("EDIT_DIC_TYPEORDER_TYPE", new Code("ORDER_TYPE","EDIT_DIC_TYPE","订单类型","1"));
		g_dictionary.put("EDIT_DIC_TYPEORDER_STATUS", new Code("ORDER_STATUS","EDIT_DIC_TYPE","订单状态","1"));
		g_dictionary.put("EDIT_DIC_TYPEPRO_ORDER_STATUS", new Code("PRO_ORDER_STATUS","EDIT_DIC_TYPE","产品订单状态","1"));
		g_dictionary.put("EDIT_DIC_TYPEORDER_DETAIL_STATUS", new Code("ORDER_DETAIL_STATUS","EDIT_DIC_TYPE","订单详情状态","1"));
		g_dictionary.put("EDIT_DIC_TYPEPRODUCT_DETAIL_STATUS", new Code("PRODUCT_DETAIL_STATUS","EDIT_DIC_TYPE","产品订单明细状态","1"));
		
		g_dictionary.put("EDIT_DIC_TYPEPRO_CHANGE_TYPE", new Code("PRO_CHANGE_TYPE","EDIT_DIC_TYPE","产品变更类型","1"));
		g_dictionary.put("EDIT_DIC_TYPEPRO_CHANGE_STATUS", new Code("PRO_CHANGE_STATUS","EDIT_DIC_TYPE","产品变更状态","1"));
		g_dictionary.put("EDIT_DIC_TYPEPURCHASE_STATUS", new Code("PURCHASE_STATUS","EDIT_DIC_TYPE","采购单状态","1"));
		//工程
		g_dictionary.put("EDIT_DIC_TYPEPRO_STATUS", new Code("PRO_STATUS","EDIT_DIC_TYPE","工程状态","1"));
		g_dictionary.put("EDIT_DIC_TYPEPROJECT_STATUS", new Code("PROJECT_STATUS","EDIT_DIC_TYPE","工程订单状态","1"));
		g_dictionary.put("EDIT_DIC_TYPECONSTRUCT_STATUS", new Code("CONSTRUCT_STATUS","EDIT_DIC_TYPE","施工进度","1"));
		//用于工程合同信息
		g_dictionary.put("EDIT_DIC_TYPEPROJECT_CONTRACT_TYPE", new Code("PROJECT_CONTRACT_TYPE","EDIT_DIC_TYPE","工程承包方式","1"));
		g_dictionary.put("EDIT_DIC_TYPETZ_APPLY_TYPE", new Code("TZ_APPLY_TYPE","EDIT_DIC_TYPE","施工图纸提供方式","1"));
		g_dictionary.put("EDIT_DIC_TYPEPROHOUSE_TYPE", new Code("PROHOUSE_TYPE","EDIT_DIC_TYPE","工程报价中的户型","1"));
		//施工阶段
		g_dictionary.put("EDIT_DIC_TYPEPROJECT_CONSTRUCTION_STATUS", new Code("PROJECT_CONSTRUCTION_STATUS","EDIT_DIC_TYPE","施工状态","1"));
		g_dictionary.put("EDIT_DIC_TYPECONSTRUCTIONSTATUS_STATUS", new Code("CONSTRUCTIONSTATUS_STATUS","EDIT_DIC_TYPE","施工进度状态","1"));
		g_dictionary.put("EDIT_DIC_TYPEPROJECT_CHANGE_TYPE", new Code("PROJECT_CHANGE_TYPE","EDIT_DIC_TYPE","工程变更类型","1"));
		g_dictionary.put("EDIT_DIC_TYPEIS_CHECK", new Code("IS_CHECK","EDIT_DIC_TYPE","施工验收","1"));
		g_dictionary.put("EDIT_DIC_TYPEIS_PUBLIC", new Code("IS_PUBLIC","EDIT_DIC_TYPE","工程图片是否公开","1"));
		g_dictionary.put("EDIT_DIC_TYPEBUDGET_TYPE", new Code("BUDGET_TYPE","EDIT_DIC_TYPE","工程预算类型","1"));
		g_dictionary.put("EDIT_DIC_TYPEMANAGER_FEE_TYPE", new Code("MANAGER_FEE_TYPE","EDIT_DIC_TYPE","管理费类型","1"));
		g_dictionary.put("EDIT_DIC_TYPEBUDGET_ROOM_TYPE", new Code("BUDGET_ROOM_TYPE","EDIT_DIC_TYPE","预算房间类型","1"));
		
		//g_dictionary.put("EDIT_DIC_TYPETEMPLATE_STATUS", new Code("TEMPLATE_STATUS","EDIT_DIC_TYPE","表单状态","1"));
		//g_dictionary.put("EDIT_DIC_TYPEFIELD_TYPE", new Code("FIELD_TYPE","EDIT_DIC_TYPE","字段类型","1"));
	
	    
		g_dictionary.put("EDIT_DIC_TYPEMONEY_TYPE", new Code("MONEY_TYPE","EDIT_DIC_TYPE","交款类型","1"));
	    //交款记录
		g_dictionary.put("EDIT_DIC_TYPEMONEYNAME", new Code("MONEYNAME","EDIT_DIC_TYPE","款项名称","1"));
		//付款状态 0：未付  1：已付
        g_dictionary.put("EDIT_DIC_TYPEPAYMENT_STATUS", new Code("PAYMENT_STATUS","EDIT_DIC_TYPE","付款状态","1"));
		//付款状态 0：未付  1:已申请 2：已付
        g_dictionary.put("EDIT_DIC_TYPEMONEY_STATUS", new Code("MONEY_STATUS","EDIT_DIC_TYPE","设计款付款状态","1"));
		
		g_dictionary.put("EDIT_DIC_TYPEPROJECT_MONEY_NAME", new Code("PROJECT_MONEY_NAME","EDIT_DIC_TYPE","工程阶段","1"));
		
		g_dictionary.put("EDIT_DIC_TYPEPAY_TYPE", new Code("PAY_TYPE","EDIT_DIC_TYPE","收款类型","1"));
		g_dictionary.put("EDIT_DIC_TYPEMONEY_CHANGE_TYPE", new Code("MONEY_CHANGE_TYPE","EDIT_DIC_TYPE","款项变更类型","1"));
		
		g_dictionary.put("EDIT_DIC_TYPEPROJECT_PROGRESS", new Code("PROJECT_PROGRESS","EDIT_DIC_TYPE","合同交款阶段","1"));
		
		g_dictionary.put("EDIT_DIC_TYPEPAY_MONEY_NAME", new Code("PAY_MONEY_NAME","EDIT_DIC_TYPE","定金款项名称","1"));
		
		//工程订单状态
	    //g_dictionary.put("EDIT_DIC_TYPEPROJECT_ORDER_TYPE", new Code("PROJECT_ORDER_TYPE","EDIT_DIC_TYPE","工程订单状态","1"));
	    //g_dictionary.put("EDIT_DIC_TYPEPROJECT_CONSTRUCTION_STATUS", new Code("PROJECT_CONSTRUCTION_STATUS","EDIT_DIC_TYPE","施工状态","1"));
	
		//	其他
		g_dictionary.put("EDIT_DIC_TYPEROOM_DETAIL_TYPE", new Code("ROOM_DETAIL_TYPE","EDIT_DIC_TYPE","房间类型","1"));
		g_dictionary.put("EDIT_DIC_TYPEBUILDING_TYPE", new Code("BUILDING_TYPE","EDIT_DIC_TYPE","楼盘类型","1"));
		g_dictionary.put("EDIT_DIC_TYPEBUILDING_AREA", new Code("BUILDING_AREA","EDIT_DIC_TYPE","楼盘区域","1"));
		g_dictionary.put("EDIT_DIC_TYPEBELONG_TYPE", new Code("BELONG_TYPE","EDIT_DIC_TYPE","宿主类型","1"));
		g_dictionary.put("EDIT_DIC_TYPETARGET_TYPE", new Code("TARGET_TYPE","EDIT_DIC_TYPE","目标类型","1"));
		g_dictionary.put("EDIT_DIC_TYPECOMPUTE_TYPE", new Code("COMPUTE_TYPE","EDIT_DIC_TYPE","计算类型","1"));
	}  
	function getHouseFacilityHtml(vs,cname,size){
	  if ( !size ) size=10;
	  var str="<table width='100%'><tr>";
	  var temp="";
	  var codes=top.getCodeListByType("HOUSE_FACILITY");
	  var n=0;
	  for ( var i=0;i<codes.length;i++ ) {
		 temp=codes[i].code;
		 n++;
		 str += "<td><input type='checkbox' name='"+cname+"' value='"+temp+"' ";
		 if ( vs.indexOf(temp+",") != -1 || vs.indexOf("," +temp) != -1 || vs == temp ) str += " checked ";
		 str += "></input>"+temp+"</td>";
		 if ( n >= size ) {
		   str+="</tr><tr>";
		   n=0;
		 }
	  }
  for (var i=n;i<size;i++) {
     str+="<td></td>";
  }
  str+="</tr></table>";
  return str;
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
 
	function getAllDesigner(){
		top.sendAjaxRequest("/actions/DesignPlan.action?getAvailableDesignerInfoList",[],getAllDesignerCallback);
	}
	 
	function getAllDesignerCallback(obj){
		try{
		  g_allDesigner=obj.aaData;
		}catch(e){
		}
	}
	function getAllDesignerSelect(sid,init_user_code,ww){
        if ( !g_allDesigner ) return "";
		if ( !init_user_code ) init_user_code="";
		if ( !ww ) ww="120px";
		var ht="<select id='"+sid+"' style='width:"+ww+"'>";
		ht+="<option value=''></option>";
		for(var i=0;i<g_allDesigner.length;i++){
		  ht+="<option value='"+g_allDesigner[i].user_code+"'";
		  if ( g_allDesigner[i].user_code == init_user_code ) ht+="selected ";
		  ht+=">"+top.getUserNameByCode( g_allDesigner[i].user_code);+"</option>";
		}
		ht+="</select>";
		return ht;
	}
	
	function getAllSupplier(){
	var aoData=[];
	aoData.push( { "name": "supplier.status", "value": 1 } );
	top.sendAjaxRequest("/actions/Purchase.action?getSupplierInfoList",aoData,getAllSupplierCallback);
	}
	function getAllSupplierCallback(obj){
		try{
		  g_allSupplier=obj.aaData;
		}catch(e){
		}
	}
	function getAllSupplierSelect(sid,code){
        if ( !g_allSupplier ) return "";
		if ( !code ) code="";
		var ht="<select id='"+sid+"' style='width:120px'>";
		ht+="<option value=''></option>";
		for(var i=0;i<g_allSupplier.length;i++){
		  ht+="<option value='"+g_allSupplier[i].supplier_id+"'";
		  if ( g_allSupplier[i].supplier_id == code ) ht+="selected ";
		  ht+=">"+g_allSupplier[i].supplier_name;+"</option>";
		}
		ht+="</select>";
		return ht;
	}
	
	function getSupplierNameById(id){
	   if(!g_allSupplier){
	      return id;
	   }
	   for(var i=0;i<g_allSupplier.length;i++){
	      if(g_allSupplier[i].supplier_id==id){
		     return g_allSupplier[i].supplier_name;
		  }
	   }
	   return id;
	}
	
	function getAllWorkGroup(){
		  top.sendAjaxRequest("/actions/DailyManage.action?getWorkGroupList",[],getAllWorkGroupCallback);
	}
	function getAllWorkGroupCallback(obj){
		try{
		  g_allWorkGroup=obj.aaData;
		}catch(e){
		}
	}//得到工作组select sid为id init_work_group是初始选中工作组id
	function getAllWorkGroupSelect(sid,init_work_group){
        if ( !g_allWorkGroup ) return "";
		if ( !init_work_group ) init_work_group="";
		var ht="<select id='"+sid+"' style='width:120px'>";
		ht+="<option value=''></option>";
		for(var i=0;i<g_allWorkGroup.length;i++){
		  ht+="<option value='"+g_allWorkGroup[i].group_id+"'";
		  if ( g_allWorkGroup[i].group_id == init_work_group ) ht+="selected ";
		  ht+=">"+ g_allWorkGroup[i].group_name+"</option>";
		}
		ht+="</select>";
		return ht;
	}//由设计师id返回产品设计师id
	function getProductDesignerByDesigner(designerCode){
		 if ( !g_allDesigner ) return "";
		 for(var i=0;i<g_allDesigner.length;i++){
			if(designerCode==g_allDesigner[i].user_code){
				return getProductDesignerByGroupId(g_allDesigner[i].group_id);
			}
		 }
	}//由工作组id返回产品设计师id
	function getProductDesignerByGroupId(group_id){
		if ( !g_allWorkGroup ) return "";
		 for(var i=0;i<g_allWorkGroup.length;i++){
			if(group_id==g_allWorkGroup[i].group_id){
				return g_allWorkGroup[i].product_designer_id;
			}
		 }
	}
	//查询所有楼盘信息
	function getAllBuilding(){
		top.sendAjaxRequest("/actions/Market.action?getBuildingInfoList",[],getAllBuildingCallback);
	}
	 
	function getAllBuildingCallback(obj){
		try{
		  g_allBuildinfo=obj.aaData;
		}catch(e){
		}
	}
	 
	function getAllBuildingSelect(sid,init_id){
        if ( !g_allBuildinfo ) return "";
		if ( !init_id ) init_id="";
		var ht="<select id='"+sid+"' style='width:120px'>";
		ht+="<option value=''></option>";
		for(var i=0;i<g_allBuildinfo.length;i++){
		  ht+="<option value='"+g_allBuildinfo[i].id+"'";
		  if ( g_allBuildinfo[i].id == init_id ) ht+="selected ";
		  ht+=">"+g_allBuildinfo[i].building_name+"</option>";
		}
		ht+="</select>";
		return ht;
	}
 
	function setProductTypeTree(t){
    productTypeTree=t;
 }
 
	function getProductTypeNameById(pid){
   var tName="";
   try{
      tName = productTypeTree.getNodePath(pid);
   }catch(e){
   }
   return tName;
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
 //custCode 客户编号 ；initPage 初始显示显示页面；optType（query，insert，update） 操作类型 TabName 标签名 ;designer 设计师;
	function openCustDetailPage(custCode,initPage,optType,tabName,designer,tabTitle){
    // 判断是否已经存在客户明细页面
		if(optType!='insert'&&custCode==''){
			return;
		}
		var xurl="";
		if(!tabName)tabName="客户详细信息";
		if(tab.isTabItemExist(tabName)){
			tab.removeTabItem(tabName);
		}
		if(designer){
			xurl="pages/pro09/custDetailInfo.html?optType="+optType+"&initPage="+initPage+"&cust_code="+custCode+"&designer="+designer;
		}else{
			xurl="pages/pro09/custDetailInfo.html?optType="+optType+"&initPage="+initPage+"&cust_code="+custCode;
		}
		if(tabTitle){
		    xurl+="&tabTitle="+tabTitle;
		}
		toSysTab(tabName,xurl);
	}
	//根据标签标题删除标签
	function removeTabByTabTitle(tabTitle){
		if(tab.isTabItemExist(tabTitle)){
			tab.removeTabItem(tabTitle);
		}
		//alert(tab.isTabItemExist(tabTitle));
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
		/*if(isDesigner(nowUserCode)) {
			if(roles!=''){
				roles=roles+','+g_allRoleUser[i].roleId;
			}else{
				roles=roles+','+g_allRoleUser[i].roleId;
			}
		}
		roles[j]='designer';*/
		return roles;
	}
	function isDesigner(nowUserCode){
		for(var i=0;i<g_allDesigner.length;i++){
		  if ( g_allDesigner[i].user_code== nowUserCode ){
			return true;
		  }
		}
		return false;
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
	
	 function openOptPage(key_model,id){
		//根据来源打开不同页面
		var xurl='';
		if(key_model=='02'){//工程订单
			xurl="pages/pro09/orderInfo.html?optType=update&id="+id;
			top.openCustDetailPage(id,"3-0","update","客户详细信息");
		}else if(key_model=='03'){//工程报价
		    xurl="/pages/pro09/quotedprice.html?optType=update&base_id="+id;
			openDialog("工程报价审核",xurl,true,950,580,null);//getOtherProjectDetailInfo
		}else if(key_model=='04'){//产品报价
			xurl="pages/pro09/productQuoteInfo.html?optType=update&id="+id;
			top.openDialog("产品报价信息",xurl,true,1100,600,null);
		}else if(key_model=='05'){//产品订单
			xurl="pages/pro09/proOrderInfo.html?optType=update&id="+id;
			top.openDialog("产品订单信息",xurl,true,1100,600,null);
		}else if(key_model=='06'){//上传设计方案
			top.openCustDetailPage(id,"2-2","update","客户详细信息");
		}else if(key_model=='08'){//回访管理
			top.openCustDetailPage(id,"1-0","update","客户详细信息");
		}else if(key_model=='01'){//客户基本信息管理
			top.openCustDetailPage(id,"0-0","update","客户详细信息");
		}else if(key_model=='09'){//付款管理
			top.openCustDetailPage(id,"6-0","update","客户详细信息");
		}else if(key_model=="14"){//施工图上传
		    top.openCustDetailPage(id,"2-4","update","客户详细信息");
		}else if(key_model=="15"){
		    xurl="pages/pro09/productQuoteInfo.html?optType=insert";
			top.openDialog("产品报价",xurl,true,1100,600,null);
		}
		else if(key_model=="12"){//采购管理
		    xurl="pages/pro09/purchaseOrderInfo.html?optType=check&order_id="+id;
		   top.openDialog("采购单",xurl,true,800,500);
		}
		else if(key_model=="13"){//客户验收
		    var xurl="pages/pro09/productCheckPage.html?id="+id;
		    top.openDialog("产品订单验收",xurl,true,1100,600,null);
		}else if(key_model=="16"){
			top.openCustDetailPage(id,"0-0","update","客户详细信息");
			//var xurl="pages/pro09/disableCustRecordInfo.html?id="+id;
			//top.openDialog("客户废单信息",xurl,true,700,330,null);
		}
	  }
	  
	  // 返回所有的设计部门的选择列表
	  function getDesignDeptListSelectHtml(sid,init_id){
        if ( !deptData ) return "";
		if ( !init_id ) init_id="";
		var ht="<select id='"+sid+"' style='width:120px'>";
		ht+="<option value=''></option>";
		for(var i=0;i<deptData.length;i++){
		  if ( deptData[i].dept_type == 'design' ) {
			  ht+="<option value='"+deptData[i].deptId+"'";
			  if ( deptData[i].deptId == init_id ) ht+="selected ";
			  ht+=">"+deptData[i].name+"</option>";
		  }
		}
		ht+="</select>";
		return ht;
	  }
	  
	  //获取所有的工程进度信息
	  function getProcessInfoList(){
         top.sendAjaxRequest("/actions/ProjectOrder.action?getAllProcessInfo",[],getProjeccInfoListCallback);
	  }
	  
	  function getProjeccInfoListCallback(obj){
		   try{
		     if(obj.status){
		       g_allProcessInfo=obj.body;
			 }
		   }catch(e){
		   }
		   
	  }
	  //工程进度下拉列表框
	  function getProcesInfoSelectHtml(id,init_code,ww){
	    if(!g_allProcessInfo){ return "";}
	    if(!ww){
		  ww="120px";
		}
		var ht="<select id='"+id+"' style='width:"+ww+"'>";
		if(init_code!=""){
		  ht+="<option value=''></option>";
		}
		for(var i=0;i<g_allProcessInfo.length;i++){
		   ht+="<option value='"+g_allProcessInfo[i].process_code+"'";
		   if(g_allProcessInfo[i].process_code==init_code){
			  ht+="selected";
		   }
		   ht+=">"+g_allProcessInfo[i].process_name+"</option>";
		}
		return ht;
	  }
	  //根据工程进度编号获取工程进度名称
	  function getProcessNameByCode(code){
	    if(!g_allProcessInfo){ return code;}
		for(var i=0;i<g_allProcessInfo.length;i++){
		  if(g_allProcessInfo[i].process_code==code){
		     return g_allProcessInfo[i].process_name;
		  }
		}
		return code;
	  }