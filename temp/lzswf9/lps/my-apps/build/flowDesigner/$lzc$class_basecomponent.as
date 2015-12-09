package {
dynamic class $lzc$class_basecomponent extends LzView {
/* -*- file: base/basecomponent.lzx#36 -*- */
static var tagname = "basecomponent";static var attributes = new LzInheritedHash(LzView.attributes);var enabled;function $lzc$set_focusable ($0) {










_setFocusable($0)
}
/* -*- file: -*- */
var _focusable;var text;var doesenter;function $lzc$set_doesenter ($0) {
/* -*- file: base/basecomponent.lzx#65 -*- */
this._setDoesEnter($0)
}








function $m1c ($0) {
/* -*- file: #75 -*- */
var $1 = this.enabled && (this._parentcomponent ? this._parentcomponent._enabled : true);
/* -*- file: -*- */
if ($1 !== this["_enabled"] || !this.inited) {
this.setAttribute("_enabled", $1)
}}
/* -*- file: base/basecomponent.lzx#75 -*- */
function $m1d () {
/* -*- file: -*- */
try {
/* -*- file: base/basecomponent.lzx#78 -*- */
return [this, "enabled", this, "_parentcomponent", this._parentcomponent, "_enabled"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
var _enabled;function $lzc$set__enabled ($0) {
/* -*- file: base/basecomponent.lzx#76 -*- */
this._setEnabled($0)
}
/* -*- file: -*- */
var _parentcomponent;var _initcomplete;var isdefault;function $lzc$set_isdefault ($0) {
/* -*- file: base/basecomponent.lzx#93 -*- */
this._setIsDefault($0)
}
/* -*- file: -*- */
var onisdefault;var hasdefault;function _setEnabled ($0) {
/* -*- file: base/basecomponent.lzx#104 -*- */
this._enabled = $0;
var $1 = this._enabled && this._focusable;
if ($1 != this.focusable) {
this.focusable = $1;
if (this.onfocusable.ready) this.onfocusable.sendEvent()
};
if (_initcomplete) _showEnabled();
if (this.on_enabled.ready) this.on_enabled.sendEvent()
}



function _setFocusable ($0) {
this._focusable = $0;
if (this.enabled) {
this.focusable = this._focusable;
if (this.onfocusable.ready) this.onfocusable.sendEvent()
} else {
this.focusable = false
}}




override function construct ($0, $1) {
super.construct($0, $1);


var $2 = this.immediateparent;
while ($2 != canvas) {
if ($2 is $lzc$class_basecomponent) {
this._parentcomponent = $2;
break
};
$2 = $2.immediateparent
}}



override function init () {

super.init();
this._initcomplete = true;
this._mousedownDel = new LzDelegate(this, "_doMousedown", this, "onmousedown");


if (this.styleable) {
_usestyle()
};
if (!this["_enabled"]) _showEnabled()
}



function _doMousedown ($0) {}




function doSpaceDown () {
return false
}



function doSpaceUp () {
return false
}



function doEnterDown () {
return false
}



function doEnterUp () {
return false
}




function _setIsDefault ($0) {

this.isdefault = this["isdefault"] == true;

if (this.isdefault == $0) return;

if ($0) {
lz._componentmanager.service.makeDefault(this)
} else {
lz._componentmanager.service.unmakeDefault(this)
};

this.isdefault = $0;
if (this.onisdefault.ready) {
this.onisdefault.sendEvent($0)
}}



function _setDoesEnter ($0) {
this.doesenter = $0;
if (lz.Focus.getFocus() == this) {
lz._componentmanager.service.checkDefault(this)
}}




function updateDefault () {
lz._componentmanager.service.checkDefault(lz.Focus.getFocus())
}





function $m1e ($0) {
/* -*- file: #224 -*- */
this.setAttribute("style", null)
}
/* -*- file: -*- */
var style;function $lzc$set_style ($0) {
/* -*- file: base/basecomponent.lzx#225 -*- */
styleable ? setStyle($0) : (this.style = null)
}
/* -*- file: -*- */
var styleable;var _style;var onstyle;var _styledel;var _otherstyledel;function setStyle ($0) {
/* -*- file: base/basecomponent.lzx#244 -*- */
if (!styleable) return;


if ($0 != null && !$0["isstyle"]) {
var $1 = this._style;
if (!$1) {
if (this._parentcomponent) {
/* -*- file: #250 -*- */
$1 = this._parentcomponent.style
} else $1 = lz._componentmanager.service.getDefaultStyle()
};
$0 = $1.extend($0)
};
this._style = $0;

if ($0 == null) {
if (!this._otherstyledel) {
this._otherstyledel = new LzDelegate(this, "_setstyle")
} else {
this._otherstyledel.unregisterAll()
};

if (this._parentcomponent && this._parentcomponent.styleable) {
this._otherstyledel.register(this._parentcomponent, "onstyle");

$0 = this._parentcomponent.style
} else {
this._otherstyledel.register(lz._componentmanager.service, "ondefaultstyle");

$0 = lz._componentmanager.service.getDefaultStyle()
}} else if (this._otherstyledel) {

this._otherstyledel.unregisterAll();
this._otherstyledel = null
};
_setstyle($0)
}



function _usestyle ($0 = null) {

if (this._initcomplete && this["style"] && this.style.isinited) {



this._applystyle(this.style)
}}




function _setstyle ($0) {

if (!this._styledel) {
this._styledel = new LzDelegate(this, "_usestyle")
} else {
_styledel.unregisterAll()
};
if ($0) {
_styledel.register($0, "onstylechanged")
};

this.style = $0;
_usestyle();
if (this.onstyle.ready) this.onstyle.sendEvent(this.style)
}





function _applystyle ($0) {}











function setTint ($0, $1, $2 = 0) {

if ($0.capabilities.colortransform) {
if ($1 != "" && $1 != null) {
var $3 = $1;
var $4 = $3 >> 16 & 255;
var $5 = $3 >> 8 & 255;
var $6 = $3 & 255;

$4 += 51;
$5 += 51;
$6 += 51;


$4 = $4 / 255;
$5 = $5 / 255;
$6 = $6 / 255;


$0.setAttribute("colortransform", {redMultiplier: $4, greenMultiplier: $5, blueMultiplier: $6, redOffset: $2, greenOffset: $2, blueOffset: $2})
}}}
/* -*- file: -*- */
var on_enabled;function _showEnabled () {}
/* -*- file: base/basecomponent.lzx#377 -*- */
function acceptValue ($0, $1 = null) {
this.setAttribute("text", $0)
}











function presentValue ($0 = null) {
return this.text
}




function $lzc$presentValue_dependencies ($0, $1, $2 = null) {
return [this, "text"]
}




override function applyData ($0) {
this.acceptValue($0)
}




override function updateData () {
return this.presentValue()
}


override function destroy () {


this.styleable = false;

this._initcomplete = false;
if (this["isdefault"] && this.isdefault) {
lz._componentmanager.service.unmakeDefault(this)
};
super.destroy()
}



override function toString () {

var $0 = "";
var $1 = "";
var $2 = "";
if (this["id"] != null) $0 = "  id=" + this.id;
if (this["name"] != null) $1 = ' named "' + this.name + '"';
if (this["text"] && this.text != "") $2 = "  text=" + this.text;
return this.constructor.tagname + $1 + $0 + $2
}
/* -*- file: -*- */
function $lzc$class_basecomponent ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
LzNode.mergeAttributes({$CSSDescriptor: {}, $attributeDescriptor: {types: {_focusable: "boolean", aaactive: "boolean", aadescription: "string", aaname: "string", aasilent: "boolean", aatabindex: "number", align: "string", backgroundrepeat: "string", bgcolor: "color", cachebitmap: "boolean", capabilities: "string", classroot: "string", clickable: "boolean", clickregion: "string", clip: "boolean", cloneManager: "string", contextmenu: "string", cornerradius: "string", cursor: "token", datapath: "string", defaultplacement: "string", doesenter: "boolean", fgcolor: "color", focusable: "boolean", focustrap: "boolean", font: "string", fontsize: "size", fontstyle: "string", frame: "numberExpression", framesloadratio: "number", hasdirectionallayout: "boolean", hassetheight: "boolean", hassetwidth: "boolean", height: "size", id: "ID", ignoreplacement: "boolean", immediateparent: "string", inited: "boolean", initstage: "string", layout: "css", loadratio: "number", mask: "string", name: "token", nodeLevel: "number", opacity: "number", options: "css", parent: "string", pixellock: "boolean", placement: "string", playing: "boolean", resource: "string", resourceheight: "number", resourcewidth: "number", rotation: "numberExpression", shadowangle: "number", shadowblurradius: "number", shadowcolor: "color", shadowdistance: "number", showhandcursor: "boolean", source: "string", stretches: "string", styleclass: "string", subnodes: "string", subviews: "string", text: "html", tintcolor: "string", totalframes: "number", transition: "string", unstretchedheight: "number", unstretchedwidth: "number", usegetbounds: "boolean", valign: "string", visibility: "string", visible: "boolean", width: "size", "with": "string", x: "numberExpression", xoffset: "numberExpression", xscale: "numberExpression", y: "numberExpression", yoffset: "numberExpression", yscale: "numberExpression"}}, _enabled: new LzAlwaysExpr("$m1c", "$m1d", null), _focusable: true, _initcomplete: false, _otherstyledel: null, _parentcomponent: null, _style: null, _styledel: null, doesenter: false, enabled: true, focusable: true, hasdefault: false, on_enabled: LzDeclaredEvent, onfocusable: LzDeclaredEvent, onisdefault: LzDeclaredEvent, onstyle: LzDeclaredEvent, style: new LzOnceExpr("$m1e", null), styleable: true, text: ""}, $lzc$class_basecomponent.attributes);}
}
