//添加产品定制行
	function addProductCustomize(){   
		$("#productcustomize tr:eq("+Customizetrnum+")").after("<tr class='tr_data' height='35px' id='customize"+Customizetrid+"'><td><input type='text' size='15' id='product_name"+Customizetrid+"'/></td><td><input type='text' size='15' id='money"+Customizetrid+"'/></td><td><input type='text' size='15' id='customize_date"+Customizetrid+"' onclick='new Calendar().show(this);' readonly='true'/></td><td><input type='text' size='15' id='receive_date"+Customizetrid+"' onclick='new Calendar().show(this);' readonly='true'/></td><td><input type='text' size='15' id='install_date"+Customizetrid+"' onclick='new Calendar().show(this);' readonly='true'/></td><td><input type='text' size='15' id='customize_memo"+Customizetrid+"'/></td><td><a href=\"javascript:void(0)\" onclick='saveProductCustomize("+Customizetrid+")'>保存</a>||<a href=\"javascript:void(0)\" onclick='deleteProductCustomize("+Customizetrid+")'>删除</a></td></tr>");
		Customizetrnum++;
		Customizetrid++;
	}
	//删除产品定制行
	function deleteProductCustomize(tid){
		 $("#customize"+tid).remove(); 
		 Customizetrnum--;
	}
	//添加周期控制行
	function addCycleControl(customize_id){   
		var aoData=[];
		aoData.push( { "name": "customize.customize_id", "value": customize_id } );
		xurl="/actions/ProjectOrder.action?getProductCustomize";
		top.sendAjaxRequest(xurl,aoData,queryCycleControlById);
	}
	
	//添加反补情况信息行
	function addChangeInfo(control_id){
		controlid=control_id;
		$("#changeInfotable tr:eq("+changetrnum+")").after("<tr class='tr_data' height='35px' id='change"+changetrid+"'><td><label>"+changetrid+"</label></td><td><textarea id='change_memo"+changetrid+"' rows='2' cols='80'></textarea></td><td><a href=\"javascript:void(0)\" onclick='saveChangeInfo("+changetrid+")'>保存</a>||<a href=\"javascript:void(0)\" onclick='deleteChange("+changetrid+")'>删除</a></td></tr>");
		changetrnum++;
		changetrid++;
	}
	//删除反补情况行
	function deleteChange(tid){
		 $("#change"+tid).remove(); 
		 changetrnum--;
	}
	//添加补款信息
	function saveChangeInfo(tid){
		var aoData=[];
		aoData.push( { "name": "changeinfo.order_id", "value": cust_project_info_id } );
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
			//queryChangeInfo();
        }else{
            isSaveOK = false;
            top.showInfoWinError("操作失败 "+obj.msg);
        }
       }catch(e){
          top.showInfoWinError("处理异常:"+e.message);
       }
	}
