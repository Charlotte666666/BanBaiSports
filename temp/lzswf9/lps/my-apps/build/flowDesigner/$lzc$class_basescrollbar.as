package {
dynamic class $lzc$class_basescrollbar extends $lzc$class_basecomponent {
/* -*- file: base/basescrollbar.lzx#11 -*- */
static var tagname = "basescrollbar";static var children = [{attrs: {$CSSDescriptor: {}, $attributeDescriptor: {types: {applied: "boolean", classroot: "string", cloneManager: "string", datapath: "string", defaultplacement: "string", id: "ID", ignoreplacement: "boolean", immediateparent: "string", inited: "boolean", initstage: "string", name: "token", nodeLevel: "number", options: "css", parent: "string", placement: "string", pooling: "boolean", styleclass: "string", subnodes: "string", transition: "string", "with": "string"}}, $classrootdepth: 1, $m42: function  ($0) {
/* -*- file: #125 -*- */
var $1 = this.othersb && this.othersb.visible ? this.immediateparent.height - this.othersb.height : this.immediateparent.height;
/* -*- file: -*- */
if ($1 !== this["height"] || !this.inited) {
this.setAttribute("height", $1)
}}
, $m43: function  () {
try {
/* -*- file: base/basescrollbar.lzx#128 -*- */
return [this, "othersb", this.othersb, "visible", this.immediateparent, "height", this.othersb, "height"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
, height: new LzAlwaysExpr("$m42", "$m43", null), name: "heightConstraint"}, "class": LzState}, {attrs: {$CSSDescriptor: {}, $attributeDescriptor: {types: {applied: "boolean", classroot: "string", cloneManager: "string", datapath: "string", defaultplacement: "string", id: "ID", ignoreplacement: "boolean", immediateparent: "string", inited: "boolean", initstage: "string", name: "token", nodeLevel: "number", options: "css", parent: "string", placement: "string", pooling: "boolean", styleclass: "string", subnodes: "string", transition: "string", "with": "string"}}, $classrootdepth: 1, $m44: function  ($0) {
/* -*- file: base/basescrollbar.lzx#134 -*- */
var $1 = this.othersb && this.othersb.visible ? this.immediateparent.width - this.othersb.width : this.immediateparent.width;
/* -*- file: -*- */
if ($1 !== this["width"] || !this.inited) {
this.setAttribute("width", $1)
}}
, $m45: function  () {
try {
/* -*- file: base/basescrollbar.lzx#137 -*- */
return [this, "othersb", this.othersb, "visible", this.immediateparent, "width", this.othersb, "width"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
, name: "widthConstraint", width: new LzAlwaysExpr("$m44", "$m45", null)}, "class": LzState}];static var attributes = new LzInheritedHash($lzc$class_basecomponent.attributes);function $m3y ($0) {
/* -*- file: base/basescrollbar.lzx#14 -*- */
var $1 = null;
/* -*- file: -*- */
if ($1 !== this["scrolltarget"] || !this.inited) {
this.setAttribute("scrolltarget", $1)
}}
/* -*- file: base/basescrollbar.lzx#14 -*- */
function $m3z () {
/* -*- file: -*- */
try {
/* -*- file: base/basescrollbar.lzx#17 -*- */
return []
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
var scrolltarget;var axis;var sizeAxis;var otherSizeAxis;var scrollattr;var scrollmax;var onscrollmax;var pagesize;var stepsize;var scrollable;var focusview;var usemousewheel;function $lzc$set_usemousewheel ($0) {
/* -*- file: base/basescrollbar.lzx#64 -*- */
if ($0 == this.usemousewheel) return;
this.usemousewheel = $0;
if (this._mwUpdateDel) this._mwUpdateDel.unregisterAll();
if ($0) {
this._mwUpdateDel = new LzDelegate(this, "mousewheelUpdate", lz.Keys, "onmousewheeldelta")
}}
/* -*- file: -*- */
var mousewheelevent_on;var mousewheelevent_off;var mousewheelactive;var onscrollable;function $m40 ($0) {
/* -*- file: base/basescrollbar.lzx#89 -*- */
var $1 = this.enabled && this.scrollable && (this._parentcomponent ? this._parentcomponent._enabled : true);
/* -*- file: -*- */
if ($1 !== this["_enabled"] || !this.inited) {
this.setAttribute("_enabled", $1)
}}
/* -*- file: base/basescrollbar.lzx#89 -*- */
function $m41 () {
/* -*- file: -*- */
try {
/* -*- file: base/basescrollbar.lzx#92 -*- */
return [this, "enabled", this, "scrollable", this, "_parentcomponent", this._parentcomponent, "_enabled"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
var usetargetsize;var othersb;var thumb;var _mwActivateDel;var _mwDeactivateDel;var _mwUpdateDel;var clipSizeDel;var targetHeightDel;var targetPosDel;var heightDel;var heightConstraint;var widthConstraint;override function init () {
/* -*- file: base/basescrollbar.lzx#140 -*- */
this.sizeAxis = this.axis == "x" ? "width" : "height";
this.otherSizeAxis = this.axis == "x" ? "height" : "width";


if (this.scrollattr == "") {
this.scrollattr = this.axis
};


var $0 = false;


if (!this.scrolltarget) {
var $1 = immediateparent.subviews.length;
for (var $2 = 0;$2 < $1;$2++) {
var $3 = immediateparent.subviews[$2];
if ($3 instanceof lz.view) {
if (!($3 instanceof lz.basescrollbar)) {

if (!this.scrolltarget) this.scrolltarget = $3
} else {

if ($3 != this) {
this.setAttribute("othersb", $3)
}}}};




if (this.axis == "y") {
this.setAttribute("align", "right")
} else {
this.setAttribute("valign", "bottom")
};
$0 = true
};

if (!this.focusview) {
if (this.scrolltarget && this.scrolltarget["focusable"]) {
this.focusview = this.scrolltarget
} else if (this.immediateparent["focusable"]) {
this.focusview = this.immediateparent
}};


if (this.focusview) {
this._mwActivateDel = new LzDelegate(this, "activateMouseWheel", this.focusview, this.mousewheelevent_on);

this._mwDeactivateDel = new LzDelegate(this, "deactivateMouseWheel", this.focusview, this.mousewheelevent_off)
};



if (this.sizeAxis == "width") {
if (!hassetwidth) {
this.widthConstraint.setAttribute("applied", true)
}};


if (this.sizeAxis == "height") {
if (!hassetheight) {
this.heightConstraint.setAttribute("applied", true)
}};


if (!this.scrolltarget) {
this.setAttribute("enabled", false)
} else {
this.clipSizeDel = new LzDelegate(this, "scrollbarSizeUpdate", this.scrolltarget.immediateparent, "on" + this.sizeAxis);



if (this.scrollmax == null) {
this.usetargetsize = true;
this.targetHeightDel = new LzDelegate(this, "targetSizeUpdate", this.scrolltarget, "on" + this.sizeAxis);

this.scrollmax = scrolltarget[this.sizeAxis];
if ($0 && this.othersb) {
this.scrollmax += this[this.otherSizeAxis]
}} else {

this.targetHeightDel = new LzDelegate(this, "scrollbarSizeUpdate", this, "onscrollmax")
};


var $4;
if (this.scrollattr == "yscroll") {
/* -*- file: #226 -*- */
$4 = "onscrolly"
} else $4 = "on" + this.scrollattr;
this.targetPosDel = new LzDelegate(this, "targetPosUpdate", this.scrolltarget, $4);




this.heightDel = new LzDelegate(this, "scrollbarSizeUpdate", this.scrolltrack, "on" + this.sizeAxis);


scrollbarSizeUpdate(null)
};
super.init()
}




override function destroy () {
this.scrolltarget = null;
this.focusview = null;
this.othersb = null;

super.destroy()
}


function activateMouseWheel ($0) {
this.setAttribute("mousewheelactive", true)
}



function deactivateMouseWheel ($0) {
this.setAttribute("mousewheelactive", false)
}



function mousewheelUpdate ($0) {
if (this.axis != "y") return;

if (this.mousewheelactive || this.scrolltarget && this.scrolltarget.immediateparent && this.scrolltarget.immediateparent.isMouseOver()) {
this.step(-$0)
}}




function targetSizeUpdate ($0) {

if (this.scrolltarget) {
var $1 = this.scrolltarget[this.sizeAxis];
if (this.othersb && this.othersb.visible) {
$1 += this[this.otherSizeAxis]
};
this.setAttribute("scrollmax", $1);
this.scrollbarSizeUpdate(null)
}}




function scrollbarSizeUpdate ($0) {



this.updateThumbSize();

if (this.scrolltarget.immediateparent[this.sizeAxis] - this.scrollmax >= 0) {

return
};
var $1 = this.scrolltarget[this.scrollattr] + this.scrollmax;
if ($1 < this.scrolltarget.immediateparent[this.sizeAxis]) {


var $2 = this.scrolltarget.immediateparent[this.sizeAxis] - this.scrollmax;

this.scrolltarget.setAttribute(this.scrollattr, $2)
} else {
this.updateThumbPos()
};

this.pagesize = this[this.sizeAxis]
}




function targetPosUpdate ($0) {


this.updateThumbPos()
}


function updateThumbPos () {

var $0 = 0;
if (this.scrollmax > 0 && this.scrolltrack && this.scrolltarget) {
$0 = Math.min(Math.ceil(-this.scrolltarget[this.scrollattr] / this.scrollmax * this.scrolltrack[this.sizeAxis]), this.scrolltrack[this.sizeAxis] - this.thumb[this.sizeAxis])
};

this.thumb.setAttribute(this.axis, $0)
}





override function _showEnabled () {
if (!_enabled) {
/* -*- file: #338 -*- */
this.thumb.setAttribute(sizeAxis, 0)
} else updateThumbSize();
this.thumb.setAttribute("visible", _enabled);
if (scrolltarget) this.scrolltarget.setAttribute(scrollattr, 0)
}


function updateThumbSize () {


if (this.scrollmax <= this.scrolltarget.immediateparent[this.sizeAxis]) {
if (this.scrollable) {
this.setAttribute("scrollable", false);
if (this.othersb) this.othersb.targetSizeUpdate(null)
};

return
} else {
if (!this.scrollable) {
this.setAttribute("scrollable", true);
if (this.othersb) this.othersb.targetSizeUpdate(null)
}};



var $0 = 0;
if (this.scrollmax > 0 && this.scrolltrack && this.scrolltarget) {
$0 = Math.floor(this.scrolltarget.immediateparent[this.sizeAxis] / this.scrollmax * this.scrolltrack[this.sizeAxis])
};


if ($0 < 14) $0 = 14;
thumb.setAttribute(this.sizeAxis, $0)
}





function setPosRelative ($0) {

if (!this.scrolltarget) return;

var $1 = this.scrolltarget[this.scrollattr] - $0;

if ($1 > 0) $1 = 0;

var $2 = Math.max(this.scrollmax - this.scrolltarget.immediateparent[this.sizeAxis], 0);

if ($1 < -$2) $1 = -$2;

this.scrolltarget.setAttribute(this.scrollattr, $1)
}




function step ($0) {
this.setPosRelative($0 * this.stepsize)
}



function page ($0) {
this.setPosRelative($0 * this.pagesize)
}


override function _applystyle ($0) {
if (this.style != null) {
setTint(this, this.style.basecolor)
}}
/* -*- file: -*- */
function $lzc$class_basescrollbar ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
LzNode.mergeAttributes({$attributeDescriptor: {types: {_focusable: "boolean", aaactive: "boolean", aadescription: "string", aaname: "string", aasilent: "boolean", aatabindex: "number", align: "string", axis: "string", backgroundrepeat: "string", bgcolor: "color", cachebitmap: "boolean", capabilities: "string", classroot: "string", clickable: "boolean", clickregion: "string", clip: "boolean", cloneManager: "string", contextmenu: "string", cornerradius: "string", cursor: "token", datapath: "string", defaultplacement: "string", doesenter: "boolean", fgcolor: "color", focusable: "boolean", focustrap: "boolean", font: "string", fontsize: "size", fontstyle: "string", frame: "numberExpression", framesloadratio: "number", hasdirectionallayout: "boolean", hassetheight: "boolean", hassetwidth: "boolean", height: "size", id: "ID", ignoreplacement: "boolean", immediateparent: "string", inited: "boolean", initstage: "string", layout: "css", loadratio: "number", mask: "string", mousewheelactive: "boolean", mousewheelevent_off: "string", mousewheelevent_on: "string", name: "token", nodeLevel: "number", opacity: "number", options: "css", otherSizeAxis: "string", pagesize: "number", parent: "string", pixellock: "boolean", placement: "string", playing: "boolean", resource: "string", resourceheight: "number", resourcewidth: "number", rotation: "numberExpression", scrollattr: "string", scrollmax: "number", shadowangle: "number", shadowblurradius: "number", shadowcolor: "color", shadowdistance: "number", showhandcursor: "boolean", sizeAxis: "string", source: "string", stretches: "string", styleclass: "string", subnodes: "string", subviews: "string", text: "html", tintcolor: "string", totalframes: "number", transition: "string", unstretchedheight: "number", unstretchedwidth: "number", usegetbounds: "boolean", valign: "string", visibility: "string", visible: "boolean", width: "size", "with": "string", x: "numberExpression", xoffset: "numberExpression", xscale: "numberExpression", y: "numberExpression", yoffset: "numberExpression", yscale: "numberExpression"}}, _enabled: new LzAlwaysExpr("$m40", "$m41", null), _mwActivateDel: null, _mwDeactivateDel: null, _mwUpdateDel: null, axis: "y", clipSizeDel: null, focusable: false, focusview: null, heightDel: null, mousewheelactive: false, mousewheelevent_off: "onblur", mousewheelevent_on: "onfocus", onscrollable: LzDeclaredEvent, onscrollmax: LzDeclaredEvent, othersb: null, pagesize: null, scrollable: true, scrollattr: "", scrollmax: null, scrolltarget: new LzAlwaysExpr("$m3y", "$m3z", null), stepsize: 10, targetHeightDel: null, targetPosDel: null, thumb: null, usemousewheel: true, usetargetsize: false}, $lzc$class_basescrollbar.attributes);}
}
