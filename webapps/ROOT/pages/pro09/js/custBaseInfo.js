   //认识公司途径
	function getKnowWay(){
		var aoData=[];
		top.sendAjaxRequest("/actions/CustInfo.action?getAllKnowWayList",aoData,getKnowWayCallback);	
	}
	
	function getKnowWayCallback(obj){
		try{
		var wayList=top.getCodeListByType("WAY_TYPE");
		var ht="";
		var rowNum=0;
		var wid=0;
		ht+="<tr>";
		if(wayList){
			if(wayList.length>0){
				wid=100/Number(wayList.length);
			}
			for(var i=0;i<wayList.length;i++){
				ht+="<td align='center' width='"+wid+"%'>"+wayList[i].name+"</td>";
				rowNum++;
			}
			ht+="</tr><tr  class='tr_data'>";
			for(var i=0;i<wayList.length;i++){
				ht+="<td valign='top'><table id='way0"+(Number(i)+Number(1))+"'></table></td>";
				//ht+="<td valign='top'><table id='way"+wayList[i].id+"'></table></td>";
				rowNum++;
			}
		}
		ht+="</tr>";
		$("#knowWayTable").html(ht);
		var wayDataList=obj.aaData;
		var way_type="";
		var str="";
		if(wayDataList){
			if(wayDataList.length>0){
				way_type=wayDataList[0].way_type;
				for(var i=0;i<wayDataList.length;i++){
					if(wayDataList[i].way_type!=way_type){
						if(way_type=='05'){
							str+='<tr class="tr_data"><td align="left"><input type="text" id="other_way"></td></tr>';
						}
						$("#way"+way_type).html(str);
						str='<tr class="tr_data"><td align="left"><input type="checkbox" name="path_way" value="'+wayDataList[i].way_title+'" />'+wayDataList[i].way_title+'</td><tr>';
						way_type=wayDataList[i].way_type;
					}else{
						str+='<tr class="tr_data"><td align="left"><input type="checkbox" name="path_way" value="'+wayDataList[i].way_title+'" />'+wayDataList[i].way_title+'</td><tr>';
					}		
				}
				if(way_type=='05'){
					str+='<tr class="tr_data"><td align="left"><input type="text" id="other_way"></td></tr>';
				}
				$("#way"+way_type).html(str);
			}
		}
		if(optType=='insert'||optType=='interpose_insert'){ 
			if(optType=='interpose_insert'){
				$("#tr_interpose_type").show();
				$("#tr_interpose_memo").show();
			}
			return;
		}
	}catch(e){}
		baseInitData();
	}
	//初始化方法
   function baseInitData(){
         $("#cust_baseinfo_tabs ul").tabs();
		 //$("#tdcontract_check").html(top.getCodeSelectHtml("EXAMINE_STATUS","contract_check_status",false));
		 
		 if(optType=='update'||optType=='query'||optType=='interpose_update'){
			$("#cust_code").val( cust_base_info_id );
			var aoData=[];
			if(cust_base_info_id==''){
				if(require_id!=''){
					aoData.push( { "name": "custRequire.id", "value": require_id } );
					top.sendAjaxRequest("/actions/CustInfo.action?getFitmentCustInfoByRequireId",aoData,baseInfoCallback);
				}
			}else{
				aoData.push( { "name": "custInfo.code", "value": cust_base_info_id } );
				top.sendAjaxRequest("/actions/CustInfo.action?getFitmentCustInfo",aoData,baseInfoCallback); 
			}
		}else if(optType=='moneyRecord'){
			//callBackTabs=$( "#cust_base_tabs ul" ).tabs();
			showMoneyRecord();
			require_id=top.getUrlParam(document.URL,"requireId");
			queryMoneyRecordList();
		}else {
			//callBackTabs=$("#cust_base_tabs ul" ).tabs();
			$("#hideDesigner").hide();
			for(var i=0;i<6;i++){
				$("#hidetr"+(i+1)+"").hide();
			}
			
			$( "#tdcheck_result" ).html( top.getCodeSelectHtml("CHECK_RESULT","check_result",false) );
			$( "#tdpaper_is_complete" ).html( top.getCodeSelectHtml("ISYESORNO","paper_is_complete",false) );
			if(optType=='interpose_insert'){
				$("#tr_interpose_type").show();
				$("#tr_interpose_memo").show();
			}
		//设置select默认选择值
			$("select").val('01');
			$("#cust_type").val('B');
			$("#from_type").val('02');
			$("#cust_intention").val('02');
		}
		
		if (!top.g_isPermit('design_auditing') ) {
				$('#tab_designPlan_check').hide();
			}
		if (!top.g_isPermit('contract_auditing') ) {
			$('#tab1_contract_check').hide();
			$('#tab2_contract_check').hide();
			$('#tab3_contract_check').hide();
		}
		if (!top.g_isPermit('quote_auditing') ) {
				$('#picLi6').hide();
	    }
	    if(top.g_isPermit("09_cust_callback_opt")){
			$("#callback_plan").show();
		}else{
			$("#callback_plan .buttonDivTwo").hide();
	    }
 }
   
	// 保存基本信息
    function baseDoSubmit(){
	  // 检查
		var checkMsg = baseCheckFormDoSubmit();
			if ( checkMsg != '' ) {
			   top.showInfoWinWarn(checkMsg);
			   return;
			}
		var aoData=[];
		 if(cust_base_info_id!=''){
			aoData.push( { "name": "custInfo.code", "value":cust_base_info_id } );
		 }else{
			aoData.push( { "name": "custInfo.code", "value": pre_cust_code+$("#cust_code").val()  } );
		 }
		// aoData.push( { "name": "custInfo.code", "value": cust_base_info_id } );
		 aoData.push( { "name": "custInfo.cust_name", "value": $("#cust_name").val() } );
		// aoData.push( { "name": "custInfo.cust_manager", "value": $("#cust_manager").val() } );
		 aoData.push( { "name": "custInfo.register_date", "value": top.toTimestamp($("#register_date").val()) });
		 aoData.push( { "name": "custInfo.from_type", "value": $("#from_type").val() } );
		 if($("#from_type").val()=="05"){
			aoData.push( { "name": "custInfo.other_from_type", "value": $("#other_from_type").val() } );
		 }
		 if($("#from_type").val()=="04"){
		    aoData.push( { "name":"custInfo.market_user","value": $("#market_user").val() } );
		 }
		 aoData.push( { "name": "custInfo.cust_sex", "value": $("#cust_sex").val() } );
		 aoData.push( { "name": "custInfo.cust_type", "value": $("#cust_type").val() } );
		 aoData.push( { "name": "custInfo.cust_phone", "value": $("#cust_phone").val() } );
		 aoData.push( { "name": "custInfo.cust_mobile", "value": $("#cust_mobile").val() } );
		 aoData.push( { "name": "custInfo.cust_job", "value": $("#cust_job").val() } );	
		 aoData.push( { "name": "custInfo.cust_job_else", "value": $("#cust_job_else").val() } );
		aoData.push( { "name": "custRequire.room_count", "value": top.g_GetNumValue($("#room_count").val()) } );
		aoData.push( { "name": "custRequire.hall_count", "value": top.g_GetNumValue($("#hall_count").val() )} );
		aoData.push( { "name": "custRequire.bath_count", "value": top.g_GetNumValue($("#bath_count").val() )} );
		
		aoData.push( { "name": "custInfo.belong_design_dept","value":$("#belong_design_dept").val() } )
		//aoData.push( { "name": "custRequire.require_manager", "value": $("#designer_code").val() } );
		

		aoData.push( { "name": "custRequire.cust_code", "value": cust_base_info_id } );
		aoData.push( { "name": "custRequire.district", "value": $("#district").val() } );
		aoData.push( { "name": "custRequire.project_addr", "value": $("#project_addr").val() } );
		aoData.push( { "name": "custRequire.addr_province", "value": $("#s_province").val() } );
		aoData.push( { "name": "custRequire.cust_city", "value": $("#s_city").val() } );
		aoData.push( { "name": "custRequire.addr_area", "value": $("#s_county").val() } );
		aoData.push( { "name": "custRequire.addr_building", "value": $("#addr_building").val() } );
		aoData.push( { "name": "custRequire.addr_unit", "value": $("#addr_unit").val() } );
		aoData.push( { "name": "custRequire.addr_floor", "value": $("#addr_floor").val() } );
		aoData.push( { "name": "custRequire.addr_door_num", "value": $("#addr_door_num").val() } );
		
		aoData.push( { "name": "custRequire.callback_time", "value": $("#callback_time").val() } );
		aoData.push( { "name": "custRequire.room_type", "value": $("#room_type").val() } );
		aoData.push( { "name": "custRequire.other_room_type", "value": $("#room_type_else").val() } );
		aoData.push( { "name": "custRequire.planinvest_money", "value": $("#planinvest_money").val() } );
		aoData.push( { "name": "custRequire.major_material", "value": $("#major_material").val() } );
		aoData.push( { "name": "custInfo.path_way", "value": top.getAllCheckedValue( document.getElementsByName("path_way") ) } );
		aoData.push( { "name": "custInfo.other_way", "value": $("#other_way").val() } );
		aoData.push( { "name": "custRequire.focus", "value": top.getAllCheckedValue( document.getElementsByName("focus") ) } );
		aoData.push( { "name": "custRequire.other_focus", "value": $("#other_focus").val() } );
		aoData.push( { "name": "custRequire.other_require_style", "value": $("#other_require_style").val() } );
		aoData.push( { "name": "custRequire.require_style", "value": top.getAllCheckedValue( document.getElementsByName("require_style") ) } );
		if($("#other_function_require").val()!=''){
			aoData.push( { "name": "custRequire.function_require", "value": top.getAllCheckedValue( document.getElementsByName("function_require") )+";"+ $("#other_function_require").val() } );
		}else{
			aoData.push( { "name": "custRequire.function_require", "value": top.getAllCheckedValue( document.getElementsByName("function_require") ) } );
		}
		//aoData.push( { "name": "custRequire.function_require", "value": $("#function_require").val() } );
		aoData.push( { "name": "custRequire.design_key", "value": $("#design_key").val() } ); 
		aoData.push( { "name": "custRequire.struct_area", "value": top.g_GetNumValue($("#struct_area").val()) } );
		aoData.push( { "name": "custRequire.completed_date", "value": top.toTimestamp($("#completed_date").val()) } );
		aoData.push( { "name": "custRequire.usable_area", "value": top.g_GetNumValue($("#usable_area").val()) } );
		aoData.push( { "name": "custRequire.planfitment_date", "value": top.toTimestamp($("#planfitment_date").val()) });
		aoData.push( { "name": "custRequire.cust_status", "value": cust_status } );
		//aoData.push( { "name": "custRequire.cust_city", "value": $("#cust_city").val() } );
		//aoData.push( { "name": "custRequire.cust_building_name", "value": $("#cust_building_name").val() } );
		aoData.push( { "name": "custRequire.cust_description", "value": $("#cust_description").val() } );
		aoData.push( { "name": "custRequire.intention_evaluate", "value": $("#intention_evaluate").val() } );
		aoData.push( { "name": "custRequire.is_measure_house", "value": top.getRadioValue( document.getElementsByName("is_measure_house") ) } );
		aoData.push( { "name": "custRequire.is_visit_model_house", "value": top.getRadioValue( document.getElementsByName("is_visit_model_house") ) } );
		aoData.push( { "name": "interpose.cust_code", "value": cust_base_info_id } );
		if(optType=='interpose_update'){
			aoData.push( { "name": "interpose.id", "value": $("#interpose_id").val()} );
			aoData.push( { "name": "interpose.deal_user", "value": $("#view_edit_designer_code").val()} );
			aoData.push( { "name": "interpose.interpose_type", "value": $("#view_edit_interpose_type").val() } );
			aoData.push( { "name": "interpose.memo", "value": $("#view_edit_interpose_memo").val() } );
			aoData.push( { "name": "custRequire.require_manager", "value": $("#view_edit_designer_code").val() } );
			aoData.push( { "name": "custRequire.send_date", "value": top.toTimestamp($("#view_send_date_inp").val()) } );
		}else{
			aoData.push( { "name": "interpose.id", "value": $("#interpose_id").val()} );
			aoData.push( { "name": "interpose.deal_user", "value": $("#designer_code").val()} );
			aoData.push( { "name": "interpose.interpose_type", "value": $("#interpose_type").val() } );
			aoData.push( { "name": "interpose.memo", "value": $("#interpose_memo").val() } );
			aoData.push( { "name": "custRequire.send_date", "value": top.toTimestamp($("#send_date").val()) } );//top.toTimestamp($("#send_date").val()
			aoData.push( { "name": "interpose.require_id", "value": require_id } );
			aoData.push( { "name": "custRequire.require_manager", "value": $("#designer_code").val() } );
		}
		aoData.push( { "name": "old_require_manager", "value":old_require_manager} );
		aoData.push( { "name": "old_cust_manager", "value":old_cust_manager } );
	
		var xurl="/actions/CustInfo.action?updateFitmentCustInfo";
		if((is_send==false||optType=='interpose_update')&& ($("#designer_code").val()!=''||$("#view_edit_designer_code").val()!='')&&($("#designer_code").val()!=$("#view_edit_designer_code").val())){
		   is_send=true;
		}else{
		   is_send=false;
		}
		 aoData.push( { "name": "is_send", "value": is_send } );
		 if ( cust_base_info_id == 0 ) {
			 if(optType=='interpose_insert'||optType=="interpose_update"){
			  aoData.push( { "name": "is_interpose", "value": true } );
			 }
			 else{
			   aoData.push( { "name": "is_interpose", "value": false } );
			 }
			xurl="/actions/CustInfo.action?insertFitmentCustInfo";
		 }
		//店面经理修改客户经理 
		if(top.g_isPermit('09_alter_cust_manager')&&!top.g_isPermit('cust_edit')){
			aoData.push( { "name": "custInfo.cust_manager", "value": $("#view_cust_manager_val").val() } );
		//店面经理修改设计师
		}else{
			aoData.push( { "name": "custInfo.cust_manager", "value": $("#cust_manager").val() } );
		}
		 top.sendAjaxRequest(xurl,aoData,baseOptCallback);
   }
    //校验客户基本信息
	function baseCheckFormDoSubmit(){	
	    var mobile="";
		var phone="";
		mobile=$("#cust_mobile").val();
		phone=$("#cust_phone").val();
		var msg="";
		if($("#cust_manager").val()=="" || $("#cust_manager").val()=="undefine"){
		  msg+="请选择客户经理！<br/>";
		}
		//float类型数据校验
	    if ( $("#struct_area").val() != '' && (!IsFloat( $("#struct_area").val()) || $("#struct_area").val()>99999999 || $("#struct_area").val()<0 )){
			msg += "[建筑面积]应为0~99999999之间的数字类型<br>";
		}
		if ( $("#usable_area").val() != '' && (!IsFloat( $("#usable_area").val()) || $("#usable_area").val()>99999999 || $("#usable_area").val()<0 )) {
			msg += "[套内面积]应为0~99999999之间的数字类型<br>";
		}
		if ( $("#planinvest_money").val() != '' && (!IsFloat( $("#planinvest_money").val()) || $("#planinvest_money").val()>99999999 || $("#planinvest_money").val()<0 )) {
			msg += "[预投工程资金]应为0~99999999之间的数字类型<br>";
		}
		if ( $("#major_material").val() != '' && (!IsFloat( $("#major_material").val()) || $("#major_material").val()>99999999 || $("#major_material").val()<0 )) {
			msg += "[预投主材资金]应为0~99999999之间的数字类型<br>";
		} 
		
		//字符非空校验
		if(pre_cust_code==''){
			msg += checkString($("#cust_code").val(),true,20,"客户编号");
		}else{
			if ( $("#cust_code").val() != '' && !IsNumber( $("#cust_code").val() )){
			   msg +="客户编号应为数字类型!<br>";
			}
		}
		msg += checkString($("#cust_name").val(),true,32,"客户姓名");
		msg += checkString($("#from_type").val(),true,10,"客户来源");
		if(top.getRadioValue( document.getElementsByName("handhouse_type") )=='1'){
			msg += checkString($("#completed_date").val(),true,10,"交房日期");
		}
		
		msg += checkString($("#register_date").val(),true,10,"登记日期");
		//msg += checkString($("#send_date").val(),true,10,"派单日期");
		if($("#s_province").val()=='省份'){
			msg +='请填写工程地址所在的省份';
		}
		if($("#s_city").val()=='地级市'){
			msg +='请填写工程地址所在的城市';
		}
		if($("#s_county").val()=='市、县级市'){
			msg +='请填写工程地址区/县';
		}	
		msg += checkString($("#addr_building").val(),false,10,"楼号");
		msg += checkString($("#addr_unit").val(),false,10,"单元号");
		msg += checkString($("#addr_floor").val(),false,10,"楼层号");
		msg += checkString($("#addr_door_num").val(),false,10,"房间号");
		//TODO
		msg += checkString($("#room_type_else").val(),false,16,"其他居室类型");
		msg += checkString($("#function_require").val(),false,512,"居室功能要求");
		msg += checkString($("#design_key").val(),false,512,"家居设计重点");
		msg += checkString($("#cust_description").val(),false,512,"客情描述");
		msg += checkString($("#other_way").val(),false,32,"认识公司其他路径");
		
		msg += checkString($("#cust_job_else").val(),false,16,"其他职业类型");
		msg += checkString($("#other_from_type").val(),false,10,"其他客户来源");
		msg += checkString($("#project_addr").val(),false,32,"工程地址其他");
		msg += checkString($("#other_focus").val(),false,64,"其他关注点");
		msg += checkString($("#other_require_style").val(),false,64,"其他风格需求");
		msg += checkString($("#other_function_require").val(),false,32,"其他功能需求");
		if(optType=="interpose_insert"){
		   msg += checkString($("#designer_code").val(),true,10,"派单设计师");
		}else if(optType=="interpose_update"){
			 msg += checkString($("#view_edit_designer_code").val(),true,10,"派单设计师");
		}
		if ( mobile == '' ||!checkPhone(mobile) ) {msg += "移动号码格式不正确<br>";};
		msg += checkString(mobile,false,32,"移动号码格式不正确");
		if ( phone != '' && !checkPhone(phone) ) {msg += "固定电话号码格式不正确<br>";};
		msg += checkString(phone,false,32,"固定电话号码格式不正确");
		return msg;
   }
	function baseOptCallback(obj){
       try{
        if ( obj.status == true ){
            isSaveOK = true;
            top.showInfoWinOK("操作成功");
			
		    editModelBt();
			//如果页面来自人工干预
			if(optType=='interpose_update'){
				//更新客户状态:已派单
				updateCustStatus('1');
				$("#view_edit_tr_interpose_type").hide(); 
				$("#view_edit_tr_interpose_memo").hide();
				$("#view_edit_sapn_designer_code").hide();
				
				//$("#view_send_date_inp").val();
				$("#view_send_date_inp").hide();
				$("#view_send_date").show();
				$("#tr_view_interpose_type").show(); 
				$("#tr_view_interpose_memo").show();
				$("#view_designer_code").show();
				$("#view_interpose_memo").html($("#view_edit_interpose_memo").val());
			    $("#view_interpose_type").html( top.getCodeName("INTERPOSE_TYPE",$("#view_edit_interpose_type").val()));
			    $("#view_designer_code").html( top.getUserNameByCode($("#view_edit_designer_code").val()));
				//TODO
				checkInfoSave();
				return;
			}
			
			if ( cust_base_info_id == 0||require_id=='' ) {
				require_id=obj.msg;
				cust_base_info_id=pre_cust_code+$("#cust_code").val() ;
				$("#view_cust_code").html( cust_base_info_id );
				$("#cust_code").hide();
				$("#pre_cust_code").hide();
				$("#lb_cust_code").html(cust_base_info_id);
				$("#lb_cust_code").show();
				//createCustAnalysisHtml();
				$("#menu_bts").show();
				$("#top_cust_table").show();
				$("#displayContent").css("height",($(window).height()-100)+"px");
				//客户沟通
				addCustCallback();
				changBaseBtclick(1);
				editModelBt();
				//登记保存基本信息后加载客户回访信息
				getCustCallbackList();
				$("#come_time"+(callbackNum-1)).val(top.getCurrentDate());
				//callBackTabs=$( "#cust_base_tabs ul" ).tabs();
				pre_cust_code='';
			}
			refreshCustBase();
			//显示客户基本信息和工程合同标签
			$("#view_callback_plan_info").show();
			$("#cust_baseinfo_tabs").show();
			$("#cust_baseinfo_tabs ul").tabs();
            $("#cust_li_projectContract").show();
			checkInfoSave();
        }else{
            isSaveOK = false;
            top.showInfoWinError("操作失败 "+obj.msg);
        }
		toggleMenuBt();
       }catch(e){
          top.showInfoWinError("处理异常:"+e.message);
       }
   }
   function addCustCallback(){
		var ht='<tr><td id="td_callback_'+callbackNum+'" style="cursor:pointer" class="versionStyle2" align="center"><a onclick="changBaseBtclick(\''+callbackNum+'\')"><span>'+callBackNumber[callbackNum-1]+'次沟通</span></a></td></tr>';
		$('#custManageWorkTab').before(ht);//添加第几次回访标题标签
		addCallBackHtml();//生成每次回访的页面html框架
		AddMoreCallBack();
		$("#come_time"+(callbackNum-1)).val(top.getCurrentDate());//新添加沟通时间
		$("#cust_base_tabs-"+callbackNum-1).show();
		changBaseBtclick(callbackNum-1);//显示选中状态
   }
    function refreshCustBase(){
		$("#div_view_cust_base").show();
		$("#div_edit_cust_base").hide();
		$("#view_cust_name").html($("#cust_name").val());
		$("#top_cust_name").html($("#cust_name").val());//页面头部客户基本信息
		$("#top_cust_type").html( top.getCodeName("CUST_TYPE",$("#cust_type").val()));
		$("#top_cust_code").html(cust_base_info_id);
		$("#view_register_date").html($("#register_date").val());
		$("#view_cust_phone").html($("#cust_phone").val());
		$("#view_cust_mobile").html($("#cust_mobile").val());
		if($("#cust_job_else").val()!=null&&$("#cust_job_else").val()!=''){
			$("#view_cust_job").html($("#cust_job_else").val());
		}else{
			$("#view_cust_job").html(top.getCodeName("CUST_JOB",$("#cust_job").val()));
		}
		$( "#view_cust_sex" ).html( top.getCodeName("SEX",$( "#cust_sex" ).val()) );
		$( "#view_cust_type" ).html( top.getCodeName("CUST_TYPE",$( "#cust_type" ).val() ) ); 
		$( "#span_design_dept").html( $("#belong_design_dept option:selected").text());
		if($( "#other_from_type" ).val()!=null&&$( "#other_from_type" ).val()!=''){
			$( "#view_from_type" ).html($( "#other_from_type" ).val() );
		}else if($("#market_user").val()!=""){
		    $("#view_from_type").html(top.getCodeName("CUST_FROM_TYPE",$("#from_type").val())+"&nbsp;推广人:"+$("#market_user").val());
		}else{
					$( "#view_from_type" ).html( top.getCodeName("CUST_FROM_TYPE",$( "#from_type" ).val() ) );
				}
			
			$("#view_cust_manager").html(top.getUserNameByCode($( "#cust_manager").val()));
				old_cust_manager= $( "#cust_manager").val();
			  $("#view_interpose_memo").html($("#interpose_memo").val());
			  $("#view_send_date").html($("#send_date").val());
			  $("#view_interpose_type").html(top.getCodeName("INTERPOSE_TYPE", $("#interpose_type").val()));
	
				$("#view_room_type").html( top.getCodeName("ROOM_TYPE",$("#room_type").val()));
				if($("#room_type_else").val()!=null&&$("#room_type_else").val()!=''){
					$("#view_room_type").html($("#room_type_else").val());
				}
				$("#view_designer_code").html( top.getUserNameByCode($("#designer_code").val()) );
				
				//$("#view_function_require").html($("#function_require").val());
				$("#view_design_key").html($("#design_key").val());
				$("#view_planinvest_money").html($("#planinvest_money").val());
				$("#view_major_material").html($("#major_material").val());
				$("#view_focus").html( top.getAllCheckedValue( document.getElementsByName("focus") )  );
				
				$("#view_path_way").html(top.getAllCheckedValue( document.getElementsByName("path_way") ));
				$("#view_require_style").html(top.getAllCheckedValue( document.getElementsByName("require_style") ));
				if($("#completed_date").val()==0){
					$("#view_handhouse_type").html('现房');
				}else{
					$("#view_handhouse_type").html('期房 交房日期：'+$("#completed_date").val());
				}
				if($("#other_way").val()!=""&&$("#other_way").val()!=null){
					$("#view_path_way").html(top.getAllCheckedValue( document.getElementsByName("path_way") )+','+$("#other_way").val());
				} if($("#other_focus").val()!=""){
					other_focus=false;
					doOtherFocus();//显示文本框
					$("#view_focus").html(top.getAllCheckedValue( document.getElementsByName("focus") )+':'+$("#other_focus").val());
				} 
				if($("#other_require_style").val()!=""){
					otherRequireStyle=false;
					doOtherRequireStyle();//显示文本框
					$("#view_require_style").html(top.getAllCheckedValue( document.getElementsByName("require_style") )+':'+$("#other_require_style").val());
				}
				if($("#other_function_require").val()!=""){
					otherFunctionRequire=false;
					doOtherFunctionRequire();//显示文本框
					$("#view_function_require").html(top.getAllCheckedValue( document.getElementsByName("function_require") )+':'+$("#other_function_require").val());
				}else{
					$("#view_function_require").html(top.getAllCheckedValue( document.getElementsByName("function_require") ));
				}
				$("#view_struct_area").html( $("#struct_area").val());
				$("#view_usable_area").html($("#usable_area").val());
				$("#view_fill_date").html( top.getTimeStr( $("#fill_date").val(), true ) );
				$("#view_completed_date").html($("#completed_date").val());
				$("#view_room_count").html( $("#room_count").val());
				$("#view_hall_count").html(  $("#hall_count").val());
				$("#view_bath_count").html($("#bath_count").val());
				$("#view_planfitment_date").html($("#planfitment_date").val());
				$("#view_cust_description").html($("#cust_description").val());
				$("#view_intention_evaluate").html( top.getCodeName("INTENTION_EVALUATE",$("#intention_evaluate").val()) );

				
				$("#view_is_measure_house").html(top.getRadioValue( document.getElementsByName("is_measure_house") ));
				$("#view_is_visit_model_house").html(top.getRadioValue( document.getElementsByName("is_visit_model_house") ) );
				//$("#view_district").html( top.getCodeName("DISTRICT",$("#district").val())+''+$("#project_addr").val());
				getAddrInfo();
				$("#view_cust_building_name").html($("#cust_building_name").val());
				$("#view_cust_city").html(top.getCodeName("CITY",$("#cust_city").val()));
				//页面头部客户基础信息
				//$("#top_district").html( top.getCodeName("DISTRICT",$("#district").val())+''+$("#project_addr").val());
				
				if(cust_status=='0'&&$("#designer_code").val()!=''){
					cust_status='1';
				}
				$("#view_cust_status").html(top.getCodeName("CUST_STATUS",cust_status));
				$("#span_cust_status").html( top.getCodeName("CUST_STATUS",cust_status) );
				$("#top_cust_status").html( top.getCodeName("CUST_STATUS",cust_status) );
				$("#view_measure_project_addr").html($("#project_addr").val());
				$("#view_measure_room_count").html( $("#room_count").val());
				$("#view_measure_hall_count").html( $("#hall_count").val());
				$("#view_measure_bath_count").html( $("#bath_count").val());
				//页面头部客户基础信息
				$("#top_measure_room_count").html( $("#room_count").val());
				$("#top_measure_hall_count").html( $("#hall_count").val());
				$("#top_measure_bath_count").html( $("#bath_count").val());
				
				$("#view_measure_require_style").html($("#measure_require_style").val());
				$("#view_measure_struct_area").html($("#struct_area").val());
				$("#view_measure_usable_area").html( $("#usable_area").val());
				$("#view_measure_planinvest_money").html($("#planinvest_money").val());
				$("#view_measure_major_material").html($("#major_material").val());
				$("#view_measure_designer").html(top.getUserNameByCode($("#require_manager").val()));
				$("#view_measure_district").html(top.getCodeName("DISTRICT",$("#district").val()));  
				if(top.g_isPermit('09_alter_cust_manager')&&!top.g_isPermit('cust_edit')){
					$("#view_cust_manager").html(top.getUserNameByCode($( "#view_cust_manager_val").val()));
					$("#view_tdcust_manager").hide();
					$("#view_cust_manager").show();
					$("#cust_manager").val($( "#view_cust_manager_val").val());
					old_require_manager=$("#require_manager").val();
					if($("#disCust_examine_status_hd").val()=='0'){
						$("#view_tr_custdisable_examine_suggest").hide();
						$("#view_tr_custdisable_examine_bt").hide(); 
					}
				}
			}
    function getAddrInfo(){
		var ht="";
		if($("#s_province").val()!='省份'){
			ht+=$("#s_province").val()+' ';
		}
		if($("#s_city").val()!='地级市'&&$("#s_city").val()!=$("#s_province").val()){
			ht+=$("#s_city").val()+' ';
		}
		if($("#s_county").val()!='市、县级市'){
			ht+=$("#s_county").val()+' ';
		}
		if($("#district").val()!=''){
			//ht+=$("#district").val()+' ';
			ht+=top.getCodeName("DISTRICT",$("#district").val())+' ';
		}
		if($("#addr_building").val()!=''){
			ht+=$("#addr_building").val()+'号楼 ';
		}
		if($("#addr_unit").val()!=''){
			ht+=$("#addr_unit").val()+'单元 ';
		}
		if($("#addr_floor").val()!=''){
			ht+=$("#addr_floor").val()+'层 ';
		}
		if($("#addr_door_num").val()!=''){
			ht+=$("#addr_door_num").val()+'号 ';
		}
		if($("#project_addr").val()!=''){
			ht+=$("#project_addr").val();
		}
		$("#view_district").html(ht);	
		$("#top_district").html(ht);		
	}
	function setAddrInfo(s_province,s_city,s_county,addr_building,addr_unit,addr_floor,addr_door_num,project_add){
		$("#s_province").val(s_province);
		$("#s_province").trigger("change");
		$("#s_city").val(s_city);
		$("#s_city").trigger("change");
		$("#s_county").val(s_county);
		//$("#district").val(district);
		$("#addr_building").val(addr_building);
		$("#addr_unit").val(addr_unit);
		$("#addr_floor").val(addr_floor);
		$("#addr_door_num").val(addr_door_num);
		$("#project_addr").val(project_add);
	}
	//查询某客户人工干预信息
	function queryIntrPoseInfo(coseCode){
		var aoData=[];
		aoData.push( { "name": "interpose.cust_code", "value": coseCode } );
		top.sendAjaxRequest("/actions/CustInfo.action?getInterposeByCustCode",aoData,queryIntrPoseInfoCallBack);
	}
	function queryIntrPoseInfoCallBack(obj){
	  try{
        if ( obj.status == true ){
			interpose=obj.body;
			if(interpose){
				$("#interpose_id").val(interpose.id);
				$("#interpose_memo").val(interpose.memo);
				$("#interpose_type").val( interpose.interpose_type);
				//视图页面 当页面的入口是人工干预模块时显示view_edit
				$("#view_edit_interpose_memo").val(interpose.memo);
				$("#view_edit_interpose_type").val( interpose.interpose_type);
				$("#view_interpose_memo").html(interpose.memo);
				$("#view_interpose_type").html(top.getCodeName("INTERPOSE_TYPE", interpose.interpose_type));
			}
		}
	  }catch(e){
          top.showInfoWinError("处理异常:"+e.message);
       }
	}
	//tab_id 回访次数；bOrA 回访或客情分析页面
    function changBaseBtclick(tab_id){
		$("#td_callback_"+cur_tab_id).removeClass('versionStyle2');
	    $("#td_callback_"+cur_tab_id).addClass('versionStyle');
		$("#cust_base_tabs-"+cur_tab_id).hide();
        cur_tab_id=tab_id; 
	    $("#td_callback_"+cur_tab_id).removeClass('versionStyle');
	    $("#td_callback_"+cur_tab_id).addClass('versionStyle2');
		$("#cust_base_tabs-"+tab_id).show();
		$("#view_callBackInfo"+tab_id).show();
		$("#callBackInfo"+tab_id).hide();
	//判断是否有编辑权限
	if(top.g_isPermit('09_edit_callback_manager')){
		$("#cbEditBt").show();
		if(tab_id==(callbackNum-1)){
			$("#view_callBackInfo"+tab_id).hide();
			$("#callBackInfo"+tab_id).show();
			saveModelBt();
			$("#custManageWorkTab").show();
		}else{
			editModelBt();
		}
	}else{
		$("#cbEditBt").hide();
		$("#cbSaveBt").hide();
		$("#cbReturnBt").hide();
		$("#custManageWorkTab").hide();
	}
  }
	
	//回访计划页面显示 
	function callbackPlanDoEdit(){
		$("#edit_callback_plan_info").show();
		$("#view_callback_plan_info").hide();
		saveModelBt();	
    }
   //回访计划返回编辑页面
    function callbackPlanDoCancel(){
		editModelBt();
		$("#edit_callback_plan_info").hide();
		$("#view_callback_plan_info").show();
    }
	
	//客户回访保存页面显示
	function baseCBDoEdit(){
		$("#div_edit_cust_base").show();
		$("#div_view_cust_base").hide();
		saveCBModelBt();
    }
   //客户回访返回编辑页面
    function baseCBDoCancel(){
		//$("#div_edit_cust_base").show();
		//$("#div_view_cust_base").hide();
		editModelBt();
		$("#div_view_cust_base").show();
		$("#div_edit_cust_base").hide();
    }
	//基本信息保存页面显示
    function baseDoEdit(){
	//店长、店面经理
		saveModelBt();
		$("#baseSaveBt").attr("onclick","javascript:baseDoSubmit();");
		$("#baseReturnBt").attr("onclick","javascript:baseDoCancel();");
		$("#div_edit_cust_base").show();
		$("#div_view_cust_base").hide();
		if(optType=='insert'){
			//$("#tdcust_manager").show();
			//$("#edit_tdcust_manager").hide();
			//$("#span_designer_code").show();
			$("#edit_span_designer_code").show();
			return;
		}else if(optType=='interpose_update'){
			$("#div_edit_cust_base").hide();
			$("#div_view_cust_base").show()
			$("#view_edit_tr_interpose_type").show(); 
			$("#view_edit_tr_interpose_memo").show();
			$("#view_edit_sapn_designer_code").show();
			$("#view_send_date_inp").show();
			$("#view_send_date").hide();
			$("#tr_view_interpose_type").hide(); 
			$("#tr_view_interpose_memo").hide();
			$("#view_designer_code").hide();
			return;
		}
		if(top.g_isPermit('cust_edit')){
			if(top.g_isPermit('09_alter_cust_manager')){
				$("#tdcust_manager").show();
				$("#edit_tdcust_manager").hide();
			}
		}else{//只拥有编辑客户经理或设计师权限
			$("#div_edit_cust_base").hide();
			$("#div_view_cust_base").show();
			if(top.g_isPermit('09_alter_cust_manager')){
				$("#view_tdcust_manager").html(top.getUserListByRole('custManager','view_cust_manager_val',true));
				$("#view_cust_manager_val").val($("#cust_manager").val());
				$("#view_tdcust_manager").show();
				$("#view_cust_manager").hide();
				if($("#disCust_examine_status_hd").val()=='0'){
					$("#view_tr_custdisable_examine_suggest").show(); 
					$("#view_tr_custdisable_examine_bt").show();
				}
			}
		}
    }
   //基本信息返回编辑页面
    function baseDoCancel(){
		editModelBt();
		if(optType=='interpose_update'){
				$("#view_edit_tr_interpose_type").hide(); 
				$("#view_edit_tr_interpose_memo").hide();
				$("#view_edit_sapn_designer_code").hide();
				$("#tr_view_interpose_type").show(); 
				$("#tr_view_interpose_memo").show();
				$("#view_designer_code").show();
				
				$("#view_send_date_inp").hide();
				$("#view_send_date").show();
				return;
		}
		$("#div_edit_cust_base").hide();
		$("#div_view_cust_base").show();
		if(top.g_isPermit('09_alter_cust_manager')&&!top.g_isPermit('cust_edit')){
			$("#view_tdcust_manager").hide();
			$("#view_cust_manager").show();
			if($("#disCust_examine_status_hd").val()=='0'){
				$("#view_tr_custdisable_examine_suggest").hide(); 
				$("#view_tr_custdisable_examine_bt").hide();
			}
		}
    }
  

  //客户基本信息保存、编辑、取消按钮隐藏显示
    function saveCBModelBt(){
		$("#cbSaveBt").show();
		$("#cbReturnBt").show();
		$("#cbEditBt").hide();
		$("#custManageWorkTab").show();
    }
    function editCBModelBt(){
		$("#cbSaveBt").hide();
		$("#cbReturnBt").hide();
		$("#cbEditBt").show();
    }
	//客户回访信息保存、编辑、取消按钮隐藏显示
    function saveModelBt(){
		$("#baseSaveBt").show();
		$("#baseReturnBt").show();
		$("#baseEditBt").hide();
    }
    function editModelBt(){
		$("#baseSaveBt").hide();
		$("#baseReturnBt").hide();
		$("#baseEditBt").show();
    }

	//查询时调用的函数
	function baseInfoCallback(obj){
	   try{
				if ( obj.status == true ){
					/*if((optType=='update'&&initPage=='0-0')||optType=='interpose_update'){
						baseDoEdit();
					}else{
						baseDoCancel();
					}*/
				var o=obj.body;
				cust_base_info_id=o.code;
				require_id = o.requireInfo.id;
				$("#view_cust_code").html(o.code);
				$("#view_cust_name").html(o.cust_name);
				$("#view_register_date").html(top.getTimeStr(o.register_date,true));
				$("#view_cust_phone").html(o.cust_phone);
				$("#view_cust_mobile").html(o.cust_mobile);
				
				//页面头部基础信息显示
				$("#top_cust_code").html(o.code);
				$("#top_cust_name").html(o.cust_name);
				$("#top_cust_type").html( top.getCodeName("CUST_TYPE",o.cust_type));
				
				if(o.cust_job_else!=null&&o.cust_job_else!=''){
					$("#view_cust_job").html(o.cust_job_else);
				}else{
					$("#view_cust_job").html(top.getCodeName("CUST_JOB",o.cust_job));
				}
				$( "#view_cust_sex" ).html( top.getCodeName("SEX",o.cust_sex) );
				$( "#view_cust_type" ).html( top.getCodeName("CUST_TYPE",o.cust_type ) ); 
				if(o.other_from_type!=null&&o.other_from_type!=''){
					$( "#view_from_type" ).html(o.other_from_type );
				}else if(o.market_user!=null && o.market_user!=""){
				    $("#view_from_type").html( top.getCodeName("CUST_FROM_TYPE",o.from_type)+"&nbsp;推广人:"+o.market_user);
					$("#market_user").val(o.market_user);
				}else{
					$( "#view_from_type" ).html( top.getCodeName("CUST_FROM_TYPE",o.from_type ) );
				}
				$( "#view_cust_manager").html(top.getUserNameByCode(o.cust_manager));
				old_cust_manager=o.cust_manager;
				$("#project_cust_manager").val(o.cust_manager);//设置工程订单中的客户经理
				
				$("#cust_code").val(o.code); 
				$("#cust_code").hide();
				$("#pre_cust_code").hide();
				$("#lb_cust_code").html(o.code);
				$("#lb_cust_code").show();
				$("#cust_name").val(o.cust_name);
				$("#register_date").val(top.getTimeStr(o.register_date,true));
				$("#cust_manager").val(o.cust_manager);
				$("#edit_tdcust_manager").html(top.getUserNameByCode(o.cust_manager));
				
				$("#cust_phone").val(o.cust_phone);
				$("#cust_mobile").val(o.cust_mobile);
				$("#cust_job_else").val(o.cust_job_else);
				$( "#tdcust_sex" ).html( top.getCodeSelectHtml("SEX","cust_sex",false,o.cust_sex) );
				$( "#tdcust_type" ).html( top.getCodeSelectHtml("CUST_TYPE","cust_type",true, o.cust_type ) ); 
				$( "#tdfrom_type" ).html( top.getCodeSelectHtml("CUST_FROM_TYPE","from_type",true,o.from_type ) );
				$("#td_design_dept").html(top.getDesignDeptListSelectHtml("design_dept",o.belong_design_dept));
				$("#span_design_dept").html($("#design_dept option:selected").text());
				fromTypeChange();
				$( "#other_from_type").val(o.other_from_type);
				$( "#span_cust_job" ).html( top.getCodeSelectHtml("CUST_JOB","cust_job",true,o.cust_job,'onchangeCustJob()' ) );
				onchangeCustJob();
				
				
		    if(o.interpose){
			  $("#interpose_id").val(o.interpose.id);
			  $("#interpose_memo").val(o.interpose.memo);//编辑页面
			  $("#interpose_type").val( o.interpose.interpose_type);
			  //视图页面 当从人工干预进入时
			  $("#view_edit_interpose_memo").val(o.interpose.memo);
			  $("#view_edit_interpose_type").val( o.interpose.interpose_type);
			  
			  $("#view_interpose_memo").html(o.interpose.memo);
			  $("#view_interpose_type").html(top.getCodeName("INTERPOSE_TYPE", o.interpose.interpose_type));
			  if((o.interpose.interpose_type!=null&&o.interpose.interpose_type!='')||(o.interpose.memo!=null&&o.interpose.memo!='')){
					$("#tr_view_interpose_type").show();
					$("#tr_view_interpose_memo").show();
				}
			}
			if ( o.requireInfo ) {
				old_require_manager=o.requireInfo.require_manager;
				$("#span_room_type").html( top.getCodeSelectHtml("ROOM_TYPE","room_type",true, o.requireInfo.room_type,'onchangeRoomType()'));
				$("#view_room_type").html( top.getCodeName("ROOM_TYPE",o.requireInfo.room_type));
				//如果客户状态为废单 或者客户处于废单处理阶段 隐藏”客户废单申请“按钮
				if((o.requireInfo.cust_status!=null&&o.requireInfo.cust_status=='99')||(o.requireInfo.is_disabled_apply!=null&&o.requireInfo.is_disabled_apply=='1')){
					$("#disableCustBT").hide();
					$("#divDisCustInfo").show();
					$("#view_divDisCustInfo").show();
				}
				if(o.requireInfo.room_type_else!=null&&o.requireInfo.room_type_else!=''){
					$("#view_room_type").html(o.requireInfo.room_type_else);
				}
				$("#view_edit_designer_code").val(o.requireInfo.require_manager);
				
				//$("#view_edit_sapn_designer_code").html( top.getAllDesignerSelect("view_edit_designer_code",o.requireInfo.require_manager) );
				$("#span_designer_code").html( top.getAllDesignerSelect("designer_code",o.requireInfo.require_manager) );
				$("#edit_span_designer_code").html(top.getUserNameByCode(o.requireInfo.require_manager));
				$("#view_designer_code").html( top.getUserNameByCode(o.requireInfo.require_manager) );
				$("#project_designer").val(o.requireInfo.require_manager);//设置工程订单中设计师的编号
				if(o.requireInfo.require_manager!=''&&o.requireInfo.require_manager!=null){
				  is_send = true;
				}
				else{
				  is_send = false;
				}
				$("#project_addr").val(o.requireInfo.project_addr);
				$("#room_type_else").val(o.requireInfo.other_room_type);  
				//$("#function_require").val(o.requireInfo.function_require);
				$("#send_date").val(top.getTimeStr(o.requireInfo.send_date,true));
				$("#design_key").val(o.requireInfo.design_key);
				$("#planinvest_money").val(o.requireInfo.planinvest_money);
				$("#major_material").val(o.requireInfo.major_material);
				
				$("#view_send_date").html(top.getTimeStr(o.requireInfo.send_date,true));
				$("#view_send_date_inp").val(top.getTimeStr(o.requireInfo.send_date,true));
				//$("#view_function_require").html(o.requireInfo.function_require);
				$("#view_design_key").html(o.requireInfo.design_key);
				$("#view_planinvest_money").html(o.requireInfo.planinvest_money);
				$("#view_major_material").html(o.requireInfo.major_material);
				$("#view_focus").html( o.requireInfo.focus  );
				
				$("#view_path_way").html(o.path_way);
				$("#view_require_style").html(o.requireInfo.require_style);
				if(o.requireInfo.completed_date==0){
					$("#view_handhouse_type").html('现房');
				}else{
					$("#view_handhouse_type").html('期房 交房日期：'+top.getTimeStr(o.requireInfo.completed_date,true));
				}
				initCheckedValue( document.getElementsByName("path_way"), o.path_way  );
				if(o.other_way!=""&&o.other_way!=undefined){
					$("#view_path_way").html(o.path_way+','+o.other_way);
					$("#other_way").val(o.other_way);
				} if(o.requireInfo.other_focus!=""){
					other_focus=false;
					doOtherFocus();//显示文本框
					$("#view_focus").html(o.requireInfo.focus+','+o.requireInfo.other_focus);
					$("#other_focus").val(o.requireInfo.other_focus);	
				} 
				if(o.requireInfo.other_require_style!=""){
					otherRequireStyle=false;
					doOtherRequireStyle();//显示文本框
					$("#other_require_style").val(o.requireInfo.other_require_style);
					$("#view_require_style").html(o.requireInfo.other_require_style+':'+o.requireInfo.other_require_style);
				}
				var functionRequires=o.requireInfo.function_require.split(";");
				if(functionRequires.length==2){
					otherFunctionRequire=false;
					doOtherFunctionRequire();//显示文本框
					initCheckedValue(document.getElementsByName("function_require"), functionRequires[0]);
					$("#other_function_require").val( functionRequires[1]);
					$("#view_function_require").html(functionRequires[0]+':'+functionRequires[1]);
				}else{
					initCheckedValue( document.getElementsByName("function_require"), o.requireInfo.function_require);
					$("#view_function_require").html(functionRequires[0]);
				}
				initCheckedValue( document.getElementsByName("focus"), o.requireInfo.focus  );
				initCheckedValue( document.getElementsByName("require_style"), o.requireInfo.require_style  );
				top.initRadioValue(document.getElementsByName("handhouse_type"), o.requireInfo.completed_date)
				$("#struct_area").val( o.requireInfo.struct_area); 
				$("#cust_city").val( o.requireInfo.cust_city);
				$("#cust_building_name").val( o.requireInfo.cust_building_name);
				$("#usable_area").val( o.requireInfo.usable_area);
				$("#fill_date").val( top.getTimeStr( o.requireInfo.fill_date, true ) );
				$("#completed_date").val( top.getTimeStr( o.requireInfo.completed_date, true ) );
				$("#room_count").val( o.requireInfo.room_count);
				$("#hall_count").val(  o.requireInfo.hall_count);
				$("#bath_count").val( o.requireInfo.bath_count);
				$("#planfitment_date").val( top.getTimeStr( o.requireInfo.planfitment_date, true ) );
				$("#cust_description").val(o.requireInfo.cust_description);
				$("#tdintention_evaluate").html( top.getCodeSelectHtml("INTENTION_EVALUATE","intention_evaluate",true,o.requireInfo.intention_evaluate) );
			
				$("#callback_service_begin_date").val( top.getTimeStr( o.requireInfo.callback_service_begin_date,true ) );
				$("#callback_service_cust_manage_interval").val( o.requireInfo.callback_service_cust_manage_interval);
				$("#callback_service_designer_interval").val(  o.requireInfo.callback_service_designer_interval);
				$("#callback_service_project_dept_interval").val( o.requireInfo.callback_service_project_dept_interval);
				
				$("#view_struct_area").html( o.requireInfo.struct_area);
				$("#view_usable_area").html( o.requireInfo.usable_area);
				$("#view_fill_date").html( top.getTimeStr( o.requireInfo.fill_date, true ) );
				$("#view_completed_date").html( top.getTimeStr( o.requireInfo.completed_date, true ) );
				$("#view_room_count").html( o.requireInfo.room_count);
				$("#view_hall_count").html(  o.requireInfo.hall_count);
				$("#view_bath_count").html( o.requireInfo.bath_count);
				$("#view_planfitment_date").html( top.getTimeStr( o.requireInfo.planfitment_date, true ) );
				$("#view_cust_description").html(o.requireInfo.cust_description);
				$("#view_intention_evaluate").html( top.getCodeName("INTENTION_EVALUATE",o.requireInfo.intention_evaluate) );

				top.initRadioValue( document.getElementsByName("is_measure_house"), o.requireInfo.is_measure_house);
				top.initRadioValue( document.getElementsByName("is_visit_model_house"), o.requireInfo.is_visit_model_house);
				setAddrInfo(o.requireInfo.addr_province,o.requireInfo.cust_city,o.requireInfo.addr_area,o.requireInfo.addr_building,o.requireInfo.addr_unit,o.requireInfo.addr_floor,o.requireInfo.addr_door_num,o.requireInfo.project_addr);
				//$("#span_district").html( top.getCodeSelectHtml("DISTRICT","district",false,o.requireInfo.district) );
				
				$("#txtSearch").val( top.getCodeName("DISTRICT", o.requireInfo.district ));
				$("#district").val( o.requireInfo.district );
				
				//$("#span_cust_status").html( top.getCodeSelectHtml("CUST_STATUS","cust_status",false,o.requireInfo.cust_status) );
				cust_status=o.requireInfo.cust_status;
				toggleMenuBt();
				$("#span_cust_status").html( top.getCodeName("CUST_STATUS",cust_status) );
				$("#top_cust_status").html( top.getCodeName("CUST_STATUS",cust_status) );
				$("#view_is_measure_house").html(o.requireInfo.is_measure_house);
				$("#view_is_visit_model_house").html(o.requireInfo.is_visit_model_house);
				//$("#view_district").html( top.getCodeName("DISTRICT",o.requireInfo.district)+''+o.requireInfo.project_addr);
				$("#view_district").html(o.requireInfo.addr_all);
				//$("#view_cust_building_name").html(o.requireInfo.cust_building_name);
				//$("#view_cust_city").html(top.getCodeName("CITY",o.requireInfo.cust_city));
				$("#view_callback_service_begin_date").html(top.getTimeStr(o.requireInfo.callback_service_begin_date,true));
				$("#view_callback_service_cust_manage_interval").html(o.requireInfo.callback_service_cust_manage_interval);
				$("#view_callback_service_designer_interval").html(o.requireInfo.callback_service_designer_interval); 
				$("#view_callback_service_project_dept_interval").html(o.requireInfo.callback_service_project_dept_interval);
				
				//页面头部客户基础信息
				$("#top_district").html(o.requireInfo.addr_all);
				$("#view_cust_status").html(top.getCodeName("CUST_STATUS",o.requireInfo.cust_status));
				$("#view_measure_project_addr").html(o.requireInfo.project_addr);
				$("#view_measure_room_count").html( o.requireInfo.room_count);
				$("#view_measure_hall_count").html( o.requireInfo.hall_count);
				$("#view_measure_bath_count").html( o.requireInfo.bath_count);
				//页面头部客户基础信息
				$("#top_measure_room_count").html( o.requireInfo.room_count);
				$("#top_measure_hall_count").html( o.requireInfo.hall_count);
				$("#top_measure_bath_count").html( o.requireInfo.bath_count);
				
				$("#view_measure_require_style").html(o.requireInfo.require_style);
				//$("#view_other_require_style").val(o.requireInfo.other_require_style);
				$("#view_measure_struct_area").html( o.requireInfo.struct_area);
				$("#view_measure_usable_area").html( o.requireInfo.usable_area);
				$("#view_measure_planinvest_money").html(o.requireInfo.planinvest_money);
				$("#view_measure_major_material").html(o.requireInfo.major_material);
				$("#view_measure_designer").html(top.getUserNameByCode(o.requireInfo.require_manager));
				$("#view_measure_district").html(top.getCodeName("DISTRICT",o.requireInfo.district));  
				
				require_id=o.requireInfo.id;
				//cust_status=o.requireInfo.cust_status;
				$("#lab_measure_project_addr").html(o.requireInfo.project_addr);
				$("#lab_measure_room_count").html( o.requireInfo.room_count);
				$("#lab_measure_hall_count").html( o.requireInfo.hall_count);
				$("#lab_measure_bath_count").html( o.requireInfo.bath_count);
				$("#lab_measure_bath_count").html( o.requireInfo.bath_count);
				$("#lab_measure_require_style").html(o.requireInfo.require_style);
				$("#other_require_style").html(o.requireInfo.other_require_style);
				$("#lab_measure_struct_area").html( o.requireInfo.struct_area);
				$("#lab_measure_usable_area").html( o.requireInfo.usable_area);
				$("#lab_measure_planinvest_money").html(o.requireInfo.planinvest_money);
				$("#lab_measure_major_material").html(o.requireInfo.major_material);
				$("#lab_measure_designer").html(top.getUserNameByCode(o.requireInfo.require_manager));
				$("#lab_measure_district").html(top.getCodeName("DISTRICT",o.requireInfo.district));  
				$("#measure_project_addr").val(o.requireInfo.project_addr);
				$("#measure_room_count").val( o.requireInfo.room_count);
				$("#measure_hall_count").val( o.requireInfo.hall_count);
				$("#measure_bath_count").val( o.requireInfo.bath_count);
				$("#measure_bath_count").val( o.requireInfo.bath_count);
				$("#measure_require_style").val(o.requireInfo.require_style);
				$("#measure_struct_area").val( o.requireInfo.struct_area);
				$("#measure_usable_area").val( o.requireInfo.usable_area);
				$("#measure_planinvest_money").val(o.requireInfo.planinvest_money);
				$("#measure_major_material").val(o.requireInfo.major_material);
				$("#measure_designer").val(top.getUserNameByCode(o.requireInfo.require_manager));
				$("#measure_district").val(top.getCodeName("DISTRICT",o.requireInfo.district));  
			}
			  
			if ( o.surveyInfo ) {
				$("#sati_designer").val(o.surveyInfo.sati_designer);
				$("#sati_build").val(o.surveyInfo.sati_build);
				$("#sati_service").val( o.surveyInfo.sati_service);
				$("#sati_other").val( o.surveyInfo.sati_other);
				sati_id=o.surveyInfo.id;
			}
		
			if(o.cbmList){
				var ht='';
				var name='';
				var i=0;
				if(o.cbmList.length==0){
					addCustCallback();
					//if(o.salesstrategy.require_id!=0){
						//AddMoreCallBack();
						//addCallBackHtml();//生成每次回访的页面html框架
						//ht='<tr class="tr_data"><td id="td_callback_'+callbackNum+'" class="versionStyle" align="center"><a onclick="changBaseBtclick(\''+callbackNum+'\',\'callback\')"><span>'+callBackNumber[i]+'次沟通</span></a></td></tr>';
						//$('#custManageWorkTab').before(ht);//添加第几次回访标题标签
						//AddMoreCallBack();
						//addCallBackHtml();//生成每次回访的页面html框架
						//AddMoreCallBack();
					    //$("#come_time"+(callbackNum-1)).val(top.getCurrentDate());
					//}
				}else{
					for(var j=0;j<o.cbmList.length;j++){
						//if(j!=o.cbmList.length){j=j;
							name = fixFilename(o.cbmList[j].file_path);
						//}
						addCallBackHtml();//生成每次回访的页面html框架
						ht='<tr class="tr_data"><td style="cursor:pointer" id="td_callback_'+callbackNum+'" class="versionStyle" align="center"><a onclick="changBaseBtclick(\''+callbackNum+'\')"><span>'+callBackNumber[j]+'次沟通</span></a></td></tr>';
						$('#custManageWorkTab').before(ht);//添加第几次回访标题标签
						ht='';
						ht+='<table border="1" cellpadding="3" cellspacing="1" width="100%" align="center" style="background-color: #b9d8f3;" id="callback'+callbackNum+'">';
						
						ht+='<tr class="tr_data" height="35px">';
						ht+='<td width="25%" class="table_property_title">本次来店时间';
						if(j!=o.cbmList.length){
							ht+='<input type="hidden" id="next_id'+callbackNum+'" value="'+o.cbmList[j].next_id+'"/>';
						}else{
							ht+='<input type="hidden" id="next_id'+callbackNum+'"/></td>';
						}
						ht+='<td width="25%" align="left"><input type="text" id="come_time'+callbackNum+'" onclick="new Calendar().show(this);" readonly="true" value="'+top.getTimeStr(o.cbmList[j].come_time,true)+'"/></td>';
						ht+='<td width="25%" class="table_property_title">预约下次来店时间</td>';
						ht+='<td width="25%" align="left"><input type="text" id="next_time'+callbackNum+'" onclick="new Calendar().show(this);" readonly="true" value="'+top.getTimeStr(o.cbmList[j].next_time,true)+'"/></td>';
							
						ht+='</tr>';
						ht+='<tr class="tr_data" height="35px">';
						ht+='<td class="table_property_title">客户满意度<span style="color:red;">(*)</span></td>';
						ht+='<td align="left" colspan="3"><span id="tdcust_sati'+callbackNum+'" style="padding:0px 15px 0px 0px"></span><span style="display:none" id="tdunsati_reason'+callbackNum+'"></span></td>';
						ht+='</tr>';
						
						ht+='<tr class="tr_data" height="35px">';
							ht+='<td class="table_property_title">电话回访时间</td>';
							ht+='<td align="left"><input type="text" id="callback_time'+callbackNum+'" onclick="new Calendar().show(this);" readonly="true" value="'+top.getTimeStr(o.cbmList[j].callback_time,true)+'"/></td>';
							ht+='<td class="table_property_title">结果达成</td>';
							ht+='<td align="left" id="tdresult_status'+callbackNum+'"></td>';
						ht+='</tr>';
						ht+='<tr class="tr_data" height="35px">';
							ht+='<td class="table_property_title">预约量房时间</td>';
							ht+='<td align="left" ><input type="text" id="measure_date'+callbackNum+'" onclick="new Calendar().show(this);" readonly="true" value="'+top.getTimeStr(o.cbmList[j].measure_date,true)+'"/></td>';
							measureHouseDate=o.cbmList[j].measure_date;
							ht+='<td class="table_property_title">客户意向</td>';
							ht+='<td align="left" id="tdcust_intention'+callbackNum+'"></td>';
						ht+='</tr>';
						ht+='<tr class="tr_data" height="35px">';
							ht+='<td class="table_property_title">客户意见或建议</td>';
							ht+='<td align="left" colspan="3"><textarea style="width:99%" id="cust_suggest'+callbackNum+'" rows="3">'+o.cbmList[j].cust_suggest+'</textarea></td>';
						ht+='</tr>';
						ht+='<tr class="tr_data" height="35px">';
							ht+='<td class="table_property_title">销售策略</td>';
							ht+='<td align="left" colspan="3"><textarea style="width:99%" id="sales_measure'+callbackNum+'" rows="3">'+o.cbmList[j].sales_measure+'</textarea></td>';
						ht+='</tr>';
						ht+='<tr class="tr_data" height="35px">';
							ht+='<td class="table_propertyp_title">其他销售策略上传附件</td>';
							ht+='<td align="left"><div class="buttonDivTwo"><a href="javascript:uploadSalesMeasureFile(\''+callbackNum+'\')">上传</a></div></td>';
							ht+='<td align="left" colspan="2"><div id="lab_file_path'+callbackNum+'"></div><input type="hidden" id="file_path'+callbackNum+'" value="'+o.cbmList[j].file_path+'" size="20"/></td>';
						ht+='</tr>';
						ht+='<tr class="tr_data" height="45px">';
							ht+='<td class="table_property_title">短信内容</td>';
							ht+='<td align="left" colspan="2"><textarea style="width:99%"id="msg_content'+callbackNum+'" rows="3">'+o.cbmList[j].msg_content+'</textarea></td>';
							ht+='<td align="center"><a href="javascript:selectMessage(\'msg_content'+callbackNum+'\')">选择模板</a>&nbsp;<a href="javascript:sendMessage(2,true)">发送</a></td>';
						ht+='</tr>';
						ht+='<tr class="tr_data" height="35px">';
						
						ht+='<td colspan="4" align="left"  style="font-weight:bold;">电话回访结果</td>';
						ht+='</tr>';
						ht+='<tr class="tr_data">';
						ht+='<td colspan="4" style="padding:0px;border-collapse:collapse;">';
						ht+='<table border="0" cellpadding="3" cellspacing="1" width="100%" align="center" style="background-color: #b9d8f3;">';
						ht+='<tr class="tr_data">';
						ht+='<td class="table_property_title" style="width:110px;">客户经理</td>';
						ht+='<td align="left"><textarea id="cusm_callback_info'+callbackNum+'" rows="2" style="width:100%">'+o.cbmList[j].cusm_callback_info+'</textarea></td>';
						ht+='</tr>';
						ht+='<tr class="tr_data">';
						ht+='<td class="table_property_title" style="width:110px;">设计师</td>';
						ht+='<td align="left"><textarea id="des_callback_info'+callbackNum+'" rows="2" style="width:100%">'+o.cbmList[j].des_callback_info+'</textarea></td>';
						ht+='</tr>';
						ht+='</table>';
						ht+='</td>';
						ht+='</tr>';
						ht+='</table>';
						ht+='<br/>';
						ht+='<B>&nbsp;定制销售策略</B>';
						ht+='<br/>';
						ht+='<table border="1" cellpadding="3" cellspacing="1" width="100%" align="center" style="background-color: #b9d8f3;">';
						ht+='<tr class="tr_data" height="35px">';
						ht+='<td align="left"><textarea id="custom_tactics'+callbackNum+'" rows="5" style="width:99%">'+o.cbmList[j].custom_tactics+'</textarea></td>';
						ht+='</tr>';
						ht+='</table>';
						
						//ht+='</table>';
						$("#callBackInfo"+callbackNum).append( ht );
						//view
						ht='';
						ht+='<table border="1" cellpadding="3" cellspacing="1" width="100%" align="center" style="background-color: #b9d8f3;" id="callback'+callbackNum+'">';
						
						ht+='<tr class="tr_data" height="35px">';
						ht+='<td width="25%" class="table_property_title">本次来店时间';
						ht+='<td width="25%" align="left" id="view_come_time'+callbackNum+'">'+top.getTimeStr(o.cbmList[j].come_time,true)+'</td>';
						ht+='<td width="25%" class="table_property_title" >预约下次来店时间</td>';
						ht+='<td width="25%" align="left" id="view_next_time'+callbackNum+'" >'+top.getTimeStr(o.cbmList[j].next_time,true)+'</td>';
							
						ht+='</tr>';
						ht+='<tr class="tr_data" height="35px">';
						ht+='<td class="table_property_title">客户满意度</td>';
						if(o.cbmList[j].unsati_reason!=''){
							ht+='<td align="left" colspan="3"><span id="view_cust_sati'+callbackNum+'" style="padding:0px 15px 0px 0px">'+top.getCodeName("CUST_UNSATI_REASON",o.cbmList[j].unsati_reason)+'</span></td>';
						}else{
							ht+='<td align="left" colspan="3"><span id="view_cust_sati'+callbackNum+'" style="padding:0px 15px 0px 0px">'+top.getCodeName("APPRAISE_DESIGNER",o.cbmList[j].cust_sati)+'</span></td>';
						}ht+='</tr>';
						
						ht+='<tr class="tr_data" height="35px">';
							ht+='<td class="table_property_title" >电话回访时间</td>';
							ht+='<td align="left" id="view_callback_time'+callbackNum+'"> '+top.getTimeStr(o.cbmList[j].callback_time,true)+'</td>';
							ht+='<td class="table_property_title" >结果达成</td>';
							ht+='<td align="left" id="view_result_status'+callbackNum+'">'+top.getCodeName("RESULT_STATUS",o.cbmList[j].result_status)+'</td>';
						ht+='</tr>';
						ht+='<tr class="tr_data" height="35px">';
							ht+='<td class="table_property_title">预约量房时间</td>';
							ht+='<td align="left" id="view_measure_date'+callbackNum+'" >'+top.getTimeStr(o.cbmList[j].measure_date,true)+'</td>';
							ht+='<td class="table_property_title">客户意向</td>';
							ht+='<td align="left" id="view_cust_intention'+callbackNum+'">'+top.getCodeName("INTENTION_EVALUATE",o.cbmList[j].cust_intention)+'</td>';
						ht+='</tr>';
						ht+='<tr class="tr_data" height="35px">';
							ht+='<td class="table_property_title" >客户意见或建议</td>';
							ht+='<td align="left" colspan="3" id="view_cust_suggest'+callbackNum+'" >'+o.cbmList[j].cust_suggest+'</td>';
						ht+='</tr>';
						ht+='<tr class="tr_data" height="35px">';
							ht+='<td class="table_property_title" >销售策略</td>';
							ht+='<td align="left" colspan="3" id="view_sales_measure'+callbackNum+'" >'+o.cbmList[j].sales_measure+'</td>';
						ht+='</tr>';
						ht+='<tr class="tr_data" height="35px">';
							ht+='<td class="table_property_title">其他销售策略附件</td>';
							ht+='<td align="left" colspan="3"><div id="view_file_path'+callbackNum+'"></div></td>';
						ht+='</tr>';
						ht+='<tr class="tr_data" height="45px">';
							ht+='<td class="table_property_title">短信内容</td>';
							ht+='<td align="left" colspan="3" id="view_msg_content'+callbackNum+'" >'+o.cbmList[j].msg_content+'</td>';
						ht+='</tr>';
							ht+='<tr class="tr_data" height="35px">';
						
						ht+='<td colspan="4" align="left"  style="font-weight:bold;">电话回访结果</td>';
						ht+='</tr>';
						ht+='<tr class="tr_data">';
						ht+='<td colspan="4" style="padding:0px;border-collapse:collapse;">';
						ht+='<table border="0" cellpadding="3" cellspacing="1" width="100%" align="center" style="background-color: #b9d8f3;">';
						ht+='<tr class="tr_data">';
						ht+='<td class="table_property_title" style="width:165px;">客户经理</td>';
						ht+='<td align="left" id="view_cusm_callback_info'+callbackNum+'" >'+o.cbmList[j].cusm_callback_info+'</td>';
						ht+='</tr>';
						ht+='<tr class="tr_data">';
						ht+='<td class="table_property_title" style="width:165px;">设计师</td>';
						ht+='<td align="left" id="view_des_callback_info'+callbackNum+'">'+o.cbmList[j].des_callback_info+'</td>';
						ht+='</tr>';
						ht+='</table>';
						ht+='</td>';
						ht+='</tr>';
						ht+='</table>';
						ht+='<br/>';
						ht+='<B>&nbsp;定制销售策略</B>';
						ht+='<br/>';
						ht+='<table border="1" cellpadding="3" cellspacing="1" width="100%" align="center" style="background-color: #b9d8f3;">';
						ht+='<tr class="tr_data" height="35px">';
						ht+='<td align="left" id="view_custom_tactics'+callbackNum+'">'+o.cbmList[j].custom_tactics+'</td>';
						ht+='</tr>';
						ht+='</table>';
						//ht+='</table>';
						$("#view_callBackInfo"+callbackNum).append( ht );
						if(j!=(callbackNum-3)){
							$("#lab_file_path"+callbackNum).html('&nbsp;&nbsp;<a style="cursor:pointer;color:blue;" href="'+top.getUrlBase()+'/download?filePath='+o.cbmList[j].file_path+'+"&fileName="'+name+'">'+name+'</a>');
							$("#view_file_path"+callbackNum).html('&nbsp;&nbsp;<a style="cursor:pointer;color:blue;" href="'+top.getUrlBase()+'/download?filePath='+o.cbmList[j].file_path+'+"&fileName="'+name+'">'+name+'</a>');
						}
						$("#tdresult_status"+callbackNum).html( top.getCodeSelectHtml("RESULT_STATUS","result_status"+callbackNum,false,o.cbmList[j].result_status) );
						$("#tdcust_intention"+callbackNum).html( top.getCodeSelectHtml("INTENTION_EVALUATE","cust_intention"+callbackNum,true,o.cbmList[j].cust_intention) );
						$("#tdcust_sati"+callbackNum).html( top.getCodeSelectHtml("APPRAISE_DESIGNER","cust_sati"+callbackNum,true,o.cbmList[j].cust_sati,"cust_satiChange("+callbackNum+")"));
						$("#tdunsati_reason"+callbackNum).html( top.getCodeSelectHtml("CUST_UNSATI_REASON","unsati_reason"+callbackNum,true,o.cbmList[j].unsati_reason) );
						cust_satiChange(callbackNum);
						callbackNum++;
					}
				}//初始显示
				changBaseBtclick(1);
			}
			if ( o.custanalyze ) {
			    $("#analysis_id").val(o.custanalyze.analysis_id);
				$("#cy1").val(o.custanalyze.cy1);
				$("#cy2").val(o.custanalyze.cy2);
				$("#cy3").val(o.custanalyze.cy3);
				$("#cy4").val(o.custanalyze.cy4);
				$("#cy5").val(o.custanalyze.cy5);
				$("#cy6").val(o.custanalyze.cy6);
				$("#cy7").val(o.custanalyze.cy7);
				$("#cy8").val(o.custanalyze.cy8);
				$("#cy9").val(o.custanalyze.cy9);
				$("#cy10").val(o.custanalyze.cy10);
				$("#cy11").val(o.custanalyze.cy11);
				$("#cy12").val(o.custanalyze.cy12);
				$("#cy13").val(o.custanalyze.cy13);
				$("#cy14").val(o.custanalyze.cy14);
				$("#cy15").val(o.custanalyze.cy15);
				$("#cy16").val(o.custanalyze.cy16);
				$("#cy17").val(o.custanalyze.cy17);
				$("#special1").val(o.custanalyze.special1);
				$("#special2").val(o.custanalyze.special2);
				$("#special3").val(o.custanalyze.special3);
				$("#special4").val(o.custanalyze.special4);
				$("#special5").val(o.custanalyze.special5);
				$("#other").val(o.custanalyze.other);
				$("#des_next_measure").val(o.custanalyze.des_next_measure);
				$("#cusm_next_measure").val(o.custanalyze.cusm_next_measure);
				$("#other_measure").val(o.custanalyze.other_measure);
				$("#other_cust_lost_reason").val(o.custanalyze.other_cust_lost_reason);
				$("#span_general1").html(top.getCodeSelectHtml("IMPRESSION","general1",o.custanalyze.general1,true));
				$("#span_general2").html(top.getCodeSelectHtml("APPRAISE_DESIGNER","general2",o.custanalyze.general2,true));
				$("#span_cy1").html(o.custanalyze.cy1);
				$("#span_cy2").html(o.custanalyze.cy2);
				$("#span_cy3").html(o.custanalyze.cy3);
				$("#span_cy4").html(o.custanalyze.cy4);
				$("#span_cy5").html(o.custanalyze.cy5);
				$("#span_cy6").html(o.custanalyze.cy6);
				$("#span_cy7").html(o.custanalyze.cy7);
				$("#span_cy8").html(o.custanalyze.cy8);
				$("#span_cy9").html(o.custanalyze.cy9);
				$("#span_cy10").html(o.custanalyze.cy10);
				$("#span_cy11").html(o.custanalyze.cy11);
				$("#span_cy12").html(o.custanalyze.cy12);
				$("#span_cy13").html(o.custanalyze.cy13);
				$("#span_cy14").html(o.custanalyze.cy14);
				$("#span_cy15").html(o.custanalyze.cy15);
				$("#span_cy16").html(o.custanalyze.cy16);
				$("#span_cy17").html(o.custanalyze.cy17);
				$("#span_special1").html(o.custanalyze.special1);
				$("#span_special2").html(o.custanalyze.special2);
				$("#span_special3").html(o.custanalyze.special3);
				$("#span_special4").html(o.custanalyze.special4);
				$("#span_special5").html(o.custanalyze.special5);
				$("#span_other").html(o.custanalyze.other);
				$("#span_des_next_measure").html(o.custanalyze.des_next_measure);
				$("#span_cusm_next_measure").html(o.custanalyze.cusm_next_measure);
				$("#span_other_measure").html(o.custanalyze.other_measure);
				$("#tdgeneral1").html(top.getCodeName("IMPRESSION",o.custanalyze.general1,true));
				$("#tdgeneral2").html(top.getCodeName("APPRAISE_DESIGNER",o.custanalyze.general2,true));
				$("#span_other_cust_lost_reason").html("   "+o.custanalyze.other_cust_lost_reason);
				
				var  general3=""+o.custanalyze.general3;
				var  general4=""+o.custanalyze.general4;
			    var  cust_lost_reason=""+o.custanalyze.cust_lost_reason;
				var  is_consume_ability=""+o.custanalyze.is_consume_ability;
				var  cust_focus=""+o.custanalyze.cust_focus;
				var  cust_choose_reason=""+o.custanalyze.cust_choose_reason;
				$("input[name='general3']").each(function(){
				    if(general3.indexOf($(this).val())!=-1){
					   $(this).attr("checked","checked");
					}
				});
				$("#design_general").html(general3);
				$("input[name='general4']").each(function(){
				    if(general4.indexOf($(this).val())!=-1){
					   $(this).attr("checked","checked");
					}
				});
				$("#material_general").html(general4);
				$("input[name='cust_lost_reason']").each(function(){
				    if(cust_lost_reason.indexOf($(this).val())!=-1){
					   $(this).attr("checked","checked");
					}
				});
				$("#cust_lose_reason").html(cust_lost_reason);
				$("input[name='is_consume_ability']").each(function(){
				    if(is_consume_ability.indexOf($(this).val())!=-1){
					   $(this).attr("checked","checked");
					}
				});
				$("input[name='cust_focus']").each(function(){
				    if(cust_focus.indexOf($(this).val())!=-1){
					   $(this).attr("checked","checked");
					}
				});
				$("#span_cust_focus").html(cust_focus);
				$("input[name='choose_reason']").each(function(){
				    if(cust_choose_reason.indexOf($(this).val())!=-1){
					   $(this).attr("checked","checked");
					}
				});
				$("#cust_choose_property").html(cust_choose_reason);
				// //createCustAnalysisHtml();
				// var index=1;
				// var i=0;
				// if(o.custanalyze.length!=0){
					// for(var j=0;j<=o.custanalyze.length;j++){
						// if(j!=o.custanalyze.length){i=j;
							// //$("#view_custAnalysis"+index).show();
							// //$("#custAnalysis"+index).hide();
						// }//循环多一次，最后一次客情分析数据同上一次
						// initCheckedValue( document.getElementsByName("general3"+index), o.custanalyze[i].general3  );
						// initCheckedValue( document.getElementsByName("general4"+index), o.custanalyze[i].general4  );
						// initCheckedValue( document.getElementsByName("cust_focus"+index), o.custanalyze[i].cust_focus  );
						// initCheckedValue( document.getElementsByName("is_consume_ability"+index), o.custanalyze[i].is_consume_ability  );
						// initCheckedValue( document.getElementsByName("cust_lost_reason"+index), o.custanalyze[i].cust_lost_reason  );
						// if(o.custanalyze[i].other_cust_lost_reason!=""){
							// other_cust_lost_reason=false;
							// doOtherCustLostReason();
							// $("#other_cust_lost_reason"+index).val(o.custanalyze[i].other_cust_lost_reason);
						// }
						// initCheckedValue( document.getElementsByName("choose_reason"+index), o.custanalyze[i].cust_choose_reason  );
						// $("#span_general1"+index).html(top.getCodeSelectHtml("IMPRESSION","general1"+index,true,o.custanalyze[i].general1) );
						// $("#span_general2"+index).html( top.getCodeSelectHtml("APPRAISE_DESIGNER","general2"+index,true,o.custanalyze[i].general2) );
						
						// if(j!=o.custanalyze.length){
							// $("#analysis_id"+index).val(o.custanalyze[i].analysis_id);
						// }
						// $("#des_next_measure"+index).val(o.custanalyze[i].des_next_measure);
						// $("#cusm_next_measure"+index).val(o.custanalyze[i].cusm_next_measure);
						// $("#other_measure"+index).val(o.custanalyze[i].other_measure);
						// $("#design_director"+index).val(o.custanalyze[i].design_director);
						// $("#service_center"+index).val(o.custanalyze[i].service_center);
						// $("#other"+index).val(o.custanalyze[i].other);
						// $("#cy1"+index).val(o.custanalyze[i].cy1);
						// $("#cy2"+index).val(o.custanalyze[i].cy2);
						// $("#cy3"+index).val(o.custanalyze[i].cy3);
						// $("#cy4"+index).val(o.custanalyze[i].cy4);
						// $("#cy5"+index).val(o.custanalyze[i].cy5);
						// $("#cy6"+index).val(o.custanalyze[i].cy6);
						// $("#cy7"+index).val(o.custanalyze[i].cy7);
						// $("#cy8"+index).val(o.custanalyze[i].cy8);
						// $("#cy9"+index).val(o.custanalyze[i].cy9);
						// $("#cy10"+index).val(o.custanalyze[i].cy10);
						// $("#cy11"+index).val(o.custanalyze[i].cy11);
						// $("#cy12"+index).val(o.custanalyze[i].cy12);
						// $("#cy13"+index).val(o.custanalyze[i].cy13);
						// $("#cy14"+index).val(o.custanalyze[i].cy14);
						// $("#cy15"+index).val(o.custanalyze[i].cy15);
						// $("#cy16"+index).val(o.custanalyze[i].cy16);
						// $("#cy17"+index).val(o.custanalyze[i].cy17);
						// $("#special1"+index).val(o.custanalyze[i].special1);
						// $("#special2"+index).val(o.custanalyze[i].special2);
						// $("#special3"+index).val(o.custanalyze[i].special3);
						// $("#special4"+index).val(o.custanalyze[i].special4);
						// $("#special5"+index).val(o.custanalyze[i].special5);
						// //初始view界面值
						// $("#view_general3"+index).html( o.custanalyze[i].general3  );
						// $("#view_general4"+index).html( o.custanalyze[i].general4  );
						// $("#view_cust_focus"+index).html( o.custanalyze[i].cust_focus  );
						// $("#view_is_consume_ability"+index).html(o.custanalyze[i].is_consume_ability  );
						// $("#view_cust_lost_reason"+index).html( o.custanalyze[i].cust_lost_reason  );
						// if(o.custanalyze[i].other_cust_lost_reason!=""){
							// other_cust_lost_reason=false;
							// doOtherCustLostReason();
							// $("#cust_lost_reason"+index).html(o.custanalyze[i].cust_lost_reason+' '+o.custanalyze[i].other_cust_lost_reason);
						// }
						// $("#view_choose_reason"+index).html(o.custanalyze[i].cust_choose_reason  );
						// $("#view_general1"+index).html(top.getCodeName("IMPRESSION",o.custanalyze[i].general1) );
						// $("#view_general2"+index).html( top.getCodeName("APPRAISE_DESIGNER",o.custanalyze[i].general2) );
						
						// $("#view_des_next_measure"+index).html(o.custanalyze[i].des_next_measure);
						// $("#view_cusm_next_measure"+index).html(o.custanalyze[i].cusm_next_measure);
						// $("#view_other_measure"+index).html(o.custanalyze[i].other_measure);
						// $("#view_design_director"+index).html(o.custanalyze[i].design_director);
						// $("#view_service_center"+index).html(o.custanalyze[i].service_center);
						// $("#view_other"+index).html(o.custanalyze[i].other);
						// $("#view_cy1"+index).html(o.custanalyze[i].cy1);
						// $("#view_cy2"+index).html(o.custanalyze[i].cy2);
						// $("#view_cy3"+index).html(o.custanalyze[i].cy3);
						// $("#view_cy4"+index).html(o.custanalyze[i].cy4);
						// $("#view_cy5"+index).html(o.custanalyze[i].cy5);
						// $("#view_cy6"+index).html(o.custanalyze[i].cy6);
						// $("#view_cy7"+index).html(o.custanalyze[i].cy7);
						// $("#view_cy8"+index).html(o.custanalyze[i].cy8);
						// $("#view_cy9"+index).html(o.custanalyze[i].cy9);
						// $("#view_cy10"+index).html(o.custanalyze[i].cy10);
						// $("#view_cy11"+index).html(o.custanalyze[i].cy11);
						// $("#view_cy12"+index).html(o.custanalyze[i].cy12);
						// $("#view_cy13"+index).html(o.custanalyze[i].cy13);
						// $("#view_cy14"+index).html(o.custanalyze[i].cy14);
						// $("#view_cy15"+index).html(o.custanalyze[i].cy15);
						// $("#view_cy16"+index).html(o.custanalyze[i].cy16);
						// $("#view_cy17"+index).html(o.custanalyze[i].cy17);
						// $("#view_special1"+index).html(o.custanalyze[i].special1);
						// $("#view_special2"+index).html(o.custanalyze[i].special2);
						// $("#view_special3"+index).html(o.custanalyze[i].special3);
						// $("#view_special4"+index).html(o.custanalyze[i].special4);
						// $("#view_special5"+index).html(o.custanalyze[i].special5);
						// index++;
					// }
					// $("#view_custAnalysis"+(callbackNum-1)).hide();
					// $("#custAnalysis"+(callbackNum-1)).show();
				// }else{
					// $("#custAnalysis1").show();
					// $("#view_custAnalysis1").hide();
				// }
			}
			if(o.disableCustRecord){
				$("#disable_reason").html(o.disableCustRecord.disable_reason);
				$("#disable_type").html(top.getCodeName("DISABLE_TYPE",o.disableCustRecord.disable_type));
				$("#disCust_opt_person").html(top.getUserNameByCode(o.disableCustRecord.opt_person));
				$("#disCust_opt_person_hd").val(o.disableCustRecord.opt_person);
				$("#disCust_examine_status").html(top.getCodeName("EXAMINE_STATUS",o.disableCustRecord.examine_status));
				$("#disCust_examine_status_hd").val(o.disableCustRecord.examine_status);
				$("#disCust_id").val(o.disableCustRecord.id);
				$("#disCust_remind_id").val(o.disableCustRecord.remind_id);
				$("#disCust_opt_time").html(top.getTimeStr(o.disableCustRecord.opt_time,true));
				
				$("#view_disable_reason").html(o.disableCustRecord.disable_reason);
				$("#view_disable_type").html(top.getCodeName("DISABLE_TYPE",o.disableCustRecord.disable_type));
				$("#view_disCust_opt_person").html(top.getUserNameByCode(o.disableCustRecord.opt_person));
				$("#view_disCust_opt_person_hd").html(o.disableCustRecord.opt_person);
				$("#view_disCust_examine_status").html(top.getCodeName("EXAMINE_STATUS",o.disableCustRecord.examine_status));
				$("#view_disCust_opt_time").html(top.getTimeStr(o.disableCustRecord.opt_time,true));
				//废单申请未审核且拥有审核权限 显示审核按钮
				//未审核
				if(o.disableCustRecord.examine_status=='0'){
					if(top.g_isPermit("09_examine_cust_disable")){
						$("#tr_custdisable_examine_info").hide();
						$("#tr_custdisable_examine_bt").show(); 
						$("#tr_custdisable_examine_suggest").show();
						
						//$("#view_tr_custdisable_examine_suggest").show();
						$("#view_tr_custdisable_examine_info").hide();
						//$("#view_tr_custdisable_examine_bt").show(); 
					}else{
					
					}
				}else{
					$("#disCust_examine_person").html(top.getUserNameByCode(o.disableCustRecord.examine_person));
					$("#disCust_examine_time").html(top.getTimeStr(o.disableCustRecord.examine_time,true));
					$("#td_disCust_examine_suggest").html(o.disableCustRecord.examine_suggest);
					$("#tr_custdisable_examine_suggest").show();
					$("#tr_custdisable_examine_info").show();
					$("#tr_custdisable_examine_bt").hide(); 
					$("#view_tr_custdisable_examine_bt").hide(); 
					
					$("#view_disCust_examine_person").html(top.getUserNameByCode(o.disableCustRecord.examine_person));
					$("#view_disCust_examine_time").html(top.getTimeStr(o.disableCustRecord.examine_time,true));
					$("#view_td_disCust_examine_suggest").html(o.disableCustRecord.examine_suggest);
					$("#view_tr_custdisable_examine_suggest").show();
					$("#view_tr_custdisable_examine_info").show();
				}
			}
			  require_id = o.requireInfo.id;
			  if(optType=='interpose_update'){//如果页面来自人工干预 分派设计师操作，若派单时间为空 则默认显示当前时间
			    if($("#view_send_date_inp").val()==''){
					$("#view_send_date_inp").val(top.getTimeStr(today.getTime(),true));
					$("#view_send_date").html(top.getTimeStr(today.getTime(),true));
				}
			}
		}else{
          top.showInfoWinError("操作失败");
        }
       }catch(e){
          top.showInfoWinError("处理异常:"+e.message);
       } 

	   //callBackTabs= $( "#cust_base_tabs ul" ).tabs();
	   showProjectContractInfo();//加载工程合同信息
	   doInitPage();//初始显示页面	
	   getCustCallbackList();//查询客户回访信息
	   if(optType=="interpose_update"){
	      $("#baseEditBt").hide();
	   }
      
	}
	function addCallBackHtml(){
	//左侧'客情分析'与'回访信息'菜单
		var ht='<div id="cust_base_tabs-'+callbackNum+'" style="display:none"  width="95%">';
		ht+='<div style="display:none" id="callBackInfo'+callbackNum+'"></div>'
		ht+='<div id="view_callBackInfo'+callbackNum+'"></div>'
		ht+='</div>';
		$("#base_tabs").append(ht);
	}

	
