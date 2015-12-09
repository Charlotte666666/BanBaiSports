package {
dynamic class $lzc$class__m1t extends $lzc$class_simplelayout {
/* -*- file: base/vbox.lzx#7 -*- */
static var displayName = "<anonymous extends='simplelayout'>";static var attributes = new LzInheritedHash($lzc$class_simplelayout.attributes);function $m1p ($0) {
/* -*- file: #6 -*- */
var $1 = parent.spacing;
/* -*- file: -*- */
if ($1 !== this["spacing"] || !this.inited) {
this.setAttribute("spacing", $1)
}}
/* -*- file: base/vbox.lzx#6 -*- */
function $m1q () {
/* -*- file: -*- */
try {
/* -*- file: base/vbox.lzx#9 -*- */
return [parent, "spacing"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
/* -*- file: base/vbox.lzx#6 -*- */
function $m1r ($0) {
/* -*- file: #6 -*- */
var $1 = parent.inset;
/* -*- file: -*- */
if ($1 !== this["inset"] || !this.inited) {
this.setAttribute("inset", $1)
}}
/* -*- file: base/vbox.lzx#6 -*- */
function $m1s () {
/* -*- file: -*- */
try {
/* -*- file: base/vbox.lzx#9 -*- */
return [parent, "inset"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
var $classrootdepth;function $lzc$class__m1t ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
}
}
