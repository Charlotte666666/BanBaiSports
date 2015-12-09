package {
dynamic class $lzc$class__mei extends LzView {
/* -*- file: lz/alert.lzx#91 -*- */
static var displayName = "<anonymous extends='view'>";static var children = [{attrs: {$classrootdepth: 2, axis: "x", spacing: 5}, "class": $lzc$class_simplelayout}, {attrs: {$classrootdepth: 2, $delegates: ["onclick", "$me7", null], clickable: true, text: new LzAlwaysExpr("$me8", "$me9", null), visible: new LzAlwaysExpr("$mea", "$meb", null)}, "class": $lzc$class__mej}, {attrs: {$classrootdepth: 2, $delegates: ["onclick", "$mec", null], clickable: true, isdefault: true, name: "b1", text: new LzAlwaysExpr("$med", "$mee", null), visible: new LzAlwaysExpr("$mef", "$meg", null)}, "class": $lzc$class__mek}];static var attributes = new LzInheritedHash(LzView.attributes);function $me3 ($0) {
/* -*- file: #90 -*- */
var $1 = immediateparent.width > this.width ? immediateparent.width - this.width : 0;
/* -*- file: -*- */
if ($1 !== this["x"] || !this.inited) {
this.setAttribute("x", $1)
}}
/* -*- file: lz/alert.lzx#90 -*- */
function $me4 () {
/* -*- file: -*- */
try {
/* -*- file: lz/alert.lzx#93 -*- */
return [immediateparent, "width", this, "width"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
/* -*- file: lz/alert.lzx#90 -*- */
function $me5 ($0) {
/* -*- file: #90 -*- */
var $1 = immediateparent.alerttext.height + parent.content_inset_top;
/* -*- file: -*- */
if ($1 !== this["y"] || !this.inited) {
this.setAttribute("y", $1)
}}
/* -*- file: lz/alert.lzx#90 -*- */
function $me6 () {
/* -*- file: -*- */
try {
/* -*- file: lz/alert.lzx#93 -*- */
return [immediateparent.alerttext, "height", parent, "content_inset_top"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
var b1;var $classrootdepth;function $lzc$class__mei ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
LzNode.mergeAttributes({$CSSDescriptor: {}, $attributeDescriptor: {types: {aaactive: "boolean", aadescription: "string", aaname: "string", aasilent: "boolean", aatabindex: "number", align: "string", backgroundrepeat: "string", bgcolor: "color", cachebitmap: "boolean", capabilities: "string", classroot: "string", clickable: "boolean", clickregion: "string", clip: "boolean", cloneManager: "string", contextmenu: "string", cornerradius: "string", cursor: "token", datapath: "string", defaultplacement: "string", fgcolor: "color", focusable: "boolean", focustrap: "boolean", font: "string", fontsize: "size", fontstyle: "string", frame: "numberExpression", framesloadratio: "number", hasdirectionallayout: "boolean", hassetheight: "boolean", hassetwidth: "boolean", height: "size", id: "ID", ignoreplacement: "boolean", immediateparent: "string", inited: "boolean", initstage: "string", layout: "css", loadratio: "number", mask: "string", name: "token", nodeLevel: "number", opacity: "number", options: "css", parent: "string", pixellock: "boolean", placement: "string", playing: "boolean", resource: "string", resourceheight: "number", resourcewidth: "number", rotation: "numberExpression", shadowangle: "number", shadowblurradius: "number", shadowcolor: "color", shadowdistance: "number", showhandcursor: "boolean", source: "string", stretches: "string", styleclass: "string", subnodes: "string", subviews: "string", tintcolor: "string", totalframes: "number", transition: "string", unstretchedheight: "number", unstretchedwidth: "number", usegetbounds: "boolean", valign: "string", visibility: "string", visible: "boolean", width: "size", "with": "string", x: "numberExpression", xoffset: "numberExpression", xscale: "numberExpression", y: "numberExpression", yoffset: "numberExpression", yscale: "numberExpression"}}}, $lzc$class__mei.attributes);}
}
