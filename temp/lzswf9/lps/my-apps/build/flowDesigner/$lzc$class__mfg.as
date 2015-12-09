package {
dynamic class $lzc$class__mfg extends LzView {
/* -*- file: lz/window.lzx#41 -*- */
static var displayName = "<anonymous extends='view'>";static var attributes = new LzInheritedHash(LzView.attributes);function $men ($0) {
/* -*- file: #40 -*- */
var $1 = classroot.width - this.width - classroot.inset_right;
/* -*- file: -*- */
if ($1 !== this["x"] || !this.inited) {
this.setAttribute("x", $1)
}}
/* -*- file: lz/window.lzx#40 -*- */
function $meo () {
/* -*- file: -*- */
try {
/* -*- file: lz/window.lzx#43 -*- */
return [classroot, "width", this, "width", classroot, "inset_right"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
/* -*- file: lz/window.lzx#40 -*- */
function $mep ($0) {
/* -*- file: #40 -*- */
var $1 = classroot.height - this.height - classroot.inset_right;
/* -*- file: -*- */
if ($1 !== this["y"] || !this.inited) {
this.setAttribute("y", $1)
}}
/* -*- file: lz/window.lzx#40 -*- */
function $meq () {
/* -*- file: -*- */
try {
/* -*- file: lz/window.lzx#43 -*- */
return [classroot, "height", this, "height", classroot, "inset_right"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
/* -*- file: lz/window.lzx#40 -*- */
function $mer ($0) {
/* -*- file: #40 -*- */
if (this.frame == 1) setAttribute("frame", 2)
}
/* -*- file: #40 -*- */
function $mes ($0) {
/* -*- file: #40 -*- */
if (this.frame == 2) setAttribute("frame", 1)
}
/* -*- file: #40 -*- */
function $met ($0) {
/* -*- file: #40 -*- */
classroot._startResize();
/* -*- file: #40 -*- */
setAttribute("frame", 3)
}
/* -*- file: #40 -*- */
function $meu ($0) {
/* -*- file: #40 -*- */
classroot._stopResize();
/* -*- file: #40 -*- */
setAttribute("frame", 1)
}
/* -*- file: #40 -*- */
function $mev ($0) {
/* -*- file: #40 -*- */
classroot.setTint(this, classroot.style.basecolor)
}
/* -*- file: -*- */
var $classrootdepth;function $lzc$class__mfg ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
LzNode.mergeAttributes({$CSSDescriptor: {}, $attributeDescriptor: {types: {aaactive: "boolean", aadescription: "string", aaname: "string", aasilent: "boolean", aatabindex: "number", align: "string", backgroundrepeat: "string", bgcolor: "color", cachebitmap: "boolean", capabilities: "string", classroot: "string", clickable: "boolean", clickregion: "string", clip: "boolean", cloneManager: "string", contextmenu: "string", cornerradius: "string", cursor: "token", datapath: "string", defaultplacement: "string", fgcolor: "color", focusable: "boolean", focustrap: "boolean", font: "string", fontsize: "size", fontstyle: "string", frame: "numberExpression", framesloadratio: "number", hasdirectionallayout: "boolean", hassetheight: "boolean", hassetwidth: "boolean", height: "size", id: "ID", ignoreplacement: "boolean", immediateparent: "string", inited: "boolean", initstage: "string", layout: "css", loadratio: "number", mask: "string", name: "token", nodeLevel: "number", opacity: "number", options: "css", parent: "string", pixellock: "boolean", placement: "string", playing: "boolean", resource: "string", resourceheight: "number", resourcewidth: "number", rotation: "numberExpression", shadowangle: "number", shadowblurradius: "number", shadowcolor: "color", shadowdistance: "number", showhandcursor: "boolean", source: "string", stretches: "string", styleclass: "string", subnodes: "string", subviews: "string", tintcolor: "string", totalframes: "number", transition: "string", unstretchedheight: "number", unstretchedwidth: "number", usegetbounds: "boolean", valign: "string", visibility: "string", visible: "boolean", width: "size", "with": "string", x: "numberExpression", xoffset: "numberExpression", xscale: "numberExpression", y: "numberExpression", yoffset: "numberExpression", yscale: "numberExpression"}}}, $lzc$class__mfg.attributes);}
}
