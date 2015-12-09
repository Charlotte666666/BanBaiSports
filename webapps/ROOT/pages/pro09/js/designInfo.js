       	
	function fixFilename(fp){
		 if ( !fp ) return "";
		 var n=fp.indexOf("_");
		 if ( n != -1 ) {
		   return fp.substring(n+2);
		 }
		 return fp;
    }
	
			//查询所有上传的附件  designplanid
		function selectAllUploadFile(filePathTb,belong_id){
		var surl=top.getUrlBase()+"/actions/File.action?getFileInfoList";
		fileListTable = $('#'+filePathTb).dataTable( {
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
							aoData.push( { "name": "fileinfo.belong_id", "value": belong_id} );
			        },
			      "sDom": "frtip",
				  "sPaginationType": "full_numbers",
					"aoColumns": [
							{"sTitle": "文件名称", "mDataProp": "file_name", "sWidth": "500px","sClass": "left", "bUseRendered": false },
			                {"sTitle": "类型","mDataProp": "file_type", "sWidth": "100px","sClass": "center",
								 "fnRender": function ( oObj ) {
                                          return top.getCodeName( "FILE_TYPE", oObj.aData.file_type );
                            },
							  "bUseRendered": false },
							{"sTitle": "上传时间","mDataProp": "upload_time", "sWidth": "150px", "sClass": "center",
								    "fnRender": function ( oObj ) {
                                           return top.getTimeStr(oObj.aData.upload_time ,false);
                            },
							
							 "bUseRendered": false},
							{ "sTitle": "操作", "mDataProp": "file_name", "sWidth": "100px","sClass": "center",
								"fnRender": function ( oObj ) {
										var s='<a href="'+top.getUrlBase()+'/download?filePath='+oObj.aData.file_path+'+"&fileName="'+oObj.aData.file_name+'">下载</a>';
										if(top.isCanPreview(oObj.aData.file_name))
										s+='||<a href=\'javascript:void(0)\' onclick="previewFile(\''+oObj.aData.file_path+'\',\''+oObj.aData.file_name+'\')">预览</a>';
										return s;
									 },
									"bUseRendered": false 
							}
							 
                      ]
				} );
			view_fileListTable = $('#view_'+filePathTb).dataTable( {
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
							aoData.push( { "name": "fileinfo.belong_id", "value":belong_id} );
			        },
			      "sDom": "frtip",
				  "sPaginationType": "full_numbers",
					"aoColumns": [
							{"sTitle": "文件名称", "mDataProp": "file_name", "sWidth": "500px","sClass": "left", "bUseRendered": false },
			                {"sTitle": "类型","mDataProp": "file_type", "sWidth": "100px","sClass": "center",
								 "fnRender": function ( oObj ) {
                                          return top.getCodeName( "FILE_TYPE", oObj.aData.file_type );
                            },
							  "bUseRendered": false },
							{"sTitle": "上传时间","mDataProp": "upload_time", "sWidth": "150px", "sClass": "center",
								    "fnRender": function ( oObj ) {
                                           return top.getTimeStr(oObj.aData.upload_time ,false);
                            },
							
							 "bUseRendered": false},
							{ "sTitle": "操作", "mDataProp": "file_name", "sWidth": "100px","sClass": "center",
								"fnRender": function ( oObj ) {
										var s='<a href="'+top.getUrlBase()+'/download?filePath='+oObj.aData.file_path+'+"&fileName="'+oObj.aData.file_name+'">下载</a>';
										if(top.isCanPreview(oObj.aData.file_name))
										s+='||<a href=\'javascript:void(0)\' onclick="previewFile(\''+oObj.aData.file_path+'\',\''+oObj.aData.file_name+'\')">预览</a>';
										return s;
									 },
									"bUseRendered": false 
							}
							 
                      ]
				} );
			
   }
		function initData(){
	    var aoData=[];
		aoData.push({"name":"custInfo.code","value":cust_code});
		top.sendAjaxRequest("/actions/DesignPlan.action?getMhDaDc",aoData,initDataCallBack);
		}
	   
		function initDataCallBack(obj){
	          if(obj.status==true){
			    var o=obj.body;
	          //设计方案
			  //审核 contract_check
			  //上传 09_put_design_proposal
			  cust_name=o.cust_name;
			  if ( o.requireInfo ) {
				
				$("#struct_area").val( o.requireInfo.struct_area);
				$("#usable_area").val( o.requireInfo.usable_area);
				if(o.requireInfo.struct_area){
				  $("#area").val(o.requireInfo.struct_area);
				  $("#are").html(o.requireInfo.struct_area);
				}else{
				  //$("#view_measure_struct_area").html("0");
				  $("#area").val("0");
				  $("#are").html("0");
				}
				if(o.requireInfo.usable_area){
				 // $("#view_measure_usable_area").html( o.requireInfo.usable_area);
				  $("#ext18").val(o.requireInfo.usable_area);
				  $("#span_ext18").html(o.requireInfo.usable_area);
				}else{
				  //$("#view_measure_usable_area").html("0");
				  $("#ext18").val("0");
				  $("#span_ext18").html("0");
				}
				designer_code=o.requireInfo.require_manager;
				require_id=o.requireInfo.id;
				//查询设计协议附件列表
				saveDesignAgrFileCallBack();
			}
			  var ht='';
			  var name ='';
			  if(!top.g_isPermit('design_scheme_check')){
			      ht='<tr style="background-color: #b9d8f3;" class="tr_data" height="35px">';
				  ht+='<td width="10%">序号</td>';
				  ht+='<td width="30%">设计方案</td>';
				  ht+='<td width="10%">上传日期</td>';
				  ht+=' <td width="10%">审批人</td>';
				  ht+='<td width="10%">流程状态</td>';
				  ht+='<td width="10%">审批日期</td>';
				  ht+='<td width="10%">操作/标注</td>';
				  ht+='</tr>';
			  if(o.designList.length>0){
				for(var i=0;i<o.designList.length;i++){
				  name = fixFilename(o.designList[i].desgin_name);
				  ht+="<tr class='tr_data' height='35px'>";
				  if(o.designList[i].final_sign=='02'){
					 ht+='<td><span id="design_index_'+o.designList[i].design_id+'"><img style="width:20px" src="image/icon_success.png" style="padding-right:15px"></span>'+(i+1)+'</td>';
				  }else{
					ht+='<td><span id="design_index_'+o.designList[i].design_id+'"  style="padding-right:15px"></span>'+(i+1)+'</td>';
				  }
				  ht+='<td><a href="'+top.getUrlBase()+'/download?filePath='+o.designList[i].desgin_name+'+"&fileName="'+name+'">'+name+'</a></td>';
				  ht+="<td>"+top.getTimeStr(o.designList[i].upload_time,true)+"</td>";
			      ht+="<td>"+top.getUserNameByCode(o.designList[i].examine_user)+"</td>";
				  ht+="<td>"+top.getCodeName('CHECK_RESULT',o.designList[i].examine_status);
				  if(o.designList[i].design_bz!=""){
					   ht+="<input align='right' type='image' id='bz' src='/img/question.gif' title='"+o.designList[i].design_bz+"' /></td>";
					 }else{
					   ht+="</td>";
				  }
				  ht+="<td>"+top.getTimeStr(o.designList[i].examine_time,true)+"</td>";
				  if(o.designList[i].examine_status=='01'){
				   if(top.g_isPermit('09_put_design_proposal')){
			               ht+='<td><a href="javascript:deleteDesignScheme('+o.designList[i].design_id+')">删除</a></td>'; 
			          }else{
			            ht+='<td></td>'; 
			        }   
				  }else{
				     if(o.designList[i].final_sign=='02'){
					  $("#design_scheme_uploadFile").hide();
					      ht+="<td>最终方案</td>"; 
					 }else{
					      ht+="<td></td>"; 
					 }
				  }
				    ht+="</tr>";
				}
			  }else{
			      ht+="<tr class='tr_data' height='35px'>";
				  ht+="<td colspan='8' align='center'>暂无设计方案数据</td>"; 
				  ht+="</tr>";
			  }
			   //上传权限
			  if(top.g_isPermit('09_put_design_proposal')){
			    $("#design_scheme_uploadFile").show();
			  }
			  else{
				$("#design_scheme_uploadFile").hide();
			  }
			 }else{
				  ht='<tr style="background-color: #b9d8f3;" class="tr_data" height="35px">';
				  ht+='<td width="10%">序号</td>';
				  ht+='<td width="30%">设计方案</td>';
				  ht+='<td width="10%">上传日期</td>';
				  ht+=' <td width="10%">审批人</td>';
				  ht+='<td width="10%">流程状态</td>';
				  ht+='<td width="10%">审批日期</td>';
				  ht+='<td width="10%">最终方案标注</td>';
				  ht+='</tr>';
			  if(o.designList.length>0){
			     var has_final_design=false;
				 //是否有最终方案
			     for(var i=0;i<o.designList.length;i++){
				  if(o.designList[i].final_sign=='02'){
				     has_final_design = true;
					 $("#design_scheme_uploadFile").hide();
				       break;
				 }
		       }
				for(var i=0;i<o.designList.length;i++){
				  name = fixFilename(o.designList[i].desgin_name);
				  ht+="<tr class='tr_data' height='35px'>";
				  if(o.designList[i].final_sign=='02'){
					 ht+='<td><span id="design_index_'+o.designList[i].design_id+'"><img style="width:20px" src="image/icon_success.png" style="padding-right:15px"></span>'+(i+1)+'</td>';
				  }else{
					ht+='<td><span id="design_index_'+o.designList[i].design_id+'"  style="padding-right:15px"></span>'+(i+1)+'</td>';
				  }
				  ht+='<td><a href="'+top.getUrlBase()+'/download?filePath='+o.designList[i].desgin_name+'+"&fileName="'+name+'">'+name+'</a></td>';
				  ht+="<td>"+top.getTimeStr(o.designList[i].upload_time,true)+"</td>";
			      ht+="<td>"+top.getUserNameByCode(o.designList[i].examine_user)+"</td>";
				  if(o.designList[i].examine_status=='01'&&top.g_isPermit('design_scheme_check')){
				      ht+='<td><a class="buttonDivTwo" style="cursor:pointer;color:blue;text-decoration:none;" href="javascript:void(0)" onclick="examineDesignScheme('+o.designList[i].design_id+','+o.designList[i].remind_id+')">审核</a></td>';
					  //ht+='<td><a class="buttonDivTwo" style="width:30px;font-color:#ffff;" href="javascript:examineDesignScheme('+o.designList[i].design_id+',\'02\','+o.designList[i].remind_id+')">通过</a>&nbsp;';
					  //ht+='<a class="buttonDivTwo" style="width:30px;font-color:#ffff;" href="javascript:examineDesignScheme('+o.designList[i].design_id+',\'03\','+o.designList[i].remind_id+')">拒绝</a></td>';
				  }else if(o.designList[i].examine_status!='01'){
				     ht+="<td>"+top.getCodeName('CHECK_RESULT',o.designList[i].examine_status);
				     if(o.designList[i].design_bz!=""){
					   ht+="<input align='right' type='image' id='bz' src='/img/question.gif' title='"+o.designList[i].design_bz+"' /></td>";
					 }else{
					   ht+="</td>";
					 }
				  }else{
					ht+='<td>待审核</td>';
				  }
				  ht+="<td>"+top.getTimeStr(o.designList[i].examine_time,true)+"</td>";
				  if(o.designList[i].examine_status=='02'){
				      if(has_final_design){//设计师有选定 取消权限
					     if(o.designList[i].final_sign=='02'&&top.g_isPermit('09_final_scheme')){
							design_status='01';
					        ht+='<td><a id="designSchemeBt_'+o.designList[i].design_id+'" href="javascript:signDesignScheme('+o.designList[i].design_id+')">取消最终方案</a></td>';
					      }else if(o.designList[i].final_sign=='02'){
					        ht+="<td>最终方案</td>"; 
					      }else{
						    ht+="<td></td>"; 
						  }
					  }else if(top.g_isPermit('09_final_scheme')){
						   design_status='02';
						   $("#design_scheme_uploadFile").show();
					       ht+='<td><a id="designSchemeBt_'+o.designList[i].design_id+'" href="javascript:signDesignScheme('+o.designList[i].design_id+')">标注为最终方案</a></td>';
					  }else{
						 ht+="<td></td>"; 
					  }
				  }else{
				  ht+="<td></td>"; 
				  }
				  ht+="</tr>";
				}
			  }
			  else{
			      ht+="<tr class='tr_data' height='35px'>";
				  ht+="<td colspan='8' align='center'>暂无设计方案数据</td>"; 
				  ht+="</tr>";
			  }
			  }
			  
			 
			  $("#designSchemeList").html(ht);
			if(o.measurehouse){
				measurehouseid=o.id;
				$("#measure_tool").val(o.measurehouse.measure_tool);
				$("#old_structure").val(o.measurehouse.old_structure);
				is_fault=o.measurehouse.is_fault;
				$("#fault_condition").val(o.measurehouse.fault_condition);
				heater_is_change=o.measurehouse.heater_is_change;
				$("#heater_suggest").val(o.measurehouse.heater_suggest);
				gas_is_change=o.measurehouse.gas_is_change;
				$("#gas_suggest").val(o.measurehouse.gas_suggest);
				partition_is_remove=o.measurehouse.partition_is_remove;
				$("#partition_position").val(o.measurehouse.partition_position);
				is_need_airconditioning=o.measurehouse.is_need_airconditioning;
				water_heater_type=o.measurehouse.water_heater_type;
				$("#many_members").val(o.measurehouse.many_members);
				$("#members_desc").val(o.measurehouse.members_desc);
				is_buy=o.measurehouse.is_buy;
				$("#analyse").val(o.measurehouse.analyse);
				$("#major_wood_material").val(o.measurehouse.major_wood_material);
				$("#living_room").val(o.measurehouse.living_room);
				$("#dining_room").val(o.measurehouse.dining_room);
				$("#kitchen").val(o.measurehouse.kitchen);
				$("#guest_bathroom").val(o.measurehouse.guest_bathroom);
				$("#main_bathroom").val(o.measurehouse.main_bathroom);
				$("#guest_bedroom1").val(o.measurehouse.guest_bedroom1);
				$("#guest_bedroom2").val(o.measurehouse.guest_bedroom2);
				$("#main_bedroom").val(o.measurehouse.main_bedroom);
				$("#measure_other").val(o.measurehouse.measure_other);
				is_bearing_wall=o.measurehouse.is_bearing_wall;
				$("#beam_position").val(o.measurehouse.beam_position);
				has_airconditioning=o.measurehouse.has_airconditioning;
				$("#gas_pipe_position").val(o.measurehouse.gas_pipe_position);
				$("#flue_pipe_position").val(o.measurehouse.flue_pipe_position);
				$("#heater_position").val(o.measurehouse.heater_position);
				$("#switch_position").val(o.measurehouse.switch_position);
				$("#wall_size").val( o.measurehouse.wall_size);
				$("#beam_height").val( o.measurehouse.beam_height);
				$("#door_height").val( o.measurehouse.door_height);
				$("#window_height").val( o.measurehouse.window_height);
				$("#airconditioning_height").val( o.measurehouse.airconditioning_height);
				$("#water_closet").val( o.measurehouse.water_closet);
				$("#id").val( top.getTimeStr( o.measurehouse.id, true ) );
				$("#measure_date").val( top.getTimeStr( o.measurehouse.measure_date, true ) );
				$("#make_table_man").html(o.measurehouse.make_table_man);
				$("#require_id").val( top.getTimeStr( o.measurehouse.require_id, true ) );
				//view
				$("#view_measure_tool").html(o.measurehouse.measure_tool);
				$("#view_old_structure").html(o.measurehouse.old_structure);
				$("#view_is_fault").html(top.getCodeName("ISYESORNO",o.measurehouse.is_fault));
				$("#view_fault_condition").html(o.measurehouse.fault_condition);
				$("#view_heater_is_change").html(top.getCodeName("ISYESORNO",o.measurehouse.heater_is_change));
				$("#view_heater_suggest").html(o.measurehouse.heater_suggest);
				$("#view_gas_is_change").html(top.getCodeName("ISYESORNO",o.measurehouse.gas_is_change));
				$("#view_gas_suggest").html(o.measurehouse.gas_suggest);
				$("#view_partition_is_remove").html(top.getCodeName("ISYESORNO",o.measurehouse.partition_is_remove));
				$("#view_partition_position").html(o.measurehouse.partition_position);
				$("#view_is_need_airconditioning").html(top.getCodeName("ISYESORNO",o.measurehouse.is_need_airconditioning));
				$("#view_water_heater_type").html(top.getCodeName("WATER_HEATER_TYPE",o.measurehouse.water_heater_type));
				if(o.measurehouse.many_members!=''){
					$("#view_many_members").html(o.measurehouse.many_members+' 人');
				}
				if(!o.measurehouse.many_members){
				   $("#view_many_members_text").hide();
				}else{
					$("#many_members_text").show();
				}
				if(o.measurehouse.members_desc!=''){
					$("#view_many_members_text").show();
				}
				$("#view_members_desc").html(o.measurehouse.members_desc);
				$("#view_is_buy").html(top.getCodeName("ISYESORNO",o.measurehouse.is_buy));
				$("#view_analyse").html(o.measurehouse.analyse);
				$("#view_major_wood_material").html(o.measurehouse.major_wood_material);
				$("#view_living_room").html(o.measurehouse.living_room);
				$("#view_dining_room").html(o.measurehouse.dining_room);
				$("#view_kitchen").html(o.measurehouse.kitchen);
				$("#view_guest_bathroom").html(o.measurehouse.guest_bathroom);
				$("#view_main_bathroom").html(o.measurehouse.main_bathroom);
				$("#view_guest_bedroom1").html(o.measurehouse.guest_bedroom1);
				$("#view_guest_bedroom2").html(o.measurehouse.guest_bedroom2);
				$("#view_main_bedroom").html(o.measurehouse.main_bedroom);
				$("#view_measure_other").html(o.measurehouse.measure_other);
				$("#view_is_bearing_wall").html(top.getCodeName("ISYESORNO",o.measurehouse.is_bearing_wall));
				$("#view_beam_position").html(o.measurehouse.beam_position);
				$("#view_has_airconditioning").html(top.getCodeName("ISYESORNO",o.measurehouse.has_airconditioning));
				$("#view_gas_pipe_position").html(o.measurehouse.gas_pipe_position);
				$("#view_flue_pipe_position").html(o.measurehouse.flue_pipe_position);
				$("#view_heater_position").html(o.measurehouse.heater_position);
				$("#view_switch_position").html(o.measurehouse.switch_position);
				$("#view_wall_size").html( o.measurehouse.wall_size);
				$("#view_beam_height").html( o.measurehouse.beam_height);
				$("#view_door_height").html( o.measurehouse.door_height);
				$("#view_window_height").html( o.measurehouse.window_height);
				$("#view_airconditioning_height").html( o.measurehouse.airconditioning_height);
				if(o.measurehouse.airconditioning_height){
				   $("#view_air_height_text").show();
				}
				$("#view_water_closet").html( o.measurehouse.water_closet);
				$("#view_measure_date").html( top.getTimeStr( o.measurehouse.measure_date, true ) );
				$("#view_make_table_man").html(o.measurehouse.make_table_man);
				
				if(o.measurehouse.old_structure_fj_name){
				   $("#view_old_structure_fj").html("<a href="+top.getUrlBase()+"?download/filePath="+o.measurehouse.old_structure_fj_path+"&fileName=\'"+o.measurehouse.old_structure_fj_name+"\'>"+o.measurehouse.old_structure_fj_name+"</a>");
				   $("#download_old_structure_fj").html("<a href="+top.getUrlBase()+"?download/filePath="+o.measurehouse.old_structure_fj_path+"&fileName=\'"+o.measurehouse.old_structure_fj_name+"\'>"+o.measurehouse.old_structure_fj_name+"</a>");
				   $("#old_structure_fj_name").val(o.measurehouse.old_structure_fj_name);
				   $("#old_structure_fj_path").val(o.measurehouse.old_structure_fj_path);
				}
				if(o.measurehouse.roomInfoList!=null&&o.measurehouse.roomInfoList.length>0){
					initmeasureRoomInfo(o.measurehouse.roomInfoList);
				}
			}else{//当量房信息为空时显示编辑状态
				$("#make_table_man").html(top.getCurrentUser().userName);
				$("#view_make_table_man").html(top.getCurrentUser().userName);
				var measure_date=window.parent.getMeasureHouseDate();
				if(measure_date&&measure_date!=0){
					$("#view_measure_date").html( top.getTimeStr( measure_date, true ) );
					$("#measure_date").val( top.getTimeStr(measure_date, true ) );
				}
				$("#view_many_members_text").hide();
			}
			$("#span_is_fault").html( top.getCodeSelectHtml("ISYESORNO","is_fault",true,is_fault,'onchangeIsfault()'));
			onchangeIsfault();
			$("#span_heater_is_change").html( top.getCodeSelectHtml("ISYESORNO","heater_is_change",true,heater_is_change,'onchangeHeaterIsChange()') );
			onchangeHeaterIsChange();
			$("#span_gas_is_change").html( top.getCodeSelectHtml("ISYESORNO","gas_is_change",true,gas_is_change,'onchangeGasIsChange()') );
			onchangeGasIsChange();
			$("#span_partition_is_remove").html( top.getCodeSelectHtml("ISYESORNO","partition_is_remove",true,partition_is_remove) );
			$("#span_is_need_airconditioning").html( top.getCodeSelectHtml("ISYESORNO","is_need_airconditioning",true,is_need_airconditioning) );
			$("#span_water_heater_type").html( top.getCodeSelectHtml("WATER_HEATER_TYPE","water_heater_type",true,water_heater_type) );
			$("#span_is_buy").html( top.getCodeSelectHtml("ISYESORNO","is_buy",false,is_buy,'onchangeIs_buy()') );
			onchangeIs_buy();
			$("#span_is_bearing_wall").html( top.getCodeSelectHtml("ISYESORNO","is_bearing_wall",false,is_bearing_wall) );
			$("#span_has_airconditioning").html( top.getCodeSelectHtml("ISYESORNO","has_airconditioning",false,has_airconditioning,'onchangeHasAirconditioning()') );
			onchangeHasAirconditioning();
             //工作计划			
             queryDesignPlanTableList();			
			 //设计协议信息
			 getDesignAgreement();
			 //工程报价信息
			// getOtherProjectDetailInfo();
			 //查看是否已经有工程订单号
			 getProjectOrder();
			 //施工图上传权限
			 if(top.g_isPermit("09_construction_draing_upload")){
			    $("#optConDrawingBtn").show();
			 }
			 //施工图信息
			 getConstructionDrawingList();
			 //施工图审核信息查询
			 //queryConstructionDrawing();
			// queryProductQuote();
			//加载工程预算信息
			//$("#iframe_budget").attr("src","budgetInfo.html?require_id="+require_id);
			//工程预算信息
			getBudgetInfo();
		  }else{
			  top.showInfoWinError("操作失败");
		  }
	   }
	   //查看是否已经有工程订单号
		function getProjectOrder(){
	       var aoData=[];
		   aoData.push({ "name":"projectOrder.require_id","value":require_id});
		   aoData.push({ "name":"projectOrder.cust_code","value":cust_code});
		   top.sendAjaxRequest("/actions/ProjectOrder.action?getProjectOrderInfoByRID",aoData,getProjectOrderCallback);
		}
	   //查询工程订单信息后回调函数
	   function  getProjectOrderCallback(obj){
	      if(obj.status==true){
		     if(obj.body){
			    var order=obj.body.projectOrder;
				if(order){
				  project_order_id=order.project_order_id;
				}
			 }
		  }
	   }
	   
	   function editMeasureHouse(){
			$("#edit_cust_other_tabs-0").show();
			$("#view_cust_other_tabs-0").hide();
			saveOtherModelBt();
	    }
	   function doCancelMeasureHouse(){
			$("#edit_cust_other_tabs-0").hide();
			$("#view_cust_other_tabs-0").show();
			editOtherModelBt();
		}
		
	   //保存量房信息
	   function saveMeasureHouse(){
			 // 检查
			var checkMsg = checkSaveMeasureHouse();
				if ( checkMsg != '' ) {
				   top.showInfoWinWarn(checkMsg);
				   return ;
				}
				var aoData=[];
				aoData.push( { "name": "custRequire.id", "value": require_id } );
				aoData.push( { "name": "measurehouse.require_id", "value": require_id } );
				aoData.push( { "name": "measurehouse.measure_designer", "value": $("#measure_designer").val() } );
				aoData.push( { "name": "measurehouse.measure_tool", "value": $("#measure_tool").val() } );
				aoData.push( { "name": "measurehouse.old_structure", "value": $("#old_structure").val() } );
				aoData.push( { "name": "measurehouse.is_fault", "value": $("#is_fault").val() } );
				aoData.push( { "name": "measurehouse.fault_condition", "value": $("#fault_condition").val() } );
				aoData.push( { "name": "measurehouse.heater_is_change", "value": $("#heater_is_change").val() } );
				aoData.push( { "name": "measurehouse.heater_suggest", "value": $("#heater_suggest").val() } );
				aoData.push( { "name": "measurehouse.gas_is_change", "value": $("#gas_is_change").val() } );
				aoData.push( { "name": "measurehouse.gas_suggest", "value": $("#gas_suggest").val() } );
				aoData.push( { "name": "measurehouse.partition_is_remove", "value": $("#partition_is_remove").val() } );
				aoData.push( { "name": "measurehouse.partition_position", "value": $("#partition_position").val() } );
				aoData.push( { "name": "measurehouse.is_need_airconditioning", "value": $("#is_need_airconditioning").val() } );
				aoData.push( { "name": "measurehouse.water_heater_type", "value": $("#water_heater_type").val() } );
				aoData.push( { "name": "measurehouse.many_members", "value": $("#many_members").val() } );
				if($("#many_members").val()==""){
				  $("#members_desc").val("");
				}
				aoData.push( { "name": "measurehouse.members_desc", "value": $("#members_desc").val() } );
				aoData.push( { "name": "measurehouse.is_buy", "value": $("#is_buy").val() } );
				aoData.push( { "name": "measurehouse.analyse", "value": $("#analyse").val() } );
				aoData.push( { "name": "measurehouse.major_wood_material", "value": $("#major_wood_material").val() } );
				aoData.push( { "name": "measurehouse.living_room", "value": $("#living_room").val() } );
				aoData.push( { "name": "measurehouse.dining_room", "value": $("#dining_room").val() } );
				aoData.push( { "name": "measurehouse.kitchen", "value": $("#kitchen").val() } );
				aoData.push( { "name": "measurehouse.guest_bathroom", "value": $("#guest_bathroom").val() } );
				aoData.push( { "name": "measurehouse.main_bathroom", "value": $("#main_bathroom").val() } );
				aoData.push( { "name": "measurehouse.guest_bedroom1", "value": $("#guest_bedroom1").val() } );
				aoData.push( { "name": "measurehouse.guest_bedroom2", "value": $("#guest_bedroom2").val() } );
				aoData.push( { "name": "measurehouse.main_bedroom", "value": $("#main_bedroom").val() } );
				aoData.push( { "name": "measurehouse.measure_other", "value": $("#measure_other").val() } );
				aoData.push( { "name": "measurehouse.is_bearing_wall", "value": $("#is_bearing_wall").val() } );
				aoData.push( { "name": "measurehouse.beam_position", "value": $("#beam_position").val() } );
				aoData.push( { "name": "measurehouse.has_airconditioning", "value": $("#has_airconditioning").val() } );
				if($("#has_airconditioning").val()=="0"){
				   $("#airconditioning_height").val("");
				}
				aoData.push( { "name": "measurehouse.gas_pipe_position", "value": $("#gas_pipe_position").val() } );
				aoData.push( { "name": "measurehouse.flue_pipe_position", "value": $("#flue_pipe_position").val() } );
				aoData.push( { "name": "measurehouse.heater_position", "value": $("#heater_position").val() } );
				aoData.push( { "name": "measurehouse.switch_position", "value": $("#switch_position").val() } );
				aoData.push( { "name": "measurehouse.wall_size", "value": top.g_GetNumValue($("#wall_size").val()) } );
				aoData.push( { "name": "measurehouse.beam_height", "value": top.g_GetNumValue($("#beam_height").val()) } );
				aoData.push( { "name": "measurehouse.door_height", "value": top.g_GetNumValue($("#door_height").val()) } );
				aoData.push( { "name": "measurehouse.window_height", "value": top.g_GetNumValue($("#window_height").val()) } );
				aoData.push( { "name": "measurehouse.airconditioning_height", "value": top.g_GetNumValue($("#airconditioning_height").val()) } );
				aoData.push( { "name": "measurehouse.water_closet", "value": top.g_GetNumValue($("#water_closet").val()) } );
				aoData.push( { "name": "measurehouse.measure_date", "value":  top.toTimestamp($("#measure_date").val()) } );
				aoData.push( { "name": "measurehouse.make_table_man", "value":  $("#make_table_man").html() } );
				aoData.push( { "name": "measurehouse.old_structure_fj_name", "value":  $("#old_structure_fj_name").val() } );
				aoData.push( { "name": "measurehouse.old_structure_fj_path", "value":  $("#old_structure_fj_path").val() } );
				var isChangeCustStatus=window.parent.updateCustStatus('3');
				aoData.push( { "name": "isChangeCustStatus", "value": isChangeCustStatus} );
				var xurl="/actions/CustInfo.action?saveMeasureHouse";
				top.sendAjaxRequest(xurl,aoData,optMeasureHouseCallback);
		}
		
		
	//校验量房信息
	function checkSaveMeasureHouse(){
		var msg="";
	    if ( $("#many_members").val() != '' && (!IsNumber( $("#many_members").val() )|| $("#many_members").val()>100)) msg += "[家庭成员人数]应为0~100之间数字类型<br>";

		msg += checkString($("#beam_position").val(),false,64,"梁的位置");
		
		msg += checkString($("#wall_size").val(),false,25,"墙的尺寸");
		msg += checkString($("#beam_height").val(),false,25,"梁的高度");
		msg += checkString($("#door_height").val(),false,25,"门洞高");
		msg += checkString($("#window_height").val(),false,25,"窗洞高");
		msg += checkString($("#water_closet").val(),false,25,"卫生间坐便孔距");
		msg += checkString($("#airconditioning_height").val(),false,25,"中央空调高度");
		msg += checkString($("#gas_pipe_position").val(),false,64,"煤气管道位置");
		msg += checkString($("#flue_pipe_position").val(),false,64,"烟道位置");
		msg += checkString($("#heater_position").val(),false,64,"暖气位置");
		msg += checkString($("#switch_position").val(),false,64,"开关位置及电路位置");
		msg += checkString($("#measure_tool").val(),false,256,"量房工具");
		msg += checkString($("#old_structure").val(),false,512,"房屋原结构");
		msg += checkString($("#fault_condition").val(),false,256,"房屋缺陷");
		msg += checkString($("#heater_suggest").val(),false,256,"暖气改动");
		msg += checkString($("#gas_suggest").val(),false,256,"煤气改动");
		msg += checkString($("#members_desc").val(),false,256,"人口描述");
		msg += checkString($("#analyse").val(),false,256,"家具类型及尺寸描述");
		msg += checkString($("#major_wood_material").val(),false,256,"主要木做材料");
		msg += checkString($("#living_room").val(),false,256,"客户对客厅要求");
		msg += checkString($("#dining_room").val(),false,256,"客户对餐厅要求");
		msg += checkString($("#kitchen").val(),false,256,"客户对厨房要求");
		msg += checkString($("#guest_bathroom").val(),false,256,"客户对客卫要求");
		msg += checkString($("#main_bathroom").val(),false,256,"客户对主卫要求");
		msg += checkString($("#guest_bedroom1").val(),false,256,"客户对客卧1要求");
		msg += checkString($("#guest_bedroom2").val(),false,256,"客户对客卧2要求");
		msg += checkString($("#main_bedroom").val(),false,256,"客户对主卧要求");
		msg += checkString($("#measure_other").val(),false,256,"客户对其它要求");
		return msg;
	}
	// 操作回调函数--添加量房信息
	function optMeasureHouseCallback(obj){
       try{
        if ( obj.status == true ){
            isSaveOK = true;
            top.showInfoWinOK("操作成功");
			editOtherModelBt();
			$("#edit_cust_other_tabs-0").hide();
			$("#view_cust_other_tabs-0").show();
			//刷新view页面
			 $("#view_measure_designer").html($("#measure_designer").val());
			$("#view_measure_tool").html($("#measure_tool").val());
			$("#view_old_structure").html( $("#old_structure").val());
			$("#view_is_fault").html(top.getCodeName("ISYESORNO",$("#is_fault").val()));
			$("#view_fault_condition").html( $("#fault_condition").val() );
			$("#view_heater_is_change").html(top.getCodeName("ISYESORNO",$("#heater_is_change").val()) );
			$("#view_heater_suggest").html($("#heater_suggest").val() );
			$("#view_gas_is_change").html(top.getCodeName("ISYESORNO",$("#gas_is_change").val()  ));
			$("#view_gas_suggest").html( $("#gas_suggest").val() );
			$("#view_partition_is_remove").html(top.getCodeName("ISYESORNO",$("#partition_is_remove").val() ));
			$("#view_partition_position").html($("#partition_position").val() );
			if($("#partition_position").val()==""){
			  $("#view_partition_position_text").hide();
			}else{
			  $("#view_partition_position_text").show();
			}
			$("#view_is_need_airconditioning").html(top.getCodeName("ISYESORNO",$("#is_need_airconditioning").val() ));
			$("#view_water_heater_type").html(top.getCodeName("WATER_HEATER_TYPE",$("#water_heater_type").val()) );
			if($("#many_members").val()!=''){
				$("#view_many_members").html($("#many_members").val()+' 人'  );
			}
			$("#view_members_desc").html($("#members_desc").val() );
			if($("#many_members").val()==""){
			  $("#view_many_members_text").hide();
			}
			$("#view_is_buy").html( top.getCodeName("ISYESORNO",$("#is_buy").val()) );
			$("#view_analyse").html($("#analyse").val() );
			$("#view_major_wood_material").html($("#major_wood_material").val()  );
			$("#view_living_room").html($("#living_room").val()  );
			$("#view_dining_room").html( $("#dining_room").val()  );
			$("#view_kitchen").html($("#kitchen").val()  );
			$("#view_guest_bathroom").html( $("#guest_bathroom").val() );
			$("#view_main_bathroom").html($("#main_bathroom").val());
			$("#view_guest_bedroom1").html($("#guest_bedroom1").val());
			$("#view_guest_bedroom2").html($("#guest_bedroom2").val()  );
			$("#view_main_bedroom").html($("#main_bedroom").val()  );
			 $("#view_measure_other").html( $("#measure_other").val()  );
			$("#view_is_bearing_wall").html( top.getCodeName("ISYESORNO",$("#is_bearing_wall").val()) );
			$("#view_beam_position").html( $("#beam_position").val()  );
			$("#view_has_airconditioning").html( top.getCodeName("ISYESORNO",$("#has_airconditioning").val()) );
			$("#view_gas_pipe_position").html( $("#gas_pipe_position").val()  );
			$("#view_flue_pipe_position").html($("#flue_pipe_position").val() );
			$("#view_heater_position").html($("#heater_position").val()  );
			$("#view_switch_position").html( $("#switch_position").val());
			$("#view_wall_size").html($("#wall_size").val());
			$("#view_beam_height").html( $("#beam_height").val() );
			$("#view_door_height").html($("#door_height").val());
			$("#view_window_height").html($("#window_height").val() );
			$("#view_airconditioning_height").html($("#airconditioning_height").val());
			if($("#airconditioning_height").val()!=""){
			  $("#view_air_height_text").show();
			}else{
			  $("#view_air_height_text").hide();
			}
			$("#view_water_closet").html( $("#water_closet").val() );
			$("#view_measure_date").html($("#measure_date").val() );
			$("#view_make_table_man").html(  $("#make_table_man").html()  );
			parent.checkInfoSave();
		}else{
            isSaveOK = false;
            top.showInfoWinError("操作失败 "+obj.msg);
        }
       }catch(e){
          top.showInfoWinError("处理异常:"+e.message);
       }
	}
	function saveRoomInfo(index){
		curRoomInfoIndex=index;
		var xurl="";
		var checkMsg = checkRoomInfo(index);
		if ( checkMsg != '' ) {
			top.showInfoWinWarn(checkMsg);
		    return ;
		}
		var aoData=[];
		aoData.push( { "name": "measureRoomInfo.cust_code", "value": cust_code } );
		aoData.push( { "name": "measureRoomInfo.require_id", "value": require_id } );
		aoData.push( { "name": "measureRoomInfo.wall_area", "value":  $("#wall_area"+index).val()} );
		aoData.push( { "name": "measureRoomInfo.earth_area", "value": $("#earth_area"+index).val()} );
		aoData.push( { "name": "measureRoomInfo.room_height", "value": $("#room_height"+index).val() } );
		aoData.push( { "name": "measureRoomInfo.room_type", "value": $("#room_type"+index).val() } );
		aoData.push( { "name": "measureRoomInfo.room_name", "value": $("#room_name"+index).val() } );
		aoData.push( { "name": "measureRoomInfo.room_code", "value": $("#room_code"+index).val() } );
		if($("#room_info"+index).val()!=''){
			aoData.push( { "name": "measureRoomInfo.id", "value": $("#room_info"+index).val() } );
			xurl="/actions/DesignPlan.action?updateMeasureRoomInfo";
		}else{
			xurl="/actions/DesignPlan.action?insertMeasureRoomInfo";
		}
		top.sendAjaxRequest(xurl,aoData,saveRoomInfoCallback);
	}
	//校验量房信息
	function checkRoomInfo(index){
		var msg="";
		if ( $("#wall_area"+index).val()!="" && $("#wall_area"+index).val().substring(0,1)=="-"){ msg+="[墙面积]不能为负值!<br/>";}
	    if ( $("#wall_area"+index).val() != '' && !IsFloat( $("#wall_area"+index).val() )) msg += "[墙面积]应为数字类型<br>";
		if ( $("#earth_area"+index).val()!="" &&  $("#earth_area"+index).val().substring(0,1)=="-"){ msg+="[地面积]不能为负值!<br/>";}
	    if ( $("#earth_area"+index).val() != '' && !IsFloat( $("#earth_area"+index).val() )) msg += "[地面积]应为数字类型<br>";
		if ( $("#room_height"+index).val()!="" && $("#room_height"+index).val().substring(0,1)=="-"){ msg+="[层高]不能为负值!<br/>";}
	    if ( $("#room_height"+index).val() !== '' && !IsFloat( $("#room_height"+index).val() )) msg += "[层高]应为数字类型<br>";
		if ( $("#room_type"+index).val() == '') msg += "请填写房间类型字段<br>";
		msg+=checkString($("#room_code"+index).val(),false,10,"房间编号");
		msg+=checkString($("#room_name"+index).val(),true,10,"房间名称");
		return msg;
	}
	
	function saveRoomInfoCallback(obj){
	 try{
        if ( obj.status == true ){
             top.showInfoWinOK("操作成功");
		if(obj.msg&&obj.msg!=''){
			$("#room_info"+curRoomInfoIndex).val(obj.msg); 
		}
		$("#lb_room_type"+curRoomInfoIndex).html(top.getCodeName("ROOM_DETAIL_TYPE",$("#room_type"+curRoomInfoIndex).val()));
		$("#lb_room_code"+curRoomInfoIndex).html($("#room_code"+curRoomInfoIndex).val());
		$("#lb_room_name"+curRoomInfoIndex).html($("#room_name"+curRoomInfoIndex).val());
		$("#lb_earth_area"+curRoomInfoIndex).html($("#earth_area"+curRoomInfoIndex).val());
		$("#lb_wall_area"+curRoomInfoIndex).html($("#wall_area"+curRoomInfoIndex).val());
		$("#lb_room_height"+curRoomInfoIndex).html($("#room_height"+curRoomInfoIndex).val());
		//addRoomInfoRow(curRoomInfoIndex);
		$("#view_room_type"+curRoomInfoIndex).html(top.getCodeName("ROOM_DETAIL_TYPE",$("#room_type"+curRoomInfoIndex).val()));
		$("#view_room_code"+curRoomInfoIndex).html($("#room_code"+curRoomInfoIndex).val());
		$("#view_room_name"+curRoomInfoIndex).html($("#room_name"+curRoomInfoIndex).val());
		$("#view_earth_area"+curRoomInfoIndex).html($("#earth_area"+curRoomInfoIndex).val());
		$("#view_wall_area"+curRoomInfoIndex).html($("#wall_area"+curRoomInfoIndex).val());
		$("#view_room_height"+curRoomInfoIndex).html($("#room_height"+curRoomInfoIndex).val());	
		
		
		$("#img"+curRoomInfoIndex).html("<img src='../../img/edit.gif'  style='cursor:pointer;' title='编辑' onclick='editRoomInfo(\""+curRoomInfoIndex+"\")'>&nbsp;<img src='../../img/delete.gif'  style='cursor:pointer;' title='取消' onclick='deleteRoomInfo(\""+curRoomInfoIndex+"\")'>");
		$("#tr_room_row"+curRoomInfoIndex+" input").hide();
		$("#tr_room_row"+curRoomInfoIndex+" select").hide();
		$("#tr_room_row"+curRoomInfoIndex+" label").show();
		$("#view_tr_room_row"+curRoomInfoIndex).show();
        }else{
            isSaveOK = false;
            top.showInfoWinError("操作失败 "+obj.msg);
        }
       }catch(e){
          top.showInfoWinError("处理异常:"+e.message);
       }
	}
	function deleteRoomInfo(index){
		if(!index)  return;
		curRoomInfoIndex=index;
		top.showConfirm("确定删除该记录吗？", doDeleteRoomInfo);
		
	}
	function doDeleteRoomInfo(){
		if($("#room_info"+curRoomInfoIndex).val()==''){
			$("#tr_room_row"+curRoomInfoIndex).remove();
			$("#view_tr_room_row"+curRoomInfoIndex).remove();
		}else{
			var aoData=[];
			aoData.push( { "name": "measureRoomInfo.id", "value": curRoomInfoIndex } );
			xurl="/actions/DesignPlan.action?deleteMeasureRoomInfoById";
			top.sendAjaxRequest(xurl,aoData,deleteRoomInfoCallback);
		}
	}
	function deleteRoomInfoCallback(obj){
	 try{
        if ( obj.status == true ){
             top.showInfoWinOK("操作成功");
			 $("#tr_room_row"+curRoomInfoIndex).remove();
			 $("#view_tr_room_row"+curRoomInfoIndex).remove();
        }else{
            isSaveOK = false;
            top.showInfoWinError("操作失败 "+obj.msg);
        }
       }catch(e){
          top.showInfoWinError("处理异常:"+e.message);
       }
	}
	function initmeasureRoomInfo(roomInfoList){
		var view_ht="";
		var ht="";
		if(roomInfoList!=null&&roomInfoList.length>0){
			for(var i=0;i<roomInfoList.length;i++){
				ht+="<tr id='tr_room_row"+roomInfoIndex+"' class='tr_data'>";
				ht+="<td><label id='lb_room_type"+roomInfoIndex+"'>"+top.getCodeName("ROOM_DETAIL_TYPE",roomInfoList[i].room_type)+"</label>"+top.getCodeSelectHtml("ROOM_DETAIL_TYPE","room_type"+roomInfoIndex,true,roomInfoList[i].room_type)+"</td>";
				ht+="<td><label id='lb_room_code"+roomInfoIndex+"'>"+roomInfoList[i].room_code+"</label><input type='hidden' value='"+roomInfoList[i].id+"' id='room_info"+roomInfoIndex+"'></input><input style='width:95%' value='"+roomInfoList[i].room_code+"' id='room_code"+roomInfoIndex+"'/></td>";
				ht+="<td><label id='lb_room_name"+roomInfoIndex+"'>"+roomInfoList[i].room_name+"</label><input id='room_name"+roomInfoIndex+"' value='"+roomInfoList[i].room_name+"' style='width:95%'/></td>";
				ht+="<td><label id='lb_earth_area"+roomInfoIndex+"'>"+roomInfoList[i].earth_area+"</label><input id='earth_area"+roomInfoIndex+"' value='"+roomInfoList[i].earth_area+"' style='width:95%'/></td>";
				ht+="<td><label id='lb_wall_area"+roomInfoIndex+"'>"+roomInfoList[i].wall_area+"</label><input id='wall_area"+roomInfoIndex+"' value='"+roomInfoList[i].wall_area+"'  style='width:95%'/></td>";
				ht+="<td><label id='lb_room_height"+roomInfoIndex+"'>"+roomInfoList[i].room_height+"</label><input id='room_height"+roomInfoIndex+"' value='"+roomInfoList[i].room_height+"'  style='width:95%'/></td>";
				ht+="<td id=\"img"+roomInfoIndex+"\" >";
				ht+="<img src='../../img/edit.gif'  style='cursor:pointer;' title='编辑' onclick='editRoomInfo(\""+roomInfoIndex+"\")'>&nbsp;<img src='../../img/delete.gif'  style='cursor:pointer;' title='删除' onclick='deleteRoomInfo(\""+roomInfoIndex+"\")'>";
				//ht+="<img src='../../img/save.bmp'  style='cursor:pointer;' title='保存' onclick='savePayVioRecord()'>&nbsp;<img src='../../img/delete.gif'  style='cursor:pointer;' title='取消' onclick='deleteRoomInfo()'>";
				ht+="</td>";
				ht+="</tr>";
				
				view_ht+="<tr id='view_tr_room_row"+roomInfoIndex+"'  class='tr_data'>";
				view_ht+="<td id='view_room_type"+roomInfoIndex+"'>"+top.getCodeName("ROOM_DETAIL_TYPE",roomInfoList[i].room_type)+"</td>";
				view_ht+="<td id='view_room_code"+roomInfoIndex+"'>"+roomInfoList[i].room_code+"</td>";
				view_ht+="<td id='view_room_name"+roomInfoIndex+"'>"+roomInfoList[i].room_name+"</td>";
				view_ht+="<td id='view_earth_area"+roomInfoIndex+"'>"+roomInfoList[i].earth_area+"</td>";
				view_ht+="<td id='view_wall_area"+roomInfoIndex+"'>"+roomInfoList[i].wall_area+"</td>";
				view_ht+="<td id='view_room_height"+roomInfoIndex+"'>"+roomInfoList[i].room_height+"</td>";
				view_ht+="</tr>";
				roomInfoIndex++;
			}
			$("#addRooomRow").before(ht);
			$("#edit_measure_room_list input").hide();
			$("#edit_measure_room_list select").hide();
			$("#edit_measure_room_list label").show();
			$("#view_measure_room_list").append(view_ht);
		}
	
	}
	  function editRoomInfo(index){
		$("#img"+index).html("<img src='../../img/save.bmp'  style='cursor:pointer;' title='保存' onclick='saveRoomInfo(\""+index+"\")'>&nbsp;<img src='../../img/delete.gif'  style='cursor:pointer;' title='取消' onclick='deleteRoomInfo(\""+index+"\")'>");
		$("#tr_room_row"+index+" input").show();
		$("#tr_room_row"+index+" select").show();
		$("#tr_room_row"+index+" label").hide();
	  }
	  function addRoomInfoRow(){
		var view_ht="";
		var ht="";
		ht+="<tr id='tr_room_row"+roomInfoIndex+"' class='tr_data'>";
		ht+="<td><label id='lb_room_type"+roomInfoIndex+"'></label>"+top.getCodeSelectHtml("ROOM_DETAIL_TYPE","room_type"+roomInfoIndex,false)+"</td>";
		ht+="<td><label id='lb_room_code"+roomInfoIndex+"'></label><input type='hidden' value='' id='room_info"+roomInfoIndex+"'></input><input style='width:95%' value='' id='room_code"+roomInfoIndex+"'/></td>";
		ht+="<td><label id='lb_room_name"+roomInfoIndex+"'></label><input id='room_name"+roomInfoIndex+"' value='' style='width:95%'/></td>";
		ht+="<td><label id='lb_earth_area"+roomInfoIndex+"'></label><input id='earth_area"+roomInfoIndex+"' value='0' style='width:95%'/></td>";
		ht+="<td><label id='lb_wall_area"+roomInfoIndex+"'></label><input id='wall_area"+roomInfoIndex+"' value='0'  style='width:95%'/></td>";
		ht+="<td><label id='lb_room_height"+roomInfoIndex+"'></label><input id='room_height"+roomInfoIndex+"' value='0'  style='width:95%'/></td>";
		ht+="<td id=\"img"+roomInfoIndex+"\" >";
		ht+="<img src='../../img/save.bmp'  style='cursor:pointer;' title='保存' onclick='saveRoomInfo(\""+roomInfoIndex+"\")'>&nbsp;<img src='../../img/delete.gif'  style='cursor:pointer;' title='取消' onclick='deleteRoomInfo(\""+roomInfoIndex+"\")'>";
		ht+="</td>";
		ht+="</tr>";
		$("#addRooomRow").before(ht);
		$("#tr_room_row"+roomInfoIndex+" input").show();
		$("#tr_room_row"+roomInfoIndex+" select").show();
		$("#tr_room_row"+roomInfoIndex+" label").hide();
		view_ht+="<tr style='display:none' id='view_tr_room_row"+roomInfoIndex+"'class='tr_data'>";
		view_ht+="<td id='view_room_type"+roomInfoIndex+"'></td>";
		view_ht+="<td id='view_room_code"+roomInfoIndex+"'></td>";
		view_ht+="<td id='view_room_name"+roomInfoIndex+"'></td>";
		view_ht+="<td id='view_earth_area"+roomInfoIndex+"'></td>";
		view_ht+="<td id='view_wall_area"+roomInfoIndex+"'></td>";
		view_ht+="<td id='view_room_height"+roomInfoIndex+"'></td>";
		view_ht+="</tr>";
		$("#view_measure_room_list").append(view_ht);
		roomInfoIndex++;
	  }
	  function saveOtherModelBt(){
		$("#otherSaveBt").show();
		$("#otherReturnBt").show();
		$("#otherPrinterBt").hide();
		$("#otherEditBt").hide();
    }
    function editOtherModelBt(){
		$("#otherSaveBt").hide();
		$("#otherReturnBt").hide();
		$("#otherPrinterBt").hide();
		$("#otherEditBt").show();
    }
	
			   
	function changBtBind(tabTitle){
		//量房
		if(tabTitle=='measureHouse'){
			$("#otherEditBt").attr("onclick","editMeasureHouse()");
			$("#otherSaveBt").attr("onclick","saveMeasureHouse()");
			$("#otherReturnBt").attr("onclick","doCancelMeasureHouse()");
			doCancelMeasureHouse();
			//判断用户是否有操作权限 无隐藏编辑按钮
			if(!top.g_isPermit("09_measure_house")){
				$("#otherEditBt").hide();
			}else{
				$("#otherEditBt").show();
			}
		//设计协议
		}else if(tabTitle=='designProtocol'){
			$("#otherEditBt").attr("onclick","editDesignAgreement()");
			$("#otherSaveBt").attr("onclick","saveDesignAgreement()");
			$("#otherReturnBt").attr("onclick","doCancelDesignAgreement()");
			doCancelDesignAgreement();
			//判断用户是否有操作权限 无隐藏编辑按钮
			if(!top.g_isPermit("design_agreement_opr") || designAgr_check){
				$("#otherEditBt").hide();
			}else{
				$("#otherEditBt").show();
			}
		//设计计划  
		}else if(tabTitle=='designPlan'){
			$("#otherSaveBt").hide();
			$("#otherReturnBt").hide();
			$("#otherEditBt").hide();
			if(require_id!=''){
				queryDesignPlanTableList();
			}
			if(top.g_isPermit("09_design_work_plan_opt")){
				$("#saveDesignPlanStatusBtn").show();
			}
			//if(optType=='insert'){
			//	addDesignPlanInfo();
			//}
		}else if(tabTitle=='designPaper'){
			$("#otherEditBt").hide();
		}else if(tabTitle=="projectQuote"){//工程报价
			$("#otherEditBt").hide();
			//控制预算修改按钮显示
			if(top.g_isPermit('09_cust_budget_opt')){
			   $("#alterBudgetBT").show();
			}else{
			   $("#alterBudgetBT").hide();
			}
			/*$("#otherEditBt").attr("onclick","openBudgetInfo()");
		    $("#otherEditBt").show();
			$("#otherEditBt").attr("onclick","printBudget()");
			$("#otherPrinterBt").show();*/
		}else if(tabTitle=="constructionDrawing"){//施工图
		    $("#otherEditBt").hide();
		}else if(tabTitle=="constructCheck"){//施工图审核
		    $("#otherEditBt").hide();
		}
	}
	function openBudgetInfo(){
		var xurl="pages/pro09/budgetInfo.html?require_id="+require_id;
		top.toSysTab("清单预算详情",xurl);
	}
	function printBudget(){
		var xurl="pages/pro09/printBudgetInfo.html?require_id="+require_id;
		top.openSelectDialog("打印清单预算详情",xurl,900,500,null);
	}
	function addDesignPlanInfo(){
		var xurl="/pages/pro09/designPlanInfo.html?optType=insert&require_id="+require_id;
		top.openSelectDialog("新增设计计划信息",xurl,700,450,addDesignPlanInfoCallback);
	}
	function updateDesignPlanInfo(id,updateType){
		var xurl="/pages/pro09/designPlanInfo.html?optType="+updateType+"&id="+id;
		if(updateType=='update'){
			top.openSelectDialog("设计计划详情",xurl,700,450,addDesignPlanInfoCallback);
		}else{
			top.openSelectDialog("延期说明",xurl,400,300,null);
		}
	}
	function addDesignPlanInfoCallback(){
		var obj=top.getTempValue();
		if(obj.isSaveOK==true){
			queryDesignPlanTableList();
		}
	}
	// 设计计划中图形显示
	function checkDesignPlanDraw(){
		$("#DesignPlanTable").hide();
		$("#DesignPlanTitle").show();
		$("#DesignPlanDraw").show();
		$("#saveDesignPlanStatusBtn").hide();
		$("#draw_mode").hide();
		$("#tbl_mode").show();
		queryDesignPlanTableList();
	}
	//设计计划中表格显示
	function checkDesignPlanTable(){
		$("#DesignPlanTable").show();
		$("#DesignPlanTitle").hide();
		$("#DesignPlanDraw").hide();
		$("#draw_mode").show();
		$("#tbl_mode").hide();
		if(top.g_isPermit("09_design_work_plan_opt")){
			$("#saveDesignPlanStatusBtn").show();
		}
		queryDesignPlanTableList();
	}
	function queryDesignPlanTableList(){
		var aoData=[];
		aoData.push( { "name": "designPlanInfo.require_id", "value": require_id } );
		var surl=top.getUrlBase()+"/actions/DesignPlan.action?getDesignPlanInfoList";
		top.sendAjaxRequest(surl,aoData,queryDesignPlanTableListCallBack);
	}
	function queryDesignPlanTableListCallBack(obj){
		var designPlanList=null;
		var ht='';
		ht='<tr align="center"><td>计划阶段</td><td>计划开始时间</td><td>计划结束时间</td><td>实际开始时间</td><td>实际结束时间</td><td>计划周期</td><td>实际周期</td><td>计划状态</td><td>操作</td></tr>'
		if(obj.aaData){
			designPlanList=obj.aaData;
			var name='';
			for(var i=0;i<designPlanList.length;i++){
				ht+='<tr height="35px" class="tr_data" id="tr_construction_'+designPlanList[i].id+'">';
				if(top.g_isPermit("09_update_construction")){
					ht+='<td><a href="javascript:void(0)" onclick="updateDesignPlanInfo(\''+designPlanList[i].id+'\',\'update\')"><label id="lb_project_name_'+designPlanList[i].id+'">'+top.getCodeName("DESIGN_PLAN_STATUS",designPlanList[i].plan_name)+'</label></a></td>';
				}else{
					ht+='<td id="lb_project_name_'+designPlanList[i].id+'">'+top.getCodeName("DESIGN_PLAN_STATUS",designPlanList[i].plan_name)+'</td>';
				}
				ht+='<td><label id="lb_plan_start_date_'+designPlanList[i].id+'">'+top.getTimeStr(designPlanList[i].plan_begin_date ,true)+'</label></td>';
				ht+='<td><label id="lb_plan_end_date_'+designPlanList[i].id+'">'+top.getTimeStr(designPlanList[i].plan_end_date ,true)+'</label></td>';
				ht+='<td><label id="lb_fact_start_date_'+designPlanList[i].id+'">'+top.getTimeStr(designPlanList[i].fact_begin_date ,true)+'</label></td>';
				ht+='<td><label id="lb_fact_end_date_'+designPlanList[i].id+'">'+top.getTimeStr(designPlanList[i].fact_end_date ,true)+'</label></td>';
				ht+='<td><label id="lb_plan_cycle_'+designPlanList[i].id+'">'+designPlanList[i].plan_cycle+'</label></td>';
				ht+='<td><label id="lb_fact_cycle_'+designPlanList[i].id+'">'+designPlanList[i].fact_cycle+'</label></td>';
				ht+='<td><label id="lb_status_'+designPlanList[i].id+'">'+top.getCodeName( "CONSTRUCTIONSTATUS_STATUS", designPlanList[i].status )+'</label><input id="text_status_'+designPlanList[i].id+'"  type="hidden" value="'+designPlanList[i].status+'"/></td>';
				ht+='<td>';
				if ( designPlanList[i].fact_begin_date == 0 ) {
				  ht+='<a style="color:blue;cursor:pointer" onclick="deleteDesignPlanStatus(\''+designPlanList[i].id+'\')">删除</a>';
				}
				ht+='</td></tr>';
			}
		}else{
		    ht+="<tr class='tr_data'><td colspan='11'>暂无项目变更数据</td></tr>";
		}
		$('#DesignPlanTable').html(ht);
		createDesignPlanStatusTable(obj);
	}
	function deleteDesignPlanStatus(did){
	    currentDeleteId=did;
	    top.showConfirm("您确定要删除选中的设计计划吗？", doDeleteDesignPlanInfo);
	}
	
	function doDeleteDesignPlanInfo(){
		var aoData=[];
		aoData.push( { "name": "designPlanInfo.id", "value":currentDeleteId} );
		var xurl="/actions/DesignPlan.action?deleteDesignPlanInfo";
		top.sendAjaxRequest(xurl,aoData,updateDesignPlanInfoCallback);
	}
	function updateDesignPlanInfoCallback(obj){
       try{
		 var ht='';
         if ( obj.status==true){
             top.showInfoWinOK("操作成功");
			 queryDesignPlanTableList();
			 }else{
            top.showInfoWinError("操作失败 "+obj.msg);
        }
       }catch(e){
          top.showInfoWinError("处理异常:"+e.message);
       }
   }
	//生成计划进度信息列表
	function createDesignPlanStatusTable(obj){
		try{
		 designPlanList=obj.aaData;
		 var ht="";
		 var dis_days=0;
		 var fact_days=0;
		 var trColor="";
		 var leftPx=0;
		 var everyday=0;
		 var planwidth=0;
		 var factwidth=0;
		 var planfirstday=0;
		 var tempTime=0;
		 minTime=10000000000000;
	     maxTime=0;
		 var temp=0;
		 for (var i=0;i<designPlanList.length;i++) {
			countMaxMinTime(designPlanList[i].plan_end_date);
		    countMaxMinTime(designPlanList[i].plan_begin_date);
			countMaxMinTime(designPlanList[i].fact_begin_date);
			countMaxMinTime(designPlanList[i].fact_end_date);
			countMaxMinTime(designPlanList[i].apply_delay_date);
		 }
		 temp=(maxTime-minTime)/(24*60*60000)+1;
		 everyday=$("#DesignPlanTitle").width()*3/4/temp;
		 for (var i=0;i<designPlanList.length;i++) {
			dis_days=(designPlanList[i].plan_end_date-designPlanList[i].plan_begin_date)/(24*60*60000)+1;
			fact_days=(designPlanList[i].fact_end_date-designPlanList[i].fact_begin_date)/(24*60*60000)+1;

			planfirstday=minTime;
			ht+='<tr class="tr_data"  height="25px">';
			ht+=' <td align="center"  width="25%">';
			ht+=top.getCodeName("DESIGN_PLAN_STATUS",designPlanList[i].plan_name);
			ht+='</td>';
			ht+=' <td align="center" width="75%">';
			ht+='<table width="100%">';
			ht+='<tr>';
			ht+='<td width="100%">';
			
			leftPx=((designPlanList[i].plan_begin_date-planfirstday)/(24*60*60000))*everyday; 
			planwidth=everyday*dis_days;
			ht+='<div id="chartA'+i+'" onmouseover="showDetail(\'A\','+i+','+designPlanList[i].plan_begin_date+','+designPlanList[i].plan_end_date
			+','+designPlanList[i].fact_begin_date+','+designPlanList[i].apply_delay_date+','+designPlanList[i].fact_end_date+','
			+designPlanList[i].status+')" onmouseout="divHide()" style="position:relative;left:'+leftPx+'px;width:'+planwidth+'px;height:20px;background-color:blue;">';
			ht+='</div>';
			ht+='</td>';
			ht+='</tr>';
			ht+='<tr>';
			ht+='<td>';
			
			trColor="green";
			if ( designPlanList[i].status=='1' ) {
			  trColor="yellow";
			} else if ( designPlanList[i].status=='2' ) {
			  trColor="green";
			}
			
			leftPx=((designPlanList[i].fact_begin_date-planfirstday)/(24*60*60000))*everyday; 
			factwidth=everyday*fact_days;
			ht+='<div id="chartB'+i+'" onmouseover="showDetail(\'B\','+i+','+designPlanList[i].plan_begin_date+','+designPlanList[i].plan_end_date
			+','+designPlanList[i].fact_begin_date+','+designPlanList[i].apply_delay_date+','+designPlanList[i].fact_end_date+','
			+designPlanList[i].status+')" onmouseout="divHide()" style="position:relative;left:'+leftPx+'px;width:'+factwidth+'px;height:20px;background-color:'+trColor+';">';
			ht+='</div>';//margin:0px 0px 10px '+leftPx+'px; margin:0px 0px 10px '+leftPx+'px;
			ht+='</td>';
			ht+='</tr>';
			ht+='</table>';
			ht+='</td>';
			ht+='</tr>';
		}
		$("#DesignPlanDraw").html( ht );
	  }catch(e){
	  }
	  var midtime=minTime+((temp/2)*(24*60*60000)+1);
	  $("#txt_start_date").html( "&nbsp;"+top.getTimeStr(minTime,true));
	  $("#txt_mid_date").html( top.getTimeStr(midtime,true));
	  $("#txt_end_date").html( top.getTimeStr(maxTime,true)+"&nbsp;");
	}
	
	function showDetail(a,i,plan_begin_date,plan_end_date,fact_begin_date,apply_delay_date,fact_end_date,tdconstruction_status){
		
		$("#plan_begin_date").html(top.getTimeStr(plan_begin_date,true));
		$("#plan_end_date").html(top.getTimeStr(plan_end_date,true));
		$("#fact_begin_date").html(top.getTimeStr(fact_begin_date,true));
		$("#apply_delay_date").html(top.getTimeStr(apply_delay_date,true));
		$("#fact_end_date").html(top.getTimeStr(fact_end_date,true));
		$("#tdconstruction_status").html(top.getCodeName("CONSTRUCTIONSTATUS_STATUS",tdconstruction_status));
		var y = $("#chart"+a+i).offset().top+30;
		var x = $("#chart"+a+i).offset().left+10; 
		if(x>550){
			x=x-350-30;
		}
		if(y>400){
			y=y-150-30;
		}
		$("#planDetail").css("position", "absolute"); 
		$("#planDetail").css("left",x); 
		$("#planDetail").css("top", y);
		$("#planDetail").css("display", "block");  	
		$("#planDetail").show();
	}
	
	function divHide(){
	$("#planDetail").hide();
	}
	function countMaxMinTime(tempTime){
		if(tempTime!=0)
		{
			if ( minTime > tempTime ) {
			  minTime=tempTime;
			}
			if ( maxTime < tempTime ) {
			  maxTime = tempTime;
			}
		}
	}

	//弹出二层框
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
	/*设计协议允许修改时文本框显示*/
	function editDesignAgreement(){
	    //判断是否有设计协议操作权限
	    if(top.g_isPermit('design_agreement_opr')){
			showCheckedMark(false);
		    //若财务没有确认则进行修改，若已确认过则不能修改
			if($("#f_c").text()==""||$("#f_c").text()=="未确认"){
			        $("#designAgreementList td input").show();
					$("#anti_design_date td input").show();
					$("#area").hide();
					$("#ext18").hide();
					$("#designAgreementList td span").hide();
					$("#anti_design_date td span").hide();
					$("#are").show();
					$("#span_ext18").show();
					$("#load img").show();
					$(".delFj").each(function(){
					   $(this).show();
					})
					if($("#contract_id").val()!=""){
					  $("#deal_code").attr("disabled","true");
					}
					/*if(top.g_isPermit("design_agreement_con")){//判断是否有设计协议确认权限
						//$("#financial_confirm").show();
						//$("#financial_operator").show();	
						//$("#financial_confirm1").show();
						//$("#financial_operator1").show();
						//$("#f_o").hide();	
						//$("#f_c").hide();
						//$("#f_o1").hide();
						//$("#f_c1").hide();
						$("#load a").attr("href","javascript:void(0);");
						$(".delFj").each(function(){
						   $(this).attr("href","javascript:void(0);")		
					    })
		            }else{
						//$("#financial_confirm").hide();
						//$("#financial_operator").hide();
						//$("#financial_confirm1").hide();
						//$("#financial_operator1").hide();
					}*/
			}else{
			    $("#load img").hide();
				$(".delFj").each(function(){
				   $(this).attr("href","javascript:void(0);")		
		         })
			    top.showInfoWinError("财务已确认，不能修改！");
				return;
			}
		}else{
		    top.showInfoWinWarn("无操作权限！");
			return;
		}
	    saveOtherModelBt();
	}
	
	/*设计协议单击取消时回复到原来的状态*/
	function doCancelDesignAgreement(){
	    $("#designAgreementList td input").hide();
	    $("#anti_design_date td input").hide();
	    $("#anti_design_date td span").show();
	    $("#designAgreementList td span").show();
	    $("#load img").hide();
		showCheckedMark(true);
		$(".delFj").each(function(){
           $(this).hide();		
		})
	    editOtherModelBt();
	}
	
	/*保存设计协议信息*/
	function saveDesignAgreement(){
	   if(require_id==''){
	      top.showInfoWinError("操作失败！");
	   }else{
	   
	   //检验
	   if($("#deal_time").val().length<1){top.showInfoWinWarn("协议日期不能为空，请输入协议日期！");return;}
	   if($("#deal_code").val().length<1){top.showInfoWinWarn("设计协议编号不能为空！");return;}
	   if($("#deal_code").val().length>19){top.showInfoWinWarn("设计协议编号长度过长！");return;}
	   if($("#price").val().length<1){top.showInfoWinWarn("设计单价不能为空，请输入设计单价！");return;};
	   if(!IsFloat($("#price").val())||$("#price").val()<0||$("#price").val()>99999999){top.showInfoWinWarn("设计单价应该为0~99999999的数字类型！");return;}
	   if($("#payment").val().length<1){top.showInfoWinWarn("设计定金不能为空，请重新设计定金！");return;}
	   if(!IsFloat($("#payment").val())||$("#payment").val()<0||$("#payment").val()>99999999){top.showInfoWinWarn("设计定金应该为0~99999999的数字类型！");return;}
	   //if(!IsFloat($("#payment").val())){top.showInfoWinWarn("定金类型错误，请重新输入！");return;}
	   switch($("input[type=radio]:checked").val()){
		      case "0":
			    if($("#area").val().length<1){top.showInfoWinWarn("建筑面积不能为空，请输入建筑面积！");return;} 
                if($("#area").val()!="" && !IsFloat($("#area").val())){top.showInfoWinWarn("建筑面积类型错误，请重新输入！");return;}
                break;
              case "1":
                if($("#ext17").val().length<1){top.showInfoWinWarn("不含公摊外墙面积类型不能为空，请输入套内建筑面积！");return;}
                if($("#ext17").val()!="" && (!IsFloat($("#ext17").val()) || $("#ext17").val()<0 || $("#ext17").val()>99999999)){top.showInfoWinWarn("不含公摊外墙面积应该为0~99999999之间的数字类型，请重新输入！");return;}
                break;
              case "2":
                if($("#ext18").val().length<1){top.showInfoWinWarn("套内使用面积类型不能为空，请输入套内建筑面积！");return;}
	            if($("#ext18").val()!="" && !IsFloat($("#ext18").val())){top.showInfoWinWarn("套内使用面积类型错误，请重新输入！");return;}
                break;				
		}
       if($("#design_days").val().length<1){top.showInfoWinWarn("设计预计期不能为空，请输入设计预计期！");return;}
	   if($("#design_days").val()!="" && !IsNumber($("#design_days").val())){top.showInfoWinWarn("设计预计期类型错误，请重新输入！");return;}

	   
	   var aoData=[];
		//设计协议信息    
		aoData.push( { "name": "contract.require_id", "value": require_id} );
		aoData.push( { "name": "contract.contract_code", "value": $("#deal_code").val() } );
		aoData.push( { "name": "contract.sign_date", "value": top.toTimestamp($("#deal_time").val() )} );
		aoData.push( { "name": "contract.ext10", "value": $("#price").val() });
		aoData.push( { "name": "contract.ext9", "value": $("#area").val()} );
		aoData.push( { "name": "contract.ext5", "value":$("#payment").val()});
		aoData.push( { "name": "contract.ext8", "value": $("#final_payment").html() });
		//aoData.push( { "name": "contract.ext4", "value": top.toTimestamp($("#payment_time").val()) } );
		//aoData.push( { "name": "contract.ext2", "value": top.toTimestamp($("#anti_payment_time").val()) } );
		aoData.push( { "name": "contract.cust_code", "value": cust_code } );
		aoData.push( { "name": "contract.cust_name", "value": cust_name } );
		//aoData.push( { "name": "contract.ext6", "value": top.getCodeName("ISYESORNO",$("#financial_confirm").val()) } );
		//aoData.push( { "name": "contract.ext7", "value": top.getCodeName("ISYESORNO",$("#financial_confirm1").val()) } );
		//aoData.push( { "name": "contract.ext12", "value": $("#financial_operator").val() } );
		//aoData.push( { "name": "contract.ext11", "value": $("#financial_operator1").val() } );
		aoData.push( { "name": "contract.ext3", "value": $("#design_days").val() } );
		aoData.push( { "name": "contract.contract_type", "value": "2"} );
		aoData.push( { "name": "contract.ext15", "value": designer_code } );//设计师
		aoData.push( { "name": "contract.ext16", "value":top.getRadioValue( document.getElementsByName("ext16") ) } );
		aoData.push( { "name": "contract.ext17", "value": $("#ext17").val() } );
		aoData.push( { "name": "contract.ext18", "value": $("#ext18").val() } );
		//保存设计协议 生成上交设计方案工作提醒 设计师（消息接受者）
		aoData.push( { "name": "workRemind.accept_person", "value": designer_code } );
		//如果没有选择设计师，那在进行消息提醒时给谁发消息
		var xurl="/actions/Contract.action?saveDesignAgreement";
		if($("#contract_id").val()!=""){//若contract_id不为空则是修改设计协议信息
		   aoData.push({"name":"contract.contract_id","value":$("#contract_id").val()});
		   xurl="/actions/Contract.action?updateDesignContract";
		}
		top.sendAjaxRequest(xurl,aoData,optDesignAgrAndResultCallback);
		}
	}
	//设计协议保存成功后回调函数
	function optDesignAgrAndResultCallback(obj){
	    try{
        if ( obj.status == true ){
		    $("#contract_id").val(obj.msg);
            isSaveOK = true;
            top.showInfoWinOK("操作成功");
			$("#designAgreementList td input").hide();
			$("#anti_design_date td input").hide();
			//上传和删除链接改变
	        $("#load img").hide();
			$(".delFj").each(function(){
               $(this).hide();		
		    })
			$("#designAgreementList td span").show();
			$("#anti_design_date td span").show();
			editOtherModelBt();
			    //刷新页面
				$("#d_c").text($("#deal_code").val());
				$("#d_t").text($("#deal_time").val());
				$("#pri").text($("#price").val());
				$("#are").text($("#area").val());
				$("#span_ext17").html($("#ext17").val());
				$("#span_ext18").html($("#ext18").val());
				$("#pay").text($("#payment").val());
				$("#f_p").text($("#final_payment").html());
				//$("#p_t").text($("#payment_time").val());
				//$("#a_p_t").text($("#anti_payment_time").val());
				$("#f_c").text("未确认");
				//$("#f_o").text($("#financial_operator").val());
				
				$("#f_c1").text("未确认");
				//$("#f_o1").text($("#financial_operator1").val());
				$("#d_da").text($("#design_days").val());
				//$("#designsum").text($("#price").val()*$("#area").val());
				$("#paysum").text(parseFloat($("#payment").val())+parseFloat($("#final_payment").html()));
			    parent.checkInfoSave();
				showCheckedMark(true);
        }else{
            isSaveOK = false;
            top.showInfoWinError("操作失败 "+obj.msg);
        }
       }catch(e){
          top.showInfoWinError("处理异常:"+e.message);
       } 
	}
	
	//设计协议附件上传
