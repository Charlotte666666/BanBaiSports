package {
dynamic class $lzc$class__mqy extends $lzc$class_EditText {
/* -*- file: flowDesigner/FlowDesignerSingle.lzx#682 -*- */
static var displayName = "<anonymous extends='EditText'>";static var children = LzNode.mergeChildren([], $lzc$class_EditText["children"]);static var attributes = new LzInheritedHash($lzc$class_EditText.attributes);function $mpf ($0) {
/* -*- file: #681 -*- */
var $1 = classroot.seletedType != "line" && classroot.seletedType != "endNode";
/* -*- file: -*- */
if ($1 !== this["visible"] || !this.inited) {
this.setAttribute("visible", $1)
}}
/* -*- file: flowDesigner/FlowDesignerSingle.lzx#681 -*- */
function $mpg () {
/* -*- file: -*- */
try {
/* -*- file: flowDesigner/FlowDesignerSingle.lzx#684 -*- */
return [classroot, "seletedType"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
/* -*- file: flowDesigner/FlowDesignerSingle.lzx#681 -*- */
function $mph ($0) {
/* -*- file: #681 -*- */
var $1 = parent.width - 10;
/* -*- file: -*- */
if ($1 !== this["width"] || !this.inited) {
this.setAttribute("width", $1)
}}
/* -*- file: flowDesigner/FlowDesignerSingle.lzx#681 -*- */
function $mpi () {
/* -*- file: -*- */
try {
/* -*- file: flowDesigner/FlowDesignerSingle.lzx#684 -*- */
return [parent, "width"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
/* -*- file: flowDesigner/FlowDesignerSingle.lzx#681 -*- */
function $mpj ($0) {
/* -*- file: #681 -*- */
var $1 = classroot.mode == "edit" ? "select" : "view";
/* -*- file: -*- */
if ($1 !== this["mode"] || !this.inited) {
this.setAttribute("mode", $1)
}}
/* -*- file: flowDesigner/FlowDesignerSingle.lzx#681 -*- */
function $mpk () {
/* -*- file: -*- */
try {
/* -*- file: flowDesigner/FlowDesignerSingle.lzx#684 -*- */
return [classroot, "mode"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
/* -*- file: flowDesigner/FlowDesignerSingle.lzx#682 -*- */
function $mpl ($0) {
if (classroot.mode != "edit") return;
classroot.selectDept()
}
/* -*- file: -*- */
override function doClear () {
super.doClear();
classroot.main.designArea._setSelectedObjectProperties("deptId", "");
classroot.main.designArea._setSelectedObjectProperties("deptName", "")
}
/* -*- file: -*- */
var $classrootdepth;function $lzc$class__mqy ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
}
}
