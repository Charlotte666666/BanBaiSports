package {
dynamic class $lzc$class_checkbox extends $lzc$class_baseformitem {
/* -*- file: lz/checkbox.lzx#17 -*- */
static var tagname = "checkbox";static var children = [{attrs: {$classrootdepth: 1, name: "_title", resize: true, text: new LzAlwaysExpr("$m3h", "$m3i", null), x: 16, y: new LzAlwaysExpr("$m3f", "$m3g", null)}, "class": $lzc$class__m3p}, {attrs: {$classrootdepth: 1, maxstate: 1, name: "cb", reference: new LzOnceExpr("$m3n", null), resource: "lzcheckbox_rsrc", statelength: 4, statenum: new LzAlwaysExpr("$m3l", "$m3m", null), text: ""}, "class": $lzc$class__m3q}];static var attributes = new LzInheritedHash($lzc$class_baseformitem.attributes);var _title;function $m3j ($0) {








var $1 = this.cb.height / 2 - this._title.height / 2 + 1;
/* -*- file: -*- */
if ($1 !== this["text_y"] || !this.inited) {
this.setAttribute("text_y", $1)
}}
/* -*- file: lz/checkbox.lzx#26 -*- */
function $m3k () {
/* -*- file: -*- */
try {
/* -*- file: lz/checkbox.lzx#29 -*- */
return [this.cb, "height", this._title, "height"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
var text_y;override function $lzc$set_value ($0) {
/* -*- file: lz/checkbox.lzx#30 -*- */
setValue($0)
}
/* -*- file: -*- */
var cb;override function doSpaceUp () {
/* -*- file: lz/checkbox.lzx#41 -*- */
if (this._enabled) {
this.setAttribute("value", !this.value)
}}



function $m3o ($0) {
if (this._enabled) this.setAttribute("value", !this.value)
}



override function _applystyle ($0) {
if (this.style != null) {
if (_enabled) {
_title.setAttribute("fgcolor", $0.textcolor)
} else {
_title.setAttribute("fgcolor", $0.textdisabledcolor)
};
setTint(this.cb, $0.basecolor)
}}



override function _showEnabled () {
_applystyle(this.style)
}







override function setValue ($0, $1 = null) {
if ($0 == "false") {
/* -*- file: #76 -*- */
$0 = false
} else if ($0 == "true") {
/* -*- file: #77 -*- */
$0 = true
} else $0 = !(!$0);
super.setValue($0, $1)
}
/* -*- file: -*- */
function $lzc$class_checkbox ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
LzNode.mergeAttributes({$attributeDescriptor: {types: {_focusable: "boolean", aaactive: "boolean", aadescription: "string", aaname: "string", aasilent: "boolean", aatabindex: "number", align: "string", backgroundrepeat: "string", bgcolor: "color", cachebitmap: "boolean", capabilities: "string", classroot: "string", clickable: "boolean", clickregion: "string", clip: "boolean", cloneManager: "string", contextmenu: "string", cornerradius: "string", cursor: "token", datapath: "string", defaultplacement: "string", doesenter: "boolean", fgcolor: "color", focusable: "boolean", focustrap: "boolean", font: "string", fontsize: "size", fontstyle: "string", frame: "numberExpression", framesloadratio: "number", hasdirectionallayout: "boolean", hassetheight: "boolean", hassetwidth: "boolean", height: "size", id: "ID", ignoreplacement: "boolean", immediateparent: "string", inited: "boolean", initstage: "string", layout: "css", loadratio: "number", mask: "string", name: "token", nodeLevel: "number", opacity: "number", options: "css", parent: "string", pixellock: "boolean", placement: "string", playing: "boolean", resource: "string", resourceheight: "number", resourcewidth: "number", rotation: "numberExpression", shadowangle: "number", shadowblurradius: "number", shadowcolor: "color", shadowdistance: "number", showhandcursor: "boolean", source: "string", stretches: "string", styleclass: "string", submit: "boolean", submitname: "string", subnodes: "string", subviews: "string", text: "html", text_y: "number", tintcolor: "string", totalframes: "number", transition: "string", type: "string", unstretchedheight: "number", unstretchedwidth: "number", usegetbounds: "boolean", valign: "string", visibility: "string", visible: "boolean", width: "size", "with": "string", x: "numberExpression", xoffset: "numberExpression", xscale: "numberExpression", y: "numberExpression", yoffset: "numberExpression", yscale: "numberExpression"}}, $delegates: ["onclick", "$m3o", null], clickable: true, pixellock: true, text_y: new LzAlwaysExpr("$m3j", "$m3k", null), value: false}, $lzc$class_checkbox.attributes);}
}
