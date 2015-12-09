   
   function doBeforeClose(){
     var obj={
    		  "isSaveOK":isSaveOK
    		};
     top.setTempValue(obj);
   }
   
   function doCancel(){
	   top.closeDialog();
   }

 function applyChangeUserType(t){
   top.setTempValue( $("#user_name").val() );
   openDialog("申请矫正级别调整","changeUserLevel.html?infoId="+infoId+"&currentType="+t,true,550,350,null);
 }

 function drawActionCircle(){
   try{
        if ( $("#actionLat").val() != '0' && $("#actionLat").val() != '' ) {
		  var mapFrame = document.getElementById("baiduMapDrawIframe");
	      if ( mapFrame ) {
		    mapFrame.contentWindow.setInitDrawLonLat( $("#actionLon").val(), $("#actionLat").val(), $("#actionR").val() );
		  }
		}
   }catch(e){
   }
 }

 
 function getAlarmList(){
      if ( $('#alarmDataTable').html() != '' ) return ;  
			   var surl=top.getUrlBase()+"/actions/ProMonitor.action?getProAlarmInfoList";
			   var oTable = $('#alarmDataTable').dataTable( {
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
						 aoData.push( { "name": "info.user_code", "value": infoId } );
			        },
			      "sDom": "frtlip",
				  "sPaginationType": "full_numbers",
					"aoColumns": [
								{ "sTitle": "报警时间", "mDataProp": "alarm_time", "sWidth": "200px", "sClass": "center",
                                     "fnRender": function ( oObj ) {
							            return top.getTimeStr( oObj.aData.alarm_time, false );
                                     },
                                     "bUseRendered": false 
							    },
							    { "sTitle": "报警类型", "mDataProp": "alarm_type", "sWidth": "200px", "sClass": "center",
                                     "fnRender": function ( oObj ) {
								        return top.getCodeName( "ALARM_TYPE", oObj.aData.alarm_type );
                                     },
                                     "bUseRendered": false 
							    },
								{ "sTitle": "备注", "mDataProp": "memo", "sWidth": "680px","bUseRendered": false }
                      ]
				} );
 }
 
 function getCheckInList(){
           if ( $('#checkIndataTable').html() != '' ) return ;  
 			   var iaoColumns= [ 
							   { "sTitle": "签到时间", "mDataProp": "checkin_time", "sWidth": "200px", 
                                     "fnRender": function ( oObj ) {
							            return top.getTimeStr( oObj.aData.checkin_time, false );
                                     },
                                     "bUseRendered": false 
							    },			   
							   { "sTitle": "签到地址", "mDataProp": "addr", "sWidth": "800px","bUseRendered": false }

               ];
			   var surl=top.getUrlBase()+"/actions/ProMonitor.action?getProCheckInList";
			   var oTable = $('#checkIndataTable').dataTable( {
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
						 aoData.push( { "name": "checkin.user_code", "value": infoId } );
			        },
			      "sDom": "frtlip",
				  "sPaginationType": "full_numbers",
					"aoColumns": iaoColumns
				} );
 }
 
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

  function saveActionAreaCallback(obj){
	   try{
	    if ( obj.status == true ){
	      top.showInfoWinOK("操作成功");
	    }else{
	      isSaveOK = false;
	      top.showInfoWinError("操作失败 "+obj.msg);
	    }
	   }catch(e){
		  top.showInfoWinError("处理异常:"+e.message);
	   }
   }

 function getCommunity(){
  			   var iaoColumns= [
							   { "sTitle": "社区服务时间", "mDataProp": "service_time", "sWidth": "150px", 
                                     "fnRender": function ( oObj ) {
							            return top.getTimeStr( oObj.aData.service_time, true );
                                     },
                                     "bUseRendered": false 
							    },
							   { "sTitle": "社区服务时长", "mDataProp": "time_dis", "sWidth": "200px", "bUseRendered": false ,"bSortable":false},								
							   { "sTitle": "社区服务类型", "mDataProp": "service_type", "sWidth": "200px","bUseRendered": false},
							   { "sTitle": "备注", "mDataProp": "memo", "sWidth": "200px", "bUseRendered": false,"bSortable":false },
								 { "sTitle": "操作", "mDataProp": "service_time", "sWidth": "100px","sClass": "center", "bSortable":false, "fnRender": function ( oObj ) {
							    if ( gUserStatus == '0' ) {
							      return '<a href=\'javascript:void(0)\' onclick="updateCommunityInfo(\''+oObj.aData.service_time+'\',\''+oObj.aData.id+'\',\''+oObj.aData.service_type+'\',\''+oObj.aData.time_dis+'\',\''+oObj.aData.memo+'\')" >修改</a>';
								}
								else return "";
								}, "bUseRendered": false}

               ];
			   var surl=top.getUrlBase()+"/actions/Prison.action?getProCommunityList";
			   var oTable = $('#communitydataTable').dataTable( {
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
						 aoData.push( { "name": "comunity.user_code", "value": infoId } );
			        },
			      "sDom": "frtlip",
				  "sPaginationType": "full_numbers",
					"aoColumns": iaoColumns
				} );
 }

