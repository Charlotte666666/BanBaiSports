package {
dynamic class $lzc$class_basescrollarrow extends $lzc$class_basebuttonrepeater {
/* -*- file: base/basescrollbar.lzx#610 -*- */
static var tagname = "basescrollarrow";static var attributes = new LzInheritedHash($lzc$class_basebuttonrepeater.attributes);var direction;function $m4c ($0) {




this.classroot.step(this.direction)
}

function $m4d ($0) {
this.classroot.step(this.direction)
}
/* -*- file: -*- */
function $lzc$class_basescrollarrow ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
LzNode.mergeAttributes({$delegates: ["onmousedown", "$m4c", null, "onmousestilldown", "$m4d", null], clickable: true, direction: 1}, $lzc$class_basescrollarrow.attributes);}
}
