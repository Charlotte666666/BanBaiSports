var callbackObj=null;
var interId=null;
var currentType="rain";
var unit="mm";
var q_c_code="V13019";
var selectedEleCode="";
var q_v04001=2012;
var q_v04002=5;
var q_v04003=23;
var q_v04004=21;
var q_v04005=0;
var q_v04006=0;
var gMapTitle = "全国地面自动站降水量实况图IBRIIDATEI";
var queryData={};
var sources=",1,2";
var isValueOpt=false;
var initQueryInterId=0;
var currentQueryCondition="";
var cacheMap = new SimpleMap();
var dataTop10 = [];
var radarPlay = false;
var currentLeidaPlayName = "";
var interLeidaPlay=0;
var currentLeidaPlayTime = 0;
var startLeidaPlayTime = 0;
var endLeidaPlayTime = 0;
var isGoToPlayMode=false;
var isCanUseLeida = true;
var currentDotId = 0;
var q_v1=-999999;
var q_v2=999999;
var q_lat1="";
var q_lat2="";
var q_lon1="";
var q_lon2="";
var q_nationCode="";
var q_stationIds="";
var timeh="";
var isWeixing=false;
var isNeedDrawData=false;
var pdTitle="";
var detailStationName="";
var detailValue=0;

function drawDots(arr){
	if ( !arr ) return ;
	if ( !isLoadedStation ) {
	   isNeedDrawData=true;
	   top.setHDataTempValue( arr );
	   return ;
	}
	  //if ( arr.length == 0 ) return ;
    // X坐标,Y坐标,观测值,质控码,是否国家站,站号##
    var d=0;
    var e=0;
    var f=0;
    var str = "";
	var tempArr = [];
	var j = 0;
	for (j=0;j<12;j++) {
	  tempArr[j] = -50;
	  dataTop10[j] = null;
	}
	var n=0;
	var isNeedSort = true;
	// 风向元素不需要进行排名
	if ( q_c_code == 'V11001_002' || q_c_code == 'V11202_010' || q_c_code == 'V11202' || q_c_code == 'V11043' ) isNeedSort = false;
	// 只有降水元素才能显示雷达栏目
	if ( q_c_code == 'V13019' || q_c_code == 'p24' || q_c_code == 's08' ) {
	   isCanUseLeida = true;
	}else{
	   isCanUseLeida = false;
	   showBox('box_leida',false);
	}
    var isWind = false;
	if ( unit=="m/s" ) isWind = true;
	var sta = null;
	var narr=[];
	try{
		for(var i=0;i<arr.length;i++){
		    if ( !arr[i].xy ) {
				sta = top.getStationByCode( arr[i].V0 );
				if ( sta == null ) continue;
				arr[i].xy = sta.xy;
				arr[i].isN = sta.isN;
				arr[i].NA = sta.NAT;
				arr[i].NAME = sta.NA;
				arr[i].lat = sta.lat;
				arr[i].lon = sta.lon;
				if ( sta.rf1 ) arr[i].rf1 = sta.rf1;
				if ( !arr[i].M ) {
				  arr[i].M = "无";
				}
				if ( !arr[i].RS ) {
				  arr[i].RS = "";
				}
				if ( !arr[i].crt ) {
				  arr[i].crt = "";
				}
			}
			narr[narr.length] = arr[i];
			if ( arr[i].F1 == '1' ) {
			  d++;
			} else if ( arr[i].F1 == '2' ) {
				e++;
			}
			if ( arr[i].CS == '2' ) {
				f++;
			}
			str+=arr[i].xy+","+arr[i].VA+","+arr[i].F1+","+arr[i].isN+","+arr[i].NAME+","+arr[i].NA+","+arr[i].V0+","+arr[i].CS+","+arr[i].F2;
			if ( isWind ) {
			  str += ","+arr[i].wd+"##";
			} else {
			  str += "##";
			}
			if ( isNeedSort && Number(arr[i].VA) != 999999 ) {
				for (j=0;j<11;j++) {
				  if ( Number(arr[i].VA) > tempArr[j] ) {
					for (n=9;n>=j;n--) {
					  tempArr[n+1] = tempArr[n];
					  dataTop10[n+1] = dataTop10[n];
					}
					tempArr[j] = arr[i].VA;
					dataTop10[j] = arr[i];
					j = 12;
				  }
				}
			}
		}
    }catch(e){
	}
	top.setHDataTempValue( narr );
    document.getElementById("faultNum").innerHTML=e;
    document.getElementById("doubtNum").innerHTML=d;
    document.getElementById("feedbackNum").innerHTML=f;
    //var str="3817319.379303,1698823.669695,1,1,1,test,pro,0001##3837319.379303,1698823.669695,1,1,1,test,pro,0001##";
    var mapFrame = document.getElementById("mapFrame");
    if ( str == '' ) str="##";
	try{
      if ( mapFrame ) mapFrame.contentWindow.drawDots( str );
	}catch(e){
	}
    str=null;
	
	var ht = '';
	var cSignName="无";
	for (j=0;j<10;j++) {
	    if ( dataTop10[j] == null ) {
		  ht = "";
	    } else if ( dataTop10[j].F1 == '1' || dataTop10[j].F1 == '2' ) {
		     if ( dataTop10[j].CS == '0' || dataTop10[j].CS == '1' ) {
        	     cSignName = "未反馈";
		     } else if ( dataTop10[j].CS == '2' ) {
				 cSignName = top.getCodeName( "CMA_CONFIRM_RESULT",dataTop10[j].rf1+"-"+dataTop10[j].F2,"未反馈");
			 } else cSignName =  "未反馈";
		} else if ( dataTop10[j].CS == '2' ) {
		   cSignName = top.getCodeName( "CMA_CONFIRM_RESULT",dataTop10[j].rf1+"-"+dataTop10[j].F2,"未反馈");;
		}

	   if ( dataTop10[j] && isNeedSort ) {
	     ht = '<td>'+top.getCode2ASII(dataTop10[j].V0)+'</td><td>'+ top.getCodeName( "PROVINCE", dataTop10[j].NA ) +'</td><td>'+dataTop10[j].NAME+'</td><td>'+dataTop10[j].VA+'</td><td align="center">'+top.getCodeName( "CMA_QC_STATUS", dataTop10[j].F1)+'</td><td>'+cSignName+'</td>';
	   } else {
         ht = '<td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td>';
	   }
	   $("#data_sort_"+j).html( ht );
	}
	var typeName = getTypeName();
	$("#data_sort_unit").html( typeName + "(" + unit + ")" );
	isNeedDrawData=false;
}