function getCorrectStrategy(){
				try{
				  correct_type = prisonInfo.correct_type ;
				} catch(e){
				}
				if ( correct_type!="" ) {
				  $("#correctType"+correct_type).show(); 
				} else {
				  $("#correctType2").show();
				}
				var cheks=null;
				if ( prisonInfo.select_solutions ) cheks=prisonInfo.select_solutions.split(",");
				if ( cheks != null ) {
					for(var i=1;i<cheks.length;i++){
						initYesNoCheckbox("c"+cheks[i],true);
					}
				}
				
				 var iaoColumns= [
							   { "sTitle": "时间", "mDataProp": "start_time", "sWidth": "250px", "sClass": "center","fnRender": function ( oObj ) {
							            var start_time = top.getTimeStr( oObj.aData.start_time, false ).substring(0,16);
										var end_time = top.getTimeStr( oObj.aData.end_time, false ).substring(11,16);
                                        return  start_time+" -- "+end_time;
                                   }, "bUseRendered": false },
							   { "sTitle": "事项", "mDataProp": "item", "sWidth": "350px","sClass": "center" ,"fnRender": function ( oObj ) {
							             var str="";
										 if(oObj.aData.item=="null"){
										    return str;
										 }
										 var values = oObj.aData.item.split(",");
										 for(var i=0;i<values.length;i++){
										   str+=top.getCodeName("STRATEGY_TYPE",values[i])+"、";
										 }
                                        return str.substring(0,str.length-1);
                                   },"bSortable":false,"bUseRendered": false },								
							   { "sTitle": "备注", "mDataProp": "memo", "sWidth": "400px","sClass": "center","bSortable":false, "bUseRendered": false },
							   { "sTitle": "操作", "mDataProp": "correct_id", "sWidth": "100px","sClass": "center", "bSortable":false, 
							   "fnRender": function ( oObj ) {
							       var str="";
								   if(top.g_isPermit("08_info_updateCorrectInfo")){
								   str+='<a href=\'javascript:void(0)\' onclick="updateCorrectInfo(\''+oObj.aData.correct_id+'\')">修改</a>'
								   }
								   if(top.g_isPermit("08_info_deleteCorrectInfo")){
						            str+='&nbsp;&nbsp;<a href=\'javascript:void(0)\' onclick="deleteCorrectInfo(\''+oObj.aData.correct_id+'\')">删除</a>';
									}
									return str;
								}, "bUseRendered": false}];
								
			   var surl=top.getUrlBase()+"/actions/Prison.action?getCorrectInfoList";
			   var oTable = $('#correctdataTable').dataTable( {
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
						 aoData.push( { "name": "correctInfo.prison_code", "value": infoId } );
			        },
			      "sDom": "frtlip",
				  "sPaginationType": "full_numbers",
					"aoColumns": iaoColumns
				} );
 }

 function getStudyRecd(){
      if ( $('#studydataTable').html() != '' ) return ;  
  			   var iaoColumns= [{"sTitle": "服刑人员编号", "mDataProp": "prison_code", "sWidth": "100px",  "fnRender": function ( oObj ) {
							           return oObj.aData.prison_code;
                                     },"bUseRendered": false },		          
							   { "sTitle": "学习服务时间", "mDataProp": "study_time", "sWidth": "100px", "sClass": "center","fnRender": function ( oObj ) {
                                        return top.getTimeStr( oObj.aData.study_time, true );
                                   }, "bUseRendered": false },
							   { "sTitle": "学习服务地点", "mDataProp": "addr", "sWidth": "100px", "bUseRendered": false },								
							   { "sTitle": "学习服务内容", "mDataProp": "study_content", "sWidth": "50px", "bUseRendered": false },
							   { "sTitle": "学习服务时长", "mDataProp": "duration", "sWidth": "50px", "bUseRendered": false}
							
];
			   var surl=top.getUrlBase()+"/actions/StudyRecd.action?getStudyRecdList";
			   var oTable = $('#studydataTable').dataTable( {
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
						 aoData.push( { "name": "correct.prison_code", "value": infoId } );
			        },
			      "sDom": "frtlip",
				  "sPaginationType": "full_numbers",
					"aoColumns": iaoColumns
				} );
 }
 function updateCorrectStrategy(report_time,strategy_id,addr,duration,strategy_type,status,prison_code){
      var xurl="CorrectStrategyInfo.html?optType=update&infoId="+strategy_id+"&report_time="+report_time
	  +"&addr="+addr+"&duration="+duration+"&strategy_type="+strategy_type+"&status="+status+"&prison_code="+prison_code;
	  openDialog( "矫正方案信息",xurl,true,600,300,updateCorrectStrategyCallBack);
 }
 function updateCorrectStrategyStatus(strategy_id){
      currentOptStrategyId=strategy_id;
	  top.showConfirm("确定更改该矫正方案状态？", doUpdateCorrectStrategyStatus);
 }
 
 function updateCorrectStrategyCallBack(){
 	try{
		  var obj = top.getTempValue();
		  if(obj.isSaveOK) getCorrectStrategy();
    }catch(e){
    }
 }
 
 function doUpdateCorrectStrategyStatus(){
      var aoData=[];
	  aoData.push( { "name": "correct.strategy_id", "value": currentOptStrategyId } );
	  top.sendAjaxRequest("/actions/Prison.action?updateCorrectStrategyStatus",aoData,saveCorrectStrategyCallBack);
 }
 
 function doDeleteCorrectStrategy(){
      var aoData=[];
	  aoData.push( { "name": "correct.strategy_id", "value": currentOptStrategyId } );
	  top.sendAjaxRequest("/actions/Prison.action?deleteCorrectStrategyById",aoData,saveCorrectStrategyCallBack);
 }
 
 function deleteCorrectStrategy(strategy_id){
     currentOptStrategyId=strategy_id;
	 top.showConfirm("确定删除该矫正方案状态？", doDeleteCorrectStrategy);
 }

 function saveCorrectStrategyCallBack(obj) {
     try{
	    if ( obj.status == true ) {
		  getCorrectStrategy();
		} else {
	      top.showInfoWinError("操作失败 "+obj.msg);
		}
	 }catch(e){
	 }
 }

 function getInterviewiInfo(){
  			   var iaoColumns= [
							   { "sTitle": "走访时间", "mDataProp": "inter_time", "sWidth": "150px","sClass": "center", "fnRender": function ( oObj ) {
                                        return top.getTimeStr( oObj.aData.inter_time, true );
                                   },"bUseRendered": false },
							   { "sTitle": "走访地点", "mDataProp": "addr", "sWidth": "200px", "sClass": "center","bSortable":false, "bUseRendered": false },								
							   { "sTitle": "走访人员", "mDataProp": "inter_user", "sWidth": "200px","sClass": "center","bSortable":false,"bUseRendered": false },
							   { "sTitle": "走访情况", "mDataProp": "inter_desc", "sWidth": "200px", "sClass": "center","bSortable":false,"bUseRendered": false },
							   { "sTitle": "操作", "mDataProp": "inter_time", "sWidth": "100px","sClass": "center", "bSortable":false, "fnRender": function ( oObj ) {
							    if ( gUserStatus == '0' ) {
								   if(top.g_isPermit("08_info_updateInterviewInfo")){
							      return '<a href=\'javascript:void(0)\' onclick="updateInterviewInfo(\''+oObj.aData.inter_time+'\',\''+oObj.aData.id+'\',\''+oObj.aData.addr+'\',\''+oObj.aData.inter_user+'\',\''+oObj.aData.inter_desc+'\')" >修改</a>';
								   }
								}
								 return "";
								}, "bUseRendered": false}
							   ];
			   var surl=top.getUrlBase()+"/actions/Prison.action?getInterviewInfoList";
			   var oTable = $('#interviewdataTable').dataTable( {
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
					     if(infoId!=""){
						 aoData.push( { "name": "interview.prison_code", "value": infoId } );
						 }
						 else{
						  aoData.push( { "name": "interview.prison_code", "value": -1 } );
						 }
			        },
			      "sDom": "frtlip",
				  "sPaginationType": "full_numbers",
					"aoColumns": iaoColumns
				} );
 }
 
 function getStudyList(){
  			   var iaoColumns= [
							  
							   { "sTitle": "学习时间", "mDataProp": "study_time", "sWidth": "150px", "sClass": "center","bSortable":false, "fnRender": function ( oObj ) {
                                        return top.getTimeStr( oObj.aData.study_time, true );
                                   },"bUseRendered": false },							
							   { "sTitle": "学习地点", "mDataProp": "addr", "sWidth": "200px","sClass": "center","bSortable":false,"bUseRendered": false },
							   { "sTitle": "学习内容", "mDataProp": "study_content", "sWidth": "200px", "sClass": "center","bSortable":false,"bUseRendered": false },
							   { "sTitle": "学习时长", "mDataProp": "duration", "sWidth": "100px", "sClass": "center","bSortable":false,"bUseRendered": false },
							   { "sTitle": "操作", "mDataProp": "id", "sWidth": "100px","sClass": "center", "bSortable":false, "fnRender": function ( oObj ) {
							    if ( gUserStatus == '0' ) {
							      return '<a href=\'javascript:void(0)\' onclick="updateStudyRecd(\''+oObj.aData.study_time+'\',\''+oObj.aData.id+'\',\''+oObj.aData.addr+'\',\''+oObj.aData.study_content+'\',\''+oObj.aData.duration+'\')" >修改</a>';
								}
								else return "";
								}, "bUseRendered": false}
							   ];
			   var surl=top.getUrlBase()+"/actions/StudyRecd.action?getStudyRecdList";
			   var oTable = $('#studydataTable').dataTable( {
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
						 aoData.push( { "name": "studyRecd.prison_code", "value": infoId });
			        },
			      "sDom": "frtlip",
				  "sPaginationType": "full_numbers",
					"aoColumns": iaoColumns
				} );
			}
			
 function getPunishList(){
  			   var iaoColumns= [
							  
							   { "sTitle": "惩罚时间", "mDataProp": "punish_time", "sWidth": "150px", "sClass": "center","bSortable":false, "fnRender": function ( oObj ) {
                                        return top.getTimeStr( oObj.aData.punish_time, true );
                                   },"bUseRendered": false },							
							   { "sTitle": "惩罚内容", "mDataProp": "punish_content", "sWidth": "200px", "sClass": "center","bSortable":false,"bUseRendered": false },
							   { "sTitle": "填写人账号", "mDataProp": "fill_user", "sWidth": "100px", "sClass": "center","bSortable":false,"bUseRendered": false },
							   { "sTitle": "操作", "mDataProp": "id", "sWidth": "100px","sClass": "center", "bSortable":false, "fnRender": function ( oObj ) {
							    if ( gUserStatus == '0' ) {
								if(top.g_isPermit("08_info_updatePunishInfo")){
							      return '<a href=\'javascript:void(0)\' onclick="updatePunishInfo(\''+oObj.aData.punish_time+'\',\''+oObj.aData.id+'\',\''+oObj.aData.punish_content+'\',\''+oObj.aData.fill_user+'\')" >修改</a>';
								}
								}
								 return "";
								}, "bUseRendered": false}
							   ];
			   var surl=top.getUrlBase()+"/actions/PunishmentInfo.action?getPunishmentInfoList";
			   var oTable = $('#punishdataTable').dataTable( {
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
					if(infoId!=""){
						 aoData.push( { "name": "punishInfo.prison_code", "value": infoId });
						 }
						 else{
						  aoData.push( { "name": "punishInfo.prison_code", "value": -1 });
						 }
			        },
			      "sDom": "frtlip",
				  "sPaginationType": "full_numbers",
					"aoColumns": iaoColumns
				} );
			}