function uploadDesignAgr(){
  if(require_id=='') { top.showInfoWinWarn("还未有需求id,不能上传协议附件!");return;}
  if($("#contract_id").val()=="") { top.showInfoWinWarn("请先填写协议内容，并将其保存！");return;}
  var xurl="/pages/uploadFile.html?belong_id0="+require_id+"&belong_id="+require_id+"&belong_type=2";
  top.openDialog("上传文件",xurl,true,600,230,saveDesignAgrFileCallBack);
}

//附件上传成功后附件列表刷新
function saveDesignAgrFileCallBack(){
	  var aoData=[];
      aoData.push( { "name": "fileinfo.belong_id", "value":require_id } );
      aoData.push( { "name": "fileinfo.belong_id0", "value":require_id } );
	  aoData.push( { "name": "fileinfo.belong_type", "value":'2' } );
	  top.sendAjaxRequest("/actions/Contract.action?getDesignAgrFj",aoData,getAgreementFjInfoCallback);
}

//附件上传成功后回调函数
function getAgreementFjInfoCallback(obj){
  var ht="<tr class='tr_data' height='25px'><td>序号</td><td>扫描件名称</td><td>上传人</td><td>上传日期</td><td>操作</td></tr>";
  if(obj.status==true){
      if(obj.body){
		  var fj=obj.body.designAgrFj;
		  designAgrFj(fj);
      }else{
	     ht+="<tr class='tr_data'><td>1</td><td></td><td></td><td></td><td id='load'><img src='../../img/up.png' style='cursor:pointer;' title='上传' onclick='javascript:uploadDesignAgr();'/></td></tr>";
		 $("#upDeAg").html(ht);
		 if(check){
		    $("#load").html("");
		 }
	 }	  
  }else{
    ht+="<tr class='tr_data'><td>1</td><td></td><td></td><td></td><td id='load'><img src='../../img/up.png' style='cursor:pointer;' title='上传' onclick='javascript:uploadDesignAgr();'/></td></tr>";
	$("#upDeAg").html(ht);
	if(check){
		$("#load").html("");
	}
  }
}

   

	
	//获取当前require_id有无设计协议
   function getDesignAgreement(){
	    if(require_id=='') return;
		var aoData=[];
		aoData.push( { "name": "contract.require_id", "value":require_id } );
		aoData.push( { "name": "contract.cust_code", "value":cust_code } );
		aoData.push( { "name": "contract.contract_type", "value":"2" } );
        top.sendAjaxRequest("/actions/Contract.action?getDesignAgrByRID",aoData,getAgreementDetailInfoCallback);
	}
	
	//获取协议信息成功后回调函数，处理页面显示信息
	function  getAgreementDetailInfoCallback(obj){
	    if(obj.status==true){
	       var o=obj.body;
		   if(o){
			   $("#d_c").text(o.contract_code);
			   $("#d_t").text(top.getTimeStr(o.sign_date,true));
			   $("#pri").text(o.ext10);
			   $("#are").text(o.ext9);
			   $("#span_ext17").html(o.ext17);
			   $("#span_ext18").html(o.ext18);
			   $("#pay").text(o.ext5);
			   $("#f_p").text(o.ext8);
			   $("#p_t").text(top.getTimeStr(o.ext2,true));
			   $("#a_p_t").text(top.getTimeStr(o.ext4,true));
			   if(o.ext6=="0"){
			     designAgr_check=false;
			     $("#f_c").text("未确认");
			   }else{
			     designAgr_check=true;
			     $("#f_c").text("已确认");
			   }
			   $("#f_o").text(top.getUserNameByCode(o.ext11));
			   if(o.ext7=="0"){	
			     designAgr_check=false;
			     $("#f_c1").text("未确认");
			   }else{
			     designAgr_check=true;
			     $("#f_c1").text("已确认");
			   }
			   $("#f_o1").text(top.getUserNameByCode(o.ext12));	
			   $("#d_da").text(o.ext3);		   
			   
			   $("#designsum").text(o.ext10*o.ext9);
			   $("#paysum").text(parseFloat(o.ext5)+parseFloat(o.ext8));
			   
			   $("#deal_code").val(o.contract_code);
			   $("#deal_time").val(top.getTimeStr(o.sign_date,true));
			   $("#price").val(o.ext10);
			   $("#area").val(o.ext9);
			   $("#payment").val(o.ext5);
			   $("#final_payment").html(o.ext8);
			  // $("#anti_payment_time").val(top.getTimeStr(o.ext2,true));
			  // $("#payment_time").val(top.getTimeStr(o.ext4,true));
			  // $("#financial_confirm").val(o.ext6);
			  // $("#financial_operator").val(o.ext11);
			  // $("#financial_confirm1").val(o.ext7);
			 //  $("#financial_operator1").val(o.ext12);
			   $("#design_days").val(o.ext3);
			   $("#contract_id").val(o.contract_id);
			   top.initRadioValue(document.getElementsByName("ext16"), o.ext16);
			   $("#ext17").val(o.ext17);
			   $("#ext18").val(o.ext18);
			   //获取附件信息
			   var aoData=[];
			   aoData.push( { "name": "fileinfo.belong_id", "value":require_id } );
			   aoData.push( { "name": "fileinfo.belong_type", "value":'2' } );
			   top.sendAjaxRequest("/actions/Contract.action?getDesignAgrFj",aoData,getAgreementFjInfoCallback);
			}else{
			   var ht="<tr class='tr_data' height='25px'><td>序号</td><td>扫描件名称</td><td>上传人</td><td>上传日期</td><td>操作</td></tr>";
		       ht+="<tr class='tr_data'><td>1</td><td></td><td></td><td></td><td id='load'><img src='../../img/up.png' style='cursor:pointer;display:none;' title='上传' onclick='javascript:uploadDesignAgr();'/></td></tr>";
		       $("#upDeAg").html(ht);
			}
	    }else{
		   var ht="<tr class='tr_data' height='25px'><td>序号</td><td>扫描件名称</td><td>上传人</td><td>上传日期</td><td>操作</td></tr>";
		   ht+="<tr class='tr_data'><td>1</td><td></td><td></td><td></td><td id='load'><img src='../../img/up.png' style='cursor:pointer;display:none;' title='上传' onclick='javascript:uploadDesignAgr();'/></td></tr>";
		   $("#upDeAg").html(ht);
		}   
	}                                                                                         

	function designAgrFj(fj){
	   //附件列表处理
	       var ht="";
	   	   ht+="<tr class='tr_data' height='25px'><td>序号</td><td>扫描件名称</td><td>上传人</td><td>上传日期</td><td>操作</td></tr>";
		   
		   if(fj.length>0){
			  for(var num=0;num<fj.length;num++){
				 ht+="<tr class='tr_data'><td>"+(num+1)+"</td><td>"+fj[num].file_name+"</td><td>"+top.getUserNameByCode(fj[num].upload_user)+"</td><td>"+top.getTimeStr(fj[num].upload_time,true)+"</td><td><a href='"+top.getUrlBase()+"/download?filePath="+fj[num].file_path+"&fileName='"+fj[num].file_name+"'><img src='../../img/down.png' style='cursor:pointer;' title='下载' id='down' /></a>&nbsp;<img class='delFj' src='../../img/closePage.png' style='cursor:pointer;display:none;' title='删除' class='delFj'  onclick='deleteDesignAgr("+fj[num].file_id+","+fj[num].belong_id+")'/></td></tr>";//
			  }
			  ht+="<tr class='tr_data'><td>"+(fj.length+1)+"</td><td></td><td></td><td></td><td id='load'><img src='../../img/up.png' style='cursor:pointer;display:none;' title='上传' onclick='javascript:uploadDesignAgr();'/></td></tr>";
			  $("#upDeAg").html(ht);
		   }else{
		      ht+="<tr class='tr_data'><td>1</td><td></td><td></td><td></td><td id='load'><img src='../../img/up.png' style='cursor:pointer;display:none;' title='上传' onclick='javascript:uploadDesignAgr();'/></td></tr>";
			  $("#upDeAg").html(ht);
			  if($("#otherSaveBt").is(":visiable")){
			     $("#load img").hide();
			  }
		   }
		  //对上传和删除按钮的控制
		  if($("#otherSaveBt").is(":visible")){
			     $("#load img").show();
				 $(".delFj").each(function(){
				    $(this).show();
				 })
		 } 
	}

	//设计协议附件删除
	function deleteDesignAgr(file_id,belong_id){
	       if(file_id!=""){
		     designFj_file_id=file_id;
			 designFj_belong_id=belong_id;
		   }
	       top.showConfirm("您确定要删除该附件吗？", doDeleteFj);
	   }
	
	//删除设计协议附件
	function doDeleteFj(){
	     var aoData=[];
		 aoData.push({"name":"fileinfo.file_id","value":designFj_file_id});
		 aoData.push({"name":"fileinfo.belong_id","value":designFj_belong_id});
		 aoData.push({"name":"fileinfo.belong_type","value":'2'});
		 top.sendAjaxRequest("/actions/Contract.action?deleteDesignAgrFj",aoData,getAgreementFjInfo);
	}
	
	//删除设计设计附件后刷新附件列表
	function getAgreementFjInfo(obj){
	   if(obj.status==true){
		   var aoData=[];
		   aoData.push( { "name": "fileinfo.belong_id", "value":require_id } );
		   aoData.push( { "name": "fileinfo.belong_type", "value":'2' } );
		   top.sendAjaxRequest("/actions/Contract.action?getDesignAgrFj",aoData,getAgreementFjInfoCallback);
	   }
	}
   	function fixFilename(fp){
     if ( !fp ) return "";
	 var n=fp.indexOf("_");
	 if ( n != -1 ) {
	   return fp.substring(n+2);
	 }
	 return fp;
   }
   	//预览
	function previewFile(filePath,fileName){
		var xurl="/pages/openFile.html?filePath="+filePath+"&fileName="+fileName;
		top.openDialog("文件预览",xurl,true,700,600,null);
	}
	
	//上传设计方案
	function uploadDesignScheme(){
		var xurl="/pages/uploadFile.html?belong_id0="+require_id+"&belong_id="+require_id+"&belong_type=1";
		top.openDialog("上传设计方案",xurl,true,700,230,uploadDesignSchemeFileCallBack);
	}
	//上传设计方案回调
	function uploadDesignSchemeFileCallBack(){
	try{
	  var obj = top.getTempValue();
			if(obj.isSaveOK) {
				 var name = fixFilename(obj.filePath);
				 var aoData=[];
				 aoData.push( { "name": "designScheme.require_id", "value": require_id } );
			     aoData.push( { "name": "designScheme.desgin_name", "value": obj.filePath } );
			    // aoData.push( { "name": "designScheme.examine_user", "value":$("#cust_manager").val() } );
			     aoData.push( { "name": "designScheme.examine_user", "value":window.parent.getCustManager() } );
				 //方案审核通知 window.opener.getCustManager();
			     aoData.push( { "name": "custInfo.cust_manager", "value": window.parent.getCustManager() } );
			     aoData.push( { "name": "custInfo.code", "value": cust_code } );  
				 var xurl="/actions/CustInfo.action?insertDesignScheme";
			    top.sendAjaxRequest(xurl,aoData,saveDesignSchemeCallback);	 
			}
			else{
			      top.showInfoWinError("操作失败");
			}
		}catch(e){
		 top.showInfoWinError("处理异常:"+e.message);
		}
	}
	
	function saveDesignSchemeCallback(obj){
	try{
	  if(obj.status==true){
	    $("#design_scheme_dialog").dialog("close");
		$("#design_bz").val("");
	    getDesignSchemeByReqiureId();
	  }
	  else{ 
	    top.showInfoWinError("操作失败");
	  }
	  }catch(e){
		 top.showInfoWinError("处理异常:"+e.message);
		}
	}
	
	function getDesignSchemeByReqiureId(){
	   var aoData=[];
	   aoData.push( { "name": "designScheme.require_id", "value": require_id } );
	   var xurl="/actions/CustInfo.action?getDesignSchemeByRequireId";
	   top.sendAjaxRequest(xurl,aoData,getDesignSchemeCallback);	
	}
	
