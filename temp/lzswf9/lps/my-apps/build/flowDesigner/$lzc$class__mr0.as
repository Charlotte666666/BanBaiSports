package {
dynamic class $lzc$class__mr0 extends $lzc$class_EditText {
/* -*- file: flowDesigner/FlowDesignerSingle.lzx#708 -*- */
static var displayName = "<anonymous extends='EditText'>";static var children = LzNode.mergeChildren([], $lzc$class_EditText["children"]);static var attributes = new LzInheritedHash($lzc$class_EditText.attributes);function $mpt ($0) {
/* -*- file: #707 -*- */
var $1 = classroot.seletedType == "line";
/* -*- file: -*- */
if ($1 !== this["visible"] || !this.inited) {
this.setAttribute("visible", $1)
}}
/* -*- file: flowDesigner/FlowDesignerSingle.lzx#707 -*- */
function $mpu () {
/* -*- file: -*- */
try {
/* -*- file: flowDesigner/FlowDesignerSingle.lzx#710 -*- */
return [classroot, "seletedType"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
/* -*- file: flowDesigner/FlowDesignerSingle.lzx#707 -*- */
function $mpv ($0) {
/* -*- file: #707 -*- */
var $1 = parent.width - 10;
/* -*- file: -*- */
if ($1 !== this["width"] || !this.inited) {
this.setAttribute("width", $1)
}}
/* -*- file: flowDesigner/FlowDesignerSingle.lzx#707 -*- */
function $mpw () {
/* -*- file: -*- */
try {
/* -*- file: flowDesigner/FlowDesignerSingle.lzx#710 -*- */
return [parent, "width"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
/* -*- file: flowDesigner/FlowDesignerSingle.lzx#707 -*- */
function $mpx ($0) {
/* -*- file: #707 -*- */
var $1 = classroot.mode == "edit" ? "select" : "view";
/* -*- file: -*- */
if ($1 !== this["mode"] || !this.inited) {
this.setAttribute("mode", $1)
}}
/* -*- file: flowDesigner/FlowDesignerSingle.lzx#707 -*- */
function $mpy () {
/* -*- file: -*- */
try {
/* -*- file: flowDesigner/FlowDesignerSingle.lzx#710 -*- */
return [classroot, "mode"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
/* -*- file: flowDesigner/FlowDesignerSingle.lzx#708 -*- */
function $mpz ($0) {
if (classroot.mode != "edit") return;
classroot.selectRule()
}
/* -*- file: -*- */
override function doClear () {
super.doClear();
classroot.main.designArea._setSelectedObjectProperties("ruleId", "");
classroot.main.designArea._setSelectedObjectProperties("ruleName", "")
}
/* -*- file: -*- */
var $classrootdepth;function $lzc$class__mr0 ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
}
}
