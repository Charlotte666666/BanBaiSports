package {
dynamic class $lzc$class__m8v extends $lzc$class_floatinglist {
/* -*- file: base/basecombobox.lzx#268 -*- */
static var displayName = "<anonymous extends='floatinglist'>";static var children = LzNode.mergeChildren([], $lzc$class_floatinglist["children"]);static var attributes = new LzInheritedHash($lzc$class_floatinglist.attributes);function $m85 ($0) {
/* -*- file: #267 -*- */
var $1 = owner.width - 1;
/* -*- file: -*- */
if ($1 !== this["width"] || !this.inited) {
this.setAttribute("width", $1)
}}
/* -*- file: base/basecombobox.lzx#267 -*- */
function $m86 () {
/* -*- file: -*- */
try {
/* -*- file: base/basecombobox.lzx#270 -*- */
return [owner, "width"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
/* -*- file: base/basecombobox.lzx#267 -*- */
function $m87 ($0) {
/* -*- file: #267 -*- */
var $1 = this.owner.bordersize;
/* -*- file: -*- */
if ($1 !== this["bordersize"] || !this.inited) {
this.setAttribute("bordersize", $1)
}}
/* -*- file: base/basecombobox.lzx#267 -*- */
function $m88 () {
/* -*- file: -*- */
try {
/* -*- file: base/basecombobox.lzx#270 -*- */
return [this.owner, "bordersize"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
/* -*- file: base/basecombobox.lzx#267 -*- */
function $m89 ($0) {
/* -*- file: #267 -*- */
var $1 = this.owner.spacing;
/* -*- file: -*- */
if ($1 !== this["spacing"] || !this.inited) {
this.setAttribute("spacing", $1)
}}
/* -*- file: base/basecombobox.lzx#267 -*- */
function $m8a () {
/* -*- file: -*- */
try {
/* -*- file: base/basecombobox.lzx#270 -*- */
return [this.owner, "spacing"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
/* -*- file: base/basecombobox.lzx#267 -*- */
function $m8b ($0) {
/* -*- file: #267 -*- */
var $1 = this.owner.shownitems;
/* -*- file: -*- */
if ($1 !== this["shownitems"] || !this.inited) {
this.setAttribute("shownitems", $1)
}}
/* -*- file: base/basecombobox.lzx#267 -*- */
function $m8c () {
/* -*- file: -*- */
try {
/* -*- file: base/basecombobox.lzx#270 -*- */
return [this.owner, "shownitems"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
/* -*- file: base/basecombobox.lzx#267 -*- */
function $m8d ($0) {
/* -*- file: #267 -*- */
var $1 = this.owner.attachoffset;
/* -*- file: -*- */
if ($1 !== this["attachoffset"] || !this.inited) {
this.setAttribute("attachoffset", $1)
}}
/* -*- file: base/basecombobox.lzx#267 -*- */
function $m8e () {
/* -*- file: -*- */
try {
/* -*- file: base/basecombobox.lzx#270 -*- */
return [this.owner, "attachoffset"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
/* -*- file: base/basecombobox.lzx#267 -*- */
function $m8f ($0) {
/* -*- file: #267 -*- */
var $1 = owner.autoscrollbar;
/* -*- file: -*- */
if ($1 !== this["autoscrollbar"] || !this.inited) {
this.setAttribute("autoscrollbar", $1)
}}
/* -*- file: base/basecombobox.lzx#267 -*- */
function $m8g () {
/* -*- file: -*- */
try {
/* -*- file: base/basecombobox.lzx#270 -*- */
return [owner, "autoscrollbar"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
/* -*- file: base/basecombobox.lzx#267 -*- */
function $m8h ($0) {
/* -*- file: #267 -*- */
var $1 = owner.defaultselection ? owner.defaultselection : (owner.defaulttext == "" ? 0 : null);
/* -*- file: -*- */
if ($1 !== this["defaultselection"] || !this.inited) {
this.setAttribute("defaultselection", $1)
}}
/* -*- file: base/basecombobox.lzx#267 -*- */
function $m8i () {
/* -*- file: -*- */
try {
/* -*- file: base/basecombobox.lzx#270 -*- */
return [owner, "defaultselection", owner, "defaulttext"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
/* -*- file: base/basecombobox.lzx#273 -*- */
function $m8j ($0) {
this.dataoption = owner.dataoption
}
/* -*- file: -*- */
function $m8k ($0) {



if (this.owner.shownitems == -1) {
var $1 = Math.floor((canvas.height - owner.y) / owner.height);
this.setAttribute("shownitems", $1)
}}




function _dokeyup ($0) {
if ($0 == 27) {
this.owner.setOpen(false)
}}
/* -*- file: -*- */
var $classrootdepth;var $datapath;function $lzc$class__m8v ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
}
}
