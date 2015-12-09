package {
dynamic class $lzc$class_basescrolltrack extends $lzc$class_basebuttonrepeater {
/* -*- file: base/basescrollbar.lzx#637 -*- */
static var tagname = "basescrolltrack";static var attributes = new LzInheritedHash($lzc$class_basebuttonrepeater.attributes);var direction;function $m4e ($0) {




this.classroot.page(this.direction)
}

function $m4f ($0) {
this.classroot.page(this.direction)
}
/* -*- file: -*- */
function $lzc$class_basescrolltrack ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
LzNode.mergeAttributes({$delegates: ["onmousedown", "$m4e", null, "onmousestilldown", "$m4f", null], clickable: true, direction: 1}, $lzc$class_basescrolltrack.attributes);}
}