//--------------------------客情分析--------------------------
	function changeHandhouseType(){
	   var v=top.getRadioValue( document.getElementsByName("handhouse_type") );
	   if ( v == '' ) {
		return ;
	   } else {
			if(v==0)
			{
				$("#edit_span_completed_date").hide();
				$("#completed_date").val("");
			}else
			{
				 $("#edit_span_completed_date").show();
			}
	   }
	}
	//客情分析检验
	function checkCustAnalyze(){
	    var msg="";
		msg+=checkString($("#des_next_measure1").val(),false,512,"设计师下一步服务措施");
		msg+=checkString($("#cusm_next_measure1").val(),false,512,"客户经理下一步服务措施");
		msg+=checkString($("#other_measure1").val(),false,512,"其他措施");
		msg+=checkString($("#cy1").val(),false,256,"年龄与性格分析");
		msg+=checkString($("#cy2").val(),false,256,"职业分析");
		msg+=checkString($("#cy3").val(),false,256,"咨询人(之间)关系");
		msg+=checkString($("#cy4").val(),false,256,"现居住地址");
		msg+=checkString($("#cy5").val(),false,256,"着装");
		msg+=checkString($("#cy6").val(),false,256,"代步工具");
		msg+=checkString($("#cy7").val(),false,256,"装修房屋的用途");
		msg+=checkString($("#cy8").val(),false,256,"个性需求");
		msg+=checkString($("#cy9").val(),false,256,"第几次置业");
		msg+=checkString($("#cy10").val(),false,256,"第几次装修");
		msg+=checkString($("#cy11").val(),false,256,"其他品牌的了解");
		msg+=checkString($("#cy12").val(),false,256,"客户的期望值与体验后的落差");
		msg+=checkString($("#cy13").val(),false,256,"客户对设计师的评价");
		msg+=checkString($("#cy14").val(),false,256,"决策人");
		msg+=checkString($("#cy15").val(),false,256,"客户是否愿意一站式产品服务");
		msg+=checkString($("#cy16").val(),false,256,"客户是否愿意选择同一品牌的产品");
		msg+=checkString($("#cy17").val(),false,256,"客户愿意定制化装修还是套餐模式");
		msg+=checkString($("#special1").val(),false,512,"合同方面特殊要求");
		msg+=checkString($("#special2").val(),false,512,"设计方面特殊要求");
		msg+=checkString($("#special3").val(),false,512,"材料方面特殊要求");
		msg+=checkString($("#special4").val(),false,512,"工艺方面特殊要求");
		msg+=checkString($("#special5").val(),false,512,"服务方面特殊要求");
		msg+=checkString($("#other1").val(),false,512,"其他方面特殊要求");
		return msg;
	}
	
	//保存客情分析
	function addCustAnalyze(){
	    //检验
		var checkMsg=checkCustAnalyze();
		
		if ( checkMsg != '' ) {
			   top.showInfoWinWarn(checkMsg);
			   return ;
		}
		var aoData=[];
		aoData.push( { "name": "custanalyze.require_id", "value": require_id } );
		aoData.push( { "name": "custanalyze.analysis_id", "value": $("#analysis_id").val() } );
		
		aoData.push( { "name": "custanalyze.general3", "value": top.getAllCheckedValue( document.getElementsByName("general3") ) } );
		aoData.push( { "name": "custanalyze.general4", "value": top.getAllCheckedValue( document.getElementsByName("general4") ) } );
		aoData.push( { "name": "custanalyze.cust_focus", "value": top.getAllCheckedValue( document.getElementsByName("cust_focus") ) } );
		aoData.push( { "name": "custanalyze.is_consume_ability", "value": top.getAllCheckedValue( document.getElementsByName("is_consume_ability") ) } );
		aoData.push( { "name": "custanalyze.cust_lost_reason", "value": top.getAllCheckedValue( document.getElementsByName("cust_lost_reason") ) } );
		aoData.push( { "name": "custanalyze.other_cust_lost_reason", "value": $("#other_cust_lost_reason").val() } );
		aoData.push( { "name": "custanalyze.cust_choose_reason", "value": top.getAllCheckedValue( document.getElementsByName("choose_reason") ) } );
		
		aoData.push( { "name": "custanalyze.general1", "value": $("#general1").val() });
		aoData.push( { "name": "custanalyze.general2", "value": $("#general2").val() });
		
		aoData.push( { "name": "custanalyze.cy1", "value": $("#cy1").val() } );
		aoData.push( { "name": "custanalyze.cy2", "value": $("#cy2").val() } );
		aoData.push( { "name": "custanalyze.cy3", "value": $("#cy3").val() } );
		aoData.push( { "name": "custanalyze.cy4", "value": $("#cy4").val() } );
		aoData.push( { "name": "custanalyze.cy5", "value": $("#cy5").val() } );
		aoData.push( { "name": "custanalyze.cy6", "value": $("#cy6").val() } );
		aoData.push( { "name": "custanalyze.cy7", "value": $("#cy7").val() } );
		aoData.push( { "name": "custanalyze.cy8", "value": $("#cy8").val() } );
		aoData.push( { "name": "custanalyze.cy9", "value": $("#cy9").val() } );
		aoData.push( { "name": "custanalyze.cy10", "value": $("#cy10").val() } );
		aoData.push( { "name": "custanalyze.cy11", "value": $("#cy11").val() } );
		aoData.push( { "name": "custanalyze.cy12", "value": $("#cy12").val() } );
		aoData.push( { "name": "custanalyze.cy13", "value": $("#cy13").val() } );
		aoData.push( { "name": "custanalyze.cy14", "value": $("#cy14").val() } );
		aoData.push( { "name": "custanalyze.cy15", "value": $("#cy15").val() } );
		aoData.push( { "name": "custanalyze.cy16", "value": $("#cy16").val() } );
		aoData.push( { "name": "custanalyze.cy17", "value": $("#cy17").val() } );
		
		aoData.push( { "name": "custanalyze.special1", "value": $("#special1").val() } );
		aoData.push( { "name": "custanalyze.special2", "value": $("#special2").val() } );
		aoData.push( { "name": "custanalyze.special3", "value": $("#special3").val() } );
		aoData.push( { "name": "custanalyze.special4", "value": $("#special4").val() } );
		aoData.push( { "name": "custanalyze.special5", "value": $("#special5").val() } );
		
		aoData.push( { "name": "custanalyze.des_next_measure", "value": $("#des_next_measure").val() } );
		aoData.push( { "name": "custanalyze.cusm_next_measure", "value": $("#cusm_next_measure").val() } );
		aoData.push( { "name": "custanalyze.other_measure", "value": $("#other_measure").val() } );
		aoData.push( { "name": "custanalyze.other", "value": $("#other").val() } );

		top.sendAjaxRequest("/actions/CustInfo.action?saveCustAnalyze",aoData,optCustAnalyzeCallback);
		//$("#custAnalysis"+num).hide();
		//$("#view_custAnalysis"+num).show();
	}
	// 操作回调函数--添加客情分析
	function optCustAnalyzeCallback(obj){
       try{
        if ( obj.status == true ){
            isSaveOK = true;
            top.showInfoWinOK("操作成功");
			editCBModelBt();
			doCancelCustAnalyze();
			//$("#view_general3"+cur_tab_id).html(top.getAllCheckedValue( document.getElementsByName("general3") )  );
			//$("#view_general4"+cur_tab_id).html( top.getAllCheckedValue( document.getElementsByName("general4"+cur_tab_id) )  );
			//$("#view_cust_focus"+cur_tab_id).html( top.getAllCheckedValue( document.getElementsByName("cust_focus"+cur_tab_id) )  );
			//$("#view_is_consume_ability"+cur_tab_id).html( top.getAllCheckedValue( document.getElementsByName("is_consume_ability"+cur_tab_id) ) );
			//$("#view_cust_lost_reason"+cur_tab_id).html(top.getAllCheckedValue( document.getElementsByName("cust_lost_reason"+cur_tab_id) )  );
			$("#span_other_cust_lost_reason").html($("#other_cust_lost_reason").val() );
			//if($("#other_cust_lost_reason").val()!=''){
				//$("#view_choose_reason"+cur_tab_id).html( top.getAllCheckedValue( document.getElementsByName("choose_reason"+cur_tab_id)+$("#other_cust_lost_reason").val() )  );
			//}else{
			//	$("#view_choose_reason"+cur_tab_id).html( top.getAllCheckedValue( document.getElementsByName("choose_reason"+cur_tab_id) )  );
			//}
			$("#tdgeneral1").html( top.getCodeName("IMPRESSION",$("#general1").val()) );
			$("#tdgeneral2").html(  top.getCodeName("APPRAISE_DESIGNER",$("#general2").val()) );
			
			$("#span_cy1").html( $("#cy1").val() );
			$("#span_cy2").html( $("#cy2").val() );
			$("#span_cy3").html( $("#cy3").val() );
			$("#span_cy4").html( $("#cy4").val() );
			$("#span_cy5").html( $("#cy5").val() );
			$("#span_cy6").html( $("#cy6").val() );
			$("#span_cy7").html( $("#cy7").val() );
			$("#span_cy8").html( $("#cy8").val() );
			$("#span_cy9").html( $("#cy9").val() );
			$("#span_cy10").html( $("#cy10").val() );
			$("#span_cy11").html( $("#cy11").val() );
			$("#span_cy12").html( $("#cy12").val() );
			$("#span_cy13").html( $("#cy13").val() );
			$("#span_cy14").html( $("#cy14").val() );
			$("#span_cy15").html( $("#cy15").val() );
			$("#span_cy16").html( $("#cy16").val() );
			$("#span_cy17").html( $("#cy17").val());
			
			$("#span_special1").html( $("#special1").val()  );
			$("#span_special2").html( $("#special2").val()  );
			$("#span_special3").html( $("#special3").val()  );
			$("#span_special4").html($("#special4").val()  );
			$("#span_special5").html( $("#special5").val() );
			
			$("#span_des_next_measure").html( $("#des_next_measure").val()  );
			$("#span_cusm_next_measure").html( $("#cusm_next_measure").val()  );
			$("#span_other_measure").html( $("#other_measure").val()  );
			$("#span_other").html( $("#other").val() );
			
			
			$("#span_cust_focus").html(top.getAllCheckedValue( document.getElementsByName("cust_focus")));
			$("#cust_lose_reason").html(top.getAllCheckedValue( document.getElementsByName("cust_lost_reason")));
			$("#cust_choose_property").html(top.getAllCheckedValue( document.getElementsByName("choose_reason")));
			$("#design_general").html(top.getAllCheckedValue( document.getElementsByName("general3")));
			$("#material_general").html(top.getAllCheckedValue( document.getElementsByName("general4")));
			$(".edit").hide();
			$("#span_cust_focus").show();
			$("#cust_lose_reason").show();
			$("#cust_choose_property").show();
			$("#design_general").parent().show();
			$("#material_general").parent().show();
        }else{
            isSaveOK = false;
            top.showInfoWinError("操作失败 "+obj.msg);
        }
       }catch(e){
          top.showInfoWinError("处理异常:"+e.message);
       }
	}
			
