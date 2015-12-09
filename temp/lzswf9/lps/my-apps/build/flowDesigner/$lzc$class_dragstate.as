package {
dynamic class $lzc$class_dragstate extends LzState {
/* -*- file: utils/states/dragstate.lzx#4 -*- */
static var tagname = "dragstate";static var attributes = new LzInheritedHash(LzState.attributes);var drag_axis;var drag_min_x;var drag_max_x;var drag_min_y;var drag_max_y;var $mam;var __dragstate_ydoffset;var $man;var $mao;var y;var $map;var __dragstate_xdoffset;var $maq;var $mar;var x;var __dragstate_getnewpos;function $lzc$class_dragstate ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {


















super($0, $1, $2, $3)
}

LzNode.mergeAttributes({$CSSDescriptor: {}, $attributeDescriptor: {types: {applied: "boolean", classroot: "string", cloneManager: "string", datapath: "string", defaultplacement: "string", drag_axis: "string", drag_max_x: "number", drag_max_y: "number", drag_min_x: "number", drag_min_y: "number", id: "ID", ignoreplacement: "boolean", immediateparent: "string", inited: "boolean", initstage: "string", name: "token", nodeLevel: "number", options: "css", parent: "string", placement: "string", pooling: "boolean", styleclass: "string", subnodes: "string", transition: "string", "with": "string"}}, $mam: function  ($0) {
/* -*- file: #20 -*- */
this.setAttribute("__dragstate_ydoffset", this.yoffset - this.getMouse("y"))
}
/* -*- file: -*- */
, $man: function  ($0) {
/* -*- file: utils/states/dragstate.lzx#27 -*- */
var $1 = this.drag_axis == "both" || this.drag_axis == "y" ? this.__dragstate_getnewpos("y", this.immediateparent.getMouse("y") + this.__dragstate_ydoffset) : this.y;
/* -*- file: -*- */
if ($1 !== this["y"] || !this.inited) {
this.setAttribute("y", $1)
}}
, $mao: function  () {
with (this) {
try {
/* -*- file: utils/states/dragstate.lzx#30 -*- */
return ([this, "drag_axis", this, "__dragstate_ydoffset", this, "y"]).concat($lzc$getFunctionDependencies("__dragstate_getnewpos", this, this, ["y", this.immediateparent.getMouse("y") + this.__dragstate_ydoffset], null)).concat($lzc$getFunctionDependencies("getMouse", this, this.immediateparent, ["y"], null))
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}}
, $map: function  ($0) {
/* -*- file: utils/states/dragstate.lzx#30 -*- */
this.setAttribute("__dragstate_xdoffset", this.xoffset - this.getMouse("x"))
}
/* -*- file: -*- */
, $maq: function  ($0) {
/* -*- file: utils/states/dragstate.lzx#37 -*- */
var $1 = this.drag_axis == "both" || this.drag_axis == "x" ? this.__dragstate_getnewpos("x", this.immediateparent.getMouse("x") + this.__dragstate_xdoffset) : this.x;
/* -*- file: -*- */
if ($1 !== this["x"] || !this.inited) {
this.setAttribute("x", $1)
}}
, $mar: function  () {
with (this) {
try {
/* -*- file: utils/states/dragstate.lzx#40 -*- */
return ([this, "drag_axis", this, "__dragstate_xdoffset", this, "x"]).concat($lzc$getFunctionDependencies("__dragstate_getnewpos", this, this, ["x", this.immediateparent.getMouse("x") + this.__dragstate_xdoffset], null)).concat($lzc$getFunctionDependencies("getMouse", this, this.immediateparent, ["x"], null))
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}}
, __dragstate_getnewpos: function  ($0, $1) {
/* -*- file: utils/states/dragstate.lzx#41 -*- */
var $2 = this["drag_min_" + $0];
var $3 = this["drag_max_" + $0];
if ($2 != null && $1 < $2) $1 = $2;
if ($3 != null && $1 > $3) $1 = $3;
return $1
}
/* -*- file: -*- */
, __dragstate_xdoffset: new LzOnceExpr("$map", null), __dragstate_ydoffset: new LzOnceExpr("$mam", null), drag_axis: "both", drag_max_x: null, drag_max_y: null, drag_min_x: null, drag_min_y: null, x: new LzAlwaysExpr("$maq", "$mar", null), y: new LzAlwaysExpr("$man", "$mao", null)}, $lzc$class_dragstate.attributes);}
}
