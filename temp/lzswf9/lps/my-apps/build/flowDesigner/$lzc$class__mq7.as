package {
dynamic class $lzc$class__mq7 extends $lzc$class_radiogroup {
/* -*- file: flowDesigner/FlowDesignerSingle.lzx#157 -*- */
static var displayName = "<anonymous extends='radiogroup'>";static var children = [{attrs: {$classrootdepth: 3, $delegates: ["onselect", "$mmz", null], fontsize: 13, selected: true, text: "\u9009\u62E9", value: 1}, "class": $lzc$class__mq8}, {attrs: {$classrootdepth: 3, $delegates: ["onselect", "$mn0", null], fontsize: 12, text: "\u8FDE\u63A5\u7EBF", value: 2}, "class": $lzc$class__mq9}];static var attributes = new LzInheritedHash($lzc$class_radiogroup.attributes);function $mmx ($0) {
/* -*- file: #156 -*- */
var $1 = classroot.mode == "edit";
/* -*- file: -*- */
if ($1 !== this["visible"] || !this.inited) {
this.setAttribute("visible", $1)
}}
/* -*- file: flowDesigner/FlowDesignerSingle.lzx#156 -*- */
function $mmy () {
/* -*- file: -*- */
try {
/* -*- file: flowDesigner/FlowDesignerSingle.lzx#159 -*- */
return [classroot, "mode"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
var $classrootdepth;function $lzc$class__mq7 ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
}
}