function getDesignSchemeCallback(obj){
	try{
	   var o = obj.aaData;
			   var ht='';
			   //上传审计方案权限
			if(!top.g_isPermit('contract_check')){
			      ht='<tr style="background-color: #b9d8f3;" class="tr_data" height="35px">';
				  ht+='<td width="10%">序号</td>';
				  ht+='<td width="30%">设计方案</td>';
				  ht+='<td width="10%">上传日期</td>';
				  ht+=' <td width="10%">审批人</td>';
				  ht+='<td width="10%">流程状态</td>';
				  ht+='<td width="10%">审批日期</td>';
				  ht+='<td width="10%">操作/标注</td>';
				  ht+='</tr>';
	      if(o.length>0){
				for(var i=0;i<o.length;i++){
				var name = fixFilename(o[i].desgin_name);
				  ht+="<tr class='tr_data' height='35px'>";
				 if(o[i].final_sign=='02'){
					 ht+='<td><span id="design_index_'+o[i].design_id+'"><img style="width:20px" src="image/icon_success.png" style="padding-right:15px"></span>'+(i+1)+'</td>';
				  }else{
					ht+='<td><span id="design_index_'+o[i].design_id+'"  style="padding-right:15px"></span>'+(i+1)+'</td>';
				  }
				  ht+='<td><a href="'+top.getUrlBase()+'/download?filePath='+o[i].desgin_name+'+"&fileName="'+name+'">'+name+'</a></td>';
				  ht+="<td>"+top.getTimeStr(o[i].upload_time,true)+"</td>";
			      ht+="<td>"+top.getUserNameByCode(o[i].examine_user)+"</td>";
				  ht+="<td>"+top.getCodeName('CHECK_RESULT',o[i].examine_status);
				 if(o[i].design_bz!=""){
					   ht+="<input align='right' type='image' id='bz' src='/img/question.gif' title='"+o[i].design_bz+"' /></td>";
					 }else{
					   ht+="</td>";
				 }
				  ht+="<td>"+top.getTimeStr(o[i].examine_time,true)+"</td>";
				   if(o[i].examine_status=='01'){
				     if(top.g_isPermit('09_put_design_proposal')){
				      ht+='<td><a href="javascript:deleteDesignScheme('+o[i].design_id+')">删除</a></td>'; 
				     }
					 else{
				   ht+='<td></td>';
				       }
				  }else{
				     if(o[i].final_sign=='02'){
					  $("#design_scheme_uploadFile").hide();
					      ht+="<td>最终方案</td>"; 
					 }
					 else{
					      ht+="<td></td>"; 
					 }
				  
				  }
				    ht+="</tr>";
				}
	           }else{
			      ht+="<tr class='tr_data' height='35px'>";
				  ht+="<td colspan='8' align='center'>暂无设计方案数据</td>"; 
				    ht+="</tr>";
			  }
			   if(top.g_isPermit('09_put_design_proposal')){
			    $("#design_scheme_uploadFile").show();
			  }else{
			  $("#design_scheme_uploadFile").hide();
			  }
			  //设计方案审核权限
			}else{
			      ht='<tr style="background-color: #b9d8f3;" class="tr_data" height="35px">';
				  ht+='<td width="10%">序号</td>';
				  ht+='<td width="30%">设计方案</td>';
				  ht+='<td width="10%">上传日期</td>';
				  ht+=' <td width="10%">审批人</td>';
				  ht+='<td width="10%">流程状态</td>';
				  ht+='<td width="10%">审批日期</td>';
				  ht+='<td width="10%">最终方案标注</td>';
				  ht+='</tr>';
			  if(o.length>0){
			  var has_final_design = false;
			  for(var i=0;i<o.length;i++){
			     if(o[i].final_sign=='02'){
				   has_final_design = true;
				   break;
				 }
			  }
			for(var i=0;i<o.length;i++){
				var name = fixFilename(o[i].desgin_name);
				  ht+="<tr class='tr_data' height='35px'>";
				   if(o[i].final_sign=='02'){
					 ht+='<td><span id="design_index_'+o[i].design_id+'"><img style="width:20px" src="image/icon_success.png" style="padding-right:15px"></span>'+(i+1)+'</td>';
				  }else{
					ht+='<td><span id="design_index_'+o[i].design_id+'"  style="padding-right:15px"></span>'+(i+1)+'</td>';
				  }
				  ht+='<td><a href="'+top.getUrlBase()+'/download?filePath='+o[i].desgin_name+'+"&fileName="'+name+'">'+name+'</a></td>';
				  ht+="<td>"+top.getTimeStr(o[i].upload_time,true)+"</td>";
			      ht+="<td>"+top.getUserNameByCode(o[i].examine_user)+"</td>";
				  if(o[i].examine_status=='01'&&top.g_isPermit('design_scheme_check')){
				    ht+='<td><a class="buttonDivTwo" style="cursor:pointer;color:blue;text-decoration:none;" href="javascript:void(0)" onclick="examineDesignScheme('+o[i].design_id+',\''+o[i].remind_id+'\')">审核</a></td>';
				    //ht+='<td><a class="buttonDivTwo" style="width:40px;font-color:#ffff" href="javascript:examineDesignScheme('+o[i].design_id+',\'02\',\''+o[i].remind_id+'\')">通过</a>&nbsp;';
				    //ht+='<a class="buttonDivTwo" style="width:40px;font-color:#ffff" href="javascript:examineDesignScheme('+o[i].design_id+',\'03\',\''+o[i].remind_id+'\')">拒绝</a></td>';
				  }
				  else{
				    ht+="<td>"+top.getCodeName('CHECK_RESULT',o[i].examine_status);
				  if(o[i].design_bz!=""){
					   ht+="<input align='right' type='image' id='bz' src='/img/question.gif' title='"+o[i].design_bz+"' /></td>";
					 }else{
					   ht+="</td>";
					 }
				  }
				  ht+="<td>"+top.getTimeStr(o[i].examine_time,true)+"</td>";
				   if(o[i].examine_status=='02'){
				      if(has_final_design){
					     if(o[i].final_sign=='02'&&top.g_isPermit('09_final_scheme')){
						   design_status='01';
					       ht+='<td><a href="javascript:signDesignScheme('+o[i].design_id+')">取消最终方案</a></td>';
					      }
					      else if(o[i].final_sign=='02'){
					        ht+="<td>最终方案</td>"; 
					      }else{
							ht+="<td></td>"; 
						  }
					  }else{
						   design_status='02';
						   if(top.g_isPermit('09_final_scheme')){
							   $("#design_scheme_uploadFile").show();
							   ht+='<td><a href="javascript:signDesignScheme('+o[i].design_id+')">标注为最终方案</a></td>';
						   }else{
						     ht+="<td></td>"; 
						   }
					  }
				  }else{
				  ht+="<td></td>"; 
				  }
				   ht+="</tr>";
				}
			  }
			  else{
			      ht+="<tr class='tr_data' height='35px'>";
				  ht+="<td colspan='8' align='center'>暂无设计方案数据</td>"; 
				  ht+="</tr>";
			  }
			  }
			  $("#designSchemeList").html(ht);
	 
	 }catch(e){
          top.showInfoWinError("处理异常:"+e.message);
       }
	}
	
	// 添加设计方案和审核结果操作
	function saveDesignPlanAndResult(){
				var aoData=[];
				//设计方案信息    
				aoData.push( { "name": "designplan.require_id", "value": require_id} );
				aoData.push( { "name": "designplan.user_code", "value": $("#user_code").val() } );
				aoData.push( { "name": "designplan.signed_time", "value": top.toTimestamp($("#signed_time").val() )} );
				aoData.push( { "name": "designplan.designe_money", "value": top.toTimestamp($("#designe_money").val() )} );
				aoData.push( { "name": "designplan.update_paper_time", "value":top.toTimestamp( $("#update_paper_time").val() )} );
				aoData.push( { "name": "designplan.alter_paper_date", "value":top.toTimestamp( $("#alter_paper_date").val() )} );
				aoData.push( { "name": "designplan.finish_paper_date", "value":top.toTimestamp( $("#finish_paper_date").val() )} );
				aoData.push( { "name": "designplan.signed_cycle", "value": $("#signed_cycle").val() } );
				aoData.push( { "name": "designplan.paper_is_complete", "value": $("#paper_is_complete").val() } );
				aoData.push( { "name": "designplan.promotion_apply", "value": $("#promotion_apply").val() } );
				aoData.push( { "name": "designplan.memo", "value": $("#memo").val() } );
				aoData.push( { "name": "designplan.design_fee", "value": $("#design_fee2").val() } );
				//方案审核结果信息
				aoData.push( { "name": "checkinfo.require_id", "value": require_id } );
				aoData.push( { "name": "checkinfo.user_code", "value": $("#user_code").val() } );
				aoData.push( { "name": "checkinfo.check_result", "value": $("#check_result").val() } );
				aoData.push( { "name": "checkinfo.check_opinion", "value": $("#check_opinion").val() } );
				aoData.push( { "name": "checkinfo.check_time", "value": top.toTimestamp($("#check_time").val() )} );
				
				var xurl="/actions/CustInfo.action?saveDesignPlan";
				top.sendAjaxRequest(xurl,aoData,optDesignAndResultCallback);
				
	}
	function editDesignPlanAndResult(){
		$("#edit_cust_other_tabs-2").show();
		$("#view_cust_other_tabs-2").hide();
		saveOtherModelBt();
	}
	function doCancelDesignPlanAndResult(){
		$("#edit_cust_other_tabs-2").hide();
		$("#view_cust_other_tabs-2").show();
		editOtherModelBt();
	}	
	
	//标注最终方案
	 function signDesignScheme(id){
	 design_id=id;
	   if(design_status=='02'){
	    top.showConfirm("确定标记为最终方案",doSignDesignScheme);
		
	   }
	   else if(design_status=='01'){
	    top.showConfirm("确定取消该最终方案",doSignDesignScheme);
	   }
	  
	}
	
	function doSignDesignScheme(){
	 var isChangeCustStatus=true;
	 if(design_status=='01'){
		isChangeCustStatus=window.parent.updateCustStatus('3');
	 }else{
		window.parent.updateCustStatus('4');
	 }
	 if(isChangeCustStatus){
		 var aoData=[];
		 aoData.push( { "name": "isChangeCustStatus", "value": isChangeCustStatus } );//是否更改
		 aoData.push( { "name": "designScheme.design_id", "value": design_id } );
		 aoData.push( { "name": "designScheme.final_sign", "value": design_status } );
		 aoData.push( { "name": "designScheme.require_id", "value": require_id } );
		 top.sendAjaxRequest("/actions/CustInfo.action?signDesignScheme",aoData,doSignDesignSchemeCallback);
	 }else{
		top.showInfoWinWarn("最终方案已投入客户使用，无法执行取消操作！");
	 }
	  parent.checkInfoSave();
	}
	function doSignDesignSchemeCallback(obj){
	try{
	  if(obj.status==true){
		if(design_status=='02'){//如果确定最终方案，隐藏上传按钮 改变显示文字
			  $("#design_scheme_uploadFile").hide();
			  /*$("#designSchemeBt_"+design_id).html("取消最终方案");
			  $("#design_index_"+design_id).html(final_mark_html);
			  design_status='01';*/
		}else{
			/*$("#designSchemeBt_"+design_id).html("标注为最终方案");
			  $("#design_index_"+design_id).html("");
			design_status='02'*/
			$("#design_scheme_uploadFile").show();
		}
		getDesignSchemeByReqiureId();
	  }
	  else{ 
	    top.showInfoWinError("操作失败");
	  }
	  }catch(e){
		 top.showInfoWinError("处理异常:"+e.message);
		}
	}
	//删除设计方案
	function doDeleteDesignScheme(){
	    var aoData=[];
		aoData.push( { "name": "designScheme.design_id", "value": design_id } );
		top.sendAjaxRequest("/actions/CustInfo.action?deleteDesignSchemeById",aoData,saveDesignSchemeCallback);
	}
	
	function deleteDesignScheme(id){
	   design_id = id;
	   top.showConfirm("确定删除该设计方案",doDeleteDesignScheme);
	}
	
	//审核设计方案
	function examineDesignScheme(id,remindId){
	 design_id=id;
	 //design_status = status;
	 remind_id=remindId;
	   //if(status=='02'){
	     doExamineDesignScheme();
	   //}
	   //else if(status=='03'){
	   //  doExamineDesignScheme();
	   //}
	}
	//填写设计方案通过或拒绝的意见
	function doExamineDesignScheme(){
	  $( "#design_scheme_dialog" ).dialog({
      resizable: false,
      height:220,
      modal: true,
      buttons: {
        "通过": function() {
          var bz=$("#design_bz").val();
		  if(bz.length<1){top.showInfoWinWarn("请填写审核意见！");return ;}
		  var aoData=[];
	      aoData.push( { "name": "designScheme.design_id", "value": design_id } );
	      aoData.push( { "name": "designScheme.examine_status", "value": "02" } );
		  aoData.push( { "name": "designScheme.design_bz", "value":bz} );
		  //审核结果通知
		  aoData.push( { "name": "custInfo.code", "value":cust_code} );//客户id
		  aoData.push( { "name": "custRequire.require_manager", "value":designer_code} );//设计师id
		  if(remind_id){
			aoData.push( { "name": "designScheme.remind_id", "value":remind_id} );//工作提醒id 更新提醒状态
		  }
	      top.sendAjaxRequest("/actions/CustInfo.action?examineDesignScheme",aoData,saveDesignSchemeCallback);
        },
        "不通过": function() {
		   var bz=$("#design_bz").val();
		   if(bz.length<1){top.showInfoWinWarn("请填写审核意见！");return ;}
		   var aoData=[];
	       aoData.push( { "name": "designScheme.design_id", "value": design_id } );
	       aoData.push( { "name": "designScheme.examine_status", "value": "03" } );
		   aoData.push( { "name": "designScheme.design_bz", "value":bz} );
		  //审核结果通知
		   aoData.push( { "name": "custInfo.code", "value":cust_code} );//客户id
		   aoData.push( { "name": "custRequire.require_manager", "value":designer_code} );//设计师id
		   if(remind_id){
			aoData.push( { "name": "designScheme.remind_id", "value":remind_id} );//工作提醒id 更新提醒状态
		   }
	       top.sendAjaxRequest("/actions/CustInfo.action?examineDesignScheme",aoData,saveDesignSchemeCallback);
        }
      }
	 
	});

}

