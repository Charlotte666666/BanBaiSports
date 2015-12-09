function productInitData(){
		
		/*$("#productDiv select").hide();
		$("#productDiv input").hide();
		$("#productDiv textarea").hide();*/
		/*$("#tdpro_designer").html(top.getUserListByRole('product_designer','pro_designer',true));
		$("#tdbox_designer").html(top.getUserListByRole('box_designer','box_designer',true));
		$("#tdproject_manager").html(top.getUserListByRole('project_manager','project_manager',true));
		$("#tdproduct_designer").html(top.getUserListByRole('product_designer','product_designer',true));
		$("#tdmodelhouse_project_manager").html(top.getUserListByRole('project_manager','modelhouse_project_manager',true));
		$("#tdsupervision").html(top.getUserListByRole('engineer_manager','supervision',true));
		$("#tdengineer_manager").html(top.getUserListByRole('engineer_manager','engineer_manager',true));
		$("#tddesigner").html( top.getAllDesignerSelect("designer") );*/
	   // if ( optType=='update'){
			//$("#chooseProject").hide();
		//	product_info_id=top.getUrlParam(document.URL,"id");
			//$("#id").html(product_info_id);
			/*var aoData=[];
			if(product_info_id==''){//判断页面入口 若product_info_id为空则根据require_id查询
				if(require_id!=''){
					aoData.push( { "name": "orderInfo.require_id", "value": require_id } );
					top.sendAjaxRequest("/actions/ProductOrder.action?GetProductOrderInfoByRequireId",aoData,productInfoCallback);
				}
			}else{
				aoData.push( { "name": "orderInfo.id", "value": product_info_id } );
				top.sendAjaxRequest("/actions/ProductOrder.action?GetProductOrderInfoById",aoData,productInfoCallback);
			}*/
		//查询产品订单信息
		queryProductOrderInfo();
					
		//查询产品报价历史记录
		queryProductQuoteOrder();
		
    }
	function queryProductOrderInfo(){
		var aoData=[];
		aoData.push( { "name": "orderInfo.require_id", "value": require_id } );
		top.sendAjaxRequest("/actions/ProductOrder.action?GetProductOrderInfoByRequireId",aoData,productInfoCallback);
		
	}
	
	function productInfoCallback(obj){
	   try{
        if ( obj.status == true ){
		  var o=obj.body;
		  orderInfo=o;
			//订单信息
			if(o){	
				product_info_id=o.id;
				require_id=o.require_id;
			    //cust_code=o.cust_code;
				/*$("#order_date").val(top.getTimeStr(o.order_date,true));
				if($("#order_date").val()!=""){
					$("#order_date").attr("disabled",true);
				}
				$("#require_id").val(o.require_id);
				$("#product_cust_name").html(o.cust_name);
				$("#productChooseCust").hide();
				$("#product_designerCode").html(top.getUserNameByCode(o.designerCode));
				$("#pro_designer").val(o.pro_designer);
				$("#box_designer").val(o.box_designer);
				$("#cust_tel").html(o.cust_tel);
				$("#pro_add").html( o.pro_add);
				$("#product_info_id").html(o.id);
				$("#project_order_id").html(o.project_order_id);
				if($("#product_info_id").html()!=""){
					$("#chooseProject").hide();
				}*/
				queryAllProductCustomize();
				queryCycleControl();
				queryChangeInfo();
				 //queryConstructionStatus();
				queryAllsettleDetail();
				// getPurchaseList();
				var table = $('#purchaseList').DataTable();
			}else{//后台没有查询到订单信息，按钮显示创建
				$("#productOrderEditBut").html("创建");
			    queryAllProductCustomize();
				queryCycleControl();
				queryChangeInfo();
				queryAllsettleDetail();
				var table = $('#purchaseList').DataTable();
			}
			//初始化产品订单信息
				getProductList();
			}else{
          top.showInfoWinError("操作失败");
		  $("#productOrderEditBut").html("创建");
        }
       }catch(e){
          top.showInfoWinError("处理异常:"+e.message);
       }
	}
	
	//添加产品定制行
	function addProductCustomize(){ 
		$("#tr_add_product_title").show();
		$("#productcustomize tr:eq("+Customizetrnum+")").after("<tr class='tr_data' height='35px' id='customize"+Customizetrid+"'><td><input type='text' size='15' id='product_name"+Customizetrid+"'/></td><td><input type='text' size='15' id='money"+Customizetrid+"'/></td><td><input type='text' size='15' id='customize_date"+Customizetrid+"' onclick='new Calendar().show(this);' readonly='true'/></td><td><input type='text' size='15' id='receive_date"+Customizetrid+"' onclick='new Calendar().show(this);' readonly='true'/></td><td><input type='text' size='15' id='install_date"+Customizetrid+"' onclick='new Calendar().show(this);' readonly='true'/></td><td><input type='text' size='15' id='customize_memo"+Customizetrid+"'/></td><td><a href=\"javascript:void(0)\" onclick='saveProductCustomize("+Customizetrid+")'>保存</a>||<a href=\"javascript:void(0)\" onclick='deleteProductCustomize("+Customizetrid+")'>删除</a></td></tr>");
		Customizetrnum++;
		Customizetrid++;
	}
	//删除产品定制行
	function deleteProductCustomize(tid){
		 $("#customize"+tid).remove(); 
		 Customizetrnum--;
		 if(Customizetrnum==0){
			$("#tr_product_change_title").hide();
		 }
	}
	//添加周期控制行
	function addCycleControl(customize_id){   
		$("#tr_product_change_title").show();
		var aoData=[];
		aoData.push( { "name": "customize.customize_id", "value": customize_id } );
		xurl="/actions/ProjectOrder.action?getProductCustomize";
		top.sendAjaxRequest(xurl,aoData,queryCycleControlById);
	}
	
	//添加反补情况信息行
	function addChangeInfo(control_id){
		$("#tr_money_add_title").show();
		controlid=control_id;
		$("#changeInfotable tr:eq("+changetrnum+")").after("<tr class='tr_data' height='35px' id='change"+changetrid+"'><td><label>"+changetrid+"</label></td><td><textarea id='change_memo"+changetrid+"' rows='2' cols='80'></textarea></td><td><a href=\"javascript:void(0)\" onclick='saveChangeInfo("+changetrid+")'>保存</a>||<a href=\"javascript:void(0)\" onclick='deleteChange("+changetrid+")'>删除</a></td></tr>");
		changetrnum++;
		changetrid++;
	}
	//删除反补情况行
	function deleteChange(tid){
		 $("#change"+tid).remove(); 
		 changetrnum--;
		 if(changetrnum==0)
		 $("#tr_money_add_title").show();
	}
	//添加补款信息
	function saveChangeInfo(tid){
		var aoData=[];
		aoData.push( { "name": "changeinfo.order_id", "value": product_info_id } );
		aoData.push( { "name": "changeinfo.control_id", "value": controlid } );
		aoData.push( { "name": "changeinfo.change_memo", "value": $("#change_memo"+tid+"").val() } );
		
		xurl="/actions/ProjectOrder.action?saveChangeInfo";
		top.sendAjaxRequest(xurl,aoData,saveChangeInfooptCallback);
	}
	//调用回调函数---添加补款信息
	function saveChangeInfooptCallback(obj){
		try{
        if ( obj.status == true ){
            isSaveOK = true;
            top.showInfoWinOK("操作成功");
			queryChangeInfo();
        }else{
            isSaveOK = false;
            top.showInfoWinError("操作失败 "+obj.msg);
        }
       }catch(e){
          top.showInfoWinError("处理异常:"+e.message);
       }
	}
	//查询补款情况
	function queryChangeInfo(){
		var aoData=[];
		if(product_info_id!=''){
		aoData.push( { "name": "changeinfo.order_id", "value": product_info_id } );
		 xurl="/actions/ProjectOrder.action?getChangeInfoList";
		top.sendAjaxRequest(xurl,aoData,createChangeInfotable);
		}
		else{
					var ht="<tr class='tr_data' height='35px' style='background-color: #b9d8f3;'><td width='10%'>序号</td><td align='center' width='70%'>补款详情</td></tr>";
                     $("#ChangeInfotable").html(ht);
		}
	}
	//生成补款信息的列表
	function createChangeInfotable(obj){
		try{
			changeinfo=obj.aaData;
			var ht="<tr class='tr_data' height='35px' style='background-color: #b9d8f3;'><td width='10%'>序号</td><td align='center' width='70%'>补款详情</td></tr>";
			for(var i=0;i<changeinfo.length;i++ )
			{
				ht+='<tr class="tr_data" height="35px">';
				ht+='<td align="center">';
				ht+=''+(i+1)+'';
				ht+='</td>';
				ht+='<td>';
				ht+=''+changeinfo[i].change_memo+'';
				ht+='</td>';
				/*ht+='<td>';
				ht+='<a href=\'javascript:void(0)\' onclick="deleteChangeInfo(\''+changeinfo[i].change_id+'\')">删除</a>'
				ht+='</td>';*/
				ht+='</tr>';
			}
			
			$("#ChangeInfotable").html(ht);
		}catch(e)
		{
			alert(e.message);
		}
	}
	//得到原产品
	function queryCycleControlById(obj){
		try{
			var o=obj.body;
			if(o)
			{
				old_product=o.product_name;
				customizeid=o.customize_id;
			}
		}catch(e)
		{
			alert(e.message);
		}
		$("#cycleControl tr:eq("+controltrnum+")").after("<tr class='tr_data' height='35px' id='control"+controltrid+"'><td><label>"+controltrid+"</label></td><td><input type='text' size='15' id='old_product"+controltrid+"' disabled value='"+old_product+"'/></td><td><input type='text' size='15' id='new_product"+controltrid+"'/></td><td><input type='text' size='15' id='money_change"+controltrid+"'></td><td><input type='text' size='15' id='control_memo"+controltrid+"'/></td><td><a href=\"javascript:void(0)\" onclick='saveCycleControl("+controltrid+")'>保存</a>||<a href=\"javascript:void(0)\" onclick='deleteCycleControl("+controltrid+")'>删除</a></td></tr>");
		controltrnum++;
		controltrid++;
	}
	
	//保存周期控制信息
	function saveCycleControl(tid){
		var aoData=[];
		
		aoData.push( { "name": "cyclecontrol.order_id", "value": product_info_id } );
		aoData.push( { "name": "cyclecontrol.customize_id", "value": customizeid } );
		aoData.push( { "name": "cyclecontrol.old_product", "value": $("#old_product"+tid+"").val() } );
		aoData.push( { "name": "cyclecontrol.new_product", "value": $("#new_product"+tid+"").val() } );
		aoData.push( { "name": "cyclecontrol.money_change", "value": $("#money_change"+tid+"").val() } );
		aoData.push( { "name": "cyclecontrol.control_memo", "value": $("#control_memo"+tid+"").val() } );
		
		xurl="/actions/ProjectOrder.action?saveCycleControl";
		top.sendAjaxRequest(xurl,aoData,saveCycleControloptCallback);
	}
	//调用回调函数---添加周期控制信息
	function saveCycleControloptCallback(obj){
		try{
        if ( obj.status == true ){
            isSaveOK = true;
            top.showInfoWinOK("操作成功");
			queryCycleControl();
        }else{
            isSaveOK = false;
            top.showInfoWinError("操作失败 "+obj.msg);
        }
       }catch(e){
          top.showInfoWinError("处理异常:"+e.message);
       }
	}
	//查询周期控制信息
	function queryCycleControl(){
		var aoData=[];
		if(product_info_id!=''){
		aoData.push( { "name": "cyclecontrol.order_id", "value": product_info_id } );
		 xurl="/actions/ProjectOrder.action?getCycleControlList";
		top.sendAjaxRequest(xurl,aoData,createCycleControltable);
		}
		else{
					var ht="<tr class='tr_data' height='35px' style='background-color: #b9d8f3;'><td>原定产品</td><td>变更产品</td><td>变更时间</td><td width='20%'>款项变化</td><td width='20%'>备注</td></tr>";
		        $("#CycleControltable").html(ht);
		}
	}
	//生成周期控制信息列表
	function createCycleControltable(obj){
		try{
			cyclecontrol=obj.aaData;
			var ht="<tr class='tr_data' height='35px' style='background-color: #b9d8f3;'><td>原定产品</td><td>变更产品</td><td>变更时间</td><td width='20%'>款项变化</td><td width='20%'>备注</td></tr>";
			for(var i=0;i<cyclecontrol.length;i++ )
			{
				ht+='<tr class="tr_data" height="35px">';
				ht+='<td>';
				ht+=''+cyclecontrol[i].old_product+'';
				ht+='</td>';
				ht+='<td>';
				ht+=''+cyclecontrol[i].new_product+'';
				ht+='</td>';
				ht+='<td>';
				ht+=''+top.getTimeStr(cyclecontrol[i].change_date,true)+'';
				ht+='</td>';
				ht+='<td>';
				ht+=''+cyclecontrol[i].money_change+'';
				ht+='</td>';
				ht+='<td>';
				ht+=''+cyclecontrol[i].control_memo+'';
				ht+='</td>';
				/*ht+='<td>';
				ht+='<a href=\'javascript:void(0)\' onclick="addChangeInfo('+cyclecontrol[i].control_id+')">'+'添加补款情况'+'</a>';
				ht+='||';
				ht+='<a href=\'javascript:void(0)\' onclick="deleteControl('+cyclecontrol[i].control_id+')">'+'删除'+'</a>';
				ht+='</td>';*/
				ht+='</tr>';
			}
			
			$("#CycleControltable").html(ht);
		}catch(e)
		{
			alert(e.message);
		}
	}
	//删除周期控制行
	function deleteCycleControl(tid){
		 $("#control"+tid).remove(); 
		 controltrnum--;
	}
	//添加产品定制信息
	function saveProductCustomize(tid){
		var aoData=[];
		aoData.push( { "name": "customize.order_id", "value": product_info_id } );
		aoData.push( { "name": "customize.product_name", "value": $("#product_name"+tid+"").val()} );
		aoData.push( { "name": "customize.customize_memo", "value": $("#customize_memo"+tid+"").val()} );
		aoData.push( { "name": "customize.money", "value": top.g_GetNumValue($("#money"+tid+"").val()) } );
		
		aoData.push( { "name": "customize.customize_date", "value": top.toTimestamp($("#customize_date"+tid+"").val())} );
		aoData.push( { "name": "customize.receive_date", "value": top.toTimestamp($("#receive_date"+tid+"").val())} );
		aoData.push( { "name": "customize.install_date", "value": top.toTimestamp($("#install_date"+tid+"").val())} );
		
	    xurl="/actions/ProjectOrder.action?saveProductCustomize";
		top.sendAjaxRequest(xurl,aoData,saveProductCustomizeoptCallback);
	}
	//查询产品定制信息
	function queryAllProductCustomize(){
		var aoData=[];
		if(product_info_id!=''){
		aoData.push( { "name": "customize.order_id", "value": product_info_id } );
		 xurl="/actions/ProjectOrder.action?getProductCustomizeList";
		top.sendAjaxRequest(xurl,aoData,createProductCustomizetable);
		}
		else{
		var ht="<tr class='tr_data' height='35px' style='background-color: #b9d8f3;'><td>产品名称</td><td>款项</td><td>订货时间</td><td>到货时间</td><td>安装时间</td><td>备注</td></tr>";
		$("#ProductCustomizetable").html(ht);
		}
	}
	//生成查询产品定制信息列表
	function createProductCustomizetable(obj){
		try{
			customize=obj.aaData;
			var ht="<tr class='tr_data' height='35px' style='background-color: #b9d8f3;'><td>产品名称</td><td>款项</td><td>订货时间</td><td>到货时间</td><td>安装时间</td><td>备注</td></tr>";
			for(var i=0;i<customize.length;i++ )
			{
				ht+='<tr class="tr_data" height="35px">';
				ht+='<td>';
				ht+=''+customize[i].product_name+'';
				ht+='</td>';
				ht+='<td>';
				ht+=''+customize[i].money+'';
				ht+='</td>';
				ht+='<td>';
				ht+=''+top.getTimeStr(customize[i].customize_date,true)+'';
				ht+='</td>';
				ht+='<td>';
				ht+=''+top.getTimeStr(customize[i].receive_date,true)+'';
				ht+='</td>';
				ht+='<td>';
				ht+=''+top.getTimeStr(customize[i].install_date,true)+'';
				ht+='</td>';
				ht+='<td>';
				ht+=''+customize[i].customize_memo+'';
				ht+='</td>';
				/*ht+='<td>';
				ht+='<a href=\'javascript:void(0)\' onclick="addCycleControl('+customize[i].customize_id+')">'+'变更'+'</a>';
				ht+='||';
				ht+='<a href=\'javascript:void(0)\' onclick="deleteCustomize('+customize[i].customize_id+')">'+'删除'+'</a>';
				ht+='</td>';
*/
				ht+='</tr>';
			}
			$("#ProductCustomizetable").html(ht);
		}catch(e)
		{
			alert(e.message);
		}
	}
	//删除产品定制信息
	function deleteCustomize(customize_id){
		var aoData=[];
		aoData.push( { "name": "customize.customize_id", "value": customize_id } );
		xurl="/actions/ProjectOrder.action?deleteCustomize";
		top.sendAjaxRequest(xurl,aoData,saveProductCustomizeoptCallback);
		
	}
	//删除周期控制信息
	function deleteControl(control_id){
		var aoData=[];
		aoData.push( { "name": "cyclecontrol.control_id", "value": control_id } );
		xurl="/actions/ProjectOrder.action?deleteControl";
		top.sendAjaxRequest(xurl,aoData,saveCycleControloptCallback);
	}
	//删除补款信息
	function deleteChangeInfo(change_id ){
		var aoData=[];
		aoData.push( { "name": "changeinfo.change_id ", "value": change_id } );
		xurl="/actions/ProjectOrder.action?deleteChangeInfo";
		top.sendAjaxRequest(xurl,aoData,saveChangeInfooptCallback);
	}
	//调用回调函数---添加产品定制信息
	function saveProductCustomizeoptCallback(obj){
		try{
        if ( obj.status == true ){
            isSaveOK = true;
            top.showInfoWinOK("操作成功");
			queryAllProductCustomize();
        }else{
            isSaveOK = false;
            top.showInfoWinError("操作失败 "+obj.msg);
        }
       }catch(e){
          top.showInfoWinError("处理异常:"+e.message);
       }
	}
	//选择产品
	function chooseProduct(){
		var xurl="/pages/pro09/chooseProduct.html";
		openDialog("选择产品",xurl,true,800,500,chooseProductCallBack);
	}
	//调用回调函数---调用查询产品信息
   //调用回调函数---调用查询产品信息
   	function chooseProductCallBack(){
		try{
			objs = top.getTempValue();
			//var aoData=[];
			var isEmpty=false;
			var ht='';
			if ( selectedProduct.length == 0 ) {
			  isEmpty=true;
			  ht+='<tr class="tr_data" height="25px"><td width="15%" align="center">名称</td><td width="10%" align="center">品牌</td><td width="10%" align="center">型号</td><td width="10%" align="center">规格</td><td width="5%" align="center">数量</td><td width="10%" align="center">单位</td><td width="10%" align="center">单价</td><td width="10%" align="center">折扣</td><td width="20%" align="center">使用位置</td><td width="10%" align="center">操作</td></tr>';
			}
			for ( var i=0;i<objs.length;i++ ) {
			    ch_product=objs[i];
				// 判断是否在 selectedProduct 里已经存在，如果存在则自动加1
				if ( isExistProduct(ch_product) ) {
				   // TODO
				   // orderdetailList[orderdetailList.length]=;
				} else {
					ht+='<tr id="add_product_'+ch_product.product_id+'"';
					ht+='class="tr_data"';
					ht+='height="35px"';
					ht+='>';
					ht+='<td>';
					ht+='<input type="text" size="5" id="product_name_'+ch_product.product_id+'" value="'+ch_product.product_name+'" disabled />';
					ht+='</td>';
					ht+='<td>';
					ht+='<input type="text" size="5" id="product_brand_'+ch_product.product_id+'" value="'+top.getSupplierNameById(ch_product.product_brand)+'" disabled />';
					ht+='</td>';				 
					ht+='<td>';
					ht+='<input type="text" size="5" id="product_model_'+ch_product.product_id+'" value="'+ch_product.product_model+'" disabled />';
					ht+='</td>';
					ht+='<td>';
					ht+='<input type="text" size="5" id="product_standard_'+ch_product.product_id+'" value="'+ch_product.product_standard+'" disabled />';
					ht+='</td>';
					ht+='<td>';
					ht+='<input type="text" size="5" id="amount_'+ch_product.product_id+'" value="1"/>';
					ht+='</td>';
					ht+='<td>';
					ht+='<input type="text" size="5" id="unit_'+ch_product.product_id+'" value="'+top.getCodeName("UNIT",ch_product.unit)+'" disabled />';
					ht+='</td>';
					ht+='<td>';
					ht+='<input type="text" size="5" id="sale_price_'+ch_product.product_id+'" value="'+ch_product.price+'" disabled />';
					ht+='</td>';
					ht+='<td>';
					ht+='<input type="text" size="5" id="discount_'+ch_product.product_id+'" value="'+ch_product.discount+'" disabled />';
					ht+='</td>';
					ht+='<td>';
					ht+='<input type="text" size="5" id="use_position_'+ch_product.product_id+'"/>';
					ht+='</td>';
					ht+='<td>';
					ht+='<a href=\'javascript:void(0)\' onclick="deleteProduct(\''+ch_product.product_id+'\')">删除</a>'
					ht+='</td>';
					ht+='</tr>'; 
				}
			}
			
			if ( !isEmpty ) {
				$("#productList").append( ht ); 
			} else {
			  $("#productList").html( ht );
			}
			$("#savaBtn").show();
		}catch(e){
			  alert(e.message);
	    }
	}
		
	function isExistProduct(p){
	   if ( !selectedProduct ) return false;
	   for (var i=0;i<selectedProduct.length;i++) {
	     if ( selectedProduct[i].product_id == p.product_id ) return true; 
	   }

	   selectedProduct[selectedProduct.length]=p;
	   return false;
	}
	//校验订单基本信息
	function checkFormDoSubmit(){	
		var msg="";
		if ( $("#total_amount").val() != '' && !IsFloat( $("#total_amount").val() )) msg += "[订单总额]应为数字类型<br>";
		if ( $("#earnest_money").val() != '' && !IsFloat( $("#earnest_money").val() )) msg += "[已收金额]应为数字类型<br>";
		//if ( $("#amount").val() != '' && !IsFloat( $("#amount").val() )) msg +="[MTX累积剂量]应为数字类型<br>";
		msg += checkString($("#order_id").val(),true,64,"订单号");
		msg += checkString($("#product_cust_code").val(),true,20,"客户编号");
		msg += checkString($("#order_type").val(),true,20,"订单类型");
		return msg;
   }
   //调用回调函数---添加订单明细信
   function saveProductOrderDetailCallBack(obj){
	try{
        if ( obj.status == true ){
            isSaveOK = true;
            top.showInfoWinOK("操作成功");
			$("#total_money").html("0");
			productIndex=0;
			//initTypeSelect() ;
			productQueryAllOrderDetail();
			queryAllsettleDetail();
        }else{
            isSaveOK = false;
            top.showInfoWinError("操作失败 "+obj.msg);
        }
       }catch(e){
          top.showInfoWinError("处理异常:"+e.message);
       }
	
   }
   
   //删除从选择页面返回来的，而且数据库里还没有的产品记录（明细列表）
   function deleteProduct(productId){
	 // 根据 TR id 删除<tr>标签对象
	 $("#add_product_"+productId).remove();
	 selectedProduct.length--;
   }
 
   // 删除数据库里已经存在的销售清单（产品明细）
   function deleteSaleDetail(typeId){
        var aoData=[];
		aoData.push( { "name": "orderdetail.id", "value": $("#type_"+typeId+"_detail_id").val() } );
		top.sendAjaxRequest("/actions/ProjectOrder.action?deleteOrderDatail",aoData,saveProductOrderDetailCallBack);
   }

    //保存信息---项目变更
	function saveProjectChange(){
		var aoData=[];
		aoData.push( { "name": "order.order_id", "value": $("#order_id").val() } );
		aoData.push( { "name": "projectchange.order_id", "value":product_info_id} );
		aoData.push( { "name": "projectchange.change_project", "value": $("#change_project").val() } );
		aoData.push( { "name": "projectchange.rectification_project", "value": $("#rectification_project").val() } );
		aoData.push( { "name": "projectchange.reason_and_cycle", "value": $("#reason_and_cycle").val() } );
		aoData.push( { "name": "projectchange.change_result", "value": $("#change_result").val() } );
		aoData.push( { "name": "projectchange.install_and_check", "value": $("#install_and_check").val() } );
		aoData.push( { "name": "projectchange.opt_user", "value": $("#change_opt_user").val() } );
		
		var xurl="/actions/ProjectOrder.action?saveProjectChange";
		 top.sendAjaxRequest(xurl,aoData,ProjectChangeoptCallback);
	  }
	 //调用回调函数---项目变更
    function ProjectChangeoptCallback(obj){
       try{
        if ( obj.status == true ){
            isSaveOK = true;
            top.showInfoWinOK("操作成功");
        }else{
            isSaveOK = false;
            top.showInfoWinError("操作失败 "+obj.msg);
        }
       }catch(e){
          top.showInfoWinError("处理异常:"+e.message);
       }
   }

	// 关闭当前页面前，页面框架自动调用的函数
	function doBeforeClose(){
     var obj={
              "isSaveOK":isSaveOK
            };
     top.setTempValue(obj);
   }
	
	
	function saveProOrderInfo(){
		var aoData=[];
		aoData.push( { "name": "orderInfo.id", "value": product_info_id } );
		aoData.push( { "name": "orderInfo.require_id", "value": $("#require_id").val() } );
		aoData.push( { "name": "orderInfo.cust_name", "value": $("#product_cust_name").html() } );
		aoData.push( { "name": "orderInfo.designerCode", "value":designerCode } );
		aoData.push( { "name": "orderInfo.pro_designer", "value": $("#pro_designer").val() } );
		aoData.push( { "name": "orderInfo.box_designer", "value": $("#box_designer").val() } );
		aoData.push( { "name": "orderInfo.cust_tel", "value": $("#cust_tel").html() } );
		//aoData.push( { "name": "orderInfo.designer_tel", "value": $("#designer_tel").val() } );
		//aoData.push( { "name": "orderInfo.pro_designer_tel", "value": $("#pro_designer_tel").val() } );
	//	aoData.push( { "name": "orderInfo.box_designer_tel", "value": $("#box_designer_tel").val() } );
		aoData.push( { "name": "orderInfo.pro_add", "value": $("#pro_add").html() } );
		aoData.push( { "name": "orderInfo.order_date", "value": top.toTimestamp($("#order_date").val()) } );
		aoData.push( { "name": "orderInfo.product_info_id", "value": $("#product_info_id").html() } );
		aoData.push( { "name": "orderInfo.cust_code", "value":cust_base_info_id} );
		
		var xurl="/actions/ProductOrder.action?updateProductOrderInfo";
		if(product_info_id==0||product_info_id==""){
			xurl="/actions/ProductOrder.action?insertProductOrderInfo";
		}
		top.sendAjaxRequest(xurl,aoData,optSaveProOrderInfoCallback);
	}
	function optSaveProOrderInfoCallback(obj){
		try{
			if ( obj.status == true ){
				isSaveOK = true;
				top.showInfoWinOK("操作成功");
				if(obj.msg!=""){
					product_info_id=obj.msg;
				}
				$("#id").html(product_info_id);
			}else{
				isSaveOK = false;
				top.showInfoWinError("操作失败 "+obj.msg);
			}
		   }catch(e){
			  top.showInfoWinError("处理异常:"+e.message);
		   }
	}
	
	//修改结算单详细
	function updateSettleDetail(detailid){
		var aoData=[];
		aoData.push( { "name": "orderdetail.id", "value":detailid } );aoData.push( { "name": "orderdetail.pre_money", "value":  $("#pre_money_"+detailid).val() } );
		aoData.push( { "name": "orderdetail.fact_money", "value": $("#fact_money_"+detailid).val() } );
		aoData.push( { "name": "orderdetail.last_money", "value":$("#last_money_"+detailid).val() } );
		aoData.push( { "name": "orderdetail.settelment_demo", "value": $("#settelment_demo_"+detailid).val() } );
				
		var xurl="/actions/ProjectOrder.action?updateSettlementDetail";
		top.sendAjaxRequest(xurl,aoData,saveProductOrderDetailCallBack);
	}

   //调用回调函数---添加订单明细信
  /* function saveOrderDetailCallBack(obj){
	try{
        if ( obj.status == true ){
            isSaveOK = true;
            top.showInfoWinOK("操作成功");
			//queryAllOrderDetail();
			//queryAllsettleDetail();
        }else{
            isSaveOK = false;
            top.showInfoWinError("操作失败 "+obj.msg);
        }
       }catch(e){
          top.showInfoWinError("处理异常:"+e.message);
       }
	
   }
 
   //调用回调函数---查询订单详细信息
   function QuoteDetailCallback(obj){
		try{
		//getAllProductList(); 
		var orderdetail=obj.aaData;
		// orderdetail=obj.aaData;
		 var parentType="";
		 var proSum=0;
		 var money=0;
		 if(orderdetail.length>0){
			parentType=orderdetail[0].parent_type;
			totalSum=0;
			totalMoney=0;
			for (var i=0;i<orderdetail.length;i++) {
				 totalSum=proSum+orderdetail[i].amount;
				 totalMoney=money+orderdetail[i].amount*orderdetail[i].sale_price*orderdetail[i].discount;
				if(orderdetail[i].parent_type==parentType){
					 proSum=proSum+orderdetail[i].amount;
					 money=money+orderdetail[i].amount*orderdetail[i].sale_price*orderdetail[i].discount;
				}else{
					//$("#parentType_proSum_"+orderdetail[i-1].parent_type).html(proSum);
					$("#parentType_proMoney_"+orderdetail[i-1].parent_type).html(money);
					 parentType="";
					 proSum=orderdetail[i].amount;
					 money=orderdetail[i].amount*orderdetail[i].sale_price*orderdetail[i].discount;
				
				}
			 	$("#tdtype_"+orderdetail[i].type_id+"_product_brand").html(top.getSupplierNameById(productList[i].product_brand));
				$("#type_"+orderdetail[i].type_id+"_product_model").html(orderdetail[i].product_model);
				$("#tdtype_"+orderdetail[i].type_id+"_unit").html(top.getCodeName("UNIT",orderdetail[i].unit));
				$("#type_"+orderdetail[i].type_id+"_product_standard").html(orderdetail[i].product_standard);
				$("#type_"+orderdetail[i].type_id+"_sale_price").html(orderdetail[i].sale_price);
				$("#type_"+orderdetail[i].type_id+"_discount").html(orderdetail[i].discount);
				$("#type_"+orderdetail[i].type_id+"_product_brand").val(orderdetail[i].product_brand);
				$("#type_"+orderdetail[i].type_id+"_unit").val(orderdetail[i].unit);
				$("#type_"+orderdetail[i].type_id+"_product_id").val(orderdetail[i].product_id);
				$("#type_"+orderdetail[i].type_id+"_amount").val(orderdetail[i].amount);
				$("#type_"+orderdetail[i].type_id+"_use_position").val(orderdetail[i].use_position);
				$("#type_"+orderdetail[i].type_id+"_detail_id").val(orderdetail[i].id);
				$("#product_"+orderdetail[i].type_id).val(orderdetail[i].product_id);
				$("#type_"+orderdetail[i].type_id+"_detail_id").val(orderdetail[i].id);
				var ht="";
			    ht+='<a href="javascript:void(0)" onclick="deleteSaleDetail(\''+orderdetail[i].type_id+'\')">删除</a>';
				$("#span_type_"+orderdetail[i].type_id+"_optType").html(ht);
				ht="";
			}
			$("#totalMoney").html(totalMoney);
			$("#parentType_proMoney_"+orderdetail[orderdetail.length-1].parent_type).html(money);
					 parentType="";
					 proSum=0;
					 money=0;
		}
		}
		catch(e){
			alert(e.message);
		}
   }*/
     //查询订单结算单中明细中的产品产品信息
   function queryAllsettleDetail() {
		var aoData=[];
		if(product_info_id!=''){
		aoData.push( { "name": "orderdetail.order_id", "value": product_info_id } );
		top.sendAjaxRequest("/actions/ProjectOrder.action?getSettlementDetailList",aoData,settleDetailCallback);
		}
		else{
		var ht='<tr><td colspan="7" style="line-height:35px;font-weight:bold;font-size:25px" align="center">产品结算单</td></tr>'
		+'<tr class="tr_data" height="25px">'
		+'<td width="12%" align="center">产品类别</td>'
		+'<td width="12%" align="center">名称</td>'
		+'<td width="12%" align="center">预收款项</td>'
		+'<td width="12%" align="center">实际发生款项</td>'
		+'<td width="12%" align="center">退补款项</td>'
		+'<td width="14%" align="center">备注</td>'
		//+'<td width="12%" align="center">订单状态</td>'
		+'<td width="14%" align="center">操作</td></tr>';
		ht+='<tr ';
				ht+='class="tr_data"';
				ht+='height="35px"';
				ht+='>';
				ht+='<td colspan="14">';
				ht+='暂无任何数据';
				ht+='</td>';
				ht+'</tr>';
				$("#settelmentList").html( ht );
				}
		}
   //调用回调函数---查询结算单详细信息
   function settleDetailCallback(obj){
		try{
		 var settledetail=obj.aaData;
		 var len=0;
		if(settledetail){
			len=settledetail.length;
		}
		var ht='<tr><td colspan="7" style="line-height:35px;font-weight:bold;font-size:25px" align="center">产品结算单</td></tr>'
		+'<tr class="tr_data" height="25px">'
		+'<td width="12%" align="center">产品类别</td>'
		+'<td width="12%" align="center">名称</td>'
		+'<td width="12%" align="center">预收款项</td>'
		+'<td width="12%" align="center">实际发生款项</td>'
		+'<td width="12%" align="center">退补款项</td>'
		+'<td width="14%" align="center">备注</td>'
		//+'<td width="12%" align="center">订单状态</td>'
		+'<td width="14%" align="center">操作</td></tr>';
		
		if(settledetail.length>0){
			for (var i=0;i<settledetail.length;i++) {
				
			    ht+='<tr ';
				ht+='class="tr_data"';
				ht+='height="35px"';
			    ht+='>';
				ht+='<td>';
				ht+='<input type="text" size="4" id="type_name_'+settledetail[i].id+'" value="'+settledetail[i].type_name+'" disabled />';
				ht+='</td>';
				ht+='<td>';
				ht+='<input type="text" size="4" id="product_name_'+settledetail[i].id+'" value="'+settledetail[i].product_name+'" disabled />';
				ht+='</td>';
				ht+='<td>';
				ht+='<input type="text" size="4" id="pre_money_'+settledetail[i].id+'" value="'+settledetail[i].pre_money+'"  />元';
				ht+='</td>';				 
				ht+='<td>';
				ht+='<input type="text" size="4" id="fact_money_'+settledetail[i].id+'" value="'+settledetail[i].fact_money+'"/>元';
				ht+='</td>';
				ht+='<td>';
				ht+='<input type="text" size="4" id="last_money_'+settledetail[i].id+'" value="'+settledetail[i].last_money+'" />元';
				ht+='</td>';
				ht+='<td>';
				ht+='<input type="text" size="4" id="settelment_demo_'+settledetail[i].id+'" value="'+settledetail[i].settelment_demo+'"/>';
				ht+='</td>';
				ht+='<td>';
				ht+='<a href=\'javascript:void(0)\' onclick="updateSettleDetail(\''+settledetail[i].id+'\')">修改</a>';
				ht+='<input type="hidden" id="type_id_'+settledetail[i].id+'" value="'+settledetail[i].type_id+'"/>';
				ht+='<input type="hidden" id="product_id_'+settledetail[i].id+'" value="'+settledetail[i].product_id+'"/>';
				
				//ht+='<a href=\'javascript:void(0)\' onclick="deleteSaleDetail(\''+settledetail[i].id+'\')">删除</a>';
				ht+='</td>';
				ht+='</tr>'; 
				}
			}else{
				ht+='<tr ';
				ht+='class="tr_data"';
				ht+='height="35px"';
				ht+='>';
				ht+='<td colspan="14">';
				ht+='暂无任何数据';
				ht+='</td>';
				ht+'</tr>';
				}
				$("#settelmentList").html( ht );
		}catch(e)
		{
			alert(e.message);
		}
   }
   //删除从选择页面返回来的，而且数据库里还没有的产品记录（明细列表）
   function deleteProduct(productId){
	 // 根据 TR id 删除<tr>标签对象
	 $("#add_product_"+productId).remove();
	 selectedProduct.length--;
   }
 
   // 删除数据库里已经存在的销售清单（产品明细）
   /*function deleteSaleDetail(typeId){
        var aoData=[];
		aoData.push( { "name": "quote_detail.id", "value": $("#type_"+typeId+"_detail_id").val() } );
		top.sendAjaxRequest("/actions/ProductQuote.action?deleteQuoteDetail",aoData,saveOrderDetailCallBack);
   }*/
   	
	//校验竣工信息
	function checkProjectCompleted(){	
		var msg="";
		if ( $("#final_payment").val() != '' && !IsFloat( $("#final_payment").val() )) msg += "[尾款金额]应为数字类型<br>";
		return msg;
   }
	
	// 保存基本信息
    function doSubmit(){
	 var aoData=[];
	// 检查
	/**var checkMsg = checkFormDoSubmit();
	    if ( checkMsg != '' ) {
	       top.showInfoWinWarn(checkMsg);
           return ;
	    } */
		//订单基本信息信息
		aoData.push( { "name": "order.order_id", "value": product_info_id } );
		aoData.push( { "name": "order.cust_code", "value":cust_base_info_id } );
		aoData.push( { "name": "order.order_type", "value": $("#order_type").val() } );
		aoData.push( { "name": "order.fitment_designer", "value": $("#fitment_designer").val() } );
		aoData.push( { "name": "order.engineer_manager", "value": $("#engineer_manager").val() } );
		aoData.push( { "name": "order.project_manager", "value": $("#project_manager").val() } );
		aoData.push( { "name": "order.product_designer", "value": $("#product_designer").val() } );
		aoData.push( { "name": "order.cust_manager", "value": $("#product_cust_manager").val() } );
		aoData.push( { "name": "order.pay_money_date", "value": top.toTimestamp($("#pay_money_date").val()) } );
		aoData.push( { "name": "order.status", "value": $("#status").val() } );
		aoData.push( { "name": "order.total_amount", "value": top.g_GetNumValue($("#total_amount").val()) } );
		aoData.push( { "name": "order.earnest_money", "value": top.g_GetNumValue($("#earnest_money").val()) } );
		
	var xurl="/actions/ProjectOrder.action?updateOrderInfo";
	 if ( product_info_id == 0 ) {
	    xurl="/actions/ProjectOrder.action?insertOrderInfo";
	 }
     top.sendAjaxRequest(xurl,aoData,productOptCallback);
   }

	//调用回调函数---订单基本信息
    function productOptCallback(obj){
       try{
        if ( obj.status == true ){
            isSaveOK = true;
            top.showInfoWinOK("操作成功");
			
			if ( product_info_id == 0 ) {
			  product_info_id=obj.msg;
			  $("#order_id").val( product_info_id );
			}
        }else{
            isSaveOK = false;
            top.showInfoWinError("操作失败 "+obj.msg);
        }
       }catch(e){
          top.showInfoWinError("处理异常:"+e.message);
       }
   }
	
	//选择工程订单
	function chooseProject(){
		var xurl="/pages/pro09/chooseProjectOrder.html";
		openDialog("选择工程订单",xurl,true,900,500,chooseProjectCallBack);
	}
	//调用回调函数---调用查询选择方法
   	function chooseProjectCallBack(){
		try{
			var o = top.getTempValue();
			if(o){
				$("#product_info_id").html(o.order_id);
				cust_base_info_id=o.cust_code;
				var aoData=[];
			    aoData.push( { "name": "custInfo.code", "value": cust_base_info_id } );
			    top.sendAjaxRequest("/actions/CustInfo.action?getFitmentCustInfo",aoData,custDetailCallback);
			}
		}catch(e){}
   }
   //选择客户
	function chooseCust(){
		var xurl="/pages/pro09/chooseCust.html";
		openDialog("选择客户",xurl,true,700,500,chooseCustCallBack);
	}
	//调用回调函数---调用查询选择方法
   	function chooseCustCallBack(){
		try{
			var o = top.getTempValue();
			if(o){
			    cust_base_info_id=o.code; 
				// 查询需求信息
				var aoData=[];
			    aoData.push( { "name": "custInfo.code", "value": cust_base_info_id } );
			    top.sendAjaxRequest("/actions/CustInfo.action?getFitmentCustInfo",aoData,custDetailCallback);
			}
		}catch(e){}
   }
   //回调函数---返回查询的数据赋值给文本框
	function custDetailCallback(obj){
	   try{
			if ( obj.status == true ){
			  var o=obj.body;
			  if(page_name=='product'){
				  if(o){
						$("#product_cust_name").html(o.cust_name);
						$("#cust_tel").html(o.cust_mobile);
						 if ( o.requireInfo ) {
							$("#require_id").val(o.requireInfo.id);
							$("#pro_add").html(top.getCodeName("DISTRICT",o.requireInfo.district)+o.requireInfo.project_addr);
							designerCode=o.requireInfo.require_manager;
							$("#product_designerCode").html(top.getUserNameByCode(o.requireInfo.require_manager)); 				
						}else{
						  $("#pro_add").html("");
						  $("#product_designerCode").html("");
						}
					}else{
						$("#product_cust_name").html("");
						$("#cust_tel").html("");
						$("#pro_add").html("");
						$("#product_designerCode").html("");
					}
				}else if(page_name=='project'){
					 if(o){
						$("#project_cust_code").html(o.code); 
						$("#product_cust_name").html(o.cust_name);
						$("#td_product_cust_manager").html(top.getUserNameByCode(o.cust_manager,true));
						$("#cust_phone").html(o.cust_phone);
						$("#cust_mobile").html(o.cust_mobile);
					}
				  if ( o.requireInfo ) {
						require_id=o.requireInfo.id;
						$("#base_project_addr").html(o.requireInfo.project_addr);
						$("#base_district").html(top.getCodeName("DISTRICT",o.requireInfo.district));  
						$("#fitment_designer").val(top.getUserNameByCode(o.requireInfo.require_manager),true); 	
						$("#fitment_designer_code").val(o.requireInfo.require_manager);				
					}
				}
			 
		    }
		}catch(e){}
	}
	function focuseAmount(value){
		tempAmout=value;
	}
	
	function changeAmount(typeId){
	
	   var price=parseFloat($("#type_"+typeId+"_discount").html())*parseFloat($("#type_"+typeId+"_sale_price").html());
	   var nowSum=parseInt($("#type_"+typeId+"_amount").val());
	   var money=parseFloat(price*nowSum)-parseFloat(tempAmout*price);
	   var totalMoney=parseFloat($("#total_money").html());
	   totalMoney+=money;
	   $("#total_money").html(totalMoney);
	}
