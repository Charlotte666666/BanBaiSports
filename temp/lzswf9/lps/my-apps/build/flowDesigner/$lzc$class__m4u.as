package {
dynamic class $lzc$class__m4u extends $lzc$class_basescrolltrack {
/* -*- file: lz/vscrollbar.lzx#58 -*- */
static var displayName = "<anonymous extends='basescrolltrack'>";static var attributes = new LzInheritedHash($lzc$class_basescrolltrack.attributes);function $m4i ($0) {
/* -*- file: #58 -*- */
var $1 = parent.thumb.y;
/* -*- file: -*- */
if ($1 !== this["height"] || !this.inited) {
this.setAttribute("height", $1)
}}
/* -*- file: lz/vscrollbar.lzx#58 -*- */
function $m4j () {
/* -*- file: -*- */
try {
/* -*- file: lz/vscrollbar.lzx#61 -*- */
return [parent.thumb, "y"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
/* -*- file: lz/vscrollbar.lzx#59 -*- */
function $m4k ($0) {
/* -*- file: #59 -*- */
var $1 = parent.width;
/* -*- file: -*- */
if ($1 !== this["width"] || !this.inited) {
this.setAttribute("width", $1)
}}
/* -*- file: lz/vscrollbar.lzx#59 -*- */
function $m4l () {
/* -*- file: -*- */
try {
/* -*- file: lz/vscrollbar.lzx#62 -*- */
return [parent, "width"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
var $classrootdepth;function $lzc$class__m4u ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
}
}