//---------------------------客户回访-------------------------

	//添加更多回访信息行
	function AddMoreCallBack(){
		var ht="";
		ht+='<table border="1" cellpadding="3" cellspacing="1" width="100%" align="center" style="background-color: #b9d8f3;" id="callback'+callbackNum+'">';
		ht+='<tr class="tr_data" height="35px">';

			ht+='<td width="25%" class="table_property_title" width="100px">本次来店时间';
			ht+='<input type="hidden" id="next_id'+callbackNum+'"></td>';
			ht+='<td width="25%" align="left"><input type="text" id="come_time'+callbackNum+'" onclick="new Calendar().show(this);" readonly="true"/></td>';
			ht+='<td width="25%" class="table_property_title" >预约下次来店时间</td>';
			ht+='<td width="25%" align="left" ><input type="text" id="next_time'+callbackNum+'" onclick="new Calendar().show(this);" readonly="true"/></td>';
			ht+='</tr>';
					ht+='<tr class="tr_data" height="35px">';
					ht+='<td class="table_property_title">客户满意度<span style="color:red;">(*)</span></td>';
					ht+='<td align="left" colspan="3"><span id="tdcust_sati'+callbackNum+'" style="padding:0px 15px 0px 0px" ></span><span style="display:none" id="tdunsati_reason'+callbackNum+'"></span></td>';
					ht+='</tr>';
		
		ht+='<tr class="tr_data" height="35px">';
			ht+='<td class="table_property_title">电话回访时间</td>';
			ht+='<td align="left"><input type="text" id="callback_time'+callbackNum+'" onclick="new Calendar().show(this);" readonly="true"/></td>';
			ht+='<td class="table_property_title">结果达成</td>';
			ht+='<td align="left" id="tdresult_status'+callbackNum+'"></td>';
		ht+='</tr>';
		ht+='<tr class="tr_data" height="35px">';
			ht+='<td class="table_property_title">预约量房时间</td>';
			ht+='<td align="left"><input type="text" id="measure_date'+callbackNum+'" onclick="new Calendar().show(this);" readonly="true" value="'+top.getTimeStr(measureHouseDate,true)+'"/></td>';
			ht+='<td class="table_property_title">客户意向</td>';
			ht+='<td align="left" id="tdcust_intention'+callbackNum+'"></td>';
		ht+='</tr>';
		ht+='<tr class="tr_data" height="35px">';
			ht+='<td class="table_property_title">客户意见或建议</td>';
			ht+='<td align="left" colspan="3"><textarea style="width:99%" id="cust_suggest'+callbackNum+'" rows="3"></textarea></td>';
		ht+='</tr>';
		ht+='<tr class="tr_data" height="35px">';
			ht+='<td class="table_property_title">销售策略</td>';
			ht+='<td align="left" colspan="3"><textarea style="width:99%" id="sales_measure'+callbackNum+'" rows="3"></textarea></td>';
		ht+='</tr>';
		ht+='<tr class="tr_data" height="35px">';
			ht+='<td class="table_property_title">其他销售策略上传附件</td>';
			ht+='<td align="left"><div class="buttonDivTwo"><a href="javascript:uploadSalesMeasureFile(\''+callbackNum+'\')">上传</a></div></td>';
			ht+='<td align="left" colspan="2"><div id="lab_file_path'+callbackNum+'"></div><input type="hidden" id="file_path'+callbackNum+'" size="20"/></td>';
		ht+='</tr>';
		ht+='<tr class="tr_data" height="35px">';
			ht+='<td class="table_property_title">短信内容</td>';
			ht+='<td align="left" colspan="2"><textarea style="width:99%" id="msg_content'+callbackNum+'"rows="3"></textarea><br/>&nbsp;</td>';
			ht+='<td align="center"><a href="javascript:selectMessage(\'msg_content'+callbackNum+'\')">选择模板</a>&nbsp;<a href="javascript:sendMessage(2,true)">发送</a></td>';
		ht+='</tr>';
		ht+='<tr class="tr_data" height="35px">';
		ht+='<td colspan="4" align="left"  style="font-weight:bold;">电话回访结果</td>';
		ht+='</tr>';
		ht+='<tr class="tr_data">';
		ht+='<td colspan="4" style="padding:0px;border-collapse:collapse;">';
		ht+='<table border="0" cellpadding="3" cellspacing="1" width="100%" align="center" style="background-color: #b9d8f3;">';
		ht+='<tr class="tr_data">';
		ht+='<td class="table_property_title" style="width:110px;">客户经理</td>';
		ht+='<td align="left"><textarea id="cusm_callback_info'+callbackNum+'" rows="2" style="width:99%"></textarea></td>';
		ht+='</tr>';
		ht+='<tr class="tr_data">';
		ht+='<td class="table_property_title" style="width:110px;">设计师</td>';
		ht+='<td align="left"><textarea id="des_callback_info'+callbackNum+'" rows="2" style="width:100%"></textarea></td>';
		ht+='</tr>';
		ht+='</table>';
		ht+='</td>';
		ht+='</tr>';
		ht+='</table>';
		ht+='<br/>';
		ht+='<B>&nbsp;定制销售策略</B>';
		ht+='<br/>';
		ht+='<table border="1" cellpadding="3" cellspacing="1" width="100%" align="center" style="background-color: #b9d8f3;">';
		ht+='<tr class="tr_data" height="35px">';
		ht+='<td align="left"><textarea id="custom_tactics'+callbackNum+'" rows="5" style="width:99%"></textarea></td>';
		ht+='</tr>';
		ht+='</table>';
		
		//ht+='</table>';
		$("#callBackInfo"+callbackNum).append( ht );
		ht='';
		//view
		ht+='<table border="1" cellpadding="3" cellspacing="1" width="100%" align="center" style="background-color: #b9d8f3;" id="callback'+callbackNum+'">';
		ht+='<tr class="tr_data" height="35px">';

			ht+='<td width="25%" class="table_property_title">本次来店时间</td>';
			ht+='<td width="25%" align="left" id="view_come_time'+callbackNum+'"></td>';
			ht+='<td width="25%" class="table_property_title">预约下次来店时间</td>';
			ht+='<td width="25%" align="left" id="view_next_time'+callbackNum+'" ></td>';
			ht+='</tr>';
					ht+='<tr class="tr_data" height="35px">';
					ht+='<td class="table_property_title">客户满意度</td>';
					ht+='<td align="left" colspan="3"><span id="view_cust_sati'+callbackNum+'" style="padding:0px 15px 0px 0px" ></span><span style="display:none" id="tdunsati_reason'+callbackNum+'"></span></td>';
					ht+='</tr>';
		
		ht+='<tr class="tr_data" height="35px">';
			ht+='<td class="table_property_title" >电话回访时间</td>';
			ht+='<td align="left" id="view_callback_time'+callbackNum+'"></td>';
			ht+='<td class="table_property_title">结果达成</td>';
			ht+='<td align="left" id="view_result_status'+callbackNum+'"></td>';
		ht+='</tr>';
		ht+='<tr class="tr_data" height="35px">';
			ht+='<td class="table_property_title">预约量房时间</td>';
			ht+='<td align="left" id="view_measure_date'+callbackNum+'"></td>';
			ht+='<td class="table_property_title">客户意向</td>';
			ht+='<td align="left" id="view_cust_intention'+callbackNum+'"></td>';
		ht+='</tr>';
		ht+='<tr class="tr_data" height="35px">';
			ht+='<td class="table_property_title" >客户意见或建议</td>';
			ht+='<td align="left" colspan="3" id="view_cust_suggest'+callbackNum+'"></td>';
		ht+='</tr>';
		ht+='<tr class="tr_data" height="35px">';
			ht+='<td class="table_property_title">销售策略</td>';
			ht+='<td align="left" colspan="3" id="view_sales_measure'+callbackNum+'"></td>';
		ht+='</tr>';
		ht+='<tr class="tr_data" height="35px">';
			ht+='<td class="table_property_title">其他销售策略附件</td>';
			ht+='<td align="left" colspan="3"><div id="view_file_path'+callbackNum+'"></div></td>';
		ht+='</tr>';
		ht+='<tr class="tr_data" height="35px">';
			ht+='<td class="table_property_title">短信内容</td>';
			ht+='<td align="left" colspan="3" id="view_msg_content'+callbackNum+'"><br/>&nbsp;</td>';
		ht+='</tr>';
		
		ht+='<tr class="tr_data" height="35px">';
		ht+='<td colspan="4" align="left"  style="font-weight:bold;">电话回访结果</td>';
		ht+='</tr>';
		ht+='<tr class="tr_data">';
		ht+='<td colspan="4" style="padding:0px;border-collapse:collapse;">';
		ht+='<table border="0" cellpadding="3" cellspacing="1" width="100%" align="center" style="background-color: #b9d8f3;">';
		ht+='<tr class="tr_data">';
		ht+='<td class="table_property_title" style="width:165px;">客户经理</td>';
		ht+='<td align="left" id="view_cusm_callback_info'+callbackNum+'" ></td>';
		ht+='</tr>';
		ht+='<tr class="tr_data">';
		ht+='<td class="table_property_title" style="width:165px;">设计师</td>';
		ht+='<td align="left" id="view_des_callback_info'+callbackNum+'"></td>';
		ht+='</tr>';
		ht+='</table>';
		ht+='</td>';
		ht+='</tr>';
		ht+='</table>';
		ht+='<br/>';
		ht+='<B>&nbsp;定制销售策略</B>';
		ht+='<br/>';
		ht+='<table border="1" cellpadding="3" cellspacing="1" width="100%" align="center" style="background-color: #b9d8f3;">';
		ht+='<tr class="tr_data" height="35px">';
		ht+='<td align="left" id="view_custom_tactics'+callbackNum+'"></td>';
		ht+='</tr>';
		ht+='</table>';
		
		$("#view_callBackInfo"+callbackNum).append( ht );
		
		//$("#callBackInfo"+callbackNum).append( ht );
		$("#tdresult_status"+callbackNum+"").html( top.getCodeSelectHtml("RESULT_STATUS","result_status"+callbackNum+"",false,"3") );
		$("#tdcust_intention"+callbackNum+"").html( top.getCodeSelectHtml("INTENTION_EVALUATE","cust_intention"+callbackNum+"",true) );
		$("#tdcust_sati"+callbackNum+"").html( top.getCodeSelectHtml("APPRAISE_DESIGNER","cust_sati"+callbackNum+"",true,"","cust_satiChange("+callbackNum+")") );
		$("#tdunsati_reason"+callbackNum).html( top.getCodeSelectHtml("CUST_UNSATI_REASON","unsati_reason"+callbackNum,true,"") );
		cust_satiChange(callbackNum);
		callbackNum++;
		//$("#addTrBtn").hide();
		
	}
	function showCallBack(){
		$("#view_callBackInfo"+cur_tab_id).hide();
		$("#callBackInfo"+cur_tab_id).show();
		saveModelBt();
		$("#custManageWorkTab").show();
	}
	//保存更多回访信息
	function saveMoreCallBack(){
	    var message="";
		var num=cur_tab_id;
		message+=checkString($("#cust_suggest"+cur_tab_id).val(),false,512,"客户意见或建议");
		message+=checkString($("#sales_measure"+cur_tab_id).val(),false,512,"销售策略");
		message+=checkString($("#cusm_callback_info"+cur_tab_id).val(),false,512,"客户经理电话回访结果");
		message+=checkString($("#des_callback_info"+cur_tab_id).val(),false,512,"设计师电话回访结果");
		message+=checkString($("#custom_tactics"+cur_tab_id).val(),false,512," 定制销售策略");
		message+=checkString($("#msg_content"+cur_tab_id).val(),false,512,"短信内容");
		if($("#cust_sati"+num).val()==''){
		    message+="请填写客户满意度<br/>";
		}else if($("#cust_sati"+num).val()=='02'&&$("#unsati_reason"+num).val()==''){//
			message+="请填写客户不满意原因</br>";
		}
		if(message!=""){
		   top.showInfoWinWarn(message);return;
		}
		var aoData=[];
		aoData.push( { "name": "callbackMore.next_id", "value":$("#next_id"+num).val() } );
		aoData.push( { "name": "callbackMore.cust_suggest", "value": $("#cust_suggest"+num).val() } );
		aoData.push( { "name": "callbackMore.come_time", "value": top.toTimestamp($("#come_time"+num).val() )} );
		aoData.push( { "name": "callbackMore.next_time", "value": top.toTimestamp($("#next_time"+num).val()) } );
		aoData.push( { "name": "callbackMore.callback_time", "value": top.toTimestamp($("#callback_time"+num).val()) } );
		aoData.push( { "name": "callbackMore.measure_date", "value":top.toTimestamp( $("#measure_date"+num).val()) } );
		aoData.push( { "name": "callbackMore.result_status", "value": $("#result_status"+num).val() } );
		aoData.push( { "name": "callbackMore.cust_intention", "value": $("#cust_intention"+num).val() } );
		aoData.push( { "name": "callbackMore.sales_measure", "value": $("#sales_measure"+num).val() } );
		aoData.push( { "name": "callbackMore.cust_sati", "value": $("#cust_sati"+num).val() } );
		aoData.push( { "name": "callbackMore.unsati_reason", "value": $("#unsati_reason"+num).val() } );
		aoData.push( { "name": "callbackMore.msg_content", "value": $("#msg_content"+num).val() } );
		aoData.push( { "name": "callbackMore.file_path", "value": $("#file_path"+num).val() } );
		aoData.push( { "name": "callbackMore.require_id", "value": require_id } );
		aoData.push( { "name": "callbackMore.cust_code", "value": cust_base_info_id } );
		aoData.push( { "name": "callbackMore.custom_tactics", "value": $("#custom_tactics"+num).val() } );
		aoData.push( { "name": "callbackMore.des_callback_info", "value": $("#des_callback_info"+num).val() } );
		aoData.push( { "name": "callbackMore.cusm_callback_info", "value": $("#cusm_callback_info"+num).val() } );
		
		
		aoData.push( { "name": "custRequire.cust_code", "value": cust_base_info_id } );//生成来店提醒
		aoData.push( { "name": "custRequire.require_manager", "value": $("#designer_code").val() } );//量房提醒
		if($("#view_come_time"+num).html()==''){
			aoData.push( { "name": "isEnterStore", "value":'true' } );
		}
		aoData.push( { "name": "salesstrategy.next_come_time", "value":top.toTimestamp($("#next_come_time").val()) } );
		if($("#view_measure_date"+num).html()==''){
			aoData.push( { "name": "isMeasureHouse", "value":'true' } );
		}			
		top.sendAjaxRequest("/actions/CustInfo.action?saveCallbackMore",aoData,optCallbackMoreCallback);
		$("#view_callBackInfo"+num).show();
		$("#callBackInfo"+num).hide();	
	}
	function optCallbackMoreCallback(obj){
	 try{
        if ( obj.status == true ){
            isSaveOK = true;
            top.showInfoWinOK("操作成功");
			/*if(cur_tab_id==callbackNum-1){
				//var url=location.href;
			    //var tmp='/(optType=)([^&]*)/gi';
                //tmp=url.replace(eval(tmp),"optType=update"); 
				//location.href=tmp;
			}else{*/
				editModelBt();
				//$("#view_next_id"+cur_tab_id).html($("#next_id"+cur_tab_id).val() );
				$("#view_cust_suggest"+cur_tab_id).html( $("#cust_suggest"+cur_tab_id).val() );
				$("#view_come_time"+cur_tab_id).html($("#come_time"+cur_tab_id).val()  );
				$("#view_next_time"+cur_tab_id).html( $("#next_time"+cur_tab_id).val()  );
				$("#view_callback_time"+cur_tab_id).html($("#callback_time"+cur_tab_id).val()  );
				$("#view_measure_date"+cur_tab_id).html( $("#measure_date"+cur_tab_id).val() );
				$("#view_result_status"+cur_tab_id).html(top.getCodeName("RESULT_STATUS", $("#result_status"+cur_tab_id).val() ));
				$("#view_cust_intention"+cur_tab_id).html( top.getCodeName("INTENTION_EVALUATE",$("#cust_intention"+cur_tab_id).val()) );
				$("#view_sales_measure"+cur_tab_id).html( $("#sales_measure"+cur_tab_id).val() );
				$("#view_cusm_callback_info"+cur_tab_id).html( $("#cusm_callback_info"+cur_tab_id).val() );
				$("#view_des_callback_info"+cur_tab_id).html( $("#des_callback_info"+cur_tab_id).val() );
				$("#view_custom_tactics"+cur_tab_id).html( $("#custom_tactics"+cur_tab_id).val() );
				if($("#unsati_reason"+cur_tab_id).val()!=''){
					$("#view_cust_sati"+cur_tab_id).html( top.getCodeName("CUST_UNSATI_REASON",$("#unsati_reason"+cur_tab_id).val()));
				}else{
					$("#view_cust_sati"+cur_tab_id).html( top.getCodeName("APPRAISE_DESIGNER",$("#cust_sati"+cur_tab_id).val()));
				}
				$("#view_msg_content"+cur_tab_id).html( $("#msg_content"+cur_tab_id).val());
				$("#view_file_path"+cur_tab_id).html( "<a style='cursor:pointer;color:blue;' href='"+top.getUrlBase()+"/download?filePath="+$("#file_path"+cur_tab_id).val()+"'>"+$("#file_path"+cur_tab_id).val()+"</a>");
				$("#custManageWorkTab").hide();
        }else{
            isSaveOK = false;
            top.showInfoWinError("操作失败 "+obj.msg);
        }
       }catch(e){
          top.showInfoWinError("处理异常:"+e.message);
       }
	}
	function doCancelCallBack(){
		$("#view_callBackInfo"+cur_tab_id).show();
		$("#callBackInfo"+cur_tab_id).hide();
		editModelBt();
		$("#custManageWorkTab").hide();
	}
	
	function getMeasureHouseDate(){
		return measureHouseDate;
	}
	//-------------------------------量房、设计方案---------------------
   //点击不同标签页，按钮绑定不同触发事件
    function changBtBind(tabTitle){
		if(tabTitle=="custBase"){//客户基本信息
		    cancleContract();
			callbackPlanDoCancel()
			$("#baseEditBt").attr("onclick","baseDoEdit();");
		}else if(tabTitle=='custAnalysis'){//客情分析
		   doCancelCustAnalyze();
		   $("#baseEditBt").attr("onclick","editCustAnalysis()");
		   $("#div_cust_analysis textarea").hide();
		   $("#div_cust_analysis span").show();
		   if(top.g_isPermit("09_cust_analyze_opt")){
		     $("#baseEditBt").show();
		   }else{
		     $("#baseEditBt").hide();
		   }
		}else if(tabTitle=='callbackInfo'){//客户沟通
		   doCancelCallBack();
		   $("#baseSaveBt").attr("onclick","saveMoreCallBack()");
		   $("#baseEditBt").attr("onclick","showCallBack()");
		   $("#baseReturnBt").attr("onclick","doCancelCallBack()");
		   if(top.g_isPermit("09_cust_communicate_opt")){
		     $("#baseEditBt").show();
		   }else{
		     $("#baseEditBt").hide();
		   }
		}
		if(!top.g_isPermit('09_edit_designer_manager')){
			$("#otherEditBt").hide();
		}
	}
	
	//客情分析编辑按钮
	function editCustAnalysis(){
	   $("#baseReturnBt").attr("onclick","doCancelCustAnalyze()");
	   $("#baseSaveBt").attr("onclick","addCustAnalyze()");
	   $("#baseEditBt").hide();
	   $("#baseReturnBt").show();
	   $("#baseSaveBt").show();
	   $("#div_cust_analysis input[type='checkbox']").removeAttr("disabled");
	   $("#div_cust_analysis textarea").show();
	   $("#div_cust_analysis span").hide();
	   $("#span_general1").show();
	   $("#span_general2").show();
	   $("#div_cust_analysis select").show();
	   $(".edit").show();
	   $("#design_general").parent().hide();
	   $("#material_general").parent().hide();
	   $("#cust_choose_property").hide();
	   $("#cust_lose_reason").hide();
	   $("#span_cust_focus").hide();
	   
	}
	
	
	function callbackPlanDoSubmit(){
		var aoData=[];
		aoData.push( { "name": "custRequire.cust_code", "value": cust_base_info_id });
		aoData.push( { "name": "custRequire.id", "value": require_id });
		aoData.push( { "name": "custRequire.callback_service_begin_date", "value": top.toTimestamp($("#callback_service_begin_date").val()) });
		aoData.push( { "name": "custRequire.callback_service_cust_manage_interval", "value": $("#callback_service_cust_manage_interval").val() } );
		aoData.push( { "name": "custRequire.callback_service_designer_interval", "value": $("#callback_service_designer_interval").val() } );
		aoData.push( { "name": "custRequire.callback_service_project_dept_interval", "value": $("#callback_service_project_dept_interval").val() } );
		if(top.g_isPermit('09_alter_cust_manager')&&!top.g_isPermit('cust_edit')){
			aoData.push( { "name": "custInfo.cust_manager", "value": $("#view_cust_manager_val").val() } );
		//店面经理修改设计师
		}else{
			aoData.push( { "name": "custInfo.cust_manager", "value": $("#cust_manager").val() } );
		}
		aoData.push( {"name": "custRequire.require_manager", "value": $("#designer_code").val()} );
		var xurl="/actions/CustInfo.action?updateCallbackPlanInfo";
		top.sendAjaxRequest(xurl,aoData,saveCBPlanCallback);
	}
	function saveCBPlanCallback(obj){
	  if(obj.status==true){
		    top.showInfoWinOK("操作成功！");
			$("#view_callback_service_begin_date").html($("#callback_service_begin_date").val());
			$("#view_callback_service_cust_manage_interval").html($("#callback_service_cust_manage_interval").val());
			$("#view_callback_service_designer_interval").html($("#callback_service_designer_interval").val()); 
			$("#view_callback_service_project_dept_interval").html($("#callback_service_project_dept_interval").val());
			 callbackPlanDoCancel();
			 getCustCallbackList();
		}else{
		    top.showInfoWinError("error");
		}
	}
	//--工程合同相关操作begin--
	//在工程合同标签显示页面，单击编辑按钮
	function editContractInfo(){
	  if(top.g_isPermit('project_contract_opr')){
		$("#contractEditBt").hide();
		if(!contract_check){
		  $("#contractSaveBt").show();
		}
		$("#contractReturnBt").show();

		$("#spanproject_contract_type").html(top.getCodeSelectHtml("PROJECT_CONTRACT_TYPE","project_contract_type",true,project_contract_type));
		$("#spantz_apply_type").html(top.getCodeSelectHtml("TZ_APPLY_TYPE","tz_apply_type",true,tz_apply_type));
		$("#project_contract_detail input").show();
		$("#project_process_list input").hide();
		$("#project_forfeit_List input").hide();
		$("#project_contract_detail span").hide();
		$("#tdproject_dateline").show();
		$("#spanproject_contract_type").show();
		$("#spantz_apply_type").show();
		$("#uploadFile").show();
		
		if(projectAgrFj_id==""){
		   $("#uploadFile a").text("上传");
		   $("#uploadFile a").attr("href","javascript:uploadProjectAgrFj();");
		}else{
		   $("#uploadFile a").text("下载");
		   $("#uploadFile a").attr("href",$("#uploadFile a").attr("path"));
		}
		
		//收款记录 违款记录
		$(".opr").show();
		$(".applyImg").each(function(){
		    if($(this).attr("class").indexOf("doApply")!=-1){
			   $(this).hide();
			}else{
			   $(this).show();
			}
		});
	    $("#project_process_list img").show();
		$("#project_forfeit_List img").show();
	   }
	   $("#project_forfeit_List").show();
	   $("#weiyueTitle").show();
	   if($("#contract_id").val()!=""){
	      $("#contract_check_table").show();
	   }else{
	      $("#contract_check_table").hide();
	   }
	   $(".unitText").show();
	   if(contract_check){
	     $(".buttonDivFour").show();
		 $("#uploadFile").hide();
		 $("#project_contract_detail input").hide();
		 $("#project_contract_detail span").show();
	   }else{
	     $(".buttonDivFour").hide();
	   }
	}
	
	//工程合同返回按钮
	function cancleContract(){
        //$("#baseEditBt").show();
		$("#contractEditBt").show();
		$("#contractSaveBt").hide();
		$("#contractReturnBt").hide();
		$("#project_contract_detail input").hide();
		$("#project_contract_detail select").hide();
		$("#project_contract_detail span").show();
		$("#tdproject_dateline").hide();
		if($("#contract_id").val()==""){
		  $(".unitText").hide();
		}else{
		  $(".unitText").show();
		}
		$(".opr").hide();
		$("#spanproject_contract_type").text(top.getCodeName("PROJECT_CONTRACT_TYPE",project_contract_type));
		$("#spantz_apply_type").text(top.getCodeName("TZ_APPLY_TYPE",tz_apply_type));
		//$("#baseSaveBt").hide();
		//$("#baseReturnBt").hide();
		if(projectAgrFj_id==""){
		   $("#uploadFile a").text("上传");
		   $("#uploadFile a").attr("href","javascript:void(0);");
		   $("#uploadFile").hide();
		}else{
		   $("#uploadFile a").text("下载");
		   $("#uploadFile a").attr("href",$("#uploadFile a").attr("path"));
		}
		
		$(".applyImg").hide();
		//违款记录
		doCanclePayVio();
		$("#project_forfeit_List img").hide();
		//当审核信息为空隐藏审核表 当违款记录为空 隐藏违款记录表
		if($("#project_forfeit_List tr").length>2){
			$("#project_forfeit_List").show();
			 $("#weiyueTitle").show();
		}else{
			$("#project_forfeit_List").hide();
			 $("#weiyueTitle").hide();
		}
	}
	//合同审核
	function examineContract(status){
	   if($("#contract_id").val()==""){top.showInfoWinWarn("请先保存合同信息");return;}
	   contract_check_status=status;
	   top.showConfirm("确定要执行此操作吗?",doExamineContract);
	}
	
	function doExamineContract(){
	   var aoData=[];
	   aoData.push({ "name":"contract.contract_id","value":$("#contract_id").val()});
	   aoData.push({ "name":"contract.check_status","value":contract_check_status});
	   aoData.push({ "name":"contract.check_memo","value":$("#contract_check_memo").val()});
	   top.sendAjaxRequest("/actions/Contract.action?checkContract",aoData,examineContractCallback);
	}
	
	function examineContractCallback(obj){
	   if(obj.status==true){
	      top.showInfoWinOK("操作成功");
		  $("#tdcontract_check").html(top.getCodeName("EXAMINE_STATUS",contract_check_status));
		  $("#check_user_time").show();
		  if(contract_check_status=="1"){
		     contract_check=true;
		  }else{
		     contract_check=false;
		  }
		   initProjecContractInfo();
	   }else{
	      top.showInfoWinError("操作失败-->"+obj.msg);
	   }
	}
	
	//工程合同保存按钮
	function saveContractInfo(){
	   //保存信息
	  if(require_id==""){top.showInfoWinWarn("没有需求号，无法进行操作！");return;}
	  //
	  if($("#project_agreement_id").val()!=null&&$("#project_agreement_id").val().length<1){top.showInfoWinWarn("工程合同号不能为空，请填写工程合同号！");return ;}
	  if($("#project_money").val()!="" && isNaN($("#project_money").val())){top.showInfoWinWarn("工程造价金额类型不对，请重新输入！");return;}
	  if($("#first_pay").val()!="" && isNaN($("#first_pay").val())){top.showInfoWinWarn("首期款金额类型不对，请重新输入！");return;}
	  if($("#second_pay").val()!="" && isNaN($("#second_pay").val())){top.showInfoWinWarn("二期款金额类型不对，请重新输入！");return;}
	  if($("#third_pay").val()!="" && isNaN($("#third_pay").val())){top.showInfoWinWarn("三期款金额类型不对，请重新输入！");return;}
	  if($("#final_pay").val()!="" && isNaN($("#final_pay").val())){top.showInfoWinWarn("尾款金额类型不对，请重新输入！");return;}
	  var aoData=[];
	  
	  aoData.push({"name":"contract.contract_code","value":$("#project_agreement_id").val()});
	  aoData.push({"name":"contract.sign_date","value":top.toTimestamp($("#sign_date").val())});
	  aoData.push({"name":"contract.ext1","value":$("#cdbh").val()});
	  aoData.push({"name":"contract.require_id","value":require_id});
	  aoData.push({"name":"contract.cust_code","value":$("#view_cust_code").text()});
	  aoData.push({"name":"contract.cust_name","value":$("#top_cust_name").text()});
	  aoData.push({"name":"contract.ext6","value":$("#project_contract_type").val()});
	  aoData.push({"name":"contract.ext3","value":$("#project_dateline").val()});
	  aoData.push({"name":"contract.ext2","value":top.toTimestamp($("#project_begin_date").val())});
	  aoData.push({"name":"contract.ext4","value":top.toTimestamp($("#project_end_date").val())});
	  aoData.push({"name":"contract.ext7","value":$("#tz_apply_type").val()});
	  aoData.push({"name":"contract.ext5","value":$("#project_money").val()});
	  aoData.push({"name":"contract.first_pay","value":$("#first_pay").val()});
	  aoData.push({"name":"contract.second_pay","value":$("#second_pay").val()});
	  aoData.push({"name":"contract.third_pay","value":$("#third_pay").val()});
	  aoData.push({"name":"contract.final_pay","value":$("#final_pay").val()});
	  aoData.push({"name":"contract.contract_type","value":"1"});
	  aoData.push({"name":"contract.ext15","value":getCustManager()});
	  aoData.push({"name":"programme_manager","value":$("#programme_manager").val()});//工程部经理 用于向工程部经理发送分派监理提醒
	  aoData.push({"name":"district","value":$("#district").val()});
	  
	  		
	  if($("#contract_id").val()==""){
	    //未有工程合同的 自动生成合同号
		var today=new Date();
		$("#contract_id").val(today.getTime());
		aoData.push( {"name":"contract.check_status","value":"0"} );
	  }
	  aoData.push({"name":"contract.contract_id","value":$("#contract_id").val()});	
	  var xurl="/actions/Contract.action?insertContract";
	  if($("#spanproject_agreement_id").html()!=""){
	      xurl="/actions/Contract.action?updateContract";
	  }
	  top.sendAjaxRequest(xurl,aoData,saveContractCallBack);
	}
	
	//保存合同信息成功后回调函数
	function saveContractCallBack(obj){
	     if(obj.status==true){
		    top.showInfoWinOK("操作成功！");
			updateCustStatus('6');
			$("#contract_id").val(obj.msg);
			project_contract_type=$("#project_contract_type option:selected").val();
			tz_apply_type=$("#tz_apply_type option:selected").val();
			cancleContract();
			$("#spanproject_agreement_id").text($("#project_agreement_id").val());
			$("#spansign_date").text($("#sign_date").val());
			$("#spancdbh").text($("#cdbh").val());
			$("#spanproject_dateline").text($("#project_dateline").val());
			$("#spanproject_begin_date").text($("#project_begin_date").val());
			$("#spanproject_end_date").text($("#project_end_date").val());
			$("#spanproject_money").text($("#project_money").val());
			$("#spanfirst_pay").text($("#first_pay").val());
			$("#spansecond_pay").text($("#second_pay").val());
			$("#spanthird_pay").text($("#third_pay").val());
			$("#spanfinal_pay").text($("#final_pay").val());
			if($("#project_money").val()==""){
			   $(".unitText").eq(1).hide();
			}
			if($("#first_pay").val()==""){
			   $(".unitText").eq(2).hide();
			}
			if($("#second_pay").val()==""){
			   $(".unitText").eq(3).hide();
			}
			if($("#third_pay").val()==""){
			   $(".unitText").eq(4).hide();
			}
			if($("#final_pay").val()==""){
			   $(".unitText").eq(5).hide();
			}
			checkInfoSave();
			$("#contract_check_table").show();
			$("#tdcontract_check").html("待审核");
			$("#check_status").val("0");
		 }else{
		    top.showInfoWinError(obj.msg);
		 }
	   
	}
	
	function showProjectContractInfo(){
		if(!isProjectContractShowed){
			initProjecContractInfo();
		}else{//数据加载过一次 直接显示
			$("#custManageWorkTab td:eq(0)").trigger("click");
		}

	}	
	//若有工程合同信息则获取工程合同信息
	function initProjecContractInfo(){
        if(require_id==""){return ;}
		var aoData=[];
		aoData.push({"name":"contract.require_id","value":require_id});
		aoData.push({"name":"contract.cust_code","value":pre_cust_code+$("#cust_code").val()});
		aoData.push({"name":"contract.contract_type","value":"1"});
		top.sendAjaxRequest("/actions/Contract.action?getProjectContractInfo",aoData,getProjectContractInfoCallBack);
	}
	
	//获取工程合同信息成功后将数据显示出来 
	function getProjectContractInfoCallBack(obj){
	    var ht="<tr class='tr_data' height='25px'><td style='width:15%'>收款进度</td><td style='width:30%'>说明</td><td style='width:15%'>付款时间</td> <td style='width:13%'>付款比例(%)</td><td>金额</td> <td style='width:16%' class='opr'>操作</td></tr>";
			//获取违款信息
		var vo="<tr class='tr_data' height='25px'><td style='width:60%;'>罚责</td><td style='width:13%'>罚款比例(%)</td><td>罚金</td><td style='width:16%' class='opr'>操作</td></tr>";
	    if(obj.status==true){
            if(obj.body.contract){
		    var o=obj.body.contract;
			var paymentVioRecordList=obj.body.paymentVioRecordList;
			var projectAgrFj=obj.body.projectAgrFj;
			if(o.check_status=="1"){
			  contract_check=true;
			  $("#check_button").hide();
			}
			$("#contract_id").val(o.contract_id);
			$("#spanproject_agreement_id").text(o.contract_code);
			$("#spansign_date").text(top.getTimeStr(o.sign_date,true));
			$("#spancdbh").text(o.ext1);
			$("#spanproject_contract_type").text(top.getCodeName("PROJECT_CONTRACT_TYPE",o.ext6));
			$("#spanproject_dateline").text(o.ext3);
			$("#tdproject_dateline").html(o.ext3);
			$("#spanproject_begin_date").text(top.getTimeStr(o.ext2,true));
			$("#spanproject_end_date").text(top.getTimeStr(o.ext4,true));
			$("#spantz_apply_type").text(top.getCodeName("TZ_APPLY_TYPE",o.ext7));
			$("#spanproject_money").text(o.ext5);
			$("#spanfirst_pay").text(o.first_pay);
			$("#spansecond_pay").text(o.second_pay);
			$("#spanthird_pay").text(o.third_pay);
			$("#spanfinal_pay").text(o.final_pay);
			$("#tdproject_dateline").hide();
			$("#project_agreement_id").val(o.contract_code);
			$("#sign_date").val(top.getTimeStr(o.sign_date,true));
			$("#cdbh").val(o.ext1);
			project_contract_type=o.ext6;
			$("#project_dateline").val(o.ext3);
			$("#project_begin_date").val(top.getTimeStr(o.ext2,true));
			$("#project_end_date").val(top.getTimeStr(o.ext4,true));
		    $("#project_money").val(o.ext5);
		    $("#first_pay").val(o.first_pay);
		    $("#second_pay").val(o.second_pay);
		    $("#third_pay").val(o.third_pay);
		    $("#final_pay").val(o.final_pay);
			tz_apply_type=o.ext7;
			
			
			//工程合同附件
			if(projectAgrFj!=null){
			   projectAgrFj_id=projectAgrFj.file_id;
			   $("#uploadFile a").text("下载");
			   $("#uploadFile a").attr("href",top.getUrlBase()+"/download?filePath='"+projectAgrFj.file_path+"'&fileName='"+projectAgrFj.file_name+"'");
			   $("#uploadFile a").attr("path",top.getUrlBase()+"/download?filePath='"+projectAgrFj.file_path+"'&fileName='"+projectAgrFj.file_name+"'");
			}else{
			   $("#uploadFile").hide();
			}
			if(paymentVioRecordList!=null&&paymentVioRecordList.length>0){
			   for(var i=0;i<paymentVioRecordList.length;i++){
			       vo+="<tr class='tr_data'><td>"+paymentVioRecordList[i].violation_bz+"</td><td>"+paymentVioRecordList[i].violation_scale+"</td><td>"+paymentVioRecordList[i].violation_money+"</td><td class='opr'><img src='../../img/delete.gif' id='deleteVioRecord' style='cursor:pointer;display:none;' title='删除' onclick='deletePayVioRecord("+paymentVioRecordList[i].violation_id+")'></td></tr>";
			   }
			}
			vo+="<tr class='tr_data'><td><input style='width:95%' id='violation_bz'/></td><td><input style='width:75%' id='violation_scale' class='checkNum'/></td><td><input id='violation_money' style='width:95%' class='checkNum'/></td><td id='addPayVioRecord' class='opr'><img src='../../img/add.gif'  style='cursor:pointer;display:none;' title='添加' onclick='addPayVioRecord()'></td></tr>";
			$("#project_forfeit_List").html(vo); 
			$("#project_forfeit_List input").hide();
			
			if(o.first_is_payed==1){
			  $("#first_pay_img a").text("待付款");
			  $("#first_pay_img").attr("onclick","");
			  $("#first_pay_img").addClass("doApply");
			}
			if(o.first_is_payed==2){
			  $("#first_pay_img a").text("已付款");
			  $("#first_pay_img").attr("onclick","");
			  $("#first_pay_img").addClass("doApply");
			}
			if(o.second_is_payed==1){
			  $("#second_pay_img a").text("待付款");
			  $("#second_pay_img").attr("onclick","");
			  $("#second_pay_img").addClass("doApply");
			}
			if(o.second_is_payed==2){
			  $("#second_pay_img a").text("已付款");
			  $("#second_pay_img").attr("onclick","");
			  $("#second_pay_img").addClass("doApply");
			}
			if(o.third_is_payed==1){
			  $("#third_pay_img a").text("待付款");
			  $("#third_pay_img").attr("onclick","");
			  $("#third_pay_img").addClass("doApply");
			}
			if(o.third_is_payed==2){
			  $("#third_pay_img a").text("已付款");
			  $("#third_pay_img").attr("onclick","");
			  $("#third_pay_img").addClass("doApply");
			}

			result=(o.final_is_payed==1||o.final_is_payed==2);
			if(o.final_is_payed==1){
			  $("#final_pay_img a").text("待付款");
			  $("#final_pay_img").attr("onclick","");
			  $("#final_pay_img").addClass("doApply");
			}
			if(o.final_is_payed==2){
			  $("#final_pay_img a").text("已付款");
			  $("#final_pay_img").attr("onclick","");
			  $("#final_pay_img").addClass("doApply");
			}
			$("#contract_check_memo").val(o.check_memo);
			$("#spancontract_check_memo").html(o.check_memo);
			$("#check_status").val(o.check_status);
			$("#tdcontract_check").html(top.getCodeName("EXAMINE_STATUS",o.check_status));
			$("#contract_check_table").show();
			$("#contract_check_user").html(top.getUserNameByCode(o.check_user));
			$("#contract_check_time").html(top.getTimeStr(o.check_time,true));
		}else{
			$("#uploadFile").hide();
			$("#contract_check_table").hide();
            vo+="<tr class='tr_data'><td><input id='violation_bz' style='width:95%'/></td><td><input style='width:75%' id='violation_scale' class='checkNum'/></td><td><input id='violation_money' class='checkNum'/></td><td id='addPayVioRecord' class='opr'><img src='../../img/add.gif'  style='cursor:pointer;display:none;' title='添加' onclick='addPayVioRecord()'></td></tr>";
			$("#project_forfeit_List").html(vo); 
			//违款记录
			doCanclePayVio();
			$("#project_forfeit_List img").hide();
		}
		}
		$(".opr").hide();
		if(top.g_isPermit('project_contract_opr')){
	        $("#contractEditBt").show();
	    }else{
	        $("#contractEditBt").hide();
	    }
		//$("#contractEditBt").show();
		$("#project_contract_info  input").hide();
		$("#project_contract_info  textarea").hide();
		$("#project_contract_info  select").hide();
		//$("#contract_check_table .buttonDivTwo").hide();
		$("#project_contract_info span").show();
		if($("#project_forfeit_List tr").length>2){
			$("#project_forfeit_List").show();
			 $("#weiyueTitle").show();
		}else{
			$("#project_forfeit_List").hide();
			 $("#weiyueTitle").hide();
		}
		if($("#contract_id").val()==""){
		  $(".unitText").hide();
		}else{
		  $(".unitText").show();
		}
		if(top.g_isPermit("09_contract_check")){
		   $("#tdcontract_check").html(top.getCodeName("EXAMINE_STATUS",$("#check_status").val()));
		   //$("#contract_check_status").show();
		   $("#contract_check_memo").show();
		   $("#spancontract_check_memo").hide();
		   $("#contract_check_table .buttonDivTwo").show();
		   if(o.check_status!="0"){
		      $("#check_user_time").show();
		   }
		   if(o.check_status=="1"){
		     $("#contract_check_table .buttonDivTwo").show();
			 $("#contract_check_memo").hide();
		     $("#spancontract_check_memo").show();
		   }
		}else{
		   $("#tdcontract_check").html(top.getCodeName("EXAMINE_STATUS",$("#check_status").val()));
		   $("#contract_check_memo").hide();
		   $("#spancontract_check_memo").show();
		   $("#contract_check_table .buttonDivTwo").hide();
		}
	}
	
	//获取违款信息
	function getPayVioRecord(obj){
	    if(obj.status==true){
			top.showInfoWinOK(obj.msg);	
			var aoData=[];
			aoData.push({"name":"contract.contract_id","value":$("#contract_id").val()});
			aoData.push({"name":"contract.require_id","value":require_id});
			top.sendAjaxRequest("/actions/Contract.action?getPaymentViolationRcords",aoData,getPaymentViolationRecordsCallback);
		}else{
		    top.showInfoWinError(obj.msg);
		}
	}
	
	//刷新违款记录列表
	function getPaymentViolationRecordsCallback(obj){
	    var ht="<tr class='tr_data' height='25px'><td style='width:60%;'>罚责</td><td style='width:13%'>罚款比例(%)</td><td>罚金</td><td style='width:16%;' class='opr'>操作</td></tr>";
	    if(obj.status==true){
		   if(obj.body){
		   var paymentVioRecordList=obj.body.paymentVioRecordList;
			//获取付款信息及罚款信息
			if(paymentVioRecordList!=null&&paymentVioRecordList.length>0){
			   for(var i=0;i<paymentVioRecordList.length;i++){
			       ht+="<tr class='tr_data'><td>"+paymentVioRecordList[i].violation_bz+"</td><td>"+paymentVioRecordList[i].violation_scale+"%</td><td>"+parseFloat(paymentVioRecordList[i].violation_scale)*parseFloat($("#project_money").val())/100+"</td><td  class='opr'><img src='../../img/delete.gif' id='deleteVioRecord' style='cursor:pointer;' title='删除' onclick='deletePayVioRecord("+paymentVioRecordList[i].violation_id+")'></td></tr>";
			   }
			}
		 }
       }
		ht+="<tr class='tr_data'><td><input id='violation_bz' style='width:95%'/></td><td><input style='width:75%' id='violation_scale' class='checkNum'/></td><td><input style='width:95%' id='violation_money' class='checkNum'/></td><td id='addPayVioRecord' class='opr'><img src='../../img/add.gif'  style='cursor:pointer;' title='添加' onclick='addPayVioRecord()'></td></tr>";
		$("#project_forfeit_List").html(ht); 
		$("#project_forfeit_List input").hide();
	}
	
	//新增违款记录信息
	function addPayVioRecord(){
	   $("#addPayVioRecord").html("<img src='../../img/save.bmp'  style='cursor:pointer;' title='保存' onclick='savePayVioRecord()'>&nbsp;<img src='../../img/delete.gif'  style='cursor:pointer;' title='取消' onclick='doCanclePayVio()'>");
	   $("#project_forfeit_List input").show();
	}
	//保存违款记录信息
	function savePayVioRecord(){
	    if($("#contract_id").val()==''){top.showInfoWinWarn("请先保存合同信息，否则无法添加违款记录！");return;}
		if($("#violation_bz").val()==''){top.showInfoWinWarn("罚款规则不能为空，请填写罚款规则！");return;}
		if($("#violation_scale").val()==''){top.showInfoWinWarn("罚款比例不能为空，请填写罚款比例！");return;}
		if(isNaN($("#violation_scale").val())){top.showInfoWinWarn("罚款比例类型错误，请填写罚款比例！");return;}
		if($("#violation_scale").val()>100||$("#violation_scale").val()<=0){top.showInfoWinWarn("罚款比例应该属于0~100之间");return;}
		if($("#violation_money").val()==''){top.showInfoWinWarn("罚款金额不能为空，请填写罚款金额！");return;}
		if(isNaN($("#violation_money").val())){top.showInfoWinWarn("罚款金额类型错误，请填写罚款金额！");return;}
		
		var aoData=[];
		aoData.push({"name":"paymentVio.contract_id","value":$("#contract_id").val()});
		aoData.push({"name":"paymentVio.violation_bz","value":$("#violation_bz").val()});
		aoData.push({"name":"paymentVio.violation_scale","value":$("#violation_scale").val()});
		aoData.push({"name":"paymentVio.violation_money","value":$("#violation_money").val()});
		aoData.push({"name":"paymentVio.require_id","value":require_id});
		top.sendAjaxRequest("/actions/Contract.action?savePaymentVioRecord",aoData,getPayVioRecord);
	}
	
	//删除违款记录信息
	function deletePayVioRecord(id){
	     if(id!=""){
		   violation_id=id;
		   top.showConfirm("确定要删除付款记录信息吗?",doDeletePayVioRecord);
		}else{
		   top.showInfoWinWarn("请选择要删除的违款信息！");
		}
	}
	
	//执行删除违款信息
	function doDeletePayVioRecord(){
	     var aoData=[];
		 aoData.push({"name":"paymentVio.violation_id","value":violation_id});
		 top.sendAjaxRequest("/actions/Contract.action?deletePayVioRecord",aoData,getPayVioRecord);
	
	}
	
	//取消违款记录信息
	function doCanclePayVio(){
	  $("#addPayVioRecord").html("<img src='../../img/add.gif'  style='cursor:pointer;' title='添加' onclick='addPayVioRecord()'>");
	  $("#project_forfeit_List input").attr("value","");
	  $("#project_forfeit_List input").hide();
	}
	
	//工程合同款项付款申请
	function applyContractPay(type){
	   pay_type=type;
	   top.showConfirm("确定要申请付款吗？",doApplyContractPay);
	}
	
	function doApplyContractPay(){
	   var type="";
	   var money="";
	   switch(pay_type){
	      case "first":
		    type="10";//"首期款"
			money=$("#first_pay").val();
		    break;
		  case "second":
		    type="11";//"二期款"
			money=$("#second_pay").val();
		    break;
		  case "third":
		    type="13";//"三期款"
			money=$("#third_pay").val();
		    break;
		  case "final":
		    type="12";//"尾款"
			money=$("#final_pay").val();
		    break;
	   }
	   var aoData=[];
	   aoData.push({ "name":"contract.require_id","value":require_id});
	   aoData.push({ "name":"contract.contract_id","value":$("#contract_id").val()});
	   aoData.push({ "name":"moneyRcd.money_name","value":type});
	   aoData.push({"name":"moneyRcd.cust_code","value":cust_base_info_id});
	   aoData.push({"name":"moneyRcd.money_total","value":money});
	   top.sendAjaxRequest("/actions/Contract.action?applyContractPay",aoData,doApplyContractPayCallback);
	}
	
	function doApplyContractPayCallback(obj){
	   if(obj.status==true){
	      top.showInfoWinOK("申请成功！");
		  initProjecContractInfo();
		  cancleContract();
	   }else{
	      top.showWinInfoError("操作失败-->"+obj.msg);
	   }
	}
	
	//--工程合同操作end--
	
    //工程订单基本信息修改时页面数据格式状态
    function editProjectOrderInfo(){
	    //编辑按钮隐藏，保存和返回按钮显示
	    $("#projectEditBt").hide();
		$("#projectSaveBt").show();
		$("#projectCancleBt").show();
		$("#projectCancleBt").show();
		 if(top.getUserRole()=="programme_manager"){
			$("#tdproject_manage").html(top.getUserListByRole("project_manager","project_manager",false,project_manager));
			$("#tdengineer_manage").html(top.getUserListByRole("engineer_manager","engineer_manager",false,engineer_manager));
			$("#cust_project_tabs-0 table input").hide();
			$("#engineer_manager_pro").show();
			$("#engineer_manager_num").show();
			$("#engineer_manager_pho").show();
			$("#project_manager_pro").show();
			$("#project_manager_num").show();
			$("#project_manager_pho").show();
            $("#spanengineer_manager_pro").hide();
		    $("#spanengineer_manager_num").hide();
	        $("#spanengineer_manager_pho").hide();
		    $("#spanproject_manager_pro").hide();
	        $("#spanproject_manager_num").hide();
		    $("#spanproject_manager_pho").hide();			

		}else{
		//将数据处于编辑状态
	    $("#cust_project_tabs-0 table span").hide();
	    $("#cust_project_tabs-0 table input").show();
	    $("#cust_project_tabs-0 table select").show();
		$("#project_forfeit_List input").hide();
		$("#project_order_id").hide();
		$("#project_cust_manager").hide();
		$("#engineer_manager_pro").hide();
		$("#engineer_manager_num").hide();
		$("#engineer_manager_pho").hide();
		$("#project_manager_pro").hide();
		$("#project_manager_num").hide();
		$("#project_manager_pho").hide();
		//$("#project_designer").hide();
		$("#spanproject_contract_type").show();
		$("#spantz_apply_type").show();
		$("#spanproject_contract_type").html(top.getCodeSelectHtml("PROJECT_CONTRACT_TYPE","project_contract_type",true,project_contract_type));
		$("#spantz_apply_type").html(top.getCodeSelectHtml("TZ_APPLY_TYPE","tz_apply_type",true,tz_apply_type));
        $("#spanengineer_manager_pro").show();
		$("#spanengineer_manager_num").show();
	    $("#spanengineer_manager_pho").show();
		$("#spanproject_manager_pro").show();
	    $("#spanproject_manager_num").show();
		$("#spanproject_manager_pho").show();	
		
		$("#spancust_manager").text($("#view_cust_manager").text());
		$("#spandesigner").text($("#view_designer_code").text());
		
		//工程合同
		if(projectAgrFj_id==""){
		   $("#uploadFile a").text("上传");
		   $("#uploadFile a").attr("href","javascript:uploadProjectAgrFj();");
		}else{
		   $("#uploadFile a").text("下载");
		   $("#uploadFile a").attr("href",$("#uploadFile a").attr("path"));
		}
		
		//收款记录
		$("#project_process_list .delete").each(function(){
		      $(this).attr("href","javascript:deletePayRecord('"+$(this).attr("record_id")+"');");
		})
		$("#addPayRecord").attr("href","javascript:addPaymentRecord();");
		
		//违款记录
		$("#addPayVioRecord").attr("href","javascript:addPayVioRecord();");
		$("#project_forfeit_List .delete").each(function(){
		      $(this).attr("href","javascript:deletePayVioRecord('"+$(this).attr("violation_id")+"');");
		})
	   }
	}
	
	//保存工程订单基本信息
	function saveProjectOrderInfo(){
	  $("#projectEditBt").show();
	  $("#projectSaveBt").hide();
	  $("#projectCancleBt").hide();
	  
	  //保存信息
	  if(require_id==""){top.showInfoWinWarn("没有需求号，无法进行操作！");return;}
	  //??工程订单号
	  if($("#project_agreement_id").val()!=null&&$("#project_agreement_id").val().length<1){top.showInfoWinWarn("工程合同号不能为空，请填写工程合同号！");return ;}
	  var aoData=[];
	  aoData.push({"name":"projectOrder.project_agreement_id","value":$("#project_agreement_id").val()});
	  aoData.push({"name":"projectOrder.sign_date","value":top.toTimestamp($("#sign_date").val())});
	  aoData.push({"name":"projectOrder.cdbh","value":$("#cdbh").val()});
	  aoData.push({"name":"projectOrder.require_id","value":require_id});
	  aoData.push({"name":"projectOrder.cust_code","value":$("#view_cust_code").text()});
	  aoData.push({"name":"projectOrder.project_contract_type","value":$("#project_contract_type").val()});
	  aoData.push({"name":"projectOrder.project_dateline","value":$("#project_dateline").val()});
	  aoData.push({"name":"projectOrder.project_begin_date","value":top.toTimestamp($("#project_begin_date").val())});
	  aoData.push({"name":"projectOrder.project_end_date","value":top.toTimestamp($("#project_end_date").val())});
	  aoData.push({"name":"projectOrder.tz_apply_type","value":$("#tz_apply_type").val()});
	  aoData.push({"name":"projectOrder.project_money","value":$("#project_money").val()});
	  aoData.push({"name":"projectOrder.work_person","value":$("#work_person").val()});
	  aoData.push({"name":"projectOrder.work_person_professional","value":$("#work_person_professional").val()});
	  aoData.push({"name":"projectOrder.work_person_number","value":$("#work_person_number").val()});
	  aoData.push({"name":"projectOrder.work_person_phone","value":$("#work_person_phone").val()});
	  aoData.push({"name":"projectOrder.cust_manager","value":$("#project_cust_manager").val()});
	  aoData.push({"name":"projectOrder.designer","value":$("#project_designer").val()});
	  aoData.push({"name":"projectOrder.cust_manager_pro","value":$("#cust_manager_pro").val()});
	  aoData.push({"name":"projectOrder.cust_manager_num","value":$("#cust_manager_num").val()});
	  aoData.push({"name":"projectOrder.cust_manager_pho","value":$("#cust_manager_pho").val()});
	  aoData.push({"name":"projectOrder.designer_pro","value":$("#designer_pro").val()});
	  aoData.push({"name":"projectOrder.designer_num","value":$("#designer_num").val()});
	  aoData.push({"name":"projectOrder.designer_pho","value":$("#designer_pho").val()});
	  aoData.push({"name":"projectOrder.product_designer_pro","value":$("#product_designer_pro").val()});
	  aoData.push({"name":"projectOrder.product_designer_num","value":$("#product_designer_num").val()});
	  aoData.push({"name":"projectOrder.product_designer_pho","value":$("#product_designer_pho").val()});
	  aoData.push({"name":"projectOrder.product_designer","value":$("#product_designer").val()});
	  
	  

	  if($("#project_manager").is(":visible")){
	    project_manager=$("#project_manager").val();
		
	  }
	  if($("#engineer_manager").is(":visible")){
	    engineer_manager=$("#engineer_manager").val();
	  }
	  aoData.push({"name":"projectOrder.project_manager_pro","value":$("#project_manager_pro").val()});
	  aoData.push({"name":"projectOrder.project_manager_num","value":$("#project_manager_num").val()});
	  aoData.push({"name":"projectOrder.project_manager_pho","value":$("#project_manager_pho").val()});
	  aoData.push({"name":"projectOrder.engineer_manager_pro","value":$("#engineer_manager_pro").val()});
	  aoData.push({"name":"projectOrder.engineer_manager_num","value":$("#engineer_manager_num").val()});
	  aoData.push({"name":"projectOrder.engineer_manager_pho","value":$("#engineer_manager_pho").val()});
	  aoData.push({"name":"projectOrder.project_manager","value":project_manager});
	  aoData.push({"name":"projectOrder.engineer_manager","value":engineer_manager});
	  	  
	  var xurl="/actions/ProductOrder.action?saveProjectOrderInfo";
	  if($("#project_order_id").val()!=""){
	      aoData.push({"name":"projectOrder.project_order_id","value":$("#project_order_id").val()});
	      xurl="/actions/ProductOrder.action?editProjectOrderByRID";
	  }
	  top.sendAjaxRequest(xurl,aoData,saveProjectOrderCallBack);
	}
	
	//工程订单信息保存后回调函数
	function saveProjectOrderCallBack(obj){
	   if(obj.status==true){
		  revertStatus();
	   }else{
	      //alert(obj.msg);
	   }
	}
	
	function revertStatus(){
	   //编辑按钮隐藏，保存和返回按钮显示
	    $("#projectEditBt").show();
		$("#projectSaveBt").hide();
		$("#projectCancleBt").hide();
		//将数据处于不可编辑状态
	    $("#cust_project_tabs-0 table span").show();
	    $("#cust_project_tabs-0 table input").hide();
	    $("#cust_project_tabs-0 table select").hide();
		$("#spanproject_agreement_id").text($("#project_agreement_id").val());
		$("#spansign_date").text($("#sign_date").val());
		$("#spancdbh").text($("#cdbh").val());
		$("#spanproject_contract_type").text($("#project_contract_type option:selected").text());
		$("#spanproject_dateline").text($("#project_dateline").val());
		$("#spanproject_begin_date").text($("#project_begin_date").val());
		$("#spanproject_end_date").text($("#project_end_date").val());
		$("#spantz_apply_type").text($("#tz_apply_type option:selected").text());
		$("#spanwork_person").text($("#work_person").val());
		$("#spanwork_person_professional").text($("#work_person_professional").val());
		$("#spanwork_person_number").text($("#work_person_number").val());
		$("#spanwork_person_phone").text($("#work_person_phone").val())	
		$("#tdproject_manage").text($("#project_manager option:selected").text());
		$("#tdengineer_manage").text($("#engineer_manager option:selected").text());
		$("#spanproduct_designer").text($("#product_designer").val());
	
        $("#spancust_manager_pro").text($("#cust_manager_pro").val());
		$("#spancust_manager_num").text($("#cust_manager_num").val());
		$("#spancust_manager_pho").text($("#cust_manager_pho").val());	
		$("#spandesigner_pro").text($("#designer_pro").val());
		$("#spandesigner_num").text($("#designer_num").val());
		$("#spandesigner_pho").text($("#designer_pho").val());
		$("#spanproduct_designer_pro").text($("#product_designer_pro").val());
		$("#spanproduct_designer_num").text($("#product_designer_num").val());
		$("#spanproduct_designer_pho").text($("#product_designer_pho").val());
		$("#spanengineer_manager_pro").text($("#engineer_manager_pro").val());
		$("#spanengineer_manager_num").text($("#engineer_manager_num").val());
		$("#spanengineer_manager_pho").text($("#engineer_manager_pho").val());
	    $("#spanproject_manager_pro").text($("#project_manager_pro").val());
		$("#spanproject_manager_num").text($("#project_manager_num").val());
		$("#spanproject_manager_pho").text($("#project_manager_pho").val());

		//工程合同
		if(projectAgrFj_id==""){
		   $("#uploadFile a").text("上传");
		   $("#uploadFile a").attr("href","javascript:void(0);");
		}else{
		   $("#uploadFile a").text("下载");
		   $("#uploadFile a").attr("href",$("#uploadFile a").attr("path"));
		}
		
        //付款信息中的新增及删除状态
		$(".delete").each(function(){
		      $(this).attr("href","javascript:void(0);");
		})
		$("#addPayRecord").attr("href","javascript:void(0);");		
	
	    //违款信息中的新增及删除状态
		$("#addPayVioRecord").attr("href","javascript:void(0);");
		$("#project_forfeit_List .delete").each(function(){
		      $(this).attr("href","javascript:void(0);");
		})
	}
	
	

	function doOtherFocus(){
		if(other_focus){
			$("#span_other_focus").hide();
			other_focus=false;
			$("#other_focus").val("");
		}else{
			$("#span_other_focus").show();
			other_focus=true;
			//$("#other_focus").val("");
		}
	}
	function doOtherRequireStyle(){
		if(otherRequireStyle){
			$("#span_other_require_style").hide();
			otherRequireStyle=false;
			$("#other_require_style").val("");
		}else{
			$("#span_other_require_style").show();
			otherRequireStyle=true;
			//$("#other_require_style").val("");
		}
	}
	
	function doOtherFunctionRequire(){
		if(otherFunctionRequire){
			$("#span_function_require").hide();
			otherFunctionRequire=false;
			$("#other_function_require").val("");
		}else{
			$("#span_function_require").show();
			otherFunctionRequire=true;
			//$("#other_function_require").val("");
		}
	}
	//客情分析中客户有可能丢失的原因选择其他时原因文本框的显示控制
	function doOtherCustLostReason(){
		if(other_cust_lost_reason){
			$("#span_other_cust_lost_reason").hide();
			other_cust_lost_reason=false;
			$("#other_cust_lost_reason").val("");
			$("#other_cust_lost_reason").hide();
		}else{
			$("#span_other_cust_lost_reason").show();
			other_cust_lost_reason=true;
			$("#other_cust_lost_reason").val("");
			$("#other_cust_lost_reason").show();
		}
	}
	function fromTypeChange(){

		if($("#from_type").val()=="05"){
			$("#spanOtherFromType").show();
			$("#spanMarketUser").hide();
			$("#market_user").val("");
		}else if($("#from_type").val()=="04"){
		    $("#spanMarketUser").show();
			$("#spanOtherFromType").hide();
			$("#other_from_type").val("");
		}else{
			$("#spanOtherFromType").hide();
			$("#spanMarketUser").hide();
			$("#market_user").val("");
			$("#other_from_type").val("");
		}
	}
	function cust_satiChange(num){
	if(num==0){
		if($("#cust_sati").val()=="02"){
			$("#tdunsati_reason").show();
		}else{
			$("#tdunsati_reason").hide();
			$("#unsati_reason").val('');
		}
	}else{
		if($("#cust_sati"+num).val()=="02"){
			$("#tdunsati_reason"+num).show();
		}else{
			$("#tdunsati_reason"+num).hide();
			$("#unsati_reason"+num).val('');
		}
	}
	}
	
	function selectMessage(id){
	sms_id = id;
	var xurl="/pages/pro09/smsSelect.html";
	 top.openSelectDialog("选择短信模板",xurl,800,500,selectMessageCallBack);
	}
	
	function selectMessageCallBack(obj){
	   try{
         var obj = top.getTempValue();
		 var message=obj.sms_content.replace("${CUST_NAME}",$("#top_cust_name").html());
         document.getElementById(sms_id).value = message;
       }catch(e){
       }
	}
	
 
	//初始化复选框
	function initCheckedValue(boxes,values) {
		if ( !values ) return ;
	    if (!boxes) return;
	    if ( values == null || values == '' ) return ;
		for (var i = 0; i < boxes.length; i++) {
			if ( values.indexOf(boxes[i].value) != -1 || values.indexOf(","+boxes[i].value) != -1 ) {
				boxes[i].checked = true;
			}
        }
	}
	//其他行业的changge事件
	function onchangeCustJob(){
	   if ($("#cust_job").val()==99) {
		 $("#cust_job_else").show();
		 $("#cust_job_else").val('');
		 //$("#cust_job_else").attr("disabled",false);
	   } else {
		 $("#cust_job_else").hide();
	     //$("#cust_job_else").attr("disabled",true);
	   }
	}
	//房型的change事件
	function onchangeRoomType(){
	  if ($("#callback_time").val()==99) {
		 $("#room_type_else").show();
	  } else {
	    $("#room_type_else").hide();
	   }
	}
	//客情分析取消按钮
	function doCancelCustAnalyze(){
		$("#div_cust_analysis textarea").hide();
		$("#div_cust_analysis span").show();
		$("#div_cust_analysis select").hide();
		//$("#div_cust_analysis input[type='checkbox']").attr("disabled","disabled");
		$("#div_cust_analysis input[type='text']").hide();
		$("#baseSaveBt").hide();
		$("#baseReturnBt").hide();
		$("#baseEditBt").show();
		$(".edit").hide();
		$("#span_cust_focus").show();
		$("#cust_lose_reason").show();
		$("#cust_choose_property").show();
		$("#design_general").parent().show();
		$("#material_general").parent().show();
	}

	//---------------common----------
	function openDialog(t,xurl,isModal,w,h,callback){
		if ( isModal == undefined ) isModal=true;
		if ( !h ) h=200;
		if ( !w ) w=400;
		$( "#dialog" ).dialog({
			title: t,
			height: h,
			width: w,
			modal: isModal,
			resizable: false,
		    beforeClose: function(event, ui) {
		        try{
		            document.getElementById("self_iframe").contentWindow.doBeforeClose();
		            if ( callback ) callback.apply();
		        }catch(e){
		        }
		        return true;
		    }
		});
		document.getElementById("self_iframe").src = xurl;
    }
	function closeDialog(){
		$( "#dialog" ).dialog( "close" );
	}
	//上传文件
	function uploadSalesMeasureFile(num){
	    file_id = num;
		var xurl="../uploadFile.html?belong_id0="+require_id+"&belong_id="+require_id+"&belong_type=3";
		//var xurl="../uploadFile.html?belong_id="+$("#next_id"+num).val()+"&belong_type="+belong_type;
		openDialog("上传文件",xurl,true,600,230,saveSalesMeasureFileCallBack);
	}
	//保存销售文件策略
	function saveSalesMeasureFileCallBack(){
		try{
			var obj = top.getTempValue();
			if(obj.isSaveOK) {
				 var name = fixFilename(obj.filePath);
			     var ht="";
				 ht+='&nbsp;&nbsp;<a style="cursor:pointer;color:blue;" href="'+top.getUrlBase()+'/download?filePath='+obj.filePath+'+"&fileName="'+name+'">'+name+'</a>';
				 $("#lab_file_path"+file_id).html(ht); 
				 $("#view_file_path"+file_id).html(ht);
				 $("#file_path"+file_id).val(obj.filePath);
			}
		}catch(e){}
	}
	function fixFilename(fp){
     if ( !fp ) return "";
	 var n=fp.indexOf("_");
	 if ( n != -1 ) {
	   return fp.substring(n+2);
	 }
	 return fp;
   }
	
	//doQuery---上传文件
	function doQueryFileList(){
		fileListTable.fnDraw();
		view_fileListTable.fnDraw();
	}
	
	// 关闭当前页面前，页面框架自动调用的函数
	function doBeforeClose(){
     var obj={
              "isSaveOK":isSaveOK
            };
     top.setTempValue(obj);
	 optType="";
	 if(is_reload){
		top.openCustDetailPage(cust_base_info_id,"0-0","query","客户详细信息");
	 }
   }
	//取消按钮，控制窗口关闭
	function doCancel(){
		if(optType=="regist"){
			try{
				window.parent.custRegistOkey();
			  }catch(e){}
		}else{
			 top.closeDialog();
		}
	}
	function getCustManager(){
		return $("#cust_manager").val();
	}
	
	//查询所有上传的附件
	function selectAllUploadDoc(){
		var surl=top.getUrlBase()+"/actions/File.action?getFileInfoList";
		docListTable = $('#docPathList').dataTable( {
					"bProcessing": false,
					"bServerSide": true,
					"bJQueryUI": true,
					"bFilter": false,
					"bDestroy": true,
					"bLengthChange": true,
					"iDisplayLength":5,
					"sAjaxSource": surl,
					"oLanguage": {
					  "sUrl": top.getUrlBase()+"/lang_zh.txt"
				  },
				  "fnServerData": function ( sUrl, aoData, fnCallback ) {
						$.ajax( {
							"url":  sUrl,
							"data": aoData,
							"contentType" : "application/x-www-form-urlencoded; charset=utf-8",
							"success": function (json) {
								fnCallback( json );
							},
							"dataType": "json",
							"cache": false,
							"type": "POST",
							"error": function (xhr, error, thrown) {
								top.showInfoWinError("发生异常:"+error);
							}
						} );
					},
					"fnServerParams": function ( aoData ) {
							aoData.push( { "name": "fileinfo.belong_id0", "value": require_id} );
			        },
			      "sDom": "frtip",
				  "sPaginationType": "full_numbers",
					"aoColumns": [
							{"sTitle": "所属模块", "mDataProp": "belong_type", "sWidth": "13%","sClass": "center",
							"fnRender": function ( oObj ) {
                                          return top.getCodeName("BELONGTYPE",oObj.aData.belong_type);
                            },
							"bUseRendered": false },
			                {"sTitle": "文件名称", "mDataProp": "file_name", "sWidth": "22%","sClass": "left", "bUseRendered": false },
			                {"sTitle": "上传人","mDataProp": "upload_user", "sWidth": "10%","sClass": "center",
								 "fnRender": function ( oObj ) {
                                          return top.getUserNameByCode(oObj.aData.upload_user );
                            },
							  "bUseRendered": false },
							{"sTitle": "上传时间","mDataProp": "upload_time", "sWidth": "18%", "sClass": "center",
								    "fnRender": function ( oObj ) {
                                           return top.getTimeStr(oObj.aData.upload_time ,false);
                            },
							 "bUseRendered": false},
							{"sTitle": "来源","mDataProp": "file_source", "sWidth": "10%", "sClass": "center",
								    "fnRender": function ( oObj ) {
                                           return top.getCodeName("FILESOURCE",oObj.aData.file_source);
                            },
							 "bUseRendered": false},
							{ "sTitle": "操作", "mDataProp": "file_name", "sWidth": "22%","sClass": "center",
								"fnRender": function ( oObj ) {
								        var ht='<a href="'+top.getUrlBase()+'/download?filePath='+oObj.aData.file_path+'+"&fileName="'+oObj.aData.file_name+'"><img src="../../img/down.png" style="cursor:pointer;" title="下载" /></a>';
								        if ( oObj.aData.file_source != '01' ) {
										  ht+='&nbsp;<a onclick="deleteDoc(\''+oObj.aData.file_id+'\')"><img src="../../img/delete.gif" style="cursor:pointer;padding-right:5px" title="删除" /></a>';
										}
										if(top.isCanPreview(oObj.aData.file_name)){
											ht+='&nbsp;<a href=\'javascript:void(0)\' onclick="previewFile(\''+oObj.aData.file_path+'\',\''+oObj.aData.file_name+'\')"><img src="../../img/preView.jpg" style="cursor:pointer;padding-right:5px;width:20px;" title="预览"/></a>';
										}
										return ht;
									 },
									"bUseRendered": false 
							}
							 
                      ]
				} );
		
   }
     	//预览
	function previewFile(filePath,fileName){
		var xurl="/pages/openFile.html?filePath="+filePath+"&fileName="+fileName;
		top.openDialog("文件预览",xurl,true,700,600,null);
	}
	function uploadDoc(){
		var xurl="../uploadMultiFile.html?belong_id0="+require_id+"&belong_id="+require_id+"&file_source=1";
		openDialog("上传文件",xurl,true,700,330,doQueryDocList);
	}
	function deleteDoc(del_file_id){
		if(!del_file_id)  return;
		file_id=del_file_id
		top.showConfirm("确定删除该文档吗？", doDeleteDoc);
	}
	function doDeleteDoc(){
		 var aoData=[];
		   aoData.push( { "name": "fileinfo.file_id", "value":file_id } );
	       top.sendAjaxRequest("/actions/File.action?deleteFile",aoData,delCallback);
		   file_id='';
	}
	function delCallback(obj){
       try{
        if ( obj.status == true ){
            isSaveOK = true;
            top.showInfoWinOK("操作成功");
			doQueryDocList();
        }else{
            isSaveOK = false;
            top.showInfoWinError("操作失败 "+obj.msg);
        }
       }catch(e){
          top.showInfoWinError("处理异常:"+e.message);
       }
   }
