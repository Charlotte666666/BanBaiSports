package {
dynamic class $lzc$class__mr1 extends $lzc$class_vscrollbar {
/* -*- file: flowDesigner/FlowDesignerSingle.lzx#724 -*- */
static var displayName = "<anonymous extends='vscrollbar'>";static var children = LzNode.mergeChildren([], $lzc$class_vscrollbar["children"]);static var attributes = new LzInheritedHash($lzc$class_vscrollbar.attributes);function $mq0 () {
/* -*- file: #724 -*- */
return this.scrolltrack.thumb
}
/* -*- file: #724 -*- */
function $mq1 ($0) {
var $1 = this.scrolltrack.thumb.y * 10 / 3;
if ($1 > classroot.main.designArea.height - 500) return;
classroot.main.designArea.toolbarWin.setAttribute("y", $1)
}

override function setPosRelative ($0) {
super.setPosRelative($0);
var $1 = classroot.main.designArea.toolbarWin.y + $0;
if ($1 < 0) return;
if ($1 > classroot.main.designArea.height - 500) return;
classroot.main.designArea.toolbarWin.setAttribute("y", $1)
}
/* -*- file: -*- */
var $classrootdepth;function $lzc$class__mr1 ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
}
}
