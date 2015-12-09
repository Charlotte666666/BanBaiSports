 
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

   
   function getFollowList(){
     var iaoColumns= [
							  {"sTitle": "跟进时间", "mDataProp": "follow_time", "sWidth":"150px", "sClass": "center",
                                   "fnRender": function ( oObj ) {
                                        return top.getTimeStr( oObj.aData.follow_time, false );
                                   },
                                   "bUseRendered": false  
                               },
			                   { "sTitle": "根据人账号", "mDataProp": "user_code", "sWidth":"120px"},
							   { "sTitle": "根据内容", "mDataProp": "follow_desc", "sWidth":"330px"}
               ];
			   
			   var surl=top.getUrlBase()+"/actions/HouseMain.action?getTblHouseFollowList";
			   oTable = $('#dataTable').dataTable( {
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
								top.showInfoWin("操作异常:"+error);
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
 
	 var checkMsg = checkForm();
	 if ( checkMsg != '' ) {
	     top.showInfoWinWarn(checkMsg);
         return ;
	 }

aoData.push( { "name": "house.category", "value": 1 } );
aoData.push( { "name": "house.essence", "value": $("#essence").val() } );
aoData.push( { "name": "house.house_type", "value": $("#house_type").val() } );
aoData.push( { "name": "house.house_number", "value": $("#house_number").val() } );
aoData.push( { "name": "house.structure", "value": $("#structure").val() } );
aoData.push( { "name": "house.source_from", "value": $("#source_from").val() } );
aoData.push( { "name": "house.status", "value": $("#status").val() } );
aoData.push( { "name": "house.checking_way", "value": $("#checking_way").val() } );
aoData.push( { "name": "house.price_terms", "value": $("#price_terms").val() } );
aoData.push( { "name": "house.key_desc", "value": $("#key_desc").val() } );
aoData.push( { "name": "house.garage_desc", "value": $("#garage_desc").val() } );
aoData.push( { "name": "house.street", "value": $("#street").val() } );
aoData.push( { "name": "house.district", "value": $("#district").val() } );
aoData.push( { "name": "house.belong_area", "value": $("#belong_area").val() } );
aoData.push( { "name": "house.property_right", "value": $("#property_right").val() } );
aoData.push( { "name": "house.property_card", "value": $("#property_card").val() } );
aoData.push( { "name": "house.facility", "value": getFacility() } );
aoData.push( { "name": "house.orientation", "value": $("#orientation").val() } );
aoData.push( { "name": "house.fitment", "value": $("#fitment").val() } );
aoData.push( { "name": "house.public_memo", "value": $("#public_memo").val() } );
aoData.push( { "name": "house.private_memo", "value": $("#private_memo").val() } );
aoData.push( { "name": "house.traffic", "value": $("#traffic").val() } );
aoData.push( { "name": "house.build_year", "value": $("#build_year").val() } );
aoData.push( { "name": "house.pic_urls", "value": saveFileNames } );
aoData.push( { "name": "house.pay_type", "value": $("#pay_type").val() } );
aoData.push( { "name": "house.farea", "value": top.g_GetNumValue($("#farea").val()) } );
aoData.push( { "name": "house.struct_farea", "value": top.g_GetNumValue($("#struct_farea").val()) } );
aoData.push( { "name": "house.property_costs", "value": top.g_GetNumValue($("#property_costs").val()) } );
aoData.push( { "name": "house.price", "value": top.g_GetNumValue($("#price").val()) } );
aoData.push( { "name": "house.total_price", "value": top.g_GetNumValue($("#total_price").val()) } );
aoData.push( { "name": "house.has_key", "value": ($("#has_key").attr("checked")?1:0)  } );
aoData.push( { "name": "house.has_garage", "value": ($("#has_garage").attr("checked")?1:0) } );
aoData.push( { "name": "house.num_bedroom", "value": top.g_GetNumValue($("#num_bedroom").val()) } );
aoData.push( { "name": "house.num_livingroom", "value": top.g_GetNumValue($("#num_livingroom").val()) } );
aoData.push( { "name": "house.num_restroom", "value": top.g_GetNumValue($("#num_restroom").val()) } );
aoData.push( { "name": "house.balcony", "value": top.g_GetNumValue($("#balcony").val()) } );
aoData.push( { "name": "house.floor", "value": top.g_GetNumValue($("#floor").val()) } );
aoData.push( { "name": "house.floor_tatal", "value": top.g_GetNumValue($("#floor_tatal").val()) } );
aoData.push( { "name": "house.delivery_time", "value": top.toTimestamp( $("#delivery_time").val() ) } );

aoData.push( { "name": "owner.id", "value": top.g_GetNumValue($("#owner_id").val()) } );
aoData.push( { "name": "owner.owner_name", "value": $("#owner_name").val() } );
aoData.push( { "name": "owner.owner_tel", "value": $("#owner_tel").val() } );
aoData.push( { "name": "owner.card_no", "value": $("#card_no").val() } );
aoData.push( { "name": "owner.owner_bank", "value": $("#owner_bank").val() } );
aoData.push( { "name": "owner.owner_bank_no", "value": $("#owner_bank_no").val() } );
        
	top.sendAjaxRequest(url,aoData,optCallback);
   }
   
   function getFacility(){
      return top.getAllCheckedValue( document.getElementsByName('checkbox_facility') );
   }
 
   function checkForm(){
     var msg = "";
     var temp = "";
 
     return msg;
   }
 
   function optCallback(obj){
	   try{
	    if( obj.status == true ){
	     	 isSaveOK = true;
		  	 if( gInfoId == '' ) {  
		    	gInfoId = obj.msg;
				$("#followLi").show();
				$("#picLi").show();
				getFollowList();
				$("#house_id").val( gInfoId );
		 	 }
	      	top.showInfoWinOK("操作成功");
	    }else{
	      isSaveOK = false;
	      top.showInfoWinError("操作失败 "+obj.msg);
	    }
	   }catch(e){
		  top.showInfoWinError("操作异常:"+e.message);
	   }
   }


   function initData(){
	   try{
		   optType = top.getUrlParam(document.URL,"opt");
		   if ( optType != 'insert' ) {
		     gInfoId=top.getUrlParam(document.URL,"id");
			 $("#house_id").val( gInfoId );
			 var aoData=[];
		     aoData.push( { "name": "house.id", "value": gInfoId } );
		     top.sendAjaxRequest("/actions/HouseMain.action?getHouseDetailInfo",aoData,infoCallback);
		   }
		   
		   if ( optType == 'insert' || optType == 'update' ) {
		     $( "#code_district" ).html( top.getCodeSelectHtml("HOUSE_DISTRICT","district",false ) );
			 $( "#code_belong_area" ).html( top.getCodeSelectHtml("HOUSE_BELONG","belong_area",false ) );
		     $( "#code_orientation" ).html( top.getCodeSelectHtml("HOUSE_ORIENTATION", "orientation", true ) );
			 $( "#code_fitment" ).html( top.getCodeSelectHtml("HOUSE_FITMENT", "fitment", false ) );
			 $( "#code_status" ).html( top.getCodeSelectHtml("HOUSE_BUY_STATUS", "status", false ) );
			 $( "#code_essence" ).html( top.getCodeSelectHtml("HOUSE_ESSENCE", "essence", false ) );
			 $( "#code_house_type" ).html( top.getCodeSelectHtml("HOUSE_TYPE", "house_type", false ) );
			 $( "#code_structure" ).html( top.getCodeSelectHtml("HOUSE_STRUCTURE", "structure", false ) );
			 $( "#code_property_right" ).html( top.getCodeSelectHtml("PROPERTY_TYPE", "property_right", false ) );
			 $( "#code_source_from" ).html( top.getCodeSelectHtml("HOUSE_FROM", "source_from", false ) );
			 $( "#code_pay_type" ).html( top.getCodeSelectHtml("BUY_PAY_TYPE", "pay_type", false ) );
			 $( "#code_price_terms" ).html( top.getCodeSelectHtml("PRICE_TERMS", "price_terms", false ) );
			 $( "#code_checking_way" ).html( top.getCodeSelectHtml("CHECKING_WAY", "checking_way", false ) );
			 
			 if ( optType == 'insert' ) {
			   $("#td_facility").html( top.getHouseFacilityHtml( "", "checkbox_facility", 10) );
			   $("#house_id").val("系统自动生成");
			   $("#has_key").trigger("onchange");
               $("#has_garage").trigger("onchange");
			 }
		     $( "#submitBtn" ).show();
		   } else {
		     $( "#submitBtn" ).hide();
		   }
	   }catch(e){
		   top.showInfoWinError(e.message);
	   }
   }

   function infoCallback(obj){
       try{
        if ( obj.status == true ){
            var o=obj.body;

$("#category").val(o.category);
$("#essence").val(o.essence);
$("#house_type").val(o.house_type);
$("#structure").val(o.structure);
$("#source_from").val(o.source_from);
$("#status").val(o.status);
$("#checking_way").val(o.checking_way);
$("#price_terms").val(o.price_terms);
$("#key_desc").val(o.key_desc);
$("#garage_desc").val(o.garage_desc);
$("#street").val(o.street);
$("#district").val(o.district);
$("#house_number").val(o.house_number);
$("#property_right").val(o.property_right);
$("#property_card").val(o.property_card);
$("#td_facility").html( top.getHouseFacilityHtml( o.facility, "checkbox_facility", 10) );
$("#orientation").val(o.orientation);
$("#fitment").val(o.fitment);
$("#public_memo").val(o.public_memo);
$("#private_memo").val(o.private_memo);
$("#traffic").val(o.traffic);
$("#build_year").val(o.build_year);
$("#belong_area").val(o.belong_area);
$("#pic_urls").val(o.pic_urls);
$("#pay_type").val(o.pay_type);
$("#farea").val( o.farea);
$("#struct_farea").val( o.struct_farea);
$("#property_costs").val( o.property_costs);
$("#price").val( o.price);
$("#total_price").val( o.total_price);
$("#has_key").attr( "checked", (o.has_key=='1') );
$("#has_garage").attr( "checked", (o.has_garage=='1') );
$("#num_bedroom").val( o.num_bedroom);
$("#num_livingroom").val( o.num_livingroom);
$("#num_restroom").val( o.num_restroom);
$("#balcony").val( o.balcony);
$("#floor").val( o.floor);
$("#floor_tatal").val( o.floor_tatal);
$("#delivery_time").val( top.getTimeStr( o.delivery_time, true ) );

$("#has_key").trigger("onchange");
$("#has_garage").trigger("onchange");

  // 业主信息
  if ( o.ownerInfo ) {
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
		        $("#myCarousel").carousel("pause").removeData();
				$('#myCarousel').carousel(0);
        }else{
          top.showInfoWinError("操作失败");
        }
       }catch(e){
          top.showInfoWinError("操作失败:"+e.message);
       }
   }
   
  
   function addFollowInfo(){
		var xurl="followInfo.html?opt=insert&house_id="+gInfoId;
		openDialog("添加跟进信息",xurl,true,450,300,saveFollowCallBack);
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
	
	function checkEnable(cid,tid){
	  try{
	     $("#"+tid).attr("disabled", !($("#"+cid).attr("checked")) );
	  }catch(e){
	  }
	}
	
function selectOwner(){
    var xurl="pages/house/selectHouseOwner.html";
    top.openSelectDialog("选择业主信息",xurl,600,450,selectOwnerCallback);
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