//doQuery---上传文件
	function doQueryDocList(){
		docListTable.fnDraw();
	}
	function addPayRcd(){
		var xurl="ensureMoneyPay.html?optType=insert&require_id="+require_id+"&cust_code="+cust_base_info_id+"&project_order_id"+cust_project_info_id;
		openDialog("添加收款项",xurl,true,700,330,getMoneyRecordList);
	}
	function doPay(moneyIndex){
		var xurl="ensureMoneyPay.html?optType=pay&require_id="+require_id+"&require_manager="+$("#designer_code").val()+"&cust_manager="+$("#cust_manager").val()+"&cust_name="+$("#cust_name").val()+"&record_id="+moneyIndex;
		openDialog("收款确认",xurl,true,700,330,getMoneyRecordList);
	}
	function abandonPay(moneyIndex,money_name,type,contract_id){
		curMoneyRcd=moneyIndex;
		pay_money_name=money_name;
		contract_type=type;
		pay_contract_id=contract_id;
		top.showConfirm("您确定作废该收款记录吗？", doAbandonPay);
	}
	function doAbandonPay(){
		var aoData=[];
		aoData.push({"name":"moneyRcd.record_id","value":curMoneyRcd});
		aoData.push({"name":"moneyRcd.money_name","value":pay_money_name});
		aoData.push({"name":"moneyRcd.contract_type","value":contract_type});
		aoData.push({"name":"moneyRcd.contract_id","value":pay_contract_id});
		top.sendAjaxRequest("/actions/Payment.action?deleteMoneyRcdById",aoData,applyPayCallBack);
	}
	
	//申请付款
	function applyPay(record_id,item_id,contract_type,money_name){
		var aoData=[];
	    aoData.push({"name":"moneyRcd.record_id","value":record_id});
	    aoData.push({"name":"moneyRcd.item_id","value":item_id});
	    aoData.push({"name":"moneyRcd.contract_type","value":contract_type});
	    aoData.push({"name":"moneyRcd.cust_code","value":cust_base_info_id});
	    aoData.push({"name":"moneyRcd.money_name","value":money_name});
	    top.sendAjaxRequest("/actions/Payment.action?updateMoneyApplyPayDate",aoData,applyPayCallBack);
	}
	function applyPayCallBack(obj){
		try{
			if ( obj.status == true ){
				top.showInfoWinOK("操作成功!");
				getMoneyRecordList();
			}else{
				isSaveOK = false;
				top.showInfoWinError("操作失败 "+obj.msg);
			}
		}catch(e){
			 top.showInfoWinError("处理异常:"+e.message);
		}
	}
	//账户充值
	function getBankInfo(){
	   var aoData=[];
	   aoData.push({"name":"custBank.cust_code","value":cust_base_info_id});
	   top.sendAjaxRequest("/actions/Payment.action?getCustBankByCustCode",aoData,getBankInfoCallBack);
	
	}
	function getBankInfoCallBack(obj){
		if(obj.status){
			var myBank=obj.body;
			$("#bank_total_money").html(myBank.total_money);
			$("#money_spent").html(myBank.money_spent);
			$("#money_remain").html(myBank.total_money-myBank.money_spent);
			$("#bank_id").val(myBank.id);
		}
	}
	function showMoneyRecharge(){
		$("#moneyRecharge").toggle();
	}
	//充值
	function saveMoneyRecharge(){
	    var msg='';
	    if($("#money_value").val().substring(0,1)=="-"){
		   msg+="[充值金额]应为0~999999999之间的数字类型<br/>";
		   $("#money_value").val('0');
		}

		if ( $("#money_value").val() != '' && (!IsFloat( $("#money_value").val()) || $("#money_value").val()>999999999 )) {
			msg += "[充值金额]应为0~999999999之间的数字类型<br/>";
			$("#money_value").val('0');
		}
		if ( msg != '' ) {
			top.showInfoWinWarn(msg);
			return ;
		}
	  var aoData=[];
	  var total=parseInt($("#bank_total_money").html())+parseInt($("#money_value").val());
	   aoData.push({"name":"custBank.id","value":$("#bank_id").val()});
	   aoData.push({"name":"custBank.total_money","value":total});
	   aoData.push({"name":"custBank.cust_code","value":cust_base_info_id});
	   aoData.push({"name":"charge_money","value":$("#money_value").val()});
	   top.sendAjaxRequest("/actions/Payment.action?updateCustBankMoneyTotal",aoData,saveMoneyRechargeCallBack);
	}
	function saveMoneyRechargeCallBack(obj){
		try{
			if ( obj.status == true ){
				isSaveOK = true;
				top.showInfoWinOK("充值成功!");
				showMoneyRecharge();
				getBankInfo();
			}else{
				isSaveOK = false;
				top.showInfoWinError("操作失败 "+obj.msg);
			}
		}catch(e){
			 top.showInfoWinError("处理异常:"+e.message);
		}
	}
	function getMoneyRecordList(){
	   var aoData=[];
	   aoData.push({"name":"moneyRcd.cust_code","value":cust_base_info_id});
	   aoData.push({"name":"moneyRcd.status","value":'22'});//查询状态不是已付款的记录
	   aoData.push({"name":"orderName","value":'contract_id'});
	   top.sendAjaxRequest("/actions/Payment.action?getMoneyRcdList",aoData,queryMoneyRecordListCallBack);
	}
	function queryMoneyRecordListCallBack(obj){
		if(obj){
			var list=obj.aaData;
			var ht="<tr class='tr_data'><td>收款类型</td><td>编号/单号</td><td>款项名称</td><td>应收金额</td><td>申请收款时间</td><td>操作</td></tr>";
			//var contract_type="";
			if(list!=null&&list.length>0){
				//contract_type=list[i].contract_type;
				for(var i=0;i<list.length;i++){
					//if(contract_type!=list[i].contract_type)
					ht+='<tr class="tr_data">';
					ht+='<td><input type="hidden" value="'+list[i].record_id+'"></input>'+top.getCodeName("PAY_TYPE",list[i].contract_type)+'</td>';
					ht+='<td>'+list[i].contract_id+'</td>';
					ht+='<td>'+top.getCodeName("MONEYNAME",list[i].money_name)+'</td>';
					ht+='<td>'+list[i].money_total+'</td>';
					ht+='<td>'+top.getTimeStr(list[i].apply_pay_date,false)+'</td>';
					if(list[i].status=='1'){
						if(top.g_isPermit('09_money_ensure')){
							ht+='<td><a href="javascript:void(0)" onclick="doPay(\''+list[i].record_id+'\')">确认收款</a>';
							ht+='&nbsp;&nbsp;<a href="javascript:void(0)" onclick="abandonPay(\''+list[i].record_id+'\',\''+list[i].money_name+'\',\''+list[i].contract_type+'\',\''+list[i].contract_id+'\')">作废</a></td>';
						}else{
							ht+='<td>处理中</td>';
						}
					}else{
						ht+='<td><a href="javascript:void(0)" onclick="applyPay(\''+list[i].record_id+'\',\''+list[i].item_id+'\',\''+list[i].contract_type+'\',\''+list[i].money_name+'\')">申请收款</a></td>';
					}
					ht+='</tr>';
				}
			}else{
				ht+='<tr class="tr_data"><td colspan="6">暂无数据</td></tr>';
			}
		}
		$("#tableMoneyInfo").html(ht);
		getMoneyHistoryRecordList();
	}
	//查询所有交款 记录
	function getMoneyHistoryRecordList(){
		var aoData=[];
		var xurl=top.getUrlBase()+"/actions/Payment.action?getMoneyRcdList";
		aoData.push( { "name": "moneyRcd.cust_code", "value":cust_base_info_id } );
		aoData.push( { "name": "moneyRcd.status", "value":"2" } );//已交款
		top.sendAjaxRequest(xurl,aoData,getMoneyHistoryRecordListCallBack);
	}
	//按照 工程交款、产品交款、设计交款、定金交款显示交款信息
	function getMoneyHistoryRecordListCallBack(obj){
		var list=obj.aaData;
		var designHt='<tr class="tr_data">';
		designHt+='<td>日期</td>';
		designHt+='<td>款项名称</td>';
		designHt+='<td>应收金额</td>';
		designHt+='<td>现金支付</td>';
		designHt+='<td>余额支付</td>';
		designHt+='<td>其他支付</td>';
		designHt+='<td>操作人</td>';
		designHt+='<td>操作</td>';
		designHt+='</tr>';
		var nullHt=designHt+'<tr class="tr_data"><td colspan="8" align="center">暂无记录</td></tr>';
		var projectHt=designHt;//工程款记录
		var productHt=designHt;//产品记录
		var settleHt=designHt;//结算记录
		var curContractType='';
		var project_sum=0;
		var product_sum=0;
		var design_sum=0; 
		var settle_sum=0;
		var commonHt='';
		var project_money_total=$("#project_money").val();
		for(var i=0;i<list.length;i++){
			commonHt='';
			commonHt+='<tr class="tr_data">';
			commonHt+='<td>'+top.getTimeStr(list[i].money_time,true)+'</td>';
			commonHt+='<td>'+top.getCodeName("MONEYNAME",list[i].money_name)+'</td>';
			commonHt+='<td>'+list[i].money_total+'</td>';
			commonHt+='<td>'+list[i].money_paper+'</td>';
			commonHt+='<td>'+list[i].money_remain+'</td>';
			commonHt+='<td>'+list[i].money_other+'</td>';
			commonHt+='<td>'+top.getUserNameByCode(list[i].money_user)+'</td>';
			commonHt+='<td><a href="javascript:void(0)" onclick="printReceipt(\''+list[i].record_id+'\')">打印收款单</a></td>';
			commonHt+='</tr>';
			if(list[i].contract_type=='0'){//定金收款
				if(list[i].money_name=='0'){//设计
					designHt+=commonHt;
					design_sum+=list[i].money_total;
				}else if(list[i].money_name=='1'){//工程
					projectHt+=commonHt;
					project_sum+=list[i].money_total;
				}
			}else if(list[i].contract_type=='1'){//工程收款
				projectHt+=commonHt;
				project_sum+=list[i].money_total;
			}else if(list[i].contract_type=='2'){//产品收款
				productHt+=commonHt;
				product_sum+=list[i].money_total;
			}else if(list[i].contract_type=='3'){//结算款
				settleHt+=commonHt;
				settle_sum+=list[i].money_total;
			}else if(list[i].contract_type=='4'){//设计收款
				designHt+=commonHt;
				design_sum+=list[i].money_total;
			}
		}//显示信息到页面
		if(settle_sum&&settle_sum!=0){
			$("#settle_money_record_table").html(settleHt);
			$("#settle_money_sum").html(settle_sum);
		}else{
			$("#settle_money_record_table").html(nullHt);
		}
		if(design_sum&&design_sum!=0){
			$("#design_money_record_table").html(designHt);
			$("#design_money_sum").html(design_sum);
		}else{
			$("#design_money_record_table").html(nullHt);
		}
		if(product_sum&&product_sum!=0){
			$("#product_money_record_table").html(productHt);
			$("#product_money_sum").html(product_sum);
		}else{
			$("#product_money_record_table").html(nullHt);
		}
		if(project_sum&&project_sum!=0){
			$("#project_money_record_table").html(projectHt);
			$("#project_money_sum").html(project_sum);
			$("#project_money_total").html(project_money_total);
			if(project_money_total&&project_money_total!=0){
				var project_money_scale=Math.floor(project_sum/project_money_total * 10000) / 100;
				$("#project_money_scale").html(project_money_scale);
			}
		}else{
			$("#project_money_record_table").html(nullHt);
		}
	}
	//打印收款单
	function printReceipt(record_id){
		var xurl="pages/pro09/receiptInfo.html?id="+record_id;
		top.openSelectDialog("打印",xurl,700,300,null);
	}
	//工程合同附件上传
	function uploadProjectAgrFj(){
	    var xurl="../uploadFile.html?belong_id0="+require_id+"&belong_id="+$("#contract_id").val()+"&belong_type=6";
		openDialog("上传文件",xurl,true,600,230,saveProjectAgrFjCallBack);
	}
	
	//工程合同附件上传成功后将其附件信息显示
	function saveProjectAgrFjCallBack(){
	      var aoData=[];
		  aoData.push({"name":"fileinfo.belong_id0","value":require_id});
		  aoData.push({"name":"fileinfo.belong_id","value":$("#contract_id").val()});
		  aoData.push({"name":"fileinfo.belong_type","value":6});
		  top.sendAjaxRequest("/actions/Contract.action?getProjectAgrFj",aoData,getProjectAgrFjCallBack);
	}
	
	//工程合同附件上传成功后可下载其附件信息进行查看
	function getProjectAgrFjCallBack(obj){
	   if(obj.status==true){
	      var o=obj.body;  
		  projectAgrFj_id=o.file_id;
          var path=top.getUrlBase()+"/download?filePath='"+o.file_path+"'&fileName='"+o.file_name+"'";		  
		  $("#uploadFile a").attr("href",path);
		  $("#uploadFile a").text("下载");
	   }else{
	      top.showInfoWinError(obj.msg);
	   }
	}
	//更新客户状态
	function updateCustStatus(status){
		if(status==cust_status){
			return true;
		}
		if(status>cust_status){
			cust_status=status;
			$("#view_cust_status").html(top.getCodeName("CUST_STATUS",cust_status));
			$("#span_cust_status").html( top.getCodeName("CUST_STATUS",cust_status) );
			$("#top_cust_status").html( top.getCodeName("CUST_STATUS",cust_status) );
			toggleMenuBt();
			return true;
		}else if(status=='3'&&cust_status=='4'){
			cust_status=status;
			$("#view_cust_status").html(top.getCodeName("CUST_STATUS",cust_status));
			$("#span_cust_status").html( top.getCodeName("CUST_STATUS",cust_status) );
			$("#top_cust_status").html( top.getCodeName("CUST_STATUS",cust_status) );
			toggleMenuBt();
			return true;
		}
		return false;
	}
	//打开废单申请页面
	function disableCust(){
		var xurl="disableCustRecordInfo.html?require_id="+require_id+"&cust_code="+cust_base_info_id;
		openDialog("客户废单申请",xurl,true,600,280,disableCustCallBack);
	}
	//废单申请回调函数
	function disableCustCallBack(){
		var obj=top.getTempValue();
		if(obj.isSaveOK==true){
			$("#disableCustBT").hide();
			$("#divDisCustInfo").show();
			$("#view_divDisCustInfo").show();
			//$("#displayContent").css("height",($(window).height()-250)+"px");
			if(top.g_isPermit("09_examine_cust_disable")){
				$("#tr_custdisable_examine_suggest").show();
				//$("#tr_custdisable_examine_info").show();
				$("#tr_custdisable_examine_bt").show(); 
				
				$("#view_tr_custdisable_examine_suggest").hide();
				$("#view_tr_custdisable_examine_bt").hide(); 
				//$("#tr_custdisable_examine_info").show();
			}else{
				$("#tr_custdisable_examine_suggest").hide();
				$("#tr_custdisable_examine_info").hide();
				$("#tr_custdisable_examine_bt").hide();
				$("#view_tr_custdisable_examine_suggest").hide();				
				$("#view_tr_custdisable_examine_bt").hide(); 
			}
			var aoData=[];
			aoData.push({"name":"disableCustRecord.require_id","value":require_id});
			top.sendAjaxRequest("/actions/CustInfo.action?getDisableCustRecordById",aoData,getDisableCustInfoCallback);
		}
	}
	//查询废单信息回调函数
	function getDisableCustInfoCallback(obj){
		if(obj.status==true){
			$("#disable_reason").html(obj.body.disable_reason);
			$("#disable_type").html(top.getCodeName("DISABLE_TYPE",obj.body.disable_type));
			$("#disCust_opt_person").html(top.getUserNameByCode(obj.body.opt_person));
			$("#disCust_opt_person_hd").val(obj.body.opt_person);
			$("#disCust_examine_status_hd").val(obj.body.examine_status);
			$("#disCust_examine_status").html(top.getCodeName("EXAMINE_STATUS",obj.body.examine_status));
			$("#disCust_id").val(obj.body.id);
			$("#disCust_remind_id").val(obj.body.remind_id);
			$("#disCust_opt_time").html(top.getTimeStr(obj.body.opt_time,true));
			
			$("#view_disable_reason").html(obj.body.disable_reason);
			$("#view_disable_type").html(top.getCodeName("DISABLE_TYPE",obj.body.disable_type));
			$("#view_disCust_opt_person").html(top.getUserNameByCode(obj.body.opt_person));
			$("#view_disCust_examine_status").html(top.getCodeName("EXAMINE_STATUS",obj.body.examine_status));
			$("#view_disCust_opt_time").html(top.getTimeStr(obj.body.opt_time,true));
		}
	}
	//客户废单审核
	function examineDisableCust(examine_status){
		var aoData=[];
		aoData.push({"name":"disableCustRecord.id","value":$("#disCust_id").val()});
		aoData.push({"name":"disableCustRecord.remind_id","value":$("#disCust_remind_id").val()});
		aoData.push({"name":"disableCustRecord.require_id","value":require_id});
		aoData.push({"name":"disableCustRecord.cust_code","value":cust_base_info_id});
		aoData.push({"name":"disableCustRecord.opt_person","value":$("#disCust_opt_person_hd").val()});
		aoData.push({"name":"disableCustRecord.examine_suggest","value":$("#disCust_examine_suggest").val()});
		aoData.push({"name":"disableCustRecord.examine_status","value":examine_status});
		
		$("#disCust_examine_status_hd").val(examine_status);
		top.sendAjaxRequest("/actions/CustInfo.action?examineDisableCustRecord",aoData,optDisableCustCallBack);
				
	}
	function optDisableCustCallBack(obj){
		try{
			if ( obj.status == true ){
			
				top.showInfoWinOK("opt操作成功");
				var now=new Date();
				$("#disCust_examine_time").html(top.getTimeStr(now.getTime(),true));
				$("#disCust_examine_person").html(top.getCurrentUser().userName);
				$("#disCust_examine_status").html(top.getCodeName("EXAMINE_STATUS",$("#disCust_examine_status_hd").val()));
				$("#td_disCust_examine_suggest").html($("#disCust_examine_suggest").val());
				$("#tr_custdisable_examine_suggest").show();
				$("#tr_custdisable_examine_info").show();
				$("#tr_custdisable_examine_bt").hide(); 
				$("#view_tr_custdisable_examine_bt").hide(); 
				
				$("#view_disCust_examine_time").html(top.getTimeStr(now.getTime(),true));
				$("#view_disCust_examine_person").html(top.getCurrentUser().userName);
				$("#view_disCust_examine_status").html(top.getCodeName("EXAMINE_STATUS",$("#disCust_examine_status_hd").val()));
				$("#view_td_disCust_examine_suggest").html($("#td_disCust_examine_suggest").html());
				$("#view_tr_custdisable_examine_suggest").show();
				$("#view_tr_custdisable_examine_info").show();
			}else{
				top.showInfoWinError("操作失败 "+obj.msg);
			}
		}catch(e){
			 top.showInfoWinError("处理异常:"+e.message);
		}
	}
	
	//客户废单审核视图
	function viewExamineDisableCust(examine_status){
		var aoData=[];
		aoData.push({"name":"disableCustRecord.id","value":$("#disCust_id").val()});
		aoData.push({"name":"disableCustRecord.remind_id","value":$("#disCust_remind_id").val()});
		aoData.push({"name":"disableCustRecord.require_id","value":require_id});
		aoData.push({"name":"disableCustRecord.cust_code","value":cust_base_info_id});
		aoData.push({"name":"disableCustRecord.opt_person","value":$("#disCust_opt_person_hd").val()});
		aoData.push({"name":"disableCustRecord.examine_suggest","value":$("#view_disCust_examine_suggest").val()});
		aoData.push({"name":"disableCustRecord.examine_status","value":examine_status});
		
		$("#disCust_examine_status_hd").val(examine_status);
		top.sendAjaxRequest("/actions/CustInfo.action?examineDisableCustRecord",aoData,viewOptDisableCustCallBack);
				
	}
	//客户废单审核回调函数
	function viewOptDisableCustCallBack(obj){
		try{
			if ( obj.status == true ){
				top.showInfoWinOK("操作成功");
				var now=new Date();
				/*$("#disCust_examine_time").html(top.getTimeStr(now.getTime(),true));
				$("#disCust_examine_person").html(top.getCurrentUser().userName);
				$("#disCust_examine_status").html(top.getCodeName("EXAMINE_STATUS",$("#disCust_examine_status_hd").val()));
				$("#td_disCust_examine_suggest").html($("#view_disCust_examine_suggest").val());
				$("#tr_custdisable_examine_suggest").show();
				$("#tr_custdisable_examine_info").show();
				$("#tr_custdisable_examine_bt").hide(); */
				
				$("#view_disCust_examine_time").html(top.getTimeStr(now.getTime(),true));
				$("#view_disCust_examine_person").html(top.getCurrentUser().userName);
				$("#view_disCust_examine_status").html(top.getCodeName("EXAMINE_STATUS",$("#disCust_examine_status_hd").val()));
				$("#view_td_disCust_examine_suggest").html($("#view_disCust_examine_suggest").val());
				$("#view_tr_custdisable_examine_suggest").show();
				$("#view_tr_custdisable_examine_info").show();
				$("#view_tr_custdisable_examine_bt").hide(); 
			}else{
				top.showInfoWinError("操作失败 "+obj.msg);
			}
		}catch(e){
			 top.showInfoWinError("处理异常:"+e.message);
		}
	}
	//废单审核信息隐藏或显示调整页面高度
	function toggleDisableInfo(){
		$("#tbDisCustInfo").toggle();
		var isShowed=document.getElementById("tbDisCustInfo").style.display;
		if(isShowed=='none'){
			$("#displayContent").css("height",($(window).height()-118)+"px");
		}else{
			$("#displayContent").css("height",($(window).height()-250)+"px");
		}
	}
	//客户登记保存后重新加载页面（暂未使用）
	function pageReload(){
		top.openCustDetailPage(cust_base_info_id,"0-0","query","客户详细信息");
		if(reload_type=='insert'){
			top.removeTabByTabTitle("新客户登记");
		}
	}
	//客户回访查询
	function getCustCallbackList(){
		var iaoColumns= [
			                   { "sTitle": "回访时间", "mDataProp": "cb_time", "sWidth": "100px", "sClass": "center",
                                   "fnRender": function ( oObj ) {
									  if(oObj.aData.cb_time==0){
										return '<input type="text" style="width:95px" id="cb_time'+oObj.aData.cb_id+'" value="'+top.getTimeStr(today.getTime(),true)+'" />';
									  }else{
										return top.getTimeStr(oObj.aData.cb_time,true);
									  }
                                   },
                                   "bUseRendered": false  
                               },
							   { "sTitle": "回访人", "mDataProp": "cb_person", "sWidth": "100px","sClass": "left","bSortable":false,
                                      "fnRender": function ( oObj ) {
                                           return '<input type="hidden" id="plan_person'+oObj.aData.cb_id+'" value="'+oObj.aData.plan_person+'"></input><input type="hidden" id="cb_person'+oObj.aData.cb_id+'" value="'+oObj.aData.cb_person+'"></input><span id="span_cb_person'+oObj.aData.cb_id+'">'+top.getUserNameByCode(oObj.aData.cb_person)+'</span>';
				                      },
                                      "bUseRendered": false 
                               },
							   { "sTitle": "回访内容", "mDataProp": "cb_detail","sClass": "left","bSortable":false,
                                      "fnRender": function ( oObj ) {
										if(oObj.aData.cb_detail==''){
                                           return '<textarea id="cb_detail'+oObj.aData.cb_id+'" style="width:99%;" rows="3">'+oObj.aData.cb_detail+'</textarea>';
										}else{
										 return '<span id="span_cb_detail'+oObj.aData.cb_id+'">'+oObj.aData.cb_detail+'</span>';
										}
									 },
                                      "bUseRendered": false 
                               },
							   { "sTitle": "回访状态", "mDataProp": "cb_status", "sWidth": "100px","sClass": "left","bSortable":false,
                                      "fnRender": function ( oObj ) {
                                           return '<input type="hidden" id="cb_status" value="'+oObj.aData.cb_status+'"></input><span id="span_cb_status'+oObj.aData.cb_id+'">'+top.getCodeName("CB_STATUS",oObj.aData.cb_status)+'</span>';
	                                  },
                                      "bUseRendered": false 
                               }
                 ];
				if(top.g_isPermit("09_cust_callback_opt")){
				  iaoColumns.push(
					{ "sTitle": "操作", "mDataProp": "cb_id", "sWidth": "100px","sClass": "center","bSortable":false,
                        "fnRender": function ( oObj ) {
						if(oObj.aData.cb_id==''||oObj.aData.cb_detail==''){
							var ht='<img src="../../img/save.bmp" style="cursor:pointer" onclick="saveCallbackInfo(\''+oObj.aData.cb_id+'\','+(oObj.aData.cb_id==''?"true":"false")+')" />';
							return ht;
						}
							return '';
                        },
                            "bUseRendered": false 
                        }
					);
				}
			   var surl=top.getUrlBase()+"/actions/CustInfo.action?getCustCallbackList";
			   custCBTb = $('#custCallbackTb').dataTable( {
					"bProcessing": false,
					"bServerSide": true,
					"bJQueryUI": true,
					"bFilter": false,
					"bDestroy": true,
					"bLengthChange": true,
					"iDisplayLength":20,
					"sAjaxSource": surl,
					"oLanguage": {
					  "sUrl": top.getUrlBase()+"/lang_zh.txt"
				  },
				  "fnServerData": function ( sUrl, aoData, fnCallback ) {
						$.ajax( {
							"url":  sUrl,
							"data": aoData,
							"contentType" : "application/x-www-form-urlencoded; charset=utf-8",
							"success": function (json) {
								fnCallback( json );
							},
							"dataType": "json",
							"cache": false,
							"type": "POST",
							"error": function (xhr, error, thrown) {
								top.showInfoWinError("发生异常:"+error);
							}
						} );
					},
					"fnServerParams": function ( aoData ) {
						// aoData.push( { "name": "optType", "value": opt } );
						aoData.push({"name":"custCallback.require_id","value":require_id});
			        },
			      "sDom": "frt",
				  "aoColumns": iaoColumns
				} );
				
			}
	//查询回访	
	function doCustCallbackQuery(){
		custCBTb.fnDraw();
	}
	//插入或回访更新函数		
	function saveCallbackInfo(infoId,isCreate){
		var temp="";
		if ( $("#cb_detail"+infoId).val() == '' ) {
			temp += "请输入回访内容<br/>";
		}
		temp+=checkString($("#cb_detail1"+infoId).val(),false,512,"回访内容");
		if ( temp != '' ) {
			top.showInfoWinWarn(temp);
			return ;
		}

		var aoData=[];
		aoData.push( { "name": "custCallback.cust_code", "value":  cust_base_info_id } );
		aoData.push( { "name": "custCallback.require_id", "value": require_id } );
		aoData.push( { "name": "custCallback.cb_time", "value":  top.toTimestamp($("#cb_time"+infoId).val()) } );
		aoData.push( { "name": "custCallback.cb_person", "value": $("#cb_person"+infoId).val() } );
		aoData.push( { "name": "custCallback.plan_time", "value": top.toTimestamp($("#plan_time"+infoId).html()) } );
		aoData.push( { "name": "custCallback.plan_person", "value": $("#plan_person"+infoId).val()} );
		aoData.push( { "name": "custCallback.cb_detail", "value": $("#cb_detail"+infoId).val() } );
		aoData.push( { "name": "custCallback.cb_id", "value":infoId } );
		top.sendAjaxRequest("/actions/CustInfo.action?"+(isCreate?"insertCustCallback":"updateCustCallback"),aoData,saveInfoCallback);
	}
	//保存回访回调函数		
	function saveInfoCallback(obj){
		try{
			if ( obj.status == true ){
			    top.showInfoWinOK("操作成功");
				doCustCallbackQuery();
			}else{
			    top.showInfoWinError("操作失败 "+obj.msg);
			}
		}catch(e){
			top.showInfoWinError("处理异常:"+e.message);
		}
	}
	  
	
	