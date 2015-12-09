package {
dynamic class $lzc$class__m4w extends $lzc$class_basescrolltrack {
/* -*- file: lz/vscrollbar.lzx#80 -*- */
static var displayName = "<anonymous extends='basescrolltrack'>";static var attributes = new LzInheritedHash($lzc$class_basescrolltrack.attributes);function $m4o ($0) {
/* -*- file: #80 -*- */
var $1 = parent.thumb.y + parent.thumb.height;
/* -*- file: -*- */
if ($1 !== this["y"] || !this.inited) {
this.setAttribute("y", $1)
}}
/* -*- file: lz/vscrollbar.lzx#80 -*- */
function $m4p () {
/* -*- file: -*- */
try {
/* -*- file: lz/vscrollbar.lzx#83 -*- */
return [parent.thumb, "y", parent.thumb, "height"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
/* -*- file: lz/vscrollbar.lzx#82 -*- */
function $m4q ($0) {
/* -*- file: #82 -*- */
var $1 = parent.height - parent.thumb.y - parent.thumb.height;
/* -*- file: -*- */
if ($1 !== this["height"] || !this.inited) {
this.setAttribute("height", $1)
}}
/* -*- file: lz/vscrollbar.lzx#82 -*- */
function $m4r () {
/* -*- file: -*- */
try {
/* -*- file: lz/vscrollbar.lzx#85 -*- */
return [parent, "height", parent.thumb, "y", parent.thumb, "height"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
/* -*- file: lz/vscrollbar.lzx#83 -*- */
function $m4s ($0) {
/* -*- file: #83 -*- */
var $1 = parent.width;
/* -*- file: -*- */
if ($1 !== this["width"] || !this.inited) {
this.setAttribute("width", $1)
}}
/* -*- file: lz/vscrollbar.lzx#83 -*- */
function $m4t () {
/* -*- file: -*- */
try {
/* -*- file: lz/vscrollbar.lzx#86 -*- */
return [parent, "width"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
var $classrootdepth;function $lzc$class__m4w ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
}
}
