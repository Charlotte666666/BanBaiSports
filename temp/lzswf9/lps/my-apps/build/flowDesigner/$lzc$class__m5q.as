package {
dynamic class $lzc$class__m5q extends $lzc$class_basetrackgroup {
/* -*- file: lz/list.lzx#88 -*- */
static var displayName = "<anonymous extends='basetrackgroup'>";static var children = [{attrs: {$classrootdepth: 3, axis: "y", spacing: new LzAlwaysExpr("$m5j", "$m5k", null)}, "class": $lzc$class__m5r}];static var attributes = new LzInheritedHash($lzc$class_basetrackgroup.attributes);function $m5d ($0) {
/* -*- file: #87 -*- */
var $1 = immediateparent.width;
/* -*- file: -*- */
if ($1 !== this["width"] || !this.inited) {
this.setAttribute("width", $1)
}}
/* -*- file: lz/list.lzx#87 -*- */
function $m5e () {
/* -*- file: -*- */
try {
/* -*- file: lz/list.lzx#90 -*- */
return [immediateparent, "width"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
/* -*- file: lz/list.lzx#87 -*- */
function $m5f ($0) {
/* -*- file: #87 -*- */
var $1 = classroot.tracking;
/* -*- file: -*- */
if ($1 !== this["tracking"] || !this.inited) {
this.setAttribute("tracking", $1)
}}
/* -*- file: lz/list.lzx#87 -*- */
function $m5g () {
/* -*- file: -*- */
try {
/* -*- file: lz/list.lzx#90 -*- */
return [classroot, "tracking"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
/* -*- file: lz/list.lzx#87 -*- */
function $m5h ($0) {
/* -*- file: #87 -*- */
var $1 = parent;
/* -*- file: -*- */
if ($1 !== this["boundsref"] || !this.inited) {
this.setAttribute("boundsref", $1)
}}
/* -*- file: lz/list.lzx#87 -*- */
function $m5i () {
/* -*- file: -*- */
try {
/* -*- file: lz/list.lzx#90 -*- */
return [this, "parent"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
/* -*- file: lz/list.lzx#92 -*- */
function $m5l ($0) {
if (classroot.itemclassname == "") {
classroot.__itemclass = $0.constructor
};
if ((classroot.dataoption == "lazy" || classroot.dataoption == "resize") && !classroot._itemheight) {


classroot._itemheight = $0.height
};
classroot.adjustmyheight()
}

function $m5m ($0) {
classroot.adjustmyheight()
}
/* -*- file: -*- */
var $classrootdepth;function $lzc$class__m5q ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
}
}