function setMapInfo(){
    //var str="1##毫米##0,10,0xA5F3A2,0-10##10,25,0x36A604,10-25##25,50,0x60B8FF,25-50##50,100,0x0001FA,50-100##100,250,0xF303F8,100-250##250,10000,0x740000,999999";
    var str = getLegendConfig();
	if ( str == '' ) {
	  showInfoWin("没有设置当前元素的图例");
	  return ;
	}
    var dateStr = document.getElementById("datepicker").value;
	dateStr = top.toLongTimeFormat(dateStr);
	var lastDateStr = top.getLastDate( dateStr );
	lastDateStr=top.toLongTimeFormat(lastDateStr);
	if ( q_c_code == 's08' ) {
		  dateStr = $("#currentBlockHour").html();
		  pdTitle=dateStr;
	} else if ( q_c_code == 'p24' ) {
	      var t=$("#q_time24").val();
		  if ( t == 21 ) {
		   pdTitle=dateStr+"05时";
		   dateStr = lastDateStr+"06时--"+dateStr+"05时(北京时)";
		  } else if ( t == 0 ) {
		   pdTitle=dateStr+"08时";
		   dateStr = lastDateStr+"09时--"+dateStr+"08时(北京时)";
		  } if ( t == 6 ) {
		   pdTitle=dateStr+"14时";
		   dateStr = lastDateStr+"15时--"+dateStr+"14时(北京时)";
		  } if ( t == 12 ) {
		   pdTitle=dateStr+"20时";
		   dateStr = lastDateStr+"21时--"+dateStr+"20时(北京时)";
		  }
	} else if ( document.getElementById("hour1").style.display != 'none' ) {
	      var h=Number($("#q_time1").find("option:selected").text());
		  if ( unit == 'mm' ) {
		    dateStr = ((h-1)<0?lastDateStr:dateStr) + "" + ((h-1)<0?23:(h-1)) +"时--"+dateStr+""+h+"时(北京时)";
		  } else {
		    dateStr = dateStr + "" + h +"时(北京时)";
		  }
    }
    str+=("@"+gMapTitle.replace("IDATEI", dateStr));
    try{
     var mapFrame = document.getElementById("mapFrame");
     mapFrame.contentWindow.setMapInfo( str );
    }catch(e){
    }
}

function getLegendConfig(){
   try{
     var rs=[];
	 var eleCode = q_c_code;
	 if ( eleCode == 's08' || eleCode == 'p24' ) eleCode = "V13019_pd";
     for (var i=0;i<g_legendLists.aaData.length;i++){
		if ( g_legendLists.aaData[i].ele == eleCode ) {
		   rs[rs.length] = g_legendLists.aaData[i];
		}
	 }
	 if ( rs.length == 0 ) return "";
	 if ( rs.length == 1 ) return rs[0].configStr;
	 var result = rs[0].configStr;
	 var today=new Date();
     var month = today.getMonth() + 1;
     var day = today.getDate();
	 for ( var i=1;i<rs.length;i++ ) {
	    if ( rs[i].month <= month ) {
		  result = rs[i].configStr;
		}
	 }
	 return result;
   }catch(e){}
   return "";
}

