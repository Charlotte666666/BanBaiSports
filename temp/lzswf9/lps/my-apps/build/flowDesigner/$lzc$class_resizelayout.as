package {
dynamic class $lzc$class_resizelayout extends LzLayout {
/* -*- file: utils/layouts/resizelayout.lzx#4 -*- */
static var tagname = "resizelayout";static var attributes = new LzInheritedHash(LzLayout.attributes);var axis;function $lzc$set_axis ($0) {




this.setAxis($0)
}
/* -*- file: -*- */
var spacing;override function construct ($0, $1) {
/* -*- file: utils/layouts/resizelayout.lzx#16 -*- */
super.construct($0, $1);
this.resetDelegate = new LzDelegate(this, "reset");
this.heldSubs = new Object();

if ($1["releaseview"] != null) {
this.heldSubs[$0[$1.releaseview].getUID()] = false
};

if ($1["release"] != null) {
this.heldSubs[$1.release.getUID()] = false
}}




function setAxis ($0) {
this.axis = $0;
this.sizeAxis = $0 == "x" ? "width" : "height";
this.updateDelegate.register(this.immediateparent, "on" + this.sizeAxis)
}


override function addSubview ($0) {

super.addSubview($0);
var $1 = $0.getUID();
if ($0.getOption("releasetolayout")) {
$0.setAttribute(this.sizeAxis, 0)
} else {
this.hold($0)
};

this.resetDelegate.register($0, "onvisible");
this.resetDelegate.register($0, "on" + this.sizeAxis);
this.reset()
}




function hold ($0) {



this.heldSubs[$0.getUID()] = true;
this.reset()
}



function release ($0) {
this.heldSubs[$0.getUID()] = false;
this.reset()
}


override function reset ($0 = null) {

if (this.locked) {
/* -*- file: #74 -*- */
return
};
/* -*- file: #75 -*- */
var $1 = this.subviews.length;
this.totalHeld = 0;
this.heldAmount = 0;
this.lastUnheld = -1;


var $2 = 0;
for (var $3 = 0;$3 < $1;$3++) {
var $4 = this.subviews[$3];
if ($4.visible) $2++
};


var $5 = 0;
for (var $3 = 0;$3 < $1;$3++) {
var $4 = this.subviews[$3];
if (!$4.visible) continue;

var $6 = $5 < $2 - 1 ? this.spacing : 0;
if (this.heldSubs[$4.getUID()]) {
$6 += $4[this.sizeAxis];
this.heldAmount += $6;
this.totalHeld++
} else {
this.lastUnheld = $3;
this.heldAmount += $6
};

$5++
};

this.unheldCount = $2 - this.totalHeld;

this.update()
}









override function update ($0 = null) {

if (this.locked) {
/* -*- file: #121 -*- */
return
};
/* -*- file: #122 -*- */
this.lock();
var $1 = this.immediateparent[this.sizeAxis];

var $2 = $1 - this.heldAmount;
var $3 = $2 / this.unheldCount;
var $4 = this.subviews.length;
var $5 = 0;

for (var $6 = 0;$6 < $4;$6++) {
var $7 = this.subviews[$6];
if (!$7.visible) continue;


$7.setAttribute(this.axis, $5);


if (!this.heldSubs[$7.getUID()]) {
$7.setAttribute(this.sizeAxis, $3)
};

$5 += this.spacing + $7[this.sizeAxis]
};

this.locked = false
}
/* -*- file: -*- */
function $lzc$class_resizelayout ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
LzNode.mergeAttributes({$attributeDescriptor: {types: {axis: "string", classroot: "string", cloneManager: "string", datapath: "string", defaultplacement: "string", id: "ID", ignoreplacement: "boolean", immediateparent: "string", inited: "boolean", initstage: "string", name: "token", nodeLevel: "number", options: "css", parent: "string", placement: "string", styleclass: "string", subnodes: "string", transition: "string", "with": "string"}}, axis: "y", spacing: 0}, $lzc$class_resizelayout.attributes);}
}
