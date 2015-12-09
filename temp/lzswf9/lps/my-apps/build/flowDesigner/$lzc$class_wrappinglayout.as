package {
dynamic class $lzc$class_wrappinglayout extends LzLayout {
/* -*- file: utils/layouts/wrappinglayout.lzx#4 -*- */
static var tagname = "wrappinglayout";static var attributes = new LzInheritedHash(LzLayout.attributes);var axis;function $lzc$set_axis ($0) {


this.setAxis($0)
}
/* -*- file: -*- */
var spacing;var xinset;var yinset;function $mfu ($0) {
/* -*- file: utils/layouts/wrappinglayout.lzx#19 -*- */
var $1 = this.spacing;
/* -*- file: -*- */
if ($1 !== this["xspacing"] || !this.inited) {
this.setAttribute("xspacing", $1)
}}
/* -*- file: utils/layouts/wrappinglayout.lzx#19 -*- */
function $mfv () {
/* -*- file: -*- */
try {
/* -*- file: utils/layouts/wrappinglayout.lzx#22 -*- */
return [this, "spacing"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
var xspacing;function $mfw ($0) {
/* -*- file: utils/layouts/wrappinglayout.lzx#22 -*- */
var $1 = this.spacing;
/* -*- file: -*- */
if ($1 !== this["yspacing"] || !this.inited) {
this.setAttribute("yspacing", $1)
}}
/* -*- file: utils/layouts/wrappinglayout.lzx#22 -*- */
function $mfx () {
/* -*- file: -*- */
try {
/* -*- file: utils/layouts/wrappinglayout.lzx#25 -*- */
return [this, "spacing"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
var yspacing;var duration;function setAxis ($0) {
/* -*- file: utils/layouts/wrappinglayout.lzx#30 -*- */
this.axis = $0;
this.otherAxis = $0 == "x" ? "y" : "x";
this.sizeAxis = $0 == "x" ? "width" : "height";
this.otherSizeAxis = $0 == "x" ? "height" : "width"
}


override function addSubview ($0) {
this.updateDelegate.register($0, "onwidth");
this.updateDelegate.register($0, "onheight");
this.updateDelegate.register($0, "onvisible");
this.updateDelegate.register(this.immediateparent, "onwidth");
super.addSubview($0);
this.update()
}





override function update ($0 = null) {

if (this.locked) return;
var $1 = this.subviews;


var $2 = $1.length;
var $3 = [];
for (var $4 = 0;$4 < $2;$4++) {
var $5 = this.subviews[$4];
if ($5.visible) {
$3.push($5)
}};


var $6 = this.immediateparent;
if ($6.usegetbounds) {
$6 = $6.getBounds()
};
var $7 = $6[this.sizeAxis];


var $8 = this[this.axis + "inset"];

var $9 = this[this.otherAxis + "inset"];

var $a = 0;
var $b = this[this.axis + "spacing"];
var $c = this[this.otherAxis + "spacing"];

var $2 = $3.length;
for (var $4 = 0;$4 < $2;$4++) {
var $5 = $3[$4];
$5.animate(this.axis, $8, this.duration, false);
$5.animate(this.otherAxis, $9, this.duration, false);

if ($4 == $2 - 1) break;


if ($5.usegetbounds) {
$5 = $5.getBounds()
};

$8 += $5[this.sizeAxis] + $b;
$a = Math.max($a, $5[this.otherSizeAxis]);

var $d = $1[$4 + 1];

if ($d.usegetbounds) {
$d = $d.getBounds()
};

if ($8 + $d[this.sizeAxis] > $7) {
$8 = this[this.axis + "inset"];
$9 += $a + $c;
$a = 0
}}}




override function toString () {
return "wrappinglayout for " + this.immediateparent
}
/* -*- file: -*- */
function $lzc$class_wrappinglayout ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
LzNode.mergeAttributes({$attributeDescriptor: {types: {axis: "string", classroot: "string", cloneManager: "string", datapath: "string", defaultplacement: "string", id: "ID", ignoreplacement: "boolean", immediateparent: "string", inited: "boolean", initstage: "string", name: "token", nodeLevel: "number", options: "css", parent: "string", placement: "string", styleclass: "string", subnodes: "string", transition: "string", "with": "string"}}, axis: "x", duration: 0, spacing: 1, xinset: 0, xspacing: new LzAlwaysExpr("$mfu", "$mfv", null), yinset: 0, yspacing: new LzAlwaysExpr("$mfw", "$mfx", null)}, $lzc$class_wrappinglayout.attributes);}
}
