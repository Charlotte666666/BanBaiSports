package {
dynamic class $lzc$class_baselistitem extends $lzc$class_basevaluecomponent {
/* -*- file: base/baselistitem.lzx#6 -*- */
static var tagname = "baselistitem";static var attributes = new LzInheritedHash($lzc$class_basevaluecomponent.attributes);var selected;function $lzc$set_selected ($0) {



this._setSelected($0)
}
/* -*- file: -*- */
var onselected;var onselect;var _selectonevent;function $lzc$set__selectonevent ($0) {
/* -*- file: base/baselistitem.lzx#23 -*- */
this.setSelectOnEvent($0)
}
/* -*- file: -*- */
override function $lzc$set_datapath ($0) {
if (null != this.datapath) {
this.datapath.setXPath($0)
} else {
var $1 = {xpath: $0};
if (this._parentcomponent.dataoption == "lazy" || this._parentcomponent.dataoption == "resize") {

$1.replication = _parentcomponent.dataoption;
if (parent["spacing"]) $1.spacing = parent.spacing
} else if (this._parentcomponent.dataoption == "pooling") {

$1.pooling = true
};
new (lz.datapath)(this, $1)
}}
/* -*- file: -*- */
var _valuedatapath;var _textdatapath;override function dataBindAttribute ($0, $1, $2) {
/* -*- file: base/baselistitem.lzx#48 -*- */
if (this._parentcomponent.dataoption == "lazy" || this._parentcomponent.dataoption == "resize") {

if ($0 == "text") {
/* -*- file: #50 -*- */
this._textdatapath = $1
} else if ($0 == "value") this._valuedatapath = $1
};
super.dataBindAttribute($0, $1, $2)
}


function setSelectOnEvent ($0) {
this._selectDL = new LzDelegate(this, "doClick", this, $0)
}


function doClick ($0) {

if (this._parentcomponent) {
this._parentcomponent.select(this)
}}






override function _doMousedown ($0) {
super._doMousedown($0);
var $1 = this._parentcomponent;
if (!this.focusable && $1 && $1.focusable) {
$1.__focusfromchild = true;
lz.Focus.setFocus($1, false);
$1.__focusfromchild = false
}}






override function setSelected ($0) {

this.selected = $0;
if (this.onselect.ready) this.onselect.sendEvent(this);
if (this.onselected.ready) this.onselected.sendEvent(this)
}








function _setSelected ($0) {




this.selected = $0;
if ($0) {





parent.select(this)
}}





function setHilite ($0) {}
/* -*- file: -*- */
function $lzc$class_baselistitem ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
LzNode.mergeAttributes({$attributeDescriptor: {types: {_focusable: "boolean", _selectonevent: "string", aaactive: "boolean", aadescription: "string", aaname: "string", aasilent: "boolean", aatabindex: "number", align: "string", backgroundrepeat: "string", bgcolor: "color", cachebitmap: "boolean", capabilities: "string", classroot: "string", clickable: "boolean", clickregion: "string", clip: "boolean", cloneManager: "string", contextmenu: "string", cornerradius: "string", cursor: "token", datapath: "string", defaultplacement: "string", doesenter: "boolean", fgcolor: "color", focusable: "boolean", focustrap: "boolean", font: "string", fontsize: "size", fontstyle: "string", frame: "numberExpression", framesloadratio: "number", hasdirectionallayout: "boolean", hassetheight: "boolean", hassetwidth: "boolean", height: "size", id: "ID", ignoreplacement: "boolean", immediateparent: "string", inited: "boolean", initstage: "string", layout: "css", loadratio: "number", mask: "string", name: "token", nodeLevel: "number", opacity: "number", options: "css", parent: "string", pixellock: "boolean", placement: "string", playing: "boolean", resource: "string", resourceheight: "number", resourcewidth: "number", rotation: "numberExpression", shadowangle: "number", shadowblurradius: "number", shadowcolor: "color", shadowdistance: "number", showhandcursor: "boolean", source: "string", stretches: "string", styleclass: "string", subnodes: "string", subviews: "string", text: "html", tintcolor: "string", totalframes: "number", transition: "string", type: "string", unstretchedheight: "number", unstretchedwidth: "number", usegetbounds: "boolean", valign: "string", visibility: "string", visible: "boolean", width: "size", "with": "string", x: "numberExpression", xoffset: "numberExpression", xscale: "numberExpression", y: "numberExpression", yoffset: "numberExpression", yscale: "numberExpression"}}, _selectonevent: "onclick", _textdatapath: null, _valuedatapath: null, clickable: true, focusable: false, onselect: LzDeclaredEvent, onselected: LzDeclaredEvent, selected: false}, $lzc$class_baselistitem.attributes);}
}