function selectData(type){
  if ( !queryData ) return ;
  var aData = [];
  var n=0;
  q_lat1="";
  q_lat2="";
  q_lon1="";
  q_lon2="";
  q_stationIds="";
  q_nationCode="";
  
      sources="";
	  var ds2=document.getElementsByName("q_dataSource");
	  for ( var i=0;i<ds2.length;i++ ) {
			if ( ds2[i].checked ) {
				sources+=","+ds2[i].value;
			}
	  }
	  
	  if ( sources == '' ) {
		  top.showInfoWin("请选择值域");
		  return ;
	  }
	 var toXY="";
	switch ( type ) {
	    case 'stationName':
	    	var stationName = document.getElementById("q_stationName").value;
	    	var provinceId = document.getElementById("q_province").value;
	    	if ( stationName == '' && provinceId == '' ) {
	    		aData = queryData;
	    	} else {
			    if ( provinceId != '' ) q_nationCode = provinceId;
	    		try{
	    		 for ( var i=0;i<queryData.length;i++ ) {
				     if ( sources.indexOf(","+queryData[i].F1) == -1 ) continue;
	    			 //if ( (provinceId == '' || provinceId == queryData[i].NA) && (stationName == '' || queryData[i].stationName.indexOf( stationName ) != -1 ) ) {
                     if ( (provinceId == '' || provinceId == queryData[i].NA) ) {
					   if ( stationName != '' ) {
					     if ( queryData[i].NAME.indexOf( stationName ) == -1 ) continue;
					   }
					   aData[n]=initStationVals(queryData[i]);
					   toXY = aData[n].xy;
	    			   n++;
	    			 }
	    		 }
	    	  }catch(e){
	    	  }
	        }
	    	break;
	    case 'stationIds':
	    	var stationIds = document.getElementById("q_stationIds").value;
	    	if ( stationIds == '' || stationIds == '请输入站号' ) {
	    		top.showInfoWin("请输入台站号");
	    		return ;
	    	}
	    	stationIds=top.getASII2Code(stationIds);
			q_stationIds = stationIds;
            for ( var i=0;i<queryData.length;i++ ) {
	    			 if ( stationIds == queryData[i].V0 ) {
	    			   aData[n]=initStationVals(queryData[i]);
					   toXY = aData[n].xy;
	    			   n++;
	    			 }
	        }
	    	break;
	    case 'LatLon':
	    	q_lon1 = document.getElementById("q_lon1").value;
	    	q_lon2 = document.getElementById("q_lon2").value;
	    	q_lat1 = document.getElementById("q_lat1").value;
	    	q_lat2 = document.getElementById("q_lat2").value;
	    	if ( q_lon1 == '' || q_lon2 == '' || q_lat1 == '' || q_lat2 == '' ) {
	    		top.showInfoWin("请输入经纬度范围");
	    		return ;
	    	}
            for ( var i=0;i<queryData.length;i++ ) {
			         if ( sources.indexOf(","+queryData[i].F1) == -1 ) continue;
	    			 if ( (Number(queryData[i].lat) >= Number(q_lat1) || q_lat1 == '') && (Number(queryData[i].lat) <= Number(q_lat2) || q_lat2 == '')
	    			   && (Number(queryData[i].lon) >= Number(q_lon1) || q_lon1 == '') && (Number(queryData[i].lon) <= Number(q_lon2) || q_lon2 == '') ) {
	    			   aData[n]=initStationVals(queryData[i]);
					   toXY = aData[n].xy;
	    			   n++;
	    			 }
	        }
	    	break;
	    default: break;
	}
	if ( toXY != "" ) setDoGoto(toXY);
	if ( type == 'stationIds' ) {
	  top.setHDataTempValue( aData );
	  try{
	      var mapFrame = document.getElementById("mapFrame");
		  if ( mapFrame ) mapFrame.contentWindow.doClickDot( q_stationIds );
	  }catch(e){
	  }
	} else {
	  drawDots( aData );
	}
	openDataListWin();
	aData = null;
}

function initStationVals(o){
   if ( !o.xy ) {
			 var sta = top.getStationByCode( o.V0 );
			 if ( sta == null ) {
			  o.xy = "";
			  o.isN = "";
			  o.NA = "";
			  o.NAME = "";
			  o.lat = "";
			  o.lon = "";
			  o.rf1="";
			  o.M = "无";
			  o.RS = "";
			  o.crt = "";
			  return o;
			 }
			 o.xy = sta.xy;
			 o.isN = sta.isN;
			 o.NA = sta.NAT;
			 o.NAME = sta.NA;
			 o.lat = sta.lat;
			 o.lon = sta.lon;
			 if ( sta.rf1 ) o.rf1 = sta.rf1;
			 if ( !o.M ) {
				  o.M = "无";
			 }
			 if ( !o.RS ) {
				  o.RS = "";
			 }
			 if ( !o.crt ) {
				  o.crt = "";
			 }
  }
  return o;
}

function refreshData(){
  var aoData=[];

	var dateStr= document.getElementById("datepicker").value;
	if ( !IsDate(dateStr) || dateStr.length < 10 ) {
	    showInfoWin("请输入正确的日期格式");
		return ;
	}

	q_v04004="";
	if ( q_c_code == 's08' || q_c_code == 'p24' ) {
	    q_v04004 = document.getElementById("q_time24").value;
		if ( q_c_code == 'p24' ) {
			var dstr=dateStr+" "+top.getTwoNumberStr(Number(q_v04004==21?-3:q_v04004)+8)+":00:00";
			var enddate=Date.parse(dstr.replace(/-/g,"/"));
			var nowD=new Date();
			var nowdate=nowD.getTime();
			if ( nowdate-enddate<0 ) {
				top.showInfoWinWarn("无数据");
				return ;
			}
		}
	    aoData.push( { "name": "v04004", "value": q_v04004 } ); 
	}else if ( document.getElementById("hour1").style.display != 'none' ) {
	    q_v04004 = document.getElementById("q_time1").value;
		var dstr=dateStr+" "+top.getTwoNumberStr(Number(q_v04004)+8)+":00:00";
		var enddate=Date.parse(dstr.replace(/-/g,"/"));
		var nowD=new Date();
        var nowdate=nowD.getTime();
		if ( nowdate-enddate<0 ) {
		    top.showInfoWinWarn("无数据");
		    return ;
		}
	    aoData.push( { "name": "v04004", "value": q_v04004 } );
		$("#datepicker_leida1_hour").val( top.getTwoNumberStr(Number(q_v04004)+8) );
		$("#datepicker_leida2_hour").val( top.getTwoNumberStr(Number(q_v04004)+8) );
    }
	if ( dateStr != '' ) {
	    q_v04001 = dateStr.substring(0,4);
	    q_v04002 = dateStr.substring(5,7);
	    q_v04003 = dateStr.substring(8,10);
		$("#datepicker_leida1").val(dateStr);
		$("#datepicker_leida2").val(dateStr);
	}
  setMapInfo();
  var qstr = q_c_code + "-" + q_v04001 + "-" + q_v04002 + "-" + q_v04003 + "-" + q_v04004;
  if ( qstr == currentQueryCondition ) {
  	 localQuery();
     return ;
  } else if ( isExistCache(qstr) ){
     currentQueryCondition = qstr;
     queryData=cacheMap.get(qstr);
     localQuery();
     return ;
  }
  
  currentQueryCondition = qstr;
  
  aoData.push( { "name": "q_c_code", "value": q_c_code } );
  aoData.push( { "name": "v04001", "value": q_v04001 } );
  aoData.push( { "name": "v04002", "value": q_v04002 } );
  aoData.push( { "name": "v04003", "value": q_v04003 } );
  top.showLoadingInfo(true);
  top.sendAjaxRequest("/actions/ProCma.action?getDataList",aoData,callBackData);
}

