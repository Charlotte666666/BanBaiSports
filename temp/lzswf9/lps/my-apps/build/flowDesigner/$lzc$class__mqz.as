package {
dynamic class $lzc$class__mqz extends $lzc$class_EditText {
/* -*- file: flowDesigner/FlowDesignerSingle.lzx#695 -*- */
static var displayName = "<anonymous extends='EditText'>";static var children = LzNode.mergeChildren([], $lzc$class_EditText["children"]);static var attributes = new LzInheritedHash($lzc$class_EditText.attributes);function $mpm ($0) {
/* -*- file: #694 -*- */
var $1 = classroot.seletedType != "line" && classroot.seletedType != "endNode";
/* -*- file: -*- */
if ($1 !== this["visible"] || !this.inited) {
this.setAttribute("visible", $1)
}}
/* -*- file: flowDesigner/FlowDesignerSingle.lzx#694 -*- */
function $mpn () {
/* -*- file: -*- */
try {
/* -*- file: flowDesigner/FlowDesignerSingle.lzx#697 -*- */
return [classroot, "seletedType"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
/* -*- file: flowDesigner/FlowDesignerSingle.lzx#694 -*- */
function $mpo ($0) {
/* -*- file: #694 -*- */
var $1 = parent.width - 10;
/* -*- file: -*- */
if ($1 !== this["width"] || !this.inited) {
this.setAttribute("width", $1)
}}
/* -*- file: flowDesigner/FlowDesignerSingle.lzx#694 -*- */
function $mpp () {
/* -*- file: -*- */
try {
/* -*- file: flowDesigner/FlowDesignerSingle.lzx#697 -*- */
return [parent, "width"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
/* -*- file: flowDesigner/FlowDesignerSingle.lzx#694 -*- */
function $mpq ($0) {
/* -*- file: #694 -*- */
var $1 = classroot.mode == "edit" ? "select" : "view";
/* -*- file: -*- */
if ($1 !== this["mode"] || !this.inited) {
this.setAttribute("mode", $1)
}}
/* -*- file: flowDesigner/FlowDesignerSingle.lzx#694 -*- */
function $mpr () {
/* -*- file: -*- */
try {
/* -*- file: flowDesigner/FlowDesignerSingle.lzx#697 -*- */
return [classroot, "mode"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
/* -*- file: flowDesigner/FlowDesignerSingle.lzx#695 -*- */
function $mps ($0) {
if (classroot.mode != "edit") return;
classroot.selectUser()
}
/* -*- file: -*- */
override function doClear () {
super.doClear();
classroot.main.designArea._setSelectedObjectProperties("userCode", "");
classroot.main.designArea._setSelectedObjectProperties("userName", "")
}
/* -*- file: -*- */
var $classrootdepth;function $lzc$class__mqz ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
}
}