//----------------version 2------------------------
	function getProductList(){
	   top.sendAjaxRequest("/actions/ProductInfo.action?getAllProductInfoList",null,initProductList); 
	}
	//查询产品列表结果
	function initProductList(obj){
	     productList=obj.body.productList;
		 if(typeList!=null){
			getAllProductList();
		 }
		 productQueryAllOrderDetail();
		// initTypeSelect();
	}
	/*function getCertenProduct(sid){
		proId=($("#"+sid).val());
		var prePrice=0;
		var nowPrice=0;
		var preSum=0;
		var nowSum=0;
		curProductIndex=sid.split("_")[1];
		try{
			if($("#type_"+curProductIndex+"_discount").html()!=''&&$("#type_"+curProductIndex+"_discount").html()!=null){
				prePrice=parseFloat($("#type_"+curProductIndex+"_discount").html())*parseFloat($("#type_"+curProductIndex+"_sale_price").html());
				preSum=parseInt($("#type_"+curProductIndex+"_amount").val());
			}else{
				prePrice=0;
				preSum=0;
			}
		}catch(e){
			prePrice=0;
			preSum=0;
		}
		//当前选择为空
		if(proId==""||proId==null){
			$("#tdtype_"+curProductIndex+"_product_brand").html("");
			$("#type_"+curProductIndex+"_product_model").html("");
			$("#tdtype_"+curProductIndex+"_unit").html("");
			$("#type_"+curProductIndex+"_product_standard").html("");
			$("#type_"+curProductIndex+"_sale_price").html("");
			$("#type_"+curProductIndex+"_discount").html("");
			$("#type_"+curProductIndex+"_product_brand").val("");
			$("#type_"+curProductIndex+"_unit").val("");
			$("#type_"+curProductIndex+"_product_id").val("");
			$("#type_"+curProductIndex+"_amount").val("0");
			$("#type_"+curProductIndex+"_use_position").val("");
			var money=parseFloat(preSum*prePrice);
			var totalMoney=parseFloat($("#total_money").html());
			totalMoney-=parseFloat(money);
			$("#total_money").html(totalMoney);
		}else{
		//判断之前值是否为空
			//if($("#type_"+curProductIndex+"_discount").html()!=''&&$("#type_"+curProductIndex+"_sale_price").html()!=''){
			//  prePrice=parseFloat($("#type_"+curProductIndex+"_discount").html())*parseFloat($("#type_"+curProductIndex+"_sale_price").html());
			 // preSum=parseInt($("#type_"+curProductIndex+"_amount").val());
			for(var i=0;i<productList.length;i++){
				if(proId==productList[i].product_id){
					//typeId=productList[i].type_id;
					$("#tdtype_"+curProductIndex+"_product_brand").html(top.getSupplierNameById(productList[i].product_brand));
					$("#type_"+curProductIndex+"_product_model").html(productList[i].product_model);
					$("#tdtype_"+curProductIndex+"_unit").html(top.getCodeName("UNIT",productList[i].unit));
					$("#type_"+curProductIndex+"_product_standard").html(productList[i].product_standard);
					$("#type_"+curProductIndex+"_sale_price").html(productList[i].price);
					$("#type_"+curProductIndex+"_discount").html(productList[i].discount);
					$("#type_"+curProductIndex+"_product_brand").val(productList[i].product_brand);
					$("#type_"+curProductIndex+"_unit").val(productList[i].unit);
					$("#type_"+curProductIndex+"_product_id").val(productList[i].product_id);
					if($("#type_"+curProductIndex+"_amount").val()==""||$("#type_"+curProductIndex+"_amount").val()=="0")
					{
					 $("#type_"+curProductIndex+"_amount").val("1");
					}
					break;
				}
			}//当前选择不为空时操作
			nowPrice=parseFloat($("#type_"+curProductIndex+"_discount").html())*parseFloat($("#type_"+curProductIndex+"_sale_price").html());
			nowSum=parseInt($("#type_"+curProductIndex+"_amount").val());
			var money=parseFloat(nowPrice*nowSum)-parseFloat(preSum*prePrice);
			var totalMoney=parseFloat($("#total_money").html());
			totalMoney+=parseFloat(money);
			$("#total_money").html(totalMoney);
		}
	}*/
	function addProdcuctRow(productIndex){
		var ht="";
		ht+="<tr height='28px' class='tr_data'><td align='center' id='type_"+productIndex+"'></td>";
		ht+="<td  id='type_"+productIndex+"_product_name'></td>";
		ht+='<td  width="80px" id="type_'+productIndex+'_product_brand">&nbsp;</td>';
		ht+='<td  width="80px" id="type_'+productIndex+'_product_model">&nbsp;</td>';
		ht+='<td  width="80px" id="type_'+productIndex+'_product_standard">&nbsp;</td>';
		ht+='<td  width="80px" id="type_'+productIndex+'_unit">&nbsp;</td>';
		ht+='<td  width="80px" id="type_'+productIndex+'_sale_price" align="right">&nbsp;</td>';
		ht+='<td  width="80px" id="type_'+productIndex+'_discount"></td>';
		ht+='<td  width="80px" id="type_'+productIndex+'_use_position"/></td>';
		ht+='<td  width="80px" id="type_'+productIndex+'_amount"/></td>';
		ht+='</tr>';
		$("#productDetailList").append(ht);
	}
	//增加行
	/*
	function addProdcuctRow(){
		productIndex++;
		var ht="";
		ht+="<tr class='tr_data'><td align='left'><select onclick='showDiv("+productIndex+")' id='type_"+productIndex+"'></slect></td><td><select width='80px' id='type_"+productIndex+"_product_name' onchange='getCertenProduct(this.id)'></select></td>";
		ht+='<td  width="80px" id="tdtype_'+productIndex+'_product_brand">&nbsp;</td>';
		ht+='<td  width="80px" id="type_'+productIndex+'_product_model">&nbsp;</td>';
		ht+='<td  width="80px" id="type_'+productIndex+'_product_standard">&nbsp;</td>';
		ht+='<td  width="80px" id="tdtype_'+productIndex+'_unit">&nbsp;</td>';
		ht+='<td  width="80px" id="type_'+productIndex+'_sale_price" align="right">&nbsp;</td>';
		ht+='<td  width="80px" id="type_'+productIndex+'_discount"></td>';
		ht+='<td  width="80px"><input type="text" size="8" padding="0" id="type_'+productIndex+'_use_position"/></td>';
		ht+='<td  width="80px"><input onFocus="focuseAmount(this.value)" onChange="changeAmount('+productIndex+')"  type="text" size="4" padding="0" id="type_'+productIndex+'_amount"/></td>';
		ht+='<td >';
		ht+='<input type="hidden" id="type_'+productIndex+'_product_id">';
		ht+='<input type="hidden" id="type_'+productIndex+'_product_brand">';
		ht+='<input type="hidden" id="type_'+productIndex+'_unit">';
		ht+='<input type="hidden" id="type_'+productIndex+'_detail_id"/>';
		ht+='<span id="span_type_'+productIndex+'_optType">';
		ht+='</span>';
		ht+='</td>';
		ht+='</tr>';
		$("#productDetailList").append(ht);
	}*/
	   function checkFormDoQuote(productId){
		var msg="";
		msg += checkString($("#type_"+productId+"_product_name").val(),true,64,"产品名称");
		msg += checkString($("#type_"+productId+"_amount").val(),true,8,"数量");
		if(!IsFloat( $("#type_"+productId+"_amount").val()))msg += "数量应为数字类型<br>";
		msg += checkString($("#type_"+productId+"_use_position").val(),true,64,"使用位置");
		return msg;
	 }
	//保存报价
	function saveOrderDetail(){
		var type_ids="";
		var product_ids="";
		var product_brands="";
		var product_names="";
		var product_models="";
		var product_standards="";
		var units="";
		var use_positions="";
		var sale_prices="";
		var discounts="";
		var amounts="";
		var typeId="";
		 
		for(var i=0;i<productIndex+1;i++){
				if($("#type_"+i).val()!=null&&$("#type_"+i+"_product_name").val()!=null&&$("#type_"+i+"_product_name").val()!=''){
					var checkMsg = checkFormDoQuote(i);
					if ( checkMsg != '' ) {
						top.showInfoWinWarn(checkMsg);
						return ;
					}
					type_ids+=$("#type_"+i).val()+",";
					product_ids+=$("#type_"+i+"_product_id").val()+",";
					product_brands+=$("#type_"+i+"_product_brand").val()+",";
					product_names+= $("#type_"+i+"_product_name").find("option:selected").text()+",";
					product_models+=$("#type_"+i+"_product_model").html()+",";
					product_standards+=$("#type_"+i+"_product_standard").html()+",";
					units+=$("#type_"+i+"_unit").val()+",";
					sale_prices+=$("#type_"+i+"_sale_price").html()+",";
					discounts+=$("#type_"+i+"_discount").html()+",";
					amounts+=$("#type_"+i+"_amount").val()+",";
					use_positions+=$("#type_"+i+"_use_position").val()+",";
				}
			}
		if(product_info_id==0){
			 top.showInfoWinWarn("请首先保存客户基本信息！");
			 return;
			}
		var aoData=[];
				aoData.push( { "name": "orderdetail.order_id", "value":product_info_id } );
				aoData.push( { "name": "type_idStr", "value": type_ids} );
				aoData.push( { "name": "product_idStr", "value": product_ids} );
				aoData.push( { "name": "orderdetail.product_brand", "value":product_brands} );
				aoData.push( { "name": "orderdetail.product_name", "value": product_names} );
				aoData.push( { "name": "orderdetail.product_model", "value": product_models } );
				aoData.push( { "name": "orderdetail.product_standard", "value": product_standards} );
				aoData.push( { "name": "orderdetail.unit", "value":units } );
				aoData.push( { "name": "orderdetail.use_position", "value": use_positions} );
				aoData.push( { "name": "sale_priceStr", "value":sale_prices} );
				aoData.push( { "name": "discountStr", "value":discounts} );
				aoData.push( { "name": "amountStr", "value": amounts} );
				var xurl="/actions/ProjectOrder.action?insertOrderDetail";
				top.sendAjaxRequest(xurl,aoData,saveProductOrderDetailCallBack);

	}
	
	//查询所有订单明细中的产品产品信息
   function productQueryAllOrderDetail() {
		if(product_info_id!=null&product_info_id!=''){
		var aoData=[];
		aoData.push( { "name": "orderdetail.order_id", "value": product_info_id } );
		top.sendAjaxRequest("/actions/ProjectOrder.action?getOrderDetailList",aoData,getOrderDetailListCallBack);
	}
	else{
		getOrderChangeHistoryList();
	}
  }
    
   function getOrderDetailListCallBack(obj){
   try{
		 orderdetail=obj.aaData;
		 var parentType="";
		 var proSum=0;
		 var money=0;
		 var ht="";
		 var curProductIndex=0;
		 if(orderdetail.length>0){
			for (var i=0;i<orderdetail.length;i++) {
				addProdcuctRow(curProductIndex);
				money+=orderdetail[i].amount*orderdetail[i].sale_price*orderdetail[i].discount;
				getOneProductRecord(orderdetail[i].product_id,curProductIndex);
				$("#type_"+curProductIndex+"_amount").html(orderdetail[i].amount);
				$("#type_"+curProductIndex+"_use_position").html(orderdetail[i].use_position);
				curProductIndex++;
			}
			$("#total_money").html(money);
		}
		/* curProductIndex=0;
		 if(orderdetail.length>0){
			for (var i=0;i<orderdetail.length;i++) {
				//if(i>9){
					addProdcuctRow();
				//}
				//模拟选中产品类型节点,nid为类别Id
				//onSelectedNode(orderdetail[i].type_id);
				//选择产品
				$("#type_"+curProductIndex+"_product_name").val(orderdetail[i].product_id);
				$("#type_"+curProductIndex+"_amount").val(orderdetail[i].amount);
				$("#type_"+curProductIndex+"_use_position").val(orderdetail[i].use_position);
				$("#type_"+curProductIndex+"_detail_id").val(orderdetail[i].id);
				getCertenProduct("type_"+curProductIndex+"_product_name");
				money+=parseInt(orderdetail[i].amount)*orderdetail[i].sale_price*orderdetail[i].discount;
				ht="";
				ht+='<a href="javascript:void(0)" onclick="deleteSaleDetail(\''+curProductIndex+'\')">删除</a>';
				$("#span_type_"+curProductIndex+"_optType").html(ht);
				curProductIndex++;
			}
			$("#total_money").html(money);
		}*/
	}
	catch(e){
		alert(e.message);
	}//显示产品变更变更前产品信息
	getOldProductList();
	getOrderChangeHistoryList();
   }
   function getOneProductRecord(proId,curProductIndex){  
		for(var i=0;i<productList.length;i++){
			if(proId==productList[i].product_id){
				for(var j=0;j<typeList.length;j++){
					if(typeList[j].type_id==productList[i].type_id){
						$("#type_"+curProductIndex).html(typeList[i].type_name);
					}
				}
				$("#type_"+curProductIndex+"_product_name").html(productList[i].product_name);
				$("#type_"+curProductIndex+"_product_model").html(productList[i].product_model);
				$("#type_"+curProductIndex+"_product_standard").html(productList[i].product_standard);
				$("#type_"+curProductIndex+"_sale_price").html(productList[i].price);
				$("#type_"+curProductIndex+"_discount").html(productList[i].discount);
				$("#type_"+curProductIndex+"_product_brand").html(top.getSupplierNameById(productList[i].product_brand));
				$("#type_"+curProductIndex+"_unit").html(top.getCodeName("UNIT",productList[i].unit));
				$("#type_"+curProductIndex+"_product_id").html(productList[i].product_id);
				break;
			}
		}
	}
	//初始化报价表格
	/*function initTypeSelect(){
		var ht='<tr ><td width="180px">产品类别</td><td width="80px">名称</td><td width="80px">品牌</td><td width="80px">型号</td><td width="80px">规格</td><td width="80px">单位</td><td width="80px">单价</td><td width="80px">折扣</td><td width="100px">使用位置</td><td width="80px">数量</td><td >操作</td></tr>';
		*//*for(;productIndex<10;productIndex++){
			ht+="<tr class='tr_data'><td align='left'><select onclick='showDiv("+productIndex+")' id='type_"+productIndex+"'><option value=''></option></slect></td><td><select width='80px' id='type_"+productIndex+"_product_name' onchange='getCertenProduct(this.id)'></select></td>";
			ht+='<td  width="80px" id="tdtype_'+productIndex+'_product_brand">&nbsp;</td>';
			ht+='<td  width="80px" id="type_'+productIndex+'_product_model">&nbsp;</td>';
			ht+='<td  width="80px" id="type_'+productIndex+'_product_standard">&nbsp;</td>';
			ht+='<td  width="80px" id="tdtype_'+productIndex+'_unit">&nbsp;</td>';
			ht+='<td  width="80px" id="type_'+productIndex+'_sale_price" align="right">&nbsp;</td>';
			ht+='<td  width="80px" id="type_'+productIndex+'_discount"></td>';
			ht+='<td  width="80px"><input type="text" size="8" padding="0" id="type_'+productIndex+'_use_position"/></td>';
			ht+='<td  width="80px"><input onFocus="focuseAmount(this.value)" onChange="changeAmount('+productIndex+')"  type="text" size="4" padding="0" id="type_'+productIndex+'_amount" value="0"/></td>';
			ht+='<td >';
			ht+='<input type="hidden" id="type_'+productIndex+'_product_id"/>';
			ht+='<input type="hidden" id="type_'+productIndex+'_product_brand"/>';
			ht+='<input type="hidden" id="type_'+productIndex+'_unit"/>';
			ht+='<input type="hidden" id="type_'+productIndex+'_detail_id"/>';
			ht+='<span id="span_type_'+productIndex+'_optType">';
			ht+='</span>';
			ht+='</td>';
			ht+='</tr>';
		}
		productIndex--;*/
		/*$("#productDetailList").html(ht);
		productQueryAllOrderDetail();
	}*/
	
	//某类别下产品名称下拉列表
	function getProductSelectHtml(typeId,selectName){
		var pro_name=[];
		if(productList){
			for(var i=0;i<productList.length;i++){
				if(productList[i].type_id==typeId){
					pro_name.push(productList[i]);
				}else{
					/*$("#type_"+indexId+"_product_name").html(getProductNameSelectHtml(pro_name,""));
					pro_name=[];
					pro_name.push(productList[i]);
					type_id=productList[i].type_id;*/
				}
			}
			$("#"+selectName).html(getProductNameSelectHtml(pro_name,""));
		}
	}
	//产品名称下拉列表
	function getProductNameSelectHtml(objArry,initUserCode){
		if ( !initUserCode ) initUserCode="";
		var ht="";
		if(objArry){
			ht+="<option value=''></option>";
			for(var i=0;i<objArry.length;i++){
			  ht+="<option value='"+objArry[i].product_id+"'";
			  if ( objArry[i].userCode == initUserCode ) ht+="selected ";
			  ht+=">"+objArry[i].product_name+"</option>";
			}
		}
		return ht;
	}
	
