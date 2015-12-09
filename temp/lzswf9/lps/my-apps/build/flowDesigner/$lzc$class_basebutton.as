package {
dynamic class $lzc$class_basebutton extends $lzc$class_basecomponent {
/* -*- file: base/basebutton.lzx#5 -*- */
static var tagname = "basebutton";static var attributes = new LzInheritedHash($lzc$class_basecomponent.attributes);var normalResourceNumber;var overResourceNumber;var downResourceNumber;var disabledResourceNumber;function $m1f ($0) {
/* -*- file: #36 -*- */
this.setAttribute("maxframes", this.totalframes)
}
/* -*- file: -*- */
var maxframes;var resourceviewcount;function $lzc$set_resourceviewcount ($0) {
/* -*- file: base/basebutton.lzx#42 -*- */
this.setResourceViewCount($0)
}
/* -*- file: -*- */
var respondtomouseout;function $m1g ($0) {
/* -*- file: base/basebutton.lzx#49 -*- */
this.setAttribute("reference", this)
}
/* -*- file: -*- */
var reference;function $lzc$set_reference ($0) {
/* -*- file: base/basebutton.lzx#50 -*- */
setreference($0)
}
/* -*- file: -*- */
var onresourceviewcount;var _msdown;var _msin;function setResourceViewCount ($0) {
/* -*- file: base/basebutton.lzx#65 -*- */
this.resourceviewcount = $0;
if (this._initcomplete) {
if ($0 > 0) {
if (this.subviews) {
this.maxframes = this.subviews[0].totalframes;
if (this.onresourceviewcount) {
this.onresourceviewcount.sendEvent()
}}}}}






function _callShow () {
if (this._msdown && this._msin && this.maxframes >= this.downResourceNumber) {
this.showDown()
} else if (this._msin && this.maxframes >= this.overResourceNumber) {
this.showOver()
} else this.showUp()
}


function $m1h () {
/* -*- file: #88 -*- */
return lz.ModeManager
}
/* -*- file: #88 -*- */
function $m1i ($0) {

if ($0 && (this._msdown || this._msin) && !this.childOf($0)) {

this._msdown = false;
this._msin = false;
this._callShow()
}}






override function $lzc$set_frame ($0) {
if (this.resourceviewcount > 0) {
for (var $1 = 0;$1 < resourceviewcount;$1++) {
this.subviews[$1].setAttribute("frame", $0)
}} else {

super.$lzc$set_frame($0)
}}




override function doSpaceDown () {

if (this._enabled) {
this.showDown()
}}




override function doSpaceUp () {

if (this._enabled) {
this.onclick.sendEvent();
this.showUp()
}}




override function doEnterDown () {
if (this._enabled) {
this.showDown()
}}



override function doEnterUp () {
if (this._enabled) {
if (this.onclick) {
this.onclick.sendEvent()
};
this.showUp()
}}



function $m1j ($0) {
if (this.isinited) {
this.maxframes = this.totalframes;
this._callShow()
}}



override function init () {

super.init();
this.setResourceViewCount(this.resourceviewcount);
this._callShow()
}


function $m1k ($0) {
this.setAttribute("_msin", true);
this._callShow()
}


function $m1l ($0) {
this.setAttribute("_msin", false);
this._callShow()
}


function $m1m ($0) {
this.setAttribute("_msdown", true);
this._callShow()
}


function $m1n ($0) {
this.setAttribute("_msdown", false);
this._callShow()
}



override function _showEnabled () {
reference.setAttribute("clickable", this._enabled);
showUp()
}





function showDown ($0 = null) {
this.setAttribute("frame", this.downResourceNumber)
}




function showUp ($0 = null) {
if (!this._enabled && this.disabledResourceNumber) {
this.setAttribute("frame", this.disabledResourceNumber)
} else {
this.setAttribute("frame", this.normalResourceNumber)
}}






function showOver ($0 = null) {
this.setAttribute("frame", this.overResourceNumber)
}


function setreference ($0) {
this.reference = $0;
if ($0 != this) this.setAttribute("clickable", false)
}


override function _applystyle ($0) {
setTint(this, $0.basecolor)
}
/* -*- file: -*- */
function $lzc$class_basebutton ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
LzNode.mergeAttributes({$attributeDescriptor: {types: {_focusable: "boolean", aaactive: "boolean", aadescription: "string", aaname: "string", aasilent: "boolean", aatabindex: "number", align: "string", backgroundrepeat: "string", bgcolor: "color", cachebitmap: "boolean", capabilities: "string", classroot: "string", clickable: "boolean", clickregion: "string", clip: "boolean", cloneManager: "string", contextmenu: "string", cornerradius: "string", cursor: "token", datapath: "string", defaultplacement: "string", disabledResourceNumber: "number", doesenter: "boolean", downResourceNumber: "number", fgcolor: "color", focusable: "boolean", focustrap: "boolean", font: "string", fontsize: "size", fontstyle: "string", frame: "numberExpression", framesloadratio: "number", hasdirectionallayout: "boolean", hassetheight: "boolean", hassetwidth: "boolean", height: "size", id: "ID", ignoreplacement: "boolean", immediateparent: "string", inited: "boolean", initstage: "string", layout: "css", loadratio: "number", mask: "string", maxframes: "number", name: "token", nodeLevel: "number", normalResourceNumber: "number", opacity: "number", options: "css", overResourceNumber: "number", parent: "string", pixellock: "boolean", placement: "string", playing: "boolean", resource: "string", resourceheight: "number", resourceviewcount: "number", resourcewidth: "number", rotation: "numberExpression", shadowangle: "number", shadowblurradius: "number", shadowcolor: "color", shadowdistance: "number", showhandcursor: "boolean", source: "string", stretches: "string", styleclass: "string", subnodes: "string", subviews: "string", text: "html", tintcolor: "string", totalframes: "number", transition: "string", unstretchedheight: "number", unstretchedwidth: "number", usegetbounds: "boolean", valign: "string", visibility: "string", visible: "boolean", width: "size", "with": "string", x: "numberExpression", xoffset: "numberExpression", xscale: "numberExpression", y: "numberExpression", yoffset: "numberExpression", yscale: "numberExpression"}}, $delegates: ["onmode", "$m1i", "$m1h", "ontotalframes", "$m1j", null, "onmouseover", "$m1k", null, "onmouseout", "$m1l", null, "onmousedown", "$m1m", null, "onmouseup", "$m1n", null], _msdown: false, _msin: false, clickable: true, disabledResourceNumber: 4, downResourceNumber: 3, focusable: false, maxframes: new LzOnceExpr("$m1f", null), normalResourceNumber: 1, onclick: LzDeclaredEvent, onresourceviewcount: LzDeclaredEvent, overResourceNumber: 2, reference: new LzOnceExpr("$m1g", null), resourceviewcount: 0, respondtomouseout: true, styleable: false}, $lzc$class_basebutton.attributes);}
}
