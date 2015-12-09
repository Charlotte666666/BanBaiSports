package {
dynamic class $lzc$class__m11 extends LzView {
/* -*- file: common/components/Chart.lzx#875 -*- */
static var displayName = "<anonymous extends='view'>";static var children = [{attrs: {$classrootdepth: 2, fgcolor: 16777215, fontsize: 15, fontstyle: "bold", multiline: true, name: "txt", text: "", textalign: "center", valign: "middle", width: new LzAlwaysExpr("$mz", "$m10", null)}, "class": $lzc$class__m12}];static var attributes = new LzInheritedHash(LzView.attributes);function $mu ($0) {
/* -*- file: #874 -*- */
var $1 = classroot.width / 2 - 50;
/* -*- file: -*- */
if ($1 !== this["x"] || !this.inited) {
this.setAttribute("x", $1)
}}
/* -*- file: common/components/Chart.lzx#874 -*- */
function $mv () {
/* -*- file: -*- */
try {
/* -*- file: common/components/Chart.lzx#877 -*- */
return [classroot, "width"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
/* -*- file: common/components/Chart.lzx#874 -*- */
function $mw ($0) {
/* -*- file: #874 -*- */
var $1 = classroot.tooltipWidth;
/* -*- file: -*- */
if ($1 !== this["width"] || !this.inited) {
this.setAttribute("width", $1)
}}
/* -*- file: common/components/Chart.lzx#874 -*- */
function $mx () {
/* -*- file: -*- */
try {
/* -*- file: common/components/Chart.lzx#877 -*- */
return [classroot, "tooltipWidth"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
/* -*- file: common/components/Chart.lzx#875 -*- */
function $my ($0) {
this.draw = new (lz.DrawTool)(this);
this.draw.drawOvalRect(0, 0, this.width, this.height, 95455);
this.txt.bringToFront()
}
/* -*- file: -*- */
var txt;var $classrootdepth;function $lzc$class__m11 ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
LzNode.mergeAttributes({$CSSDescriptor: {}, $attributeDescriptor: {types: {aaactive: "boolean", aadescription: "string", aaname: "string", aasilent: "boolean", aatabindex: "number", align: "string", backgroundrepeat: "string", bgcolor: "color", cachebitmap: "boolean", capabilities: "string", classroot: "string", clickable: "boolean", clickregion: "string", clip: "boolean", cloneManager: "string", contextmenu: "string", cornerradius: "string", cursor: "token", datapath: "string", defaultplacement: "string", fgcolor: "color", focusable: "boolean", focustrap: "boolean", font: "string", fontsize: "size", fontstyle: "string", frame: "numberExpression", framesloadratio: "number", hasdirectionallayout: "boolean", hassetheight: "boolean", hassetwidth: "boolean", height: "size", id: "ID", ignoreplacement: "boolean", immediateparent: "string", inited: "boolean", initstage: "string", layout: "css", loadratio: "number", mask: "string", name: "token", nodeLevel: "number", opacity: "number", options: "css", parent: "string", pixellock: "boolean", placement: "string", playing: "boolean", resource: "string", resourceheight: "number", resourcewidth: "number", rotation: "numberExpression", shadowangle: "number", shadowblurradius: "number", shadowcolor: "color", shadowdistance: "number", showhandcursor: "boolean", source: "string", stretches: "string", styleclass: "string", subnodes: "string", subviews: "string", tintcolor: "string", totalframes: "number", transition: "string", unstretchedheight: "number", unstretchedwidth: "number", usegetbounds: "boolean", valign: "string", visibility: "string", visible: "boolean", width: "size", "with": "string", x: "numberExpression", xoffset: "numberExpression", xscale: "numberExpression", y: "numberExpression", yoffset: "numberExpression", yscale: "numberExpression"}}}, $lzc$class__m11.attributes);}
}
