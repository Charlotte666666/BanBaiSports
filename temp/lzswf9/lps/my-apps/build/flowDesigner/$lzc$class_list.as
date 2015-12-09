package {
dynamic class $lzc$class_list extends $lzc$class_baselist {
/* -*- file: lz/list.lzx#11 -*- */
static var tagname = "list";static var children = [{attrs: {$classrootdepth: 1, $delegates: ["onmousetrackoutbottom", "$m5n", null, "onmousetrackouttop", "$m5o", null], _sbar: null, bgcolor: new LzAlwaysExpr("$m5b", "$m5c", null), clip: true, content: void 0, name: "interior", onmousetrackoutleft: LzDeclaredEvent, onmousetrackoutright: LzDeclaredEvent, width: new LzAlwaysExpr("$m59", "$m5a", null), x: new LzAlwaysExpr("$m55", "$m56", null), y: new LzAlwaysExpr("$m57", "$m58", null)}, "class": $lzc$class__m5p}, {attrs: "content", "class": $lzc$class_userClassPlacement}];static var attributes = new LzInheritedHash($lzc$class_baselist.attributes);var rightinset;var bordersize;function $m4x ($0) {











var $1 = this.bordersize;
/* -*- file: -*- */
if ($1 !== this["border_top"] || !this.inited) {
this.setAttribute("border_top", $1)
}}
/* -*- file: lz/list.lzx#23 -*- */
function $m4y () {
/* -*- file: -*- */
try {
/* -*- file: lz/list.lzx#26 -*- */
return [this, "bordersize"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
var border_top;function $m4z ($0) {
/* -*- file: lz/list.lzx#25 -*- */
var $1 = this.bordersize;
/* -*- file: -*- */
if ($1 !== this["border_left"] || !this.inited) {
this.setAttribute("border_left", $1)
}}
/* -*- file: lz/list.lzx#25 -*- */
function $m50 () {
/* -*- file: -*- */
try {
/* -*- file: lz/list.lzx#28 -*- */
return [this, "bordersize"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
var border_left;function $m51 ($0) {
/* -*- file: lz/list.lzx#27 -*- */
var $1 = this.bordersize;
/* -*- file: -*- */
if ($1 !== this["border_right"] || !this.inited) {
this.setAttribute("border_right", $1)
}}
/* -*- file: lz/list.lzx#27 -*- */
function $m52 () {
/* -*- file: -*- */
try {
/* -*- file: lz/list.lzx#30 -*- */
return [this, "bordersize"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
var border_right;function $m53 ($0) {
/* -*- file: lz/list.lzx#29 -*- */
var $1 = this.bordersize;
/* -*- file: -*- */
if ($1 !== this["border_bottom"] || !this.inited) {
this.setAttribute("border_bottom", $1)
}}
/* -*- file: lz/list.lzx#29 -*- */
function $m54 () {
/* -*- file: -*- */
try {
/* -*- file: lz/list.lzx#32 -*- */
return [this, "bordersize"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
var border_bottom;var tracking;var spacing;var minheight;var shownitems;function $lzc$set_shownitems ($0) {
/* -*- file: lz/list.lzx#43 -*- */
this._setShownItems($0)
}
/* -*- file: -*- */
var onshownitems;var scrollable;var autoscrollbar;var scrollbarclassname;override function init () {
/* -*- file: lz/list.lzx#60 -*- */
super.init();
if (this._hasSetHeight) this.setAttribute("height", this.height);
adjustmyheight()
}
/* -*- file: -*- */
var interior;function _setShownItems ($0) {
/* -*- file: lz/list.lzx#157 -*- */
this.shownitems = $0;
if (onshownitems) this.onshownitems.sendEvent();
if (this._initcomplete) this.adjustmyheight()
}




override function select ($0) {

var $1 = $0;
if ($1 && $1["length"] > 0) {
$1 = $1[0]
};
ensureItemInView($1);
super.select($0)
}



override function _doFocus ($0) {

super._doFocus($0);
if (!this.__focusfromchild) {
var $1 = getSelection();
if (this.multiselect) {
$1 = $1.length == 0 ? null : $1[0]
};
ensureItemInView($1)
}}





function ensureItemInView ($0) {
if (!$0) return;
if (_initcomplete) {
_selector.ensureItemInView($0)
}}
/* -*- file: -*- */
var _itemheight;function calcMyHeight () {
/* -*- file: lz/list.lzx#203 -*- */
var $0 = getNumItems();
if ($0 == 0) {
return this.minheight
};
var $1;
if (shownitems > -1 && shownitems < $0 || dataoption == "lazy" || dataoption == "resize") {


var $2;
if (this.dataoption == "lazy" || dataoption == "resize") {
$2 = this._itemheight;
if (shownitems < $0) $0 = shownitems
} else {
$0 = shownitems;
$2 = this.interior.content.subviews[0].height
};
$1 = $2 * $0 + spacing * ($0 - 1)
} else {

$1 = this.interior.content.height
};
return $1
}
/* -*- file: -*- */
var _hasSetHeight;var _heightinternal;override function $lzc$set_height ($0) {
/* -*- file: lz/list.lzx#235 -*- */
if ($0 != null && !this._heightinternal) {
this._hasSetHeight = true
} else {
this._hasSetHeight = false;
if (!this._heightinternal) {
var $1 = this.calcMyHeight();
$0 = $1 + border_top + border_bottom
}};

super.$lzc$set_height($0);

if (this._initcomplete) {
interior.setAttribute("height", $0 - border_top - border_bottom);
checkscrollbar()
}}




function checkscrollbar () {
if (this.autoscrollbar) {
if (this._contentview.height > this.interior.height) {
this.interior.showvscrollbar()
} else {
this.interior.hidevscrollbar()
}}}





function adjustmyheight () {
if (!this._initcomplete) return;
if (this._hasSetHeight) {
checkscrollbar()
} else {
var $0 = this.calcMyHeight();
this._heightinternal = true;
this.setAttribute("height", $0 + border_top + border_bottom);
this._heightinternal = false
}}





override function addItem ($0, $1 = null) {
if (this.itemclassname == "") {
this.setAttribute("itemclassname", "textlistitem")
};
super.addItem($0, $1);
this.adjustmyheight()
}
/* -*- file: -*- */
var _setbordercolor;var _bgcolor;override function $lzc$set_bgcolor ($0) {
/* -*- file: lz/list.lzx#298 -*- */
if (this._setbordercolor) {
/* -*- file: #298 -*- */
super.$lzc$set_bgcolor($0)
} else {




this._bgcolor = $0;
var $1 = this["onbgcolor"];
if ($1 && $1.ready) {
$1.sendEvent($0)
}}}




override function _applystyle ($0) {
if (this.style != null) {
super._applystyle($0);
this._setbordercolor = true;
this.setAttribute("bgcolor", $0.bordercolor);
this._setbordercolor = false;
if (this._bgcolor == null) this.interior.setAttribute("bgcolor", $0.bgcolor)
}}



override function destroy () {
if (this.autoscrollbar) this.setAttribute("autoscrollbar", false);

if (this.shownitems != -1) this.setAttribute("shownitems", -1);


super.destroy()
}
/* -*- file: -*- */
function $lzc$class_list ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
LzNode.mergeAttributes({$attributeDescriptor: {types: {__focusfromchild: "boolean", _focusable: "boolean", _heightinternal: "boolean", _setbordercolor: "boolean", aaactive: "boolean", aadescription: "string", aaname: "string", aasilent: "boolean", aatabindex: "number", align: "string", backgroundrepeat: "string", bgcolor: "color", cachebitmap: "boolean", capabilities: "string", classroot: "string", clickable: "boolean", clickregion: "string", clip: "boolean", cloneManager: "string", contextmenu: "string", cornerradius: "string", cursor: "token", dataoption: "string", datapath: "string", defaultplacement: "string", doesenter: "boolean", fgcolor: "color", focusable: "boolean", focustrap: "boolean", font: "string", fontsize: "size", fontstyle: "string", frame: "numberExpression", framesloadratio: "number", hasdirectionallayout: "boolean", hassetheight: "boolean", hassetwidth: "boolean", height: "size", id: "ID", ignoreplacement: "boolean", immediateparent: "string", inited: "boolean", initstage: "string", itemclassname: "string", layout: "css", loadratio: "number", mask: "string", minheight: "number", name: "token", nodeLevel: "number", opacity: "number", options: "css", parent: "string", pixellock: "boolean", placement: "string", playing: "boolean", resource: "string", resourceheight: "number", resourcewidth: "number", rotation: "numberExpression", scrollbarclassname: "string", shadowangle: "number", shadowblurradius: "number", shadowcolor: "color", shadowdistance: "number", showhandcursor: "boolean", source: "string", stretches: "string", styleclass: "string", submit: "boolean", submitname: "string", subnodes: "string", subviews: "string", text: "html", tintcolor: "string", totalframes: "number", transition: "string", type: "string", unstretchedheight: "number", unstretchedwidth: "number", usegetbounds: "boolean", valign: "string", visibility: "string", visible: "boolean", width: "size", "with": "string", x: "numberExpression", xoffset: "numberExpression", xscale: "numberExpression", y: "numberExpression", yoffset: "numberExpression", yscale: "numberExpression"}}, _bgcolor: null, _hasSetHeight: false, _heightinternal: false, _itemheight: null, _setbordercolor: false, autoscrollbar: true, border_bottom: new LzAlwaysExpr("$m53", "$m54", null), border_left: new LzAlwaysExpr("$m4z", "$m50", null), border_right: new LzAlwaysExpr("$m51", "$m52", null), border_top: new LzAlwaysExpr("$m4x", "$m4y", null), bordersize: 1, minheight: 24, onshownitems: LzDeclaredEvent, rightinset: 0, scrollable: false, scrollbarclassname: "vscrollbar", shownitems: -1, spacing: 0, tracking: false, width: 100}, $lzc$class_list.attributes);}
}