//---施工图begin---

//上传施工图
function uploadConstructionDrawing(){//由需求id、客户编号、编号7来区分施工图附件
        if(project_order_id==""){top.showInfoWinWarn("还有未工程订单，不能上传施工图！");return;}
		var xurl="/pages/uploadFile.html?belong_id0="+require_id+"&belong_id="+cust_code+"&belong_type=7&belong_id2="+project_order_id;
		top.openDialog("上传施工图",xurl,true,700,230,uploadConstructionDrawingCallBack);
}

function  uploadConstructionDrawingCallBack(){
       var o = top.getTempValue();
	   top.showInfoWinOK("施工图上传成功！");
	   
	   if(o.isSaveOK){
	     file_name=o.fileName;
		 file_path=o.filePath;
		 upload_time=o.upload_time;
	   }
       //新增施工图记录
	   var aoData=[];
	   aoData.push({ "name":"conDrawing.order_id","value":project_order_id});
	   aoData.push({ "name":"conDrawing.cust_code","value":cust_code});
	   aoData.push({ "name":"conDrawing.check_result","value":"0"});//设置施工图审核状态 0未审核
	   aoData.push({ "name":"conDrawing.file_name","value":file_name});//设置施工图文件名
	   aoData.push({ "name":"conDrawing.file_path","value":file_path});//设置施工图文件地址
	   aoData.push({ "name":"conDrawing.upload_time","value":upload_time});//设置施工图文件上传时间
	   top.sendAjaxRequest("/actions/ProjectOrder.action?insertConstructionDrawing",aoData,getConstructionDrawingList);
}

