 var relationId="";
 var resumeId="";
 var accusationId="";
 var escortRecdId="";
 var termChangeId="";
 var XInfo={};
 var BInfo={};
 var FInfo={};
 var relationList=new Array();
 var resumeList=new Array();
 function infoCallback(obj){
       try{
	     if ( obj.status == true ) {
		   var o=obj.body;
		   prisonInfo=o.proCorrectionInfo;
		   parent.setPrisonInfoObj( prisonInfo );
		   showB();
		   showF(); 
		   showX(); 
		   showT(); 
		   showJ(); 
		   queryRelationList();
		   queryResumeList();
		   selectAllUploadFile();
		 } else{
          top.showInfoWinError("操作失败");
         }
	   }catch(e){
	   }
	   
	   /** if(gStatus!=0){
	    $("input").attr("disabled",true);
	    $("select").attr("disabled",true);
		$("textarea").attr("disabled",true);
		$("a").attr("disabled",true);
		$("btnUploadPic").hide();
		$(".buttonDivTwo").hide();
		$(".buttonTwo").hide();
		$(".markStatus").hide();
	   }
	   */
   }
   
	function selectMenu(n){
	     if(isChange==true){
		   top.showConfirm("内容已被编辑，是否保存？",changeSaveInfo,cancelUpdate);
		 }
		else{
		if(optType=="insert"&&n!=1){
			top.showInfoWinError("请先保存基本信息！");
		    return;
		}
		$("#a"+menu).removeClass("ruleTypeBg");
		$("#menu"+menu).hide(); 
		menu=n;
		$("#a"+menu).addClass("ruleTypeBg");
		$("#menu"+menu).show();
		}
   }
   function changeSaveInfo(){
     
     if(menu==1){
	  saveBaseInfo();
	 }
	 else if(menu==2){
	 saveFInfo();
	 }
	 else if(menu==3){
	 saveXInfo();
	 }
	 else if(menu==5){
	 saveTInfo();
	 }
	 else if(menu==6){
	 saveJInfo();
	 }
   }
   
   function showB(){
		   gStatus=prisonInfo.status;
		   $( "#tdstatus" ).html(top.getCodeName("CORRECT_STATUS",prisonInfo.status));
		   //$("#tdstatus").attr("disabled",true);
           $("#prison_code").val(prisonInfo.prison_code);   
		   $("#prison_code").attr("disabled",true);
		   $("#prison_name").val(prisonInfo.prison_name);
		   $("#deptName").val(top.getDeptPath(prisonInfo.dept_id));
		   $("#deptId").val(prisonInfo.dept_id);
		   //$("#deptName").attr("disabled",true);
		   gUserStatus=prisonInfo.status;
		   $("#tdprison_sex").html(top.getCodeSelectHtml( "SEX","prison_sex",false,prisonInfo.prison_sex));
		   $("#id_card").val(prisonInfo.id_card);
		   $("#tftel").val(prisonInfo.tel);
		   $("#live_addr").val(prisonInfo.live_addr);
		   $("#register_addr").val(prisonInfo.register_addr); 
		   
		    $( "#check_tdstatus" ).html(top.getCodeName("CORRECT_STATUS",prisonInfo.status));
		   //$("#tdstatus").attr("disabled",true);
           $("#check_prison_code").html(prisonInfo.prison_code);   
		   $("#check_prison_name").html(prisonInfo.prison_name);
		   $("#check_deptName").html(top.getDeptPath(prisonInfo.dept_id));
		   $("#check_tdprison_sex").html(top.getCodeName("SEX",prisonInfo.prison_sex));
		   $("#check_id_card").html(prisonInfo.id_card);
		   $("#check_tftel").html(prisonInfo.tel);
		   $("#check_live_addr").html(prisonInfo.live_addr);
		   $("#check_register_addr").html(prisonInfo.register_addr); 
		   if(prisonInfo.b_1=='0'){
			   if(!top.g_isPermit("08_info_queryTeenager")){
				$("#prison_name").html("***");
				$("#check_prison_name").html("***");
			   }else{
				$("#check_prison_name").html(prisonInfo.prison_name);
			   }
		   }
		   $("#tdb_1").html(top.getCodeSelectHtml( "YES_NO","b_1",false,prisonInfo.b_1)); 
		   $("#b_2").val(prisonInfo.b_2); 
		   $("#b_3").val(top.getTimeStr( prisonInfo.b_3, true )); 
		   $("#tdb_4").html(top.getCodeSelectHtml( "NATIONAL","b_4",false,prisonInfo.b_4)); 
		   $("#b_5").val(prisonInfo.b_5); 
	       $("#tdb_6").html(top.getCodeSelectHtml( "YES_NO","b_6",false,prisonInfo.b_6)); 
   		   $("#b_7").val(prisonInfo.b_7); 
		   $("#b_8").val(prisonInfo.b_8); 
		   $("#tdb_9").html(top.getCodeSelectHtml( "YES_NO","b_9",false,prisonInfo.b_9)); 
   		   $("#tdb_10").html(top.getCodeSelectHtml( "YES_NO","b_10",false,prisonInfo.b_10)); 
		   $("#b_11").val(prisonInfo.b_11); 
		   $("#tdb_12").html(top.getCodeSelectHtml( "HEALTH","b_12",false,prisonInfo.b_12)); 
   		   $("#b_13").val(prisonInfo.b_13); 
		   $("#tdb_14").html(top.getCodeSelectHtml( "YES_NO","b_14",false,prisonInfo.b_14)); 
		   $("#b_15").val(prisonInfo.b_15); 
   		   $("#tdb_16").html(top.getCodeSelectHtml( "YES_NO","b_16",false,prisonInfo.b_16)); 
		   $("#b_17").val(prisonInfo.b_17); 
		   $("#b_18").val(prisonInfo.b_18); 
   		   $("#tdb_19").html(top.getCodeSelectHtml( "POLITICAL_STATUS","b_19",false,prisonInfo.b_19));  
		   $("#tdb_20").html(top.getCodeSelectHtml( "POLITICAL_STATUS","b_20",false,prisonInfo.b_20)); 
		   $("#tdb_21").html(top.getCodeSelectHtml( "EDUCATION","b_21",false,prisonInfo.b_21)); 
		   $("#tdb_22").html(top.getCodeSelectHtml( "MARITAL_STATUS","b_22",false,prisonInfo.b_22)); 
   		   $("#b_23").val(prisonInfo.b_23); 
		   $("#b_24").val(prisonInfo.b_24); 
		   $("#b_25").val(prisonInfo.b_25); 
   		   $("#b_26").val(prisonInfo.b_26); 
		   $("#tdb_27").html(top.getCodeSelectHtml( "REGISTRATION_NATURE","b_27",false,prisonInfo.b_27)); 
		   $("#tdb_28").html(top.getCodeSelectHtml( "YES_NO","b_28",false,prisonInfo.b_28)); 
		   $("#tdb_29").html(top.getCodeSelectHtml( "YES_NO","b_29",false,prisonInfo.b_29)); 
		   $("#b_30").val(prisonInfo.b_30);
		   
		   $("#check_tdb_1").html(top.getCodeName( "YES_NO",prisonInfo.b_1)); 
		   $("#check_b_2").html(prisonInfo.b_2); 
		   $("#check_b_3").html(top.getTimeStr( prisonInfo.b_3,true )); 
		   $("#check_tdb_4").html(top.getCodeName( "NATIONAL",prisonInfo.b_4)); 
		   $("#check_b_5").html(prisonInfo.b_5); 
	       $("#check_tdb_6").html(top.getCodeName( "YES_NO",prisonInfo.b_6)); 
   		   $("#check_b_7").html(prisonInfo.b_7); 
		   $("#check_b_8").html(prisonInfo.b_8); 
		   $("#check_tdb_9").html(top.getCodeName( "YES_NO",prisonInfo.b_9)); 
   		   $("#check_tdb_10").html(top.getCodeName( "YES_NO",prisonInfo.b_10)); 
		   $("#check_b_11").html(prisonInfo.b_11); 
		   $("#check_tdb_12").html(top.getCodeName( "HEALTH",prisonInfo.b_12)); 
   		   $("#check_b_13").html(prisonInfo.b_13); 
		   $("#check_tdb_14").html(top.getCodeName( "YES_NO",prisonInfo.b_14)); 
		   $("#check_b_15").html(prisonInfo.b_15); 
   		   $("#check_tdb_16").html(top.getCodeName( "YES_NO",prisonInfo.b_16)); 
		   $("#check_b_17").html(prisonInfo.b_17); 
		   $("#check_b_18").html(prisonInfo.b_18); 
   		   $("#check_tdb_19").html(top.getCodeName( "POLITICAL_STATUS",prisonInfo.b_19));  
		   $("#check_tdb_20").html(top.getCodeName( "POLITICAL_STATUS",prisonInfo.b_20)); 
		   $("#check_tdb_21").html(top.getCodeName( "EDUCATION",prisonInfo.b_21)); 
		   $("#check_tdb_22").html(top.getCodeName( "MARITAL_STATUS",prisonInfo.b_22)); 
		   $( "#check_tdb_23" ).html( top.getCodeName("JOB_TYPE",prisonInfo.b_23));
		   $("#check_b_24").html(prisonInfo.b_24); 
		   $("#check_b_25").html(prisonInfo.b_25); 
   		   $("#check_b_26").html(prisonInfo.b_26); 
		   $("#check_tdb_27").html(top.getCodeName( "REGISTRATION_NATURE",prisonInfo.b_27)); 
		   $("#check_tdb_28").html(top.getCodeName( "YES_NO",prisonInfo.b_28)); 
		   $("#check_tdb_29").html(top.getCodeName( "YES_NO",prisonInfo.b_29)); 
		   $("#check_b_30").html(prisonInfo.b_30);
		   if ( prisonInfo.pic == '' ) {
		     $("#pic").attr("src","images/photos.png");
			  $("#check_pic").attr("src","images/photos.png");
		   } else {
		     $("#pic").attr("src",top.getUrlBase()+"/download?filePath="+prisonInfo.pic);
			 $("#check_pic").attr("src",top.getUrlBase()+"/download?filePath="+prisonInfo.pic);
		   }
		   try{
		     parent.onDrawMap(prisonInfo.lon,prisonInfo.lat,prisonInfo.radius);
			 parent.drawActionCircle();
		   }catch(e){
		   }
   }
   function showF(){
	$("#tdf_1").val(prisonInfo.f_1);
	$("#tdf_2").val(top.getTimeStr(prisonInfo.f_2,true));
	$("#tdf_3").val(top.getTimeStr( prisonInfo.f_3,true));
	$("#tdf_4").val(prisonInfo.f_4);
	$("#tdf_5").val(top.getTimeStr(prisonInfo.f_5,true));
	$("#tdf_6").val(top.getTimeStr( prisonInfo.f_6,true));
	$("#tdf_7").val(prisonInfo.f_7);
	$("#tdf_8").val(top.getTimeStr( prisonInfo.f_8,true));
	$("#tdf_9").val(prisonInfo.f_9);
	$("#tdf_10").val(prisonInfo.f_10);
	$("#tdf_11").val(prisonInfo.f_11);
	$("#tdf_12").val(top.getTimeStr( prisonInfo.f_12,true));
	$("#tdf_13").val(prisonInfo.f_13);
	$("#tdf_15").val(prisonInfo.f_15);
	$("#tdf_16").val(top.getTimeStr(prisonInfo.f_16,true));
	$("#tdf_17").val(prisonInfo.f_17);
	$("#tdf_18").val(prisonInfo.f_18);
	$("#tdf_19").val(prisonInfo.f_19);
	$("#tdf_20").val(top.getTimeStr( prisonInfo.f_20,true));
	$("#tdf_21").val(prisonInfo.f_21);
	$("#tdf_22").val(prisonInfo.f_22);
	$("#tdf_23").val(prisonInfo.f_23);
	
	$("#check_tdf_1").html(prisonInfo.f_1);
	$("#check_tdf_2").html(top.getTimeStr(prisonInfo.f_2,true));
	$("#check_tdf_3").html(top.getTimeStr( prisonInfo.f_3,true));
	$("#check_tdf_4").html(prisonInfo.f_4);
	$("#check_tdf_5").html(top.getTimeStr(prisonInfo.f_5,true));
	$("#check_tdf_6").html(top.getTimeStr( prisonInfo.f_6,true));
	$("#check_tdf_7").html(prisonInfo.f_7);
	$("#check_tdf_8").html(top.getTimeStr( prisonInfo.f_8,true));
	$("#check_tdf_9").html(prisonInfo.f_9);
	$("#check_tdf_10").html(prisonInfo.f_10);
	$("#check_tdf_11").html(prisonInfo.f_11);
	$("#check_tdf_12").html(top.getTimeStr( prisonInfo.f_12,true));
	$("#check_tdf_13").html(prisonInfo.f_13);
	$("#check_tdf_15").html(prisonInfo.f_15);
	$("#check_tdf_16").html(top.getTimeStr(prisonInfo.f_16,true));
	$("#check_tdf_17").html(prisonInfo.f_17);
	$("#check_tdf_18").html(prisonInfo.f_18);
	$("#check_tdf_19").html(prisonInfo.f_19);
	$("#check_tdf_20").html(top.getTimeStr( prisonInfo.f_20,true));
	$("#check_tdf_21").html(prisonInfo.f_21);
	$("#check_tdf_22").html(prisonInfo.f_22);
	$("#check_tdf_23").html(prisonInfo.f_23);
   }
   function showX(){
    $( "#tdcorrect_type" ).html(top.getCodeSelectHtml("CORRECT_TYPE","correct_type",false,prisonInfo.correct_type)); 
	$( "#tdcorrect_category" ).html(top.getCodeSelectHtml("CORRECT_CATEGORY","correct_category",false,prisonInfo.correct_category)); 
	$("#charges").val(prisonInfo.charges);
	$("#trace_cell_id").val(prisonInfo.trace_cell_id);
	$("#wrist_code").val(prisonInfo.wrist_code);
	$("#start_date").val(top.getTimeStr(prisonInfo.start_date,true));
	$("#end_date").val(top.getTimeStr(prisonInfo.end_date,true));
	$("#x_1").val(prisonInfo.x_1);
	$("#x_2").val(top.getTimeStr(prisonInfo.x_2,true));
	$("#x_3").val(top.getTimeStr(prisonInfo.x_3,true));
	$("#x_4").val(top.getTimeStr(prisonInfo.x_4,true));
	$("#x_5").val(prisonInfo.x_5);
	$("#x_6").val(prisonInfo.x_6);
	$("#x_7").val(prisonInfo.x_7);
	$("#x_8").val(prisonInfo.x_8);
    $("#tdx_9" ).html(top.getCodeSelectHtml("CRIMINAL_TYPE","x_9",false,prisonInfo.x_9));
	$("#x_10").val(prisonInfo.x_10);
	$("#x_11").val(prisonInfo.x_11);
	$("#x_12").val(top.getTimeStr(prisonInfo.x_12,true));
	$("#x_13").val(prisonInfo.x_13);
	$("#x_14").val(top.getTimeStr(prisonInfo.x_14,true));
	$("#x_20").val(top.getTimeStr(prisonInfo.x_20,true));
	$("#x_21").val(top.getTimeStr(prisonInfo.x_21,true));
	$("#x_25").val(top.getTimeStr(prisonInfo.x_25,true));
	$("#x_22").val(prisonInfo.x_22);
	$("#x_23").val(prisonInfo.x_23);
	$("#x_24").val(prisonInfo.x_24);
	$("#x_27").val(prisonInfo.x_27);
	$("#x_30").val(prisonInfo.x_30);
	$("#tdx_15").html(top.getCodeSelectHtml( "YES_NO","x_15",false,prisonInfo.x_15)); 
	$("#tdx_16").html(top.getCodeSelectHtml( "YES_NO","x_16",false,prisonInfo.x_16)); 
	$("#tdx_17").html(top.getCodeSelectHtml( "YES_NO","x_17",false,prisonInfo.x_17)); 
	$("#tdx_18").html(top.getCodeSelectHtml( "YES_NO","x_18",false,prisonInfo.x_18)); 
	$("#tdx_19").html(top.getCodeSelectHtml( "YES_NO","x_19",false,prisonInfo.x_19)); 
	$("#tdx_26").html(top.getCodeSelectHtml( "YES_NO","x_26",false,prisonInfo.x_26)); 
	$("#tdx_28").html(top.getCodeSelectHtml( "YES_NO","x_28",false,prisonInfo.x_28)); 
	$("#tdx_29").html(top.getCodeSelectHtml( "YES_NO","x_29",false,prisonInfo.x_29)); 
	 $("#tdArea").html(top.getAllAreaSelect("area",prisonInfo.area));
	 
	 $("#check_tdcorrect_type" ).html(top.getCodeName("CORRECT_TYPE",prisonInfo.correct_type)); 
	$("#check_tdcorrect_category" ).html(top.getCodeName("CORRECT_CATEGORY",prisonInfo.correct_category)); 
	$("#check_charges").html(prisonInfo.charges);
	$("#check_trace_cell_id").html(prisonInfo.trace_cell_id);
	$("#check_wrist_code").html(prisonInfo.wrist_code);
	if(prisonInfo.start_date!=0||prisonInfo.end_date!=0){
	$("#check_start_date").html(top.getTimeStr(prisonInfo.start_date,true)+"~"+top.getTimeStr(prisonInfo.end_date,true));
	}
	$("#check_x_1").html(prisonInfo.x_1);
	if(prisonInfo.x_2!=0||prisonInfo.x_12!=0){
	$("#check_x_2").html(top.getTimeStr(prisonInfo.x_2,true)+"~"+top.getTimeStr(prisonInfo.x_12,true));
	}
	if(prisonInfo.x_3!=0||prisonInfo.x_4!=0){
	$("#check_x_3").html(top.getTimeStr(prisonInfo.x_3,true)+"~"+top.getTimeStr(prisonInfo.x_4,true));
	}
	$("#check_x_5").html(prisonInfo.x_5);
	$("#check_x_6").html(prisonInfo.x_6);
	$("#check_x_7").html(prisonInfo.x_7);
	$("#check_x_8").html(prisonInfo.x_8);
    $("#check_tdx_9" ).html(top.getCodeName("CRIMINAL_TYPE",prisonInfo.x_9));
	$("#check_x_10").html(prisonInfo.x_10);
	$("#check_x_11").html(prisonInfo.x_11);
	$("#check_x_13").html(prisonInfo.x_13);
	$("#check_x_14").html(top.getTimeStr(prisonInfo.x_14,true));
	if(prisonInfo.x_20!=0||prisonInfo.x_21!=0){
	$("#check_x_20").html(top.getTimeStr(prisonInfo.x_20,true)+"~"+top.getTimeStr(prisonInfo.x_21,true));
	}
	$("#check_x_25").html(top.getTimeStr(prisonInfo.x_25,true));
	$("#check_x_22").html(prisonInfo.x_22);
	$("#check_x_23").html(prisonInfo.x_23);
	$("#check_x_24").html(prisonInfo.x_24);
	$("#check_x_27").html(prisonInfo.x_27);
	$("#check_x_30").html(prisonInfo.x_30);
	$("#check_tdx_15").html(top.getCodeName( "YES_NO",prisonInfo.x_15)); 
	$("#check_tdx_16").html(top.getCodeName( "YES_NO",prisonInfo.x_16)); 
	$("#check_tdx_17").html(top.getCodeName( "YES_NO",prisonInfo.x_17)); 
	$("#check_tdx_18").html(top.getCodeName( "YES_NO",prisonInfo.x_18)); 
	$("#check_tdx_19").html(top.getCodeName( "YES_NO",prisonInfo.x_19)); 
	$("#check_tdx_26").html(top.getCodeName( "YES_NO",prisonInfo.x_26)); 
	$("#check_tdx_28").html(top.getCodeName( "YES_NO",prisonInfo.x_28)); 
	$("#check_tdx_29").html(top.getCodeName( "YES_NO",prisonInfo.x_29)); 
	$("#check_tdArea").html(top.getAreaName(prisonInfo.area));
	}
    function showJ(){
	$("#j_1").val(prisonInfo.j_1);
	$("#j_2").val(top.getTimeStr(prisonInfo.j_2,true));
	$("#j_3").val(prisonInfo.j_3);
	$("#j_4").val(top.getTimeStr(prisonInfo.j_4,true));
	$("#j_5").val(prisonInfo.j_5);
	$("#j_6").val(top.getTimeStr(prisonInfo.j_6,true));
	$("#j_7").val(prisonInfo.j_7);
	$("#j_8").val(prisonInfo.j_8);
	$("#j_9").val(prisonInfo.j_9);
	$("#j_10").val(prisonInfo.j_10);
	$("#j_13").val(prisonInfo.j_13);
	$("#j_15").val(prisonInfo.j_15);
	$("#j_16").val(prisonInfo.j_16);
	$("#j_17").val(prisonInfo.j_17);
	$("#j_18").val(prisonInfo.j_18);
	$("#j_19").val(prisonInfo.j_19);
	$("#j_20").val(prisonInfo.j_20);
	$("#tdj_11").html(top.getCodeSelectHtml( "YES_NO","j_11",false,prisonInfo.j_11)); 
	$("#tdj_12").html(top.getCodeSelectHtml( "YES_NO","j_12",false,prisonInfo.j_12)); 
	$("#tdj_14").html(top.getCodeSelectHtml( "YES_NO","j_14",false,prisonInfo.j_14)); 
	
	
	}
    function showJ(){
	$("#j_1").val(prisonInfo.j_1);
	$("#j_2").val(top.getTimeStr(prisonInfo.j_2,true));
	$("#j_3").val(prisonInfo.j_3);
	$("#j_4").val(top.getTimeStr(prisonInfo.j_4,true));
	$("#j_5").val(prisonInfo.j_5);
	$("#j_6").val(top.getTimeStr(prisonInfo.j_6,true));
	$("#j_7").val(prisonInfo.j_7);
	$("#j_8").val(prisonInfo.j_8);
	$("#j_9").val(prisonInfo.j_9);
	$("#j_10").val(prisonInfo.j_10);
	$("#j_13").val(prisonInfo.j_13);
	$("#j_15").val(prisonInfo.j_15);
	$("#j_16").val(prisonInfo.j_16);
	$("#j_17").val(prisonInfo.j_17);
	$("#j_18").val(prisonInfo.j_18);
	$("#j_19").val(prisonInfo.j_19);
	$("#j_20").val(prisonInfo.j_20);
	$("#tdj_11").html(top.getCodeSelectHtml( "YES_NO","j_11",false,prisonInfo.j_11)); 
	$("#tdj_12").html(top.getCodeSelectHtml( "YES_NO","j_12",false,prisonInfo.j_12)); 
	$("#tdj_14").html(top.getCodeSelectHtml( "YES_NO","j_14",false,prisonInfo.j_14)); 
	}
   function showT(){
	$("#t_1").val(top.getTimeStr(prisonInfo.t_1,true));
	$("#t_2").val(prisonInfo.t_2);
	$("#t_3").val(prisonInfo.t_3);
	
	
	$("#check_t_1").html(top.getTimeStr(prisonInfo.t_1,true));
	$("#check_t_2").html(prisonInfo.t_2);
	$("#check_t_3").html(prisonInfo.t_3);

    }  
  function checkForm(){
     var msg = "";
	 if ( optType == 'insert' ) {
	     msg += checkString($("#deptName").val(),true,50,"所属部门");
		 msg += checkString($("#prison_code").val(),true,32,"编号");
		 msg += checkString($("#prison_name").val(),true,32,"姓名");
		 msg += checkString($("#id_card").val(),true,18,"身份证号");
		
		
	 }
      return msg;
   }
    
    function saveBaseInfo(){
	 var aoData=[];
	 var checkMsg = checkForm();
	 if ( checkMsg != '' ) {
	     top.showInfoWinWarn(checkMsg);
         return ;
	 }
		infoId=$("#prison_code").val();
		 aoData.push( { "name": "prison.prison_code", "value": $("#prison_code").val() } );
		 aoData.push( { "name": "prison.prison_name", "value": $("#prison_name").val() } );
		 aoData.push( { "name": "prison.prison_sex", "value": $("#prison_sex").val() } );
		  aoData.push( { "name": "prison.dept_id", "value": $("#deptId").val() } );
		 aoData.push( { "name": "prison.id_card", "value": $("#id_card").val() } );
		 aoData.push( { "name": "prison.tel", "value": $("#b_24").val() } );
		 aoData.push( { "name": "prison.live_addr", "value": $("#live_addr").val() } );
		// aoData.push( { "name": "prison.live_province", "value": $("#tds_province").val() } );
		 //aoData.push( { "name": "prison.live_city", "value": $("#tds_city").val() } );
		// aoData.push( { "name": "prison.live_county", "value": $("#tds_county").val() } );
		 aoData.push( { "name": "prison.register_addr", "value": $("#register_addr").val() } );	 
		// aoData.push( { "name": "prison.register_province", "value": $("#tds_province2").val() } );
		// aoData.push( { "name": "prison.register_city", "value": $("#tds_city2").val() } );
		// aoData.push( { "name": "prison.register_county", "value": $("#tds_county2").val() } );
		 aoData.push( { "name": "prison.b_1", "value": $("#b_1").val() } );
		 aoData.push( { "name": "prison.b_2", "value": $("#b_2").val() } );
		 aoData.push( { "name": "prison.b_3", "value": top.toTimestamp($("#b_3").val()) } );
		 aoData.push( { "name": "prison.b_4", "value": $("#b_4").val() } );
		 aoData.push( { "name": "prison.b_5", "value": $("#b_5").val() } );
		 aoData.push( { "name": "prison.b_6", "value": $("#b_6").val() } );
		 aoData.push( { "name": "prison.b_7", "value": $("#b_7").val() } );
		 aoData.push( { "name": "prison.b_8", "value": $("#b_8").val() } );
		 aoData.push( { "name": "prison.b_9", "value": $("#b_9").val() } );
		 aoData.push( { "name": "prison.b_10", "value": $("#b_10").val() } );
		 aoData.push( { "name": "prison.b_11", "value": $("#b_11").val() } );
		 aoData.push( { "name": "prison.b_12", "value": $("#b_12").val() } );
		 aoData.push( { "name": "prison.b_13", "value": $("#b_13").val() } );
		 aoData.push( { "name": "prison.b_14", "value": $("#b_14").val() } );
		 aoData.push( { "name": "prison.b_15", "value": $("#b_15").val() } );
		 aoData.push( { "name": "prison.b_16", "value": $("#b_16").val() } );
		 aoData.push( { "name": "prison.b_17", "value": $("#b_17").val() } );
		 aoData.push( { "name": "prison.b_18", "value": $("#b_18").val() } );
		 aoData.push( { "name": "prison.b_19", "value": $("#b_19").val() } );
		 aoData.push( { "name": "prison.b_20", "value": $("#b_20").val() } );
		 aoData.push( { "name": "prison.b_21", "value": $("#b_21").val() } );
		 aoData.push( { "name": "prison.b_22", "value": $("#b_22").val() } );
		 aoData.push( { "name": "prison.b_23", "value": $("#b_23").val() } );
		 aoData.push( { "name": "prison.b_24", "value": $("#b_24").val() } );
		 aoData.push( { "name": "prison.b_25", "value": $("#b_25").val() } );
		 aoData.push( { "name": "prison.b_26", "value": $("#b_26").val() } );
		 aoData.push( { "name": "prison.b_27", "value": $("#b_27").val() } );
		 aoData.push( { "name": "prison.b_28", "value": $("#b_28").val() } );
		 aoData.push( { "name": "prison.b_29", "value": $("#b_29").val() } );
		 aoData.push( { "name": "prison.b_30", "value": $("#b_30").val() } );
		
	 xurl="/actions/Prison.action?insertPrisonInfo";
	if(optType=="update")
	{
		xurl="/actions/Prison.action?updatePrisonInfo";
	}
	 top.sendAjaxRequest(xurl,aoData,saveBaseInfoCallback);
   }
   
   function updateCheckBaseInfo(){
          $("#check_prison_code").html($("#prison_code").val());
		  $("#check_prison_name").html($("#prison_name").val());
		  $("#check_prison_sex").html(top.getCodeName("SEX",$("#prison_sex").val()))
          $("#check_deptName").html($("#deptName").val());
		  $("#check_id_card").html($("#id_card").val());
		  $("#check_b_24").html($("#b_24").val());
		  $("#check_live_addr").html($("#live_addr").val());
	      $("#check_register_addr").html($("#register_addr").val());
		  $("#check_tdb_1").html(top.getCodeName( "YES_NO",$("#b_1").val())); 
		  $("#check_b_2").html($("#b_2").val()); 
		  $("#check_b_3").html($("#b_3").val()); 
		  $("#check_tdb_4").html(top.getCodeName( "NATIONAL", $("#b_4").val()));
		  $("#check_b_5").html($("#b_5").val());
		  $("#check_tdb_6").html(top.getCodeName( "YES_NO",$("#b_6").val()));
		  $("#check_b_7").html($("#b_7").val()); 
		  $("#check_b_8").html($("#b_8").val()); 
		  $("#check_tdb_9").html(top.getCodeName( "YES_NO",$("#b_9").val()));
		  $("#check_tdb_10").html(top.getCodeName( "YES_NO",$("#b_10").val()));
		  $("#check_b_11").html($("#b_11").val()); 
		  $("#check_tdb_12").html(top.getCodeName( "HEALTH",$("#b_12").val()));
		  $("#check_b_13").html($("#b_13").val()); 
		  $("#check_tdb_14").html(top.getCodeName( "YES_NO",$("#b_14").val()));
		  $("#check_b_15").html($("#b_15").val()); 
		  $("#check_tdb_16").html(top.getCodeName( "YES_NO",$("#b_14").val())); 
		  $("#check_b_17").html($("#b_17").val()); 
		  $("#check_b_18").html($("#b_18").val()); 
		  $("#check_tdb_19").html(top.getCodeName( "POLITICAL_STATUS",$("#b_19").val()));
		  $("#check_tdb_20").html(top.getCodeName( "POLITICAL_STATUS",$("#b_20").val()));
		  $("#check_tdb_21").html(top.getCodeName( "EDUCATION",$("#b_21").val())); 
		  $("#check_tdb_22").html(top.getCodeName( "MARITAL_STATUS",$("#b_22").val()));
		  $("#check_b_23").html($("#b_23").val()); 
		  $("#check_b_24").html($("#b_24").val()); 
		   $("#check_b_25").html($("#b_25").val()); 
   		   $("#check_b_26").html($("#b_26").val()); 
		   $("#check_tdb_27").html(top.getCodeName( "REGISTRATION_NATURE",$("#b_27").val())); 
		   $("#check_tdb_28").html(top.getCodeName( "YES_NO",$("#b_28").val())); 
		   $("#check_tdb_29").html(top.getCodeName( "YES_NO",$("#b_30").val())); 
		   $("#check_b_30").html($("#b_30").val());
   }
    function saveBaseInfoCallback(obj){
	   try{
	    if ( obj.status == true ){
		 isSaveOK = true;
	     isCreated = true;
	     top.showInfoWinOK("操作成功");
		 isChange =false;
		if( optType=="insert"){
		  prisonInfo=obj.body.proCorrectionInfo;
		  parent.setPrisonInfoObj( prisonInfo );
		  }
		  optType="update";
		 updateCheckBaseInfo();
		cancelBaseInfo();
	    }else{
	      isCreated = false;
	      top.showInfoWinError("操作失败 "+obj.msg);
	    }
	   }catch(e){
		  top.showInfoWinError("处理异常:"+e.message);
	   }
   }
   function getBaseParam(){
      var aoData=[];
      aoData.push( { "name": "prison.prison_code", "value": $("#prison_code").val() } );
	  aoData.push( { "name": "prison.prison_name", "value": $("#prison_name").val() } );
	  aoData.push( { "name": "prison.prison_sex", "value": $("#prison_sex").val() } );
	  aoData.push( { "name": "prison.id_card", "value": $("#id_card").val() } );
	  return aoData;
   }
  
   
   function optCallback(obj){
	   try{
	    if ( obj.status == true ){
		 isSaveOK = true;
	     isCreated = true;
	     top.showInfoWinOK("操作成功");
		 optType="update";
	    }else{
	      isCreated = false;
	      top.showInfoWinError("操作失败 "+obj.msg);
	    }
	   }catch(e){
		  top.showInfoWinError("处理异常:"+e.message);
	   }
   }
   
   function closeDialog(){
		$( "#dialog" ).dialog( "close" );
  }
   
   function saveFInfo() {
		if(infoId==null || infoId=='' ){
			alert("请先保存基本信息！");
			return;
		}
		 var aoData=[];
		 aoData.push( { "name": "prison.prison_code", "value": infoId } );
		 aoData.push( { "name": "prison.f_1", "value": $("#tdf_1").val() } );
		 aoData.push( { "name": "prison.f_2", "value": top.toTimestamp($("#tdf_2").val()) } );
		 aoData.push( { "name": "prison.f_3", "value": top.toTimestamp($("#tdf_3").val()) } );
		 aoData.push( { "name": "prison.f_4", "value": $("#tdf_4").val() } );
		 aoData.push( { "name": "prison.f_5", "value": top.toTimestamp($("#tdf_5").val()) } );
		 aoData.push( { "name": "prison.f_6", "value": top.toTimestamp($("#tdf_6").val()) } );
		 aoData.push( { "name": "prison.f_7", "value": $("#tdf_7").val() } );
		 aoData.push( { "name": "prison.f_8", "value": top.toTimestamp($("#tdf_8").val()) } );
		 aoData.push( { "name": "prison.f_9", "value": $("#tdf_9").val() } );
		 aoData.push( { "name": "prison.f_10", "value": $("#tdf_10").val() } );
		 aoData.push( { "name": "prison.f_11", "value": $("#tdf_11").val() } );
		 aoData.push( { "name": "prison.f_12", "value": top.toTimestamp($("#tdf_12").val()) } );
		 aoData.push( { "name": "prison.f_13", "value": $("#tdf_13").val() } );
		 aoData.push( { "name": "prison.f_15", "value": $("#tdf_15").val() } );
		 aoData.push( { "name": "prison.f_16", "value": top.toTimestamp($("#tdf_16").val()) } );
		 aoData.push( { "name": "prison.f_17", "value": $("#tdf_17").val() } );
		 aoData.push( { "name": "prison.f_18", "value": $("#tdf_18").val() } );
		 aoData.push( { "name": "prison.f_19", "value": $("#tdf_19").val() } );
		 aoData.push( { "name": "prison.f_20", "value": top.toTimestamp($("#tdf_20").val()) } );
		 aoData.push( { "name": "prison.f_21", "value": $("#tdf_21").val() } );
		 aoData.push( { "name": "prison.f_22", "value": $("#tdf_22").val() } );
		 aoData.push( { "name": "prison.f_23", "value": $("#tdf_23").val() } );
	 xurl="/actions/Prison.action?updatePrisonInfoF";
	 top.sendAjaxRequest(xurl,aoData,saveFCallback);
   }
    function updateCheckFInfo(){
	$("#check_tdf_1").html($("#tdf_1").val());
	$("#check_tdf_2").html($("#tdf_2").val());
	$("#check_tdf_3").html($("#tdf_3").val());
	$("#check_tdf_4").html($("#tdf_4").val());
	$("#check_tdf_5").html($("#tdf_5").val());
	$("#check_tdf_6").html($("#tdf_6").val());
	$("#check_tdf_7").html($("#tdf_7").val());
	$("#check_tdf_8").html($("#tdf_8").val());
	$("#check_tdf_9").html($("#tdf_9").val());
	$("#check_tdf_10").html($("#tdf_10").val());
	$("#check_tdf_11").html($("#tdf_11").val());
	$("#check_tdf_12").html($("#tdf_12").val());
	$("#check_tdf_13").html($("#tdf_13").val());
	$("#check_tdf_15").html($("#tdf_15").val());
	$("#check_tdf_16").html($("#tdf_16").val());
	$("#check_tdf_17").html($("#tdf_17").val());
	$("#check_tdf_18").html($("#tdf_18").val());
	$("#check_tdf_19").html($("#tdf_19").val());
	$("#check_tdf_20").html($("#tdf_20").val());
	$("#check_tdf_21").html($("#tdf_21").val());
	$("#check_tdf_22").html($("#tdf_22").val());
	$("#check_tdf_23").html($("#tdf_23").val());
	}
    function saveFCallback(obj){
	   try{
	    if ( obj.status == true ){
		 isSaveOK = true;
	     isCreated = true;
	     top.showInfoWinOK("操作成功");
		isChange=false;
		  if( optType=="insert"){
		  prisonInfo=obj.body.proCorrectionInfo;
		  parent.setPrisonInfoObj( prisonInfo );
		  }
		   optType="update";
		updateCheckFInfo();
		cancelFInfo();
	    }else{
	      isCreated = false;
	      top.showInfoWinError("操作失败 "+obj.msg);
	    }
	   }catch(e){
		  top.showInfoWinError("处理异常:"+e.message);
	   }
   }
   function saveXInfo(){
         var aoData=[];
		  aoData.push( { "name": "prison.area", "value":$("#area").val()  } );
		  aoData.push( { "name": "prison.prison_code", "value": infoId } );
		  aoData.push( { "name": "prison.correct_type", "value": $("#correct_type").val()  } );
		  aoData.push( { "name": "prison.correct_category", "value": $("#correct_category").val()  } );
		  aoData.push( { "name": "prison.charges", "value":$("#charges").val()  } );
		  aoData.push( { "name": "prison.start_date", "value": top.toTimestamp($("#start_date").val()) } );
		  aoData.push( { "name": "prison.end_date", "value":top.toTimestamp($("#end_date").val()) } );
		  aoData.push( { "name": "prison.trace_cell_id", "value": $("#trace_cell_id").val()  } );
		  aoData.push( { "name": "prison.wrist_code", "value": $("#wrist_code").val() } );
		  aoData.push( { "name": "prison.x_1", "value": $("#x_1").val() } );
		 aoData.push( { "name": "prison.x_2", "value": top.toTimestamp($("#x_2").val()) } );
		 aoData.push( { "name": "prison.x_3", "value": top.toTimestamp($("#x_3").val()) } );
		 aoData.push( { "name": "prison.x_4", "value": top.toTimestamp($("#x_4").val() )} );
		 aoData.push( { "name": "prison.x_5", "value": $("#x_5").val() } );
		 aoData.push( { "name": "prison.x_6", "value": $("#x_6").val() } );
		 aoData.push( { "name": "prison.x_7", "value": $("#x_7").val() } );
		 aoData.push( { "name": "prison..x_8", "value": $("#x_8").val() } );
		 aoData.push( { "name": "prison.x_9", "value": $("#x_9").val() } );
		 aoData.push( { "name": "prison.x_10", "value": $("#x_10").val() } );
		 aoData.push( { "name": "prison.x_11", "value": $("#x_11").val() } );
		 aoData.push( { "name": "prison.x_12", "value": top.toTimestamp($("#x_12").val()) } );
		 aoData.push( { "name": "prison.x_13", "value": $("#x_13").val() } );
		 aoData.push( { "name": "prison.x_14", "value": top.toTimestamp($("#x_14").val()) } );
		 aoData.push( { "name": "prison.x_15", "value": $("#x_15").val() } );
		 aoData.push( { "name": "prison.x_16", "value": $("#x_16").val() } );
		 aoData.push( { "name": "prison.x_17", "value": $("#x_17").val() } );
		 aoData.push( { "name": "prison.x_18", "value": $("#x_18").val() } );
		 aoData.push( { "name": "prison.x_19", "value": $("#x_19").val() } );
		 aoData.push( { "name": "prison.x_20", "value": top.toTimestamp( $("#x_20").val() )} );
		 aoData.push( { "name": "prison.x_21", "value": top.toTimestamp($("#x_21").val()) } );
		 aoData.push( { "name": "prison.x_22", "value": $("#x_22").val() } );
		 aoData.push( { "name": "prison.x_23", "value": $("#x_23").val() } );
		 aoData.push( { "name": "prison.x_24", "value": $("#x_24").val() } );
		 aoData.push( { "name": "prison.x_25", "value": top.toTimestamp($("#x_25").val()) } );
		 aoData.push( { "name": "prison.x_26", "value": $("#x_26").val() } );
		 aoData.push( { "name": "prison.x_27", "value": $("#x_27").val() } );
		 aoData.push( { "name": "prison.x_28", "value": $("#x_28").val() } );
		 aoData.push( { "name": "prison.x_29", "value": $("#x_29").val() } );
		 aoData.push( { "name": "prison.x_30", "value": $("#x_30").val() } );
	 xurl="/actions/Prison.action?updatePrisonInfoX";
	 top.sendAjaxRequest(xurl,aoData,saveXCallback);
   }
   
    function updateCheckXInfo(){
	 $("#check_tdcorrect_type" ).html(top.getCodeName("CORRECT_TYPE",$("#correct_type").val())); 
	$("#check_tdcorrect_category" ).html(top.getCodeName("CORRECT_CATEGORY",$("#correct_category").val())); 
	$("#check_charges").html($("#charges").val());
	$("#check_trace_cell_id").html($("#trace_cell_id").val());
	$("#check_wrist_code").html($("#wrist_code").val());
	if($("#start_date").val()!=""||$("#end_date").val()!=""){
	$("#check_start_date").html($("#start_date").val()+"~"+$("#end_date").val());
	}
	else{
	$("#check_start_date").html("");
	}
	$("#check_x_1").html($("#x_1").val());
	if($("#x_2").val()!=0||$("#x_12").val()!=0){
	$("#check_x_2").html($("#x_2").val()+"~"+$("#x_12").val());
	}
	else{
	$("#check_x_2").html("");
	}
	if($("#x_3").val()!=0||$("#x_4").val()!=0){
	$("#check_x_3").html($("#x_3").val()+"~"+$("#x_4").val());
	}
	else{
	$("#check_x_3").html("");
	}
	$("#check_x_5").html($("#x_5").val());
	$("#check_x_6").html($("#x_6").val());
	$("#check_x_7").html($("#x_7").val());
	$("#check_x_8").html($("#x_8").val());
    $("#check_tdx_9" ).html(top.getCodeName("CRIMINAL_TYPE",$("#x_9").val()));
	$("#check_x_10").html($("#x_10").val());
	$("#check_x_11").html($("#x_11").val());
	$("#check_x_13").html($("#x_13").val());
	$("#check_x_14").html($("#x_14").val());
	if($("#x_20").val()!=0||$("#x_21").val()!=0){
	$("#check_x_20").html($("#x_20").val()+"~"+$("#x_21").val());
	}
	else{
	$("#check_x_20").html();
	}
	$("#check_x_25").html($("#x_25").val());
	$("#check_x_22").html($("#x_22").val());
	$("#check_x_23").html($("#x_23").val());
	$("#check_x_24").html($("#x_24").val());
	$("#check_x_27").html($("#x_27").val());
	$("#check_x_30").html($("#x_30").val());
	$("#check_tdx_15").html(top.getCodeName( "YES_NO",$("#x_15").val())); 
	$("#check_tdx_16").html(top.getCodeName( "YES_NO",$("#x_16").val())); 
	$("#check_tdx_17").html(top.getCodeName( "YES_NO",$("#x_17").val())); 
	$("#check_tdx_18").html(top.getCodeName( "YES_NO",$("#x_18").val())); 
	$("#check_tdx_19").html(top.getCodeName( "YES_NO",$("#x_19").val())); 
	$("#check_tdx_26").html(top.getCodeName( "YES_NO",$("#x_26").val())); 
	$("#check_tdx_28").html(top.getCodeName( "YES_NO",$("#x_28").val())); 
	$("#check_tdx_29").html(top.getCodeName( "YES_NO",$("#x_29").val())); 
	$("#check_tdArea").html(top.getAreaName($("#area").val()));
	}
	 function saveXCallback(obj){
	   try{
	    if ( obj.status == true ){
		 isSaveOK = true;
	     isCreated = true;
	     top.showInfoWinOK("操作成功");
		isChange=false;
		  if( optType=="insert"){
		  prisonInfo=obj.body.proCorrectionInfo;
		  parent.setPrisonInfoObj( prisonInfo );
		  }
		   optType="update";
		updateCheckXInfo();
		cancelXInfo();
	    }else{
	      isCreated = false;
	      top.showInfoWinError("操作失败 "+obj.msg);
	    }
	   }catch(e){
		  top.showInfoWinError("处理异常:"+e.message);
	   }
   }
   
    function showJ(){
	$("#j_1").val(prisonInfo.j_1);
	$("#j_2").val(top.getTimeStr(prisonInfo.j_2,true));
	$("#j_3").val(prisonInfo.j_3);
	$("#j_4").val(top.getTimeStr(prisonInfo.j_4,true));
	$("#j_5").val(prisonInfo.j_5);
	$("#j_6").val(top.getTimeStr(prisonInfo.j_6,true));
	$("#j_7").val(prisonInfo.j_7);
	$("#j_8").val(prisonInfo.j_8);
	$("#j_9").val(prisonInfo.j_9);
	$("#j_10").val(prisonInfo.j_10);
	$("#j_13").val(prisonInfo.j_13);
	$("#j_15").val(prisonInfo.j_15);
	$("#j_16").val(prisonInfo.j_16);
	$("#j_17").val(prisonInfo.j_17);
	$("#j_18").val(prisonInfo.j_18);
	$("#j_19").val(prisonInfo.j_19);
	$("#j_20").val(prisonInfo.j_20);
	$("#tdj_11").html(top.getCodeSelectHtml( "YES_NO","j_11",false,prisonInfo.j_11)); 
	$("#tdj_12").html(top.getCodeSelectHtml( "YES_NO","j_12",false,prisonInfo.j_12)); 
	$("#tdj_14").html(top.getCodeSelectHtml( "YES_NO","j_14",false,prisonInfo.j_14)); 
	
	$("#check_j_2").html(top.getTimeStr(prisonInfo.j_2,true));
	$("#check_j_4").html(top.getTimeStr(prisonInfo.j_4,true));
	$("#check_j_5").html(prisonInfo.j_5);
	$("#check_j_6").html(top.getTimeStr(prisonInfo.j_6,true));
	$("#check_j_8").html(prisonInfo.j_8);
	$("#check_j_9").html(prisonInfo.j_9);
	$("#check_j_10").html(prisonInfo.j_10);
	$("#check_j_13").html(prisonInfo.j_13);
	$("#check_j_15").html(prisonInfo.j_15);
	$("#check_j_16").html(prisonInfo.j_16);
	$("#check_j_17").html(prisonInfo.j_17);
	$("#check_j_18").html(prisonInfo.j_18);
	$("#check_j_19").html(prisonInfo.j_19);
	$("#check_j_20").html(prisonInfo.j_20);
	$("#check_tdj_11").html(top.getCodeName( "YES_NO",prisonInfo.j_11)); 
	$("#check_tdj_12").html(top.getCodeName( "YES_NO",prisonInfo.j_12)); 
	$("#check_tdj_14").html(top.getCodeName( "YES_NO",prisonInfo.j_14)); 
	$("#check_j_3" ).html( top.getCodeName("PRISON_EXECUTION",prisonInfo.j_3));
    $("#check_j_7" ).html( top.getCodeName("DEAD_TYPE",prisonInfo.j_7));
	$("#check_j_1" ).html(top.getCodeName("STOP_TYPE",prisonInfo.j_1)); 
	}
    function saveJInfo(){
		var aoData=[];
		 aoData.push( { "name": "prison.prison_code", "value": infoId } );
		 aoData.push( { "name": "prison.j_1", "value": $("#j_1").val() } );
		 aoData.push( { "name": "prison.j_2", "value": top.toTimestamp($("#j_2").val()) } );
		 aoData.push( { "name": "prison.j_3", "value": $("#j_3").val() } );
		 aoData.push( { "name": "prison.j_4", "value": top.toTimestamp($("#j_4").val()) } );
		 aoData.push( { "name": "prison.j_5", "value": $("#j_5").val() } );
		 aoData.push( { "name": "prison.j_6", "value": top.toTimestamp($("#j_6").val()) } );
		 aoData.push( { "name": "prison.j_7", "value": $("#j_7").val() } );
		 aoData.push( { "name": "prison.j_8", "value": $("#j_8").val() } );
		 aoData.push( { "name": "prison.j_9", "value": $("#j_9").val() } );
		 aoData.push( { "name": "prison.j_10", "value": $("#j_10").val() } );
		 aoData.push( { "name": "prison.j_11", "value": $("#j_11").val() } );
		 aoData.push( { "name": "prison.j_12", "value": $("#j_12").val() } );
		 aoData.push( { "name": "prison.j_13", "value": $("#j_13").val() } );
		 aoData.push( { "name": "prison.j_14", "value": $("#j_14").val() } );
		 aoData.push( { "name": "prison.j_15", "value": $("#j_15").val() } );
		 aoData.push( { "name": "prison.j_16", "value": $("#j_16").val() } );
		 aoData.push( { "name": "prison.j_17", "value": $("#j_17").val() } );
		 aoData.push( { "name": "prison.j_18", "value": $("#j_18").val() } );
		 aoData.push( { "name": "prison.j_19", "value": $("#j_19").val() } );
		 aoData.push( { "name": "prison.j_20", "value": $("#j_20").val() } );
	 xurl="/actions/Prison.action?updatePrisonInfoJ";
	 top.sendAjaxRequest(xurl,aoData,saveJCallback);
   }
   
   function updateCheckJInfo(){
   // $("#check_j_1").html($("#j_1").val());
	$("#check_j_2").html($("#j_2").val());
	//$("#check_j_3").html($("#j_3").val());
	$("#check_j_4").html($("#j_4").val());
	$("#check_j_5").html($("#j_5").val());
	$("#check_j_6").html($("#j_6").val());
	//$("#check_j_7").html($("#j_7").val());
	$("#check_j_8").html($("#j_8").val());
	$("#check_j_9").html($("#j_9").val());
	$("#check_j_10").html($("#j_10").val());
	$("#check_j_13").html($("#j_13").val());
	$("#check_j_15").html($("#j_15").val());
	$("#check_j_16").html($("#j_16").val());
	$("#check_j_17").html($("#j_17").val());
	$("#check_j_18").html($("#j_18").val());
	$("#check_j_19").html($("#j_19").val());
	$("#check_j_20").html($("#j_20").val());
	$("#check_tdj_11").html(top.getCodeName( "YES_NO",$("#j_11").val())); 
	$("#check_tdj_12").html(top.getCodeName( "YES_NO",$("#j_12").val())); 
	$("#check_tdj_14").html(top.getCodeName( "YES_NO",$("#j_14").val())); 
	$("#check_j_3" ).html( top.getCodeName("PRISON_EXECUTION",$("#j_3").val()));
    $("#check_j_7" ).html( top.getCodeName("DEAD_TYPE",$("#j_7").val()));
	$("#check_j_1" ).html(top.getCodeName("STOP_TYPE",$("#j_1").val())); 
   }
   
   function saveJCallback(obj){
	   try{
	    if ( obj.status == true ){
		 isSaveOK = true;
	     isCreated = true;
	     top.showInfoWinOK("操作成功");
		isChange=false;
		  if( optType=="insert"){
		  prisonInfo=obj.body.proCorrectionInfo;
		  parent.setPrisonInfoObj( prisonInfo );
		  }
		   optType="update";
		updateCheckJInfo();
		cancelJInfo();
	    }else{
	      isCreated = false;
	      top.showInfoWinError("操作失败 "+obj.msg);
	    }
	   }catch(e){
		  top.showInfoWinError("处理异常:"+e.message);
	   }
   }
    function saveTInfo(){
	     var aoData=[];
		 aoData.push( { "name": "prison.prison_code", "value": infoId } );
		 aoData.push( { "name": "prison.t_1", "value": top.toTimestamp($("#t_1").val()) } );
		 aoData.push( { "name": "prison.t_2", "value": $("#t_2").val() } );
		 aoData.push( { "name": "prison.t_3", "value": $("#t_3").val() } );
		 xurl="/actions/Prison.action?updatePrisonInfoT";
		 top.sendAjaxRequest(xurl,aoData,saveTCallback);
	}
	
  function updateCheckTInfo(){
  $("#check_t_1").html($("#t_1").val());
  $("#check_t_2").html($("#t_2").val());
  $("#check_t_3").html($("#t_3").val());
  }
  
 function saveTCallback(obj){
	   try{
	    if ( obj.status == true ){
		 isSaveOK = true;
	     isCreated = true;
	     top.showInfoWinOK("操作成功");
		isChange=false;
		  if( optType=="insert"){
		  prisonInfo=obj.body.proCorrectionInfo;
		  parent.setPrisonInfoObj( prisonInfo );
		  }
	    optType="update";
		updateCheckTInfo();
		cancelTInfo();
	    }else{
	      isCreated = false;
	      top.showInfoWinError("操作失败 "+obj.msg);
	    }
	   }catch(e){
		  top.showInfoWinError("处理异常:"+e.message);
	   }
   }
	function showTermChangeInfo(){
		var iaoColumns= [
						
						{ "sTitle": "变动日期", "mDataProp": "chang_date", "sWidth": "150px","sClass": "center","bSortable":false,
							"fnRender": function ( oObj ) {
							var ht="";
							 /**if(gStatus==0){
								ht+='<img src="../../img/delete.gif" onclick="deletePrisonTermChange('+oObj.aData.id+')"/>&nbsp;&nbsp;'
								+'<img src="../../img/edit.gif" onclick="updatePrisonTermChange('+oObj.aData.id+','+oObj.aData.chang_date+','+oObj.aData.chang_marg+','+oObj.aData.chang_reason+')"/>';
							 }*/
							 ht+=top.getTimeStr(oObj.aData.chang_date, true );
								return ht;
							 },
						"bUseRendered": false  }, 
						{ "sTitle": "变动幅度", "mDataProp": "chang_marg", "sWidth": "200px", "bUseRendered": false,"bSortable":false },
						{ "sTitle": "变动原因", "mDataProp": "chang_reason", "sWidth": "600px",  "bUseRendered": false,"bSortable":false }
						
                    ];
		var surl=top.getUrlBase()+"/actions/Prison.action?getPrisonTermChangeList";
			   oTable = $('#termChangeDataTable').dataTable( {
					"bProcessing": false,
					"bServerSide": true,
					"bJQueryUI": true,
					"bFilter": false,
					"bDestroy": true,
					"bLengthChange": true,
					"iDisplayLength":100,
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
					     var temp="";
						 aoData.push( { "name": "termChangInfo.prison_code", "value": infoId } );
			        },
						"sDom": "frt",
						"sPaginationType": "full_numbers",
						"aoColumns": iaoColumns
				} );
	}
	
	function showOtherAccusation(){
		var iaoColumns= [
						{  "sTitle": "罪名", "mDataProp": "acccusation", "sWidth": "100px","sClass": "left", "bSortable":false ,
							"fnRender": function ( oObj ) {
							var ht="";
							 /**if(gStatus==0){
							ht+= '<img src="images/delete.gif" onclick="deleteOtherAccusation('+oObj.aData.id+')"/>&nbsp;&nbsp;'
							+'<img src="../../img/edit.gif" onclick="updateOtherAccusation('+oObj.aData.id+','+oObj.aData.acccusation+','+oObj.aData.measure_date+','+oObj.aData.invest_auth+','+oObj.aData.judicial+','+oObj.aData.charge+','+oObj.aData.prison_term+')"/>';
							} */
							ht+=oObj.aData.acccusation;
							return ht;
							},
						  "bUseRendered": false},
						{ "sTitle": "被采取强制措施时间侦查机关", "mDataProp": "measure_date", "sWidth": "300px","sClass": "center","bSortable":false ,
							"fnRender": function ( oObj ) {
								return top.getTimeStr(oObj.aData.measure_date, true );
							 },
						"bUseRendered": false  }, 
						{ "sTitle": "侦查机关", "mDataProp": "invest_auth", "sWidth": "150px", "bUseRendered": false,"bSortable":false  },
						{ "sTitle": "审判机关", "mDataProp": "judicial", "sWidth": "150px",  "bUseRendered": false,"bSortable":false  },
						{ "sTitle": "所涉罪名", "mDataProp": "charge", "sWidth": "150px", "bUseRendered": false,"bSortable":false  },
						{ "sTitle": "刑期", "mDataProp": "prison_term", "sWidth": "100px",  "bUseRendered": false,"bSortable":false  }
                    ];
		var surl=top.getUrlBase()+"/actions/Prison.action?getOtherAccusationList";
			   oTable = $('#otheAccusationDataTable').dataTable( {
					"bProcessing": false,
					"bServerSide": true,
					"bJQueryUI": true,
					"bFilter": false,
					"bDestroy": true,
					"bLengthChange": true,
					"iDisplayLength":20,
					"sAjaxSource": surl,
					"aaSorting": [[ 0, "asc" ]],
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
					     var temp="";
						 aoData.push( { "name": "otherInfo.prison_code", "value": infoId } );
			        },
						"sDom": "frt",
						"sPaginationType": "full_numbers",
						"aoColumns": iaoColumns
				} );
	}
	function showEscortRecd(){
		  var iaoColumns= [
						{ "sTitle": "押送日期", "mDataProp": "send_date", "sWidth": "150px","sClass": "center","bSortable":false ,
							"fnRender": function ( oObj ) {
							var ht="";
							/** if(gStatus==0){
							 ht+='<img src="images/delete.gif" onclick="deleteEscortRecd('+oObj.aData.id+')"/>&nbsp;&nbsp;'
							+'<img src="../../img/edit.gif" onclick="updateEscortRecd('+oObj.aData.id+','+oObj.aData.send_date+','+oObj.aData.police+','+oObj.aData.dept_id+')"/>';
							} */
							ht+=top.getTimeStr(oObj.aData.send_date, true );
							return ht;
							 },
						"bUseRendered": false  }, 
						{ "sTitle": "执行押送的警察姓名", "mDataProp": "police", "sWidth": "200px", "bUseRendered": false ,"bSortable":false },
						{ "sTitle": "单位及职务", "mDataProp": "dept_id", "sWidth": "300px",  "bUseRendered": false ,"bSortable":false  },
                    ];
		var surl=top.getUrlBase()+"/actions/Prison.action?getEscortRecdList";
			   oTable = $('#escortRecdDataTable').dataTable( {
					"bProcessing": false,
					"bServerSide": true,
					"bJQueryUI": true,
					"bFilter": false,
					"bDestroy": true,
					"bLengthChange": true,
					"iDisplayLength":20,
					"sAjaxSource": surl,
					"aaSorting": [[ 0, "asc" ]],
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
					     var temp="";
						 aoData.push( { "name": "escortInfo.prison_code", "value": infoId } );
			        },
						"sDom": "frt",
						"sPaginationType": "full_numbers",
						"aoColumns": iaoColumns
				} );
	}
	
	function addPrisonTermChange(){
		var xurl="prisonTermChangeInfo.html?optType=insert&prison_code="+infoId;
		openDialog("添加刑期变动情况信息",xurl,true,550,300,showTermChangeInfo);
    }
	
	function updatePrisonTermChange(id,chang_date,chang_marg,chang_reason){
      var xurl="prisonTermChangeInfo.html?optType=update&infoId="+id
	  +"&chang_marg="+chang_marg+"&chang_reason="+chang_reason+"&chang_date="+chang_date+"&prison_code="+infoId;
	  openDialog( "更新刑期变动情况信息",xurl,true,550,300,showTermChangeInfo);
    }
	
	function deletePrisonTermChange(id){
		termChangeId=id;
		top.showConfirm("您确定要删除该押送记录信息？", doDelPrisonTermChange);
		
	}
	function doDelPrisonTermChange(){
		var aoData=[];
		aoData.push( { "name": "termChangInfo.id", "value": termChangeId } );
		 xurl="/actions/Prison.action?deletePrisonTermChange";
		top.sendAjaxRequest(xurl,aoData,savePrisonTermChangeCallBack);
	}
	 function savePrisonTermChangeCallBack(obj){
		 showTermChangeInfo();
	 }
	
	
	
	function deleteOtherAccusation(id){
		accusationId=id;
		top.showConfirm("您确定要删除该余罪或再罪记录？", doDelAccusation);
	}
	
	function doDelAccusation(){
		var aoData=[];
		aoData.push( { "name": "otherInfo.id", "value": accusationId} );
		 xurl="/actions/Prison.action?deleteOtherAccusation";
		top.sendAjaxRequest(xurl,aoData,saveOtherAccusationCallBack);
	}
	
	function saveOtherAccusationCallBack(obj){
		showOtherAccusation();
	 }

	function deleteRelation(id){
		relationId=id;
		top.showConfirm("您确定要删除该社会关系？", doDelRelation);
	}
	function doDelRelation(){
		var aoData=[];
		aoData.push( { "name": "relationInfo.id", "value": relationId} );
		 xurl="/actions/Prison.action?deleteRelationInfo";
		top.sendAjaxRequest(xurl,aoData,saveRelationCallBack);
	}

	function saveRelationCallBack(obj){
		queryRelationList();
	 }

	function queryOtherAccusation(){
		var aoData=[];
		aoData.push( { "name": "otherInfo.prison_code", "value": infoId } );
		 xurl="/actions/Prison.action?getRelationInfoList";
		top.sendAjaxRequest(xurl,aoData,queryRelationListCallback);
	}
	function deleteEscortRecd(id){
		escortRecdId=id;
		top.showConfirm("您确定要删除该押送记录信息？", doDelEscortRecd);
		
	}
	function doDelEscortRecd(){
		var aoData=[];
		aoData.push( { "name": "escortInfo.id", "value": escortRecdId } );
		 xurl="/actions/Prison.action?deleteEscortRecd";
		top.sendAjaxRequest(xurl,aoData,saveEscortRecd);
	}
	function saveEscortRecd(obj){
		showEscortRecd();
	 }
	
	function queryRelationList(){
		var aoData=[];
		aoData.push( { "name": "relationInfo.prison_code", "value": infoId } );
		 xurl="/actions/Prison.action?getRelationInfoList";
		top.sendAjaxRequest(xurl,aoData,queryRelationListCallback);
	}
	
	function queryRelationListCallback(obj){
		try{
			rs=obj.aaData;
			relationList=rs;
			var ht='<tr>';
				ht+='<th class="tbody_td" width="20%" height="30px">姓名</th>';
				ht+='<th class="tbody_td" width="20%">关系</th>';
				ht+='<th class="tbody_td" width="35%">工作单位或家庭住址</th>';
				ht+='<th class="tbody_td" width="15%">联系电话</th>';
				
				var check_ht='<tr>';
				check_ht+='<th class="tbody_td" width="20%" height="30px">姓名</th>';
				check_ht+='<th class="tbody_td" width="20%">关系</th>';
				check_ht+='<th class="tbody_td" width="35%">工作单位或家庭住址</th>';
				check_ht+='<th class="tbody_td" width="15%">联系电话</th>';
				if(gStatus==0){
				ht+='<th class="tbody_td" width="10%">操作</th>';
				}
			    ht+='</tr>';
			
			for(var i=0;i<rs.length;i++ )
			{
			    ht+='<tr>';
				ht+='<td align="center" class="tbody_td" height="35">';
				//ht+='<a onclick="updateRelation(\''+rs[i].id+',\''+rs[i].f_name+'\',\''+rs[i].relation+'\',\''+rs[i].unit_addr+'\',\''+rs[i].tel+'\')" >'+rs[i].f_name+'</a></td>';
				ht+=rs[i].f_name;
				ht+='<td align="center" class="tbody_td">';
				ht+=rs[i].relation+'</td>';
				ht+='<td align="center" class="tbody_td">';
				ht+=rs[i].unit_addr+'</td>';
				ht+='<td align="center" class="tbody_td">';
				ht+=rs[i].tel+'</td>';
				
				check_ht+='<tr>';
				check_ht+='<td align="center" class="tbody_td" height="35">';
				//ht+='<a onclick="updateRelation(\''+rs[i].id+',\''+rs[i].f_name+'\',\''+rs[i].relation+'\',\''+rs[i].unit_addr+'\',\''+rs[i].tel+'\')" >'+rs[i].f_name+'</a></td>';
				check_ht+=rs[i].f_name;
				check_ht+='<td align="center" class="tbody_td">';
				check_ht+=rs[i].relation+'</td>';
				check_ht+='<td align="center" class="tbody_td">';
				check_ht+=rs[i].unit_addr+'</td>';
				check_ht+='<td align="center" class="tbody_td">';
				check_ht+=rs[i].tel+'</td>';
				if(gStatus==0){
				ht+='<td align="center" class="tbody_td">&nbsp'
				+'<img src="../../img/delete.gif" onclick="deleteRelation('+rs[i].id+')"/>&nbsp;&nbsp;'
				+'<img src="../../img/edit.gif" onclick="updateRelation(\''+rs[i].id+'\',\''+rs[i].f_name+'\',\''+rs[i].relation+'\',\''+rs[i].unit_addr+'\',\''+rs[i].tel+'\')"/></td>';
			    }
				ht+='</tr>';
			}
			$("#Relationtable").html(ht);
			$("#check_Relationtable").html(check_ht);
		}catch(e)
		{
			//alert(e.message);
		}
	}
	
	 function addRelation(){
	 if(infoId==""){
	   	top.showInfoWinWarn("请先添加基本信息!");
	   return;
	}
		var xurl="relationInfo.html?optType=insert&prison_code="+infoId;
		openDialog("家庭成员及主要社会关系记录",xurl,true,550,300,queryRelationList);
	 }
	 function updateRelation(id,f_name,relation,unit_addr,tel){
      var xurl="relationInfo.html?optType=update&infoId="+id
	  +"&f_name="+f_name+"&relation="+relation+"&unit_addr="+unit_addr+"&prison_code="+infoId+"&tel="+tel;
	  openDialog( "更新家庭成员及主要社会关系记录",xurl,true,550,300,queryRelationList);
 }
 
	function addOtherAccusation(){
	if(infoId==""){
	   	top.showInfoWinWarn("请先添加基本信息!");
	   return;
	}
		var xurl="otherAccusation.html?optType=insert&prison_code="+infoId;
		openDialog("添加余罪或再罪情况记录信息",xurl,true,580,400,showOtherAccusation);
	 }
	 function updateOtherAccusation(id,acccusation,measure_date,invest_auth,judicial,charge,prison_term){
	  var xurl="otherAccusation.html?optType=update&infoId="+id+"&acccusation="+acccusation
	  +"&measure_date="+measure_date+"&invest_auth="+invest_auth+"&judicial="+judicial+"&prison_code="+infoId+"&charge="+charge+"&prison_term="+prison_term;
	  openDialog( "更新余罪或再罪有关情况信息",xurl,true,550,350,showOtherAccusation);
	}
	function addEscortRecd(){
	if(infoId==""){
	   	top.showInfoWinWarn("请先添加基本信息!");
	   return;
	}
		var xurl="escortRecd.html?optType=insert&prison_code="+infoId;
		openDialog("添加罪犯押送情况记录信息",xurl,true,550,350,showEscortRecd);
	 }
	 function updateEscortRecd(id,send_date,police,dept_id){
      var xurl="escortRecd.html?optType=update&infoId="+id
	  +"&send_date="+send_date+"&police="+police+"&prison_code="+infoId+"&dept_id="+dept_id;
	  openDialog( "更新罪犯押送情况记录信息",xurl,true,550,350,showEscortRecd);
	}
	
	function deleteResume(id){
		resumeId=id;
		top.showConfirm("您确定要删除该条个人简历信息？", doDelResume);
	}
	function doDelResume(id){
		var aoData=[];
		aoData.push( { "name": "resumeRecd.id", "value": resumeId} );
		xurl="/actions/Prison.action?deleteResumeRecd";
		top.sendAjaxRequest(xurl,aoData,queryResumeList);
	}
	function queryResumeList(){
		var aoData=[];
		aoData.push( { "name": "resumeRecd.prison_code", "value": infoId } );
		 xurl="/actions/Prison.action?getResumeRecdList";
		top.sendAjaxRequest(xurl,aoData,queryResumeListCallback);
	}
	
   function queryResumeListCallback(obj){
		try{
			rs=obj.aaData;
			resumeList=rs;
			var ht='<tr>';
				ht+='<th class="tbody_td" width="30%" height="30px">起止日期</th>';
				ht+='<th class="tbody_td" width="40%">所在单位</th>';
				ht+='<th class="tbody_td" width="20%">职务</th>';
				
		    var check_ht='<tr>';
				check_ht+='<th class="tbody_td" width="30%" height="30px">起止日期</th>';
				check_ht+='<th class="tbody_td" width="40%">所在单位</th>';
				check_ht+='<th class="tbody_td" width="30%">职务</th>';
				if(gStatus==0){
				ht+='<th class="tbody_td" width="10%">操作</th>';
				}
			    ht+='</tr>';
			
			for(var i=0;i<rs.length;i++ )
			{
			    ht+='<tr>';
				ht+='<td align="left" class="tbody_td" height="35px">&nbsp;'+rs[i].begin_date+'&nbsp;到&nbsp;'+rs[i].end_date+'</td>';
				ht+='<td align="left" class="tbody_td">'+rs[i].company+'</td>';
				ht+='<td align="left" class="tbody_td">'+rs[i].post+'</td>';
				
				check_ht+='<tr>';
				check_ht+='<td align="left" class="tbody_td" height="35px">&nbsp;'+rs[i].begin_date+'&nbsp;到&nbsp;'+rs[i].end_date+'</td>';
				check_ht+='<td align="left" class="tbody_td">'+rs[i].company+'</td>';
				check_ht+='<td align="left" class="tbody_td">'+rs[i].post+'</td>';
				if(gStatus==0){
				ht+='<td align="left" class="tbody_td">&nbsp;<img src="images/delete.gif" onclick="deleteResume('+rs[i].id+')"/>&nbsp;&nbsp;'
				+'<img src="../../img/edit.gif" onclick="updateResume(\''+rs[i].id+'\',\''+rs[i].end_date+'\',\''+rs[i].company+'\',\''+rs[i].post+'\',\''+rs[i].begin_date+'\')"/></td>';
				}
				ht+='</tr>';
			}
			$("#Resumetable").html(ht);
			$("#check_Resumetable").html(check_ht);
		}catch(e)
		{
			//alert(e.message);
		}
	}
   function addResume(){
      if(infoId==""){
	   	top.showInfoWinWarn("请先添加基本信息!");
	   return;
	}
		var xurl="resume.html?optType=insert&prison_code="+infoId;
		openDialog("添加个人简历记录信息",xurl,true,550,300,queryResumeList);
	  
	 }
   function updateResume(id,end_date,company,post,begin_date){
      var xurl="resume.html?optType=update&infoId="+id+"&company="+company+"&post="+post+"&begin_date="+begin_date+"&prison_code="+infoId+"&end_date="+end_date;
	  openDialog( "更新个人简历记录信息",xurl,true,550,300,queryResumeList);
 }
 
   function uploadPic(){
     var xurl="../uploadFileSimple.html?preFix=USER";
     openDialog( "上传人员照片",xurl,true,500,200,uploadPicCallback);
 }
 
   function uploadPicCallback(obj){
     try{
	   var obj=top.getTempValue();
	   if ( obj.isSaveOK ) {
          var aoData=[];
		  aoData.push( { "name": "prison.prison_code", "value": infoId } );
		  aoData.push( { "name": "prison.pic", "value": obj.filePath } );
		  xurl="/actions/Prison.action?updateUserPic";
		  $("#pic").attr("src",top.getUrlBase()+"/download?filePath="+obj.filePath);
		   $("#check_pic").attr("src",top.getUrlBase()+"/download?filePath="+obj.filePath);
		  top.sendAjaxRequest(xurl,aoData,savePicCallback);	     
	   }
	 }catch(e){}
 }
    function savePicCallback(obj){
	    try{
	    if ( obj.status == true ){
		 isSaveOK = true;
	     isCreated = true;
	     top.showInfoWinOK("操作成功");
		  optType="update";
		  prisonInfo=obj.body.proCorrectionInfo;
		  parent.setPrisonInfoObj( prisonInfo );
	    }else{
	      isCreated = false;
	      top.showInfoWinError("操作失败 "+obj.msg);
	    }
	   }catch(e){
		  top.showInfoWinError("处理异常:"+e.message);
	   }
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
	
   function ExtractionBirthday(oneText,twoText){
	    var txtparm = $("#"+oneText).val();
		if(txtparm.length==18){
　　		var year = txtparm.substring(6,10);
　　		var month = txtparm.substring(10,12);
　　		var date=txtparm.substring(12,14);
　　		$("#"+twoText).val(year+"-"+month+"-"+date);
	    } else{
　    	$("#"+oneText).val("");
	    }
   }
	
function getXValue(){
	return prisonInfo;
}
function getBValue(){	
	return prisonInfo;
}
function getUrlBase(){
	return top.getUrlBase();
}
function getRelationsValue(){
	return relationList;
}
function getResumesValue(){
	return resumeList;
}

function getFValue(){
	return prisonInfo;
}

function getJValue(){
	return prisonInfo;
}
function getTimeStr(t){
	   return top.getTimeStr(t,true);
	}
	
function getCodeName(dictoryName,value){
	   return top.getCodeName(dictoryName,value);
	}