function isExistCache(key){
   var keys=cacheMap.keySet();
   for(var i=0;i<keys.length;i++ ) {
	 if ( key == keys[i] ) return true;
   }
   return false;
}

function setMapDataCache(key,data){
    var keys=cacheMap.keySet();
	if ( keys.length > 4 ) {
	   cacheMap.remove(keys[0]);
	}
	cacheMap.put(key,data);
}

function localQuery(){
  isValueOpt = document.getElementById("checkOptValue").checked;
  var isStartV=false;
  var isEndV=false;
  var v1=0;
  var v2=0;
  q_v1 = -999999;
  q_v2 = 999999;
  q_lat1="";
  q_lat2="";
  q_lon1="";
  q_lon2="";
  if( isValueOpt ) {
	   if ( document.getElementById("q_value1").value == '' && document.getElementById("q_value2").value == '' ) {
	      isValueOpt = false;
	   } else {
	      if ( document.getElementById("q_value1").value != '' ) {
		    try{
			  v1=Number( document.getElementById("q_value1").value );
			  isStartV=true;
			  q_v1 = v1;
			}catch(e){
			  isStartV=false;
			}
		  }
		  if ( document.getElementById("q_value2").value != '' ) {
		    try{
			  isEndV=true;
			  v2=Number( document.getElementById("q_value2").value );
			  q_v2 = v2;
			}catch(e){
			  isEndV=false;
			}
		  }
	   }
  }

  sources="";
  var ds2=document.getElementsByName("q_dataSource");
  for ( var i=0;i<ds2.length;i++ ) {
     	if ( ds2[i].checked ) {
     	  	sources+=","+ds2[i].value;
     	}
  }
  
  if ( sources == '' ) {
      top.showInfoWin("请选择值域");
      return ;
  }

  var aData=[];
  var n=0;

	for ( var i=0;i<queryData.length;i++ ) {
		// source
		if ( sources.indexOf(","+queryData[i].F1) == -1 ) {
			 continue;
		}
		// isNational
		if ( queryData[i].isN == '0' ) {
			if ( !document.getElementById("showAreaCheck").checked ) {
				continue;
		    }
	    } else {
			if ( !document.getElementById("showCountryCheck").checked ) {
				continue;
			}
	    }
		// value
		if ( isValueOpt ) {
		  if ( isStartV && Number(queryData[i].VA) <= v1 ) continue;
		  if ( isEndV && Number(queryData[i].VA) > v2 ) continue;
		}

		aData[n]=queryData[i];
		n++;	
	}
	drawDots(aData);
}

function callBackData(o){
	if ( isLoadedStation ) top.showLoadingInfo(false);
	queryData = o.aaData;
	timeh = o.timeh;
	setMapDataCache( currentQueryCondition, queryData);
	var isNeedTimer=true;
	try{
      var mapFrame = document.getElementById("mapFrame");
			if ( mapFrame.contentWindow.isLoaded() ) {
				isNeedTimer=false;
				localQuery();
			}
  }catch(e){
  }
  if ( isNeedTimer ) initQueryInterId = setInterval("initDrawMap()",300);
}

function initDrawMap(){
   try{
      var mapFrame = document.getElementById("mapFrame");
      if ( mapFrame.contentWindow.isLoaded() ) {
      	setMapInfo();
      	localQuery();
        clearInterval( initQueryInterId );
      }
   }catch(e){
   }
}

