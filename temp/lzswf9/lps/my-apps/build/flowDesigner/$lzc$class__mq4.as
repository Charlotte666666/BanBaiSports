package {
dynamic class $lzc$class__mq4 extends $lzc$class_IconButton {
/* -*- file: flowDesigner/FlowDesignerSingle.lzx#153 -*- */
static var displayName = "<anonymous extends='IconButton'>";static var children = LzNode.mergeChildren([], $lzc$class_IconButton["children"]);static var attributes = new LzInheritedHash($lzc$class_IconButton.attributes);function $mmo ($0) {
/* -*- file: #152 -*- */
var $1 = classroot.mode == "edit";
/* -*- file: -*- */
if ($1 !== this["visible"] || !this.inited) {
this.setAttribute("visible", $1)
}}
/* -*- file: flowDesigner/FlowDesignerSingle.lzx#152 -*- */
function $mmp () {
/* -*- file: -*- */
try {
/* -*- file: flowDesigner/FlowDesignerSingle.lzx#155 -*- */
return [classroot, "mode"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
/* -*- file: flowDesigner/FlowDesignerSingle.lzx#152 -*- */
function $mmq ($0) {
/* -*- file: #152 -*- */
classroot.main.designArea.deleteObject()
}
/* -*- file: -*- */
var $classrootdepth;function $lzc$class__mq4 ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
}
}