function getRewardList(){
  			   var iaoColumns= [
							  
							   { "sTitle": "奖励时间", "mDataProp": "reward_time", "sWidth": "150px", "sClass": "center","bSortable":false, "fnRender": function ( oObj ) {
                                        return top.getTimeStr( oObj.aData.reward_time, true );
                                   },"bUseRendered": false },							
							   { "sTitle": "奖励内容", "mDataProp": "reward_content", "sWidth": "200px", "sClass": "center","bSortable":false,"bUseRendered": false },
							   { "sTitle": "填写人账号", "mDataProp": "fill_user", "sWidth": "100px", "sClass": "center","bSortable":false,"bUseRendered": false },
							   { "sTitle": "操作", "mDataProp": "id", "sWidth": "100px","sClass": "center", "bSortable":false, "fnRender": function ( oObj ) {
							    if ( gUserStatus == '0' ) {
								if(top.g_isPermit("08_info_updateRewardInfo")){
							      return '<a href=\'javascript:void(0)\' onclick="updateRewardInfo(\''+oObj.aData.reward_time+'\',\''+oObj.aData.id+'\',\''+oObj.aData.reward_content+'\',\''+oObj.aData.fill_user+'\')" >修改</a>';
								 }
								}
								  return "";
								}, "bUseRendered": false}
							   ];
			   var surl=top.getUrlBase()+"/actions/PunishmentInfo.action?getRewardmentInfoList";
			   var oRewarddataTable = $('#rewarddataTable').dataTable( {
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
					if(infoId!=""){
						 aoData.push( { "name": "rewardInfo.prison_code", "value": infoId });
						 }
						 else{
						 aoData.push( { "name": "rewardInfo.prison_code", "value": -1 });
						 }
			        },
			      "sDom": "frtlip",
				  "sPaginationType": "full_numbers",
					"aoColumns": iaoColumns
				} );
			}			
 function getWarnList(){
  			   var iaoColumns= [
							  
							   { "sTitle": "警告时间", "mDataProp": "warn_time", "sWidth": "150px", "sClass": "center","bSortable":false, "fnRender": function ( oObj ) {
                                        return top.getTimeStr( oObj.aData.warn_time, true );
                                   },"bUseRendered": false },							
							   { "sTitle": "警告内容", "mDataProp": "warn_content", "sWidth": "200px", "sClass": "center","bSortable":false,"bUseRendered": false },
							   { "sTitle": "填写人账号", "mDataProp": "fill_user", "sWidth": "100px", "sClass": "center","bSortable":false,"bUseRendered": false },
							   { "sTitle": "操作", "mDataProp": "id", "sWidth": "100px","sClass": "center", "bSortable":false, "fnRender": function ( oObj ) {
							    if ( gUserStatus == '0' ) {
							      return '<a href=\'javascript:void(0)\' onclick="updateWarnInfo(\''+oObj.aData.warn_time+'\',\''+oObj.aData.id+'\',\''+oObj.aData.warn_content+'\',\''+oObj.aData.fill_user+'\')" >修改</a>';
								}
								else return "";
								}, "bUseRendered": false}
							   ];
			   var surl=top.getUrlBase()+"/actions/WarnInfo.action?getWarnInfoList";
			   var oTable = $('#warndataTable').dataTable( {
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
					if(infoId!=""){
						 aoData.push( { "name": "warnInfo.prison_code", "value": infoId });
						 }
					else{
					aoData.push( { "name": "warnInfo.prison_code", "value": -1 });
					}
			        },
			      "sDom": "frtlip",
				  "sPaginationType": "full_numbers",
					"aoColumns": iaoColumns
				} );
			}
			
	function addCommunity(){
     var xurl="CommunityInfo.html?optType=insert&prison_code="+infoId;
     openDialog("添加社区服务信息",xurl,true,550,350,saveCommunityCallBack);
   }		 
   
   function updateCommunityInfo(service_time,id,service_type,time_dis,memo){
      var xurl="CommunityInfo.html?optType=update&infoId="+id+"&service_time="+service_time
	  +"&service_type="+service_type+"&time_dis="+time_dis+"&memo="+memo+"&prison_code="+infoId;
	  openDialog( "更新社会服务信息",xurl,true,550,350,saveCommunityCallBack);
 }
  function addInterveiwInfo(){
     var xurl="InterviewInfo.html?optType=insert&prison_code="+infoId;
     openDialog("添加走访信息",xurl,true,550,350,saveInterviewCallBack);
   }
  
 
 function updateInterviewInfo(inter_time,id,addr,inter_user,inter_desc,status){
      var xurl="InterviewInfo.html?optType=update&infoId="+id+"&inter_time="+inter_time
	  +"&addr="+addr+"&inter_user="+inter_user+"&inter_desc="+inter_desc+"&prison_code="+infoId;
	  openDialog( "更新日常走访信息",xurl,true,550,350,saveInterviewCallBack);
 }
 
   function addStudyRecd(){
     var xurl="StudyRecd.html?optType=insert&prison_code="+infoId;
     openDialog("添加学习记录信息",xurl,true,550,320,saveStudyRecdCallBack);
   }
   
   function updateStudyRecd(study_time,id,addr,study_content,duration){
      var xurl="StudyRecd.html?optType=update&infoId="+id+"&study_time="+study_time
	  +"&addr="+addr+"&study_content="+study_content+"&duration="+duration+"&prison_code="+infoId;   
	  openDialog( "更新学习记录信息",xurl,true,550,320,saveStudyRecdCallBack);
 }
 
	function addPunishInfo(){
     var xurl="PunishInfo.html?optType=insert&prison_code="+infoId;
     openDialog("添加治安处罚记录信息",xurl,true,550,320,savePunishInfoCallBack);
    }
   
	function updatePunishInfo(punish_time,id,punish_content,fill_user){
      var xurl="PunishInfo.html?optType=update&infoId="+id+"&punish_time="+punish_time
	  +"&punish_content="+punish_content+"&fill_user="+fill_user+"&prison_code="+infoId;   
	  openDialog( "更新治安处罚记录信息",xurl,true,550,320,savePunishInfoCallBack);
	}
 
	function addRewardInfo(){
     var xurl="rewardInfo.html?optType=insert&prison_code="+infoId;
     openDialog("添加奖励记录信息",xurl,true,550,320,saveRewardInfoCallBack);
   }
   
   function updateRewardInfo(reward_time,id,reward_content,fill_user){
      var xurl="rewardInfo.html?optType=update&infoId="+id+"&reward_time="+reward_time
	  +"&reward_content="+reward_content+"&fill_user="+fill_user+"&prison_code="+infoId;   
	  openDialog( "更新奖励记录信息",xurl,true,550,320,saveRewardInfoCallBack);
 }
 
    function addWarnInfo(){
     var xurl="WarnInfo.html?optType=insert&prison_code="+infoId;
     openDialog("添加警告记录信息",xurl,true,550,320,saveWarnInfoCallBack);
   }
   
   function updateWarnInfo(warn_time,id,warn_content,fill_user){
      var xurl="WarnInfo.html?optType=update&infoId="+id+"&warn_time="+warn_time
	  +"&warn_content="+warn_content+"&fill_user="+fill_user+"&prison_code="+infoId;   
	  openDialog( "更新警告记录信息",xurl,true,550,320,saveWarnInfoCallBack);
 }
 
 function saveCommunityCallBack(){
	 getCommunity();
 }
 function saveInterviewCallBack(){
	 try{
		 var obj = top.getTempValue();
		 if(obj.isSaveOK) getInterviewiInfo();
	 }catch(e){
				  
	 }
 }
 
 function saveStudyRecdCallBack(){
	 try{
		 var obj = top.getTempValue();
		 if(obj.isSaveOK) getStudyList();
	 }catch(e){
				  
	 }
 }
 
 function savePunishInfoCallBack(){
	 try{
		 var obj = top.getTempValue();
		 if(obj.isSaveOK) getPunishList();
	 }catch(e){
				  
	 }
 }
 function saveRewardInfoCallBack(){
	 try{
		 var obj = top.getTempValue();
		 if(obj.isSaveOK) getRewardList();
	 }catch(e){
				  
	 }
 }
 
  function saveWarnInfoCallBack(){
	 try{
		 var obj = top.getTempValue();
		 if(obj.isSaveOK) getWarnList();
	 }catch(e){
				  
	 }
 }

 function saveActionArea(){
    var aoData=[];
	aoData.push( { "name": "prison.prison_code", "value": infoId } );
	aoData.push( { "name": "prison.lon", "value": $("#actionLon").val() } );
	aoData.push( { "name": "prison.lat", "value": $("#actionLat").val() } );
	aoData.push( { "name": "prison.radius", "value": $("#actionR").val() } );
	aoData.push( { "name": "prison.trace_cell_id", "value": $("#trace_cell_id").val() } );
    var xurl="/actions/Prison.action?updateUserActionAreaInfo";
	top.sendAjaxRequest(xurl,aoData,saveActionAreaCallback);
 }
 
 function saveActionAreaCallback(obj){
	   try{
	    if ( obj.status == true ){
	      top.showInfoWinOK("操作成功");
	    }else{
	      isSaveOK = false;
	      top.showInfoWinError("操作失败 "+obj.msg);
	    }
	   }catch(e){
		  top.showInfoWinError("处理异常:"+e.message);
	   }
   }
 
 function onDrawMap(lon,lat,r){
    $("#actionLon").val(lon);
	$("#actionLat").val(lat);
	$("#actionR").val(r);
 }
 
 function setPrisonInfoObj(prison){
	prisonInfo=prison;
 }
 
 function getPrisonInfoObj(){
	return prisonInfo;

 }
 
 function printSolution(){
	var xurl="solutionPrint.html";
	window.open(xurl,"_blank","width=900,height=800");
 }