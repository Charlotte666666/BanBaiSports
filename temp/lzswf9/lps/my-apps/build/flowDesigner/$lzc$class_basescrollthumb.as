package {
dynamic class $lzc$class_basescrollthumb extends $lzc$class_basecomponent {
/* -*- file: base/basescrollbar.lzx#510 -*- */
static var tagname = "basescrollthumb";static var children = [{attrs: {$CSSDescriptor: {}, $attributeDescriptor: {types: {applied: "boolean", classroot: "string", cloneManager: "string", datapath: "string", defaultplacement: "string", id: "ID", ignoreplacement: "boolean", immediateparent: "string", inited: "boolean", initstage: "string", name: "token", nodeLevel: "number", options: "css", parent: "string", placement: "string", pooling: "boolean", styleclass: "string", subnodes: "string", transition: "string", "with": "string"}}, $classrootdepth: 1, $m46: function  ($0) {
/* -*- file: #568 -*- */
this.setAttribute("doffset", this.getMouse("y"))
}
/* -*- file: -*- */
, $m47: function  ($0) {
/* -*- file: base/basescrollbar.lzx#570 -*- */
var $1 = this.thumbControl(this.immediateparent.getMouse("y"));
/* -*- file: -*- */
if ($1 !== this["y"] || !this.inited) {
this.setAttribute("y", $1)
}}
, $m48: function  () {
with (this) {
try {
/* -*- file: base/basescrollbar.lzx#573 -*- */
return ([]).concat($lzc$getFunctionDependencies("thumbControl", this, this, [this.immediateparent.getMouse("y")], null)).concat($lzc$getFunctionDependencies("getMouse", this, this.immediateparent, ["y"], null))
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}}
, doffset: new LzOnceExpr("$m46", null), name: "ythumbdrag", y: new LzAlwaysExpr("$m47", "$m48", null)}, "class": LzState}, {attrs: {$CSSDescriptor: {}, $attributeDescriptor: {types: {applied: "boolean", classroot: "string", cloneManager: "string", datapath: "string", defaultplacement: "string", id: "ID", ignoreplacement: "boolean", immediateparent: "string", inited: "boolean", initstage: "string", name: "token", nodeLevel: "number", options: "css", parent: "string", placement: "string", pooling: "boolean", styleclass: "string", subnodes: "string", transition: "string", "with": "string"}}, $classrootdepth: 1, $m49: function  ($0) {
/* -*- file: base/basescrollbar.lzx#574 -*- */
this.setAttribute("doffset", this.getMouse("x"))
}
/* -*- file: -*- */
, $m4a: function  ($0) {
/* -*- file: base/basescrollbar.lzx#576 -*- */
var $1 = this.thumbControl(this.immediateparent.getMouse("x"));
/* -*- file: -*- */
if ($1 !== this["x"] || !this.inited) {
this.setAttribute("x", $1)
}}
, $m4b: function  () {
with (this) {
try {
/* -*- file: base/basescrollbar.lzx#579 -*- */
return ([]).concat($lzc$getFunctionDependencies("thumbControl", this, this, [this.immediateparent.getMouse("x")], null)).concat($lzc$getFunctionDependencies("getMouse", this, this.immediateparent, ["x"], null))
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}}
, doffset: new LzOnceExpr("$m49", null), name: "xthumbdrag", x: new LzAlwaysExpr("$m4a", "$m4b", null)}, "class": LzState}];static var attributes = new LzInheritedHash($lzc$class_basecomponent.attributes);var target;var axis;var trackscroll;var targetscroll;var dragging;override function init () {
/* -*- file: base/basescrollbar.lzx#523 -*- */
super.init();
this.classroot.thumb = this
}


override function destroy () {
this.classroot.thumb = null;
this.target = null;

super.destroy()
}







function startDrag ($0 = null) {
if (this.dragging) return;
this.dragging = true;
var $1 = this.classroot;

$1.targetPosDel.disable();

var $2 = $1.sizeAxis;
this.target = $1.scrolltarget;
this.axis = $1.axis;
this.trackscroll = this.immediateparent[$2] - this[$2];
this.targetscroll = $1.scrollmax - this.target.immediateparent[$2];

this[this.axis + "thumbdrag"].setAttribute("applied", true)
}


function stopDrag ($0 = null) {
if (!this.dragging) return;
this.dragging = false;

this[this.axis + "thumbdrag"].setAttribute("applied", false);

this.classroot.targetPosDel.enable()
}
/* -*- file: -*- */
var ythumbdrag;var xthumbdrag;function thumbControl ($0) {
/* -*- file: base/basescrollbar.lzx#581 -*- */
var $1 = $0 - this.doffset;
if ($1 <= 0) {
$1 = 0
} else if ($1 > this.trackscroll) {
$1 = this.trackscroll
};

var $2 = Math.round(-$1 / this.trackscroll * this.targetscroll);
if ($2 != this.target[this.classroot.scrollattr]) {
this.target.setAttribute(this.classroot.scrollattr, $2)
};

return $1
}
/* -*- file: -*- */
function $lzc$class_basescrollthumb ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
LzNode.mergeAttributes({$attributeDescriptor: {types: {_focusable: "boolean", aaactive: "boolean", aadescription: "string", aaname: "string", aasilent: "boolean", aatabindex: "number", align: "string", axis: "string", backgroundrepeat: "string", bgcolor: "color", cachebitmap: "boolean", capabilities: "string", classroot: "string", clickable: "boolean", clickregion: "string", clip: "boolean", cloneManager: "string", contextmenu: "string", cornerradius: "string", cursor: "token", datapath: "string", defaultplacement: "string", doesenter: "boolean", dragging: "boolean", fgcolor: "color", focusable: "boolean", focustrap: "boolean", font: "string", fontsize: "size", fontstyle: "string", frame: "numberExpression", framesloadratio: "number", hasdirectionallayout: "boolean", hassetheight: "boolean", hassetwidth: "boolean", height: "size", id: "ID", ignoreplacement: "boolean", immediateparent: "string", inited: "boolean", initstage: "string", layout: "css", loadratio: "number", mask: "string", name: "token", nodeLevel: "number", opacity: "number", options: "css", parent: "string", pixellock: "boolean", placement: "string", playing: "boolean", resource: "string", resourceheight: "number", resourcewidth: "number", rotation: "numberExpression", shadowangle: "number", shadowblurradius: "number", shadowcolor: "color", shadowdistance: "number", showhandcursor: "boolean", source: "string", stretches: "string", styleclass: "string", subnodes: "string", subviews: "string", targetscroll: "number", text: "html", tintcolor: "string", totalframes: "number", trackscroll: "number", transition: "string", unstretchedheight: "number", unstretchedwidth: "number", usegetbounds: "boolean", valign: "string", visibility: "string", visible: "boolean", width: "size", "with": "string", x: "numberExpression", xoffset: "numberExpression", xscale: "numberExpression", y: "numberExpression", yoffset: "numberExpression", yscale: "numberExpression"}}, $delegates: ["onmousedown", "startDrag", null, "onmouseup", "stopDrag", null], axis: "", clickable: true, dragging: false, focusable: false, styleable: false, target: null, targetscroll: 0, trackscroll: 0}, $lzc$class_basescrollthumb.attributes);}
}