//施工图列表
function getConstructionDrawingList(){
   var aoData=[];
   aoData.push({ "name":"conDrawing.order_id","value":project_order_id });
   aoData.push({ "name":"conDrawing.cust_code","value":cust_code });
   //获取施工图列表信息
  top.sendAjaxRequest("/actions/ProjectOrder.action?getConstructionDrawing",aoData,getConstructionDrawingListCallBack);
}

//获取施工图信息后刷新施工图列表
function getConstructionDrawingListCallBack(obj){
   var content="<tr class='tr_data'><td style='font-weight:bold;'>序号</td><td style='font-weight:bold;'>施工图文件</td><td style='font-weight:bold;'>上传人</td><td style='font-weight:bold;'>提交日期</td><td style='font-weight:bold;'>审核状态</td><td style='font-weight:bold;'>审核人</td><td style='font-weight:bold;'>审核日期</td><td style='font-weight:bold;'>扣分</td><td style='font-weight:bold;'>操作</td></tr>";
   if(obj.status==true){
      if(obj.body){
	     var conDrawing=obj.body.conDrawing;
		 if(conDrawing){
		    for(var i=0;i<conDrawing.length;i++){
			  var look="";
			  var check="";
			  if(conDrawing[i].check_result!="0"){
			     look="<a href='javascript:checkConDrawing(\"update\","+conDrawing[i].check_id+")'><img src='../../img/zcool_left.png' title='查看' style='cursor:pointer;'/>查看</a>&nbsp;&nbsp;";
			  }else{
			     check="&nbsp;&nbsp;<span class='editScore' obj='a'><a href='javascript:checkConDrawing(\"insert\","+conDrawing[i].check_id+");'>打分</a></span>";
			  }
		      content+="<tr class='tr_data'><td>"+(i+1)+"</td><td>"+conDrawing[i].file_name+"</td><td>"+conDrawing[i].upload_user+"</td><td>"+top.getTimeStr(conDrawing[i].upload_time,true)+"</td><td>"+top.getCodeName("EXAMINE_STATUS",conDrawing[i].check_result)+"</td><td>"+top.getUserNameByCode(conDrawing[i].drawing_assessor)+"</td><td>"+top.getTimeStr(conDrawing[i].check_date,true)+"</td><td>"+conDrawing[i].total_deduct_marks+"</td><td>"+look;
			  if(conDrawing[i].total_deduct_marks==0){
			    content+="<a href='"+top.getUrlBase()+"/download?filePath="+conDrawing[i].file_path+"&fileName='"+conDrawing[i].file_name+"'><img src='../../img/down.png' style='cursor:pointer;' title='下载' id='down' /></a>";
			  }
			  content+=check+"</td></tr>";
			}
		 }else{
		    content+="<tr class='tr_data' align='center'><td colspan='9'>暂无施工图信息</td></tr>";
		 }
	  }else{
	       content+="<tr class='tr_data' align='center'><td colspan='9'>暂无施工图信息</td></tr>";
	  }
	  $("#constructionDrawingList").html(content);
   }else{
      content+="<tr class='tr_data' align='center'><td colspan='9'>暂无施工图信息</td></tr>";
      $("#constructionDrawingList").html(content);
   }
   
    //施工图审核打分权限
		if(top.g_isPermit("09_construction_drawing_check")){
			$(".editScore").show();
		}else{
			$(".editScore").hide();
		}	
}
	  
	  //施工图打分页面
	  function checkConDrawing(optType,id){
	      top.openDialog("施工图打分","pages/pro09/constructionDrawingCheck.html?optType="+optType+"&id="+id+"&order_id="+project_order_id,true,800,600,checkConDrawingCallBack);
	  }
      function checkConDrawingCallBack(){
	       getConstructionDrawingList();
	  }
	  
	  	//保存施工图审核信息---回调函数
	function optSaveConstructCheckCallback(obj){
		try{
			if ( obj.status == true ){
				isSaveOK = true;
				top.showInfoWinOK("操作成功");
				
				
			$("#saveContractCheckBtn").html('编辑');
			$("#edit_tabs-9").hide();
			$("#view_tabs-9").show();
			
			
				$("#view_drawing_assessor").html($("#drawing_assessor").val());
				$("#view_goover_explain").html($("#goover_explain").val());
				$("#view_goover_date").html($("#goover_date").val());
				$("#view_check_date").html($("#check_date").val());
				$("#view_total_deduct_marks").html($("#total_deduct_marks").html());
				$("#view_total_score").html($("#total_score").val());
				$("#view_time_limit").html($("#time_limit").val());
				$("#view_construct_pro1_score").html($("#check_pro1_score").val());
				$("#view_construct_pro2_score").html($("#check_pro2_score").val());
				$("#view_construct_pro3_score").html($("#check_pro3_score").val());
				$("#view_construct_pro4_score").html($("#check_pro4_score").val());
				$("#view_construct_pro5_score").html($("#check_pro5_score").val());
				$("#view_construct_pro6_score").html($("#check_pro6_score").val());
				$("#view_construct_pro7_score").html($("#check_pro7_score").val());
				$("#view_construct_pro8_score").html($("#check_pro8_score").val());
				$("#view_construct_pro9_score").html($("#check_pro9_score").val());
				$("#view_construct_pro10_score").html($("#check_pro10_score").val());
				$("#view_construct_pro11_score").html($("#check_pro11_score").val());
				$("#view_construct_pro12_score").html($("#check_pro12_score").val());
				$("#view_construct_pro13_score").html($("#check_pro13_score").val());
				$("#view_construct_pro14_score").html($("#check_pro14_score").val());
				$("#view_construct_pro15_score").html($("#check_pro15_score").val());
				$("#view_construct_pro16_score").html($("#check_pro16_score").val());
				$("#view_construct_pro17_score").html($("#check_pro17_score").val());
				$("#view_construct_pro18_score").html($("#check_pro18_score").val());
				$("#view_construct_pro19_score").html($("#check_pro19_score").val());
				$("#view_construct_pro20_score").html($("#check_pro20_score").val());
				$("#view_construct_pro1_num").html($("#check_pro1_num").val());
				$("#view_construct_pro2_num").html($("#check_pro2_num").val());
				$("#view_construct_pro3_num").html($("#check_pro3_num").val());
				$("#view_construct_pro4_num").html($("#check_pro4_num").val());
				$("#view_construct_pro5_num").html($("#check_pro5_num").val());
				$("#view_construct_pro6_num").html($("#check_pro6_num").val());
				$("#view_construct_pro7_num").html($("#check_pro7_num").val());
				$("#view_construct_pro8_num").html($("#check_pro8_num").val());
				$("#view_construct_pro9_num").html($("#check_pro9_num").val());
				$("#view_construct_pro10_num").html($("#check_pro10_num").val());
				$("#view_construct_pro11_num").html($("#check_pro11_num").val());
				$("#view_construct_pro12_num").html($("#check_pro12_num").val());
				$("#view_construct_pro13_num").html($("#check_pro13_num").val());
				$("#view_construct_pro14_num").html($("#check_pro14_num").val());
				$("#view_construct_pro15_num").html($("#check_pro15_num").val());
				$("#view_construct_pro16_num").html($("#check_pro16_num").val());
				$("#view_construct_pro17_num").html($("#check_pro17_num").val());
				$("#view_construct_pro18_num").html($("#check_pro18_num").val());
				$("#view_construct_pro19_num").html($("#check_pro19_num").val());
				$("#view_construct_pro20_num").html($("#check_pro20_num").val());
			}else{
				isSaveOK = false;
				top.showInfoWinError("操作失败 "+obj.msg);
			}
		   }catch(e){
			  top.showInfoWinError("处理异常:"+e.message);
		   }
	}
	
	//计算分数
	function computeScore(index){
		var deductMarks=0;
		var score=[5,5,2,1,1,0.5,0.5,1,5,1,5,10,0.5,1,2,0.5,5,2,0.5,2];
		var num=$("#construct_pro"+index+"_num").val();
		deductMarks=Number(score[index-1]*num);
		$("#construct_pro"+index+"_score").val( deductMarks );
		
		computeDeductMarks();
	}
	
	function computeDeductMarks(){
		var totalDeductMarks=0;
		var deductMarks=0;
		var totalScore=0;
		for(var i=0;i<20;i++){
			deductMarks=Number($("#construct_pro"+(i+1)+"_score").val());
			totalDeductMarks=Number(totalDeductMarks+deductMarks);
		}
		$("#total_deduct_marks").html(totalDeductMarks);
		if(totalDeductMarks>100){
			$("#total_score").val('0');
		}else{
			totalScore=Number(100-totalDeductMarks);
			$("#total_score").val(totalScore);
		}
		
	}
	
