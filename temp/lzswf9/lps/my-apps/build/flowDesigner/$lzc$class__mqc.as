package {
dynamic class $lzc$class__mqc extends $lzc$class_Button {
/* -*- file: flowDesigner/FlowDesignerSingle.lzx#181 -*- */
static var displayName = "<anonymous extends='Button'>";static var children = LzNode.mergeChildren([], $lzc$class_Button["children"]);static var attributes = new LzInheritedHash($lzc$class_Button.attributes);function $mn7 ($0) {
/* -*- file: #180 -*- */
var $1 = classroot.mode == "edit";
/* -*- file: -*- */
if ($1 !== this["visible"] || !this.inited) {
this.setAttribute("visible", $1)
}}
/* -*- file: flowDesigner/FlowDesignerSingle.lzx#180 -*- */
function $mn8 () {
/* -*- file: -*- */
try {
/* -*- file: flowDesigner/FlowDesignerSingle.lzx#183 -*- */
return [classroot, "mode"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
/* -*- file: flowDesigner/FlowDesignerSingle.lzx#180 -*- */
function $mn9 ($0) {
/* -*- file: #180 -*- */
classroot.moveAll(-4, 0)
}
/* -*- file: -*- */
var $classrootdepth;function $lzc$class__mqc ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
}
}
