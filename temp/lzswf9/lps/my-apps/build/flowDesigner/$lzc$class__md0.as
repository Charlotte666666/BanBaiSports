package {
dynamic class $lzc$class__md0 extends $lzc$class_resizeview_x {
/* -*- file: lz/windowpanel.lzx#189 -*- */
static var displayName = "<anonymous extends='resizeview_x'>";static var children = LzNode.mergeChildren([], $lzc$class_resizeview_x["children"]);static var attributes = new LzInheritedHash($lzc$class_resizeview_x.attributes);function $mbv ($0) {
/* -*- file: #188 -*- */
var $1 = immediateparent.width;
/* -*- file: -*- */
if ($1 !== this["width"] || !this.inited) {
this.setAttribute("width", $1)
}}
/* -*- file: lz/windowpanel.lzx#188 -*- */
function $mbw () {
/* -*- file: -*- */
try {
/* -*- file: lz/windowpanel.lzx#191 -*- */
return [immediateparent, "width"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
/* -*- file: lz/windowpanel.lzx#188 -*- */
function $mbx ($0) {
/* -*- file: #188 -*- */
var $1 = parent.state;
/* -*- file: -*- */
if ($1 !== this["frame"] || !this.inited) {
this.setAttribute("frame", $1)
}}
/* -*- file: lz/windowpanel.lzx#188 -*- */
function $mby () {
/* -*- file: -*- */
try {
/* -*- file: lz/windowpanel.lzx#191 -*- */
return [parent, "state"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
var $classrootdepth;function $lzc$class__md0 ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
}
}