//判断原房屋结构是否有缺陷
function onchangeIsfault(){
	   if ($("#is_fault").val()==1) {
		 $("#fault_condition").show();
	   } else {
	     $("#fault_condition").hide();
	   }
}
//判断暖气是否有改动
function onchangeHeaterIsChange(){
	   if ($("#heater_is_change").val()==1) {
		 $("#heater_suggest").show();
	   } else {
	     $("#heater_suggest").hide();
	   }
}
//判断煤气是否需要改动
function onchangeGasIsChange(){
	   if ($("#gas_is_change").val()==1) {
		 $("#gas_suggest").show();
	   } else {
	     $("#gas_suggest").hide();
	   }
}
//判断是否有中央空调
function onchangeHasAirconditioning(){
	   if ($("#has_airconditioning").val()==1) {
		 $("#airconditioning_height").show();
		 $("#air_height_text").show();
	   } else {
	     $("#airconditioning_height").hide();
		 $("#air_height_text").hide();
	   }
}

function onchangeIs_buy(){
 if ($("#is_buy").val()==1) {
		 $("#trJjTypeDetail").show();
		 $("#view_trJjTypeDetail").show();
  } else {
	     $("#trJjTypeDetail").hide();
		 $("#view_trJjTypeDetail").hide();
 }
}
function changeAreaType(){
	
 var v=top.getRadioValue( document.getElementsByName("ext16") );
	   if ( v == '' ) {
		return ;
	   }
	   if($("#price").val()==''){
		return;
	   }
	  var sumMoney=0;
		if(v==0){
			if($("#area").val()!=''&&IsNumber($("#area").val())){
					sumMoney=$("#area").val()*$("#price").val();
			}
		}else if(v==1){
			if($("#ext17").val()!=''&&IsNumber($("#ext17").val())){
					sumMoney=$("#ext17").val()*$("#price").val();
			}
		}else{
			if($("#ext18").val()!=''&&IsNumber($("#ext18").val())){
					sumMoney=$("#ext18").val()*$("#price").val();
			}
		}
		//交款总额
	  $("#designsum").html(sumMoney);
	  $("#paysum").html(sumMoney);
	  if(sumMoney!=0&&$("#payment").val()!=''&&IsNumber($("#payment").val())){
		$("#final_payment").html(sumMoney-$("#payment").val());//设计尾款
	  }
}
function showCheckedMark(isShow){
	if(!isShow){
		$("#mark_0").hide();
		$("#mark_1").hide();
		$("#mark_2").hide();
		return;
	}
	var v=top.getRadioValue( document.getElementsByName("ext16") );
	if ( v == '' ) {
		return ;
	} 
	if(v==0){
		$("#mark_0").show();
		$("#mark_1").hide();
		$("#mark_2").hide();
	}else if(v==1){
		$("#mark_0").hide();
		$("#mark_1").show();
		$("#mark_2").hide();
	}else{
		$("#mark_0").hide();
		$("#mark_1").hide();
		$("#mark_2").show();
	}
}



