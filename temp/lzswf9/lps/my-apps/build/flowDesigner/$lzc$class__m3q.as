package {
dynamic class $lzc$class__m3q extends $lzc$class_multistatebutton {
/* -*- file: lz/checkbox.lzx#36 -*- */
static var displayName = "<anonymous extends='multistatebutton'>";static var attributes = new LzInheritedHash($lzc$class_multistatebutton.attributes);function $m3l ($0) {
/* -*- file: #35 -*- */
var $1 = parent.value ? 1 : 0;
/* -*- file: -*- */
if ($1 !== this["statenum"] || !this.inited) {
this.setAttribute("statenum", $1)
}}
/* -*- file: lz/checkbox.lzx#35 -*- */
function $m3m () {
/* -*- file: -*- */
try {
/* -*- file: lz/checkbox.lzx#38 -*- */
return [parent, "value"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
/* -*- file: lz/checkbox.lzx#35 -*- */
function $m3n ($0) {
/* -*- file: #35 -*- */
this.setAttribute("reference", parent)
}
/* -*- file: -*- */
var $classrootdepth;function $lzc$class__m3q ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
}
}
