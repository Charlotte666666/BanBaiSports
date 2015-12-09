package {
dynamic class $lzc$class_basefloatinglist extends $lzc$class_list {
/* -*- file: lz/basefloatinglist.lzx#6 -*- */
static var tagname = "basefloatinglist";static var children = LzNode.mergeChildren([], $lzc$class_list["children"]);static var attributes = new LzInheritedHash($lzc$class_list.attributes);var owner;var wouldbename;var attach;var _currentattachy;var _currentattachx;var attachtarget;function $lzc$set_attachtarget ($0) {



















this.setAttachTarget($0)
}
/* -*- file: -*- */
var attachoffset;var _updateAttachPosDel;var _origshownitems;function $m5s ($0) {
/* -*- file: lz/basefloatinglist.lzx#40 -*- */
var $1 = attachtarget ? attachtarget["style"] : null;
/* -*- file: -*- */
if ($1 !== this["style"] || !this.inited) {
this.setAttribute("style", $1)
}}
/* -*- file: lz/basefloatinglist.lzx#40 -*- */
function $m5t () {
/* -*- file: -*- */
try {
/* -*- file: lz/basefloatinglist.lzx#43 -*- */
return [this, "attachtarget"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
/* -*- file: lz/basefloatinglist.lzx#46 -*- */
function setAttachTarget ($0) {
this.attachtarget = $0;
if (visible) updateAttachLocation();

var $1 = this._updateAttachPosDel;
if ($1) {
$1.unregisterAll();
if ($0) {
for (var $2 = $0;$2 !== canvas;$2 = $2.immediateparent) {
$1.register($2, "onx");
$1.register($2, "ony")
}}}}





override function construct ($0, $1) {

this.owner = $0;

if (typeof $1.name != "undefined") {
var $2 = $1.name;
$1.name = null;

this.wouldbename = $2;
this.owner[$2] = this
};


super.construct(canvas, $1);


var $3 = this.owner;
while ($3 !== canvas) {
if ($3 instanceof lz.basecomponent) {
this._parentcomponent = $3;
break
};
$3 = $3.immediateparent
};




new (lz.Delegate)(this, "_handledestroy", $0, "ondestroy");
this._updateAttachPosDel = new (lz.Delegate)(this, "_doUpdateAttachLocation")
}


function _handledestroy ($0) {
this.destroy()
}


override function destroy () {

if (this.owner != null) {
if (this["wouldbename"] != null) {
this.owner[this.wouldbename] = null
};
this.owner = null
};
this.setAttachTarget(null);
this._updateAttachPosDel = null;


var $0 = canvas.subviews;
for (var $1 = $0.length - 1;$1 >= 0;$1--) {
if ($0[$1] === this) {
$0.splice($1, 1);
break
}};


var $2 = canvas.subnodes;
for (var $1 = $2.length - 1;$1 >= 0;$1--) {
if ($2[$1] === this) {
$2.splice($1, 1);
break
}};

super.destroy()
}


override function init () {
super.init();
if (this.attachtarget == null) {
this.setAttachTarget(owner)
}}



function getMenuCapHeight () {
return 0
}
/* -*- file: -*- */
var _constraintsApplied;function _setScroll () {
/* -*- file: lz/basefloatinglist.lzx#149 -*- */
var $0 = this.interior.content.subviews[0];
var $1 = $0 ? $0.height : 20;
var $2 = attachtarget.getAttributeRelative("y", canvas);

var $3 = getMenuCapHeight();


var $4 = $2;
var $5 = canvas.height - ($2 + attachtarget.height + attachoffset + $3);


var $6 = 0;
var $7 = "top";
var $8 = $4;
if ($5 > $4) {
$7 = "bottom";
$6 = $2 + attachtarget.height + attachoffset;
$8 = $5
};


var $9 = Math.floor(($8 + spacing - $3) / ($1 + spacing));
var $a = $9 * ($1 + spacing) - spacing + $3;


if (attach == "left" || attach == "right") {
$a += $1 + spacing;
$9++;
if ($7 == "bottom") {
$6 -= attachtarget.height + attachoffset
} else {
$6 += attachtarget.height
}};



if ($7 == "top") {
$6 += $4 - $a + $3
};

this.setAttribute("y", $6);
this.setAttribute("_currentattachy", $7);
this._keepshownitems = true;
this._setShownItems($9);
this._keepshownitems = false;
this.setAttribute("scrollable", true)
}
/* -*- file: -*- */
var _keepshownitems;override function _setShownItems ($0) {
/* -*- file: lz/basefloatinglist.lzx#204 -*- */
super._setShownItems($0);
if (this._origshownitems == -2 || !this._keepshownitems) {
this._origshownitems = $0
}}




function _doUpdateAttachLocation ($0) {
this.updateAttachLocation()
}




function updateAttachLocation () {



if (!isinited) return;
if (!attachtarget) return;


var $0 = false;
var $1 = attach;
var $2 = attachtarget.getAttributeRelative("x", canvas);
while (true) {
if ($1 == "bottom" || $1 == "top") {
var $3 = $2;
if ($3 < 0) {

$3 = 0
} else if ($3 + attachtarget.width > canvas.width) {
$3 = canvas.width - this.width
} else if ($3 + this.width > canvas.width) {
$3 = $2 + attachtarget.width - this.width
};
this.setAttribute("x", $3);
break
} else if ($1 == "left") {

var $3 = $2 - this.width;
if ($3 > 0) {
this.setAttribute("x", $3);
this.setAttribute("_currentattachx", "left");
break
} else {
$1 = "right"
}};

if ($1 == "right") {
var $3 = $2 + attachtarget.width;
if ($3 + this.width < canvas.width) {
this.setAttribute("x", $3);
this.setAttribute("_currentattachx", "right");
break
} else {

if (!$0) {
$1 = "left";
$0 = true
} else {

break
}}}};





this._keepshownitems = true;
this._setShownItems(this._origshownitems);
this._keepshownitems = false;
this.setAttribute("scrollable", false);

var $0 = false;
var $1 = attach;


var $4 = getMenuCapHeight();
var $5 = this.calcMyHeight() + $4;
var $6 = attachtarget.getAttributeRelative("y", canvas);
while (true) {
if ($1 == "left" || $1 == "right") {
if ($6 + $5 < canvas.height) {
this.setAttribute("y", $6);
this.setAttribute("_currentattachy", "bottom");
break
} else {
$1 = "top"
}} else if ($1 == "bottom") {


var $7 = $6 + attachtarget.height + attachoffset;
if ($7 + $5 < canvas.height) {
this.setAttribute("y", $7);
this.setAttribute("_currentattachy", "bottom");
break
} else {
$1 = "top"
}};

if ($1 == "top") {
var $7 = $6 - $5;



if (attach == "right" || attach == "left") $7 += attachtarget.height;
if ($7 > 0) {
this.setAttribute("y", $7 + $4);
this.setAttribute("_currentattachy", "top");
break
} else {

if (!$0) {
$1 = "bottom";
$0 = true
} else {
this._setScroll();
break
}}}}}








function $m5u ($0) {
this.owner.onmousedown.sendEvent();
this.bringToFront()
}



function $m5v ($0) {
this.updateAttachLocation()
}



function $m5w ($0) {
this.updateAttachLocation()
}


function $m5x ($0) {
if ($0) {
updateAttachLocation()
} else {
this.setAttribute("x", -1000);
this.setAttribute("y", -1000)
}}



override function toString () {
return "floatinglist: wouldbename,owner = " + this.wouldbename + "," + this.owner
}



override function getNextSelection () {
var $0 = owner.getNextSelection();
return $0
}



override function getPrevSelection () {



return owner.resolveSelection()
}


function $m5y ($0) {

if (this.owner != "undefined" && this.owner["onblur"]) {
this.owner.onblur.sendEvent()
}}
/* -*- file: -*- */
function $lzc$class_basefloatinglist ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
LzNode.mergeAttributes({$attributeDescriptor: {types: {__focusfromchild: "boolean", _currentattachx: "string", _currentattachy: "string", _focusable: "boolean", _heightinternal: "boolean", _keepshownitems: "boolean", _origshownitems: "number", _setbordercolor: "boolean", aaactive: "boolean", aadescription: "string", aaname: "string", aasilent: "boolean", aatabindex: "number", align: "string", attach: "string", backgroundrepeat: "string", bgcolor: "color", cachebitmap: "boolean", capabilities: "string", classroot: "string", clickable: "boolean", clickregion: "string", clip: "boolean", cloneManager: "string", contextmenu: "string", cornerradius: "string", cursor: "token", dataoption: "string", datapath: "string", defaultplacement: "string", doesenter: "boolean", fgcolor: "color", focusable: "boolean", focustrap: "boolean", font: "string", fontsize: "size", fontstyle: "string", frame: "numberExpression", framesloadratio: "number", hasdirectionallayout: "boolean", hassetheight: "boolean", hassetwidth: "boolean", height: "size", id: "ID", ignoreplacement: "boolean", immediateparent: "string", inited: "boolean", initstage: "string", itemclassname: "string", layout: "css", loadratio: "number", mask: "string", minheight: "number", name: "token", nodeLevel: "number", opacity: "number", options: "css", parent: "string", pixellock: "boolean", placement: "string", playing: "boolean", resource: "string", resourceheight: "number", resourcewidth: "number", rotation: "numberExpression", scrollbarclassname: "string", shadowangle: "number", shadowblurradius: "number", shadowcolor: "color", shadowdistance: "number", showhandcursor: "boolean", source: "string", stretches: "string", styleclass: "string", submit: "boolean", submitname: "string", subnodes: "string", subviews: "string", text: "html", tintcolor: "string", totalframes: "number", transition: "string", type: "string", unstretchedheight: "number", unstretchedwidth: "number", usegetbounds: "boolean", valign: "string", visibility: "string", visible: "boolean", width: "size", "with": "string", wouldbename: "string", x: "numberExpression", xoffset: "numberExpression", xscale: "numberExpression", y: "numberExpression", yoffset: "numberExpression", yscale: "numberExpression"}}, $delegates: ["onmousedown", "$m5u", null, "onwidth", "$m5v", null, "onheight", "$m5w", null, "onvisible", "$m5x", null, "onblur", "$m5y", null], _constraintsApplied: false, _currentattachx: "bottom", _currentattachy: "bottom", _keepshownitems: false, _origshownitems: -2, _updateAttachPosDel: null, attach: "bottom", attachoffset: 0, attachtarget: null, clickable: true, options: {ignorelayout: true}, style: new LzAlwaysExpr("$m5s", "$m5t", null), wouldbename: "", x: -1000, y: -1000}, $lzc$class_basefloatinglist.attributes);}
}