//---施工图end---

//--------------------------------------------- 工程预算 ------------------------------------------------
//初始化方法
   function getBudgetInfo(){
	var aoData=[];
	headList=[];
	aoData.push( { "name": "requrireInfo.id", "value": require_id } ); 
	xurl="/actions/ProjectOrder.action?getBudgetInfoById";
	top.sendAjaxRequest(xurl,aoData,getBudgetInfoCallback);
	
   }
   function getBudgetInfoCallback(obj){
	if (obj.status == true){
		var budgetInfo=obj.body;
		$( "#view_manager_fee_type").html(top.getCodeName("MANAGER_FEE_TYPE",budgetInfo.manager_fee_type));
		$( "#view_manager_fee").html(budgetInfo.manager_fee);
		$( "#view_taxes_scale").html(budgetInfo.taxes_scale);
		if(budgetInfo.is_report==''){
			$( "#view_is_report").html("否");
			
		}else if(budgetInfo.is_report==''||budgetInfo.is_report=='0'){
			if(budgetInfo.is_report==''){	
				$( "#view_is_report").html("否");
			}else{
				$( "#view_is_report").html("是");
			}
			
		}else{
			$( "#view_is_report").html("是");
		}
		$( "#view_prefer_info").html(budgetInfo.prefer_info);
		$( "#view_prefer_money").html(budgetInfo.prefer_money);
		$( "#view_budget_type").html(top.getCodeName("BUDGET_TYPE",budgetInfo.budget_type));
		$( "#view_budget_time").html(top.getTimeStr(budgetInfo.budget_time,true));
		$( "#view_budget_person").html(budgetInfo.budget_person);
		headList=budgetInfo.budgetHeadInfoList;
		initBudgetHeadInfo(headList);
		$("#view_td_room_names").html(genarateRoomsSelectHtml(headList,"view_room_names"));
		getBudgetItemList();
	}
   }
	function genarateRoomsSelectHtml(headList,idstr){
		var ht='';
		ht+='<select id="'+idstr+'" onchange="getBudgetItemList()">';
		if(headList!=null&&headList.length>0){
			for(var i=0;i<headList.length;i++){
				ht+='<option value="'+headList[i].head_id+'">'+headList[i].room_name;
				ht+='</option>';
			}
		//初始显示预算详情信息
		}
		ht+='</select>';
		return ht;
	}
	function getBudgetItemList(){
	   var aoData=[];
	   aoData.push( { "name": "budgetItem.head_id", "value": $("#view_room_names").val() } );
	   aoData.push( { "name": "budgetItem.require_id", "value": require_id } );
	   top.sendAjaxRequest("/actions/ProjectOrder.action?getBudgetItemList",aoData,getBudgetItemListCallback);
	}
	function getBudgetItemListCallback(obj){
		if(obj){
		var list=obj.aaData;
			var total=0;
			var view_ht='';
			view_ht+='<tr class="tr_data">';
			view_ht+="<td width='6%'>排序</td><td width='10%'>产品名称</td>";
			view_ht+="<td width='6%'>单位</td><td width='6%'>单价</td><td width='6%'>数量</td><td width='6%'>主材</td>";
			view_ht+="<td width='6%'>辅料</td><td width='6%'>人工</td><td width='6%'>耗损</td>";
			view_ht+="<td width='6%'>成本</td><td>工艺做法及材料说明</td>";
			view_ht+='</tr>';
			for(var i=0;i<list.length;i++){
				total=list[i].unit_price*list[i].num+list[i].rengong_price+list[i].sunhao_price+list[i].fuliao_cost+list[i].zhucai_price;
				//view
				view_ht+='<tr class="tr_data">';//head_id,product_id,product_name,product_unit,memo,budget_id,num,sunhao_price,zhucai_price,fuliao_cost,rengong_price,unit_price,total_price,order_num
				view_ht+='<td>'+list[i].order_num+'</td>';
				view_ht+='<td>'+list[i].product_name+'</td>';
				view_ht+='<td>'+list[i].product_unit+'</td>';
				view_ht+='<td>'+list[i].unit_price+'</td>';
				view_ht+='<td>'+list[i].num+'</td>';
				view_ht+='<td>'+list[i].zhucai_price+'</td>';
				view_ht+='<td>'+list[i].fuliao_cost+'</td>';
				view_ht+='<td>'+list[i].rengong_price+'</td>';
				view_ht+='<td>'+list[i].sunhao_price+'</td>';
				view_ht+='<td>'+total+'</td>';
				view_ht+='<td>'+list[i].memo+'</td>';
				view_ht+='</tr>';
				total=0;
			}
			$("#viewItemList").html(view_ht);
		}
	}
	//初始化表头信息
	  function initBudgetHeadInfo(budgetHeadList){
		var view_ht="";
		var roomInfoIndex=0;
		view_ht+="<tr class='tr_data'>";
		view_ht+="<td width='20%'>房间编号</td>";
		view_ht+="<td width='21%'>房间类型</td>";
		view_ht+="<td width='20%'>房间名称</td>";
		view_ht+="<td width='13%'>地面积(单位：平方米)</td>";
		view_ht+="<td width='13%'>墙面积（单位：平方米）</td>";
		view_ht+="<td width='13%'>层高（单位：米）</td>";
		view_ht+="</tr>";
		if(budgetHeadList!=null&&budgetHeadList.length>0){
			for(var i=0;i<budgetHeadList.length;i++){
				view_ht+="<tr id='view_tr_room_row"+roomInfoIndex+"'  class='tr_data'>";
				view_ht+="<td id='view_room_id"+roomInfoIndex+"'>"+budgetHeadList[i].room_id+"</td>";
				view_ht+="<td id='view_positon"+roomInfoIndex+"'>"+top.getCodeName("BUDGET_ROOM_TYPE",budgetHeadList[i].position)+"</td>";
				view_ht+="<td id='view_room_name"+roomInfoIndex+"'>"+budgetHeadList[i].room_name+"</td>";
				view_ht+="<td id='view_earth_area"+roomInfoIndex+"'>"+budgetHeadList[i].earth_area+"</td>";
				view_ht+="<td id='view_wall_area"+roomInfoIndex+"'>"+budgetHeadList[i].wall_area+"</td>";
				view_ht+="<td id='view_room_height"+roomInfoIndex+"'>"+budgetHeadList[i].room_height+"</td>";
				view_ht+="</tr>";
				roomInfoIndex++;
			}
		}
	  $("#view_budget_head_list").html(view_ht);
	}
	
	
	//上传房屋原结构附件
	function uploadOldStructureFj(){
	    var xurl="/pages/uploadFile.html?belong_id0="+require_id+"&belong_id="+require_id+"&belong_type=11";
		top.openDialog("上传房屋原结构文件",xurl,true,700,230,uploadOldStructrueFjCallback);  
	}
	
	function uploadOldStructrueFjCallback(){
	    var obj = top.getTempValue();
			$("#old_structure_fj_name").val(obj.fileName);
			var path="/download?filePath="+obj.filePath+"&fileName='"+obj.fileName+"'";
			$("#old_structure_fj_path").val(obj.filePath);
			$("#download_old_structure_fj").html("<a style='cursor:pointer;' href=\""+top.getUrlBase()+path+"\">"+obj.fileName+"</a>");
			$("#download_old_structure_fj").show();
			$("#view_old_structure_fj").html("<a style='cursor:pointer;' href=\""+top.getUrlBase()+path+"\">"+obj.fileName+"</a>");
		if(obj.isSaveOK) {
		}else{
			top.showInfoWinError("操作失败");
		}
	}