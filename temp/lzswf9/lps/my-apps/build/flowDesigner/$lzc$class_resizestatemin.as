package {
dynamic class $lzc$class_resizestatemin extends $lzc$class_resizestate {
/* -*- file: utils/states/resizestatemin.lzx#5 -*- */
static var tagname = "resizestatemin";static var attributes = new LzInheritedHash($lzc$class_resizestate.attributes);var resize_min_width;var resize_min_height;var $may;var $maz;var $mb0;var $mb1;function $lzc$class_resizestatemin ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {








super($0, $1, $2, $3)
}

LzNode.mergeAttributes({$attributeDescriptor: {types: {applied: "boolean", classroot: "string", cloneManager: "string", datapath: "string", defaultplacement: "string", id: "ID", ignoreplacement: "boolean", immediateparent: "string", inited: "boolean", initstage: "string", name: "token", nodeLevel: "number", options: "css", parent: "string", placement: "string", pooling: "boolean", resize_min_height: "number", resize_min_width: "number", styleclass: "string", subnodes: "string", transition: "string", "with": "string"}}, $may: function  ($0) {
/* -*- file: -*- */
with (this) {
/* -*- file: utils/states/resizestatemin.lzx#12 -*- */
var $1 = Math.max(this.immediateparent.getMouse("x") - __resize_xroffset, resize_min_width || 0);
/* -*- file: -*- */
if ($1 !== this["width"] || !this.inited) {
this.setAttribute("width", $1)
}}}
, $maz: function  () {
with (this) {
try {
/* -*- file: utils/states/resizestatemin.lzx#15 -*- */
return ([this, "__resize_xroffset", this, "resize_min_width"]).concat($lzc$getFunctionDependencies("getMouse", this, this.immediateparent, ["x"], null))
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}}
, $mb0: function  ($0) {
with (this) {
/* -*- file: utils/states/resizestatemin.lzx#16 -*- */
var $1 = Math.max(this.immediateparent.getMouse("y") - __resize_yroffset, resize_min_height || 0);
/* -*- file: -*- */
if ($1 !== this["height"] || !this.inited) {
this.setAttribute("height", $1)
}}}
, $mb1: function  () {
with (this) {
try {
/* -*- file: utils/states/resizestatemin.lzx#19 -*- */
return ([this, "__resize_yroffset", this, "resize_min_height"]).concat($lzc$getFunctionDependencies("getMouse", this, this.immediateparent, ["y"], null))
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}}
, height: new LzAlwaysExpr("$mb0", "$mb1", null), resize_min_height: 0, resize_min_width: 0, width: new LzAlwaysExpr("$may", "$maz", null)}, $lzc$class_resizestatemin.attributes);}
}
