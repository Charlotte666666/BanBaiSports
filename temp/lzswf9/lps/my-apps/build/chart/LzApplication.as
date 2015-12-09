package {
  
import flash.display.*;
import flash.events.*;
import flash.utils.*;
import flash.text.*;
import flash.system.*;
import flash.net.*;
import flash.ui.*;
import flash.external.*;
public class LzApplication extends LFCApplication {
override public function runToplevelDefinitions () {;
;
canvas = new $lzc$class__m2(null, {$delegates: ["oninited", "$m1", null], __LZproxied: "false", appbuilddate: "2015-04-14T09:58:03Z", bgcolor: 15267068, dataStr: void 0, embedfonts: true, font: "Verdana,Vera,sans-serif", fontsize: 11, fontstyle: "plain", height: "100%", lpsbuild: "trunk@18454 (18454)", lpsbuilddate: "2011-02-10T21:32:32Z", lpsrelease: "Latest", lpsversion: "5.0.x", runtime: "swf10", width: "100%"});/* -*- file: extensions/drawview.lzx#2149 -*- */
lz[$lzc$class_drawview.tagname] = $lzc$class_drawview;/* -*- file: extensions/drawview.lzx#2226 -*- */
lz.CanvasGradient = LzCanvasGradient;/* -*- file: chart.lzx#64 -*- */
canvas.LzInstantiateView({attrs: {$lzc$bind_name: function ($0:LzNode, $1:Boolean = true) {

if ($1) {






chart = $0;
global["chart"] = $0
} else if (chart === $0) {
chart = null;
global["chart"] = null
}}
/* -*- file: -*- */
, height: new LzAlwaysExpr("$m20", "$m21", null), name: "chart", width: new LzAlwaysExpr("$m1y", "$m1z", null)}, "class": $lzc$class__m22}, 3);lz["layout"] = LzLayout;lz["simplelayout"] = $lzc$class_simplelayout;lz["DrawTool"] = $lzc$class_DrawTool;lz["Chart"] = $lzc$class_Chart;lz["ChartBarColumn"] = $lzc$class_ChartBarColumn;lz["ChartLinedot"] = $lzc$class_ChartLinedot;lz["ChartPieLegend"] = $lzc$class_ChartPieLegend;lz["LabelText"] = $lzc$class_LabelText;addChild(canvas.sprite);canvas.initDone();}
public function LzApplication ($0:Sprite = null) {
super($0)
}
}
}
