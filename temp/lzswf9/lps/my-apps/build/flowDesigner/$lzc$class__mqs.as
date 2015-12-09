package {
dynamic class $lzc$class__mqs extends $lzc$class_checkbox {
/* -*- file: flowDesigner/FlowDesignerSingle.lzx#634 -*- */
static var displayName = "<anonymous extends='checkbox'>";static var children = LzNode.mergeChildren([], $lzc$class_checkbox["children"]);static var attributes = new LzInheritedHash($lzc$class_checkbox.attributes);function $mop ($0) {
/* -*- file: #633 -*- */
var $1 = classroot.mode == "edit";
/* -*- file: -*- */
if ($1 !== this["enabled"] || !this.inited) {
this.setAttribute("enabled", $1)
}}
/* -*- file: flowDesigner/FlowDesignerSingle.lzx#633 -*- */
function $moq () {
/* -*- file: -*- */
try {
/* -*- file: flowDesigner/FlowDesignerSingle.lzx#636 -*- */
return [classroot, "mode"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
/* -*- file: flowDesigner/FlowDesignerSingle.lzx#634 -*- */
function $mor ($0) {
classroot.main.designArea._setSelectedObjectProperties("isAlarm", this.value)
}
/* -*- file: -*- */
var $classrootdepth;function $lzc$class__mqs ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
}
}
