package {
dynamic class $lzc$class__mi7 extends $lzc$class_combobox {
/* -*- file: common/components/EditCombobox.lzx#38 -*- */
static var displayName = "<anonymous extends='combobox'>";static var children = LzNode.mergeChildren([{attrs: {$classrootdepth: 2, $mi2: function  ($0) {
/* -*- file: -*- */
with (this) {
/* -*- file: common/components/EditCombobox.lzx#39 -*- */
var $1 = classroot.datepathStr;
/* -*- file: -*- */
if ($1 !== this["datapath"] || !this.inited) {
this.setAttribute("datapath", $1)
}}}
, $mi3: function  () {
with (this) {
try {
/* -*- file: common/components/EditCombobox.lzx#42 -*- */
return [classroot, "datepathStr"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}}
, datapath: new LzAlwaysExpr("$mi2", "$mi3", null), fontsize: 12, text: new LzOnceExpr("$mi4", null), value: new LzOnceExpr("$mi5", null)}, "class": $lzc$class__mi8}], $lzc$class_combobox["children"]);static var attributes = new LzInheritedHash($lzc$class_combobox.attributes);function $mhy ($0) {
/* -*- file: common/components/EditCombobox.lzx#37 -*- */
var $1 = parent.width - parent.label.width - 6;
/* -*- file: -*- */
if ($1 !== this["width"] || !this.inited) {
this.setAttribute("width", $1)
}}
/* -*- file: common/components/EditCombobox.lzx#37 -*- */
function $mhz () {
/* -*- file: -*- */
try {
/* -*- file: common/components/EditCombobox.lzx#40 -*- */
return [parent, "width", parent.label, "width"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
/* -*- file: common/components/EditCombobox.lzx#37 -*- */
function $mi0 ($0) {
/* -*- file: #37 -*- */
var $1 = parent.isEnabled;
/* -*- file: -*- */
if ($1 !== this["enabled"] || !this.inited) {
this.setAttribute("enabled", $1)
}}
/* -*- file: common/components/EditCombobox.lzx#37 -*- */
function $mi1 () {
/* -*- file: -*- */
try {
/* -*- file: common/components/EditCombobox.lzx#40 -*- */
return [parent, "isEnabled"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
var $classrootdepth;function $lzc$class__mi7 ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
}
}
