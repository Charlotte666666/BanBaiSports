package {
dynamic class $lzc$class__mj9 extends $lzc$class_basebutton {
/* -*- file: common/components/EditCombobox.lzx#102 -*- */
static var displayName = "<anonymous extends='basebutton'>";static var attributes = new LzInheritedHash($lzc$class_basebutton.attributes);function $mik ($0) {
/* -*- file: #101 -*- */
var $1 = parent.isEnabled;
/* -*- file: -*- */
if ($1 !== this["visible"] || !this.inited) {
this.setAttribute("visible", $1)
}}
/* -*- file: common/components/EditCombobox.lzx#101 -*- */
function $mil () {
/* -*- file: -*- */
try {
/* -*- file: common/components/EditCombobox.lzx#104 -*- */
return [parent, "isEnabled"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
/* -*- file: common/components/EditCombobox.lzx#101 -*- */
function $mim ($0) {
/* -*- file: #101 -*- */
classroot.optionsView.onclick.sendEvent()
}
/* -*- file: -*- */
var $classrootdepth;function $lzc$class__mj9 ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
}
}
