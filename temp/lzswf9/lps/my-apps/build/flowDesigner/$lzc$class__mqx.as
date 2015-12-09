package {
dynamic class $lzc$class__mqx extends $lzc$class_EditText {
/* -*- file: flowDesigner/FlowDesignerSingle.lzx#669 -*- */
static var displayName = "<anonymous extends='EditText'>";static var children = LzNode.mergeChildren([], $lzc$class_EditText["children"]);static var attributes = new LzInheritedHash($lzc$class_EditText.attributes);function $mp8 ($0) {
/* -*- file: #668 -*- */
var $1 = classroot.seletedType != "line" && classroot.seletedType != "endNode";
/* -*- file: -*- */
if ($1 !== this["visible"] || !this.inited) {
this.setAttribute("visible", $1)
}}
/* -*- file: flowDesigner/FlowDesignerSingle.lzx#668 -*- */
function $mp9 () {
/* -*- file: -*- */
try {
/* -*- file: flowDesigner/FlowDesignerSingle.lzx#671 -*- */
return [classroot, "seletedType"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
/* -*- file: flowDesigner/FlowDesignerSingle.lzx#668 -*- */
function $mpa ($0) {
/* -*- file: #668 -*- */
var $1 = parent.width - 10;
/* -*- file: -*- */
if ($1 !== this["width"] || !this.inited) {
this.setAttribute("width", $1)
}}
/* -*- file: flowDesigner/FlowDesignerSingle.lzx#668 -*- */
function $mpb () {
/* -*- file: -*- */
try {
/* -*- file: flowDesigner/FlowDesignerSingle.lzx#671 -*- */
return [parent, "width"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
/* -*- file: flowDesigner/FlowDesignerSingle.lzx#668 -*- */
function $mpc ($0) {
/* -*- file: #668 -*- */
var $1 = classroot.mode == "edit" ? "select" : "view";
/* -*- file: -*- */
if ($1 !== this["mode"] || !this.inited) {
this.setAttribute("mode", $1)
}}
/* -*- file: flowDesigner/FlowDesignerSingle.lzx#668 -*- */
function $mpd () {
/* -*- file: -*- */
try {
/* -*- file: flowDesigner/FlowDesignerSingle.lzx#671 -*- */
return [classroot, "mode"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
/* -*- file: flowDesigner/FlowDesignerSingle.lzx#669 -*- */
function $mpe ($0) {
if (classroot.mode != "edit") return;
classroot.selectRight()
}
/* -*- file: -*- */
override function doClear () {
super.doClear();
classroot.main.designArea._setSelectedObjectProperties("rightId", "");
classroot.main.designArea._setSelectedObjectProperties("rightName", "")
}
/* -*- file: -*- */
var $classrootdepth;function $lzc$class__mqx ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
}
}