//---------------------------产品类型树生成-----------------------
    // 加载产品类型数据
    function loadProTree(){
    	   top.sendAjaxRequest("/actions/ProductInfo.action?getProductTypeList",[],initProductTypeTree);
       }
    // 初始化产品类型树
    function initProductTypeTree(obj){
		   var ht="<div width='150px' style='float:right;margin-right:2px;cursor:pointer' onclick='hideDiv()'><img src='../../img/tab_iconrig3.png'/></div>";
		   d=new dTree('d');
           d.config.useSelection = true;
           d.config.folderLinks = true;
           d.config.useStatusText = false;
           d.config.useLines = false;
           currentProId=0;

           if( obj.aaData ){
        	   for(var i=0;i<obj.aaData.length;i++){
        		   d.add( obj.aaData[i].type_id,obj.aaData[i].parent_type,obj.aaData[i].type_name );
        	   }
           }
		   
		   top.setProductTypeTree( d );

           $("#ProTypeTree").html( ht+d.toString() );
           treeObj = new JSDragDropTree();
           treeObj.setTreeId('dhtmlgoodies_tree2');
           treeObj.setMaximumDepth(20);
           treeObj.setMessageMaximumDepthReached('已到达最大的层次'); 
           treeObj.setRenameAllowed(true);
           treeObj.setDeleteAllowed(true);
           treeObj.initTree();
		   treeObj.collapseAll();
		   treeObj.showHideNode(false,'0');
          // treeObj.expandAll();
       }
    // 选中产品了类型节点后触发函数
    function onSelectedNode(nid){
	     if ( d == null ) return ;
    	 //  if ( currentProId == nid ) return ;
    	   var name="";
    	 //  currentProId = nid;
    	   if ( nid == 0 ) {
    		   nid="";
    		   name="";
    	   }else {
				name=d.getNodePath(nid);
				//产品变更
				if(pageMode=="orderChange"){
					$("#new_type_id").html("<option value='"+nid+"' selected>"+name+"</option>");
					getProductSelectHtml(nid,"new_product_name");
					displayCertainProduct(nid);
				}else{
					$("#type_"+curProductIndex).html("<option value='"+nid+"' selected>"+name+"</option>");
					//alert($("#type_"+curProductIndex).html());
					getProductSelectHtml(nid,"type_"+curProductIndex+"_product_name");
					getCertenProduct("type_"+curProductIndex+"_product_name");
				}
				hideDiv();
				pageMode="";
		    }
		  }
	   
	//控制产品类别选择菜单显示
	function showDiv(typeIndex){
		var x = $("#type_"+typeIndex).offset().left+10; 
		curProductIndex=typeIndex;
	    var y = $("#type_"+typeIndex).offset().top+30;
		showTypeSelect(x,y);
	}
	function showTypeSelect(x,y){
		$("#ProTypeTree").css("position", "absolute"); 
		$("#ProTypeTree").css("left",x); 
		$("#ProTypeTree").css("top", y);
		$("#ProTypeTree").css("display", "block");
		$("#ProTypeTree").css("z-index", "1"); 
		$("#ProTypeTree").show();
	}
	function hideDiv(){
		$("#ProTypeTree").hide();
	}
	//---------------------------------产品变更--------------------------
	function getOldProductList(){
		if(!orderdetail)return;
		var ht='<tr ><td width="180px">产品类别</td><td width="80px">名称</td><td width="80px">品牌</td><td width="80px">型号</td><td width="80px">规格</td><td width="80px">单位</td><td width="80px">单价</td><td width="80px">折扣</td><td width="100px">使用位置</td><td width="80px">数量</td><td >操作</td></tr>';
		if(orderdetail.length>0){
			for (var i=0;i<orderdetail.length;i++) {
				ht+="<tr class='tr_data'>";
				ht+="<td>"+orderdetail[i].type_name+"</td>";
				ht+="<td>"+orderdetail[i].product_name+"</td>";
				ht+="<td>"+top.getSupplierNameById(orderdetail[i].product_brand)+"</td>";
				ht+="<td>"+orderdetail[i].product_model+"</td>";
				ht+="<td>"+orderdetail[i].product_standard+"</td>";
				ht+="<td>"+top.getCodeName("UNIT",orderdetail[i].unit)+"</td>";
				ht+="<td>"+orderdetail[i].sale_price+"</td>";
				ht+="<td>"+orderdetail[i].discount+"</td>";
				ht+="<td>"+orderdetail[i].use_position+"</td>";
				ht+="<td>"+orderdetail[i].amount+"</td>";
				ht+="<td>"+top.getCodeSelectHtml("PRO_CHANGE_TYPE","change_type"+i,true,"", "showChangeDiv("+i+")", "", "200")+"</td>";
			ht+="</tr>";
			}
			$("#oldProductTable").html(ht);
		}
	}//显示某行
	function displayCertainProduct(id){
		var proId=$("#"+id).val();
		for(var i=0;i<productList.length;i++){
			if(proId==productList[i].product_id){
				$("#new_product_model").html(productList[i].product_model);
				$("#new_product_standard").html(productList[i].product_standard);
				$("#new_sale_price").html(productList[i].price);
				$("#new_discount").html(productList[i].discount);
				$("#tdnew_product_brand").html(top.getSupplierNameById(productList[i].product_brand));
				$("#new_product_brand").val(productList[i].product_brand);
				$("#new_unit").val(productList[i].unit);
				$("#tdnew_unit").html(top.getCodeName("UNIT",productList[i].unit));
				//$("#type_"+curProductIndex+"_product_id").val(productList[i].product_id);
				break;
			}
		}
	}
	//显示菜单
	function showChangTypeSelect(){
		pageMode="orderChange";
		var y = $("#new_type_id").offset().top+30;
		var x = $("#new_type_id").offset().left+10; 
		showTypeSelect(x,y);
	}
	//增加更改行
	function addOrderChangeTrHtml(){
		productIndex++;
		var ht="";
		ht+="<tr class='tr_data'><td align='left'><select onclick='showDiv("+productIndex+")' id='type_"+productIndex+"'></slect></td><td><select width='80px' id='type_"+productIndex+"_product_name' onchange='getCertenProduct(this.id)'></select></td>";
		ht+='<td  width="80px" id="tdtype_'+productIndex+'_product_brand">&nbsp;</td>';
		ht+='<td  width="80px" id="type_'+productIndex+'_product_model">&nbsp;</td>';
		ht+='<td  width="80px" id="type_'+productIndex+'_product_standard">&nbsp;</td>';
		ht+='<td  width="80px" id="tdtype_'+productIndex+'_unit">&nbsp;</td>';
		ht+='<td  width="80px" id="type_'+productIndex+'_sale_price" align="right">&nbsp;</td>';
		ht+='<td  width="80px" id="type_'+productIndex+'_discount"></td>';
		ht+='<td  width="80px"><input type="text" size="8" padding="0" id="type_'+productIndex+'_use_position"/></td>';
		ht+='<td  width="80px"><input onFocus="focuseAmount(this.value)" onChange="changeAmount('+productIndex+')"  type="text" size="4" padding="0" id="type_'+productIndex+'_amount"/></td>';
		ht+='<td >';
		ht+='<input type="hidden" id="type_'+productIndex+'_product_id">';
		ht+='<input type="hidden" id="type_'+productIndex+'_product_brand">';
		ht+='<input type="hidden" id="type_'+productIndex+'_unit">';
		ht+='<input type="hidden" id="type_'+productIndex+'_detail_id"/>';
		ht+='<span id="span_type_'+productIndex+'_optType">';
		ht+='</span>';
		ht+='</td>';
		ht+='</tr>';
		$("#productDetailList").append(ht);
	}
	
	function showChangeDiv(i){
		change_type=$("#change_type"+i).val();
		
		$("#changeDiv").show();
		//$("#tr_oldProduct_Title").hide();
		$("#tr_oldProduct").hide(); 
		$("#tr_newProduct_Title").hide();
		$("#tr_newProduct").hide();

	//新增
		if(!$("#change_type"+i).val()){
			$("#changeDiv").hide();
			return;
		}//'01' 新增 '02'取消 '03' 变更
		if($("#change_type"+i).val()!='01'){
			var ht="";
			ht+="<td>变更前产品</td>";
			ht+="<td> <input type='hidden' value='"+orderdetail[i].product_id+"' id='old_product_id'/>"+orderdetail[i].type_name+"<input type='hidden' value='"+orderdetail[i].type_id+"' id='old_type_id'/><input type='hidden' value='"+orderdetail[i].id+"' id='order_detail_id'/></td>";
			ht+="<td id='old_product_name'>"+orderdetail[i].product_name+"</td>";
			ht+="<td><input type='hidden' value='"+orderdetail[i].product_brand+"' id='old_product_brand'/>"+top.getSupplierNameById(orderdetail[i].product_brand)+"</td>";
			ht+="<td id='old_product_model'>"+orderdetail[i].product_model+"</td>";
			ht+="<td id='old_product_standard'>"+orderdetail[i].product_standard+"</td>";
			ht+="<td><input type='hidden' value='"+orderdetail[i].unit+"' id='old_unit'/>"+top.getCodeName("UNIT",orderdetail[i].unit)+"</td>";
			ht+="<td id='old_sale_price'>"+orderdetail[i].sale_price+"</td>";
			ht+="<td id='old_discount'>"+orderdetail[i].discount+"</td>";
			ht+="<td id='old_use_position'>"+orderdetail[i].use_position+"</td>";
			ht+="<td id='old_amount'>"+orderdetail[i].amount+"</td>";
		//	ht+="<td id=''>"+top.getCodeSelectHtml("PRO_CHANGE_TYPE","change_"+i,true,"", "showChangeDiv("+i+")", "", "200")+"</td>";
			//ht+="</tr>";
			$("#tr_oldProduct").html(ht);
			
			//$("#tr_oldProduct_Title").show();
			$("#tr_oldProduct").show();
		}
		if($("#change_type"+i).val()!='02'){
			$("#tr_newProduct_Title").show();
			$("#tr_newProduct").show();
		
		}
		
	if(change_type=='02'){
			top.showConfirm("确定取消订购该产品?",saveOrderChange);
		}
	}
	function getOrderChangeHistoryList(){
		var iaoColumns= [ 
                               { "sTitle": "变更类别", "mDataProp": "change_status", "sWidth": "150px","sClass": "center",
                                      "fnRender": function ( oObj ) {
                                           return top.getCodeName("PRO_CHANGE_TYPE",oObj.aData.change_type);
                                      },
                                "bUseRendered": false},
							   { "sTitle": "变更前产品名称","mDataProp": "old_product_name","sWidth": "200px", "sClass": "center","bUseRendered": false },
							   { "sTitle": "变更后产品名称", "mDataProp": "new_product_name","sWidth": "200px","sClass": "center","bUseRendered": false  },
                               { "sTitle": "变更时间", "mDataProp": "change_time", "sWidth": "150px","sClass": "center",
									    "fnRender": function ( oObj ) {
                                           return top.getTimeStr( oObj.aData.change_time ,true);
                                      },
							         "bUseRendered": false },
                               { "sTitle": "状态", "mDataProp": "change_status", "sWidth": "150px", "sClass": "center",
									"fnRender": function ( oObj ) {
                                           return top.getCodeName("PRO_CHANGE_STATUS",oObj.aData.change_status);
                                      },
                                      "bUseRendered": false
							   },
							   { "sTitle": "操作", "mDataProp": "product_change_id", "sWidth": "150px", "sClass": "center",
									"fnRender": function ( oObj ) {
										if(top.g_isPermit("check_product_order_change")){
                                           return "<a href='javascript:void(0)' onclick='openOrderChangeCheck("+oObj.aData.product_change_id+")'>审批</a>";
										}else{
											 return "<a href='javascript:void(0)' onclick='openOrderChangeCheck("+oObj.aData.product_change_id+")'>查看</a>";
										}
									  },
                                      "bUseRendered": false
							   },
                 ];
			   
			  var surl=top.getUrlBase()+"/actions/ProductOrder.action?getProductOrderChangeList";

			   productOTable = $('#orderChangeHistoryTable').dataTable( {
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
					if(product_info_id!=''){
							aoData.push( { "name": "productOrderChange.order_id", "value":product_info_id } );
							}
							else{
							aoData.push( { "name": "productOrderChange.order_id", "value":-1 } );
							}
					},
			    "sDom": "frtlip",
				"sPaginationType": "full_numbers",
				"aoColumns": iaoColumns
				} );
	}
	function productDoQuery(){
				productOTable.fnDraw();
	}
	function openOrderChangeCheck(orderChangeId){
		var xurl="/pages/pro09/orderChangeCheckPage.html?product_change_id="+orderChangeId;
		if(top.g_isPermit("check_product_order_change")){
			openDialog("产品变更审核",xurl,true,950,500,openOrderChangeCallBack);
		}else{
			openDialog("产品变更信息",xurl,true,950,500,openOrderChangeCallBack);
		}
	}
	function openOrderChangeCallBack(){
	var ht='<tr ><td align="center" width="180px">产品类别</td><td align="center" width="80px">名称</td><td align="center" width="80px">品牌</td><td align="center" width="80px">型号</td><td align="center" width="80px">规格</td><td align="center" width="80px">单位</td><td align="center" width="80px">单价</td><td align="center" width="80px">折扣</td><td align="center" width="100px">使用位置</td><td align="center" width="80px">数量</td></tr>';
	$("#productDetailList").html(ht);
	productInitData();
	//getProductList();
	   // productQueryAllOrderDetail();
		//getOldProductList();
		//getOrderChangeHistoryList();
	}
	function saveOrderChange(){
		var aoData=[];
		//'01'未审核
		//aoData.push( { "name": "productOrderChange.change_status", "value":"01" } );
		aoData.push( { "name": "productOrderChange.change_type", "value":change_type } );
		aoData.push( { "name": "productOrderChange.order_id", "value":product_info_id } );
		//旧产品信息
		if(change_type!="01"){
			aoData.push( { "name": "productOrderChange.order_detail_id", "value":$("#order_detail_id").val() } );
			aoData.push( { "name": "productOrderChange.old_product_id", "value":$("#old_product_id").val()} );
			aoData.push( { "name": "productOrderChange.old_type_id", "value":$("#old_type_id").val()} );
			aoData.push( { "name": "productOrderChange.old_product_brand", "value":$("#old_product_brand").val()} );
			aoData.push( { "name": "productOrderChange.old_product_name", "value": $("#old_product_name").html()} );
			aoData.push( { "name": "productOrderChange.old_product_model", "value": $("#old_product_model").html() } );
			aoData.push( { "name": "productOrderChange.old_product_standard", "value": $("#old_product_standard").html()} );
			aoData.push( { "name": "productOrderChange.old_unit", "value":$("#old_unit").val() } );
			aoData.push( { "name": "productOrderChange.old_use_position", "value": $("#old_use_position").html()} );
			aoData.push( { "name": "productOrderChange.old_sale_price", "value":$("#old_sale_price").html()} );
			aoData.push( { "name": "productOrderChange.old_amount", "value":$("#old_amount").html()} );
			aoData.push( { "name": "productOrderChange.old_discount", "value": $("#old_discount").html()} );
		}//新产品信息
		if(change_type!='02'){
			aoData.push( { "name": "productOrderChange.new_product_id", "value":$("#new_product_name").val()} );
			aoData.push( { "name": "productOrderChange.new_type_id", "value":$("#new_type_id").val()} );
			aoData.push( { "name": "productOrderChange.new_product_brand", "value":$("#new_product_brand").val()} );
			aoData.push( { "name": "productOrderChange.new_product_name", "value": $("#new_product_name").find("option:selected").text()} );
			aoData.push( { "name": "productOrderChange.new_product_model", "value": $("#new_product_model").html() } );
			aoData.push( { "name": "productOrderChange.new_product_standard", "value": $("#new_product_standard").html()} );
			aoData.push( { "name": "productOrderChange.new_unit", "value":$("#new_unit").val() } );
			aoData.push( { "name": "productOrderChange.new_use_position", "value": $("#new_use_position").val()} );
			aoData.push( { "name": "productOrderChange.new_sale_price", "value":$("#new_sale_price").html()} );
			aoData.push( { "name": "productOrderChange.new_amount", "value":$("#new_amount").val()} );
			aoData.push( { "name": "productOrderChange.new_discount", "value":$("#new_discount").html()} );
		}
		var xurl="/actions/ProductOrder.action?insertProductOrderChange";
		top.sendAjaxRequest(xurl,aoData,ProductOptCallBack);		
	}
	function ProductOptCallBack(obj){
	try{
        if ( obj.status == true ){
            isSaveOK = true;
            top.showInfoWinOK("操作成功");
			$("#changeDiv").hide();
			productDoQuery();
        }else{
            isSaveOK = false;
            top.showInfoWinError("操作失败 "+obj.msg);
        }
       }catch(e){
          top.showInfoWinError("处理异常:"+e.message);
       }
	}
	function openProductOrderPage(){
		if(product_info_id!=''&&product_info_id!=null){
			var xurl="/pages/pro09/proOrderInfo.html?optType=update&id="+product_info_id;
		}else{
			var xurl="/pages/pro09/proOrderInfo.html?optType=insert&require_id="+require_id;
		}

			top.openDialog("产品订单信息",xurl,true,1100,500,openOrderChangeCallBack);

	}
	//------------------------------------------产品报价-------------------------------------
	//新增产品报价
	function addProductQuoteOrder(){
		var xurl="pages/pro09/productQuoteInfo.html?optType=insert&cust_code="+cust_base_info_id;
		top.openDialog("产品报价信息",xurl,true,1100,600,queryProductQuoteOrder);
	}
	//查询产品报价
	function queryProductQuoteOrder(){
		var aoData=[];
		var xurl="/actions/ProductQuote.action?getQuoteHistoryByRequireId";
		aoData.push( { "name": "quote_info.require_id", "value":require_id} );
		top.sendAjaxRequest(xurl,aoData,queryProductQuoteOrderCallBack);
	}
	
	function queryProductQuoteOrderCallBack(obj){
		var ht="";
		ht='<tr class="tr_data"><td>产品报价单号</td>';
		ht+='<td>客户名称</td><td>设计师</td><td>工程地址</td><td>产品总数</td><td>产品总价</td>';
		ht+='<td>报价日期</td><td>报价人</td><td>审批人</td><td>审批结果</td><td>审批日期</td>';
		ht+='<td>产品报价状态</td><td>操作</td></tr>';
		list=obj.aaData;
		if(list&&list.length>0){
			for(var i=0;i<list.length;i++){
				ht+='<tr class="tr_data">';
				ht+='<td>'+list[i].id+'</td>';
				ht+='<td>'+list[i].cust_name+'</td>';
				ht+='<td>'+top.getUserNameByCode(list[i].designerCode)+'</td>';
				ht+='<td>'+list[i].pro_address+'</td>';
				ht+='<td>'+list[i].product_num+'</td>';
				ht+='<td>'+list[i].total+'</td>';
				ht+='<td>'+top.getTimeStr(list[i].quote_date,true)+'</td>';
				ht+='<td>'+list[i].qyote_person+'</td>';
				ht+='<td>'+list[i].examine_user+'</td>';
				ht+='<td>'+top.getCodeName("EXAMINE_STATUS",list[i].examine_statuse)+'</td>';
				ht+='<td>'+top.getTimeStr(list[i].examine_time,true)+'</td>';
				ht+='<td>'+list[i].status+'</td>';
				ht+='<td><a href="javascript:void(0)" onclick="createProductOrder(\''+list[i].id+'\')">生成报价单</a></td>';
				ht+='</tr>';
			}
		}else{
			ht+='<tr class="tr_data"><td colspan="14">暂无数据</td></tr>';
		}
		$("#productQuoteDetailList").html(ht);
		
	}
	
	function createProductOrder(quoteOrderId){
		var aoData=[];
		var xurl="/actions/ProductQuote.action?createProductOrder";
		aoData.push( { "name": "quote_detail.order_id", "value":quoteOrderId} );
		//生成产品订单
		aoData.push( { "name": "product_order.require_id", "value":require_id} );
		aoData.push( { "name": "product_order.designerCode", "value":$("#designer_code").val()} );
		aoData.push( { "name": "product_order.pro_add", "value":$("#view_district").html()} );
		aoData.push( { "name": "product_order.cust_code", "value":$("#cust_code").val()} );
		aoData.push( { "name": "product_order.cust_name", "value":$("#cust_name").val()} );
		top.sendAjaxRequest(xurl,aoData,null);
	
	}