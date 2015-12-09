package {
dynamic class $lzc$class__mr2 extends $lzc$class_hscrollbar {
/* -*- file: flowDesigner/FlowDesignerSingle.lzx#740 -*- */
static var displayName = "<anonymous extends='hscrollbar'>";static var children = LzNode.mergeChildren([], $lzc$class_hscrollbar["children"]);static var attributes = new LzInheritedHash($lzc$class_hscrollbar.attributes);override function setPosRelative ($0) {
super.setPosRelative($0);
var $1 = classroot.main.designArea.toolbarWin.x + $0;
if ($1 < 0) return;
if ($1 > classroot.main.designArea.height - 200) return;
classroot.main.designArea.toolbarWin.setAttribute("x", $1)
}
/* -*- file: -*- */
var $classrootdepth;function $lzc$class__mr2 ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
}
}
