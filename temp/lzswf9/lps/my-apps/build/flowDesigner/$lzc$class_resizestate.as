package {
dynamic class $lzc$class_resizestate extends LzState {
/* -*- file: utils/states/resizestate.lzx#4 -*- */
static var tagname = "resizestate";static var attributes = new LzInheritedHash(LzState.attributes);var $mas;var __resize_xroffset;var $mat;var $mau;var width;var $mav;var __resize_yroffset;var $maw;var $max;var height;function $lzc$class_resizestate ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {












super($0, $1, $2, $3)
}

LzNode.mergeAttributes({$CSSDescriptor: {}, $attributeDescriptor: {types: {applied: "boolean", classroot: "string", cloneManager: "string", datapath: "string", defaultplacement: "string", id: "ID", ignoreplacement: "boolean", immediateparent: "string", inited: "boolean", initstage: "string", name: "token", nodeLevel: "number", options: "css", parent: "string", placement: "string", pooling: "boolean", styleclass: "string", subnodes: "string", transition: "string", "with": "string"}}, $mas: function  ($0) {
/* -*- file: #7 -*- */
this.setAttribute("__resize_xroffset", this.x - this.width + this.getMouse("x"))
}
/* -*- file: -*- */
, $mat: function  ($0) {
/* -*- file: utils/states/resizestate.lzx#10 -*- */
var $1 = this.immediateparent.getMouse("x") - this.__resize_xroffset;
/* -*- file: -*- */
if ($1 !== this["width"] || !this.inited) {
this.setAttribute("width", $1)
}}
, $mau: function  () {
with (this) {
try {
/* -*- file: utils/states/resizestate.lzx#13 -*- */
return ([this, "__resize_xroffset"]).concat($lzc$getFunctionDependencies("getMouse", this, this.immediateparent, ["x"], null))
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}}
, $mav: function  ($0) {
/* -*- file: utils/states/resizestate.lzx#15 -*- */
this.setAttribute("__resize_yroffset", this.y - this.height + this.getMouse("y"))
}
/* -*- file: -*- */
, $maw: function  ($0) {
/* -*- file: utils/states/resizestate.lzx#18 -*- */
var $1 = this.immediateparent.getMouse("y") - this.__resize_yroffset;
/* -*- file: -*- */
if ($1 !== this["height"] || !this.inited) {
this.setAttribute("height", $1)
}}
, $max: function  () {
with (this) {
try {
/* -*- file: utils/states/resizestate.lzx#21 -*- */
return ([this, "__resize_yroffset"]).concat($lzc$getFunctionDependencies("getMouse", this, this.immediateparent, ["y"], null))
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}}
, __resize_xroffset: new LzOnceExpr("$mas", null), __resize_yroffset: new LzOnceExpr("$mav", null), height: new LzAlwaysExpr("$maw", "$max", null), width: new LzAlwaysExpr("$mat", "$mau", null)}, $lzc$class_resizestate.attributes);}
}
