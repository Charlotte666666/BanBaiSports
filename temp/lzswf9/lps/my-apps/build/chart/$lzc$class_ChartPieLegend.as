package {
dynamic class $lzc$class_ChartPieLegend extends LzView {
/* -*- file: common/components/Chart.lzx#948 -*- */
static var tagname = "ChartPieLegend";static var children = [{attrs: {$classrootdepth: 1, $delegates: ["onclick", "$m1n", null, "onmouseover", "$m1o", null, "onmouseout", "$m1p", null], bgcolor: new LzAlwaysExpr("$m1l", "$m1m", null), clickable: true, height: 10, name: "dot", opacity: 0.7, width: 10, y: 5}, "class": $lzc$class__m1v}, {attrs: {$classrootdepth: 1, $delegates: ["onclick", "$m1s", null, "onmouseover", "$m1t", null, "onmouseout", "$m1u", null], clickable: true, fgcolor: 6710886, fontsize: 14, name: "txt", text: new LzAlwaysExpr("$m1q", "$m1r", null)}, "class": $lzc$class__m1w}];static var attributes = new LzInheritedHash(LzView.attributes);var clickId;var val;var label;var targetX;var targetY;var dotColor;function $m1i ($0) {







parent.doClick(this.clickId)
}

function $m1j ($0) {
if (this.val > 0) {
parent.showPieTooltip(true, this)
};
this.txt.setAttribute("opacity", 0.6)
}

function $m1k ($0) {
parent.showPieTooltip(false, this);
this.txt.setAttribute("opacity", 1)
}
/* -*- file: -*- */
var dot;var txt;function $lzc$class_ChartPieLegend ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
LzNode.mergeAttributes({$CSSDescriptor: {}, $attributeDescriptor: {types: {aaactive: "boolean", aadescription: "string", aaname: "string", aasilent: "boolean", aatabindex: "number", align: "string", backgroundrepeat: "string", bgcolor: "color", cachebitmap: "boolean", capabilities: "string", classroot: "string", clickId: "string", clickable: "boolean", clickregion: "string", clip: "boolean", cloneManager: "string", contextmenu: "string", cornerradius: "string", cursor: "token", datapath: "string", defaultplacement: "string", dotColor: "color", fgcolor: "color", focusable: "boolean", focustrap: "boolean", font: "string", fontsize: "size", fontstyle: "string", frame: "numberExpression", framesloadratio: "number", hasdirectionallayout: "boolean", hassetheight: "boolean", hassetwidth: "boolean", height: "size", id: "ID", ignoreplacement: "boolean", immediateparent: "string", inited: "boolean", initstage: "string", label: "string", layout: "css", loadratio: "number", mask: "string", name: "token", nodeLevel: "number", opacity: "number", options: "css", parent: "string", pixellock: "boolean", placement: "string", playing: "boolean", resource: "string", resourceheight: "number", resourcewidth: "number", rotation: "numberExpression", shadowangle: "number", shadowblurradius: "number", shadowcolor: "color", shadowdistance: "number", showhandcursor: "boolean", source: "string", stretches: "string", styleclass: "string", subnodes: "string", subviews: "string", targetX: "number", targetY: "number", tintcolor: "string", totalframes: "number", transition: "string", unstretchedheight: "number", unstretchedwidth: "number", usegetbounds: "boolean", val: "number", valign: "string", visibility: "string", visible: "boolean", width: "size", "with": "string", x: "numberExpression", xoffset: "numberExpression", xscale: "numberExpression", y: "numberExpression", yoffset: "numberExpression", yscale: "numberExpression"}}, $delegates: ["onclick", "$m1i", null, "onmouseover", "$m1j", null, "onmouseout", "$m1k", null], clickId: "", clickable: true, dotColor: 65280, height: 20, label: "", layout: {axis: "x", spacing: 2}, targetX: 0, targetY: 0, val: 0, width: 100}, $lzc$class_ChartPieLegend.attributes);}
}
