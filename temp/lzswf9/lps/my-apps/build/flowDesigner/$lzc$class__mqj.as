package {
dynamic class $lzc$class__mqj extends $lzc$class_window {
/* -*- file: flowDesigner/FlowDesignerSingle.lzx#608 -*- */
static var displayName = "<anonymous extends='window'>";static var children = LzNode.mergeChildren([{attrs: {$classrootdepth: 4, bgcolor: new LzOnceExpr("$mo0", null), height: new LzAlwaysExpr("$mny", "$mnz", null), name: "_toolbar", properties: void 0, spacing: 5, width: new LzAlwaysExpr("$mnw", "$mnx", null)}, "class": $lzc$class__mqk}], $lzc$class_window["children"]);static var attributes = new LzInheritedHash($lzc$class_window.attributes);function $mnt ($0) {
/* -*- file: #607 -*- */
var $1 = parent.toolwidth;
/* -*- file: -*- */
if ($1 !== this["width"] || !this.inited) {
this.setAttribute("width", $1)
}}
/* -*- file: flowDesigner/FlowDesignerSingle.lzx#607 -*- */
function $mnu () {
/* -*- file: -*- */
try {
/* -*- file: flowDesigner/FlowDesignerSingle.lzx#610 -*- */
return [parent, "toolwidth"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
/* -*- file: flowDesigner/FlowDesignerSingle.lzx#609 -*- */
function $mnv ($0) {
this.bringToFront()
}
/* -*- file: -*- */
var _toolbar;var $classrootdepth;function $lzc$class__mqj ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
}
}