/*	//查询补款情况
	function queryChangeInfo(){
		var aoData=[];
		aoData.push( { "name": "changeinfo.order_id", "value": cust_project_info_id } );
		 xurl="/actions/ProjectOrder.action?getChangeInfoList";
		top.sendAjaxRequest(xurl,aoData,createChangeInfotable);
	}
	//生成补款信息的列表
	function createChangeInfotable(obj){
		try{
			changeinfo=obj.aaData;
			var ht="<tr class='tr_data' height='35px'><td width='10%'>序号</td><td align='center' width='70%'>补款详情</td><td width='20%'>操作</td></tr>";
			for(var i=0;i<changeinfo.length;i++ )
			{
				ht+='<tr class="tr_data" height="35px">';
				ht+='<td align="center">';
				ht+=''+(i+1)+'';
				ht+='</td>';
				ht+='<td>';
				ht+=''+changeinfo[i].change_memo+'';
				ht+='</td>';
				ht+='<td>';
				ht+='<a href=\'javascript:void(0)\' onclick="deleteChangeInfo(\''+changeinfo[i].change_id+'\')">删除</a>'
				ht+='</td>';
				ht+='</tr>';
			}
			
			$("#ChangeInfotable").html(ht);
		}catch(e)
		{
			alert(e.message);
		}
	} */
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
		
		aoData.push( { "name": "cyclecontrol.order_id", "value": cust_project_info_id } );
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
		aoData.push( { "name": "cyclecontrol.order_id", "value": cust_project_info_id } );
		 xurl="/actions/ProjectOrder.action?getCycleControlList";
		top.sendAjaxRequest(xurl,aoData,createCycleControltable);
	}
	//生成周期控制信息列表
	function createCycleControltable(obj){
		try{
			cyclecontrol=obj.aaData;
			var ht="<tr class='tr_data' height='35px'><td>原定产品</td><td>变更产品</td><td>变更时间</td><td width='20%'>款项变化</td><td width='20%'>备注</td><td width='20%'>操作</td></tr>";
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
				ht+='<td>';
				ht+='<a href=\'javascript:void(0)\' onclick="addChangeInfo('+cyclecontrol[i].control_id+')">'+'添加补款情况'+'</a>';
				ht+='||';
				ht+='<a href=\'javascript:void(0)\' onclick="deleteControl('+cyclecontrol[i].control_id+')">'+'删除'+'</a>';
				ht+='</td>';
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
		aoData.push( { "name": "customize.order_id", "value": cust_project_info_id } );
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
		aoData.push( { "name": "customize.order_id", "value": cust_project_info_id } );
		 xurl="/actions/ProjectOrder.action?getProductCustomizeList";
		top.sendAjaxRequest(xurl,aoData,createProductCustomizetable);
	}
	//生成查询产品定制信息列表
	function createProductCustomizetable(obj){
		try{
			customize=obj.aaData;
			var ht="<tr class='tr_data' height='35px'><td>产品名称</td><td>款项</td><td>订货时间</td><td>到货时间</td><td>安装时间</td><td>备注</td><td>操作</td></tr>";
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
				ht+='<td>';
				ht+='<a href=\'javascript:void(0)\' onclick="addCycleControl('+customize[i].customize_id+')">'+'变更'+'</a>';
				ht+='||';
				ht+='<a href=\'javascript:void(0)\' onclick="deleteCustomize('+customize[i].customize_id+')">'+'删除'+'</a>';
				ht+='</td>';

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
   	function chooseProductCallBack(){
		try{
			objs = top.getTempValue();
			//var aoData=[];
			var isEmpty=false;
			var ht='';
			if ( selectedProduct.length == 0 ) {
			  isEmpty=true;
			  ht+='<tr class="tr_data" height="25px"><td width="15%" align="center">名称</td><td width="10%" align="center">品牌</td><td width="10%" align="center">型号</td><td width="10%" align="center">规格</td><td width="5%" align="center">数量</td><td width="10%" align="center">单位</td><td width="10%" align="center">单价</td><td width="20%" align="center">使用位置</td><td width="10%" align="center">操作</td></tr>';
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
					ht+='<input type="text" size="5" id="price_'+ch_product.product_id+'" value="'+ch_product.price+'" disabled />';
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
	//添加订单详细
	function AddOrderDetail(){
		    var aoData=[];
			var type_ids="";
			for(var i=0;i<selectedProduct.length;i++){
				var product_id=selectedProduct[i].product_id;
				aoData=[];
				aoData.push( { "name": "orderdetail.id", "value":detailid } );
			    aoData.push( { "name": "orderdetail.order_id", "value":cust_project_info_id } );
				aoData.push( { "name": "orderdetail.type_id", "value":  top.g_GetNumValue(selectedProduct[i].type_id)} );
				aoData.push( { "name": "orderdetail.product_id", "value": top.g_GetNumValue(product_id)} );
				aoData.push( { "name": "orderdetail.product_brand", "value":  $("#product_brand_"+product_id).val()} );
				aoData.push( { "name": "orderdetail.product_name", "value": $("#product_name_"+product_id).val()} );
				aoData.push( { "name": "orderdetail.product_model", "value":  $("#product_model_"+product_id).val() } );
				aoData.push( { "name": "orderdetail.product_standard", "value": $("#product_standard_"+product_id).val() } );
				aoData.push( { "name": "orderdetail.unit", "value":$("#unit_"+product_id).val() } );
				aoData.push( { "name": "orderdetail.use_position", "value": $("#use_position_"+product_id).val() } );
				aoData.push( { "name": "orderdetail.price", "value":top.g_GetNumValue($("#price_"+product_id).val())} );
				aoData.push( { "name": "orderdetail.amount", "value": top.g_GetNumValue($("#amount_"+product_id).val()) } );
				var xurl="/actions/ProjectOrder.action?insertOrderDetail";
				top.sendAjaxRequest(xurl,aoData,null);
			}
			queryAllOrderDetail();
		}	
	//修改订单详细
	function updateDetail(detailid){
		var aoData=[];
		aoData.push( { "name": "orderdetail.id", "value":detailid } );
		aoData.push( { "name": "orderdetail.order_id", "value":cust_project_info_id } );
		aoData.push( { "name": "orderdetail.type_id", "value":  top.g_GetNumValue($("#type_id_"+detailid).val())} );
		aoData.push( { "name": "orderdetail.product_id", "value": top.g_GetNumValue($("#product_id_"+detailid).val())} );
		aoData.push( { "name": "orderdetail.product_brand", "value":  $("#product_brand_"+detailid).val()} );
		aoData.push( { "name": "orderdetail.product_name", "value": $("#product_name_"+detailid).val()} );
		aoData.push( { "name": "orderdetail.product_model", "value":  $("#product_model_"+detailid).val() } );
		aoData.push( { "name": "orderdetail.product_standard", "value": $("#product_standard_"+detailid).val() } );
		aoData.push( { "name": "orderdetail.unit", "value":$("#unit_"+detailid).val() } );
		aoData.push( { "name": "orderdetail.use_position", "value": $("#use_position_"+detailid).val() } );
		aoData.push( { "name": "orderdetail.price", "value":top.g_GetNumValue($("#price_"+detailid).val())} );
		aoData.push( { "name": "orderdetail.amount", "value": top.g_GetNumValue($("#amount_"+detailid).val()) } );
				
		var xurl="/actions/ProjectOrder.action?updateOrderDetail";
		top.sendAjaxRequest(xurl,aoData,saveOrderDetailCallBack);
	}
   
   //调用回调函数---添加订单明细信
   function saveOrderDetailCallBack(obj){
	try{
        if ( obj.status == true ){
            isSaveOK = true;
            top.showInfoWinOK("操作成功");
			queryAllOrderDetail();
        }else{
            isSaveOK = false;
            top.showInfoWinError("操作失败 "+obj.msg);
        }
       }catch(e){
          top.showInfoWinError("处理异常:"+e.message);
       }
	
   }
   //查询所有订单明细中的产品产品信息
   function queryAllOrderDetail() {
		var aoData=[];
		aoData.push( { "name": "orderdetail.order_id", "value": cust_project_info_id } );
		top.sendAjaxRequest("/actions/ProjectOrder.action?getOrderDetailList",aoData,OrderDetailCallback);
   }
   //调用回调函数---查询订单详细信息
   function OrderDetailCallback(obj){
		try{
		 var orderdetail=obj.aaData;
		var ht='<tr class="tr_data" height="25px"><td width="15%" align="center">名称</td><td width="10%" align="center">品牌</td><td width="10%" align="center">型号</td><td width="10%" align="center">规格</td><td width="5%" align="center">数量</td><td width="10%" align="center">单位</td><td width="10%" align="center">单价</td><td width="20%" align="center">使用位置</td><td width="10%" align="center">操作</td></tr>';
		
		if(orderdetail.length>0){
			for (var i=0;i<orderdetail.length;i++) {
				
			    ht+='<tr ';
				ht+='class="tr_data"';
				ht+='height="35px"';
			    ht+='>';
				ht+='<td>';
				ht+='<input type="text" size="5" id="product_name_'+orderdetail[i].id+'" value="'+orderdetail[i].product_name+'" disabled />';
				ht+='</td>';
				ht+='<td>';
				ht+='<input type="text" size="5" id="product_brand_'+orderdetail[i].id+'" value="'+top.getSupplierNameById(orderdetail[i].product_brand)+'" disabled />';
				ht+='</td>';				 
				ht+='<td>';
				ht+='<input type="text" size="5" id="product_model_'+orderdetail[i].id+'" value="'+orderdetail[i].product_model+'" disabled />';
				ht+='</td>';
				ht+='<td>';
				ht+='<input type="text" size="5" id="product_standard_'+orderdetail[i].id+'" value="'+orderdetail[i].product_standard+'" disabled />';
				ht+='</td>';
				ht+='<td>';
				ht+='<input type="text" size="5" id="amount_'+orderdetail[i].id+'" value="'+orderdetail[i].amount+'"/>';
				ht+='</td>';
				ht+='<td>';
				ht+='<input type="text" size="5" id="unit_'+orderdetail[i].id+'" value="'+top.getCodeName("UNIT",orderdetail[i].unit)+'" disabled />';
				ht+='</td>';
				ht+='<td>';
				ht+='<input type="text" size="5" id="price_'+orderdetail[i].id+'" value="'+orderdetail[i].price+'" disabled />';
				ht+='</td>';
				ht+='<td>';
				ht+='<input type="text" size="5" id="use_position_'+orderdetail[i].id+'" value="'+orderdetail[i].use_position+'"/>';
				ht+='</td>';
				ht+='<td>';
				ht+='<a href=\'javascript:void(0)\' onclick="updateDetail(\''+orderdetail[i].id+'\')">修改</a>||';
				ht+='<a href=\'javascript:void(0)\' onclick="deleteSaleDetail(\''+orderdetail[i].id+'\')">删除</a>';
				ht+='<input type="hidden" id="type_id_'+orderdetail[i].id+'" value="'+orderdetail[i].type_id+'"/>';
				ht+='<input type="hidden" id="product_id_'+orderdetail[i].id+'" value="'+orderdetail[i].product_id+'"/>';
				ht+='</td>';
				ht+='</tr>'; 
				}
			}else{
				ht+='<tr ';
				ht+='class="tr_data"';
				ht+='height="35px"';
				ht+='>';
				ht+='<td colspan="9">';
				ht+='暂无任何数据';
				ht+='</td>';
				ht+'</tr>';
				}
				$("#productDetailList").html( ht );
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
   function deleteSaleDetail(did){
        var aoData=[];
		aoData.push( { "name": "orderdetail.id", "value": did } );
		top.sendAjaxRequest("/actions/ProjectOrder.action?deleteOrderDatail",aoData,deleteOrderDetailCallback);
   }
   
   //调用回调函数---订单详情
	function deleteOrderDetailCallback(obj){
       try{
        if ( obj.status == true ){
            isSaveOK = true;
            top.showInfoWinOK("操作成功");
			queryAllOrderDetail();
        }else{
            isSaveOK = false;
            top.showInfoWinError("操作失败 "+obj.msg);
        }
       }catch(e){
          top.showInfoWinError("处理异常:"+e.message);
       }
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
			    top.sendAjaxRequest("/actions/CustInfo.action?getFitmentCustInfo",aoData,projectCustDetailCallback);
			}
		}catch(e){}
   }
    //回调函数---返回查询的数据赋值给文本框
	function projectCustDetailCallback(obj){
	   try{
			if ( obj.status == true ){
			  var o=obj.body;
			  if(o)
				{
					$("#project_cust_code").html(o.code); 
					$("#project_cust_name").html(o.cust_name);
					$("#td_project_cust_manager").html(top.getUserNameByCode(o.cust_manager));
					//$("#project_cust_phone").html(o.cust_phone);
					$("#project_cust_mobile").html(o.cust_mobile);
				}
			  if ( o.requireInfo ) {
					require_id=o.requireInfo.id;
					$("#project_base_addr").html(o.requireInfo.project_addr);
					$("#project_base_district").html(top.getCodeName("DISTRICT",o.requireInfo.district));  
					$("#project_fitment_designer").parent().html('');
					$("#project_fitment_designer").parent().html(top.getUserNameByCode(o.requireInfo.require_manager)); 	
                   //	$("#fitment_designer_code").val(o.requireInfo.require_manager);				
				}
		    }
		}catch(e){}
	}
  

    //根据id删除样板间信息
	function deletemodelhouse(id){
		var aoData=[];
			 aoData.push( { "name": "modelhouse.id", "value": id } );
			 top.sendAjaxRequest("/actions/ProjectOrder.action?deleteModelHouse",aoData,ModelHouseoptCallback);
	}
    //根据id查询样板间信息
	function getmodelhouse(id){
		var aoData=[];
		 aoData.push( { "name": "modelhouse.id", "value": id } );
		 top.sendAjaxRequest("/actions/ProjectOrder.action?getModelHouse",aoData,getmodelhouseoptCallback);
	}
	//调用回调函数---返回单个样板间信息
	function getmodelhouseoptCallback(obj){
		
		try{
			if(obj.status==true){
				var o=obj.body
				
				$("#model_cust_name").parent().html(o.cust_name);
				$("#addr").parent().html(o.addr);
				initCheckedValue( document.getElementsByName("house_style"), o.house_style);
				$("#watching_focus").parent().html(o.watching_focus);
				$("#room_count").parent().html( o.room_count);
				$("#hall_count").parent().html( o.hall_count);
				$("#bath_count").parent().html( o.bath_count);
				$("#modelhouse_project_manager").parent().html(o.project_manager);
				$("#supervision").parent().html(o.supervision);
				
				$( "#tdconstruct_status" ).html( top.getCodeName("CONSTRUCT_STATUS",o.construct_status) );
				$( "#tddistrict" ).html( top.getCodeName("DISTRICT",o.district) );
				$("#tddesigner").html( top.getCodeName("designer",o.designer) );
				modelhouseid=o.id;
			}
		}catch(e)
		{
			alert(e.message);
		}
	}
	//初始化复选框
/*	function initCheckedValue(boxes,values) {
	    if ( !values ) return ;
	    if ( values == null || values == '' ) return ;
		for (var i = 0; i < boxes.length; i++) {
			if ( values.indexOf(boxes[i].value+",") != -1 || values.indexOf(","+boxes[i].value) != -1 ) {
				boxes[i].checked = true;
			}
        }
	}*/
    //查询样板间信息
    function queryModelHouse(){
	var aoData=[];
	 aoData.push( { "name": "modelhouse.order_id", "value": cust_project_info_id } );
	 top.sendAjaxRequest("/actions/ProjectOrder.action?getModelHouseList",aoData,ModelHouseinfooptCallback);
    }
	
	//生成样板间信息表---操作样板间信息
    function ModelHouseinfooptCallback(obj){
	
		try{
		 modelhouse=obj.aaData;
		 var ht="";
			for (var i=0;i<modelhouse.length;i++) {
			  ht+='<table ';
			  ht+='border="1" cellpadding="3" cellspacing="1" width="100%" align="center" style="background-color: #b9d8f3;"';
			  ht+='>';
			  ht+='<tr ';
			  ht+='class="tr_data"';
			  ht+='height="35px"';
			  ht+='>';
			  ht+='<td>';
			  ht+='小区'
			  ht+='</td>';
			  ht+='<td>';
			  ht+=''+top.getCodeName( "DISTRICT", modelhouse[i].district) +''
			  ht+='</td>';
			  ht+='<td>';
			  ht+='地址'
			  ht+='</td>';
			  ht+='<td>';
			  ht+=''+modelhouse[i].addr +''
			  ht+='</td>';
			  ht+='</tr>';
			  
			  ht+='<tr ';
			  ht+='class="tr_data"';
			  ht+='height="35px"';
			  ht+='>';
			  ht+='<td>';
			  ht+='客户姓名'
			  ht+='</td>';
			  ht+='<td>';
			  ht+=''+modelhouse[i].cust_name +''
			  ht+='</td>';
			  ht+='<td>';
			  ht+='房间数量'
			  ht+='</td>';
			  ht+='<td>';
			  ht+=''+modelhouse[i].room_count +''
			  ht+='</td>';
			  ht+='</tr>';
			  
			  ht+='<tr ';
			  ht+='class="tr_data"';
			  ht+='height="35px"';
			  ht+='>';
			  ht+='<td>';
			  ht+='厅数量'
			  ht+='</td>';
			  ht+='<td>';
			  ht+=''+modelhouse[i].hall_count +''
			  ht+='</td>';
			  ht+='<td>';
			  ht+='卫生间数量'
			  ht+='</td>';
			  ht+='<td>';
			  ht+=''+modelhouse[i].bath_count +''
			  ht+='</td>';
			  ht+='</tr>';
		  
			  ht+='<tr ';
			  ht+='class="tr_data"';
			  ht+='height="35px"';
			  ht+='>';
			  ht+='<td>';
			  ht+='风格'
			  ht+='</td>'; 
			  ht+='<td>';
			  ht+=''+modelhouse[i].house_style +''
			  ht+='</td>';
			  ht+='<td>';
			  ht+='设计师'
			  ht+='</td>';
			  ht+='<td>';
			  ht+=''+top.getUserNameByCode( modelhouse[i].designer,designer)+''
			  ht+='</td>';
			  ht+='</tr>';
			  
			  ht+='<tr ';
			  ht+='class="tr_data"';
			  ht+='height="35px"';
			  ht+='>';
			  ht+='<td>';
			  ht+='项目经理'
			  ht+='</td>';
			  ht+='<td>';
			  ht+=''+modelhouse[i].project_manager +''
			  ht+='</td>';
			  ht+='<td>';
			  ht+='监理'
			  ht+='</td>';
			  ht+='<td>';
			  ht+=''+modelhouse[i].supervision +''
			  ht+='</td>';
			  ht+='</tr>';
			  
			  ht+='<tr ';
			  ht+='class="tr_data"';
			  ht+='height="35px"';
			  ht+='>';
			  ht+='<td>';
			  ht+='施工进度'
			  ht+='</td>';
			  ht+='<td>';
			  ht+=''+top.getCodeName( "CONSTRUCT_STATUS",modelhouse[i].construct_status ) +''
			  ht+='</td>';
			  ht+='<td>';
			  ht+='样板间看点'
			  ht+='</td>';
			  ht+='<td>';
			  ht+=''+modelhouse[i].watching_focus +''
			  ht+='</td>';
			  ht+='</tr>';
			  
			 /* ht+='<tr ';
			  ht+='class="tr_data"';
			  ht+='height="35px"';
			  ht+='>';
			  ht+='<td colspan="4" align="right">';
			  ht+='<a href=\'javascript:void(0)\' onclick="deletemodelhouse(\''+modelhouse[i].id+'\')">'+'删除'+'</a>'
			  ht+='</td>';
			  ht+='</tr>'; 
			  ht+='</table>';
			  ht+='<br/>'*/
		  }
		  $("#modelhouseList").html( ht );
		}catch(e){
		}
   }
	//保存信息---样板间信息
	function saveModelHouse(){
		var aoData=[];
		aoData.push( { "name": "modelhouse.id", "value": modelhouseid } );	
		aoData.push( { "name": "modelhouse.order_id", "value": cust_project_info_id } );
		aoData.push( { "name": "modelhouse.cust_name", "value": $("#model_cust_name").val() } );
		aoData.push( { "name": "modelhouse.district", "value": $("#district").val() } );
		aoData.push( { "name": "modelhouse.addr", "value": $("#addr").val() } );
		aoData.push( { "name": "modelhouse.house_style", "value": top.getAllCheckedValue( document.getElementsByName("house_style") ) } );
		aoData.push( { "name": "modelhouse.designer", "value": $("#designer").val() } );
		aoData.push( { "name": "modelhouse.project_manager", "value": $("#modelhouse_project_manager").val() } );
		aoData.push( { "name": "modelhouse.supervision", "value": $("#supervision").val() } );
		aoData.push( { "name": "modelhouse.construct_status", "value": $("#construct_status").val() } );
		aoData.push( { "name": "modelhouse.watching_focus", "value": $("#watching_focus").val() } );
		aoData.push( { "name": "modelhouse.room_count", "value": top.g_GetNumValue($("#room_count").val()) } );
		aoData.push( { "name": "modelhouse.hall_count", "value": top.g_GetNumValue($("#hall_count").val() )} );
		aoData.push( { "name": "modelhouse.bath_count", "value": top.g_GetNumValue($("#bath_count").val() )} );
		
		var xurl="/actions/ProjectOrder.action?saveModelHouse";
		top.sendAjaxRequest(xurl,aoData,ModelHouseoptCallback);
	}
	
	//调用回调函数---样板间信息
	function ModelHouseoptCallback(obj){
       try{
        if ( obj.status == true ){
            isSaveOK = true;
            top.showInfoWinOK("操作成功");
			queryModelHouse();
        }else{
            isSaveOK = false;
            top.showInfoWinError("操作失败 "+obj.msg);
        }
       }catch(e){
          top.showInfoWinError("处理异常:"+e.message);
       }
   } 
	//保存信息---竣工信息
	function saveProjectCompleted(){
		var aoData=[];
		  // 检查
		var checkMsg = checkProjectCompleted();
	    if ( checkMsg != '' ) {
	       top.showInfoWinWarn(checkMsg);
           return ;
	    }
		aoData.push( { "name": "order.order_id", "value": cust_project_info_id } );
		aoData.push( { "name": "completed.order_id", "value": cust_project_info_id } );
		aoData.push( { "name": "completed.delay_situation", "value": $("#delay_situation").val() } );
		aoData.push( { "name": "completed.finish_check_person", "value": $("#finish_check_person").val() } );
		aoData.push( { "name": "completed.change_project", "value": $("#completed_change_project").val() } );
		aoData.push( { "name": "completed.scene_persons", "value": $("#scene_persons").val() } );
		aoData.push( { "name": "completed.final_payment_detail", "value": $("#final_payment_detail").val() } );
		aoData.push( { "name": "completed.final_payment", "value": top.g_GetNumValue($("#final_payment").val()) } );
		aoData.push( { "name": "completed.project_delay_time", "value": top.toTimestamp($("#project_delay_time").val() )} );
		aoData.push( { "name": "completed.product_delay_time", "value":top.toTimestamp( $("#product_delay_time").val()) } );
		aoData.push( { "name": "completed.finish_check_time", "value": top.toTimestamp($("#finish_check_time").val()) } );
		aoData.push( { "name": "completed.cust_check_time", "value": top.toTimestamp($("#cust_check_time").val()) } );
		aoData.push( { "name": "completed.final_payment_time", "value": top.toTimestamp($("#final_payment_time").val() )} );
		aoData.push( { "name": "completed.warranty_time", "value": top.toTimestamp($("#warranty_time").val()) } );
		aoData.push( { "name": "completed.opt_user", "value": $("#projectcompleted_opt_user").val() } );

		var xurl="/actions/ProjectOrder.action?saveProjectCompleted";
		 top.sendAjaxRequest(xurl,aoData,optCallback);	
   }
	//校验竣工信息
	function checkProjectCompleted(){	
		var msg="";
		if ( $("#final_payment").val() != '' && !IsFloat( $("#final_payment").val() )) msg += "[尾款金额]应为数字类型<br>";
		return msg;
   }
    //调用回调函数---竣工信息
	function optCallback(obj){
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
  
    //保存信息---项目变更
	function saveProjectChange(){
		var aoData=[];
		aoData.push( { "name": "order.order_id", "value": $("#order_id").val() } );
		aoData.push( { "name": "projectchange.order_id", "value":cust_project_info_id} );
		aoData.push( { "name": "projectchange.change_project", "value": $("#change_project").val() } );
		aoData.push( { "name": "projectchange.rectification_project", "value": $("#rectification_project").val() } );
		aoData.push( { "name": "projectchange.reason_and_cycle", "value": $("#reason_and_cycle").val() } );
		aoData.push( { "name": "projectchange.change_result", "value": $("#change_result").val() } );
		aoData.push( { "name": "projectchange.install_and_check", "value": $("#install_and_check").val() } );
		aoData.push( { "name": "projectchange.change_project_main", "value": $("#change_project_main").val() } );
		aoData.push( { "name": "projectchange.change_project_soft", "value": $("#change_project_soft").val() } );
		aoData.push( { "name": "projectchange.rectification_project_main", "value": $("#rectification_project_main").val() } );
		aoData.push( { "name": "projectchange.rectification_project_soft", "value": $("#rectification_project_soft").val() } );
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
  
  //保存信息---施工记录
	function saveConstruction(){
		var aoData=[];
		aoData.push( { "name": "order.order_id", "value": cust_project_info_id } );
		aoData.push( { "name": "construction.order_id", "value":cust_project_info_id} );
		aoData.push( { "name": "construction.building_site_sales", "value": $("#building_site_sales").val() } );
		aoData.push( { "name": "construction.is_provide_paper", "value": $("#is_provide_paper").val() } );
		aoData.push( { "name": "construction.is_drawing_paper", "value": $("#is_drawing_paper").val() } );
		aoData.push( { "name": "construction.midterm_is_delay", "value": $("#midterm_is_delay").val() } );
		aoData.push( { "name": "construction.is_delay_bill", "value": $("#is_delay_bill").val() } );
		aoData.push( { "name": "construction.delay_reason", "value": $("#delay_reason").val() } );
		aoData.push( { "name": "construction.opt_user", "value": $("#construction_opt_user").val() } );
		aoData.push( { "name": "construction.snapline_time", "value": top.toTimestamp($("#snapline_time").val()) } );
		aoData.push( { "name": "construction.hydroelectricity_check_time", "value": top.toTimestamp($("#hydroelectricity_check_time").val() )} );
		aoData.push( { "name": "construction.collect_paper_time", "value":top.toTimestamp( $("#collect_paper_time").val()) } );
		aoData.push( { "name": "construction.midterm_check_time", "value": top.toTimestamp($("#midterm_check_time").val()) } );
		aoData.push( { "name": "construction.woodworker_check_time", "value": top.toTimestamp($("#woodworker_check_time").val()) } );
		aoData.push( { "name": "construction.bricklayer_check_time", "value": top.toTimestamp($("#bricklayer_check_time").val() )} );
		aoData.push( { "name": "construction.oiler_check_time", "value": top.toTimestamp($("#oiler_check_time").val()) } );
		
		var xurl="/actions/ProjectOrder.action?saveConstructionInfo";
		 top.sendAjaxRequest(xurl,aoData,ConstructionoptCallback);
   }
	//调用回调函数---施工记录
    function ConstructionoptCallback(obj){
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
  
  //保存信息---开工记录
	function saveStartOperation(){
		var aoData=[];
			aoData.push( { "name": "projectOrder.project_order_id", "value": cust_project_info_id } );
			aoData.push( { "name": "startoperation.order_id", "value":cust_project_info_id } );
			aoData.push( { "name": "startoperation.project_add", "value": $("#project_add").val() } );
			aoData.push( { "name": "startoperation.product_add", "value": $("#product_add").val() } );
			aoData.push( { "name": "startoperation.p_is_change", "value": $("#p_is_change").val() } );
			aoData.push( { "name": "startoperation.is_effect_design", "value": $("#is_effect_design").val() } );
			aoData.push( { "name": "startoperation.cust_is_know", "value": $("#cust_is_know").val() } );
			aoData.push( { "name": "startoperation.is_difference", "value": $("#is_difference").val() } );
			aoData.push( { "name": "startoperation.project_is_manager", "value": $("#project_is_manager").val() } );
			aoData.push( { "name": "startoperation.product_is_manager", "value": $("#product_is_manager").val() } );
			aoData.push( { "name": "startoperation.y_persons", "value": $("#y_persons").val() } );
			aoData.push( { "name": "startoperation.y_situation", "value": $("#y_situation").val() } );
			aoData.push( { "name": "startoperation.cust_engineering", "value": $("#cust_engineering").val() } );
			aoData.push( { "name": "startoperation.is_hand_cust", "value": $("#is_hand_cust").val() } );
			aoData.push( { "name": "startoperation.x_persons", "value": $("#x_persons").val() } );
			aoData.push( { "name": "startoperation.x_situation", "value": $("#x_situation").val() } );
			aoData.push( { "name": "startoperation.is_check_accept", "value": $("#is_check_accept").val() } );
			aoData.push( { "name": "startoperation.opt_user", "value": $("#startoperation_opt_user").val() } );
			aoData.push( { "name": "startoperation.y_time", "value": top.toTimestamp($("#y_time").val() )} );
			aoData.push( { "name": "startoperation.x_time", "value":top.toTimestamp( $("#x_time").val()) } );
			aoData.push( { "name": "startoperation.come_time", "value": top.toTimestamp($("#come_time").val()) } );
			aoData.push( { "name": "startoperation.update_time", "value": top.toTimestamp($("#update_time").val()) } );
			
			var xurl="/actions/ProjectOrder.action?saveStartOperation";
			top.sendAjaxRequest(xurl,aoData,StartOperationoptCallback);
	}
	//调用回调函数---开工记录
    function StartOperationoptCallback(obj){
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
	
	// 保存基本信息
    function projectDoSubmit(){
	
     var aoData=[];
		
		  // 检查
	var checkMsg = projectCheckFormDoSubmit();
	    if ( checkMsg != '' ) {
	       top.showInfoWinWarn(checkMsg);
           return ;
	    }
		//订单基本信息信息

		aoData.push( { "name": "order.order_id", "value": cust_project_info_id } );
		aoData.push( { "name": "order.require_id", "value": require_id } );
		aoData.push( { "name": "order.cust_code", "value": $("#project_cust_code").html() } );
		aoData.push( { "name": "order.order_type", "value": $("#order_type").val() } );
		aoData.push( { "name": "order.fitment_designer", "value": $("#fitment_designer_code").val() } );
		aoData.push( { "name": "order.engineer_manager", "value": $("#engineer_manager").val() } );
		aoData.push( { "name": "order.project_manager", "value": $("#project_manager").val() } );
		aoData.push( { "name": "order.product_designer", "value": $("#product_designer").val() } );
		aoData.push( { "name": "order.cust_manager", "value": $("#cust_manager").html() } );
		aoData.push( { "name": "order.pay_money_date", "value": top.toTimestamp($("#pay_money_date").val()) } );
		aoData.push( { "name": "order.status", "value": $("#status").val() } );
		aoData.push( { "name": "order.total_amount", "value": top.g_GetNumValue($("#total_amount").val()) } );
		aoData.push( { "name": "order.earnest_money", "value": top.g_GetNumValue($("#earnest_money").val()) } );
		aoData.push( { "name": "order.ifdelay", "value":$("#ifdelay").val() } );
		aoData.push( { "name": "order.pro_status", "value": $("#pro_status").val() } );
		
	var xurl="/actions/ProjectOrder.action?updateOrderInfo";
	 if ( cust_project_info_id == 0 ) {
	    xurl="/actions/ProjectOrder.action?insertOrderInfo";
	 }
     top.sendAjaxRequest(xurl,aoData,projectOptCallback);
   }
	//校验订单基本信息
	function projectCheckFormDoSubmit(){	
		var msg="";
		if ( $("#total_amount").val() != '' && !IsFloat( $("#total_amount").val() )) msg += "[订单总额]应为数字类型<br>";
		if ( $("#earnest_money").val() != '' && !IsFloat( $("#earnest_money").val() )) msg += "[已收金额]应为数字类型<br>";
		//if ( $("#amount").val() != '' && !IsFloat( $("#amount").val() )) msg +="[MTX累积剂量]应为数字类型<br>";
		//msg += checkString($("#order_id").val(),true,64,"订单号");
		//msg += checkString($("#project_cust_code").val(),true,20,"客户编号");
		msg += checkString($("#order_type").val(),true,20,"订单类型");
		return msg;
   }
	//调用回调函数---订单基本信息
    function projectOptCallback(obj){
       try{
        if ( obj.status == true ){
            isSaveOK = true;
            top.showInfoWinOK("操作成功");
			
			if ( cust_project_info_id == '' ) {
			  cust_project_info_id=obj.msg;
			  $("#order_id").html( cust_project_info_id );
			}
        }else{
            isSaveOK = false;
            top.showInfoWinError("操作失败 "+obj.msg);
        }
       }catch(e){
          top.showInfoWinError("处理异常:"+e.message);
       }
   }
   
	function projectInfoCallback(obj){
	   try{
        if ( obj.status == true ){
		  var o=obj.body;
			//订单信息
			if(o){	
			    cust_base_info_id=o.cust_code;
				cust_project_info_id=o.order_id;
				//查询施工图附件
				selectAllUploadFile('projectFilePathList',cust_project_info_id);
				$("#project_cust_code").html(o.cust_code);
				$("#order_id").html(o.order_id);
				$("#tdorder_type").html(top.getCodeName("ORDER_TYPE",o.order_type));
				//$("#fitment_designer").val(o.fitment_designer);
				$("#tdengineer_manager").html(top.getUserNameByCode(o.engineer_manager));
				$("#tdproject_manager").html(top.getUserNameByCode(o.project_manager));
				$("#tdproduct_designer").html(top.getUserNameByCode(o.product_designer));
				//$("#cust_manager").parent().html(o.cust_manager);
				$("#total_amount").parent().html( o.total_amount);
				$("#earnest_money").parent().html( o.earnest_money);
				require_id=o.require_id;
				$("#pay_money_date").parent().html( top.getTimeStr( o.pay_money_date, true ) );
				$("#tdstatus").html( top.getCodeName("ORDER_STATUS",o.status) );
				$("#tdifdelay").html( top.getCodeName("ISYESORNO",o.ifdelay) );
				$("#tdpro_status").html( top.getCodeName("PRO_STATUS",o.pro_status) );
				 
				 getChangeList();
				 queryModelHouse();
				 queryAllOrderDetail();
				 queryAllProductCustomize();
				 queryCycleControl();
				 //queryChangeInfo();
				 queryConstructionStatus();
			if(o.construction){
				$("#building_site_sales").parent().html(o.construction.building_site_sales);
				$("#delay_reason").parent().html(o.construction.delay_reason);
				$("#construction_opt_user").parent().html(o.construction.opt_user);
				$("#id").parent().html( top.getTimeStr( o.construction.id, true ) );
				$("#snapline_time").parent().html( top.getTimeStr( o.construction.snapline_time, true ) );
				$("#hydroelectricity_check_time").parent().html( top.getTimeStr( o.construction.hydroelectricity_check_time, true ) );
				$("#collect_paper_time").parent().html( top.getTimeStr( o.construction.collect_paper_time, true ) );
				$("#midterm_check_time").parent().html( top.getTimeStr( o.construction.midterm_check_time, true ) );
				$("#woodworker_check_time").parent().html( top.getTimeStr( o.construction.woodworker_check_time, true ) );
				$("#bricklayer_check_time").parent().html( top.getTimeStr( o.construction.bricklayer_check_time, true ) );
				$("#oiler_check_time").parent().html( top.getTimeStr( o.construction.oiler_check_time, true ) );
				$("#construction_update_time").parent().html( top.getTimeStr( o.construction.update_time, true ) );
				
				$( "#span_is_provide_paper" ).html( top.getCodeName("ISYESORNO",o.construction.is_provide_paper) );
				$( "#span_is_drawing_paper" ).html( top.getCodeName("ISYESORNO",o.construction.is_drawing_paper) );
				$( "#span_midterm_is_delay" ).html( top.getCodeName("ISYESORNO",o.construction.midterm_is_delay) );
				$( "#span_is_delay_bill" ).html( top.getCodeName("ISYESORNO",o.construction.is_delay_bill) );
			}
			if(o.startoperation){
				$("#project_add").parent().html(o.startoperation.project_add);
				$("#product_add").parent().html(o.startoperation.product_add);
				$("#y_persons").parent().html(o.startoperation.y_persons);
				$("#y_situation").parent().html(o.startoperation.y_situation);
				$("#cust_engineering").parent().html(o.startoperation.cust_engineering);
				$("#x_persons").parent().html(o.startoperation.x_persons);
				$("#x_situation").parent().html(o.startoperation.x_situation);
				$("#startoperation_opt_user").parent().html(o.startoperation.opt_user);
				$("#id").parent().html( top.getTimeStr( o.startoperation.id, true ) );
				$("#y_time").parent().html( top.getTimeStr( o.startoperation.y_time, true ) );
				$("#x_time").parent().html( top.getTimeStr( o.startoperation.x_time, true ) );
				$("#come_time").parent().html( top.getTimeStr( o.startoperation.come_time, true ) );
				$("#startoperation_update_time").parent().html( top.getTimeStr( o.startoperation.update_time, true ) );
				
				$( "#span_p_is_change" ).html( top.getCodeName("ISYESORNO",o.startoperation.p_is_change) );
				$( "#span_is_effect_design" ).html( top.getCodeName("ISYESORNO",false,o.startoperation.is_effect_design) );
				$( "#span_cust_is_know" ).html( top.getCodeName("ISYESORNO",o.startoperation.cust_is_know) );
				$( "#span_is_difference" ).html( top.getCodeName("ISYESORNO",o.startoperation.is_difference) );
				$( "#span_project_is_manager" ).html( top.getCodeName("ISYESORNO",o.startoperation.project_is_manager) );
				$( "#span_product_is_manager" ).html( top.getCodeName("ISYESORNO",o.startoperation.product_is_manager) );
				$( "#span_is_hand_cust" ).html( top.getCodeName("ISYESORNO",o.startoperation.is_hand_cust) );
				$( "#span_is_check_accept" ).html( top.getCodeName("ISYESORNO",o.startoperation.is_check_accept) );
			}
			if(o.projectchange){
				$("#change_project_main").parent().html(o.projectchange.change_project_main);
				$("#change_project_soft").parent().html(o.projectchange.change_project_soft);
				$("#rectification_project_main").parent().html(o.projectchange.rectification_project_main);
				$("#rectification_project_soft").parent().html(o.projectchange.rectification_project_soft);
				$("#change_project").parent().html(o.projectchange.change_project);
				$("#rectification_project").parent().html(o.projectchange.rectification_project);
				$("#reason_and_cycle").parent().html(o.projectchange.reason_and_cycle);
				$("#change_result").parent().html(o.projectchange.change_result);
				$("#install_and_check").parent().html(o.projectchange.install_and_check);
				$("#change_opt_user").parent().html(o.projectchange.opt_user);
				$("#change_update_time").parent().html( top.getTimeStr( o.projectchange.update_time, true ) );
			}
			if(o.completed){
				$("#delay_situation").parent().html(o.completed.delay_situation);
				$("#finish_check_person").parent().html(o.completed.finish_check_person);
				$("#completed_change_project").parent().html(o.completed.change_project);
				$("#scene_persons").parent().html(o.completed.scene_persons);
				$("#final_payment_detail").parent().html(o.completed.final_payment_detail);
				$("#projectcompleted_opt_user").parent().html(o.completed.opt_user);
				$("#final_payment").parent().html( o.completed.final_payment);
				$("#id").parent().html( top.getTimeStr( o.completed.id, true ) );
				$("#projectcompleted_update_time").parent().html( top.getTimeStr( o.completed.update_time, true ) );
				$("#project_delay_time").parent().html( top.getTimeStr( o.completed.project_delay_time, true ) );
				$("#product_delay_time").parent().html( top.getTimeStr( o.completed.product_delay_time, true ) );
				$("#finish_check_time").parent().html( top.getTimeStr( o.completed.finish_check_time, true ) );
				$("#cust_check_time").parent().html( top.getTimeStr( o.completed.cust_check_time, true ) );
				$("#final_payment_time").parent().html( top.getTimeStr( o.completed.final_payment_time, true ) );
				$("#warranty_time").parent().html( top.getTimeStr( o.completed.warranty_time, true ) );
			}
			if(o.conDrawing){
				constructId=o.conDrawing.check_id;
				$("#drawing_assessor").parent().html(o.conDrawing.drawing_assessor);
				$("#project_goover_explain").parent().html(o.conDrawing.goover_explain);
				$("#project_goover_date").parent().html(top.getTimeStr(o.conDrawing.goover_date,true));
				$("#project_check_date").parent().html(top.getTimeStr(o.conDrawing.check_date,true));
				$("#total_deduct_marks").parent().html(o.conDrawing.total_deduct_marks);
				$("#project_total_score").parent().html(o.conDrawing.total_score);
				$("#project_time_limit").parent().html(o.conDrawing.time_limit);
				$("#construct_pro1_score").parent().html(o.conDrawing.check_pro1_score);
				$("#construct_pro2_score").parent().html(o.conDrawing.check_pro2_score);
				$("#construct_pro3_score").parent().html(o.conDrawing.check_pro3_score);
				$("#construct_pro4_score").parent().html(o.conDrawing.check_pro4_score);
				$("#construct_pro5_score").parent().html(o.conDrawing.check_pro5_score);
				$("#construct_pro6_score").parent().html(o.conDrawing.check_pro6_score);
				$("#construct_pro7_score").parent().html(o.conDrawing.check_pro7_score);
				$("#construct_pro8_score").parent().html(o.conDrawing.check_pro8_score);
				$("#construct_pro9_score").parent().html(o.conDrawing.check_pro9_score);
				$("#construct_pro10_score").parent().html(o.conDrawing.check_pro10_score);
				$("#construct_pro11_score").parent().html(o.conDrawing.check_pro11_score);
				$("#construct_pro12_score").parent().html(o.conDrawing.check_pro12_score);
				$("#construct_pro13_score").parent().html(o.conDrawing.check_pro13_score);
				$("#construct_pro14_score").parent().html(o.conDrawing.check_pro14_score);
				$("#construct_pro15_score").parent().html(o.conDrawing.check_pro15_score);
				$("#construct_pro16_score").parent().html(o.conDrawing.check_pro16_score);
				$("#construct_pro17_score").parent().html(o.conDrawing.check_pro17_score);
				$("#construct_pro18_score").parent().html(o.conDrawing.check_pro18_score);
				$("#construct_pro19_score").parent().html(o.conDrawing.check_pro19_score);
				$("#construct_pro20_score").parent().html(o.conDrawing.check_pro20_score);
				$("#construct_pro1_num").parent().html(o.conDrawing.check_pro1_num);
				$("#construct_pro2_num").parent().html(o.conDrawing.check_pro2_num);
				$("#construct_pro3_num").parent().html(o.conDrawing.check_pro3_num);
				$("#construct_pro4_num").parent().html(o.conDrawing.check_pro4_num);
				$("#construct_pro5_num").parent().html(o.conDrawing.check_pro5_num);
				$("#construct_pro6_num").parent().html(o.conDrawing.check_pro6_num);
				$("#construct_pro7_num").parent().html(o.conDrawing.check_pro7_num);
				$("#construct_pro8_num").parent().html(o.conDrawing.check_pro8_num);
				$("#construct_pro9_num").parent().html(o.conDrawing.check_pro9_num);
				$("#construct_pro10_num").parent().html(o.conDrawing.check_pro10_num);
				$("#construct_pro11_num").parent().html(o.conDrawing.check_pro11_num);
				$("#construct_pro12_num").parent().html(o.conDrawing.check_pro12_num);
				$("#construct_pro13_num").parent().html(o.conDrawing.check_pro13_num);
				$("#construct_pro14_num").parent().html(o.conDrawing.check_pro14_num);
				$("#construct_pro15_num").parent().html(o.conDrawing.check_pro15_num);
				$("#construct_pro16_num").parent().html(o.conDrawing.check_pro16_num);
				$("#construct_pro17_num").parent().html(o.conDrawing.check_pro17_num);
				$("#construct_pro18_num").parent().html(o.conDrawing.check_pro18_num);
				$("#construct_pro19_num").parent().html(o.conDrawing.check_pro19_num);
				$("#construct_pro20_num").parent().html(o.conDrawing.check_pro20_num);
			}
			// 查询需求信息
			}else{
				//查询结果为空，按钮显示创建
				$("#projectOrderEditBut").html("创建");
			}
			var aoData=[];
			aoData.push( { "name": "custInfo.code", "value": cust_base_info_id } );
			top.sendAjaxRequest("/actions/CustInfo.action?getFitmentCustInfo",aoData,projectCustDetailCallback);
		}else{
		  $("#projectOrderEditBut").html("创建");
          top.showInfoWinError("操作失败");
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
	
	//初始化
	function projectInitData(){
		optType=top.getUrlParam(document.URL,"optType");
		$("#projectDiv select").hide();
		$("#projectDiv input").hide();
		$("#projectDiv textarea").hide();
		//$("#tdcust_manager").html(top.getUserListByRole('custManager','cust_manager',true));
		//$("#tdproject_manager").html(top.getUserListByRole('project_manager','project_manager',true));
		//$("#tdmodelhouse_project_manager").html(top.getUserListByRole('project_manager','modelhouse_project_manager',true));
		// 样板间新增页面里的工程监理
		//$("#tdsupervision").html(top.getUserListByRole('engineer_manager','supervision',true));
		// 基本信息里的工程监理
		//$("#tdengineer_manager").html(top.getUserListByRole('engineer_manager','engineer_manager',true));
		//$("#tdproduct_designer").html(top.getUserListByRole('product_designer','product_designer',true));
		//$("#tddesigner").html( top.getAllDesignerSelect("designer") );
	    if ( optType=='update'){
			$("#chooseCust").hide();
			//cust_project_info_id=top.getUrlParam(document.URL,"id");
			//$("#order_id").val(cust_project_info_id);
			//getChangeList();
			var aoData=[];
			if(cust_project_info_id!=''){
				aoData.push( { "name": "order.order_id", "value": cust_project_info_id } );
				top.sendAjaxRequest("/actions/ProjectOrder.action?orderCustInfoByOrderId",aoData,projectInfoCallback);
			}else{//判断页面入口 若cust_project_info_id为空则根据require_id查询
				if(require_id!=''){
					aoData.push( { "name": "order.require_id", "value":require_id } );
					top.sendAjaxRequest("/actions/ProjectOrder.action?orderCustInfoByRequireId",aoData,projectInfoCallback);
				}
			}
		} else{
			$("#projectOrderEditBut").html("创建");
			 $( "#tdorder_type" ).html( top.getCodeSelectHtml("ORDER_TYPE","order_type",false) );
			 $( "#span_is_provide_paper" ).html( top.getCodeSelectHtml("ISYESORNO","is_provide_paper",false) );
			 $( "#span_is_drawing_paper" ).html( top.getCodeSelectHtml("ISYESORNO","is_drawing_paper",false) );
			 $( "#span_midterm_is_delay" ).html( top.getCodeSelectHtml("ISYESORNO","midterm_is_delay",false) );
			 $( "#span_is_delay_bill" ).html( top.getCodeSelectHtml("ISYESORNO","is_delay_bill",false) );
			 
			 $( "#span_p_is_change" ).html( top.getCodeSelectHtml("ISYESORNO","p_is_change",false) );
			 $( "#span_is_effect_design" ).html( top.getCodeSelectHtml("ISYESORNO","is_effect_design",false) );
			 $( "#span_cust_is_know" ).html( top.getCodeSelectHtml("ISYESORNO","cust_is_know",false) );
			 $( "#span_is_difference" ).html( top.getCodeSelectHtml("ISYESORNO","is_difference",false) );
			 $( "#span_project_is_manager" ).html( top.getCodeSelectHtml("ISYESORNO","project_is_manager",false) );
			 $( "#span_product_is_manager" ).html( top.getCodeSelectHtml("ISYESORNO","product_is_manager",false) );
			 $( "#span_is_hand_cust" ).html( top.getCodeSelectHtml("ISYESORNO","is_hand_cust",false) );
			 $( "#span_is_check_accept" ).html( top.getCodeSelectHtml("ISYESORNO","is_check_accept",false) );
			 $( "#tdconstruct_status" ).html( top.getCodeSelectHtml("CONSTRUCT_STATUS","construct_status",false) );
			 $( "#tdstatus" ).html( top.getCodeSelectHtml("ORDER_STATUS","status",false) );
			 $("#tdifdelay").html( top.getCodeSelectHtml("ISYESORNO","ifdelay",false) );
			 $("#tdpro_status").html( top.getCodeSelectHtml("PRO_STATUS","pro_status",false) );
			$("#order_id").val( "系统自动生成" );
		}
			$( "#tddistrict" ).html( top.getCodeSelectHtml("DISTRICT","district",false) );
		 $( "#tdconstruct_status" ).html( top.getCodeSelectHtml("CONSTRUCT_STATUS","construct_status",false) );
		//查询所有的上传附件
		//selectAllUploadFile(cust_project_info_id);
		//interId = setInterval("selectAllUploadFile()",1000);
    }
    //工程订单信息管理
	function openProjectOrderPage(){
		if(cust_project_info_id!=''&&cust_project_info_id!=null){
			var xurl="/pages/pro09/orderInfo.html?optType=update&id="+cust_project_info_id;
		}else{
			var xurl="/pages/pro09/orderInfo.html?optType=insert&require_id="+require_id;
		}
			openDialog("工程订单信息",xurl,true,950,500,initCustProjectInfo);
	
	}
	//添加施工进度
	function addConstructionStatus(){
		var xurl="/pages/pro09/constructionStatus.html?optType=insert&id="+cust_project_info_id;
		openDialog("添加施工进度",xurl,true,600,400,saveConstructionCallBack);
	}
	//修改施工进度
	function updateConstructionStatus(cid){
		var xurl="/pages/pro09/constructionStatus.html?optType=update&cid="+cid;
		openDialog("修改施工进度",xurl,true,600,400,saveConstructionCallBack);
	}
	function saveConstructionCallBack(){
		try{
			var obj = top.getTempValue();
			if(obj.isSaveOK){
			  queryConstructionStatus();
			  queryConstructionTableList();
			}
		}catch(e){
			alert(e.message);
		}
	}
	//查询所有的项目进度信息
	function queryConstructionStatus(){
		// 查询需求信息
		var aoData=[];
		aoData.push( { "name": "constructionstatus.order_id", "value": cust_project_info_id } );
		top.sendAjaxRequest("/actions/ProjectOrder.action?getConstructionStatusList",aoData,createConstructionStatusTable);
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
	
	//生成项目进度信息列表
	function createConstructionStatusTable(obj){
		try{
		 constructionstatus=obj.aaData;
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
		 for (var i=0;i<constructionstatus.length;i++) {
			countMaxMinTime(constructionstatus[i].plan_end_date);
		    countMaxMinTime(constructionstatus[i].plan_start_date);
			countMaxMinTime(constructionstatus[i].fact_start_date);
			countMaxMinTime(constructionstatus[i].fact_end_date);
			countMaxMinTime(constructionstatus[i].apply_delay_date);
		 }
		 temp=(maxTime-minTime)/(24*60*60000);
		 everyday=633/temp;
		 for (var i=0;i<constructionstatus.length;i++) {
			dis_days=(constructionstatus[i].plan_end_date-constructionstatus[i].plan_start_date)/(24*60*60000);
			fact_days=(constructionstatus[i].fact_end_date-constructionstatus[i].fact_start_date)/(24*60*60000);

			planfirstday=minTime;
			ht+='<tr class="tr_data"  height="25px">';
			ht+=' <td align="center"  width="87px">';
			ht+='<a href=\'javascript:void(0)\' onclick="updateConstructionStatus(\''+constructionstatus[i].id+'\')">'+constructionstatus[i].project_name+'</a>';
			ht+='</td>';
			ht+=' <td align="center" width="633px">';
			ht+='<table width="633px">';
			ht+='<tr>';
			ht+='<td width="633px">';
			
			leftPx=(constructionstatus[i].plan_start_date-planfirstday)/(24*60*60000)*everyday; 
			
			planwidth=everyday*dis_days;
			ht+='<div id="chartA'+i+'" onmouseover="showDetail(\'A\','+i+','+constructionstatus[i].plan_start_date+','+constructionstatus[i].plan_end_date
			+','+constructionstatus[i].fact_start_date+','+constructionstatus[i].apply_delay_date+','+constructionstatus[i].fact_end_date+','
			+constructionstatus[i].status+')" onmouseout="divHide()" style="margin:0px 0px 10px '+leftPx+'px;width:'+planwidth+'px;height:20px;background-color:blue;">';
			ht+='</div>';
			ht+='</td>';
			ht+='</tr>';
			ht+='<tr>';
			ht+='<td width="633px">';
			
			trColor="green";
			if ( constructionstatus[i].status=='1' ) {
			  trColor="yellow";
			} else if ( constructionstatus[i].status=='2' ) {
			  trColor="green";
			}
			
			leftPx=(constructionstatus[i].fact_start_date-planfirstday)/(24*60*60000)*everyday; 
			factwidth=everyday*fact_days;
			ht+='<div id="chartB'+i+'" onmouseover="showDetail(\'B\','+i+','+constructionstatus[i].plan_start_date+','+constructionstatus[i].plan_end_date
			+','+constructionstatus[i].fact_start_date+','+constructionstatus[i].apply_delay_date+','+constructionstatus[i].fact_end_date+','
			+constructionstatus[i].status+')" onmouseout="divHide()" style="margin:0px 0px 10px '+leftPx+'px;width:'+factwidth+'px;height:20px;background-color:'+trColor+';">';
			ht+='</div>';
			ht+='</td>';
			ht+='</tr>';
			ht+='</table>';
			ht+='</td>';
			ht+='</tr>';
		}
		$("#ConstructionDraw").html( ht );
	  }catch(e){
			alert(e.message);
	  }
	  var midtime=minTime+((temp/2)*(24*60*60000));
	  $("#txt_start_date").html( "&nbsp;"+top.getTimeStr(minTime,true));
	  $("#txt_mid_date").html( top.getTimeStr(midtime,true));
	  $("#txt_end_date").html( top.getTimeStr(maxTime,true)+"&nbsp;");
	}
	function showDetail(a,i,plan_start_date,plan_end_date,fact_start_date,apply_delay_date,fact_end_date,tdconstruction_status){
		
		$("#plan_start_date").html(top.getTimeStr(plan_start_date,true));
		$("#plan_end_date").html(top.getTimeStr(plan_end_date,true));
		$("#fact_start_date").html(top.getTimeStr(fact_start_date,true));
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
		$("#projectDetail").css("position", "absolute"); 
		$("#projectDetail").css("left",x); 
		$("#projectDetail").css("top", y);
		$("#projectDetail").css("display", "block");  	
		$("#projectDetail").show();
	}
	function divHide(){
		$("#projectDetail").hide();
	}
	
	
	
	//保存施工图审核信息
	function saveConstructCheck(){
		var aoData=[];
		aoData.push( { "name": "conDrawing.check_id", "value": constructId } );
		aoData.push( { "name": "conDrawing.cust_code", "value": cust_base_info_id } );
		aoData.push( { "name": "conDrawing.order_id", "value": cust_project_info_id } );
		aoData.push( { "name": "conDrawing.drawing_assessor", "value": $("#drawing_assessor").val()} );
		aoData.push( { "name": "conDrawing.goover_explain", "value": $("#project_goover_explain").val() } );
		aoData.push( { "name": "conDrawing.goover_date", "value": top.toTimestamp($("#project_goover_date").val()) } );
		aoData.push( { "name": "conDrawing.check_date", "value": top.toTimestamp($("#project_check_date").val()) } );
		aoData.push( { "name": "conDrawing.total_deduct_marks", "value": $("#total_deduct_marks").val() } );
		aoData.push( { "name": "conDrawing.total_score", "value": $("#project_total_score").val() } );
		aoData.push( { "name": "conDrawing.time_limit", "value": $("#project_time_limit").val() } );
		aoData.push( { "name": "conDrawing.check_pro1_score", "value": $("#construct_pro1_score").val() } );
		aoData.push( { "name": "conDrawing.check_pro2_score", "value": $("#construct_pro2_score").val() } );
		aoData.push( { "name": "conDrawing.check_pro3_score", "value": $("#construct_pro3_score").val() } );
		aoData.push( { "name": "conDrawing.check_pro4_score", "value": $("#construct_pro4_score").val() } );
		aoData.push( { "name": "conDrawing.check_pro5_score", "value": $("#construct_pro5_score").val() } );
		aoData.push( { "name": "conDrawing.check_pro6_score", "value": $("#construct_pro6_score").val() } );
		aoData.push( { "name": "conDrawing.check_pro7_score", "value": $("#construct_pro7_score").val() } );
		aoData.push( { "name": "conDrawing.check_pro8_score", "value": $("#construct_pro8_score").val() } );
		aoData.push( { "name": "conDrawing.check_pro9_score", "value": $("#construct_pro9_score").val() } );
		aoData.push( { "name": "conDrawing.check_pro10_score", "value": $("#construct_pro10_score").val() } );
		aoData.push( { "name": "conDrawing.check_pro11_score", "value": $("#construct_pro11_score").val() } );
		aoData.push( { "name": "conDrawing.check_pro12_score", "value": $("#construct_pro12_score").val() } );
		aoData.push( { "name": "conDrawing.check_pro13_score", "value": $("#construct_pro13_score").val() } );
		aoData.push( { "name": "conDrawing.check_pro14_score", "value": $("#construct_pro14_score").val() } );
		aoData.push( { "name": "conDrawing.check_pro15_score", "value": $("#construct_pro15_score").val() } );
		aoData.push( { "name": "conDrawing.check_pro16_score", "value": $("#construct_pro16_score").val() } );
		aoData.push( { "name": "conDrawing.check_pro17_score", "value": $("#construct_pro17_score").val() } );
		aoData.push( { "name": "conDrawing.check_pro18_score", "value": $("#construct_pro18_score").val() } );
		aoData.push( { "name": "conDrawing.check_pro19_score", "value": $("#construct_pro19_score").val() } );
		aoData.push( { "name": "conDrawing.check_pro20_score", "value": $("#construct_pro20_score").val()} );
		aoData.push( { "name": "conDrawing.check_pro1_num", "value": $("#construct_pro1_num").val() } );
		aoData.push( { "name": "conDrawing.check_pro2_num", "value": $("#construct_pro2_num").val() } );
		aoData.push( { "name": "conDrawing.check_pro3_num", "value": $("#construct_pro3_num").val() } );
		aoData.push( { "name": "conDrawing.check_pro4_num", "value": $("#construct_pro4_num").val() } );
		aoData.push( { "name": "conDrawing.check_pro5_num", "value": $("#construct_pro5_num").val() } );
		aoData.push( { "name": "conDrawing.check_pro6_num", "value": $("#construct_pro6_num").val() } );
		aoData.push( { "name": "conDrawing.check_pro7_num", "value": $("#construct_pro7_num").val() } );
		aoData.push( { "name": "conDrawing.check_pro8_num", "value": $("#construct_pro8_num").val() } );
		aoData.push( { "name": "conDrawing.check_pro9_num", "value": $("#construct_pro9_num").val() } );
		aoData.push( { "name": "conDrawing.check_pro10_num", "value": $("#construct_pro10_num").val() } );
		aoData.push( { "name": "conDrawing.check_pro11_num", "value": $("#construct_pro11_num").val()} );
		aoData.push( { "name": "conDrawing.check_pro12_num", "value": $("#construct_pro12_num").val() } );
		aoData.push( { "name": "conDrawing.check_pro13_num", "value": $("#construct_pro13_num").val() } );
		aoData.push( { "name": "conDrawing.check_pro14_num", "value": $("#construct_pro14_num").val() } );
		aoData.push( { "name": "conDrawing.check_pro15_num", "value": $("#construct_pro15_num").val() } );
		aoData.push( { "name": "conDrawing.check_pro16_num", "value": $("#construct_pro16_num").val() } );
		aoData.push( { "name": "conDrawing.check_pro17_num", "value": $("#construct_pro17_num").val() } );
		aoData.push( { "name": "conDrawing.check_pro18_num", "value": $("#construct_pro18_num").val() } );
		aoData.push( { "name": "conDrawing.check_pro19_num", "value": $("#construct_pro19_num").val() } );
		aoData.push( { "name": "conDrawing.check_pro20_num", "value": $("#construct_pro20_num").val() } );
		var xurl="/actions/ProjectOrder.action?updateConstructionDrawing";
		if(constructId==0){
			xurl="/actions/ProjectOrder.action?insertConstructionDrawing";
		}
		top.sendAjaxRequest(xurl,aoData,optSaveConstructCheckCallback);
	}
	
	//保存施工图审核信息---回调函数
	function optSaveConstructCheckCallback(obj){
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
		$("#total_deduct_marks").val(totalDeductMarks);
		if(totalDeductMarks>100){
			totalScore=0;
		}else{
			totalScore=Number(100-totalDeductMarks);
		}
		$("#project_total_score").val(totalScore);
	}
	
	/*//上传施工现场照片上传
	function uploadFile(){
		var xurl="../uploadFile.html?belong_id="+cust_project_info_id+"&belong_type="+belong_type;
		openDialog("上传文件",xurl,true,600,230,saveFileCallBack);
	}
	//调用回调函数---上传文件
   	function saveFileCallBack(){
				try{
				  var obj = top.getTempValue();
				  if(obj.isSaveOK) doQueryFileList();
				}catch(e){
				}
	}*/
	//doQuery---上传文件
	/*function doQueryFileList(){
		fileListTable.fnDraw();
	}
	//查询所有上传的附件
	function selectAllUploadFile(){
        clearInterval( interId );
		var surl=top.getUrlBase()+"/actions/File.action?getFileInfoList";
		fileListTable = $('#filePathList').dataTable( {
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
							aoData.push( { "name": "fileinfo.belong_id", "value": cust_project_info_id} );
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
										return '<a href="'+top.getUrlBase()+'/download?filePath='+oObj.aData.file_path+'+"&fileName="'+oObj.aData.file_name+'">下载</a>||<a href=\'javascript:void(0)\' onclick="previewFile(\''+oObj.aData.file_path+'\',\''+oObj.aData.file_name+'\')">预览</a>';
									 },
									"bUseRendered": false 
							}
							 
                      ]
				} );
			
   }*/
   	
	
	function checkConstructionDraw(){
	$("#ConstructionTable").hide();
	$("#ConstructionTitle").show();
	$("#ConstructionDraw").show();
	
	}
	function checkConstructionTable(){
	$("#ConstructionTable").show();
	$("#ConstructionTitle").hide();
	$("#ConstructionDraw").hide();
	queryConstructionTableList();
	}
	function queryConstructionTableList(){
	var surl=top.getUrlBase()+"/actions/ProjectOrder.action?getConstructionStatusList";
		fileListTable = $('#ConstructionTable').dataTable( {
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
							aoData.push( { "name": "constructionstatus.order_id", "value": cust_project_info_id } );
			        },
			      "sDom": "frtip",
				  "sPaginationType": "full_numbers",
					"aoColumns": [
							{"sTitle": "项目名称", "mDataProp": "project_name", "sWidth": "15%","sClass": "left", "bUseRendered": false },
			                
							 {"sTitle": "计划开始时间","mDataProp": "plan_start_date", "sWidth": "15%", "sClass": "center",
								    "fnRender": function ( oObj ) {
                                           return top.getTimeStr(oObj.aData.plan_start_date ,true);
                            },
							
							 "bUseRendered": false},
							 {"sTitle": "计划结束时间","mDataProp": "plan_end_date", "sWidth": "15%", "sClass": "center",
								    "fnRender": function ( oObj ) {
                                           return top.getTimeStr(oObj.aData.plan_end_date ,true);
                            },
							
							 "bUseRendered": false},
							 {"sTitle": "实际开始时间","mDataProp": "fact_start_date", "sWidth": "15%", "sClass": "center",
								    "fnRender": function ( oObj ) {
                                           return top.getTimeStr(oObj.aData.fact_start_date ,true);
                            },
							
							 "bUseRendered": false},
							  {"sTitle": "实际结束时间","mDataProp": "fact_end_date", "sWidth": "15%", "sClass": "center",
								    "fnRender": function ( oObj ) {
                                           return top.getTimeStr(oObj.aData.fact_end_date ,true);
                            },
			
							 "bUseRendered": false},
							  {"sTitle": "申请推迟时间","mDataProp": "apply_delay_date", "sWidth": "15%", "sClass": "center",
								    "fnRender": function ( oObj ) {
                                           return top.getTimeStr(oObj.aData.apply_delay_date ,true);
                            },
			
							 "bUseRendered": false},
							 {"sTitle": "工程状态","mDataProp": "status", "sWidth": "10%","sClass": "center",
								 "fnRender": function ( oObj ) {
                                          return top.getCodeName( "CONSTRUCTIONSTATUS_STATUS", oObj.aData.status );
                            },
							  "bUseRendered": false }
                      ]
				} );
	}
	function saveProjectChangeInfo(typeId){
		var aoData=[];
		aoData.push( { "name": "proChange.change_name", "value": $("#td_change"+typeId+"_name").val() } );
		aoData.push( { "name": "proChange.change_reason", "value": $("#td_change"+typeId+"_reason").val() } );
		aoData.push( { "name": "proChange.change_type", "value": typeId} );
		aoData.push( { "name": "proChange.order_id", "value": cust_project_info_id } );
		aoData.push( { "name": "proChange.change_money", "value": $("#td_change"+typeId+"_money").val() } );
		
		var xurl="/actions/ProjectOrder.action?insertProChange";
		top.sendAjaxRequest(xurl,aoData,saveProjectChangeInfoCallBack);
	}
	function saveProjectChangeInfoCallBack(obj){
	 try{
        if ( obj.status == true ){
            isSaveOK = true;
            top.showInfoWinOK("操作成功");
			getChangeList();
		}else{
            isSaveOK = false;
            top.showInfoWinError("操作失败 "+obj.msg);
        }
       }catch(e){
          top.showInfoWinError("处理异常:"+e.message);
       }
   }
	function getChangeList(){
		var aoData=[];
		aoData.push( { "name": "proChange.order_id", "value": cust_project_info_id } );
		
		var xurl="/actions/ProjectOrder.action?getProChangeList";
		top.sendAjaxRequest(xurl,aoData,getChangeListCallBack);
	}
	function getChangeListCallBack(obj){
		var proChangeList=obj.aaData;
		var changType="";
		var ht="";
		var rows=1;
		var total=0;
		var allTotal=0;
		
		if(proChangeList){
			if(proChangeList.length>0){
				changType=proChangeList[0].change_type;
				for(var i=0;i<proChangeList.length;i++){
					if(proChangeList[i].change_type!=changType){
						ht='<tr class="tr_data" height="30px"><td width="70px" rowspan="'+rows+'">'+top.getCodeName("PROJECT_CHANGE_TYPE",proChangeList[i-1].change_type)+'</td><td width="200px">'+proChangeList[i-1].change_name+'</td><td width="300px">'+proChangeList[i-1].change_reason+'</td><td width="70px">'+proChangeList[i-1].change_money+'</td><td width="75px">'+top.getUserNameByCode(proChangeList[i-1].opt_user)+'</td><td>'+top.getTimeStr(proChangeList[i-1].opt_time)+'</td></tr>'+ht;
						
						/*ht+='<tr class="tr_data" id="tr_change'+proChangeList[i-1].change_type+'_add">';
						ht+='<td width="200px"><input type="text" id="td_change'+proChangeList[i-1].change_type+'_name"/></td>';
						ht+='<td width="300px"><textarea cols="38" type="text" id="td_change'+proChangeList[i-1].change_type+'_reason"></textarea></td>';
						ht+='<td width="70px"><input type="text" id="td_change'+proChangeList[i-1].change_type+'_money" size="4"/></td>';
						ht+='<td colspan="2" align="left"><input type="button" value="保存" onclick="saveProjectChangeInfo(\''+proChangeList[i-1].change_type+'\')"/></td>'
						ht+='</tr>';
						*/
						ht+='<tr height="30px" class="tr_data" id="tr_change'+proChangeList[i-1].change_type+'_total"><td>合计</td><td align="left" colspan="5" id="td_change'+proChangeList[i-1].change_type+'_total">'+total+' 元</td></tr>'
									
						$("#table_change"+proChangeList[i-1].change_type).html(ht);
						rows=2;
						allTotal+=total;
						total=proChangeList[i].change_money;
						ht='';
						changType=proChangeList[i].change_type;
					}else{
						rows++;
						total+=proChangeList[i].change_money;
						if(i==0) continue;
						ht='<tr class="tr_data" height="30px"><td>'+proChangeList[i-1].change_name+'</td><td>'+proChangeList[i-1].change_reason+'</td><td>'+proChangeList[i-1].change_money+'</td><td>'+top.getUserNameByCode(proChangeList[i-1].opt_user)+'</td><td>'+top.getTimeStr(proChangeList[i-1].opt_time)+'</td></tr>'+ht;
					}
				}
				
				ht='<tr class="tr_data" height="30px"><td width="70px" rowspan="'+rows+'">'+top.getCodeName("PROJECT_CHANGE_TYPE",proChangeList[proChangeList.length-1].change_type)+'</td><td width="200px">'+proChangeList[proChangeList.length-1].change_name+'</td><td width="300px">'+proChangeList[proChangeList.length-1].change_reason+'</td><td width="70px">'+proChangeList[proChangeList.length-1].change_money+'</td><td width="75px">'+top.getUserNameByCode(proChangeList[proChangeList.length-1].opt_user)+'</td><td>'+top.getTimeStr(proChangeList[proChangeList.length-1].opt_time)+'</td></tr>'+ht;
				/*ht+='<tr class="tr_data" id="tr_change'+proChangeList[proChangeList.length-1].change_type+'_add">';
				ht+='<td width="200px"><input type="text" id="td_change'+proChangeList[proChangeList.length-1].change_type+'_name"/></td>';
				ht+='<td width="300px"><textarea cols="38" type="text" id="td_change'+proChangeList[proChangeList.length-1].change_type+'_reason"></textarea></td>';
				ht+='<td width="70px"><input type="text" id="td_change'+proChangeList[proChangeList.length-1].change_type+'_money" size="4"/></td>';
				ht+='<td colspan="2" align="left"><input type="button" value="保存" onclick="saveProjectChangeInfo(\''+proChangeList[i-1].change_type+'\')"/></td>'
				ht+='</tr>';*/
				
				ht+='<tr height="30px" class="tr_data" id="tr_change'+proChangeList[proChangeList.length-1].change_type+'_total"><td>合计</td><td colspan="5" id="td_change'+proChangeList[proChangeList.length-1].change_type+'_total">'+total+'</td></tr>'
				$("#table_change"+proChangeList[proChangeList.length-1].change_type).html(ht);
				allTotal+=total;
				$("#change_money_total").html(allTotal);
			}
			
		}
		
	}