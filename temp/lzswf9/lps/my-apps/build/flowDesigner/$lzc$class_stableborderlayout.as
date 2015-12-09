package {
dynamic class $lzc$class_stableborderlayout extends LzLayout {
/* -*- file: utils/layouts/stableborderlayout.lzx#4 -*- */
static var tagname = "stableborderlayout";static var attributes = new LzInheritedHash(LzLayout.attributes);var axis;function $lzc$set_axis ($0) {

this.setAxis($0)
}
/* -*- file: -*- */
override function reset ($0 = null) {
if (this.locked || this.subviews && this.subviews.length < 2) {
/* -*- file: #9 -*- */
return
};
/* -*- file: #10 -*- */
this.subviews[1].setAttribute(this.axis, this.subviews[0][this.sizeAxis]);

this.update()
}







override function update ($0 = null) {
if (this.locked || this.subviews.length < 3) {
return
};
if ($0 == null) {
var $1 = this.immediateparent;
if ($1.usegetbounds) {
$1 = $1.getBounds()
};
$0 = $1[this.sizeAxis]
};
this.lock();
var $2 = this.subviews[1];
var $3 = this.subviews[2];


var $4 = $3.usegetbounds ? $3.getBounds() : $3;
var $5 = $2.usegetbounds ? $2.getBounds() : $2;

$3.setAttribute(this.axis, $0 - $4[this.sizeAxis] - 0.1);
$2.setAttribute(this.sizeAxis, $0 - $4[this.sizeAxis] - $5[this.axis] + 0.1);

this.locked = false
}


override function addSubview ($0) {
super.addSubview($0);
if (this.subviews.length == 2) {

var $1 = this.subviews[0];
if ($1.usegetbounds) {
$1 = $1.getBounds()
};
this.subviews[1].setAttribute(this.axis, $1[this.sizeAxis]);

$0.setAttribute(this.sizeAxis, 0)
} else if (this.subviews.length > 2) {
this.update()
}}



function setAxis ($0) {
this.axis = $0;
this.sizeAxis = $0 == "x" ? "width" : "height";
if (this.updateDelegate) this.updateDelegate.register(this.immediateparent, "on" + this.sizeAxis)
}
/* -*- file: -*- */
function $lzc$class_stableborderlayout ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
LzNode.mergeAttributes({$attributeDescriptor: {types: {axis: "string", classroot: "string", cloneManager: "string", datapath: "string", defaultplacement: "string", id: "ID", ignoreplacement: "boolean", immediateparent: "string", inited: "boolean", initstage: "string", name: "token", nodeLevel: "number", options: "css", parent: "string", placement: "string", styleclass: "string", subnodes: "string", transition: "string", "with": "string"}}}, $lzc$class_stableborderlayout.attributes);}
}
