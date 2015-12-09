package {
dynamic class $lzc$class__mqv extends $lzc$class_EditText {
/* -*- file: flowDesigner/FlowDesignerSingle.lzx#653 -*- */
static var displayName = "<anonymous extends='EditText'>";static var children = LzNode.mergeChildren([], $lzc$class_EditText["children"]);static var attributes = new LzInheritedHash($lzc$class_EditText.attributes);function $moy ($0) {
/* -*- file: #652 -*- */
var $1 = classroot.seletedType != "line" && classroot.seletedType != "endNode";
/* -*- file: -*- */
if ($1 !== this["visible"] || !this.inited) {
this.setAttribute("visible", $1)
}}
/* -*- file: flowDesigner/FlowDesignerSingle.lzx#652 -*- */
function $moz () {
/* -*- file: -*- */
try {
/* -*- file: flowDesigner/FlowDesignerSingle.lzx#655 -*- */
return [classroot, "seletedType"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
/* -*- file: flowDesigner/FlowDesignerSingle.lzx#652 -*- */
function $mp0 ($0) {
/* -*- file: #652 -*- */
var $1 = parent.width - 10;
/* -*- file: -*- */
if ($1 !== this["width"] || !this.inited) {
this.setAttribute("width", $1)
}}
/* -*- file: flowDesigner/FlowDesignerSingle.lzx#652 -*- */
function $mp1 () {
/* -*- file: -*- */
try {
/* -*- file: flowDesigner/FlowDesignerSingle.lzx#655 -*- */
return [parent, "width"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
/* -*- file: flowDesigner/FlowDesignerSingle.lzx#652 -*- */
function $mp2 ($0) {
/* -*- file: #652 -*- */
var $1 = classroot.mode == "edit" ? "select" : "view";
/* -*- file: -*- */
if ($1 !== this["mode"] || !this.inited) {
this.setAttribute("mode", $1)
}}
/* -*- file: flowDesigner/FlowDesignerSingle.lzx#652 -*- */
function $mp3 () {
/* -*- file: -*- */
try {
/* -*- file: flowDesigner/FlowDesignerSingle.lzx#655 -*- */
return [classroot, "mode"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
/* -*- file: flowDesigner/FlowDesignerSingle.lzx#653 -*- */
function $mp4 ($0) {
if (classroot.mode != "edit") return;
classroot.selectTemplate()
}
/* -*- file: -*- */
override function doClear () {
super.doClear();
classroot.main.designArea._setSelectedObjectProperties("templateId", "");
classroot.main.designArea._setSelectedObjectProperties("templateName", "")
}
/* -*- file: -*- */
var $classrootdepth;function $lzc$class__mqv ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
}
}
