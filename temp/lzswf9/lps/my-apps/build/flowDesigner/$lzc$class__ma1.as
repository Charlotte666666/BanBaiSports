package {
dynamic class $lzc$class__ma1 extends $lzc$class_multistatebutton {
/* -*- file: lz/radio.lzx#249 -*- */
static var displayName = "<anonymous extends='multistatebutton'>";static var attributes = new LzInheritedHash($lzc$class_multistatebutton.attributes);function $m9u ($0) {
/* -*- file: #248 -*- */
var $1 = parent.selected ? 1 : 0;
/* -*- file: -*- */
if ($1 !== this["statenum"] || !this.inited) {
this.setAttribute("statenum", $1)
}}
/* -*- file: lz/radio.lzx#248 -*- */
function $m9v () {
/* -*- file: -*- */
try {
/* -*- file: lz/radio.lzx#251 -*- */
return [parent, "selected"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
/* -*- file: lz/radio.lzx#248 -*- */
function $m9w ($0) {
/* -*- file: #248 -*- */
this.setAttribute("reference", parent)
}
/* -*- file: -*- */
var $classrootdepth;function $lzc$class__ma1 ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
}
}
