package {
dynamic class $lzc$class__m9m extends $lzc$class_basescrolltrack {
/* -*- file: lz/hscrollbar.lzx#61 -*- */
static var displayName = "<anonymous extends='basescrolltrack'>";static var attributes = new LzInheritedHash($lzc$class_basescrolltrack.attributes);function $m90 ($0) {
/* -*- file: #61 -*- */
var $1 = parent.thumb.x;
/* -*- file: -*- */
if ($1 !== this["width"] || !this.inited) {
this.setAttribute("width", $1)
}}
/* -*- file: lz/hscrollbar.lzx#61 -*- */
function $m91 () {
/* -*- file: -*- */
try {
/* -*- file: lz/hscrollbar.lzx#64 -*- */
return [parent.thumb, "x"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
/* -*- file: lz/hscrollbar.lzx#62 -*- */
function $m92 ($0) {
/* -*- file: #62 -*- */
var $1 = parent.height;
/* -*- file: -*- */
if ($1 !== this["height"] || !this.inited) {
this.setAttribute("height", $1)
}}
/* -*- file: lz/hscrollbar.lzx#62 -*- */
function $m93 () {
/* -*- file: -*- */
try {
/* -*- file: lz/hscrollbar.lzx#65 -*- */
return [parent, "height"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
var $classrootdepth;function $lzc$class__m9m ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
}
}
