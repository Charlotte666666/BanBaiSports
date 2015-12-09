	
	//-----------------------------工程报价单信息（baseId）---------------------------------------
    var isSaveOK=false;
    var baseId=0;
    var currentRoomNum=1;
	var tabId=1;
	var qProId="";
	var rowId=1;
	var selectedProMap=new SimpleMap();
	var remind_id="";

   function getOtherProjectDetailInfo(){
		//根据需求Id查询工程基本信息和、报价明细和合同信息
		if(require_id=='') return;
		var aoData=[];
		aoData.push( { "name": "proquoteInfo.require_id", "value":require_id } );
		aoData.push( { "name": "proquoteInfo.cust_code", "value":cust_code } );
        top.sendAjaxRequest("/actions/Projectquote.action?getProquoteByRequireId",aoData,getOtherProjectDetailInfoCallback);
   }
   
   //调用回调函数----查询工程报价详细信息
		function getOtherProjectDetailInfoCallback(obj){
		if(obj.status==true){
			var o=obj.body;
		
		try{
		 if( o ){
			baseId=o.base_id;
			remind_id=o.remind_id;
			if(baseId==0){
				if(top.g_isPermit("09_opt_project_quote")){
					$("#optProjectQuoteBtn a").text("创建");
				}else{
					$("#optProjectQuoteBtn").hide();
				}
			}else{
			    if(top.g_isPermit("09_opt_project_quote")){
					$("#optProjectQuoteBtn a").text("修改");
				}else{
					$("#optProjectQuoteBtn").hide();
				}
			    $("#proQuoteList tr:not(:first)").remove(); 
				var proQuoteList="<tr class='tr_data'><td>"+o.base_id+"</td><td id='total_price'></td><td>"+top.getTimeStr(o.create_date,true)+"</td><td>"+top.getUserNameByCode(o.user_code)+"</td><td>"+top.getUserNameByCode(o.examine_user)+"</td><td>"+top.getCodeName("PRODUCT_STATUS",o.examine_status)+"</td><td>"+top.getTimeStr(o.examine_time,true)+"</td><td></td></tr>";
				$("#proQuoteList").append(proQuoteList);
			}
			
			parent.checkInfoSave();
			//工程报价审核
			//审核赋值
			$("#other_project_examine_opinion").val(o.examine_opinion); 
			$("#lb_other_project_examine_opinion").html(o.examine_opinion);
			$("#td_other_project_examine_status").html(top.getCodeName('EXAMINE_STATUS',o.examine_status));
			$("#other_project_examine_user").html(top.getUserNameByCode(o.examine_user));
			$("#other_project_examine_time").html(top.getTimeStr(o.examine_time,true));
			//显示
			//1:新建状态
			if(o.examine_status=="3"||o.examine_status==""){
				$("#other_project_table_examine").hide();
			}else if(o.examine_status=="0"){//待审核
				//拥有审核权限
				if(top.g_isPermit('09_project_quote_examine')){
					$("#other_project_table_examine").show();
					$("#tr_other_project_submit").show();
					$("#lb_other_project_examine_opinion").hide();
					$("#other_project_examine_opinion").show();
					$("#td_other_project_examine_status").show();
					//隐藏审核人审核时间
					$("#tr_other_project_examine_user").hide();
					$("#tr_other_project_examine_time").hide();
				}else{//隐藏审核界面
					$("#other_project_table_examine").hide();
				}
			}else{//2：已审核
				if((!top.g_isPermit('09_project_quote_examine'))||o.examine_status=="1"||o.examine_status=="2"){//审核通过或无审核权限
					$("#other_project_table_examine").show();
					$("#tr_other_project_submit").hide();
					$("#other_project_examine_opinion").hide();
					$("#lb_other_project_examine_opinion").show();
					$("#tr_other_project_examine_user").show();
					$("#tr_other_project_examine_time").show();
					if(o.examine_status=="1"){
						$("#optProjectQuoteBtn a").text("查看");//修改工程报价按钮隐藏
						//$("#optProjectQuoteBtn a").click='';
						var message = baseId;
						$("#optProjectQuoteBtn a").bind("click", { id: message }, function(e) {
						    var xurl="pages/pro09/proquoteInfo.html?optType=query&fromSource=quoteManage&id="+e.data.id;
							top.openDialog("工程报价信息",xurl,true,600,500,null);
						});
					}
				}
			}
			
			var xuhao=1;
			
			var ht="";
			if(o.room!=0){
				for(var i=1;i<=o.room;i++ ){

					ht+='<div id="room'+xuhao+'" style="width:99%; background-color:#D8D8D8; margin: 2px;padding:3px" onclick="selectRoom(\''+xuhao+'\')">';
					ht+='<font color="blue" size="3">&nbsp;<b>卧室'+i+'</b></font><br/>';
					ht+='<center>';
					ht+='<table  border="1" cellpadding="3" cellspacing="1" width="100%" align="center" style="background-color: #b9d8f3;" id="table'+xuhao+'">';	
					ht+='</table>';
					ht+='</center>';
					ht+='<br/>';
					ht+='</div>';
					xuhao++;
				}
			}
			if(o.hall!=0){
			for(var i=1;i<=o.hall;i++ ){

				ht+='<div id="room'+xuhao+'" style="width:99%; background-color:#D8D8D8; margin: 2px;padding:3px" onclick="selectRoom(\''+xuhao+'\')">';
			    ht+='<font color="blue" size="3">&nbsp;<b>厅'+i+'</b></font><br/>';
				ht+='<center>';
				ht+='<table  border="1" cellpadding="3" cellspacing="1" width="100%" align="center" style="background-color: #b9d8f3;" id="table'+xuhao+'">';	
				ht+='</table>';
				ht+='</center>';
				ht+='<br/>';
				ht+='</div>';
				xuhao++;
			}}
			if(o.bath!=0){
			for(var i=1;i<=o.bath;i++ ){

				ht+='<div id="room'+xuhao+'" style="width:99%; background-color:#D8D8D8; margin: 2px;padding:3px" onclick="selectRoom(\''+xuhao+'\')">';
			    ht+='<font color="blue" size="3">&nbsp;<b>卫'+i+'</b></font><br/>';
				ht+='<center>';
				ht+='<table  border="1" cellpadding="3" cellspacing="1" width="100%" align="center" style="background-color: #b9d8f3;" id="table'+xuhao+'">';	
				ht+='</table>';
				ht+='</center>';
				ht+='<br/>';
				ht+='</div>';
				xuhao++;
			}}
			if(o.balcony!=0){
			for(var i=1;i<=o.balcony;i++ ){

				ht+='<div id="room'+xuhao+'" style="width:99%; background-color:#D8D8D8; margin: 2px;padding:3px" onclick="selectRoom(\''+xuhao+'\')">';
			    ht+='<font color="blue" size="3">&nbsp;<b>阳台'+i+'</b></font><br/>';
				ht+='<center>';
				ht+='<table  border="1" cellpadding="3" cellspacing="1" width="100%" align="center" style="background-color: #b9d8f3;" id="table'+xuhao+'">';	
				ht+='</table>';
				ht+='</center>';
				ht+='<br/>';
				ht+='</div>';
				
				xuhao++;
			}}
			if(o.kitchen!=0){
			
			for(var i=1;i<=o.kitchen;i++ ){

				ht+='<div id="room'+xuhao+'" style="width:99%; background-color:#D8D8D8; margin: 2px;padding:3px" onclick="selectRoom(\''+xuhao+'\')">';
			    ht+='<font color="blue" size="3">&nbsp;<b>厨房'+i+'</b></font><br/>';
				ht+='<center>';
				ht+='<table  border="1" cellpadding="3" cellspacing="1" width="100%" align="center" style="background-color: #b9d8f3;" id="table'+xuhao+'">';	
				ht+='</table>';
				ht+='</center>';
				ht+='<br/>';
				ht+='</div>';
				xuhao++;
			}}
			if(o.gangway!=0){
			for(var i=1;i<=o.gangway;i++ ){
	
				ht+='<div id="room'+xuhao+'" style="width:99%; background-color:#D8D8D8; margin: 2px;padding:3px" onclick="selectRoom(\''+xuhao+'\')">';
			    ht+='<font color="blue" size="3">&nbsp;<b>过道'+i+'</b></font><br/>';
				ht+='<center>';
				ht+='<table  border="1" cellpadding="3" cellspacing="1" width="100%" align="center" style="background-color: #b9d8f3;" id="table'+xuhao+'">';	
				ht+='</table>';
				ht+='</center>';
				ht+='<br/>';
				ht+='</div>';
				xuhao++;
			}}
			if(o.store_room!=0){
			for(var i=1;i<=o.store_room;i++ ){
	
				ht+='<div id="room'+xuhao+'" style="width:99%; background-color:#D8D8D8; margin: 2px;padding:3px" onclick="selectRoom(\''+xuhao+'\')">';
			    ht+='<font color="blue" size="3">&nbsp;<b>储物间'+i+'</b></font><br/>';
				ht+='<center>';
				ht+='<table  border="1" cellpadding="3" cellspacing="1" width="100%" align="center" style="background-color: #b9d8f3;" id="table'+xuhao+'">';	
				ht+='</table>';
				ht+='</center>';
				ht+='<br/>';
				ht+='</div>';
				xuhao++;
			}}
			if(o.entrance_door!=0){
			for(var i=1;i<=o.entrance_door;i++ ){

				ht+='<div id="room'+xuhao+'" style="width:99%; background-color:#D8D8D8; margin: 2px;padding:3px" onclick="selectRoom(\''+xuhao+'\')">';
			    ht+='<font color="blue" size="5">&nbsp;<b>玄关'+i+'</b></font><br/>';
				ht+='<center>';
				ht+='<table  border="1" cellpadding="3" cellspacing="1" width="100%" align="center" style="background-color: #b9d8f3;" id="table'+xuhao+'">';	
				ht+='</table>';
				ht+='</center>';
				ht+='<br/>';
				ht+='</div>';
				xuhao++;
			}}
			if(o.stairs!=0){
				for(var i=1;i<=o.stairs;i++ ){

				ht+='<div id="room'+xuhao+'" style="width:99%; background-color:#D8D8D8; margin: 2px;padding:3px" onclick="selectRoom(\''+xuhao+'\')">';
			    ht+='<font color="blue" size="5">&nbsp;<b>楼梯'+i+'</b></font><br/>';
				ht+='<center>';
				ht+='<table  border="1" cellpadding="3" cellspacing="1" width="100%" align="center" style="background-color: #b9d8f3;" id="table'+xuhao+'">';	
				ht+='</table>';
				ht+='</center>';
				ht+='<br/>';
				ht+='</div>';
				xuhao++;
			}}
			if(o.hydroelectricity!=0){
			for(var i=1;i<= o.hydroelectricity;i++ ){

				ht+='<div id="room'+xuhao+'" style="width:99%; background-color:#D8D8D8; margin: 2px;padding:3px" onclick="selectRoom(\''+xuhao+'\')">';
			    ht+='<font color="blue" size="5">&nbsp;<b>水电'+i+'</b></font><br/>';
				ht+='<center>';
				ht+='<table  border="1" cellpadding="3" cellspacing="1" width="100%" align="center" style="background-color: #b9d8f3;" id="table'+xuhao+'">';	
				ht+='</table>';
				ht+='</center>';
				ht+='<br/>';
				ht+='</div>';
				xuhao++;
			}}
			if(o.other!=0){
			for(var i=1;i<=o.other;i++ ){

				ht+='<div id="room'+xuhao+'" style="width:99%; background-color:#D8D8D8; margin: 2px;padding:3px" onclick="selectRoom(\''+xuhao+'\')">';
			    ht+='<font color="blue" size="5">&nbsp;<b>其它'+i+'</b></font><br/>';
				ht+='<center>';
				ht+='<table  border="1" cellpadding="3" cellspacing="1" width="100%" align="center" style="background-color: #b9d8f3;" id="table'+xuhao+'">';	
				ht+='</table>';
				ht+='</center>';
				ht+='<br/>';
				ht+='</div>';
				xuhao++;
			}}
			$("#ListPro").html( ht );
			$("#room1").css("background","yellow");	
		    if( o.contract ) {
				contractId=o.contract.contract_id;
				$("#other_cust_code").html(o.contract.cust_code);
				$("#foreman").html(o.contract.foreman);
				$("#foreman_tel").html(o.contract.foreman_tel);
				$("#supervision").html(o.contract.supervision);
				$("#supervision_tel").html(o.contract.supervision_tel);
				$("#memo").html(o.contract.memo);
				$("#contract_sum").html( o.contract.contract_sum);
				$("#firstterm_pay").html( o.contract.firstterm_pay);
				$("#midterm_pay").html( o.contract.midterm_pay);
				$("#lastterm_pay").html( o.contract.lastterm_pay);
				$("#contract_id").html( top.getTimeStr( o.contract.contract_id, true ) );
				$("#base_id").html( top.getTimeStr( o.contract.base_id, true ) );
				$("#sign_bill_date").html( top.getTimeStr( o.contract.sign_bill_date, true ) );
				$("#start_date").html( top.getTimeStr( o.contract.start_date, true ) );
				$("#complete_date").html( top.getTimeStr( o.contract.complete_date, true ) );
				$("#acceptance_date").html( top.getTimeStr( o.contract.acceptance_date, true ) );
				$("#firstterm").html( top.getTimeStr( o.contract.firstterm, true ) );
				$("#midterm").html( top.getTimeStr( o.contract.midterm, true ) );
				$("#lastterm").html( top.getTimeStr( o.contract.lastterm, true ) );
		    }
			if( o.detailList ) {
			  initDetail( o.detailList );
			}else{
			  $("#total_price").html("0");
			}
		 }else{
			if(top.g_isPermit("09_opt_project_quote")){
				$("#optProjectQuoteBtn a").html("创建");
			}else{
				$("#optProjectQuoteBtn").hide();
			}
		}
			//$("#contract_id").attr("disabled",true);
			//$("#cust_code").attr("disabled",true);
		}catch(e){
			alert(e.message);
		}
		}
	}
	function selectRoom(n){
	   $("#room"+currentRoomNum).css("background","#D8D8D8");	
	   currentRoomNum=n;
	   $("#room"+n).css("background","yellow");	
	}
		function queryBySelectedPro(pid){
				 qProId = pid;
				if(qProId==''){
					return;
				}
				getquoteProductById(pid);
			}
			
		function getquoteProductById(pid){
			var aoData=[];
			aoData.push( { "name": "proquoteProduct.product_id", "value":pid } );
			top.sendAjaxRequest("/actions/Projectquote.action?getProquoteProductById",aoData,QProductinfoCallback);
		}
		
		function QProductinfoCallback(obj){
			var ht="";
			try{
				if(obj.status==true){
					var o=obj.body;
				}
				if( o ){
					selectedProMap.put(rowId, o);
					room_num=currentRoomNum;
					
					ht+='<tr class="tr_data" height="25px" id="tr_'+rowId+'">';
					ht+='<td align="center" width="20%"><input type="hidden" id="roomNum_'+rowId+'" value="'+currentRoomNum+'"/><label id="product_name_'+rowId+'">'+o.product_name+'</label></td>';
					ht+='<td align="center" width="10%" id="unit_price_'+rowId+'" value="'+o.unit_price+'" size="5" disabled /></td>';
					ht+='<td align="center" width="10%"  id="quantity_'+rowId+'" size="5" value="1" onChange="changeTotalPrice(\''+rowId+'\')"/></td>';
					ht+='<td align="center" width="10%"><label id="product_unit_'+rowId+'" >'+top.getCodeName("UNIT",o.product_unit)+'</label></td>';
					ht+='<td align="center" width="10%" id="total_price_'+rowId+'" size="5" value="'+o.unit_price+'" disabled/></td>';
					ht+='<td align="center" width="30%"><label id="memo_'+rowId+'">'+o.memo+'</label></td>';
					ht+='<td align="center" width="10%"><a href="javaScript:void(0)" onclick="deleteRow(\''+rowId+'\')">删除</a></td>';
					ht+='</tr>';
				}
				
				rowId++;
				$("#room"+currentRoomNum).append( ht );

			}catch(e){
				alert(e.message);
			}
		}
		function openProjectEditPage(pageName){ 
			if(baseId!=0){
				var xurl="/pages/pro09/quotedprice.html?optType=update&pageName="+pageName+"&base_id="+baseId;
				top.openDialog("修改工程订单信息",xurl,true,980,580,getOtherProjectDetailInfo);
			}else if(require_id!=''&&require_id!=null){
				var xurl="/pages/pro09/quotedprice.html?optType=create&require_id="+require_id+"&cust_code="+cust_code;
				top.openDialog("新增工程订单信息",xurl,true,980,580,getOtherProjectDetailInfo);
			}
		}
		
		function openProductQuoteEditPage(){
			if(baseId!=0){
				var xurl="/pages/pro09/productQuoteInfo.html?optType=update&id="+productQuoteId;
				openDialog("产品报价信息",xurl,true,950,500,null);
			}else if(require_id!=''&&require_id!=null){
				var xurl="/pages/pro09/productQuoteInfo.html?optType=insert&require_id="+require_id;
				openDialog("产品报价信息",xurl,true,950,500,null);
			}
		}
		function initDetail(rs){
		  if( !rs ) return ;
		  for (var n=0;n<100;n++) {
		    try{
		      $("#table"+n).html( "" );
			}catch(e){
			}
		  }
		  rowId=0;
		  var totalPrice=0;
		  selectedProMap.clear();
		  var ht="";
		  for ( var i=0;i<rs.length;i++ ) { 
		        selectedProMap.put(rowId, rs[i]);
				ht='<tr class="tr_data" height="25px" id="tr_'+rowId+'">';
				totalPrice+=rs[i].total_price;
				ht+='<td align="center" width="20%"><input type="hidden" id="roomNum_'+rowId+'" value="'+rs[i].room_num+'"/><label id="product_name_'+rowId+'">'+rs[i].construction_pro+'</label></td>';
				ht+='<td align="center" width="15%"><label id="lab_unit_price_'+rowId+'">'+rs[i].unit_price+'</label><input type="hidden" id="unit_price_'+rowId+'" value="'+rs[i].unit_price+'" size="5" disabled /></td>';
				ht+='<td align="center" width="15%" ><label id="lab_quantity_'+rowId+'">'+rs[i].quantity+'</label><input type="hidden" id="quantity_'+rowId+'" size="5" value="'+rs[i].quantity+'"/></td>';
				ht+='<td align="center" width="10%"><label id="product_unit_'+rowId+'" >'+top.getCodeName("UNIT",rs[i].unit)+'</label></td>';
				ht+='<td align="center" width="10%"><label id="lab_total_price_'+rowId+'">'+rs[i].total_price+'</label><input type="hidden" id="total_price_'+rowId+'" size="5" value="'+rs[i].total_price+'" disabled/></td>';
				ht+='<td align="center" width="30%"><label id="memo_'+rowId+'">'+rs[i].memo+'</label></td>';
				ht+='</tr>';
				rowId++;
				$("#room"+rs[i].room_num).append( ht );
		  }
		  all_total=totalPrice;
		  $("#All_total_price").html(totalPrice);
		  $("#total_price").html(totalPrice);
		}
		
		function allTotalPrice(){
			try{
			  var t=null;
			  var total=0;
			  for( var i=0;i<rowId;i++ ) {
			    t=$("#total_price_"+i).html();
				if ( t ) {
				  total+=Number(t);
				}
			  }
			 $("#All_total_price").html(total);
			}catch(e){
			}
		}
		
	function changeTotalPrice(pid){
		var sPrice=0;
		var unitPrice=$("#unit_price_"+pid).html();
		var quantity=$("#quantity_"+pid).html();
		sPrice=Number(unitPrice)*Number(quantity);
		$("#total_price_"+pid).html(sPrice);
		allTotalPrice();
	}
	function printOtherProductOrder(){
		var xurl="proquoteInfoPrintPage.html?id="+info_id;
		window.open(xurl,"_blank","width=900,height=800");
	}
	//打印信息
	function printingQuoteProInfo(){
		if(baseId==0){
			top.showInfoWinWarn("请先选择打印的信息!");
			return;
		}
		var xurl="pages/pro09/printQuoteProInfo.html?baseId="+baseId;
		top.openDialog("打印",xurl,true,700,600,null);
	}//工程报价审核
	function otherProjectSaveExamineInfo(examine_status_result){
		if(baseId==0){
			top.showInfoWinWarn("请首先保存工程基本信息！");
			return;
		}
		if(all_total=='' || all_total==0){
			top.showInfoWinWarn("工程报价总额不能0，否则无法审核！");
			return;
		}
		var aoData=[];
		aoData.push( { "name": "proquoteInfo.base_id", "value": baseId } );
		aoData.push( { "name": "remind_id","value":remind_id} );
		aoData.push( { "name": "proquoteInfo.examine_status", "value": examine_status_result} );
		aoData.push( { "name": "proquoteInfo.examine_opinion", "value": $("#other_project_examine_opinion").val() } );
		aoData.push( { "name": "proquoteInfo.designer", "value": designer_code } );
		top.sendAjaxRequest("/actions/Projectquote.action?saveExamineInfo",aoData,saveCallback);
	}
	function saveCallback(obj){
       try{
        if ( obj.status == true ){
            isSaveOK = true;
            top.showInfoWinOK("操作成功");
			//更新列表信息
			getOtherProjectDetailInfo();
        }else{
            isSaveOK = false;
            top.showInfoWinError("操作失败 "+obj.msg);
        }
       }catch(e){
          top.showInfoWinError("处理异常:"+e.message);
       }
   }
	function doPrint(){
		$("#printBtn").hide();
		window.print();
	}
	
	//申请工程报价
	function applyProjectQuote(){
		var aoData=[];
			//top.getUserSelectByRole("");
		//aoData.push( { "name": "quote_info.require_id", "value": require_id } );//工程经理
		aoData.push( { "name": "projectOrder.require_id", "value": require_id } );
		aoData.push( { "name": "projectOrder.cust_manager", "value":$("#cust_manager").val() } );
		aoData.push( { "name": "projectOrder.designer", "value": $("#designer_code").val() } );
		aoData.push( { "name": "projectOrder.cust_code", "value": $("#cust_code").val() } );
		//生成产品订单
		aoData.push( { "name": "productQuoteInfo.cust_name", "value": $("#cust_name").val() } );
		
		top.sendAjaxRequest("/actions/CustInfo.action?applyProjectOrder",aoData,applyProjectQuoteCallback);
	}
	function applyProjectQuoteCallback(obj){
		
	}