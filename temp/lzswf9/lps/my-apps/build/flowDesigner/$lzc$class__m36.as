package {
dynamic class $lzc$class__m36 extends LzView {
/* -*- file: lz/button.lzx#162 -*- */
static var displayName = "<anonymous extends='view'>";static var attributes = new LzInheritedHash(LzView.attributes);function $m2h ($0) {
/* -*- file: #161 -*- */
var $1 = parent.parent.width - 2;
/* -*- file: -*- */
if ($1 !== this["x"] || !this.inited) {
this.setAttribute("x", $1)
}}
/* -*- file: lz/button.lzx#161 -*- */
function $m2i () {
/* -*- file: -*- */
try {
/* -*- file: lz/button.lzx#164 -*- */
return [parent.parent, "width"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
/* -*- file: lz/button.lzx#161 -*- */
function $m2j ($0) {
/* -*- file: #161 -*- */
var $1 = parent.parent.height - 2;
/* -*- file: -*- */
if ($1 !== this["height"] || !this.inited) {
this.setAttribute("height", $1)
}}
/* -*- file: lz/button.lzx#161 -*- */
function $m2k () {
/* -*- file: -*- */
try {
/* -*- file: lz/button.lzx#164 -*- */
return [parent.parent, "height"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
var $classrootdepth;function $lzc$class__m36 ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
LzNode.mergeAttributes({$CSSDescriptor: {}, $attributeDescriptor: {types: {aaactive: "boolean", aadescription: "string", aaname: "string", aasilent: "boolean", aatabindex: "number", align: "string", backgroundrepeat: "string", bgcolor: "color", cachebitmap: "boolean", capabilities: "string", classroot: "string", clickable: "boolean", clickregion: "string", clip: "boolean", cloneManager: "string", contextmenu: "string", cornerradius: "string", cursor: "token", datapath: "string", defaultplacement: "string", fgcolor: "color", focusable: "boolean", focustrap: "boolean", font: "string", fontsize: "size", fontstyle: "string", frame: "numberExpression", framesloadratio: "number", hasdirectionallayout: "boolean", hassetheight: "boolean", hassetwidth: "boolean", height: "size", id: "ID", ignoreplacement: "boolean", immediateparent: "string", inited: "boolean", initstage: "string", layout: "css", loadratio: "number", mask: "string", name: "token", nodeLevel: "number", opacity: "number", options: "css", parent: "string", pixellock: "boolean", placement: "string", playing: "boolean", resource: "string", resourceheight: "number", resourcewidth: "number", rotation: "numberExpression", shadowangle: "number", shadowblurradius: "number", shadowcolor: "color", shadowdistance: "number", showhandcursor: "boolean", source: "string", stretches: "string", styleclass: "string", subnodes: "string", subviews: "string", tintcolor: "string", totalframes: "number", transition: "string", unstretchedheight: "number", unstretchedwidth: "number", usegetbounds: "boolean", valign: "string", visibility: "string", visible: "boolean", width: "size", "with": "string", x: "numberExpression", xoffset: "numberExpression", xscale: "numberExpression", y: "numberExpression", yoffset: "numberExpression", yscale: "numberExpression"}}}, $lzc$class__m36.attributes);}
}
