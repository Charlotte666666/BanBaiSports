package {
dynamic class $lzc$class_basefocusview extends LzView {
/* -*- file: base/basefocusview.lzx#5 -*- */
static var tagname = "basefocusview";static var attributes = new LzInheritedHash(LzView.attributes);var active;function $lzc$set_active ($0) {



setActive($0)
}
/* -*- file: -*- */
var target;function $lzc$set_target ($0) {
/* -*- file: base/basefocusview.lzx#11 -*- */
setTarget($0)
}
/* -*- file: -*- */
var duration;var _animatorcounter;var ontarget;var _nexttarget;var onactive;var _xydelegate;var _widthdel;var _heightdel;var _delayfadeoutDL;var _dofadeout;var _onstopdel;function reset () {
/* -*- file: base/basefocusview.lzx#37 -*- */
this.setAttribute("x", 0);
this.setAttribute("y", 0);
this.setAttribute("width", canvas.width);
this.setAttribute("height", canvas.height);
setTarget(null)
}


function setActive ($0) {
this.active = $0;
if (this.onactive) this.onactive.sendEvent($0)
}





function doFocus ($0) {


this._dofadeout = false;


this.bringToFront();


if (this.target) this.setTarget(null);


this.setAttribute("visibility", this.active ? "visible" : "hidden");



this._nexttarget = $0;

if (visible) {




this._animatorcounter += 1;


var $1 = null;
var $2;
/* -*- file: #81 -*- */
var $3;
/* -*- file: #81 -*- */
var $4;
/* -*- file: #81 -*- */
var $5;
if ($0["getFocusRect"]) $1 = $0.getFocusRect();
if ($1) {
$2 = $1[0];
/* -*- file: #84 -*- */
$3 = $1[1];
/* -*- file: #84 -*- */
$4 = $1[2];
/* -*- file: #84 -*- */
$5 = $1[3]
} else {
$2 = $0.getAttributeRelative("x", canvas);
$3 = $0.getAttributeRelative("y", canvas);
$4 = $0.getAttributeRelative("width", canvas);
$5 = $0.getAttributeRelative("height", canvas)
};

var $6 = this.animate("x", $2, duration);
this.animate("y", $3, duration);
this.animate("width", $4, duration);
this.animate("height", $5, duration);


if (this.capabilities["minimize_opacity_changes"]) {
this.setAttribute("visibility", "visible")
} else {
this.animate("opacity", 1, 500)
};


if (!this._onstopdel) this._onstopdel = new LzDelegate(this, "stopanim");
this._onstopdel.register($6, "onstop")
};

if (this._animatorcounter < 1) {
this.setTarget(this._nexttarget);

var $1 = null;
var $2;
/* -*- file: #113 -*- */
var $3;
/* -*- file: #113 -*- */
var $4;
/* -*- file: #113 -*- */
var $5;
if ($0["getFocusRect"]) $1 = $0.getFocusRect();
if ($1) {
$2 = $1[0];
/* -*- file: #116 -*- */
$3 = $1[1];
/* -*- file: #116 -*- */
$4 = $1[2];
/* -*- file: #116 -*- */
$5 = $1[3]
} else {
$2 = $0.getAttributeRelative("x", canvas);
$3 = $0.getAttributeRelative("y", canvas);
$4 = $0.getAttributeRelative("width", canvas);
$5 = $0.getAttributeRelative("height", canvas)
};

this.setAttribute("x", $2);
this.setAttribute("y", $3);
this.setAttribute("width", $4);
this.setAttribute("height", $5)
}}






function stopanim ($0) {
this._animatorcounter -= 1;
if (this._animatorcounter < 1) {





this._dofadeout = true;
if (!this._delayfadeoutDL) this._delayfadeoutDL = new LzDelegate(this, "fadeout");

lz.Timer.addTimer(this._delayfadeoutDL, 1000);
this.setTarget(_nexttarget);
this._onstopdel.unregisterAll()
}}




function fadeout ($0) {
if (_dofadeout) {
if (this.capabilities["minimize_opacity_changes"]) {
this.setAttribute("visibility", "hidden")
} else {
this.animate("opacity", 0, 500)
}};

this._delayfadeoutDL.unregisterAll()
}


function setTarget ($0) {
this.target = $0;
if (!this._xydelegate) {
this._xydelegate = new LzDelegate(this, "followXY")
} else {
this._xydelegate.unregisterAll()
};

if (!this._widthdel) {
this._widthdel = new LzDelegate(this, "followWidth")
} else {
this._widthdel.unregisterAll()
};

if (!this._heightdel) {
this._heightdel = new LzDelegate(this, "followHeight")
} else {
this._heightdel.unregisterAll()
};

if (this.target == null) return;



var $1 = $0;
var $2 = 0;
while ($1 != canvas) {
this._xydelegate.register($1, "onx");
this._xydelegate.register($1, "ony");
$1 = $1.immediateparent;
$2++
};

this._widthdel.register($0, "onwidth");
this._heightdel.register($0, "onheight");

followXY(null);
followWidth(null);
followHeight(null)
}


function followXY ($0) {
var $1 = null;
if (target["getFocusRect"]) $1 = target.getFocusRect();
if ($1) {
this.setAttribute("x", $1[0]);
this.setAttribute("y", $1[1])
} else {
this.setAttribute("x", this.target.getAttributeRelative("x", canvas));
this.setAttribute("y", this.target.getAttributeRelative("y", canvas))
}}



function followWidth ($0) {
var $1 = null;
if (target["getFocusRect"]) $1 = target.getFocusRect();
if ($1) {
this.setAttribute("width", $1[2])
} else {
this.setAttribute("width", this.target.width)
}}



function followHeight ($0) {
var $1 = null;
if (target["getFocusRect"]) $1 = target.getFocusRect();
if ($1) {
this.setAttribute("height", $1[3])
} else {
this.setAttribute("height", this.target.height)
}}



function $m7 () {
/* -*- file: #243 -*- */
return lz.Focus
}
/* -*- file: #243 -*- */
function $m8 ($0) {
this.setActive(lz.Focus.focuswithkey);
if ($0) {
this.doFocus($0)
} else {
this.reset();
if (this.active) {
this.setActive(false)
}}}
/* -*- file: -*- */
function $lzc$class_basefocusview ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
LzNode.mergeAttributes({$CSSDescriptor: {}, $attributeDescriptor: {types: {aaactive: "boolean", aadescription: "string", aaname: "string", aasilent: "boolean", aatabindex: "number", align: "string", backgroundrepeat: "string", bgcolor: "color", cachebitmap: "boolean", capabilities: "string", classroot: "string", clickable: "boolean", clickregion: "string", clip: "boolean", cloneManager: "string", contextmenu: "string", cornerradius: "string", cursor: "token", datapath: "string", defaultplacement: "string", fgcolor: "color", focusable: "boolean", focustrap: "boolean", font: "string", fontsize: "size", fontstyle: "string", frame: "numberExpression", framesloadratio: "number", hasdirectionallayout: "boolean", hassetheight: "boolean", hassetwidth: "boolean", height: "size", id: "ID", ignoreplacement: "boolean", immediateparent: "string", inited: "boolean", initstage: "string", layout: "css", loadratio: "number", mask: "string", name: "token", nodeLevel: "number", opacity: "number", options: "css", parent: "string", pixellock: "boolean", placement: "string", playing: "boolean", resource: "string", resourceheight: "number", resourcewidth: "number", rotation: "numberExpression", shadowangle: "number", shadowblurradius: "number", shadowcolor: "color", shadowdistance: "number", showhandcursor: "boolean", source: "string", stretches: "string", styleclass: "string", subnodes: "string", subviews: "string", tintcolor: "string", totalframes: "number", transition: "string", unstretchedheight: "number", unstretchedwidth: "number", usegetbounds: "boolean", valign: "string", visibility: "string", visible: "boolean", width: "size", "with": "string", x: "numberExpression", xoffset: "numberExpression", xscale: "numberExpression", y: "numberExpression", yoffset: "numberExpression", yscale: "numberExpression"}}, $delegates: ["onstop", "stopanim", null, "onfocus", "$m8", "$m7"], _animatorcounter: 0, _delayfadeoutDL: null, _dofadeout: false, _heightdel: null, _nexttarget: null, _onstopdel: null, _widthdel: null, _xydelegate: null, active: false, duration: 400, initstage: "late", onactive: LzDeclaredEvent, ontarget: LzDeclaredEvent, options: {ignorelayout: true}, target: null, visible: false}, $lzc$class_basefocusview.attributes);}
}
