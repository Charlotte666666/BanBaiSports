package {
dynamic class $lzc$class_basewindow extends $lzc$class_basecomponent {
/* -*- file: base/basewindow.lzx#16 -*- */
static var tagname = "basewindow";static var children = [{attrs: {$CSSDescriptor: {}, $attributeDescriptor: {types: {applied: "boolean", classroot: "string", cloneManager: "string", datapath: "string", defaultplacement: "string", id: "ID", ignoreplacement: "boolean", immediateparent: "string", inited: "boolean", initstage: "string", name: "token", nodeLevel: "number", options: "css", parent: "string", placement: "string", pooling: "boolean", styleclass: "string", subnodes: "string", transition: "string", "with": "string"}}, $classrootdepth: 1, $mb2: function  ($0) {
/* -*- file: #48 -*- */
this.setAttribute("starty", this.y)
}
/* -*- file: -*- */
, $mb3: function  ($0) {
/* -*- file: base/basewindow.lzx#49 -*- */
this.setAttribute("startx", this.x)
}
/* -*- file: -*- */
, $mb4: function  ($0) {
/* -*- file: base/basewindow.lzx#50 -*- */
this.setAttribute("ydoffset", this.getMouse("y"))
}
/* -*- file: -*- */
, $mb5: function  ($0) {
/* -*- file: base/basewindow.lzx#51 -*- */
this.setAttribute("xdoffset", this.getMouse("x"))
}
/* -*- file: -*- */
, $mb6: function  ($0) {
with (this) {
/* -*- file: base/basewindow.lzx#54 -*- */
var $1 = this.state != 3 ? setDragPos("y", this.immediateparent.getMouse("y")) : this.immediateparent.getMouse("y") - this.ydoffset;
/* -*- file: -*- */
if ($1 !== this["y"] || !this.inited) {
this.setAttribute("y", $1)
}}}
, $mb7: function  () {
with (this) {
try {
/* -*- file: base/basewindow.lzx#57 -*- */
return ([this, "state", this, "ydoffset"]).concat($lzc$getFunctionDependencies("setDragPos", this, this, ["y", this.immediateparent.getMouse("y")], null)).concat($lzc$getFunctionDependencies("getMouse", this, this.immediateparent, ["y"], null))
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}}
, $mb8: function  ($0) {
with (this) {
/* -*- file: base/basewindow.lzx#56 -*- */
var $1 = this.state != 3 ? setDragPos("x", this.immediateparent.getMouse("x")) : this.immediateparent.getMouse("x") - this.xdoffset;
/* -*- file: -*- */
if ($1 !== this["x"] || !this.inited) {
this.setAttribute("x", $1)
}}}
, $mb9: function  () {
with (this) {
try {
/* -*- file: base/basewindow.lzx#59 -*- */
return ([this, "state", this, "xdoffset"]).concat($lzc$getFunctionDependencies("setDragPos", this, this, ["x", this.immediateparent.getMouse("x")], null)).concat($lzc$getFunctionDependencies("getMouse", this, this.immediateparent, ["x"], null))
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}}
, name: "_windowDrag", startx: new LzOnceExpr("$mb3", null), starty: new LzOnceExpr("$mb2", null), x: new LzAlwaysExpr("$mb8", "$mb9", null), xdoffset: new LzOnceExpr("$mb5", null), y: new LzAlwaysExpr("$mb6", "$mb7", null), ydoffset: new LzOnceExpr("$mb4", null)}, "class": LzState}, {attrs: {$classrootdepth: 1, $delegates: ["onapply", "$mbe", null], $mba: function  ($0) {
/* -*- file: base/basewindow.lzx#74 -*- */
var $1 = this.minwidth;
/* -*- file: -*- */
if ($1 !== this["resize_min_width"] || !this.inited) {
this.setAttribute("resize_min_width", $1)
}}
, $mbb: function  () {
try {
/* -*- file: base/basewindow.lzx#77 -*- */
return [this, "minwidth"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
, $mbc: function  ($0) {
/* -*- file: base/basewindow.lzx#74 -*- */
var $1 = this.minheight;
/* -*- file: -*- */
if ($1 !== this["resize_min_height"] || !this.inited) {
this.setAttribute("resize_min_height", $1)
}}
, $mbd: function  () {
try {
/* -*- file: base/basewindow.lzx#77 -*- */
return [this, "minheight"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
, $mbe: function  ($0) {
with (this) {
/* -*- file: base/basewindow.lzx#74 -*- */
parent.setAttribute("haswindowfocus", true)
}}
/* -*- file: -*- */
, name: "_windowResize", resize_min_height: new LzAlwaysExpr("$mbc", "$mbd", null), resize_min_width: new LzAlwaysExpr("$mba", "$mbb", null)}, "class": $lzc$class_resizestatemin}];static var attributes = new LzInheritedHash($lzc$class_basecomponent.attributes);var minwidth;var minheight;var haswindowfocus;function $lzc$set_haswindowfocus ($0) {
/* -*- file: base/basewindow.lzx#30 -*- */
setWindowFocus($0)
}
/* -*- file: -*- */
var onhaswindowfocus;var state;var defaultbuttongroup;var allowdrag;var _windowDrag;function setDragPos ($0, $1) {
/* -*- file: base/basewindow.lzx#61 -*- */
var $2 = $1 - this[$0 + "doffset"];
var $3 = this[$0] - this["start" + $0];

if (Math.abs($3) > 3) {


setAttribute("state", 3)
};
return $2
}
/* -*- file: -*- */
var _windowResize;override function construct ($0, $1) {
/* -*- file: base/basewindow.lzx#78 -*- */
super.construct($0, $1);

var $2 = this.parent.options["windowlist"];
if ($2 == null || typeof $2 == "undefined") {
$2 = [];
this.parent.setOption("windowlist", $2)
}}



override function init () {

if (this.datapath != null) {
this.datapath.setAttribute("datacontrolsvisibility", this.visibility == "collapse")
};


super.init();
this.mousedown_del = new LzDelegate(this, "_mousedown", this, "onmousedown");
this.mouseup_del = new LzDelegate(this, "_mouseup", this, "onmouseup");

if (this.visible) {
var $0 = parent.options["windowlist"];
$0.push(this);
this.setAttribute("haswindowfocus", true)
}}



override function sendInFrontOf ($0) {
var $1 = parent.options["windowlist"];
if (this.visible) {
for (var $2 = 0;$2 < $1.length;++$2) {
if ($1[$2] == $0) {
this._removeFromWindowlist();
$1.splice($2 + 1, 0, this);
break
}}};


super.sendInFrontOf($0);
if ($1.length > 0) {
$1[$1.length - 1].setAttribute("haswindowfocus", true)
}}




override function sendBehind ($0) {
var $1 = parent.options["windowlist"];
if (this.visible) {
for (var $2 = 0;$2 < $1.length;++$2) {
if ($1[$2] == $0) {
this._removeFromWindowlist();
$1.splice($2, 0, this);
break
}}};


super.sendBehind($0);
if ($1.length > 0) {
$1[$1.length - 1].setAttribute("haswindowfocus", true)
}}




override function bringToFront () {
var $0 = parent.options["windowlist"];
if (this.visible && $0.length > 0) {
if ($0[$0.length - 1] != this) {
this._removeFromWindowlist();
$0.push(this)
}};

super.bringToFront();
if ($0.length > 0) {
$0[$0.length - 1].setAttribute("haswindowfocus", true)
}}




override function sendToBack () {
var $0 = parent.options["windowlist"];
if (this.visible) {
if ($0.length > 0 && $0[0] != this) {
this._removeFromWindowlist();
$0.splice(0, 0, this)
}};

super.sendToBack();
if ($0.length > 0) {
$0[$0.length - 1].setAttribute("haswindowfocus", true)
}}






function _mousedown ($0) {
this.setAttribute("haswindowfocus", true);
this._startDrag()
}




function _mouseup ($0) {
this._stopDrag()
}





function _startDrag () {

if (this.allowdrag) {
this._windowDrag.setAttribute("applied", true)
}}







function _stopDrag () {
this._windowDrag.setAttribute("applied", false);
setAttribute("state", 1)
}





function _startResize () {
this._windowResize.setAttribute("applied", true);
setAttribute("state", 5)
}





function _stopResize () {
this._windowResize.setAttribute("applied", false);
setAttribute("state", 1)
}



function _removeFromWindowlist () {
var $0 = parent.options["windowlist"];
for (var $1 = 0;$1 < $0.length;$1++) {
if ($0[$1] == this) {
$0.splice($1, 1);
break
}}}








override function $lzc$set_visible ($0) {
/* -*- file: #247 -*- */
super.$lzc$set_visible($0);

if ($0) {
if (this.isinited) {

var $1 = false;
var $2 = parent.options["windowlist"];
var $3 = $2.length;
for (var $4 = 0;$4 < $3;++$4) {
if ($2[$4] == this) {
$1 = true;
break
}};


if (!$1) {
$2[$3] = this
}};


this.setAttribute("haswindowfocus", true)
} else {
this._removeFromWindowlist();

if (this["haswindowfocus"]) {
this.setAttribute("haswindowfocus", false)
}}}
/* -*- file: -*- */
var mousedel;function setWindowFocus ($0) {
/* -*- file: base/basewindow.lzx#288 -*- */
if (this["haswindowfocus"] == $0) return;
this.haswindowfocus = $0;
if ($0) {
this.bringToFront();
setAttribute("state", 1);

var $1 = parent.options["windowlist"];
var $2 = $1.length;
for (var $3 = 0;$3 < $2;$3++) {
var $4 = $1[$3];
if ($4 != this) {
if ($4.haswindowfocus) $4.setAttribute("haswindowfocus", false)
}};

if (!this.mousedel) {
this.mousedel = new LzDelegate(this, "_checkmouse")
};
this.mousedel.register(lz.GlobalMouse, "onmousedown")
} else {
if (this.mousedel) this.mousedel.unregisterAll();
setAttribute("state", 2);

var $5 = false;
var $1 = parent.options["windowlist"];
var $2 = $1.length;
for (var $3 = 0;$3 < $2;$3++) {
var $4 = $1[$3];
if ($4["haswindowfocus"] == true) {
$5 = true;
break
}};

if (!$5 && $1.length > 0) {
var $1 = parent.options["windowlist"];
var $6 = $1[$1.length - 1];
if ($6 != null) $6.setAttribute("haswindowfocus", true)
}};


if (this.onhaswindowfocus) this.onhaswindowfocus.sendEvent($0)
}






function _checkmouse ($0) {
if ($0 == null || $0 == this) return;


if (lz.ModeManager.hasMode(this)) return;

var $1 = $0.searchParents("haswindowfocus");
if ($1 != null) {
$1.setWindowFocus(true)
}}




function close (...$0) {
this.setAttribute("visible", false)
}


function open () {
this.setAttribute("visible", true)
}


override function $lzc$set_height ($0) {
var $1 = Math.round($0);
/* -*- file: #360 -*- */
super.$lzc$set_height($1)
}



override function $lzc$set_width ($0) {
var $1 = Math.round($0);
/* -*- file: #366 -*- */
super.$lzc$set_width($1)
}
/* -*- file: -*- */
function $lzc$class_basewindow ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
LzNode.mergeAttributes({$attributeDescriptor: {types: {_focusable: "boolean", aaactive: "boolean", aadescription: "string", aaname: "string", aasilent: "boolean", aatabindex: "number", align: "string", allowdrag: "boolean", backgroundrepeat: "string", bgcolor: "color", cachebitmap: "boolean", capabilities: "string", classroot: "string", clickable: "boolean", clickregion: "string", clip: "boolean", cloneManager: "string", contextmenu: "string", cornerradius: "string", cursor: "token", datapath: "string", defaultplacement: "string", doesenter: "boolean", fgcolor: "color", focusable: "boolean", focustrap: "boolean", font: "string", fontsize: "size", fontstyle: "string", frame: "numberExpression", framesloadratio: "number", hasdirectionallayout: "boolean", hassetheight: "boolean", hassetwidth: "boolean", height: "size", id: "ID", ignoreplacement: "boolean", immediateparent: "string", inited: "boolean", initstage: "string", layout: "css", loadratio: "number", mask: "string", name: "token", nodeLevel: "number", opacity: "number", options: "css", parent: "string", pixellock: "boolean", placement: "string", playing: "boolean", resource: "string", resourceheight: "number", resourcewidth: "number", rotation: "numberExpression", shadowangle: "number", shadowblurradius: "number", shadowcolor: "color", shadowdistance: "number", showhandcursor: "boolean", source: "string", stretches: "string", styleclass: "string", subnodes: "string", subviews: "string", text: "html", tintcolor: "string", totalframes: "number", transition: "string", unstretchedheight: "number", unstretchedwidth: "number", usegetbounds: "boolean", valign: "string", visibility: "string", visible: "boolean", width: "size", "with": "string", x: "numberExpression", xoffset: "numberExpression", xscale: "numberExpression", y: "numberExpression", yoffset: "numberExpression", yscale: "numberExpression"}}, allowdrag: true, clickable: true, defaultbuttongroup: true, focusable: false, haswindowfocus: false, minheight: 50, minwidth: 60, mousedel: null, onhaswindowfocus: LzDeclaredEvent, options: {ignorelayout: true}, pixellock: true, state: 1}, $lzc$class_basewindow.attributes);}
}
