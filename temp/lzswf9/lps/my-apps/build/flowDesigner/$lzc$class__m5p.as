package {
dynamic class $lzc$class__m5p extends LzView {
/* -*- file: lz/list.lzx#73 -*- */
static var displayName = "<anonymous extends='view'>";static var children = [{attrs: {$classrootdepth: 2, $delegates: ["onaddsubview", "$m5l", null, "onheight", "$m5m", null], boundsref: new LzAlwaysExpr("$m5h", "$m5i", null), deactivateevents: ["onmouseup", "onselect"], name: "content", tracking: new LzAlwaysExpr("$m5f", "$m5g", null), width: new LzAlwaysExpr("$m5d", "$m5e", null)}, "class": $lzc$class__m5q}];static var attributes = new LzInheritedHash(LzView.attributes);function $m55 ($0) {
/* -*- file: #72 -*- */
var $1 = classroot.border_left;
/* -*- file: -*- */
if ($1 !== this["x"] || !this.inited) {
this.setAttribute("x", $1)
}}
/* -*- file: lz/list.lzx#72 -*- */
function $m56 () {
/* -*- file: -*- */
try {
/* -*- file: lz/list.lzx#75 -*- */
return [classroot, "border_left"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
/* -*- file: lz/list.lzx#72 -*- */
function $m57 ($0) {
/* -*- file: #72 -*- */
var $1 = classroot.border_top;
/* -*- file: -*- */
if ($1 !== this["y"] || !this.inited) {
this.setAttribute("y", $1)
}}
/* -*- file: lz/list.lzx#72 -*- */
function $m58 () {
/* -*- file: -*- */
try {
/* -*- file: lz/list.lzx#75 -*- */
return [classroot, "border_top"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
/* -*- file: lz/list.lzx#72 -*- */
function $m59 ($0) {
/* -*- file: #72 -*- */
var $1 = classroot.width - classroot.border_right - classroot.border_left;
/* -*- file: -*- */
if ($1 !== this["width"] || !this.inited) {
this.setAttribute("width", $1)
}}
/* -*- file: lz/list.lzx#72 -*- */
function $m5a () {
/* -*- file: -*- */
try {
/* -*- file: lz/list.lzx#75 -*- */
return [classroot, "width", classroot, "border_right", classroot, "border_left"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
/* -*- file: lz/list.lzx#72 -*- */
function $m5b ($0) {
/* -*- file: #72 -*- */
var $1 = classroot._bgcolor;
/* -*- file: -*- */
if ($1 !== this["bgcolor"] || !this.inited) {
this.setAttribute("bgcolor", $1)
}}
/* -*- file: lz/list.lzx#72 -*- */
function $m5c () {
/* -*- file: -*- */
try {
/* -*- file: lz/list.lzx#75 -*- */
return [classroot, "_bgcolor"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
var _sbar;var onmousetrackoutleft;var onmousetrackoutright;var content;function ensurevscrollbar () {
/* -*- file: lz/list.lzx#113 -*- */
if (this._sbar == null) {
var $0 = classroot.scrollbarclassname;
if ($0 == "") {
$0 = "vscrollbar"
};
if ($0 && lz[$0]) {
this._sbar = new (lz[$0])(this, {stepsize: "20"})
}}}





function showvscrollbar () {
if (this._sbar == null) {
this.ensurevscrollbar()
};
this._sbar.setAttribute("visible", true);
classroot.setAttribute("rightinset", this._sbar.width)
}

function hidevscrollbar () {
if (this._sbar != null) {
this._sbar.setAttribute("visible", false)
};
classroot.setAttribute("rightinset", 0)
}

function vscrollbarisvisible () {
return this._sbar != null && this._sbar.visible
}

function $m5n ($0) {
if (this.vscrollbarisvisible()) _sbar.step(1)
}

function $m5o ($0) {
if (this.vscrollbarisvisible()) _sbar.step(-1)
}
/* -*- file: -*- */
var $classrootdepth;function $lzc$class__m5p ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
LzNode.mergeAttributes({$CSSDescriptor: {}, $attributeDescriptor: {types: {aaactive: "boolean", aadescription: "string", aaname: "string", aasilent: "boolean", aatabindex: "number", align: "string", backgroundrepeat: "string", bgcolor: "color", cachebitmap: "boolean", capabilities: "string", classroot: "string", clickable: "boolean", clickregion: "string", clip: "boolean", cloneManager: "string", contextmenu: "string", cornerradius: "string", cursor: "token", datapath: "string", defaultplacement: "string", fgcolor: "color", focusable: "boolean", focustrap: "boolean", font: "string", fontsize: "size", fontstyle: "string", frame: "numberExpression", framesloadratio: "number", hasdirectionallayout: "boolean", hassetheight: "boolean", hassetwidth: "boolean", height: "size", id: "ID", ignoreplacement: "boolean", immediateparent: "string", inited: "boolean", initstage: "string", layout: "css", loadratio: "number", mask: "string", name: "token", nodeLevel: "number", opacity: "number", options: "css", parent: "string", pixellock: "boolean", placement: "string", playing: "boolean", resource: "string", resourceheight: "number", resourcewidth: "number", rotation: "numberExpression", shadowangle: "number", shadowblurradius: "number", shadowcolor: "color", shadowdistance: "number", showhandcursor: "boolean", source: "string", stretches: "string", styleclass: "string", subnodes: "string", subviews: "string", tintcolor: "string", totalframes: "number", transition: "string", unstretchedheight: "number", unstretchedwidth: "number", usegetbounds: "boolean", valign: "string", visibility: "string", visible: "boolean", width: "size", "with": "string", x: "numberExpression", xoffset: "numberExpression", xscale: "numberExpression", y: "numberExpression", yoffset: "numberExpression", yscale: "numberExpression"}}}, $lzc$class__m5p.attributes);}
}
