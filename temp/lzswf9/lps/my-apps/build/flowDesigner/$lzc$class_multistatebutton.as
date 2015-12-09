package {
dynamic class $lzc$class_multistatebutton extends $lzc$class_basebutton {
/* -*- file: base/multistatebutton.lzx#4 -*- */
static var tagname = "multistatebutton";static var attributes = new LzInheritedHash($lzc$class_basebutton.attributes);var statenum;function $lzc$set_statenum ($0) {

this.setStateNum($0)
}
/* -*- file: -*- */
var statelength;function $lzc$set_statelength ($0) {
/* -*- file: base/multistatebutton.lzx#8 -*- */
this.setStateLength($0)
}
/* -*- file: -*- */
var maxstate;var lastres;function $m3d ($0) {
/* -*- file: base/multistatebutton.lzx#14 -*- */
var $1 = this.lastres + this.statenum * this.statelength;
/* -*- file: -*- */
if ($1 !== this["frame"] || !this.inited) {
this.setAttribute("frame", $1)
}}
/* -*- file: base/multistatebutton.lzx#14 -*- */
function $m3e () {
/* -*- file: -*- */
try {
/* -*- file: base/multistatebutton.lzx#17 -*- */
return [this, "lastres", this, "statenum", this, "statelength"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
var onstatenum;var onstatelength;override function showDown ($0 = null) {
/* -*- file: base/multistatebutton.lzx#21 -*- */
this.setAttribute("lastres", this.downResourceNumber)
}

override function showUp ($0 = null) {
if (!this._enabled && this.disabledResourceNumber) {
this.setAttribute("lastres", this.disabledResourceNumber)
} else {
this.setAttribute("lastres", this.normalResourceNumber)
}}



override function showOver ($0 = null) {
this.setAttribute("lastres", this.overResourceNumber)
}


function setStateNum ($0) {
if ($0 > this.maxstate) {
return
};
this.statenum = $0;
if (this.onstatenum) this.onstatenum.sendEvent($0)
}


function setStateLength ($0) {
this.statelength = $0;
if (this.statelength == 2) {
this.overResourceNumber = this.normalResourceNumber;
if (this.downResourceNumber == 3) {
this.downResourceNumber = 2
}} else if (this.statelength == 1) {

this.overResourceNumber = 1;
this.downResourceNumber = 1
};
if (this.onstatelength) this.onstatelength.sendEvent($0)
}


override function _showEnabled () {
reference.setAttribute("clickable", this._enabled);
this.showUp()
}
/* -*- file: -*- */
function $lzc$class_multistatebutton ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
LzNode.mergeAttributes({$attributeDescriptor: {types: {_focusable: "boolean", aaactive: "boolean", aadescription: "string", aaname: "string", aasilent: "boolean", aatabindex: "number", align: "string", backgroundrepeat: "string", bgcolor: "color", cachebitmap: "boolean", capabilities: "string", classroot: "string", clickable: "boolean", clickregion: "string", clip: "boolean", cloneManager: "string", contextmenu: "string", cornerradius: "string", cursor: "token", datapath: "string", defaultplacement: "string", disabledResourceNumber: "number", doesenter: "boolean", downResourceNumber: "number", fgcolor: "color", focusable: "boolean", focustrap: "boolean", font: "string", fontsize: "size", fontstyle: "string", frame: "numberExpression", framesloadratio: "number", hasdirectionallayout: "boolean", hassetheight: "boolean", hassetwidth: "boolean", height: "size", id: "ID", ignoreplacement: "boolean", immediateparent: "string", inited: "boolean", initstage: "string", lastres: "number", layout: "css", loadratio: "number", mask: "string", maxframes: "number", maxstate: "number", name: "token", nodeLevel: "number", normalResourceNumber: "number", opacity: "number", options: "css", overResourceNumber: "number", parent: "string", pixellock: "boolean", placement: "string", playing: "boolean", resource: "string", resourceheight: "number", resourceviewcount: "number", resourcewidth: "number", rotation: "numberExpression", shadowangle: "number", shadowblurradius: "number", shadowcolor: "color", shadowdistance: "number", showhandcursor: "boolean", source: "string", statelength: "number", statenum: "number", stretches: "string", styleclass: "string", subnodes: "string", subviews: "string", text: "html", tintcolor: "string", totalframes: "number", transition: "string", unstretchedheight: "number", unstretchedwidth: "number", usegetbounds: "boolean", valign: "string", visibility: "string", visible: "boolean", width: "size", "with": "string", x: "numberExpression", xoffset: "numberExpression", xscale: "numberExpression", y: "numberExpression", yoffset: "numberExpression", yscale: "numberExpression"}}, clickable: true, frame: new LzAlwaysExpr("$m3d", "$m3e", null), lastres: 1, maxstate: 0, onstatelength: LzDeclaredEvent, onstatenum: LzDeclaredEvent, statelength: 3, statenum: 0}, $lzc$class_multistatebutton.attributes);}
}
