package {
dynamic class $lzc$class_radiobutton extends $lzc$class_baselistitem {
/* -*- file: lz/radio.lzx#144 -*- */
static var tagname = "radiobutton";static var children = [{attrs: {$CSSDescriptor: {}, $attributeDescriptor: {types: {EVENT_OBJECT_FOCUS: "number", EVENT_OBJECT_NAMECHANGE: "number", EVENT_OBJECT_SELECTION: "number", EVENT_OBJECT_STATECHANGE: "number", applied: "boolean", classroot: "string", cloneManager: "string", datapath: "string", defaultplacement: "string", id: "ID", ignoreplacement: "boolean", immediateparent: "string", inited: "boolean", initstage: "string", name: "token", nodeLevel: "number", options: "css", parent: "string", placement: "string", pooling: "boolean", styleclass: "string", subnodes: "string", transition: "string", "with": "string"}}, $classrootdepth: 1, $delegates: ["onselected", "$m9q", null, "ontext", "$m9r", null], $m9q: function  ($0) {
/* -*- file: -*- */
with (this) {
/* -*- file: lz/radio.lzx#203 -*- */
if (!this.isinited) {
/* -*- file: #203 -*- */
return
};

if (this.selected) {
this.sendAAEvent(0, EVENT_OBJECT_FOCUS)
};
this.sendAAEvent(0, EVENT_OBJECT_STATECHANGE, true)
}}
/* -*- file: -*- */
, $m9r: function  ($0) {
with (this) {
/* -*- file: lz/radio.lzx#215 -*- */
this.sendAAEvent(0, EVENT_OBJECT_NAMECHANGE)
}}
/* -*- file: -*- */
, EVENT_OBJECT_FOCUS: 32773, EVENT_OBJECT_NAMECHANGE: 32780, EVENT_OBJECT_SELECTION: 32774, EVENT_OBJECT_STATECHANGE: 32778, name: "accessible", updateFocus: function  ($0) {
with (this) {
/* -*- file: lz/radio.lzx#223 -*- */
if ($0) {
this.sendAAEvent(0, EVENT_OBJECT_SELECTION);
this.sendAAEvent(0, EVENT_OBJECT_FOCUS)
};




this.sendAAEvent(0, EVENT_OBJECT_STATECHANGE, true)
}}
/* -*- file: -*- */
}, "class": LzState}, {attrs: {$classrootdepth: 1, maxstate: 1, name: "rb", reference: new LzOnceExpr("$m9w", null), resource: "lzradio_rsrc", statelength: 4, statenum: new LzAlwaysExpr("$m9u", "$m9v", null), text: ""}, "class": $lzc$class__ma1}, {attrs: {$classrootdepth: 1, name: "_title", resize: true, text: new LzAlwaysExpr("$m9z", "$ma0", null), x: 17, y: new LzAlwaysExpr("$m9x", "$m9y", null)}, "class": $lzc$class__ma2}];static var attributes = new LzInheritedHash($lzc$class_baselistitem.attributes);override function init () {
/* -*- file: lz/radio.lzx#147 -*- */
super.init();

if (canvas["accessible"]) {
this.accessible.setAttribute("applied", true);
var $0 = this.getDisplayObject();
$0._accImpl = {};
$0._accImpl.stub = false;
$0._accImpl.master = this;

$0._accImpl.get_accRole = function () {

return 45
}
/* -*- file: -*- */
;
/* -*- file: lz/radio.lzx#161 -*- */
$0._accImpl.get_accName = function () {
return this.master.text
}
/* -*- file: -*- */
;
/* -*- file: lz/radio.lzx#165 -*- */
$0._accImpl.get_accState = function () {

var $0 = 0;
if (this.master.parent.focusable) $0 |= 1048576;

if (this.master.parent == lz.Focus.getFocus()) $0 |= 4;

if (this.master.selected) $0 |= 16;

return $0
}
/* -*- file: -*- */
;
/* -*- file: lz/radio.lzx#177 -*- */
$0._accImpl.get_accDefaultAction = function ($0) {

return "Check"
}
/* -*- file: -*- */
;
/* -*- file: lz/radio.lzx#182 -*- */
$0._accImpl.accDoDefaultAction = function ($0) {


this.master.parent.select(this.master)
}
/* -*- file: -*- */

}}
var accessible;function $m9s ($0) {
/* -*- file: lz/radio.lzx#239 -*- */
var $1 = this.rb.height / 2 - this._title.height / 2;
/* -*- file: -*- */
if ($1 !== this["text_y"] || !this.inited) {
this.setAttribute("text_y", $1)
}}
/* -*- file: lz/radio.lzx#239 -*- */
function $m9t () {
/* -*- file: -*- */
try {
/* -*- file: lz/radio.lzx#242 -*- */
return [this.rb, "height", this._title, "height"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
var text_y;var initcomplete;var rb;override function _applystyle ($0) {
/* -*- file: lz/radio.lzx#253 -*- */
if (this.style != null) {
if (_enabled) {
_title.setAttribute("fgcolor", this.style.textcolor)
} else {
_title.setAttribute("fgcolor", this.style.textdisabledcolor)
};
setTint(this.rb, $0.basecolor)
}}



override function _showEnabled () {
if (this.style != null) {
if (_enabled) {
_title.setAttribute("fgcolor", style.textcolor)
} else {
_title.setAttribute("fgcolor", style.textdisabledcolor)
}}}




override function setHilite ($0) {
_title.setAttribute("fgcolor", $0 ? style.texthilitecolor : style.textcolor);

if ($0) this.setAttribute("selected", true);
if (canvas["accessible"]) this.updateFocus($0)
}
/* -*- file: -*- */
var _title;function $lzc$class_radiobutton ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
LzNode.mergeAttributes({$attributeDescriptor: {types: {_focusable: "boolean", _selectonevent: "string", aaactive: "boolean", aadescription: "string", aaname: "string", aasilent: "boolean", aatabindex: "number", align: "string", backgroundrepeat: "string", bgcolor: "color", cachebitmap: "boolean", capabilities: "string", classroot: "string", clickable: "boolean", clickregion: "string", clip: "boolean", cloneManager: "string", contextmenu: "string", cornerradius: "string", cursor: "token", datapath: "string", defaultplacement: "string", doesenter: "boolean", fgcolor: "color", focusable: "boolean", focustrap: "boolean", font: "string", fontsize: "size", fontstyle: "string", frame: "numberExpression", framesloadratio: "number", hasdirectionallayout: "boolean", hassetheight: "boolean", hassetwidth: "boolean", height: "size", id: "ID", ignoreplacement: "boolean", immediateparent: "string", inited: "boolean", initstage: "string", layout: "css", loadratio: "number", mask: "string", name: "token", nodeLevel: "number", opacity: "number", options: "css", parent: "string", pixellock: "boolean", placement: "string", playing: "boolean", resource: "string", resourceheight: "number", resourcewidth: "number", rotation: "numberExpression", shadowangle: "number", shadowblurradius: "number", shadowcolor: "color", shadowdistance: "number", showhandcursor: "boolean", source: "string", stretches: "string", styleclass: "string", subnodes: "string", subviews: "string", text: "html", text_y: "number", tintcolor: "string", totalframes: "number", transition: "string", type: "string", unstretchedheight: "number", unstretchedwidth: "number", usegetbounds: "boolean", valign: "string", visibility: "string", visible: "boolean", width: "size", "with": "string", x: "numberExpression", xoffset: "numberExpression", xscale: "numberExpression", y: "numberExpression", yoffset: "numberExpression", yscale: "numberExpression"}}, clickable: true, focusable: false, initcomplete: 0, text_y: new LzAlwaysExpr("$m9s", "$m9t", null)}, $lzc$class_radiobutton.attributes);}
}
