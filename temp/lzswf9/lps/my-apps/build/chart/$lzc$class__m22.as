package {
dynamic class $lzc$class__m22 extends $lzc$class_Chart {
/* -*- file: chart.lzx#65 -*- */
static var displayName = "<anonymous extends='Chart'>";static var children = LzNode.mergeChildren([], $lzc$class_Chart["children"]);static var attributes = new LzInheritedHash($lzc$class_Chart.attributes);function $m1y ($0) {
/* -*- file: #64 -*- */
var $1 = canvas.width;
/* -*- file: -*- */
if ($1 !== this["width"] || !this.inited) {
this.setAttribute("width", $1)
}}
/* -*- file: chart.lzx#64 -*- */
function $m1z () {
/* -*- file: -*- */
try {
/* -*- file: chart.lzx#67 -*- */
return [canvas, "width"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
/* -*- file: chart.lzx#64 -*- */
function $m20 ($0) {
/* -*- file: #64 -*- */
var $1 = canvas.height;
/* -*- file: -*- */
if ($1 !== this["height"] || !this.inited) {
this.setAttribute("height", $1)
}}
/* -*- file: chart.lzx#64 -*- */
function $m21 () {
/* -*- file: -*- */
try {
/* -*- file: chart.lzx#67 -*- */
return [canvas, "height"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
/* -*- file: chart.lzx#65 -*- */
override function handleError ($0) {
Debug.write($0);
super.handleError($0)
}
/* -*- file: -*- */
function $lzc$class__m22 ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
}
}
