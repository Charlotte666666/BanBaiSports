package {
dynamic class $lzc$class__mqk extends $lzc$class_vbox {
/* -*- file: flowDesigner/FlowDesignerSingle.lzx#614 -*- */
static var displayName = "<anonymous extends='vbox'>";static var children = LzNode.mergeChildren([{attrs: {$classrootdepth: 5, alarm: void 0, dept_name: void 0, layout: {axis: "y", spacing: 5}, name: "properties", right_name: void 0, rule_name: void 0, statusView: void 0, template_name: void 0, txtView: void 0, user_name: void 0, visible: false, width: new LzAlwaysExpr("$mo1", "$mo2", null), x: 5}, "class": $lzc$class__mql}], $lzc$class_vbox["children"]);static var attributes = new LzInheritedHash($lzc$class_vbox.attributes);function $mnw ($0) {
/* -*- file: #613 -*- */
var $1 = immediateparent.width;
/* -*- file: -*- */
if ($1 !== this["width"] || !this.inited) {
this.setAttribute("width", $1)
}}
/* -*- file: flowDesigner/FlowDesignerSingle.lzx#613 -*- */
function $mnx () {
/* -*- file: -*- */
try {
/* -*- file: flowDesigner/FlowDesignerSingle.lzx#616 -*- */
return [immediateparent, "width"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
/* -*- file: flowDesigner/FlowDesignerSingle.lzx#613 -*- */
function $mny ($0) {
/* -*- file: #613 -*- */
var $1 = immediateparent.height;
/* -*- file: -*- */
if ($1 !== this["height"] || !this.inited) {
this.setAttribute("height", $1)
}}
/* -*- file: flowDesigner/FlowDesignerSingle.lzx#613 -*- */
function $mnz () {
/* -*- file: -*- */
try {
/* -*- file: flowDesigner/FlowDesignerSingle.lzx#616 -*- */
return [immediateparent, "height"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
/* -*- file: flowDesigner/FlowDesignerSingle.lzx#613 -*- */
function $mo0 ($0) {
/* -*- file: #613 -*- */
this.setAttribute("bgcolor", gConstant.areaColorLight)
}
/* -*- file: -*- */
var properties;var $classrootdepth;function $lzc$class__mqk ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
}
}