function doRadioRain(v){
	if ( v == 'hour1' ) {
		document.getElementById("p24").style.display="none";
		document.getElementById("hour1").style.display="block";
		document.getElementById("s08").style.display="none";
		document.getElementById("timeSelect").style.display="block";
		gMapTitle = "全国地面自动站降水量实况图IBRIIDATEI";
		selectedEleCode="V13019";
	} else if ( v == 'p24' ) {
		document.getElementById("p24").style.display="block";
		document.getElementById("hour1").style.display="none";
		document.getElementById("s08").style.display="none";
		document.getElementById("timeSelect").style.display="block";
		gMapTitle = "全国地面自动站累计降水量实况图IBRIIDATEI";
		selectedEleCode="p24";
	} else {
		if ( document.getElementById("rollRainRadio").disabled ) return ;
		document.getElementById("p24").style.display="none";
		document.getElementById("hour1").style.display="none";
		document.getElementById("s08").style.display="block";
		selectedEleCode="s08";
		var d=new Date();
		var h=d.getHours();
		var txt="";
		if ( h < 8) {
			txt="昨08时~今0"+h+"时";
		}else{
			txt="今08时~"+h+"时";
		}
		gMapTitle = "全国地面自动站累计降水量实况图IBRI" + txt;
		document.getElementById("currentBlockHour").innerHTML=txt;
		//隐藏日期选择栏
		document.getElementById("timeSelect").style.display="none";
	}
	document.getElementById("checkOptValue").checked = true;
	unit="mm";
	document.getElementById("unitTxt").innerHTML = unit;
	var rs=document.getElementsByName("q_dataType");
    for (var i = 0; i < rs.length; i++) {
        if ( rs[i].value == v ) {
            rs[i].checked = true;
            break;
        }
    }
}

function doSelectCheck(id){
  try{
    document.getElementById(id).checked = !document.getElementById(id).checked;
  }catch(e){
  }
}

function doQueryData(type){
  if ( type == 'left' ) {
	  q_c_code=selectedEleCode;
	  refreshData();
	  return ;
  } else {
    selectData(type);
  }
}

function onclickDot(code){
  var xurl=top.getUrlBase()+"/pages/pro01/stationInfo.html?q_c_code="+q_c_code+"&stationCode="+code+"&q_v04001="+q_v04001+"&q_v04002="+q_v04002+"&q_v04003="+q_v04003+"&q_v04004="+q_v04004;
  top.openDialog("降雨量与气温时序图",xurl,false,862,430,null);
}

function getTypeName(){
    var typeName="降雨";
    switch ( q_c_code ) {
        case "V12001": 
		case "V12211": 
		case "V12212": 
            typeName="温度";
            break;
        case "V11002_002": 
		case "V11042_010": 
		case "V11042": 
		case "V11041": 
            typeName="风";
            break;
        case "V10004": 
		case "V10201": 
		case "V10202": 
            typeName="气压";
            break;
        case "V13003": 
		case "V13007": 
            typeName="湿度";
            break;
        default: break;
    }
	return typeName;
}

function openDataListWin(){
	var typeName = getTypeName();
    var xurl=top.getUrlBase()+"/pages/pro01/dataList.html?vTitle="+typeName+"("+(unit=='%'?"IPERCENTI":unit)+")&q_c_code="+q_c_code;
	    xurl+="&q_v04001="+q_v04001+"&q_v04002="+q_v04002+"&q_v04003="+q_v04003+"&q_v04004="+q_v04004+"&timeh="+timeh;
		if ( q_c_code == 'p24' || q_c_code == 's08' ) xurl+="&pdTitle="+pdTitle;
		xurl+="&sources="+sources+"&v1="+q_v1+"&v2="+q_v2+"&lat1="+q_lat1+"&lat2="+q_lat2+"&lon1="+q_lon1+"&lon2="+q_lon2+"&nationCode="+q_nationCode+"&stationIds="+q_stationIds;
    top.openDialog("查询结果列表"+top.getDialogButtonHtml("导出",1),xurl,false,900,620,null);
}

