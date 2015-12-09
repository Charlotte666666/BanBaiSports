package {
dynamic class $lzc$class_simplelayout extends LzLayout {
/* -*- file: utils/layouts/simplelayout.lzx#4 -*- */
static var tagname = "simplelayout";static var attributes = new LzInheritedHash(LzLayout.attributes);var axis;function $lzc$set_axis ($0) {


this.setAxis($0)
}
/* -*- file: -*- */
var inset;function $lzc$set_inset ($0) {
/* -*- file: utils/layouts/simplelayout.lzx#13 -*- */
this.inset = $0;
/* -*- file: #13 -*- */
if (this.subviews && this.subviews.length) this.update();
/* -*- file: #13 -*- */
if (this["oninset"]) this.oninset.sendEvent(this.inset)
}
/* -*- file: -*- */
var spacing;function $lzc$set_spacing ($0) {
/* -*- file: utils/layouts/simplelayout.lzx#19 -*- */
this.spacing = $0;
/* -*- file: #19 -*- */
if (this.subviews && this.subviews.length) this.update();
/* -*- file: #19 -*- */
if (this["onspacing"]) this.onspacing.sendEvent(this.spacing)
}
/* -*- file: -*- */
function setAxis ($0) {
if (this["axis"] == null || this.axis != $0) {
this.axis = $0;
this.sizeAxis = $0 == "x" ? "width" : "height";

if (this.subviews.length) this.update();
if (this["onaxis"]) this.onaxis.sendEvent(this.axis)
}}



override function addSubview ($0) {
this.updateDelegate.register($0, "on" + this.sizeAxis);
this.updateDelegate.register($0, "onvisible");


if (!this.locked) {
var $1 = null;
var $2 = this.subviews;
for (var $3 = $2.length - 1;$3 >= 0;--$3) {
if ($2[$3].visible) {
$1 = $2[$3];
break
}};


if ($1) {
var $4 = $1[this.axis] + $1[this.sizeAxis] + this.spacing
} else {
var $4 = this.inset
};

$0.setAttribute(this.axis, $4)
};
super.addSubview($0)
}





override function update ($0 = null) {

if (this.locked) return;
var $1 = this.subviews.length;
var $2 = this.inset;

for (var $3 = 0;$3 < $1;$3++) {
var $4 = this.subviews[$3];
if (!$4.visible) continue;
if ($4[this.axis] != $2) {
$4.setAttribute(this.axis, $2)
};

if ($4.usegetbounds) {
$4 = $4.getBounds()
};
$2 += this.spacing + $4[this.sizeAxis]
}}
/* -*- file: -*- */
function $lzc$class_simplelayout ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
LzNode.mergeAttributes({$attributeDescriptor: {types: {axis: "string", classroot: "string", cloneManager: "string", datapath: "string", defaultplacement: "string", id: "ID", ignoreplacement: "boolean", immediateparent: "string", inited: "boolean", initstage: "string", name: "token", nodeLevel: "number", options: "css", parent: "string", placement: "string", styleclass: "string", subnodes: "string", transition: "string", "with": "string"}}, axis: "y", inset: 0, spacing: 0}, $lzc$class_simplelayout.attributes);}
}
