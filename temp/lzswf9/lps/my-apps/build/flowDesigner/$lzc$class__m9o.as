package {
dynamic class $lzc$class__m9o extends $lzc$class_basescrolltrack {
/* -*- file: lz/hscrollbar.lzx#83 -*- */
static var displayName = "<anonymous extends='basescrolltrack'>";static var attributes = new LzInheritedHash($lzc$class_basescrolltrack.attributes);function $m96 ($0) {
/* -*- file: #83 -*- */
var $1 = parent.thumb.x + parent.thumb.width;
/* -*- file: -*- */
if ($1 !== this["x"] || !this.inited) {
this.setAttribute("x", $1)
}}
/* -*- file: lz/hscrollbar.lzx#83 -*- */
function $m97 () {
/* -*- file: -*- */
try {
/* -*- file: lz/hscrollbar.lzx#86 -*- */
return [parent.thumb, "x", parent.thumb, "width"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
/* -*- file: lz/hscrollbar.lzx#85 -*- */
function $m98 ($0) {
/* -*- file: #85 -*- */
var $1 = parent.width - parent.thumb.x - parent.thumb.width;
/* -*- file: -*- */
if ($1 !== this["width"] || !this.inited) {
this.setAttribute("width", $1)
}}
/* -*- file: lz/hscrollbar.lzx#85 -*- */
function $m99 () {
/* -*- file: -*- */
try {
/* -*- file: lz/hscrollbar.lzx#88 -*- */
return [parent, "width", parent.thumb, "x", parent.thumb, "width"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
/* -*- file: lz/hscrollbar.lzx#86 -*- */
function $m9a ($0) {
/* -*- file: #86 -*- */
var $1 = parent.height;
/* -*- file: -*- */
if ($1 !== this["height"] || !this.inited) {
this.setAttribute("height", $1)
}}
/* -*- file: lz/hscrollbar.lzx#86 -*- */
function $m9b () {
/* -*- file: -*- */
try {
/* -*- file: lz/hscrollbar.lzx#89 -*- */
return [parent, "height"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
var $classrootdepth;function $lzc$class__m9o ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
}
}