function selectMenuType(v){
    var ht='';
	if ( v == 'hour' ) {
	  ht='<span style="cursor:pointer;background-color:#F1F8FC;font-weight:bold;color:#0778C5" onclick="selectMenuType(\'hour\')">小时资料</span>&nbsp;<span style="cursor:pointer;" onclick="selectMenuType(\'leiji\')">累计降水资料</span>';
	  ht+='<ul style="padding:5px;background-color:#F1F8FC;">';
      ht+='<li><div style="background-color:#C3DBEB;cursor:pointer;width:190px;height:21px" onclick="showSource(1)"><b>降水</b></div></li><li id="blockSource1"><ul style="padding:2px 0px 5px 20px">';
	     ht+='<li onclick="doRadioRain(\'hour1\')"><input type="radio" name="q_dataType" id="hour1RainRadio" value="hour1" onclick="doRadioRain(\'hour1\')" checked/><span style="cursor:pointer">小时降水</span></li>';
	  
	  ht+='</ul></li><li><div style="background-color:#E2EEFC;cursor:pointer;width:190px;height:21px" onclick="showSource(2)"><b>气温</b></div></li><li id="blockSource2" style="display:none"><ul style="padding:2px 0px 5px 20px">';   
	     ht+='<li onclick="doSelectRadio(\'V12001\',\'气温\',\'temperature\')"><input type="radio" name="q_dataType" value="V12001" /><span style="cursor:pointer">气温</span></li>';
	     ht+='<li onclick="doSelectRadio(\'V12211\',\'小时最高气温\',\'temperature\')"><input type="radio" name="q_dataType" value="V12211" /><span style="cursor:pointer">小时最高气温</span></li>';
	     ht+='<li onclick="doSelectRadio(\'V12212\',\'小时最低气温\',\'temperature\')"><input type="radio" name="q_dataType" value="V12212" /><span style="cursor:pointer">小时最低气温</span></li>';
      
	  ht+='</ul></li><li><div style="background-color:#C3DBEB;cursor:pointer;width:190px;height:21px" onclick="showSource(3)"><b>风</b></div></li><li id="blockSource3" style="display:none"><ul style="padding:2px 0px 5px 20px">';
	     ht+='<li onclick="doSelectRadio(\'V11002_002\',\'2分钟平均风速\',\'wind\')"><input type="radio" name="q_dataType" value="V11002_002" /><span style="cursor:pointer">2分钟平均风速</span></li>';
		 ht+='<li onclick="doSelectRadio(\'V11042_010\',\'10分钟平均风速\',\'wind\')"><input type="radio" name="q_dataType" value="V11042_010" /><span style="cursor:pointer">10分钟平均风速</span></li>';
		 ht+='<li onclick="doSelectRadio(\'V11042\',\'最大风速\',\'wind\')"><input type="radio" name="q_dataType" value="V11042" /><span style="cursor:pointer">最大风速</span></li>';
		 ht+='<li onclick="doSelectRadio(\'V11041\',\'极大风速\',\'wind\')"><input type="radio" name="q_dataType" value="V11041" /><span style="cursor:pointer">极大风速</span></li>';
		// ht+='<li onclick="doSelectRadio(\'V11001_002\',\'2分钟风向\',\'wind\')"><input type="radio" name="q_dataType" value="V11001_002" /><span style="cursor:pointer">2分钟风向</span></li>';
	    // ht+='<li onclick="doSelectRadio(\'V11202_010\',\'10分钟风向\',\'wind\')"><input type="radio" name="q_dataType" value="V11202_010" /><span style="cursor:pointer">10分钟风向</span></li>';
	    // ht+='<li onclick="doSelectRadio(\'V11202\',\'最大风速的风向\',\'wind\')"><input type="radio" name="q_dataType" value="V11202" /><span style="cursor:pointer">最大风速的风向</span></li>';
	    // ht+='<li onclick="doSelectRadio(\'V11043\',\'极大风速的风向\',\'wind\')"><input type="radio" name="q_dataType" value="V11043" /><span style="cursor:pointer">极大风速的风向</span></li>';
	     
	  ht+='</ul></li><li><div style="background-color:#E2EEFC;cursor:pointer;width:190px;height:21px" onclick="showSource(4)"><b>气压</b></div></li><li id="blockSource4" style="display:none"><ul style="padding:2px 0px 5px 20px">';
		 ht+='<li onclick="doSelectRadio(\'V10004\',\'本站气压\',\'pressure\')"><input type="radio" name="q_dataType" value="V10004" /><span style="cursor:pointer">本站气压</span></li>';
	     ht+='<li onclick="doSelectRadio(\'V10201\',\'最高本站气压\',\'pressure\')"><input type="radio" name="q_dataType" value="V10201" /><span style="cursor:pointer">最高本站气压</span></li>';
	     ht+='<li onclick="doSelectRadio(\'V10202\',\'最低本站气压\',\'pressure\')"><input type="radio" name="q_dataType" value="V10202" /><span style="cursor:pointer">最低本站气压</span></li>';
      
	  ht+='</ul></li><li><div style="background-color:#C3DBEB;cursor:pointer;width:190px;height:21px" onclick="showSource(5)"><b>湿度</b></div></li><li id="blockSource5" style="display:none"><ul style="padding:2px 0px 5px 20px">';	  
	     ht+='<li onclick="doSelectRadio(\'V13003\',\'相对湿度\',\'humidity\')"><input type="radio" name="q_dataType" value="V13003" /><span style="cursor:pointer">相对湿度</span></li>';
	     ht+='<li onclick="doSelectRadio(\'V13007\',\'最小相对湿度\',\'humidity\')"><input type="radio" name="q_dataType" value="V13007" /><span style="cursor:pointer">最小相对湿度</span></li>';
	  ht+='</ul></li></ul>';
	  
	  doRadioRain('hour1');
	} else {
	  ht='<span style="cursor:pointer;" onclick="selectMenuType(\'hour\')">小时资料</span>&nbsp;<span style="cursor:pointer;background-color:#F1F8FC;font-weight:bold;color:#0778C5" onclick="selectMenuType(\'leiji\')">累计降水资料</span>';
	  ht+='<ul style="padding:5px;background-color:#F1F8FC;">';
	  ht+='<li onclick="doRadioRain(\'p24\')"><input type="radio" name="q_dataType" value="p24" onclick="doRadioRain(\'p24\')" checked /><span style="cursor:pointer">24小时累计降水</span></li>';
	  ht+='<li onclick="doRadioRain(\'s08\');"><input type="radio" name="q_dataType" id="rollRainRadio" value="s08" onclick="doRadioRain(\'s08\')" /><span style="cursor:pointer">08时开始的累计降水</span></li>';
      ht+='</ul>';
	  
	  doRadioRain('p24');
	}
	document.getElementById("sourceMenu").innerHTML = ht;
	currentType="rain";
}

function showSource(n){
   for ( var i=1;i<6;i++ ) {
      if ( i != n ) {
	     $("#blockSource"+i).hide();
	  } else $("#blockSource"+i).show();
   } 
}

function selectType(v,isQueryData){
    document.getElementById("checkOptValue").checked = (v == "rain");
	currentType=v;
}

