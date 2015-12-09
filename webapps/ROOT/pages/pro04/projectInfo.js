   function optCallback(obj){
       top.showLoadingInfo(false);
	   try{
	    if ( obj.status == true ){
	      isSaveOK = true;
	      top.showInfoWinOK("操作成功");
		  // refresh detail info
		  var aoData=[];
		  aoData.push( { "name": "info.id", "value":projectId } );
		  top.sendAjaxRequest("/actions/ProMVTProject.action?getProProjectDetailInfo",aoData,infoCallback);
	    }else{
	      isSaveOK = false;
	      top.showInfoWinError("操作失败 "+obj.msg);
	    }
	   }catch(e){
		  top.showInfoWinError("处理异常:"+e.message);
	   }
   }
   
   function initData(){
	   try{
		        optType=top.getUrlParam(document.URL,"opt");
		        projectId=top.getUrlParam(document.URL,"projectId");
				var selectedIndex=top.getUrlParam(document.URL,"selectedIndex");
				if ( !selectedIndex || selectedIndex == '' ) selectedIndex=0;
				$( "#td_sales_manager_id" ).html( top.getSaleProjectManagerHtmlList("o_sales_manager_id", true) );
			    var aoData=[];
		        aoData.push( { "name": "info.id", "value":projectId } );
				top.showLoadingInfo(true);
		        top.sendAjaxRequest("/actions/ProMVTProject.action?getProProjectDetailInfo",aoData,infoCallback);
			    $( "#tabs ul" ).tabs({ selected: selectedIndex });
	   }catch(e){
		   top.showInfoWinError(e.message);
	   }
   }

   function toEditModeProjectInfo(){
        $("#span_contract_code").hide();
		$("#span_contract_a_date").hide();
		$("#span_plan_contact_money").hide();
		$("#span_service_begin").hide();
		$("#span_service_end").hide();
		$("#span_pay_type").hide();
		$("#span_service_dec").hide();
		$("#span_assess_condition").hide();
	    $("#span_sales_manager_id").hide();
		$("#span_service_period").hide();
		
		$("#o_contract_code").show();
		$("#o_contract_a_date").show();
		$("#o_plan_contact_money").show();
		$("#o_service_begin").show();
		$("#o_service_end").show();
		$("#o_pay_type").show();
		$("#o_service_dec").show();
		$("#o_assess_condition").show();
		$("#o_sales_manager_id").show();
		$("#o_service_period").show();
	
		$('#toEditModeProjectInfoBtn').hide();
		$('#saveProjectInfoBtn').show();
		$('#cancelProjectInfoBtn').show();
   }
   
   function toViewModeProjectInfo(){
        $("#span_contract_code").show();
		$("#span_contract_a_date").show();
		$("#span_plan_contact_money").show();
		$("#span_service_begin").show();
		$("#span_service_end").show();
		$("#span_pay_type").show();
		$("#span_service_dec").show();
		$("#span_assess_condition").show();
	    $("#span_sales_manager_id").show();
		$("#span_service_period").show();
		
		$("#o_contract_code").hide();
		$("#o_contract_a_date").hide();
		$("#o_plan_contact_money").hide();
		$("#o_service_begin").hide();
		$("#o_service_end").hide();
		$("#o_pay_type").hide();
		$("#o_service_dec").hide();
		$("#o_assess_condition").hide();
		$("#o_sales_manager_id").hide();
		$("#o_service_period").hide();
	
	    $('#saveProjectInfoBtn').hide();
		$('#cancelProjectInfoBtn').hide();
	    if ( isHasEditRight ) {
		 $('#toEditModeProjectInfoBtn').show();
		} else {
		 $('#toEditModeProjectInfoBtn').hide();
		}
   }
   
   
   function infoCallback(obj){
    top.showLoadingInfo(false);
    try{
	 projectObj=obj.body.projectInfo;
	 $("#o_service_period").attr("disabled",true);
	 var currentUser=top.top.getCurrentUser();
	 currentUserCode=currentUser.userCode;
	 if ( currentUser == null ) {
	  isHasEditRight=false;
	 } else if ( projectObj.project_status != 4 && projectObj.project_status != 5 ) { // 判断项目状态是否已关闭
	  isHasEditRight = ( top.g_isPermit('mvt_editProject') && projectObj.project_manager_id == currentUserCode );
	 }
	 
	 canEditWorktime=true;
	 
	 // 隐藏项目基本信息输入框
	 toViewModeProjectInfo();
	 
	 if ( !isHasEditRight ) {
		$('#saveProjectInfoBtn').hide();
		$('#toEditModeProjectInfoBtn').hide();
		$('#btnAddMilestone').hide();
		$('#btnSubmitMilestone').hide();
		$("#fileListTable").hide();
		$("#btn_yspg2").hide();
		$("#btn_yspg3").hide();
	 } else {
		$('#saveProjectInfoBtn').hide();
		$('#toEditModeProjectInfoBtn').show();
		$('#btnAddMilestone').show();
		$('#btnSubmitMilestone').show();
		if ( projectObj.project_status != 0 ) {
		  if ( $("#o_contract_code").val() != '' ) $("#o_contract_code").attr("disabled",true);
		  if ( $("#o_contract_a_date").val() != '' ) $("#o_contract_a_date").attr("disabled",true);
		  if ( $("#o_pay_type").val() != '' ) $("#o_pay_type").attr("disabled",true);
		  if ( $("#o_plan_contact_money").val() != '' ) $("#o_plan_contact_money").attr("disabled",true);
		  if ( $("#o_service_begin").val() != '' ) $("#o_service_begin").attr("disabled",true);
		  if ( $("#o_service_end").val() != '' ) $("#o_service_end").attr("disabled",true);
		}
		try{
           clearInterval( interId );
	       interId = setInterval("computService_period()", 3000 );
        }catch(e){}
		createUploader();
	 }
	   
	            $("#o_funnel_id").val( projectObj.funnel_id );
				$("#td_funnel_id").html( projectObj.funnel_id );
				$("#o_project_code").val( projectObj.project_code );
				$("#td_project_code").html( projectObj.project_code );
				$("#td_customer_name").html( top.getCustomerNameById( projectObj.customer_name ) );
				$("#o_project_name").val( projectObj.project_name );
				$("#o_contract_code").val( projectObj.contract_code );
				$("#span_contract_code").html( projectObj.contract_code );
				$("#o_contract_type").val( projectObj.contract_type );
				$("#o_customer_name").val( projectObj.customer_name );
				$("#o_pay_type").val( projectObj.pay_type );
				$("#span_pay_type").html( projectObj.pay_type );
				$("#o_sales_manager_id").val( projectObj.sales_manager_id );
				$("#span_sales_manager_id").html( top.getUserNameByCode( projectObj.sales_manager_id ) );
				$("#o_project_manager_id").val( projectObj.project_manager_id );
				$("#td_project_manager_id").html( top.getUserNameByCode( projectObj.project_manager_id ) );
				$("#o_senior_project_manager").val( projectObj.senior_project_manager );
				$("#td_senior_project_manager").html( top.getUserNameByCode( projectObj.senior_project_manager ) );
				$("#o_project_director").val( projectObj.project_director );
				$("#td_project_director").html( top.getUserNameByCode( projectObj.project_director ) );
				$("#o_payment_area").val( projectObj.payment_area );
				$("#o_service_period").val( projectObj.service_period );
				$("#span_service_period").html( projectObj.service_period );
				$("#o_service_dec").val( projectObj.service_dec );
				$("#o_assess_condition").val( projectObj.assess_condition );
				$("#span_service_dec").html( top.toHTMLcode(projectObj.service_dec) );
				$("#span_assess_condition").html( top.toHTMLcode(projectObj.assess_condition) );
				$("#o_project_report").val( projectObj.project_report );
				$("#o_create_date").val( projectObj.create_date );
				$("#td_create_date").html( top.getTimeStr( projectObj.create_date, true ) );
				$("#o_customer_type_id").val( projectObj.customer_type_id );
				$("#o_customer_area_id").val( projectObj.customer_area_id );
				$("#o_first_factory_id").val( projectObj.first_factory_id );
				$("#o_product_line_id").val( projectObj.product_line_id );
				$("#o_service_type_id").val( projectObj.service_type_id );
				$("#o_project_status").val( projectObj.project_status );
				
				$("#o_contract_code").val( projectObj.contract_code );
				$("#o_contract_a_date").val( top.getTimeStr( projectObj.contract_a_date, true ) );
				$("#span_contract_code").html( projectObj.contract_code );
				$("#span_contract_a_date").html( top.getTimeStr( projectObj.contract_a_date, true ) );
				$("#o_plan_contact_money").val( projectObj.plan_contact_money );
				$("#span_plan_contact_money").html( projectObj.plan_contact_money );
				gContact_money = projectObj.plan_contact_money;
				if ( gContact_money == '' || !gContact_money ) gContact_money=0;
				gContact_money = Number(gContact_money);
				
				$("#td_project_status").html( top.getCodeName( "PROJECT_STATUS", projectObj.project_status ) );
				$("#o_service_begin").val( top.getTimeStr( projectObj.service_begin, true ) );
				$("#o_service_end").val( top.getTimeStr( projectObj.service_end, true ) );
				$("#span_service_begin").html( top.getTimeStr( projectObj.service_begin, true ) );
				$("#span_service_end").html( top.getTimeStr( projectObj.service_end, true ) );
				$("#td_customer_type_id").html( top.myGetCodeName( "CUST_TYPE", projectObj.customer_type_id ) );
				$("#td_customer_area_id").html( top.myGetCodeName( "CUST_AREA", projectObj.customer_area_id ) );
				$("#td_contract_type").html( top.myGetCodeName( "CONTRACT_TYPE", projectObj.contract_type ) );
				$("#td_service_type_id").html( top.myGetCodeName( "SERVICE_TYPE", projectObj.service_type_id ) );
				$("#td_first_factory_id").html( top.myGetCodeName( "PROVIDER", projectObj.first_factory_id ) );
				$("#td_product_line_id").html( top.myGetCodeName( "PRODUCT_LINE", projectObj.product_line_id ) );
				$("#td_payment_area").html( top.myGetCodeName( "PAYMENT_AREA", projectObj.payment_area ) );
				
				i_fileChangeoverYname="";
                i_fileChangeoverZname="";
 
	    uploadFileNames=[];
		$("#btnAddFileSubmit").hide();
		inputFileIndex=0;
		isHasYSPG1=false;
		isHasYSPG2=false;
		isHasYSPG3=false;
		checkStatusYSPG1="";
        checkStatusYSPG2="";
        checkStatusYSPG3="";
		isHasNoCheckChangeover=false;
		isAllPassedChangeover=true;
		addMilestoneIndex=0;
		$("#filePathList").html("");
		flowFiles=[];
		dontShowFiles=[];
		closeProjectCheckStr="";
		
        if ( obj.status == true ){
		  isSPM=(projectObj.senior_project_manager==currentUserCode)?true:false;
		  isPMO=top.isPMO(currentUserCode);
		  isPM=(projectObj.project_manager_id==currentUserCode)?true:false;
          var o=obj.body;
		  var ht="";
		  var list=null;
		  var to=null;
		  
		  // 实际费用
		  list=o.FinanceImport;
		  if ( list ) {
		   var total_all=0;
		   for ( var i=0;i<list.length;i++ ) {
		    to = list[i];
			$("#s_r_15").html( to.hardware_purchase );
			$("#s_r_16").html( to.original_order );
			$("#s_r_17").html( to.outsourcing );
			$("#s_r_18").html( to.hardware_repair );
			$("#s_r_19").html( to.rengongchengben );
			$("#s_r_20").html( to.chailv );
			$("#s_r_21").html( to.lipin );
			$("#s_r_22").html( to.qitazhaodai );
			$("#s_r_23").html( to.huiyi );
			$("#s_r_24").html( to.zixun );
			$("#s_r_25").html( to.peixun );
			$("#s_r_26").html( to.fangzu );
			$("#s_r_27").html( to.qita );
			$("#s_r_28").html( to.kuaidi );
			$("#s_r_6").html( to.zhizaofeiyong );
			
			var t=0;
			var v=Number(top.g_GetNumValue( to.hardware_purchase ));
			$("#s_rp_15").html( getPercent( v ) );
			t+=v;
			v=Number(top.g_GetNumValue( to.original_order ));
			$("#s_rp_16").html( getPercent( v ) );
			t+=v;
			v=Number(top.g_GetNumValue( to.outsourcing ));
			$("#s_rp_17").html( getPercent( v ) );
			t+=v;
			v=Number(top.g_GetNumValue( to.hardware_repair ));
			$("#s_rp_18").html( getPercent( v ) );
			t+=v;
			t=(Math.round( t*100 ) / 100);
			$("#total_1_6").html( "<b>"+getPercent( t )+"</b>" );
			$("#total_1_4").html( "<b>"+t+"</b>" );

			total_all+=t;
			t=0;
			v=Number(top.g_GetNumValue( to.rengongchengben ));
			$("#s_rp_19").html( getPercent( v ) );
			t+=v;
			v=Number(top.g_GetNumValue( to.chailv ));
			$("#s_rp_20").html( getPercent( v ) );
			t+=v;
			v=Number(top.g_GetNumValue( to.lipin ));
			$("#s_rp_21").html( getPercent( v ) );
			t+=v;
			v=Number(top.g_GetNumValue( to.qitazhaodai ));
			$("#s_rp_22").html( getPercent( v ) );
			t+=v;
			v=Number(top.g_GetNumValue( to.huiyi ));
			$("#s_rp_23").html( getPercent( v ) );
			t+=v;
			v=Number(top.g_GetNumValue( to.zixun ));
			$("#s_rp_24").html( getPercent( v ) );
			t+=v;
			v=Number(top.g_GetNumValue( to.peixun ));
			$("#s_rp_25").html( getPercent( v ) );
			t+=v;
			v=Number(top.g_GetNumValue( to.fangzu ));
			$("#s_rp_26").html( getPercent( v ) );
			t+=v;
			v=Number(top.g_GetNumValue( to.qita ));
			$("#s_rp_27").html( getPercent( v ) );
			t+=v;
			v=Number(top.g_GetNumValue( to.kuaidi ));
			$("#s_rp_28").html( getPercent( v ) );
			t+=v;

			t=(Math.round( t*100 ) / 100);
			total_all+=t;
			$("#total_2_6").html( "<b>"+getPercent( t )+"</b>" );
			$("#total_2_4").html( "<b>"+t+"</b>" );
			
			t=Number(top.g_GetNumValue( to.zhizaofeiyong ));
			t=(Math.round( t*100 ) / 100);
			total_all+=t;
			$("#s_rp_6").html( getPercent( t ) );
			$("#total_3_6").html( "<b>"+getPercent( t )+"</b>" );
			$("#total_3_4").html( "<b>"+t+"</b>" );
			
			total_all=(Math.round( total_all*100 ) / 100);
			$("#total_all_4").html( total_all );
			$("#total_all_6").html( getPercent( total_all ) );
		   }
		  }
		  
		  
		  // 审批记录
		  list=o.approvalList;
		  var approvalChangeoverHt="";
		  var approvalYSPGHt="";
		  var approvalLCBHt="";
		  var approvalLCloseHt="";
		  var approvalWTHt="";
		  var hasUncheckClose=false;
		  
		  if ( list ) {
		   for ( var i=0;i<list.length;i++ ) {
		    to = list[i];
			if ( to.type == '5' ) { // 项目交接会;5; 
				approvalChangeoverHt+='<tr><td width="10%" align="center" class="listTd">'+ top.getCodeName( "APPROVAL_TYPE", to.type ) +'</td>';
				approvalChangeoverHt+='<td width="10%" align="center" class="listTd">'+top.getUserNameByCode(to.shenpi_user)+'</td>';
				approvalChangeoverHt+='<td width="20%" align="center" class="listTd">';
				if ( to.status == '1' ) isHasNoCheckChangeover=true;
				if ( to.status == '0' ) isAllPassedChangeover=false;
				if ( to.status == '1' && (isPMO || to.shenpi_user == currentUserCode ) ) {
				  approvalChangeoverHt+='<select id="check_result_'+to.id+'"><option value=""></option><option value="2">通过</option><option value="0">不通过</option></select>';
				} else {
				  approvalChangeoverHt+=top.getCodeName( "APPROVAL_RESULT", to.status );
				}
				approvalChangeoverHt+='</td>';
				approvalChangeoverHt+='<td width="20%" align="center" class="listTd">';
                if ( to.status == '1' && (isPMO || to.shenpi_user == currentUserCode ) ) {
				   approvalChangeoverHt+='<textarea id="check_yijian_'+to.id+'" ';
				   approvalChangeoverHt+=' cols="20" rows="2">'+to.shenpiyijian+'</textarea>';
                } else {
				   approvalChangeoverHt += to.shenpiyijian;
				}
                approvalChangeoverHt+='</td>';
				approvalChangeoverHt+='<td width="15%" align="center" class="listTd">'+ top.getTimeStr( to.tijiao_date ) +'</td>';
				approvalChangeoverHt+='<td width="15%" align="center" class="listTd">'+ top.getTimeStr( to.shenpi_date ) +'</td>';
				approvalChangeoverHt+='<td width="10%" align="center" class="listTd">';
				if ( to.status == '1' && (isPMO || to.shenpi_user == currentUserCode ) ) {
				   approvalChangeoverHt+='<input type="button" value="确定" onclick="checkSubmit('+to.id+',\''+to.type+'\',\''+to.url+'\')"></input>';
				}
				approvalChangeoverHt+='</td></tr>';
			} else if ( to.type == '2' || to.type == '3' || to.type == '4' ) { // 预算评估;2;    预算再评估;3;		预算半程更新;4;
			    //if ( to.type=='2' ) {  // 已经取消【预算评估】
				//   checkStatusYSPG1=to.status;
				//} else 
				if ( to.type=='3' && checkStatusYSPG2 == '') {
				   checkStatusYSPG2=to.status;
				} else if ( to.type=='4' && checkStatusYSPG3 == '' ) {
				   checkStatusYSPG3=to.status;
				}
			
				approvalYSPGHt+='<tr><td width="10%" align="center" class="listTd">'+ top.getCodeName( "APPROVAL_TYPE", to.type ) +'</td>';
				approvalYSPGHt+='<td width="10%" align="center" class="listTd">'+top.getUserNameByCode(to.shenpi_user)+'</td>';
				approvalYSPGHt+='<td width="20%" align="center" class="listTd">';
				if ( to.status == '1' &&  ( to.shenpi_user == currentUserCode ) ) {
				  approvalYSPGHt+='<select id="check_result_'+to.id+'"><option value=""></option><option value="2">通过</option><option value="0">不通过</option></select>';
				} else {
				  approvalYSPGHt+=top.getCodeName( "APPROVAL_RESULT", to.status );
				}
				approvalYSPGHt+='</td>';
				
				approvalYSPGHt+='<td width="20%" align="center" class="listTd">';
                if ( to.status == '1' &&  ( to.shenpi_user == currentUserCode ) ) {
 				   approvalYSPGHt+='<textarea id="check_yijian_'+to.id+'" ';
				   approvalYSPGHt+=' cols="20" rows="2">'+to.shenpiyijian+'</textarea>';
                } else {
				   approvalYSPGHt += to.shenpiyijian;
				}
                approvalYSPGHt+='</td>';

				approvalYSPGHt+='<td width="15%" align="center" class="listTd">'+ top.getTimeStr( to.tijiao_date ) +'</td>';
				approvalYSPGHt+='<td width="15%" align="center" class="listTd">'+ top.getTimeStr( to.shenpi_date ) +'</td>';
				approvalYSPGHt+='<td width="10%" align="center" class="listTd">';
				if ( to.status == '1' && ( to.shenpi_user == currentUserCode ) ) {
				   approvalYSPGHt+='<input type="button" value="确定" onclick="checkSubmit('+to.id+',\''+to.type+'\',\''+to.url+'\')"></input>';
				}
				approvalYSPGHt+='</td></tr>';
			} else if ( to.type == '6' || to.type == '7' || to.type == '10' || to.type == '13' ) { // 里程碑设定;6;		里程碑更新;7;	里程碑作废 13	baseline修改;10;	
				approvalLCBHt+='<tr><td width="20%" align="center" class="listTd">'+ top.getCodeName( "APPROVAL_TYPE", to.type )+" ";
				approvalLCBHt+=getMilestoneName(to.url, o.milestoneList) +'</td>';
				approvalLCBHt+='<td width="10%" align="center" class="listTd">'+top.getUserNameByCode(to.shenpi_user)+'</td>';
				approvalLCBHt+='<td width="10%" align="center" class="listTd">';
				var isHasCheckRight=false;
				if ( to.status == '1' ) {
				  if ( (to.type == '6' || to.type == '10' || to.type == '13') && ( to.shenpi_user == currentUserCode ) ) {
				    isHasCheckRight=true;
				  } else if ( to.type == '7' && isPMO ) {
				    isHasCheckRight=true;
				  }
				}
				if ( isHasCheckRight ) {
				  approvalLCBHt+='<select id="check_result_'+to.id+'"><option value=""></option><option value="2">通过</option><option value="0">不通过</option></select>';
				} else {
				  approvalLCBHt+=top.getCodeName( "APPROVAL_RESULT", to.status );
				}
				approvalLCBHt+='</td>';
				
				approvalLCBHt+='<td width="20%" align="center" class="listTd">';
                if ( isHasCheckRight ) {
				   approvalLCBHt+='<textarea id="check_yijian_'+to.id+'" ';
				   approvalLCBHt+=' cols="20" rows="2">'+to.shenpiyijian+'</textarea>';
                } else {
				   approvalLCBHt += to.shenpiyijian;
				}
                approvalLCBHt+='</td>';

				approvalLCBHt+='<td width="15%" align="center" class="listTd">'+ top.getTimeStr( to.tijiao_date ) +'</td>';
				approvalLCBHt+='<td width="15%" align="center" class="listTd">'+ top.getTimeStr( to.shenpi_date ) +'</td>';
				approvalLCBHt+='<td width="10%" align="center" class="listTd">';
				if ( isHasCheckRight ) {
				   approvalLCBHt+='<input type="button" value="确定" onclick="checkSubmit('+to.id+',\''+to.type+'\',\''+to.url+'\')"></input>';
				}
				approvalLCBHt+='</td></tr>';
			} else if ( to.type == '11' || to.type == '14' ) { // 项目关闭  项目强制关闭14
				approvalLCloseHt+='<tr><td width="10%" align="center" class="listTd">'+ top.getCodeName( "APPROVAL_TYPE", to.type ) +'</td>';
				approvalLCloseHt+='<td width="10%" align="center" class="listTd">'+top.getUserNameByCode(to.shenpi_user)+'</td>';
				approvalLCloseHt+='<td width="20%" align="center" class="listTd">';
				if ( to.status == '1' &&  ((isPMO && to.shenpi_user == '' ) || ( to.shenpi_user == currentUserCode ) ) ) {
				  approvalLCloseHt+='<select id="check_result_'+to.id+'"><option value=""></option><option value="2">通过</option><option value="0">不通过</option></select>';
				} else {
				  approvalLCloseHt+=top.getCodeName( "APPROVAL_RESULT", to.status );
				}
				approvalLCloseHt+='</td>';
				
				approvalLCloseHt+='<td width="20%" align="center" class="listTd">';
                if ( to.status == '1' &&  ((isPMO && to.shenpi_user == '' ) || ( to.shenpi_user == currentUserCode ) ) ) {
  				   approvalLCloseHt+='<textarea id="check_yijian_'+to.id+'" ';
				   approvalLCloseHt+=' cols="20" rows="2">'+to.shenpiyijian+'</textarea>';
                } else {
				   approvalLCloseHt += to.shenpiyijian;
				}
                approvalLCloseHt+='</td>';

				approvalLCloseHt+='<td width="15%" align="center" class="listTd">'+ top.getTimeStr( to.tijiao_date ) +'</td>';
				approvalLCloseHt+='<td width="15%" align="center" class="listTd">'+ top.getTimeStr( to.shenpi_date ) +'</td>';
				approvalLCloseHt+='<td width="10%" align="center" class="listTd">';
				if ( to.status == '1' &&  ((isPMO && to.shenpi_user == '' ) || ( to.shenpi_user == currentUserCode ) ) ) {
				  if ( isPMO ) {
				   approvalLCloseHt+='<input type="button" value="确定" onclick="pmoCheckCloseProject('+to.id+',\''+to.type+'\',\''+to.url+'\')"></input>';
				  } else {
				   approvalLCloseHt+='<input type="button" value="确定" onclick="checkSubmit('+to.id+',\''+to.type+'\',\''+to.url+'\')"></input>';
				  }
				}
				approvalLCloseHt+='</td></tr>';
				if ( to.status == '1' ) {
				  hasUncheckClose=true;
				}
			} else if ( to.type == '15' ) {
			    approvalWTHt+='<tr><td width="10%" align="center" class="listTd">'+ top.getCodeName( "APPROVAL_TYPE", to.type )+" ";
				approvalWTHt+=getMilestoneName(to.url, o.milestoneList) +'</td>';
				approvalWTHt+='<td width="10%" align="center" class="listTd">'+top.getUserNameByCode(to.shenpi_user)+'</td>';
				approvalWTHt+='<td width="20%" align="center" class="listTd">';
				var isHasCheckRight=false;
				if ( to.status == '1' ) {
				  if ( to.shenpi_user == currentUserCode ) {
				    isHasCheckRight=true;
				  }
				  canEditWorktime=false;
				} else if ( to.status == '2' ) {
				  canEditWorktime=false;
				}
				if ( isHasCheckRight ) {
				  approvalWTHt+='<select id="check_result_'+to.id+'"><option value=""></option><option value="2">通过</option><option value="0">不通过</option></select>';
				} else {
				  approvalWTHt+=top.getCodeName( "APPROVAL_RESULT", to.status );
				}
				approvalWTHt+='</td>';
				
				approvalWTHt+='<td width="20%" align="center" class="listTd">';
                if ( isHasCheckRight ) {
				   approvalWTHt+='<textarea id="check_yijian_'+to.id+'" ';
				   approvalWTHt+=' cols="20" rows="2">'+to.shenpiyijian+'</textarea>';
                } else {
				   approvalWTHt += to.shenpiyijian;
				}
                approvalWTHt+='</td>';

				approvalWTHt+='<td width="15%" align="center" class="listTd">'+ top.getTimeStr( to.tijiao_date ) +'</td>';
				approvalWTHt+='<td width="15%" align="center" class="listTd">'+ top.getTimeStr( to.shenpi_date ) +'</td>';
				approvalWTHt+='<td width="10%" align="center" class="listTd">';
				if ( isHasCheckRight ) {
				   approvalWTHt+='<input type="button" value="确定" onclick="checkSubmit('+to.id+',\''+to.type+'\',\''+to.url+'\')"></input>';
				}
				approvalWTHt+='</td></tr>';
			}
		   }
		   
		   if ( checkStatusYSPG2 != '2') {
			  closeProjectCheckStr+="<br/>未完成预算评估";
		   }
			
			if ( approvalChangeoverHt != '' ) {
			  $("#approvalChangeoverHead").show();
			  $("#approvalChangeoverList").show();
			  $("#approvalChangeoverList").html( approvalChangeoverHt );
			  $("#div_Changeover_checklist").show();
			} else {
			  $("#approvalChangeoverHead").hide();
			  $("#approvalChangeoverList").hide();
			  $("#div_Changeover_checklist").hide();
			}

			if ( approvalYSPGHt != '' ) {
			  $("#approvalYSPGHead").show();
			  $("#approvalYSPGList").show();
			  $("#approvalYSPGList").html( approvalYSPGHt );
			} else {
			  $("#approvalYSPGHead").hide();
			  $("#approvalYSPGList").hide();
			}
			
			if ( approvalLCBHt != '' ) {
			  $("#approvalMilestoneHead").show();
			  $("#approvalMilestoneList").show();
			  $("#approvalMilestoneList").html( approvalLCBHt );
			  $("#div_Milestone_content").css("height","170px");
			  $("#div_Milestone_checklist").show();
			} else {
			  $("#approvalMilestoneHead").hide();
			  $("#approvalMilestoneList").hide();
			  $("#div_Milestone_content").css("height","400px");
			  $("#div_Milestone_checklist").hide();
			}
			
			if ( approvalWTHt != '' ) {
			  $("#approvalWTHead").show();
			  $("#approvalWTList").show();
			  $("#approvalWTList").html( approvalWTHt );
			} else {
			  $("#approvalWTHead").hide();
			  $("#approvalWTList").hide();
			}

			// 预算再评估
			if ( checkStatusYSPG2 == '2' || checkStatusYSPG2 == '1' || !isPM ) {
			  showHideYSPG("2",false);
			} else if ( isPM ) {
			  showHideYSPG("2",true);
			} else {
			  showHideYSPG("2",false);
			}
			// 预算半程更新
			if ( checkStatusYSPG3 == '2' || checkStatusYSPG3 == '1' || !isPM ) {
			  showHideYSPG("3",false);
			} else if ( isPM && checkStatusYSPG2 == '2' ) {
			  showHideYSPG("3",true);
			} else {
			  showHideYSPG("3",false);
			}
		  }
		  
		  // 预算评估
		  list=o.budgetList;
		  if ( list ) {
		   var yspgLatestType="2";
		   isHasYSPG1=true;
		   for ( var i=0;i<list.length;i++ ) {
		    to = list[i];
			//if ( to.yspg_type == '1' ) isHasYSPG1=true;
			if ( to.yspg_type == '2' ) {
			 isHasYSPG2=true;
			}
			if ( to.yspg_type == '3' && yspgLatestType == '2' ) {
			  yspgLatestType="3";
			  isHasYSPG3=true;
			}
		   }
		   for ( var i=0;i<list.length;i++ ) {
		    to = list[i];
			$("#i_"+to.yspg_type+"_"+to.type_id).val( to.yspg_fee );
			$("#s_"+to.yspg_type+"_"+to.type_id).html( to.yspg_fee );
			if ( to.yspg_type == yspgLatestType ) $("#i_memo_"+to.type_id).val( to.yspg_explain );
		   }
		   computYspg(yspgLatestType);
		  }
		  
		  // 工时管理
		  hasWorkTime=false;
		  list=o.workTimeList;
		  if ( isHasEditRight && canEditWorktime ) {
		     $("#i_junior_y").show();
			 $("#i_middle_y").show();
			 $("#i_other_y").show();
			 $("#i_pm_y").show();
			 $("#i_four_y").show();
			 $("#i_senior_y").show();
			  $("#s_junior_y").hide();
			  $("#s_middle_y").hide();
			  $("#s_other_y").hide();
			  $("#s_four_y").hide();
			  $("#s_pm_y").hide();
			  $("#s_senior_y").hide();
			  $("#btn_worktime").show();
		  } else {
		     $("#i_junior_y").hide();
			 $("#i_middle_y").hide();
			 $("#i_other_y").hide();
			 $("#i_pm_y").hide();
			 $("#i_senior_y").hide();
			 $("#i_four_y").hide();
			  $("#s_junior_y").show();
			  $("#s_middle_y").show();
			  $("#s_other_y").show();
			  $("#s_four_y").show();
			  $("#s_pm_y").show();
			  $("#s_senior_y").show();
			  $("#btn_worktime").hide();
		  }
		  if ( list ) {
		   for ( var i=0;i<list.length;i++ ) {
		    to = list[i];
			if ( to.data_type == 'y' ) {
			 $("#i_junior_"+to.data_type).val( to.junior );
			 $("#i_middle_"+to.data_type).val( to.middle );
			 $("#i_other_"+to.data_type).val( to.other );
			 $("#i_pm_"+to.data_type).val( to.pm );
			 $("#i_four_"+to.data_type).val( to.four );
			 $("#i_senior_"+to.data_type).val( to.senior );
			 hasWorkTime=true;
			}
			$("#s_junior_"+to.data_type).html( to.junior );
			$("#s_middle_"+to.data_type).html( to.middle );
			$("#s_other_"+to.data_type).html( to.other );
			$("#s_four_"+to.data_type).html( to.four );
			$("#s_pm_"+to.data_type).html( to.pm );
			$("#s_senior_"+to.data_type).html( to.senior );
			$("#s_total_"+to.data_type).html( to.total );
		   }
		  }
		  
		  $("#s_junior_t").html( Number(top.g_GetNumValue($("#s_junior_j").html())) + Number(top.g_GetNumValue($("#s_junior_r").html())) );
		  $("#s_middle_t").html( Number(top.g_GetNumValue($("#s_middle_j").html())) + Number(top.g_GetNumValue($("#s_middle_r").html())) );
		  $("#s_other_t").html( Number(top.g_GetNumValue($("#s_other_j").html())) + Number(top.g_GetNumValue($("#s_other_r").html())) );
		  $("#s_four_t").html( Number(top.g_GetNumValue($("#s_four_j").html())) + Number(top.g_GetNumValue($("#s_four_r").html())) );
		  $("#s_pm_t").html( Number(top.g_GetNumValue($("#s_pm_j").html())) + Number(top.g_GetNumValue($("#s_pm_r").html())) );
		  $("#s_senior_t").html( Number(top.g_GetNumValue($("#s_senior_j").html())) + Number(top.g_GetNumValue($("#s_senior_r").html())) );
		  $("#s_total_t").html( Number(top.g_GetNumValue($("#s_total_j").html())) + Number(top.g_GetNumValue($("#s_total_r").html())) );
		  
		  // 交接会
		  list=o.changeoverList;
		  if ( list ) {
		    var y_id=0;
			var y_date="";
			var y_sm="";
			var y_ps="";
			var y_mc="";
			var y_status="";
			var z_id=0;
			var z_date="";
			var z_sm="";
			var z_ps="";
			var z_mc="";
			var z_status="";
			var z_path="";
			var y_path="";
		    for ( var i=0;i<list.length;i++ ) {
		      to = list[i];
              if ( to.changover_mk == 1 ) {
			    y_id=to.id;
			    y_date=to.changover_date;
				y_ps=to.changover_ps;
				y_mc=to.changover_mc;
				y_status=to.status;
				y_path=(to.changover_rd != ''?to.changover_rd:to.hetong_path);
				i_fileChangeoverYname=y_path;
				if ( to.status == 2 ) {
				 addFlowFile( y_path );
				} else {
				 dontShowFiles[dontShowFiles.length] = y_path;
				}
			  } else {
			    z_id=to.id;
			    z_date=to.changover_date;
				z_ps=to.changover_ps;
				z_mc=to.changover_mc;
				z_status=to.status;
				z_path=(to.changover_rd != ''?to.changover_rd:to.hetong_path);
				i_fileChangeoverZname=z_path;
				if ( to.status == 2 ) {
				 addFlowFile( z_path );
				} else {
				 dontShowFiles[dontShowFiles.length] = z_path;
				}
			  }
		    }
		    ht='<tr><td width="10%" align="center" class="listTd">预交接</td>';
			ht+='<td width="10%" align="center" class="listTd">';
			if ( isHasEditRight && y_status!='2' && z_status!='2' && !isHasNoCheckChangeover ) {
			  ht+='<input type="text" id="y_changover_date" onclick="new Calendar().show(this);" style="width:105px" value="'+top.getTimeStr( y_date, true )+'" ></input>';
			} else {
			  ht+=top.getTimeStr( y_date, true );
			}
			ht+='</td><td width="20%" align="center" class="listTd">';
			if ( isHasEditRight && y_status!='2' && z_status!='2' && !isHasNoCheckChangeover  ) {
			  ht+='<textarea id="y_changover_ps" cols="30" rows="2" ';
			  ht+='>'+ y_ps +'</textarea>';
			} else {
			  ht+="&nbsp;"+y_ps;
			}
			ht+='</td>';
			ht+='<td width="20%" align="center" class="listTd">';
			if ( isHasEditRight && y_status!='2' && z_status!='2' && !isHasNoCheckChangeover  ) {
			  ht+='<textarea id="y_changover_mc" cols="30" rows="2" ';
			  ht+='>'+ y_mc +'</textarea></td>';
			} else {
			  ht+="&nbsp;"+y_mc;
			}
			ht+='</td>';
			
			ht+='<td width="24%" align="center" class="listTd">&nbsp;<span class="spanA" id="fileChangeoverYname">';
			if ( y_path != '' ) {
			  ht+="<a href='"+top.getUrlBase()+"/download?filePath="+getDownloadFilePath(y_path)+"&fileName="+getDownloadFilePath(y_path)+"' >"+y_path+"</a>";
			}
			ht+='</span>';
			if ( isHasEditRight && y_status!='2' && !isHasNoCheckChangeover ) {
			  ht+='<span class="spanA" id="fileChangeoverYstatus"></span><div id="file-uploader-changeoverY"></div>';
			}
			ht+='</td>';
			
			ht+='<td width="8%" align="center" class="listTd">'+(y_status=='2'?"已完成":"未完成")+'</td>';
			if ( isHasEditRight && y_status!='2' && z_status!='2' && !isHasNoCheckChangeover ) {
			  if ( y_date > 0 ) {
			    ht+='<td width="8%" align="center" class="listTd"><input type="button" value="提交" id="btnChangeoverYSubmit" onclick="changeoverSubmit(\'y\',false,'+y_id+')"></input></td>';
			  } else {
			    ht+='<td width="8%" align="center" class="listTd"><input type="button" value="提交" id="btnChangeoverYSubmit" onclick="changeoverSubmit(\'y\',true,0)"></input></td>';
			  }
			} else {
			  ht+='<td width="8%" align="center" class="listTd">&nbsp;</td>';
			}
			ht+='</tr>';
			
			ht+='<tr><td width="10%" align="center" class="listTd">正式交接</td>';
			ht+='<td width="10%" align="center" class="listTd">';
			if ( isHasEditRight && z_status!='2' && !isHasNoCheckChangeover ) {
			  ht+='<input type="text" id="z_changover_date" onclick="new Calendar().show(this);" style="width:105px" value="'+top.getTimeStr( z_date, true )+'" ></input>';
			} else {
			  ht+=top.getTimeStr( z_date, true );
			}
			ht+='</td><td width="20%" align="center" class="listTd">';
			if ( isHasEditRight && z_status!='2' && !isHasNoCheckChangeover ) {
			  ht+='<textarea id="z_changover_ps" cols="30" rows="2" ';
			  ht+='>'+ z_ps +'</textarea></td>';
			} else {
			  ht+="&nbsp;"+z_ps;
			}
			ht+='</td>';
			
			ht+='<td width="20%" align="center" class="listTd">';
			if ( isHasEditRight && z_status!='2' && !isHasNoCheckChangeover  ) {
			  ht+='<textarea id="z_changover_mc" cols="30" rows="2" ';
			  ht+='>'+ z_mc +'</textarea></td>';
			} else {
			  ht+="&nbsp;"+z_mc;
			}
			ht+='</td>';
			
			ht+='<td width="24%" align="center" class="listTd">&nbsp;<span class="spanA" id="fileChangeoverZname">';
			if ( z_path != '' ) {
			  ht+="<a href='"+top.getUrlBase()+"/download?filePath="+getDownloadFilePath(z_path)+"&fileName="+getDownloadFilePath(z_path)+"' >"+z_path+"</a>";
			}
			ht+='</span>';
			if ( isHasEditRight && z_status!='2' && !isHasNoCheckChangeover ) {
			  ht+='<span class="spanA" id="fileChangeoverZstatus"></span><div id="file-uploader-changeoverZ"></div>';
			}
			ht+='</td>';
			
			if ( z_status != '2' ) {
			  closeProjectCheckStr+="<br/>未完成正式交接";
			}
			ht+='<td width="8%" align="center" class="listTd">'+(z_status=='2'?"已完成":"未完成")+'</td>';
			if ( isHasEditRight && z_status!='2' && !isHasNoCheckChangeover ) {
			  if ( z_date > 0 ) {
			    ht+='<td width="8%" align="center" class="listTd"><input type="button" value="提交" id="btnChangeoverZSubmit" onclick="changeoverSubmit(\'z\',false,'+z_id+')"></input></td>';
			  } else {
			    ht+='<td width="8%" align="center" class="listTd"><input type="button" value="提交" id="btnChangeoverZSubmit" onclick="changeoverSubmit(\'z\',true,0)"></input></td>';
			  }
			} else {
			  ht+='<td width="8%" align="center" class="listTd">&nbsp;</td>';
			}
			ht+='</tr>';
			$("#changeoverList").html( ht );

			if ( isHasEditRight && y_status!='2' && z_status!='2' && !isHasNoCheckChangeover ) {
			 var uploaderChangeoverY = new qq.FileUploader({
                element: document.getElementById('file-uploader-changeoverY'),
                action: top.getUrlBase()+"/uploadFile",
                debug: false,
				disableDefaultDropzone: false,
                extraDropzones: [qq.getByClass(document, 'qq-upload-extra-drop-area')[0]],
				onUpload: function(id, fileName, xhr){
				  $("#fileChangeoverYname").html( fileName );
				  i_fileChangeoverYname=fileName;
				},
				onProgress: function(id, fileName, loaded, total){
				  setUploadFilePercentById( "fileChangeoverYstatus", loaded, total );
				},
				onComplete:function(id, fileName, responseJSON){
				 try{
				  setUploadFileStatusById("fileChangeoverYstatus",responseJSON.success);
				  if ( !responseJSON.success ) {
				    var msg="";
					if ( responseJSON.error == 'Exist' ) msg='文件已存在，请修改文件名后再上传。';
					if ( msg != '' ) top.showInfoWinWarn("文件上传失败:"+msg);
				  }
				 }catch(e){}
				},
				onError: function(id, fileName, reason) {
				 try{
				  setUploadFileStatusById("fileChangeoverYstatus",responseJSON.success);
				  if ( !responseJSON.success ) {
				    i_fileChangeoverYname="";
					top.showInfoWinWarn("文件上传失败:"+reason);
				  }
				 }catch(e){}
				}
             });
			}
			
			if ( isHasEditRight && z_status!='2' && !isHasNoCheckChangeover ) {
			  var uploaderChangeoverZ = new qq.FileUploader({
                element: document.getElementById('file-uploader-changeoverZ'),
                action: top.getUrlBase()+"/uploadFile",
                debug: false,
				disableDefaultDropzone: false,
                extraDropzones: [qq.getByClass(document, 'qq-upload-extra-drop-area')[0]],
				onUpload: function(id, fileName, xhr){
				  $("#fileChangeoverZname").html( fileName );
                  i_fileChangeoverZname=fileName;
				},
				onProgress: function(id, fileName, loaded, total){
				  setUploadFilePercentById( "fileChangeoverZstatus", loaded, total );
				},
				onComplete:function(id, fileName, responseJSON){
				 try{
				  setUploadFileStatusById("fileChangeoverZstatus",responseJSON.success);
				  if ( !responseJSON.success ) {
				    var msg="";
					if ( responseJSON.error == 'Exist' ) msg='文件已存在，请修改文件名后再上传。';
					if ( msg != '' ) top.showInfoWinWarn("文件上传失败:"+msg);
				  }
				 }catch(e){}
				},
				onError: function(id, fileName, reason) {
				 try{
				  setUploadFileStatusById("fileChangeoverZstatus",responseJSON.success);
				  if ( !responseJSON.success ) {
				    i_fileChangeoverZname="";
				  }
				 }catch(e){}
				}
             });
		    }
		  }
		  
		  // 里程碑修改历史
		  g_milestoneHistoryList=o.milestoneHistoryList;
		  
		  // 里程碑
		  list=o.milestoneList;
		  var hasNotDone=false;
		  if ( list ) {
		   ht="";
		   for ( var i=0;i<list.length;i++ ) {
		    to = list[i];
			ht+='<tr><td width="8%" align="center" class="listTd"><span class="spanA" style="display:none;" id="ispan_stone_type_'+to.id+'">';
			ht+=top.getCodeSelectHtml("MILESTONE_NAME","i_stone_type_"+to.id,false,to.milestone_id);
			ht+='</span>';
			if ( to.is_valid == '0' ) {
			  ht+='<del>';
			} else if ( to.status2 != '2' && !hasNotDone ) {
			  closeProjectCheckStr+="<br/>有未完成的里程碑"
			  hasNotDone=true;
			  dontShowFiles[dontShowFiles.length] = to.path;
			}
			ht+='<span class="spanA" id="s_stone_type_'+to.id+'">'+top.getCodeName( "MILESTONE_NAME", to.milestone_id )+'</span>';
			if ( to.is_valid == '0' ) {
			  ht+='</del>';
			}
			ht+='</td>';
			
			ht+='<td width="10%" align="left" class="listTd">&nbsp;';
			ht+='<input type="text" style="display:none;width:105px" onclick="new Calendar().show(this);" value="'+top.getTimeStr( to.milestone_baseline, true );
			ht+='" id="i_stone_baseline_'+to.id+'"/><span class="spanA" id="s_stone_baseline_'+to.id+'">'+top.getTimeStr( to.milestone_baseline, true )+'</span>';
			if ( isHasMilestoneHistory( to.id ) ) {
			  ht+='&nbsp;<img src="../../img/page_white_magnify.png" title="点击显示Baseline修改历史记录" onclick="showMilestoneHistory(\''+top.getCodeName( "MILESTONE_NAME", to.milestone_id )+'\','+to.id+')" />';
			}
			ht+='</td>';

			ht+='<td width="15%" align="center" class="listTd">&nbsp;';
			ht+='<input type="text" style="display:none;width:105px" onclick="new Calendar().show(this);" value="'+top.getTimeStr( to.milestone_estime, true );
			ht+='" id="i_stone_estime_'+to.id+'"/><span class="spanA" id="s_stone_estime_'+to.id+'">'+top.getTimeStr( to.milestone_estime, true )+'</span>';
			ht+='</td>';
			
			ht+='<td width="15%" align="center" class="listTd">&nbsp;';
			ht+='<input type="text" style="display:none;width:105px" onclick="new Calendar().show(this);" value="'+top.getTimeStr( to.milestone_retime, true );
			ht+='" id="i_stone_retime_'+to.id+'"/><span class="spanA" id="s_stone_retime_'+to.id+'">'+top.getTimeStr( to.milestone_retime, true )+'</span>';
			ht+='</td>';
			
			ht+='<td width="20%" align="center" class="listTd">&nbsp;<input type="hidden" value="'+to.path+'" id="i_fileMilestoneName'+to.id+'"></input><span class="spanA" id="fileMilestoneName'+to.id+'">';
			if ( to.path != '' ) {
			  ht+="<a href='"+top.getUrlBase()+"/download?filePath="+getDownloadFilePath(to.path)+"&fileName="+getDownloadFilePath(to.path)+"' >"+to.path+"</a>";
			}
			ht+='</span>';
			if ( to.status1 != 1 && to.status2 == 0 ) {
			  ht+='<span class="spanA" id="fileMilestoneStatus'+to.id+'"></span><div id="file-uploader-Milestone'+to.id+'"></div>';
			}
			ht+='</td>';

			ht+='<td width="8%" align="center" class="listTd">'+ ((to.is_valid=='1')?top.getCodeName("MILESTONE_STATUS2", to.status1):"&nbsp;") +'</td>';
			ht+='<td width="8%" align="center" class="listTd">'+ ((to.is_valid=='1')?top.getCodeName("MILESTONE_STATUS2", to.status2):"&nbsp;") +'</td>';
			ht+='<td width="16%" align="center" class="listTd">&nbsp;';
			if ( isPM ) {
			  if ( to.status1 == 0 && to.status2 == 0 && to.milestone_retime == 0 ) { // 里程碑设定
			    ht+='<a id="btn_stoneEdit_'+to.id+'" href="javascript:void(0)" onclick="milestoneEdit('+to.id+')">修改</a>';
				ht+='<a style="display:none" id="btn_stoneDoEdit_'+to.id+'" href="javascript:void(0)" onclick="milestoneDoEdit('+to.id+')">提交修改</a>&nbsp;';
			  } else if ( to.status1 != 1 && to.status2 == 0 && to.is_valid == '1' ) {  // 里程碑更新  baseline修改  作废
			    ht+='<a id="btn_stoneUpdate_'+to.id+'" href="javascript:void(0)" onclick="milestoneUpdate('+to.id+')">更新</a>';
				ht+='<a style="display:none" id="btn_stoneDoUpdate_'+to.id+'" href="javascript:void(0)" onclick="milestoneDoUpdate('+to.id+')">提交更新</a>&nbsp;';
				
				ht+='<a id="btn_stoneModify_'+to.id+'" href="javascript:void(0)" onclick="milestoneModify('+to.id+','+to.milestone_baseline+','+to.milestone_estime+',\''+top.getCodeName( "MILESTONE_NAME", to.milestone_id )+'\')">修改</a>&nbsp;';
				ht+='<a href="javascript:void(0)" onclick="milestoneNoValid('+to.id+')">作废</a>';
			  }
			}
            ht+='</td>';
			ht+='</tr>';
			addFlowFile( to.path );
			
		   }
		   $("#milestoneList").html( ht );
		  }
 
		  // 附件
		  list=o.filePathList;
		  var tempHt="";
		  $("#fileNameCloseProject").html("");
		  if ( list ) {
		   ht="";
		   for ( var i=0;i<list.length;i++ ) {
		    to = list[i];
			if ( to.stage == '5' ) {
			  tempHt = $("#fileNameCloseProject").html();
			  tempHt += "<a href='"+top.getUrlBase()+"/download?filePath="+getDownloadFilePath(to.file_name)+"&fileName="+getDownloadFilePath(to.file_name)+"' >"+to.file_name+"</a><br/>";
			  $("#fileNameCloseProject").html( tempHt );
			  $("#i_fileNameCloseProject").val( to.file_name );
			}
			if ( isInDontShowFiles( to.file_name ) ) continue;
			if ( to.stage == '5' && projectObj.project_status != 4 && projectObj.project_status != 5 ) continue;
            ht+='<tr><td width="10%" align="left" class="listTd">';
			if ( to.stage == '55' ) {
			  ht+="关闭阶段";
			} else {
			  ht+=top.getCodeName( "FILE_TYPE", to.stage );
			}
			ht+='</td>';
			ht+='<td width="65%" align="left" class="listTd">';
			ht+="<a href='"+top.getUrlBase()+"/download?filePath="+getDownloadFilePath(to.file_name)+"&fileName="+getDownloadFilePath(to.file_name)+"' >"+to.file_name+"</a></td><td width='15%' class='listTd'>";
			ht+=top.getTimeStr( to.save_time, false );
			ht+="&nbsp;</td><td width='10%' align='left' class='listTd'>&nbsp;";
			if ( isPM && !isHasFlowFile( to.file_name ) && to.stage != '5' && projectObj.project_status != 4 && projectObj.project_status != 5 ) {
			  ht+='&nbsp;<img src="../../img/delete.gif" onclick="deleteFile('+to.id+')" />';
			}
			ht+='</td></tr>';
		   }
		   $("#filePathList").append( ht );
		  }
		  
		  // 收尾阶段
		    $("#btnForceCloseProject").hide();
			if ( approvalLCloseHt != '' ) {
			  $("#approvalCloseHead").show();
			  $("#approvalCloseList").show();
			  $("#approvalCloseList").html( approvalLCloseHt );
			} else {
			  $("#approvalCloseHead").hide();
			  $("#approvalCloseList").hide();
			}
			if ( closeProjectCheckStr == '' && !hasUncheckClose && isPM && projectObj.project_status != 4 && projectObj.project_status != 5 ) {
			    $("#btnCloseProject").show();
				$("#closeProjectWhyNot").html("");
				var uf=new qq.FileUploader({
                 element: document.getElementById('file-uploader-fileNameCloseProject'),
                 action: top.getUrlBase()+"/uploadFile",
                 debug: false,
				 disableDefaultDropzone: false,
                 extraDropzones: [qq.getByClass(document, 'qq-upload-extra-drop-area')[0]],
				 onUpload: function(id, fileName, xhr){
				  $("#fileNameCloseProject").html( fileName );
				  $("#i_fileNameCloseProject").val( fileName );
				 },
				 onProgress: function(id, fileName, loaded, total){
				  setUploadFilePercentById( "fileNameCloseProjectStatus", loaded, total );
				 },
				 onComplete:function(id, fileName, responseJSON){
				  try{
				   setUploadFileStatusById( "fileNameCloseProjectStatus",responseJSON.success);
				   if ( !responseJSON.success ) {
				    var msg="";
					if ( responseJSON.error == 'Exist' ) msg='文件已存在，请修改文件名后再上传。';
					if ( msg != '' ) top.showInfoWinWarn("文件上传失败:"+msg);
				  }
				  }catch(e){}
				 },
				 onError: function(id, fileName, reason) {
				 try{
				  setUploadFileStatusById( "fileNameCloseProjectStatus",responseJSON.success);
				 }catch(e){}
				 }
                });
			 } else {
			    $("#file-uploader-fileNameCloseProject").hide();
				$("#btnCloseProject").hide();
				if ( isPM ) {
				 if ( closeProjectCheckStr != '' ) {
				   $("#closeProjectWhyNot").html("<font color='red'>"+closeProjectCheckStr+"<br/>不能申请正常关闭项目</font><br/>");
				   $("#btnForceCloseProject").show();
				 } else {
				   $("#closeProjectWhyNot").html("");
				 }
				} else {
				 $("#closeProjectWhyNot").html("");
				}
			 }
		  
        }else{
          top.showInfoWinError("操作失败");
        }
       }catch(e){
          top.showInfoWinError("处理异常:"+e.message);
       }
   }
   
   function getDownloadFilePath(path){
       if ( !path ) return "";
	   return path.replace(/\+/g, "IADDI" );
   }
   
   function getMilestoneName(mid, list){
       if ( !list ) return "";
	   for ( var i=0;i<list.length;i++ ) {
	     if ( list[i].id == mid ) return "("+top.getCodeName( "MILESTONE_NAME", list[i].milestone_id )+")";
	   }
	   return "";
   }
   
   function deleteFile(fid){
      currentDeleteFileId=fid;
	  top.showConfirm("您确定要删除选中的附件吗？", doDeleteFile);
   }
   
   function doDeleteFile(){
       var aoData=[];
	   var url = "/actions/ProMVTProject.action?deleteProFilePath";
	   aoData.push( { "name": "filePath.id", "value": currentDeleteFileId } );
	   top.showLoadingInfo(true);
	   top.sendAjaxRequest(url,aoData,optCallback);
   }
   
   function addFlowFile(fileName){
     if ( fileName == '' ) return;
     flowFiles[flowFiles.length] = fileName;
   }
   
   function isHasFlowFile(fileName){
      if ( fileName == '' ) return true;
      for ( var i=0;i<flowFiles.length;i++ ) {
	    if ( flowFiles[i] == fileName ) return true;
	  }
	  return false;
   }
   
   function isInDontShowFiles(fileName){
	  if ( fileName == '' ) return true;
      for ( var i=0;i<dontShowFiles.length;i++ ) {
	    if ( dontShowFiles[i] == fileName ) return true;
	  }
	  return false;
   }
   
   function isHasMilestoneHistory(mid){
       if ( g_milestoneHistoryList ) {
	     for ( var i=0;i<g_milestoneHistoryList.length;i++ ) {
		   if ( g_milestoneHistoryList[i].mystone_id == mid ) return true;
		 }
	   }
	   return false;
   }
   
   function showMilestoneHistory(name,mid){
      var ht='';
      if ( g_milestoneHistoryList ) {
	     for ( var i=0;i<g_milestoneHistoryList.length;i++ ) {
		   if ( g_milestoneHistoryList[i].mystone_id == mid ) {
		     ht+="<tr><td align='center' width='15%' class='listTd'>"+top.getTimeStr( g_milestoneHistoryList[i].old_time, true );
			 ht+="</td><td align='center' width='15%' class='listTd'>"+top.getTimeStr( g_milestoneHistoryList[i].old_estime, true );
			 ht+="</td><td align='center' width='15%' class='listTd'>"+top.getTimeStr( g_milestoneHistoryList[i].new_time, true );
			 ht+="</td><td align='center' width='15%' class='listTd'>"+top.getTimeStr( g_milestoneHistoryList[i].new_estime, true );
			 ht+="</td><td align='center' width='20%' class='listTd'>"+g_milestoneHistoryList[i].beizhu;
			 ht+="</td><td align='center' width='10%' class='listTd'>"+top.getUserNameByCode(g_milestoneHistoryList[i].shenpi_man);
			 ht+="</td><td align='center' width='10%' class='listTd'>"+top.getTimeStr( g_milestoneHistoryList[i].shenpi_date, true )+"</td>";
		   }
		 }
	   }
	   $("#milestoneHistoryTable").html( ht );
	   $("#milestoneHistoryDiv").dialog({
			title: "里程碑【"+name+"】修改历史记录",
			height: 300,
			width: 1060,
			modal: true,
			resizable: false,
            beforeClose: function(event, ui) {
            	return true;
            }
		});
   }
   
   function milestoneModify(stoneId,oldTime,oldEstime,name){
        $("#addM_stoneId").val( stoneId );
        $("#addM_oldtime").html( top.getTimeStr( oldTime, true ) );
		$("#addM_oldestime").html( top.getTimeStr( oldEstime, true ) );
		$("#addM_oldtimeLong").val( oldTime );
		$("#addM_oldestimeLong").val( oldEstime );
		$("#addM_newtime").val("");
		$("#addM_newestime").val("");
		$("#addM_beizhu").val("");
	    $("#addMilestoneHistoryDiv").dialog({
			title: "修改里程碑【"+name+"】baseline",
			height: 300,
			width: 1000,
			modal: true,
			resizable: false,
            beforeClose: function(event, ui) {
            	return true;
            }
		});
   }
   
   function milestoneDoModify(){
	   var stoneId=$("#addM_stoneId").val();
       var oldTime=$("#addM_oldtimeLong").val();
	   var oldEstime=$("#addM_oldestimeLong").val();
	   if ( $("#addM_newtime").val() == '' || $("#addM_newestime").val() == '' || $("#addM_beizhu").val() == '' ) {
		   top.showInfoWinWarn("请输入baseline时间和预计完成时间以及备注");
		   return ;
	   }
	   var aoData=[];
	   var url = "/actions/ProMVTProject.action?insertProMilestoneHistory";
	   aoData.push( { "name": "milestoneHistory.mystone_id", "value": stoneId } );
	   aoData.push( { "name": "info.id", "value": projectId } );
	   aoData.push( { "name": "milestoneHistory.beizhu", "value": $("#addM_beizhu").val() } );
	   aoData.push( { "name": "milestoneHistory.old_time", "value": oldTime } );
	   aoData.push( { "name": "milestoneHistory.old_estime", "value": oldEstime } );
	   aoData.push( { "name": "milestoneHistory.new_time", "value": top.toTimestamp( $("#addM_newtime").val() ) } );
	   aoData.push( { "name": "milestoneHistory.new_estime", "value": top.toTimestamp( $("#addM_newestime").val() ) } );
	   aoData.push( { "name": "info.project_name", "value": projectObj.project_name } );
	   if ( projectObj.senior_project_manager == projectObj.project_manager_id ) {
	    aoData.push( { "name": "info.senior_project_manager", "value": projectObj.project_director } );
	   } else {
	    aoData.push( { "name": "info.senior_project_manager", "value": projectObj.senior_project_manager } );
	   }
	   $("#addMilestoneHistoryDiv").dialog( "close" );
	   top.showLoadingInfo(true);
	   top.sendAjaxRequest(url,aoData,optCallback);
	   
   }
   
   function milestoneEdit(stoneId){
     $("#ispan_stone_type_"+stoneId).show();
	 $("#s_stone_type_"+stoneId).hide();
     $("#i_stone_baseline_"+stoneId).show();
	 $("#s_stone_baseline_"+stoneId).hide();
     $("#i_stone_estime_"+stoneId).show();
	 $("#s_stone_estime_"+stoneId).hide();
	 $("#btn_stoneEdit_"+stoneId).hide();
	 $("#btn_stoneDoEdit_"+stoneId).show();
   }
   
   function milestoneDoEdit(stoneId){
	   if ( $("#i_stone_baseline_"+stoneId).val() == '' || $("#i_stone_estime_"+stoneId).val() == '' ) {
		   top.showInfoWinWarn("请输入baseline时间和预计完成时间");
		   return ;
	   }
	   var aoData=[];
	   var url = "/actions/ProMVTProject.action?editProProjectMilestone";
	   aoData.push( { "name": "milestone.id", "value": stoneId } );
	   aoData.push( { "name": "milestone.project_id", "value": projectId } );
	   aoData.push( { "name": "milestone.path", "value": "" } );
	   aoData.push( { "name": "milestone.milestone_id", "value": $("#i_stone_type_"+stoneId).val() } );
	   aoData.push( { "name": "milestone.milestone_baseline", "value": top.toTimestamp( $("#i_stone_baseline_"+stoneId).val() ) } );
	   aoData.push( { "name": "milestone.milestone_estime", "value": top.toTimestamp( $("#i_stone_estime_"+stoneId).val() ) } );
	   aoData.push( { "name": "info.project_name", "value": projectObj.project_name } );
	   if ( projectObj.senior_project_manager == projectObj.project_manager_id ) {
	    aoData.push( { "name": "info.senior_project_manager", "value": projectObj.project_director } );
	   } else {
	    aoData.push( { "name": "info.senior_project_manager", "value": projectObj.senior_project_manager } );
	   }
	   top.showLoadingInfo(true);
	   top.sendAjaxRequest(url,aoData,optCallback);
   }
   
   function milestoneNoValid(stoneId){
      currentNoValidStoneId=stoneId;
	  top.showConfirm("您确定要申请作废该里程碑吗？", milestoneDoNoValid);
   }
   
   function milestoneDoNoValid(){
       var aoData=[];
	   var url = "/actions/ProMVTProject.action?applyProProjectMilestoneNoValid";
	   aoData.push( { "name": "milestone.id", "value": currentNoValidStoneId } );
	   aoData.push( { "name": "info.id", "value": projectId } );
	   aoData.push( { "name": "info.project_name", "value": projectObj.project_name } );
	   if ( projectObj.senior_project_manager == projectObj.project_manager_id ) {
	    aoData.push( { "name": "info.senior_project_manager", "value": projectObj.project_director } );
	   } else {
	    aoData.push( { "name": "info.senior_project_manager", "value": projectObj.senior_project_manager } );
	   }
	   top.showLoadingInfo(true);
	   top.sendAjaxRequest(url,aoData,optCallback);
   }
   
   function milestoneUpdate(stoneId){
     $("#i_stone_retime_"+stoneId).show();
	 $("#s_stone_retime_"+stoneId).hide();
	 $("#btn_stoneUpdate_"+stoneId).hide();
	 $("#btn_stoneDoUpdate_"+stoneId).show();
	 
	 var uf=new qq.FileUploader({
                element: document.getElementById('file-uploader-Milestone'+stoneId),
                action: top.getUrlBase()+"/uploadFile",
                debug: false,
				disableDefaultDropzone: false,
                extraDropzones: [qq.getByClass(document, 'qq-upload-extra-drop-area')[0]],
				onUpload: function(id, fileName, xhr){
				  $("#fileMilestoneName"+stoneId).html( fileName );
				  $("#i_fileMilestoneName"+stoneId).val( fileName );
				},
				onProgress: function(id, fileName, loaded, total){
				  setUploadFilePercentById( "fileMilestoneStatus"+stoneId, loaded, total );
				},
				onComplete:function(id, fileName, responseJSON){
				 try{
				  setUploadFileStatusById( "fileMilestoneStatus"+stoneId,responseJSON.success);
				  if ( !responseJSON.success ) {
				    var msg="";
					if ( responseJSON.error == 'Exist' ) msg='文件已存在，请修改文件名后再上传。';
					if ( msg != '' ) top.showInfoWinWarn("文件上传失败:"+msg);
				  }
				 }catch(e){}
				},
				onError: function(id, fileName, reason) {
				 try{
				  setUploadFileStatusById( "fileMilestoneStatus"+stoneId,responseJSON.success);
				 }catch(e){}
				}
     });
	 
   }
   
   function milestoneDoUpdate(stoneId){
	   var retime=$("#i_stone_retime_"+stoneId).val();
	   if ( retime == '' ) {
		   top.showInfoWinWarn("请输入实际完成时间");
		   return ;
	   }
	   if ( $("#fileMilestoneStatus"+stoneId).html().indexOf("失败") != -1 ) {
	       top.showInfoWinWarn("请上传附件，如果总是上传失败，请改用其他浏览器上传。");
		   return ;
	   }
	   var aoData=[];
	   var url = "/actions/ProMVTProject.action?updateProProjectMilestone";
	   aoData.push( { "name": "milestone.id", "value": stoneId } );
	   aoData.push( { "name": "milestone.project_id", "value": projectId } );
	   aoData.push( { "name": "milestone.milestone_retime", "value": top.toTimestamp( retime ) } );
	   aoData.push( { "name": "milestone.path", "value": $("#i_fileMilestoneName"+stoneId).val() } ); 
	   aoData.push( { "name": "info.project_name", "value": projectObj.project_name } );
	   if ( projectObj.senior_project_manager == projectObj.project_manager_id ) {
	    aoData.push( { "name": "info.senior_project_manager", "value": projectObj.project_director } );
	   } else {
	    aoData.push( { "name": "info.senior_project_manager", "value": projectObj.senior_project_manager } );
	   }
	   top.showLoadingInfo(true);
	   top.sendAjaxRequest(url,aoData,optCallback);
   }
 
   function addMilestone(){
        addMilestoneIndex++;
        var ht='<tr id="tr_milestone_'+addMilestoneIndex+'"><td width="10%" align="center" class="listTd">'+ top.getCodeSelectHtml("MILESTONE_NAME","add_milestoneType"+addMilestoneIndex,false) +'</td>';
			ht+='<td width="10%" align="center" class="listTd">';
			ht+='<input type="text" id="add_baseline'+addMilestoneIndex+'" value="" onclick="new Calendar().show(this);" style="width:105px" /></td>';
			ht+='<td width="15%" align="center" class="listTd">';
			ht+='<input type="text" id="add_estime'+addMilestoneIndex+'" value="" onclick="new Calendar().show(this);" style="width:105px" /></td>';
			ht+='<td width="15%" align="center" class="listTd">&nbsp;</td>';
			ht+='<td width="20%" align="center" class="listTd">&nbsp;</td>';
			ht+='<td width="10%" align="center" class="listTd">未完成</td>';
			ht+='<td width="10%" align="center" class="listTd">未完成</td>';
			ht+='<td class="listTd">&nbsp;<img src="../../img/delete.gif" onclick="removeTr(\'tr_milestone_'+addMilestoneIndex+'\')" /></td></tr>';
		$("#milestoneList").append( ht );
   }
   
   function submitMilestone(){
       var names="";
	   var baselines="";
	   var estimes="";
	   for ( var i=1;i<=addMilestoneIndex;i++ ) {
	     if ( !document.getElementById("tr_milestone_"+i) ) {
	       continue;
	     }
	     if ( $("#add_baseline"+i).val() == '' || $("#add_estime"+i).val() == '' ) {
		   top.showInfoWinWarn("请输入baseline时间和预计完成时间");
		   return ;
		 }
	     names+=$("#add_milestoneType"+i).val()+",";
		 baselines+=top.toTimestamp( $("#add_baseline"+i).val() )+",";
		 estimes+=top.toTimestamp( $("#add_estime"+i).val() )+",";
	   }
	   if ( names == '' ) {
		   top.showInfoWinWarn("没有要保存的里程碑");
		   return ;
	   }
	   var aoData=[];
	   var url = "/actions/ProMVTProject.action?insertProProjectMilestone";
	   aoData.push( { "name": "milestone.project_id", "value": projectId } );
	   aoData.push( { "name": "milestone.types", "value": names } );
	   aoData.push( { "name": "milestone.baseLines", "value": baselines } );
	   aoData.push( { "name": "milestone.estimes", "value": estimes } );
	   aoData.push( { "name": "info.project_name", "value": projectObj.project_name } );
	   if ( projectObj.senior_project_manager == projectObj.project_manager_id ) {
	    aoData.push( { "name": "info.senior_project_manager", "value": projectObj.project_director } );
	   } else {
	    aoData.push( { "name": "info.senior_project_manager", "value": projectObj.senior_project_manager } );
	   }
	   top.showLoadingInfo(true);
	   top.sendAjaxRequest(url,aoData,optCallback);
   }
   
   function showHideYSPG(type,isShow){
      if ( isShow ) {
	   $("#btn_yspg"+type).show();
	  } else {
	   $("#btn_yspg"+type).hide();
	  }
      for (var y=15;y<=28;y++ ) {
	    if ( isShow ) {
		 $("#i_"+type+"_"+y).show();
		 $("#s_"+type+"_"+y).hide();
		} else {
		 $("#i_"+type+"_"+y).hide();
		 $("#s_"+type+"_"+y).show();
		}
	  }
	  if ( isShow ) {
	    $("#i_"+type+"_6").show();
	    $("#s_"+type+"_6").hide();
	    $("#i_"+type+"_99").show();
	    $("#s_"+type+"_99").hide();
	  } else {
	    $("#i_"+type+"_6").hide();
	    $("#s_"+type+"_6").show();
	    $("#i_"+type+"_99").hide();
	    $("#s_"+type+"_99").show();
	  }
   }
   
   function saveYSPG(type){
      var typeIds=",15,16,17,18,19,20,21,22,23,24,25,26,27,28,6,99";
	  var fees=",";
	  var explains="ISPLITI";
	  var temp="";
	  for (var i=15;i<=28;i++) {
	     temp=$("#i_"+type+"_"+i).val();
		 if ( temp == '' ) temp = "0";
		 if ( !IsFloat( temp ) ) {
		   top.showInfoWinWarn("填写有误，费用应为数字类型(如不填写系统将默认为0)，请检查。");
		   return ;
		 }
         fees+=temp+",";
		 temp=$("#i_memo_"+i).val();
		 if ( temp == '' ) temp = " ";
		 explains+=temp+"ISPLITI";
	  }
	  temp=$("#i_"+type+"_6").val();
	  if ( temp == '' ) temp = 0;
	  fees+=temp+",";
	  temp=$("#i_memo_6").val();
	  if ( temp == '' ) temp = " ";
      explains+=temp+"ISPLITI";
	  
	  temp=$("#i_"+type+"_99").val();
	  if ( temp == '' ) temp = 0;
	  fees+=temp+",";
	  temp=$("#i_memo_99").val();
	  if ( temp == '' ) temp = " ";
      explains+=temp+"ISPLITI";
	  
	  var aoData=[];
	  var isUpdate=false;
	  if ( isHasYSPG1 && type == 1 ) {
	    isUpdate=true;
	  } else if ( isHasYSPG2 && type == 2 ) {
	    isUpdate=true;
	  } else if ( isHasYSPG3 && type == 3 ) {
	    isUpdate=true;
	  }
	  var url = "/actions/ProMVTProject.action?"+(isUpdate?"updateProBudgetEstimate":"insertProBudgetEstimate");
	  aoData.push( { "name": "budgetEstimate.project_id", "value": projectId } );
	  aoData.push( { "name": "budgetEstimate.yspg_explain", "value": explains } );
	  aoData.push( { "name": "budgetEstimate.yspg_fee", "value": fees } );
	  aoData.push( { "name": "infoId", "value": typeIds } );
	  aoData.push( { "name": "budgetEstimate.yspg_type", "value": type } );
	  aoData.push( { "name": "info.project_name", "value": projectObj.project_name } );
	  if ( projectObj.senior_project_manager == projectObj.project_manager_id ) {
	    aoData.push( { "name": "info.senior_project_manager", "value": projectObj.project_director } );
	  } else {
	    aoData.push( { "name": "info.senior_project_manager", "value": projectObj.senior_project_manager } );
	  }
	  top.showLoadingInfo(true);
	  top.sendAjaxRequest(url,aoData,optCallback);
   }
   
   function getPercent(v){
       if ( gContact_money == 0 ) return "";
	   return (Math.round( (v*10000) / gContact_money ) / 100)+"%";
   }
   
   function computYspg(yspgLatestType){
	   var i=0;
	   var n2_15=Number(top.g_GetNumValue( $("#i_2_15").val() ));
	   var n2_16=Number(top.g_GetNumValue( $("#i_2_16").val() ));
	   var n2_17=Number(top.g_GetNumValue( $("#i_2_17").val() ));
	   var n2_18=Number(top.g_GetNumValue( $("#i_2_18").val() ));
	   var t_1_2=n2_15+n2_16+n2_17+n2_18;
	   t_1_2=(Math.round( t_1_2*100 ) / 100);
       $("#total_1_2").html( "<b>"+t_1_2+"</b>" );
	   
	   var n3_15=Number(top.g_GetNumValue( $("#i_3_15").val() ));
	   var n3_16=Number(top.g_GetNumValue( $("#i_3_16").val() ));
	   var n3_17=Number(top.g_GetNumValue( $("#i_3_17").val() ));
	   var n3_18=Number(top.g_GetNumValue( $("#i_3_18").val() ));
	   var t_1_3=n3_15+n3_16+n3_17+n3_18;
	   t_1_3=(Math.round( t_1_3*100 ) / 100);
       $("#total_1_3").html( "<b>"+t_1_3+"</b>" );
	   
	   if ( yspgLatestType == '2' ) {
	    $("#total_1_5").html( "<b>"+getPercent( t_1_2 )+"</b>" );
	   } else if ( yspgLatestType == '3' ) {
	    $("#total_1_5").html( "<b>"+getPercent( t_1_3 )+"</b>" );
	   }
	   $("#s_yp_15").html( getPercent( Number(top.g_GetNumValue( $("#i_"+yspgLatestType+"_15").val() )) ) );
	   $("#s_yp_16").html( getPercent( Number(top.g_GetNumValue( $("#i_"+yspgLatestType+"_16").val() )) ) );
	   $("#s_yp_17").html( getPercent( Number(top.g_GetNumValue( $("#i_"+yspgLatestType+"_17").val() )) ) );
	   $("#s_yp_18").html( getPercent( Number(top.g_GetNumValue( $("#i_"+yspgLatestType+"_18").val() )) ) );
	   
	   
	   var n2_19=Number(top.g_GetNumValue( $("#i_2_19").val() ));
	   var n2_20=Number(top.g_GetNumValue( $("#i_2_20").val() ));
	   var n2_21=Number(top.g_GetNumValue( $("#i_2_21").val() ));
	   var n2_22=Number(top.g_GetNumValue( $("#i_2_22").val() ));
	   var n2_23=Number(top.g_GetNumValue( $("#i_2_23").val() ));
	   var n2_24=Number(top.g_GetNumValue( $("#i_2_24").val() ));
	   var n2_25=Number(top.g_GetNumValue( $("#i_2_25").val() ));
	   var n2_26=Number(top.g_GetNumValue( $("#i_2_26").val() ));
	   var n2_27=Number(top.g_GetNumValue( $("#i_2_27").val() ));
	   var n2_28=Number(top.g_GetNumValue( $("#i_2_28").val() ));
	   var t_2_2=n2_19+n2_20+n2_21+n2_22+n2_23+n2_24+n2_25+n2_26+n2_27+n2_28;
       $("#total_2_2").html( "<b>"+t_2_2+"</b>" );
	   
	   var n3_19=Number(top.g_GetNumValue( $("#i_3_19").val() ));
	   var n3_20=Number(top.g_GetNumValue( $("#i_3_20").val() ));
	   var n3_21=Number(top.g_GetNumValue( $("#i_3_21").val() ));
	   var n3_22=Number(top.g_GetNumValue( $("#i_3_22").val() ));
	   var n3_23=Number(top.g_GetNumValue( $("#i_3_23").val() ));
	   var n3_24=Number(top.g_GetNumValue( $("#i_3_24").val() ));
	   var n3_25=Number(top.g_GetNumValue( $("#i_3_25").val() ));
	   var n3_26=Number(top.g_GetNumValue( $("#i_3_26").val() ));
	   var n3_27=Number(top.g_GetNumValue( $("#i_3_27").val() ));
	   var n3_28=Number(top.g_GetNumValue( $("#i_3_28").val() ));
	   var t_2_3=n3_19+n3_20+n3_21+n3_22+n3_23+n3_24+n3_25+n3_26+n3_27+n3_28;
       $("#total_2_3").html( "<b>"+t_2_3+"</b>" );
	   
	   if ( yspgLatestType == '2' ) {
	    $("#total_2_5").html( "<b>"+getPercent( t_2_2 )+"</b>"  );
	   } else if ( yspgLatestType == '3' ) {
	    $("#total_2_5").html( "<b>"+getPercent( t_2_3 )+"</b>"  );
	   }
	   $("#s_yp_19").html( getPercent( Number(top.g_GetNumValue( $("#i_"+yspgLatestType+"_19").val() )) ) );
	   $("#s_yp_20").html( getPercent( Number(top.g_GetNumValue( $("#i_"+yspgLatestType+"_20").val() )) ) );
	   $("#s_yp_21").html( getPercent( Number(top.g_GetNumValue( $("#i_"+yspgLatestType+"_21").val() )) ) );
	   $("#s_yp_22").html( getPercent( Number(top.g_GetNumValue( $("#i_"+yspgLatestType+"_22").val() )) ) );
	   $("#s_yp_23").html( getPercent( Number(top.g_GetNumValue( $("#i_"+yspgLatestType+"_23").val() )) ) );
	   $("#s_yp_24").html( getPercent( Number(top.g_GetNumValue( $("#i_"+yspgLatestType+"_24").val() )) ) );
	   $("#s_yp_25").html( getPercent( Number(top.g_GetNumValue( $("#i_"+yspgLatestType+"_25").val() )) ) );
	   $("#s_yp_26").html( getPercent( Number(top.g_GetNumValue( $("#i_"+yspgLatestType+"_26").val() )) ) );
	   $("#s_yp_27").html( getPercent( Number(top.g_GetNumValue( $("#i_"+yspgLatestType+"_27").val() )) ) );
	   $("#s_yp_28").html( getPercent( Number(top.g_GetNumValue( $("#i_"+yspgLatestType+"_28").val() )) ) );
	   
	   $("#fxylj_5").html( getPercent( Number(top.g_GetNumValue( $("#i_"+yspgLatestType+"_99").val() )) ) );
	   
	   var t_3_2=Number(top.g_GetNumValue( $("#i_2_6").val() ));
	   var t_3_3=Number(top.g_GetNumValue( $("#i_3_6").val() ));
	   $("#total_3_2").html( "<b>"+t_3_2+"</b>" );
	   $("#total_3_3").html( "<b>"+t_3_3+"</b>" );
	   
	   if ( yspgLatestType == '2' ) {
	    $("#total_3_5").html( "<b>"+getPercent( t_3_2 )+"</b>" );
	   } else if ( yspgLatestType == '3' ) {
	    $("#total_3_5").html( "<b>"+getPercent( t_3_3 )+"</b>" );
	   }
	   $("#s_yp_6").html( getPercent( Number(top.g_GetNumValue( $("#i_"+yspgLatestType+"_6").val() )) ) );
	   
	   $("#total_all_2").html(  Math.round( (t_1_2 + t_2_2 + t_3_2)*100 ) / 100 );
	   $("#total_all_3").html( Math.round( (t_1_3 + t_2_3 + t_3_3)*100 ) / 100 );
	   
	   $("#total_all_5").html( getPercent( Number(top.g_GetNumValue( $("#total_all_"+yspgLatestType).html() )) ) );
   }
   
   function changeoverSubmit(type,isInsert,infoId){
       var changover_date = $("#"+type+"_changover_date").val();
	   var changover_ps = $("#"+type+"_changover_ps").val();
	   var changover_mc = $("#"+type+"_changover_mc").val();
	   var path="";
	   var msg = checkString( changover_date,true,20,"交接时间");
	   msg += checkString( changover_ps,true,128,"其它参与人员");
	   msg += checkString( changover_mc,true,256,"会议纪要");
	   if ( type == 'y' ) {
	     path=i_fileChangeoverYname;
		 if ( $("#fileChangeoverYstatus").html().indexOf("失败") != -1 ) {
	       top.showInfoWinWarn("请上传附件，如果总是上传失败，请改用其他浏览器上传。");
		   return ;
	     }
	   } else {
	     path=i_fileChangeoverZname;
		 if ( $("#fileChangeoverZstatus").html().indexOf("失败") != -1 ) {
	       top.showInfoWinWarn("请上传附件，如果总是上传失败，请改用其他浏览器上传。");
		   return ;
	     }
	   }
	   if ( path == '' ) msg+="请上传附件";
	   
	   if ( msg != '' ) {
	      top.showInfoWinWarn(msg);
	      return ;
	   }
	   var aoData=[];
	   var url = "/actions/ProMVTProject.action?"+(isInsert?"insertProProjectChangeover":"updateProProjectChangeover");
	   aoData.push( { "name": "changeOver.id", "value": infoId } );
	   aoData.push( { "name": "changeOver.project_id", "value": projectId } );
	   aoData.push( { "name": "changeOver.changover_ps", "value": changover_ps } );
	   aoData.push( { "name": "changeOver.changover_date", "value": top.toTimestamp( changover_date ) } );
	   aoData.push( { "name": "changeOver.changover_mc", "value": changover_mc } );
	   aoData.push( { "name": "changeOver.status", "value": "1" } );
	   aoData.push( { "name": "changeOver.hetong_path", "value": path } );
	   aoData.push( { "name": "changeOver.changover_mk", "value": (type=='y'?"1":"2") } );
	   aoData.push( { "name": "info.project_name", "value": projectObj.project_name } );
	   top.showLoadingInfo(true);
	   top.sendAjaxRequest(url,aoData,optCallback);
   }
   
   function checkSubmit(cid,type,iurl){
	   var msg="";
	   msg += checkString( $("#check_result_"+cid).val(),true,10,"审核结果");
	   msg += checkString( $("#check_yijian_"+cid).val(),true,512,"审核意见");
	   if ( msg != '' ) {
	      top.showInfoWinWarn(msg);
	      return ;
	   }
	   var checkResult=$("#check_result_"+cid).val();
	   var newStatus=-1;
	   var infoId ="0";
	   if ( type == '1' ) { // 风险评估审核 （ 已不需要风险评估环节 ）
	     infoId=cfxpgId;
	   } else if ( type == '5' ) { // 交接会审核
	     infoId=iurl;
		 if ( checkResult == '2' ) {
		   if ( projectObj.project_status == 0 ) newStatus=1;
		 }
	   } else if ( type == '3' ) { // 预算再评估审核
		 if ( checkResult == '2' ) {
		   if ( projectObj.project_status == 1 ) newStatus=2;
		 }
	   } else if ( type == '11' ) { // 关闭审核
		 if ( checkResult == '2' ) {
		   newStatus=4;
		 }
	   } else if ( type == '7' ) { // 里程碑更新
	     if ( iurl && iurl != '' ) {
		   var st=iurl.indexOf("id=");
		   var et=iurl.indexOf("projectId=");
		   if ( st != -1 && et!= -1 ) {
		     iurl=iurl.substring(st+3,et-1); 
		   }
		 }
		 infoId=iurl;
	   } else if ( type == '13' ) { // 里程碑作废
	     infoId=iurl;
	   } else if ( type == '10' ) { //里程碑Baseline修改
	     if ( iurl && iurl != '' ) {
		   var st=iurl.indexOf("stoneId=");
		   var et=iurl.indexOf("newTime=");
		   if ( st != -1 && et!= -1 ) {
		     iurl=iurl.substring(st+8,et-1); 
		   }
		 }
		 infoId=iurl;
	   } else if ( type == '6' ) { // 里程碑设定
	     if ( checkResult == '2' ) {
		   if ( projectObj.project_status == 1 ) newStatus=2;
		 }
	   }

	   var aoData=[];
	   var url = "/actions/ProMVTProject.action?updateProProjectApproval";
	   aoData.push( { "name": "approval.project_id", "value": projectId } );
	   aoData.push( { "name": "approval.id", "value": cid } );
	   aoData.push( { "name": "approval.type", "value": type } );
	   aoData.push( { "name": "approval.shenpiyijian", "value": $("#check_yijian_"+cid).val() } );
	   aoData.push( { "name": "approval.status", "value": checkResult } );
	   aoData.push( { "name": "infoId", "value": infoId } );
	   aoData.push( { "name": "info.project_name", "value": projectObj.project_name } );
	   aoData.push( { "name": "info.project_manager_id", "value": projectObj.project_manager_id } );
	   aoData.push( { "name": "info.project_status", "value": newStatus } );
	   top.showLoadingInfo(true);
	   top.sendAjaxRequest(url,aoData,optCallback);
   }
   
   function pmoCheckCloseProject(cid,type,iurl){
       var msg="";
	   msg += checkString( $("#check_result_"+cid).val(),true,10,"审核结果");
	   msg += checkString( $("#check_yijian_"+cid).val(),true,512,"审核意见");
	   if ( msg != '' ) {
	      top.showInfoWinWarn(msg);
	      return ;
	   }
	   var checkResult=$("#check_result_"+cid).val();
       var aoData=[];
	   var url = "/actions/ProMVTProject.action?pmoCheckCloseProject";
	   aoData.push( { "name": "approval.project_id", "value": projectId } );
	   aoData.push( { "name": "approval.id", "value": cid } );
	   aoData.push( { "name": "approval.type", "value": type } );
	   aoData.push( { "name": "approval.shenpiyijian", "value": $("#check_yijian_"+cid).val() } );
	   aoData.push( { "name": "approval.status", "value": checkResult } );
	   aoData.push( { "name": "info.project_name", "value": projectObj.project_name } );
	   if ( projectObj.senior_project_manager == projectObj.project_manager_id ) {
	    aoData.push( { "name": "info.senior_project_manager", "value": projectObj.project_director } );
	   } else {
	    aoData.push( { "name": "info.senior_project_manager", "value": projectObj.senior_project_manager } );
	   }
	   top.showLoadingInfo(true);
	   top.sendAjaxRequest(url,aoData,optCallback);
   }
   
   function saveProjectInfo(){
     var aoData=[];
     var url = "/actions/ProMVTProject.action?updateProProjectInfo";
     aoData.push( { "name": "info.id", "value": projectId } );
	 aoData.push( { "name": "info.contract_a_date", "value": top.toTimestamp( $("#o_contract_a_date").val() ) } );
	 aoData.push( { "name": "info.contract_code", "value": $("#o_contract_code").val() } );
	 aoData.push( { "name": "info.service_begin", "value": top.toTimestamp( $("#o_service_begin").val() ) } );
	 aoData.push( { "name": "info.service_end", "value": top.toTimestamp( $("#o_service_end").val() ) } );
	 aoData.push( { "name": "info.plan_contact_money", "value": $("#o_plan_contact_money").val() } );
	 aoData.push( { "name": "info.pay_type", "value": $("#o_pay_type").val() } );
	 aoData.push( { "name": "info.sales_manager_id", "value": $("#o_sales_manager_id").val() } );
	 aoData.push( { "name": "info.service_period", "value": $("#o_service_period").val() } );
	 aoData.push( { "name": "info.assess_condition", "value": $("#o_assess_condition").val() } );
	 aoData.push( { "name": "info.service_dec", "value": $("#o_service_dec").val() } );
	 top.showLoadingInfo(true);
	 top.sendAjaxRequest(url,aoData,optCallback);
   }
   
   function computService_period(){
     try{
		 var et=top.toTimestamp( $("#o_service_end").val() );
		 var st=top.toTimestamp( $("#o_service_begin").val() );
		 if ( et - st > 0 ) {
		   $("#o_service_period").val( Math.round( (et-st)/(1000*60*60*24*30) ) );
		 } else {
		   $("#o_service_period").val("");
		 }
	 }catch(e){}
	 try{
       clearInterval( interId );
	   interId = setInterval("computService_period()", 3000 );
     }catch(e){}
   }

   function setUploadFilePercent(fileName,loaded, total){
      var d=getUploadFileInputIndex(fileName);
      $("#uf_"+d).html( "已上传" + Math.round(loaded*100/total) + "% 共"+total+"B" );
   }
   
   function setUploadFilePercentById(id,loaded, total){
      $("#"+id).html( "已上传" + Math.round(loaded*100/total) + "% 共"+total+"B" );
   }
   
   function setUploadFileStatusById(id,isOK){
	 $("#"+id).html( isOK?"<font color='green'>上传成功</font>":"<font color='red'>上传失败</font>" );
   }
   
   function addFileInput(fileName){
     for ( var i=0;i<uploadFileNames.length;i++ ) {
	    if ( uploadFileNames[i] == fileName ) {
		  return ;
		}
	 }
	 uploadFileNames[uploadFileNames.length] = fileName;
     inputFileIndex++;
     var ht='<tr id="tr_file_'+inputFileIndex+'"><td width="10%" align="left" class="listTd">'+top.getCodeSelectHtml("FILE_TYPE","a_file_type_"+inputFileIndex)+'</td>';
	 ht+='<td width="65%" align="left" class="listTd"><input id="a_file_name_'+inputFileIndex+'" size="40" type="text" disabled="true" value="'+fileName+'"  ></input>&nbsp;<span class="spanA" id="uf_'+inputFileIndex+'"></span>';
	 ht+='</td><td width="15%" class="listTd">&nbsp;</td><td width="10%" class="listTd">&nbsp;<img src="../../img/delete.gif" onclick="removeTr(\'tr_file_'+inputFileIndex+'\')" /></td></tr>';
	 $("#filePathList").append( ht );
	 $("#btnAddFileSubmit").show();
   }
   
   function removeTr(trId){
     $("#"+trId).remove(); 
   }
   
   function getUploadFileInputIndex(fileName){
     for ( var i=0;i<uploadFileNames.length;i++ ) {
	    if ( uploadFileNames[i] == fileName ) {
		  return i;
		}
	 }
	 return -1;
   }
   
   function setUploadFileStatus(fileName,isOK){
	 var d=getUploadFileInputIndex(fileName);
	 $("#uf_"+(d+1)).html( isOK?"<font color='green'>上传成功</font>":"<font color='red'>上传失败</font>" );
   }
   
   function addFileSubmit(){
     var names="";
	 var types="";
	 var temp="";
     for (var i=1;i<=inputFileIndex;i++){
	   if ( !document.getElementById("tr_file_"+i) ) {
	      continue;
	   }
	   if ( $("#uf_"+i).html().indexOf("失败") != -1 ) {
		  continue ;
	   }
	   temp=$("#a_file_type_"+i).val();
	   if ( temp == '5' ) temp ="55";
	   types+=temp+"ISPLITI";
	   names+=$("#a_file_name_"+i).val()+"ISPLITI";
	 }
	 if ( names == '' ) {
	    top.showInfoWinWarn("没有要保存的附件");
	    return ;
	 }
 
	 var aoData=[];
     var url = "/actions/ProMVTProject.action?insertProFilePath";
	 aoData.push( { "name": "filePath.project_id", "value": projectId } );
	 aoData.push( { "name": "filePath.file_name", "value": names } );
	 aoData.push( { "name": "filePath.stage", "value": types } );
	 top.sendAjaxRequest(url,aoData,optCallback);
   }
   
   function createUploader(){
            uploader = new qq.FileUploader({
                element: document.getElementById('file-uploader-demo1'),
                action: top.getUrlBase()+"/uploadFile",
                debug: false,
				disableDefaultDropzone: false,
                extraDropzones: [qq.getByClass(document, 'qq-upload-extra-drop-area')[0]],
				onUpload: function(id, fileName, xhr){
				  addFileInput( fileName );
				},
				onProgress: function(id, fileName, loaded, total){
				  setUploadFilePercent( fileName, loaded, total );
				},
				onComplete:function(id, fileName, responseJSON){
				 try{
				  setUploadFileStatus(fileName,responseJSON.success);
				  if ( !responseJSON.success ) {
				    var msg="";
					if ( responseJSON.error == 'Exist' ) msg='文件已存在，请修改文件名后再上传。';
					if ( msg != '' ) top.showInfoWinWarn("文件上传失败:"+msg);
				  }
				 }catch(e){}
				},
				onError: function(id, fileName, reason) {
				 try{
				  setUploadFileStatus(fileName,responseJSON.success);
				 }catch(e){}
				}
            });
    }
	
	function getFileName( fileName ) {
		 return projectObj.contract_code+"_"+fileName;
	}
	
	function appendUploadUrl(){
	    return "&prefix="+projectObj.contract_code+"_";
	}
   
   function submitCloseProject(){
       if ( $("#i_fileNameCloseProject").val() == '' ) {
	     top.showInfoWinWarn("请上传附件");
	     return ;
	   }
	   if ( $("#fileNameCloseProjectStatus").html().indexOf("失败") != -1 ) {
	       top.showInfoWinWarn("请上传附件，如果总是上传失败，请改用其他浏览器上传。");
		   return ;
	   }
   
       top.showConfirm("您确定要申请关闭项目吗？", doSubmitCloseProject);
   }
   
   function doSubmitCloseProject(){
	   var aoData=[];
	   var url = "/actions/ProMVTProject.action?submitCloseProject";
	   aoData.push( { "name": "info.id", "value": projectId } );
	   aoData.push( { "name": "temp", "value": $("#i_fileNameCloseProject").val() } );
	   aoData.push( { "name": "info.project_name", "value": projectObj.project_name } );
	   top.showLoadingInfo(true);
	   top.sendAjaxRequest(url,aoData,optCallback);
   }
   
   function submitForceCloseProject(){
       top.showConfirm("您确定要申请强制关闭项目吗？", doSubmitForceCloseProject);
   }
   
   function doSubmitForceCloseProject(){
	   var aoData=[];
	   var url = "/actions/ProMVTProject.action?submitForceCloseProject";
	   aoData.push( { "name": "info.id", "value": projectId } );
	   aoData.push( { "name": "info.project_name", "value": projectObj.project_name } );
	   top.showLoadingInfo(true);
	   top.sendAjaxRequest(url,aoData,optCallback);
   }
   
   function saveWorkTime(){
      var url = "/actions/ProMVTProject.action?insertProWorkTime";
	  if ( hasWorkTime ) {
	    url = "/actions/ProMVTProject.action?updateProWorkTime";
	  }
	  var aoData=[];
	  var total=0;
	  var temp=top.g_GetNumValue($("#i_junior_y").val());
	  total=total+Number(temp);
	  aoData.push( { "name": "workTime.junior", "value": temp } );
	  temp=top.g_GetNumValue($("#i_middle_y").val());
	  total=total+Number(temp);
	  aoData.push( { "name": "workTime.middle", "value": temp } );
	  temp=top.g_GetNumValue($("#i_other_y").val());
	  total=total+Number(temp);
	  aoData.push( { "name": "workTime.other", "value": temp } );
	  temp=top.g_GetNumValue($("#i_pm_y").val());
	  total=total+Number(temp);
	  aoData.push( { "name": "workTime.pm", "value": temp } );
	  temp=top.g_GetNumValue($("#i_four_y").val());
	  total=total+Number(temp);
	  aoData.push( { "name": "workTime.four", "value": temp } );
	  aoData.push( { "name": "workTime.pronum", "value": projectObj.project_code } );
	  temp=top.g_GetNumValue($("#i_senior_y").val());
	  total=total+Number(temp);
	  aoData.push( { "name": "workTime.senior", "value": temp } );
	  aoData.push( { "name": "workTime.data_type", "value": "y" } );
	  aoData.push( { "name": "workTime.total", "value": total } );
	  if ( projectObj.senior_project_manager == projectObj.project_manager_id ) {
	    aoData.push( { "name": "info.senior_project_manager", "value": projectObj.project_director } );
	  } else {
	    aoData.push( { "name": "info.senior_project_manager", "value": projectObj.senior_project_manager } );
	  }
	  aoData.push( { "name": "info.id", "value": projectId } );
	  aoData.push( { "name": "info.project_name", "value": projectObj.project_name } );
	  top.showLoadingInfo(true);
	  top.sendAjaxRequest(url,aoData,optCallback);
   }