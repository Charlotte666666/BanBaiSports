package {
dynamic class $lzc$class__mek extends $lzc$class_button {
/* -*- file: lz/alert.lzx#100 -*- */
static var displayName = "<anonymous extends='button'>";static var children = LzNode.mergeChildren([], $lzc$class_button["children"]);static var attributes = new LzInheritedHash($lzc$class_button.attributes);function $mec ($0) {
/* -*- file: #99 -*- */
classroot.close(true)
}
/* -*- file: #99 -*- */
function $med ($0) {
/* -*- file: #99 -*- */
var $1 = classroot.button1;
/* -*- file: -*- */
if ($1 !== this["text"] || !this.inited) {
this.setAttribute("text", $1)
}}
/* -*- file: lz/alert.lzx#99 -*- */
function $mee () {
/* -*- file: -*- */
try {
/* -*- file: lz/alert.lzx#102 -*- */
return [classroot, "button1"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
/* -*- file: lz/alert.lzx#99 -*- */
function $mef ($0) {
/* -*- file: #99 -*- */
var $1 = classroot.button1 != "";
/* -*- file: -*- */
if ($1 !== this["visible"] || !this.inited) {
this.setAttribute("visible", $1)
}}
/* -*- file: lz/alert.lzx#99 -*- */
function $meg () {
/* -*- file: -*- */
try {
/* -*- file: lz/alert.lzx#102 -*- */
return [classroot, "button1"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
var $classrootdepth;function $lzc$class__mek ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
}
}
