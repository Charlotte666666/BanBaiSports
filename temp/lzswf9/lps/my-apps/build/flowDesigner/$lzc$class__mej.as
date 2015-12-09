package {
dynamic class $lzc$class__mej extends $lzc$class_button {
/* -*- file: lz/alert.lzx#95 -*- */
static var displayName = "<anonymous extends='button'>";static var children = LzNode.mergeChildren([], $lzc$class_button["children"]);static var attributes = new LzInheritedHash($lzc$class_button.attributes);function $me7 ($0) {
/* -*- file: #94 -*- */
classroot.close(false)
}
/* -*- file: #94 -*- */
function $me8 ($0) {
/* -*- file: #94 -*- */
var $1 = classroot.button2;
/* -*- file: -*- */
if ($1 !== this["text"] || !this.inited) {
this.setAttribute("text", $1)
}}
/* -*- file: lz/alert.lzx#94 -*- */
function $me9 () {
/* -*- file: -*- */
try {
/* -*- file: lz/alert.lzx#97 -*- */
return [classroot, "button2"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
/* -*- file: lz/alert.lzx#94 -*- */
function $mea ($0) {
/* -*- file: #94 -*- */
var $1 = classroot.button2 != "";
/* -*- file: -*- */
if ($1 !== this["visible"] || !this.inited) {
this.setAttribute("visible", $1)
}}
/* -*- file: lz/alert.lzx#94 -*- */
function $meb () {
/* -*- file: -*- */
try {
/* -*- file: lz/alert.lzx#97 -*- */
return [classroot, "button2"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
var $classrootdepth;function $lzc$class__mej ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
}
}
