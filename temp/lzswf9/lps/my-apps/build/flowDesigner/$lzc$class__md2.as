package {
dynamic class $lzc$class__md2 extends LzLayout {
/* -*- file: lz/windowpanel.lzx#199 -*- */
static var displayName = "<anonymous extends='layout'>";static var attributes = new LzInheritedHash(LzLayout.attributes);override function init () {
super.init();
this.updateDelegate.register(parent, "onwidth")
}
/* -*- file: -*- */
override function addSubview ($0) {
if ($0.name == "title") {
this.updateDelegate.register($0, "ontext")
} else if ($0.name != "gripper") {
this.updateDelegate.register($0, "onwidth")
};
super.addSubview($0)
}
/* -*- file: -*- */
override function update ($0 = null) {

if (this.locked) return;
var $1 = 15, $2 = 15;
var $3 = 4;
var $4 = parent.icon.width > 0 ? parent.icon.width + $3 : parent.icon.width;
var $5 = 0;
if (parent.title.text == "") {
parent.gripper_left.setAttribute("width", parent.width - parent.controls.x);
parent.gripper_right.setAttribute("width", 0);
return
} else {
parent.gripper_left.setAttribute("width", $1);
$5 = parent.title.getTextWidth();
$5 = Math.ceil($5)
};

var $6 = $1 + $3;
parent.icon.setAttribute("x", $6);
$6 += $4;
parent.title.setAttribute("x", $6);

parent.controls.setAttribute("x", parent.width - parent.controls.width);

var $7 = parent.width - $4 - parent.controls.width - $1 - $2 - $3 * 2;

if ($5 > $7) {
$5 = $7
};
parent.title.setAttribute("width", $5);



$6 += $5 + $3;

parent.gripper_right.setAttribute("x", $6);
parent.gripper_right.setAttribute("width", parent.controls.x - $6)
}
/* -*- file: -*- */
var $classrootdepth;function $lzc$class__md2 ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
}
}
