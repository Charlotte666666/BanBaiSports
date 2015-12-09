 
 // 房源基本信息标签里的图片上传与删除逻辑
 function getFileName( fileName ) {
	     var subfix="";
		 var ind=fileName.indexOf(".");
		 if ( ind != -1 ) {
		   subfix = fileName.substring(ind, fileName.length);
		 }
		 picFileName="HOUSE_PIC_"+timeStamp+subfix;
	  return picFileName;
   }
   
   function setUploadFileStatus(isOK){
	 if ( isOK ) {
	   var src = top.getUrlBase()+"/download?filePath="+$("#photo").val()+"&fileName="+$("#photo").val();
	   if( saveFileNames == '' ){
	 	 	 saveFileNames = picFileName;
	 	 	 itemCarouselContent = '<div class="item active"><img src="'+src+'"></div>';
	 	 	 indicatorsCarouselContent = '<li data-target="#myCarousel" data-slide-to="0" class="active"></li>';
	   }else{
		 	 saveFileNames = saveFileNames + ';' + picFileName;
		 	 itemCarouselContent += '<div class="item"><img src="'+src+'"></div>';
		 	 var i = itemCarouselContent.match(/item/g).length; i--;
		 	 indicatorsCarouselContent += '<li data-target="#myCarousel" data-slide-to="'+i+'"></li>';
	   }
	   $("#itemCarousel").html('');
	   $("#itemCarousel").html( itemCarouselContent );
	   $("#indicatorsCarousel").html('');
	   $("#indicatorsCarousel").html( indicatorsCarouselContent );
	   var count = itemCarouselContent.match(/item/g).length;  
	   if( count > 0 ) count--;
	   $("#myCarousel").carousel("pause").removeData();
	   $('#myCarousel').carousel(count);
	   var d=new Date();
	   timeStamp=d.getTime();
	   updatePicUrls();
	 }
   }

   function deletePic(){
   		top.showConfirm("您确定要删除当前图片吗？", doDeletePic);
   }

   function doDeletePic(){
   		var pic_num = $("#indicatorsCarousel").find('.active').attr('data-slide-to');
   		var pic_urls= saveFileNames.split(";");
   		pic_urls.splice(pic_num,1);
   		saveFileNames = pic_urls.join(";");

   		for( i=0; i<pic_urls.length; i++){
		        		var src = top.getUrlBase()+"/download?filePath="+pic_urls[i]+"&fileName="+pic_urls[i];
		        		 if(  i == 0 ){
		        		 		 itemCarouselContent = '<div class="item active"><img src="'+src+'"></div>';
		        		 		 indicatorsCarouselContent = '<li data-target="#myCarousel" data-slide-to="'+i+'" class="active"></li>';
		        		 }else{
	 					 	itemCarouselContent += '<div class="item"><img src="'+src+'"></div>';
	 						indicatorsCarouselContent += '<li data-target="#myCarousel" data-slide-to="'+i+'"></li>';
	 					 }
		        	}
       $("#itemCarousel").html('');
       $("#indicatorsCarousel").html('');
	   $("#itemCarousel").html( itemCarouselContent );
	   $("#indicatorsCarousel").html( indicatorsCarouselContent );
	   $("#myCarousel").carousel("pause").removeData();
	   $('#myCarousel').carousel( pic_num-- );
	   var d=new Date();
	   timeStamp=d.getTime();
   	   updatePicUrls();
   }

   function updatePicUrls(){
   	 	var aoData=[];
        var url = "/actions/HouseMain.action?updateHousePicUrls";
        aoData.push( { "name": "house.id", "value": gInfoId } );
   		aoData.push( { "name": "house.pic_urls", "value": saveFileNames } );
   		top.sendAjaxRequest(url,aoData,updatePicUrlsCallback);
   }

   function updatePicUrlsCallback(obj){
	   try{
	    if( obj.status == true ){
	     	 isSaveOK = true;
		  	 return;
	    }else{
	      isSaveOK = false;
	      top.showInfoWinError("操作失败");
	    }
	   }catch(e){
		  top.showInfoWinError("操作异常:"+e.message);
	   }
   }
  
  // 房间图片上传与删除逻辑
   function setRoomUploadFileStatus(isOK){
	 if ( isOK ) {
	   var src = top.getUrlBase()+"/download?filePath="+$("#photoRoom").val()+"&fileName="+$("#photoRoom").val();
	   if( saveRoomFileNames == '' ){
	 	 	 saveRoomFileNames = picFileName;
	 	 	 itemCarouselContentRoom = '<div class="item active"><img src="'+src+'"></div>';
	 	 	 indicatorsCarouselContentRoom = '<li data-target="#myCarouselRoom" data-slide-to="0" class="active"></li>';
	   }else{
		 	 saveRoomFileNames = saveRoomFileNames + ';' + picFileName;
		 	 itemCarouselContentRoom += '<div class="item"><img src="'+src+'"></div>';
		 	 var i = itemCarouselContentRoom.match(/item/g).length; i--;
		 	 indicatorsCarouselContentRoom += '<li data-target="#myCarouselRoom" data-slide-to="'+i+'"></li>';
	   }
	   $("#itemCarouselRoom").html('');
	   $("#itemCarouselRoom").html( itemCarouselContentRoom );
	   $("#indicatorsCarouselRoom").html('');
	   $("#indicatorsCarouselRoom").html( indicatorsCarouselContentRoom );
	   var count = itemCarouselContentRoom.match(/item/g).length;  
	   if( count > 0 ) count--;
	   $("#myCarouselRoom").carousel("pause").removeData();
	   $('#myCarouselRoom').carousel(count);
	   var d=new Date();
	   timeStamp=d.getTime();
	   updateRoomPicUrls();
	 }
   }

   function deleteRoomPic(){
   		top.showConfirm("您确定要删除当前图片吗？", doDeleteRoomPic);
   }

   function doDeleteRoomPic(){
   		var pic_num = $("#indicatorsCarouselRoom").find('.active').attr('data-slide-to');
   		var pic_urls= saveRoomFileNames.split(";");
   		pic_urls.splice(pic_num,1);
   		saveRoomFileNames = pic_urls.join(";");

   		for( i=0; i<pic_urls.length; i++){
		        		var src = top.getUrlBase()+"/download?filePath="+pic_urls[i]+"&fileName="+pic_urls[i];
		        		 if(  i == 0 ){
		        		 		 itemCarouselContentRoom = '<div class="item active"><img src="'+src+'"></div>';
		        		 		 indicatorsCarouselContentRoom = '<li data-target="#myCarouselRoom" data-slide-to="'+i+'" class="active"></li>';
		        		 }else{
	 					 	itemCarouselContentRoom += '<div class="item"><img src="'+src+'"></div>';
	 						indicatorsCarouselContentRoom += '<li data-target="#myCarouselRoom" data-slide-to="'+i+'"></li>';
	 					 }
		        	}
       $("#itemCarouselRoom").html('');
       $("#indicatorsCarouselRoom").html('');
	   $("#itemCarouselRoom").html( itemCarouselContentRoom );
	   $("#indicatorsCarouselRoom").html( indicatorsCarouselContentRoom );
	   $("#myCarouselRoom").carousel("pause").removeData();
	   $('#myCarouselRoom').carousel( pic_num-- );
	   var d=new Date();
	   timeStamp=d.getTime();
   	   updateRoomPicUrls();
   }

   function updateRoomPicUrls(){
   	 	var aoData=[];
        var url = "/actions/HouseMain.action?updateRoomPicUrls";
        aoData.push( { "name": "room.id", "value": currentShowRoomId } );
   		aoData.push( { "name": "room.pic_urls", "value": saveRoomFileNames } );
   		top.sendAjaxRequest(url,aoData,updateRoomPicUrlsCallback);
   }

   function updatePicUrlsCallback(obj){
	   try{
	    if( obj.status == true ){
	     	 isSaveOK = true;
		  	 return;
	    }else{
	      isSaveOK = false;
	      top.showInfoWinError("操作失败");
	    }
	   }catch(e){
		  top.showInfoWinError("操作异常:"+e.message);
	   }
   }
   
   function updateRoomPicUrlsCallback(obj){
	   try{
	    if( obj.status == true ){
	     	 isSaveOK = true;
			 for (var i=0;i<roomList.length;i++) {
			   if ( roomList[i].id == currentShowRoomId ) {
				 roomList[i].pic_urls=saveRoomFileNames;
			   }
			 }
		  	 return;
	    }else{
	      isSaveOK = false;
	      top.showInfoWinError("操作失败");
	    }
	   }catch(e){
		  top.showInfoWinError("操作异常:"+e.message);
	   }
   }

   // 其他逻辑
   function doBeforeClose(){
     var obj={
    		  "isSaveOK":isSaveOK
    	 };
     top.setTempValue(obj);
   }
   function doCancel(){
	   top.closeDialog();
   }


   function doSubmit(){
     if ( !hasEditRight ) return ;
	 var aoData=[];
     var url = "/actions/HouseMain.action?insertTblHouseInfo";
     if ( optType == 'update' || gInfoId != '' ) {
         aoData.push( { "name": "house.id", "value": gInfoId } );
		 url = "/actions/HouseMain.action?updateTblHouseInfo";
     }
     //表单验证
	 var checkMsg = checkForm();
	 if ( checkMsg != '' ) {
	     top.showInfoWinWarn(checkMsg);
         return ;
	 }

aoData.push( { "name": "house.category", "value": category } );
aoData.push( { "name": "house.house_type", "value": $("#house_type").val() } );
aoData.push( { "name": "house.house_number", "value": $("#house_number").val() } );
aoData.push( { "name": "house.source_from", "value": $("#source_from").val() } );
aoData.push( { "name": "house.status", "value": $("#status").val() } );
aoData.push( { "name": "house.street", "value": $("#street").val() } );
aoData.push( { "name": "house.district", "value": $("#district").val() } );
aoData.push( { "name": "house.belong_area", "value": $("#belong_area").val() } );
aoData.push( { "name": "house.facility", "value": getFacility() } );
aoData.push( { "name": "house.fitment", "value": $("#fitment").val() } );
aoData.push( { "name": "house.public_memo", "value": $("#public_memo").val() } );
aoData.push( { "name": "house.traffic", "value": $("#traffic").val() } );
aoData.push( { "name": "house.farea", "value": top.g_GetNumValue($("#farea").val()) } );
aoData.push( { "name": "house.property_costs", "value": top.g_GetNumValue($("#property_costs").val()) } );
aoData.push( { "name": "house.num_bedroom", "value": top.g_GetNumValue($("#num_bedroom").val()) } );
aoData.push( { "name": "house.num_livingroom", "value": top.g_GetNumValue($("#num_livingroom").val()) } );
aoData.push( { "name": "house.num_restroom", "value": top.g_GetNumValue($("#num_restroom").val()) } );
aoData.push( { "name": "house.balcony", "value": top.g_GetNumValue($("#balcony").val()) } );
aoData.push( { "name": "house.floor", "value": top.g_GetNumValue($("#floor").val()) } );
aoData.push( { "name": "house.floor_tatal", "value": top.g_GetNumValue($("#floor_tatal").val()) } );
aoData.push( { "name": "house.pic_urls", "value": saveFileNames } );
if ( category == 2 ) {
  aoData.push( { "name": "owner.id", "value": top.g_GetNumValue($("#h_owner_id").val()) } );
  aoData.push( { "name": "owner.owner_name", "value": $("#h_owner_name").val() } );
  aoData.push( { "name": "owner.owner_tel", "value": $("#h_owner_tel").val() } );
} else {
  aoData.push( { "name": "house.owner_id", "value": top.g_GetNumValue($("#owner_id").val()) } );
}

    //Ajax处理操作                
	top.sendAjaxRequest(url,aoData,optCallback);
   }
   
   function getFacility(){
      return top.getAllCheckedValue( document.getElementsByName('checkbox_facility') );
   }
   
   //表单验证函数
   function checkForm(){
     var msg = "";
	 if ( category == 2 ) {
	   msg += checkString($("#h_owner_name").val(),true,10,"业主姓名");
	   msg += checkString($("#h_owner_tel").val(),true,10,"业主电话");
	 }
     return msg;
   }
   
   //Ajax处理房源基本信息的回调函数
   function optCallback(obj){
	   try{
	    if( obj.status == true ){
	     	 isSaveOK = true;
		  	 if( gInfoId == '' ) {  
		    	gInfoId = obj.msg;
				$("#house_id").val( gInfoId );
				$("#roomLiA").show();
			    $("#followLiA").show();
			    if ( top.g_isPermit("houseContract_ownerView") && category == 0 ) $("#contractLiA").show();
		 	 }
	      	top.showInfoWinOK("操作成功");
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
		   optType = top.getUrlParam(document.URL,"opt");
		   currentShowRoomId = top.getUrlParam(document.URL,"roomId");
		   category = top.getUrlParam(document.URL,"category");
		   if ( !category ) category=0;
		   var toTab = top.getUrlParam(document.URL,"toTab");
		   if ( !toTab ) toTab="";
		   if ( !currentShowRoomId ) currentShowRoomId=0;
		   if ( currentShowRoomId > 0 ) {
		     $("#roomLiA").trigger("click");
		   } else if ( toTab == 'contract' ) {
		     $("#contractLiA").trigger("click");
		   }
		   
		   if ( category == 2 ) { // 合作房源
		      $("#contractLiA").hide();
			  if ( optType == 'insert' ) {
			    $("#showOwnerInfoBtn").show();
			    showOwnerInfo();
			  }
		   }

		   if ( optType != 'insert' ) {
		     gInfoId=top.getUrlParam(document.URL,"id");
			 $("#house_id").val( gInfoId );
			 getHouseDetail();
		   } else {
		     $("#roomLiA").hide();
			 $("#followLiA").hide();
			 $("#contractLiA").hide();
		   }
		   
		   if ( optType == 'insert' || optType == 'update' ) {
		     $( "#code_district" ).html( top.getCodeSelectHtml("HOUSE_DISTRICT","district",false ) );
			 $( "#code_belong_area" ).html( top.getCodeSelectHtml("HOUSE_BELONG","belong_area",false ) );
			 $( "#code_fitment" ).html( top.getCodeSelectHtml("HOUSE_FITMENT", "fitment", false ) );
			 $( "#code_status" ).html( top.getCodeSelectHtml("HOUSE_STATUS", "status", false ) );
			 $( "#code_house_type" ).html( top.getCodeSelectHtml("HOUSE_TYPE", "house_type", false ) );
			 $( "#code_source_from" ).html( top.getCodeSelectHtml("HOUSE_FROM", "source_from", false ) );
			 if ( optType == 'insert' ) {
			   $("#td_facility").html( top.getHouseFacilityHtml( "", "checkbox_facility", 4) );
			 }
		     $( "#submitBtn" ).show();
		   } else {
		     $( "#submitBtn" ).hide();
		   }
		   
		   $("#code_performance_type").html( top.getCodeSelectHtml("PERFORMANCE_TYPE","performance_type",true) );
		   
		   // 承租合同
		   $("#code_contract_status").html( top.getCodeName( "CONTRACT_STATUS", 0 ) );
           $("#code_contract_pay_type").html( top.getCodeSelectHtml("HOUSE_PAY_TYPE","contract_pay_type",true,'103') );
		   for ( var i=0;i<16;i++) {
			  rentIds[i]=0;
		   }
		   
		   $("#td_start_man").html( top.getAllUserSelect("start_man") );
		   $("#td_end_man").html( top.getAllUserSelect("end_man") );
		   $("#td_performance_user_code").html( top.getAllUserSelect("performance_user_code") );
	   }catch(e){
		   top.showInfoWinError(e.message);
	   }
   }
   
   function getHouseDetail(){
       var aoData=[];
	   aoData.push( { "name": "house.id", "value": gInfoId } );
	   top.sendAjaxRequest("/actions/HouseMain.action?getHouseDetailInfo",aoData,infoCallback);
   }

   function infoCallback(obj){
       try{
        if ( obj.status == true ){
            var o=obj.body;
			$("#category").val(o.category);
			category=o.category;
			// 如果是合作房源,不显示承租合同标签页
			if ( category == 2 ) { // 0:内部房源 1:买卖房源 2:合作房源
		      $("#contractLiA").hide();
			  if ( top.g_isPermit("houseCust_ownerView") ) {
			   $("#showOwnerInfoBtn").show();
			  }
		    } else {
			  $("#tr_owner_1").hide();
	          $("#tr_owner_2").hide();
			}
			
			$("#house_type").val(o.house_type);
			$("#source_from").val(o.source_from);
			$("#status").val(o.status);
			$("#street").val(o.street);
			$("#district").val(o.district);
			$("#house_number").val(o.house_number);
			$("#td_facility").html( top.getHouseFacilityHtml( o.facility, "checkbox_facility", 4) );
			$("#fitment").val(o.fitment);
			$("#public_memo").val(o.public_memo);
			$("#traffic").val(o.traffic);
			$("#belong_area").val(o.belong_area);
			$("#farea").val( o.farea);
			$("#num_bedroom").val( o.num_bedroom);
			$("#num_livingroom").val( o.num_livingroom);
			$("#num_restroom").val( o.num_restroom);
			$("#balcony").val( o.balcony);
			$("#floor").val( o.floor);
			$("#floor_tatal").val( o.floor_tatal);

		        if ( o.roomList ) {
				  showRoomList( o.roomList );
				} else {
				  showRoomList( [] );
				}
				
				if( o.pic_urls != '' ){
		        	saveFileNames = o.pic_urls;
		        	o.pic_urls = o.pic_urls.split(";");
		        	for( i=0; i<o.pic_urls.length; i++){
		        		var src = top.getUrlBase()+"/download?filePath="+o.pic_urls[i]+"&fileName="+o.pic_urls[i];
		        		 if(  i == 0 ){
		        		 		 itemCarouselContent = '<div class="item active"><img src="'+src+'"></div>';
		        		 		 indicatorsCarouselContent = '<li data-target="#myCarousel" data-slide-to="'+i+'" class="active"></li>';
		        		 }else{
	 					 	itemCarouselContent += '<div class="item"><img src="'+src+'"></div>';
	 						indicatorsCarouselContent += '<li data-target="#myCarousel" data-slide-to="'+i+'"></li>';
	 					 }
		        	}
		           $("#itemCarousel").html('');
			       $("#indicatorsCarousel").html('');
		   		   $("#itemCarousel").html( itemCarouselContent );
		   		   $("#indicatorsCarousel").html( indicatorsCarouselContent );
		        }
				
				if ( o.contract ) {
				    $("#contract_code").val(o.contract.code);
					if ( o.contract.code != '' ) {
					  $("#contract_code").attr("disabled",true);
					  contractCode = o.contract.code;
					}
					$("#contract_comment").val(o.contract.comment);
					$("#contract_num_nextunused").val(o.contract.num_nextunused);
					$("#contract_deposit_money").val(o.contract.deposit_money);
					$("#td_update_time").html( top.getTimeStr(o.contract.update_time) );
					$("#code_contract_status").html( top.getCodeName( "CONTRACT_STATUS", o.contract.status ) );
					$("#contract_num_preunused").val(o.contract.num_preunused);
					$("#contract_rent").val(o.contract.rent);
					$("#contract_end_renttime").val( top.getTimeStr(o.contract.end_renttime,true) );
					$("#contract_sign_date").val( top.getTimeStr(o.contract.sign_date,true) );
					$("#contract_num_rentfreedays").val(o.contract.num_rentfreedays);
					$("#code_contract_pay_type").html( top.getCodeSelectHtml("HOUSE_PAY_TYPE","contract_pay_type",true,o.contract.pay_type) );
					$("#contract_start_renttime").val( top.getTimeStr(o.contract.start_renttime,true) );
					$("#start_water_num").val(o.contract.start_water_num);
					$("#start_ele_num").val(o.contract.start_ele_num);
					$("#start_gas_num").val(o.contract.start_gas_num);
					$("#start_tv_num").val(o.contract.start_tv_num);
					$("#start_net_num").val(o.contract.start_net_num);
					$("#start_man").val(o.contract.start_man);
					$("#end_water_num").val(o.contract.end_water_num);
					$("#end_ele_num").val(o.contract.end_ele_num);
					$("#end_gas_num").val(o.contract.end_gas_num);
					$("#end_tv_num").val(o.contract.end_tv_num);
					$("#end_net_num").val(o.contract.end_net_num);
					$("#end_man").val(o.contract.end_man);
					
					isHasOwnerContract=true;
					
					 // 显示交租记录
					 if ( o.contract.rentList ) {
					   for ( var i=0;i<16;i++ ) {
						 if ( i<o.contract.rentList.length ) {
						   rentIds[i]=o.contract.rentList[i].id;
						   $("#rentTime"+i).val( top.getTimeStr(o.contract.rentList[i].pay_date, true) );
						   $("#rentTime"+i).attr("disabled", (o.contract.rentList[i].status==1)?true:false);
						 } else {
						   $("#rentTime"+i).val("");
						   $("#rentTime"+i).attr("disabled",false);
						 }
					   }
					 } else {
					   for ( var i=0;i<16;i++ ) {
						 $("#rentTime"+i).attr("disabled",false);
					   }
					 }
					 
					  if ( o.contract.status == 0 ) {
						   if ( top.g_isPermit("houseContract_ownerDel") ) $("#delContractBtn").show();
						   if ( top.g_isPermit("houseContract_ownerEnd") ) $("#endContractBtn").show();
					  } else {
						   $("#delContractBtn").hide();
						   $("#endContractBtn").hide();
						   $("#saveContractBtn").hide();
					  }
					  if ( top.g_isPermit("housePerformance_add") ) $("#createPerformanceBtn").show();
					  getPerformanceList();
				} else {
				   isHasOwnerContract=false;
				}
				
  // 业主信息
  if ( o.ownerInfo ) {
   if ( category == 0 ) {
    $("#owner_id").val( (o.ownerInfo.id == 0 ? "系统自动生成":o.ownerInfo.id) );
	$("#owner_name").val( o.ownerInfo.owner_name );
	$("#owner_tel").val( o.ownerInfo.owner_tel);
	$("#card_no").val( o.ownerInfo.card_no);
	$("#owner_bank").val( o.ownerInfo.owner_bank);
	$("#owner_bank_no").val( o.ownerInfo.owner_bank_no);
	if ( o.ownerInfo.id != 0 ) {
	  $("#owner_name").attr("disabled",true);
	  $("#owner_tel").attr("disabled",true);
	  $("#card_no").attr("disabled",true);
	  $("#owner_bank").attr("disabled",true);
	  $("#owner_bank_no").attr("disabled",true);
	}
   } else {
    $("#h_owner_id").val( (o.ownerInfo.id == 0 ? "系统自动生成":o.ownerInfo.id) );
	$("#h_owner_name").val( o.ownerInfo.owner_name );
	$("#h_owner_tel").val( o.ownerInfo.owner_tel);
	if ( o.ownerInfo.id != 0 ) {
	  $("#h_owner_name").attr("disabled",true);
	  $("#h_owner_tel").attr("disabled",true);
	}
   }
 }
				
		        $("#KinSlideshow").html( KinSlideShowContent );
		        showSlides();
        }else{
          top.showInfoWinError("操作失败");
        }
       }catch(e){
          top.showInfoWinError("处理异常:"+e.message);
       }
   }
   
   //打开添加房间信息窗口
   function addHouseRoom(){
	  var xurl="houseRoomInfo.html?opt=insert&houseId="+gInfoId;
	  openDialog("添加房间信息",xurl,true,500,320,saveRoomCallBack);
   }
   
   function editHouseRoom(roomId){
	  var xurl="houseRoomInfo.html?opt=update&houseId="+gInfoId+"&roomId="+roomId;
	  openDialog("修改房间信息",xurl,true,500,320,saveRoomCallBack);
   }
   
   function getRoomInfo(roomId){
      try{
		for (var i=0;i<roomList.length;i++) {
		  if ( roomList[i].id == roomId ) {
		    return roomList[i];
		  }
		}
	  }catch(e){
	  }
	  return null;
   }

   //添加房间窗口关闭前执行的函数，如果成功添加房间，则更新该房源房间列表
   function saveRoomCallBack(obj){
      try{
		  var obj = top.getTempValue();
		  if(obj.isSaveOK) {
		    isSaveOK = true;
			getRoomList();
		  }
	  }catch(e){}
   }

   //显示房间详细信息
   function selectHouseRoom(roomId){
	  try{
	   if ( currentShowRoomId != 0 ) {
	      $("#tr_1_"+currentShowRoomId).css("background","#F4FAFF");
		  $("#tr_2_"+currentShowRoomId).css("background","#F4FAFF");
		  $("#tr_3_"+currentShowRoomId).css("background","#F4FAFF");
	   }
	   $("#tr_1_"+roomId).css("background","#b9d8f3");
	   $("#tr_2_"+roomId).css("background","#b9d8f3");
	   $("#tr_3_"+roomId).css("background","#b9d8f3");
	  }catch(e){
	  }
	  currentShowRoomId=roomId;
	  
	  var o=getRoomInfo(roomId);
	  if ( o != null && o.pic_urls != '' ) {
			 saveRoomFileNames = o.pic_urls;
			 var urls = o.pic_urls.split(";");
			 for( i=0; i<urls.length; i++){
				  var src = top.getUrlBase()+"/download?filePath="+urls[i]+"&fileName="+urls[i];
				  if(  i == 0 ){
					 itemCarouselContentRoom = '<div class="item active"><img src="'+src+'"></div>';
					 indicatorsCarouselContentRoom = '<li data-target="#myCarouselRoom" data-slide-to="'+i+'" class="active"></li>';
				  }else{
				     itemCarouselContentRoom += '<div class="item"><img src="'+src+'"></div>';
					 indicatorsCarouselContentRoom += '<li data-target="#myCarouselRoom" data-slide-to="'+i+'"></li>';
				  }
			 }
			 $("#itemCarouselRoom").html('');
			 $("#indicatorsCarouselRoom").html('');
			 $("#itemCarouselRoom").html( itemCarouselContentRoom );
			 $("#indicatorsCarouselRoom").html( indicatorsCarouselContentRoom );
	  } else {
	         $("#itemCarouselRoom").html('');
			 $("#indicatorsCarouselRoom").html('');
			 $("#itemCarouselRoom").html( '<div class="item active"><img src="images/house.jpg"></div>' );
			 $("#indicatorsCarouselRoom").html( '<li data-target="#myCarouselRoom" data-slide-to="0" class="active"></li>' );
	  }
   }

   function getRoomList(){
       var aoData=[];
	   aoData.push( { "name": "room.house_id", "value": gInfoId } );
	   top.sendAjaxRequest("/actions/HouseMain.action?getRoomListByHouseId",aoData,getRoomListCallBack);
   }
   
   //Ajax更新房间列表信息回调函数
   function getRoomListCallBack(obj){
     if ( obj ) {
	    showRoomList(obj.aaData);
	 }
   }

   //显示房间列表信息
   function showRoomList(ds){
      try{
	    roomList = ds;
	    var ht='';
		if ( !roomList ) {
		  ht='<tr class="tr_data"><td><font size="4">没有房间记录</font></td></tr>';
		  $("#tdRoomList").html( ht );
		  return ;
		}
		var colorTr="F4FAFF";
		for ( var i=0;i<ds.length;i++ ) {
		  ht+='<tr id="tr_1_'+ds[i].id+'" class="tr_data" style="BACKGROUND-COLOR: #'+colorTr+';">';
		  ht+='<td width="20%" align="center" rowspan="3"><a href="javascript:void(0)" onclick="selectHouseRoom('+ds[i].id+')">'+ ds[i].id +'</a></td>';
		  ht+='<td width="15%" align="center" style="margin: 5px; padding: 5px;">'+ top.getCodeName( "HOUSE_ROOM_TYPE", ds[i].room_type ) +'</td>';
		  ht+='<td width="25%" align="center" style="margin: 5px; padding: 5px;">'+ ds[i].room_name +'</td>';
		  ht+='<td width="40%" align="center" style="margin: 5px; padding: 5px;">'+ ds[i].farea +'平米</td>';
		  ht+='</tr>';
		  ht+='<tr id="tr_2_'+ds[i].id+'" class="tr_data" style="BACKGROUND-COLOR: #'+colorTr+';">';
		  if ( ds[i].status == 0 ) {
		    ht+='<td align="center" style="margin: 5px; padding: 5px;"><font color="green">'+ top.getCodeName( "HOUSE_ROOM_STATUS", ds[i].status ) +'</font></td>';
		    ht+='<td align="center" style="margin: 5px; padding: 5px;"><font size="4" color="red">'+ ds[i].price +'</font>元/月</td>';
		  } else {
		    ht+='<td align="center" style="margin: 5px; padding: 5px;">'+ top.getCodeName( "HOUSE_ROOM_STATUS", ds[i].status ) +'</td>';
		    ht+='<td align="center" style="margin: 5px; padding: 5px;">&nbsp;</td>';
		  }
		  ht+='<td  align="left" style="margin: 5px; padding: 5px;">'+ ds[i].memo +'</td>';
		  ht+='</tr>';
		  ht+='<tr id="tr_3_'+ds[i].id+'" class="tr_data" style="BACKGROUND-COLOR: #'+colorTr+';">';
	      ht+='<td colspan="3" align="right" style="margin: 5px; padding: 5px;">';
		  ht+='<table><tr>';
		  if ( hasHouseContractViewRight ) {
		    ht+='<td><div id="showContractBtn" class="buttonDivTwo"><a href="javascript:showRoomContract('+ds[i].id+','+ds[i].price+')">合同</a></div></td>';
		  } else {
		    ht+='<td>&nbsp;</td>';
		  }
		  if ( ds[i].status == 0 ) {
		   if ( hasUpdateRoomRight ) {
		    ht+='<td><div id="editRoomBtn" class="buttonDivTwo"><a href="javascript:editHouseRoom('+ds[i].id+')">修改</a></div></td>';
		   }
		   if ( hasDeleteRoomRight ) {
		    ht+='<td><div id="delRoomBtn" class="buttonDivTwo"><a href="javascript:deleteRoom('+ds[i].id+')">删除</a></div></td>';
		   }
		  }
		  ht+='</tr></table>';
		  ht+='</td>';
		  ht+='</tr>';
		  if ( i < ds.length -1 ) {
		   ht+='<tr>';
		   ht+='<td colspan="4" height="2px" style="background-color: 89A1B9;"></td>';
		   ht+='</tr>';
		  }
		}
		
		if ( ht == '' ) ht='<tr class="tr_data" ><td><font size="4">没有房间记录</font></td></tr>';
		$("#tdRoomList").html( ht );
		
		if ( ds && currentShowRoomId == 0 && ds.length > 0 ) {
		 selectHouseRoom(ds[0].id);
		} else {
		 selectHouseRoom(currentShowRoomId);
		}
	  }catch(e){}
   }
   
   function deleteRoom(roomId){
	  currentDeleteId=roomId;
	  top.showConfirm("您确定要删除选中的房间吗？", doDeleteRoom);
   }
			
   function doDeleteRoom(){
	  var aoData=[];
      aoData.push( { "name": "room.id", "value": currentDeleteId } );
      top.sendAjaxRequest("/actions/HouseMain.action?deleteTblHouseRoom",aoData,deleteRoomCallBack);
   }
   
   function deleteRoomCallBack(obj){
	   try{
	    if ( obj.status == true ){
	        isSaveOK = true;
			top.showInfoWinOK("操作成功");
			currentShowRoomId=0;
			getRoomList();
	    }else{
	    	isSaveOK = false;
	        top.showInfoWinError("操作失败 "+obj.msg);
	    }
	   }catch(e){
		  top.showInfoWinError("处理异常:"+e.message);
	   }
   }
   
   function showRoomContract(roomId,price){
      var xurl="houseContractInfo.html?roomId="+roomId+"&houseId="+gInfoId+"&price="+price;
	  openDialog("出租合同信息",xurl,true,800,600,saveRoomContractCallBack);
   }
   
   function saveRoomContractCallBack(){
      try{
	   var obj = top.getTempValue();
	   if(obj.isSaveOK) getRoomList();
	 }catch(e){
	 }
  }
   
 function getFollowList(){
     var iaoColumns= [
							  {"sTitle": "跟进时间", "mDataProp": "follow_time", "sWidth":"150px", "sClass": "center",
                                   "fnRender": function ( oObj ) {
                                        return top.getTimeStr( oObj.aData.follow_time, false );
                                   },
                                   "bUseRendered": false  
                               },
			                   { "sTitle": "跟进人账号", "mDataProp": "user_code", "sWidth":"120px"},
							   { "sTitle": "跟进内容", "mDataProp": "follow_desc", "sWidth":"330px"}
               ];
			   
			   var surl=top.getUrlBase()+"/actions/HouseMain.action?getTblHouseFollowList";
			   oTable = $('#followDataTable').dataTable( {
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
								top.showInfoWin("发生异常:"+error);
							}
						} );
					},
				"fnServerParams": function ( aoData ) {
					aoData.push( { "name": "follow.house_id", "value": gInfoId } );
					aoData.push( { "name": "follow.is_remind", "value": -1 } );
					aoData.push( { "name": "time1", "value": "" } );
					aoData.push( { "name": "time2", "value": "" } );
					aoData.push( { "name": "time3", "value": "" } );
					aoData.push( { "name": "time4", "value": "" } );
			    },
			    "sDom": "frtlip",
				"sPaginationType": "full_numbers",
				"aoColumns": iaoColumns
				} );
   }

   function addFollowInfo(){
		var xurl="followInfo.html?opt=insert&house_id="+gInfoId;
		openDialog("添加房源跟进信息",xurl,true,450,300,saveFollowCallBack);
   }
   
   function saveFollowCallBack(){
		try{
		  var obj = top.getTempValue();
		  if(obj.isSaveOK) getFollowList()();
		}catch(e){
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
	
	function closeSubDialog(){
	    $( "#dialog" ).dialog( "close" );
	}
	
	function headButtonFun1(){
	   doSubmit();
	}
	
// 保存承租合同信息
function saveOwnerContract(){
     if ( gInfoId == '' ) {
	   top.showInfoWinWarn("请先保存房源信息");
       return ;
	 }
     var msg = "";
     msg += checkString($("#contract_code").val(),true,20,"合同编号");
	 msg += checkString($("#contract_rent").val(),true,10,"租金");
	 msg += checkString($("#contract_sign_date").val(),true,20,"签约日期");
	 msg += checkString($("#contract_start_renttime").val(),true,20,"合同开始日期");
	 msg += checkString($("#contract_end_renttime").val(),true,20,"合同结束日期");
     if ( msg != '' ) {
         top.showInfoWinWarn(msg);
         return ;
     }

    var aoData=[];
	aoData.push( { "name": "ownercontract.house_id", "value": gInfoId } );
	aoData.push( { "name": "ownercontract.code", "value": $("#contract_code").val() } );
	aoData.push( { "name": "ownercontract.start_renttime", "value": top.toTimestamp($("#contract_start_renttime").val()) } );
	aoData.push( { "name": "ownercontract.pay_type", "value": $("#contract_pay_type").val() } );
	aoData.push( { "name": "ownercontract.num_rentfreedays", "value": top.g_GetNumValue( $("#contract_num_rentfreedays").val() ) } );
	aoData.push( { "name": "ownercontract.rent", "value": top.g_GetNumValue( $("#contract_rent").val() ) } );
	aoData.push( { "name": "ownercontract.num_preunused", "value": top.g_GetNumValue( $("#contract_num_preunused").val() ) } );
	aoData.push( { "name": "ownercontract.deposit_money", "value": top.g_GetNumValue( $("#contract_deposit_money").val() ) } );
	aoData.push( { "name": "ownercontract.num_nextunused", "value": top.g_GetNumValue( $("#contract_num_nextunused").val() ) } );
	aoData.push( { "name": "ownercontract.sign_date", "value": top.toTimestamp($("#contract_sign_date").val()) } );
	aoData.push( { "name": "ownercontract.end_renttime", "value": top.toTimestamp($("#contract_end_renttime").val()) } );
	aoData.push( { "name": "ownercontract.comment", "value": $("#contract_comment").val() } );
	aoData.push( { "name": "rentStr", "value": getOwnerRentStr() } );
	aoData.push( { "name": "ownercontract.start_water_num", "value": top.g_GetNumValue( $("#start_water_num").val() ) } );
	aoData.push( { "name": "ownercontract.start_ele_num", "value": top.g_GetNumValue( $("#start_ele_num").val() ) } );
	aoData.push( { "name": "ownercontract.start_gas_num", "value": top.g_GetNumValue( $("#start_gas_num").val() ) } );
	aoData.push( { "name": "ownercontract.start_tv_num", "value": top.g_GetNumValue( $("#start_tv_num").val() ) } );
	aoData.push( { "name": "ownercontract.start_net_num", "value": top.g_GetNumValue( $("#start_net_num").val() ) } );
	aoData.push( { "name": "ownercontract.end_net_num", "value": top.g_GetNumValue( $("#end_net_num").val() ) } );
	aoData.push( { "name": "ownercontract.end_water_num", "value": top.g_GetNumValue( $("#end_water_num").val() ) } );
	aoData.push( { "name": "ownercontract.end_ele_num", "value": top.g_GetNumValue( $("#end_ele_num").val() ) } );
	aoData.push( { "name": "ownercontract.end_gas_num", "value": top.g_GetNumValue( $("#end_gas_num").val() ) } );
	aoData.push( { "name": "ownercontract.end_tv_num", "value": top.g_GetNumValue( $("#end_tv_num").val() ) } );
	aoData.push( { "name": "ownercontract.end_man", "value": $("#end_man").val() } );
	aoData.push( { "name": "ownercontract.start_man", "value": $("#start_man").val() } );
	
	aoData.push( { "name": "owner.id", "value": top.g_GetNumValue($("#owner_id").val()) } );
    aoData.push( { "name": "owner.owner_name", "value": $("#owner_name").val() } );
    aoData.push( { "name": "owner.owner_tel", "value": $("#owner_tel").val() } );
    aoData.push( { "name": "owner.card_no", "value": $("#card_no").val() } );
    aoData.push( { "name": "owner.owner_bank", "value": $("#owner_bank").val() } );
    aoData.push( { "name": "owner.owner_bank_no", "value": $("#owner_bank_no").val() } );
	
	var xurl="/actions/Contract.action?insertTblOwnerContract";
	if ( isHasOwnerContract ) {
	  xurl="/actions/Contract.action?updateTblOwnerContract";
	  if ( contractOptType == 'end' ) {
	    xurl="/actions/Contract.action?endOwnerContract";
	  } else if ( contractOptType == 'del' ) {
	    xurl="/actions/Contract.action?delOwnerContract";
	  }
	}
    top.sendAjaxRequest(xurl,aoData,saveOwnerContractCallback);
}

function endContract(){
     top.showConfirm("您确定要执行合同终止操作吗？", doEndContract);
}
   
function doEndContract(){
    contractOptType='end';
    saveOwnerContract();
}
   
function delContract(){
    top.showConfirm("您确定要执行合同作废操作吗？", doDelContract);
}
  
function doDelContract(){
     contractOptType='del';
     saveOwnerContract();
}

function saveOwnerContractCallback(obj){
       try{
        if ( obj.status == true ){
            isSaveOK = true;
			top.showInfoWinOK("操作成功");
			isHasOwnerContract=true;
			if ( contractOptType == 'end' || contractOptType == 'del' ) {
			  $("#delContractBtn").hide();
			  $("#endContractBtn").hide();
			  $("#saveContractBtn").hide();
			}
			getHouseDetail();
        }else{
          isSaveOK = false;
          top.showInfoWinError("操作失败 "+obj.msg);
        }
		contractOptType="";
       }catch(e){
          top.showInfoWinError("处理异常:"+e.message);
       }
}

function getOwnerRentStr(){
     // id,date;id,date;   rentTime0 -- rentTime11
	 var str='';
	 for (var i=0;i<16;i++) {
	   str+=rentIds[i]+','+$("#rentTime"+i).val()+';';
	 }
	 return str;
}

function selectOwner(t){
    var xurl="pages/house/selectHouseOwner.html";
	if ( t == 'c' ) {
      top.openSelectDialog("选择业主信息",xurl,600,450,selectOwnerCallback);
	} else {
	  top.openSelectDialog("选择业主信息",xurl,600,450,selectOwnerCallbackHouse);
	}
}

function selectOwnerCallback(){
	 try{
       var obj = top.getTempValue();
       if ( !obj ) return ;
       $("#owner_id").val(obj.id);
	   $("#owner_name").val(obj.owner_name);
	   $("#owner_tel").val(obj.owner_tel);
	   $("#card_no").val(obj.card_no);
	   $("#owner_bank").val(obj.owner_bank);
	   $("#owner_bank_no").val(obj.owner_bank_no);
	   $("#owner_name").attr("disabled",true);
	   $("#owner_tel").attr("disabled",true);
	   $("#card_no").attr("disabled",true);
	   $("#owner_bank").attr("disabled",true);
	   $("#owner_bank_no").attr("disabled",true);
     }catch(e){
     }
}

function selectOwnerCallbackHouse(){
	 try{
       var obj = top.getTempValue();
       if ( !obj ) return ;
       $("#h_owner_id").val(obj.id);
	   $("#h_owner_name").val(obj.owner_name);
	   $("#h_owner_tel").val(obj.owner_tel);
	   $("#h_owner_name").attr("disabled",true);
	   $("#h_owner_tel").attr("disabled",true);
     }catch(e){
     }
}

function showOwnerInfo(){
	 if ( $("#showOwnerInfoBtnA").html() == '显示业主信息' ) {
       $("#tr_owner_1").show();
	   $("#tr_owner_2").show();
	   $("#showOwnerInfoBtnA").html("隐藏业主信息");
	 } else {
	   $("#tr_owner_1").hide();
	   $("#tr_owner_2").hide();
	   $("#showOwnerInfoBtnA").html("显示业主信息");
	 }
}
