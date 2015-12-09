package {
dynamic class $lzc$class__m1v extends LzView {
/* -*- file: common/components/Chart.lzx#973 -*- */
static var displayName = "<anonymous extends='view'>";static var attributes = new LzInheritedHash(LzView.attributes);function $m1l ($0) {
/* -*- file: #972 -*- */
var $1 = parent.dotColor;
/* -*- file: -*- */
if ($1 !== this["bgcolor"] || !this.inited) {
this.setAttribute("bgcolor", $1)
}}
/* -*- file: common/components/Chart.lzx#972 -*- */
function $m1m () {
/* -*- file: -*- */
try {
/* -*- file: common/components/Chart.lzx#975 -*- */
return [parent, "dotColor"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
/* -*- file: common/components/Chart.lzx#972 -*- */
function $m1n ($0) {
/* -*- file: #972 -*- */
parent.onclick.sendEvent()
}
/* -*- file: #972 -*- */
function $m1o ($0) {
/* -*- file: #972 -*- */
parent.onmouseover.sendEvent()
}
/* -*- file: #972 -*- */
function $m1p ($0) {
/* -*- file: #972 -*- */
parent.onmouseout.sendEvent()
}
/* -*- file: -*- */
var $classrootdepth;function $lzc$class__m1v ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
LzNode.mergeAttributes({$CSSDescriptor: {}, $attributeDescriptor: {types: {aaactive: "boolean", aadescription: "string", aaname: "string", aasilent: "boolean", aatabindex: "number", align: "string", backgroundrepeat: "string", bgcolor: "color", cachebitmap: "boolean", capabilities: "string", classroot: "string", clickable: "boolean", clickregion: "string", clip: "boolean", cloneManager: "string", contextmenu: "string", cornerradius: "string", cursor: "token", datapath: "string", defaultplacement: "string", fgcolor: "color", focusable: "boolean", focustrap: "boolean", font: "string", fontsize: "size", fontstyle: "string", frame: "numberExpression", framesloadratio: "number", hasdirectionallayout: "boolean", hassetheight: "boolean", hassetwidth: "boolean", height: "size", id: "ID", ignoreplacement: "boolean", immediateparent: "string", inited: "boolean", initstage: "string", layout: "css", loadratio: "number", mask: "string", name: "token", nodeLevel: "number", opacity: "number", options: "css", parent: "string", pixellock: "boolean", placement: "string", playing: "boolean", resource: "string", resourceheight: "number", resourcewidth: "number", rotation: "numberExpression", shadowangle: "number", shadowblurradius: "number", shadowcolor: "color", shadowdistance: "number", showhandcursor: "boolean", source: "string", stretches: "string", styleclass: "string", subnodes: "string", subviews: "string", tintcolor: "string", totalframes: "number", transition: "string", unstretchedheight: "number", unstretchedwidth: "number", usegetbounds: "boolean", valign: "string", visibility: "string", visible: "boolean", width: "size", "with": "string", x: "numberExpression", xoffset: "numberExpression", xscale: "numberExpression", y: "numberExpression", yoffset: "numberExpression", yscale: "numberExpression"}}}, $lzc$class__m1v.attributes);}
}