function doSelectRadio(v,n,t){
	gMapTitle = "全国地面自动站"+n+"实况图IBRIIDATEI";
	selectedEleCode = v;
	currentType = t;
	var rs=document.getElementsByName("q_dataType");
    for (var i = 0; i < rs.length; i++) {
    	if ( rs[i].value == v ) {
    		rs[i].checked = true;
    		break;
    	}
    }
    if ( v=='V11002_002' || v=='V11042_010' || v=='V11042' || v=='V11041' ) {
    	unit="m/s";
    } else if ( v == "V12001" || v=='V12211' || v=='V12212' ){
    	unit="℃";
    } else if ( v == "V11001_002" || v=='V11202_010' || v=='V11202' || v=='V11043' ) {
	    unit="度";
	} else if ( v == "V10004" || v=='V10201' || v=='V10202' ) {
	    unit="hpa";
	} else if ( v == "V13003" || v=='V13007' ) {
	    unit="%";
	} else unit="mm";
	
	if ( unit != 'mm' ) {
	    document.getElementById("p24").style.display="none";
		document.getElementById("hour1").style.display="block";
		document.getElementById("s08").style.display="none";
		document.getElementById("timeSelect").style.display="block";
		if ( unit == 'm/s' ) {
		  document.getElementById("checkOptValue").checked = true;
		} else {
		  document.getElementById("checkOptValue").checked = false;
		}
	} else {
	    document.getElementById("checkOptValue").checked = true;
	}
	document.getElementById("unitTxt").innerHTML = unit;
}

function stationFocus(){
	var stationIds = document.getElementById("q_stationIds").value;
	if ( stationIds == '请输入站号' ) {
		document.getElementById("q_stationIds").value = "";
	}
}

function stationIdsBlur(){
	var stationIds = document.getElementById("q_stationIds").value;
	if ( stationIds == '' ) {
        document.getElementById("q_stationIds").value = "请输入站号";
  }
}

function selectArea(str){
     var rs=str.split(",");
     document.getElementById("q_lon2").value=Math.round(rs[0]*10)/10;
	 document.getElementById("q_lon1").value=Math.round(rs[1]*10)/10;
	 document.getElementById("q_lat2").value=Math.round(rs[2]*10)/10;
	 document.getElementById("q_lat1").value=Math.round(rs[3]*10)/10;
	 showBox('box_stationQuery',true,true);
	 selectY(3);
}

function changeValueType(){
    selectSource(3);
}

////////////// toolbar box 
function showBox(boxId,isShow,stillShow){
   if ( !stillShow ) {
    stillShow=false;
   } else stillShow = true;
   
   if ( isShow ) {
     if ( boxId == 'box_leida' && !isCanUseLeida ) {
	    top.showInfoWin("只有与雷达回波相关的要素提供演示功能");
	    return ;
	 } else {
	    if ( document.getElementById( boxId ).style.display == '' || document.getElementById( boxId ).style.display == 'block' ) {
		   if ( !stillShow ) $('#'+boxId).hide();
		} else $('#'+boxId).show();
	 }
   } else $('#'+boxId).hide();
}

function setDoOpt(str){
   var mapFrame = document.getElementById("mapFrame");
   if ( mapFrame ) mapFrame.contentWindow.setDoOpt( str );
}

function setDoGoto(str){
   var mapFrame = document.getElementById("mapFrame");
   if ( mapFrame ) mapFrame.contentWindow.setDoGoto( str );
}

function toMapZoomLevel(n){
   $('#ruleLine').css({"padding-top":(108 - n*20)+"px"});
}

function closeTip(){
   $('#mapTooltip_LB').hide();
   $('#mapTooltip_LT').hide();
   $('#mapTooltip_RB').hide();
   $('#mapTooltip_RT').hide();
}

function showToolTip(isShow,stationName,proCode,value,qc,dotId,ox,oy,cSign,f2){
   $('#mapTooltip_LB').hide();
   $('#mapTooltip_LT').hide();
   $('#mapTooltip_RB').hide();
   $('#mapTooltip_RT').hide();
   if ( !isShow ) {
	  return ;
   }
   proName = top.getCodeName( "PROVINCE", proCode );
   currentDotId = dotId;
   var d = "";
   if ( ox > 600 ) {
      d = "R";
	  ox = ox - 290;
   } else {
      d = "L";
	  ox = ox - 35;
   }
   if ( oy > 300 ) {
      d += "B";
	  oy = oy - 175;
   } else {
      d+="T";
	  oy = oy + 80;
   }
   var cSignName = "无";
   if ( qc == '可疑' || qc == '错误' ) cSignName = "未下发";
   if ( cSign == '2' ) {
	  cSignName = top.getCodeName( "CMA_CONFIRM_RESULT", f2 , "已反馈");
   } else if ( cSign == '1' ) {
      cSignName = "已下发待反馈";
   } else if ( cSign == '0' ) {
      cSignName = "未下发";
   }
   $('#mapTooltip_'+d).css({"left":ox+"px","top":oy+"px"});
   $('#mapTooltip_'+d+"_dotId").html( top.getCode2ASII(dotId) );
   $('#mapTooltip_'+d+"_stationName").html(stationName);
   $('#mapTooltip_'+d+"_proName").html(proName);
   $('#mapTooltip_'+d+"_value").html(value + "&nbsp;" + unit );
   $('#mapTooltip_'+d+"_qc").html(qc);
   $('#mapTooltip_'+d+"_fankui").html( cSignName );
   $('#mapTooltip_'+d).show();
   detailStationName=stationName;
   detailValue=value;
}

