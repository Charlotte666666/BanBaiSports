package {
dynamic class $lzc$class__mke extends $lzc$class_radiogroup {
/* -*- file: common/components/RadioGroup.lzx#65 -*- */
static var displayName = "<anonymous extends='radiogroup'>";static var attributes = new LzInheritedHash($lzc$class_radiogroup.attributes);function $mk5 ($0) {
/* -*- file: #64 -*- */
var $1 = parent.isEnabled;
/* -*- file: -*- */
if ($1 !== this["visible"] || !this.inited) {
this.setAttribute("visible", $1)
}}
/* -*- file: common/components/RadioGroup.lzx#64 -*- */
function $mk6 () {
/* -*- file: -*- */
try {
/* -*- file: common/components/RadioGroup.lzx#67 -*- */
return [parent, "isEnabled"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
/* -*- file: common/components/RadioGroup.lzx#64 -*- */
function $mk7 ($0) {
/* -*- file: #64 -*- */
var $1 = parent.width - parent.labelWidth;
/* -*- file: -*- */
if ($1 !== this["width"] || !this.inited) {
this.setAttribute("width", $1)
}}
/* -*- file: common/components/RadioGroup.lzx#64 -*- */
function $mk8 () {
/* -*- file: -*- */
try {
/* -*- file: common/components/RadioGroup.lzx#67 -*- */
return [parent, "width", parent, "labelWidth"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
var $classrootdepth;function $lzc$class__mke ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
}
}
