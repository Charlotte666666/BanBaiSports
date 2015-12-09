package {
dynamic class $lzc$class__mq6 extends $lzc$class_IconButton {
/* -*- file: flowDesigner/FlowDesignerSingle.lzx#155 -*- */
static var displayName = "<anonymous extends='IconButton'>";static var children = LzNode.mergeChildren([], $lzc$class_IconButton["children"]);static var attributes = new LzInheritedHash($lzc$class_IconButton.attributes);function $mmu ($0) {
/* -*- file: #154 -*- */
var $1 = classroot.mode == "edit";
/* -*- file: -*- */
if ($1 !== this["visible"] || !this.inited) {
this.setAttribute("visible", $1)
}}
/* -*- file: flowDesigner/FlowDesignerSingle.lzx#154 -*- */
function $mmv () {
/* -*- file: -*- */
try {
/* -*- file: flowDesigner/FlowDesignerSingle.lzx#157 -*- */
return [classroot, "mode"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
/* -*- file: flowDesigner/FlowDesignerSingle.lzx#154 -*- */
function $mmw ($0) {
/* -*- file: #154 -*- */
classroot.main.designArea._addNode("judge")
}
/* -*- file: -*- */
var $classrootdepth;function $lzc$class__mq6 ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
}
}