function showStationDetail(){
  var xurl="";
  if ( q_c_code == 'p24' || q_c_code == 's08' ) {
     var s_time="";
	 var v4 = 0;
	 if ( q_c_code == 'p24' ) {
	   v4=document.getElementById("q_time24").value;
	   v4=Number(v4)+8;
	   if ( v4 > 24 ) v4=v4-24;
	   s_time = document.getElementById("datepicker").value+" "+top.getTwoNumberStr(v4);
	 } else {
	    var today=new Date();
		var v1 = today.getFullYear();
		var v2 = today.getMonth() + 1;
		var v3 = today.getDate();
		v4 = today.getHours() - 1;
		s_time = v1+"-"+top.getTwoNumberStr(Number(v2))+"-"+top.getTwoNumberStr(Number(v3))+" "+top.getTwoNumberStr(v4);
	 }
     xurl=top.getUrlBase()+"/pages/pro01/dataList24.html?stationIds="+currentDotId+"&time="+s_time;
     top.openDialog("24小时明细列表("+detailStationName+")降水量:"+detailValue+"mm",xurl,false,800,450,null);
     return ;
  }
  xurl=top.getUrlBase()+"/pages/pro01/stationInfo.html?q_c_code="+q_c_code+"&stationCode="+currentDotId+"&q_v04001="+q_v04001+"&q_v04002="+q_v04002+"&q_v04003="+q_v04003+"&q_v04004="+q_v04004;
  top.openDialog("降雨量与气温时序图",xurl,false,862,430,null);
}
 
function doPlayRadar(){
    var mapFrame = document.getElementById("mapFrame");
    if ( radarPlay ) {
	  radarPlay = false;
	  clearInterval( interLeidaPlay );
	  $("#playRadarBtnTxt").html("开始");
	} else {
	  startLeidaPlayTime = toWorldTimestamp( $("#datepicker_leida1").val() + " " + $("#datepicker_leida1_hour").val() + ":"+ $("#datepicker_leida1_min").val() + ":00" );
	  endLeidaPlayTime = toWorldTimestamp( $("#datepicker_leida2").val() + " " + $("#datepicker_leida2_hour").val() + ":"+ $("#datepicker_leida2_min").val() + ":00" );
	  radarPlay = true;
	  isGoToPlayMode = false;
	  currentLeidaPlayTime = startLeidaPlayTime;
	  $("#playRadarBtnTxt").html("结束");
	  playLeidaDel();
	  interLeidaPlay = setInterval("playLeidaDel()", Number($("#leida_speed").val()) );
	}
}

function goToPlayLeida(d){
    radarPlay = false;
	isGoToPlayMode = true;
	clearInterval( interLeidaPlay );
	$("#playRadarBtnTxt").html("开始");
    currentLeidaPlayTime += d;
	if ( currentLeidaPlayTime > endLeidaPlayTime ) currentLeidaPlayTime = startLeidaPlayTime;
	if ( currentLeidaPlayTime < startLeidaPlayTime ) currentLeidaPlayTime = endLeidaPlayTime;
	playLeidaDel();
}

function getCurrentPlayImgName(){
     try{
	     var ts = $('input[name="playImgType"]:checked').val();
		 isWeixing = (ts == 'weixing')?true:false;
		 var d=new Date();
		 d.setTime( currentLeidaPlayTime );
		 var str = d.getFullYear()+""+getTwoNumberStr(d.getMonth()+1)+""+getTwoNumberStr(d.getDate());
		 if ( isWeixing ) str += "-";
		 str +=getTwoNumberStr(d.getHours())+""+getTwoNumberStr(d.getMinutes());
		 if ( !isWeixing ) str+="00";
		 str += ".PNG";
	     return str;
	 }catch(e){
	     return "";
	 }
}

function playLeidaDel(){
    currentLeidaPlayName = getCurrentPlayImgName();
    var ht = "&nbsp;&nbsp;&nbsp;<img src='img/list_leftbg1.png' onclick='goToPlayLeida(-1800000)' style='cursor:pointer' height='16px' />&nbsp;";
	if ( isWeixing ) {
	 setLeidaStr( top.getFileResUrl() + "pro01/yunImg/" + currentLeidaPlayName );
	} else {
	 setLeidaStr( top.getFileResUrl() + "pro01/radarImg/" + currentLeidaPlayName );
	}
	ht += toPlayTimeStr();
	ht += "&nbsp;<img src='img/list_rigbg1.png' onclick='goToPlayLeida(1800000)' style='cursor:pointer' height='16px'/>";
    $("#currentLeidaPlayInfo").html( ht );

	if ( !isGoToPlayMode ) {
	 currentLeidaPlayTime += 1800000;
	 if ( currentLeidaPlayTime > endLeidaPlayTime ) currentLeidaPlayTime = startLeidaPlayTime;
	 if ( currentLeidaPlayTime < startLeidaPlayTime ) currentLeidaPlayTime = endLeidaPlayTime;
	}
}

function toPlayTimeStr(name){
    var d=new Date();
	d.setTime( currentLeidaPlayTime + 8*60*60000 );
	var str = d.getFullYear()+"年"+getTwoNumberStr(d.getMonth()+1)+"月"+getTwoNumberStr(d.getDate())+"日";
	str +=getTwoNumberStr(d.getHours())+"时"+getTwoNumberStr(d.getMinutes())+"分";
    return str;
}

function enableLeida(){
	var str = "hide";
	if ( document.getElementById("isLeidaOver").checked ) {
	  str = "show";
	}
	setLeidaStr(str);
}

function setLeidaStr(str){
    try{
	  var mapFrame = document.getElementById("mapFrame");
      if ( mapFrame ) mapFrame.contentWindow.doPlayRadar( str );
	}catch(e){
	}
}