package {
dynamic class $lzc$class_windowpanel extends $lzc$class_basewindow {
/* -*- file: lz/windowpanel.lzx#101 -*- */
static var tagname = "windowpanel";static var children = LzNode.mergeChildren([{attrs: {$CSSDescriptor: {}, $attributeDescriptor: {types: {applied: "boolean", classroot: "string", cloneManager: "string", datapath: "string", defaultplacement: "string", id: "ID", ignoreplacement: "boolean", immediateparent: "string", inited: "boolean", initstage: "string", name: "token", nodeLevel: "number", options: "css", parent: "string", placement: "string", pooling: "boolean", styleclass: "string", subnodes: "string", transition: "string", "with": "string"}}, $classrootdepth: 1, $mbf: function  ($0) {
/* -*- file: -*- */
with (this) {
/* -*- file: lz/windowpanel.lzx#119 -*- */
var $1 = parent._usecontentwidth;
/* -*- file: -*- */
if ($1 !== this["applied"] || !this.inited) {
this.setAttribute("applied", $1)
}}}
, $mbg: function  () {
with (this) {
try {
/* -*- file: lz/windowpanel.lzx#122 -*- */
return [parent, "_usecontentwidth"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}}
, $mbh: function  ($0) {
/* -*- file: lz/windowpanel.lzx#120 -*- */
var $1 = this.content.width + this.inset_left + this.inset_right;
/* -*- file: -*- */
if ($1 !== this["width"] || !this.inited) {
this.setAttribute("width", $1)
}}
, $mbi: function  () {
try {
/* -*- file: lz/windowpanel.lzx#123 -*- */
return [this.content, "width", this, "inset_left", this, "inset_right"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
, applied: new LzAlwaysExpr("$mbf", "$mbg", null), width: new LzAlwaysExpr("$mbh", "$mbi", null)}, "class": LzState}, {attrs: {$CSSDescriptor: {}, $attributeDescriptor: {types: {applied: "boolean", classroot: "string", cloneManager: "string", datapath: "string", defaultplacement: "string", id: "ID", ignoreplacement: "boolean", immediateparent: "string", inited: "boolean", initstage: "string", name: "token", nodeLevel: "number", options: "css", parent: "string", placement: "string", pooling: "boolean", styleclass: "string", subnodes: "string", transition: "string", "with": "string"}}, $classrootdepth: 1, $mbj: function  ($0) {
with (this) {
/* -*- file: lz/windowpanel.lzx#122 -*- */
var $1 = parent._usecontentheight;
/* -*- file: -*- */
if ($1 !== this["applied"] || !this.inited) {
this.setAttribute("applied", $1)
}}}
, $mbk: function  () {
with (this) {
try {
/* -*- file: lz/windowpanel.lzx#125 -*- */
return [parent, "_usecontentheight"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}}
, $mbl: function  ($0) {
/* -*- file: lz/windowpanel.lzx#123 -*- */
var $1 = this.content.height + this.inset_top + this.inset_bottom;
/* -*- file: -*- */
if ($1 !== this["height"] || !this.inited) {
this.setAttribute("height", $1)
}}
, $mbm: function  () {
try {
/* -*- file: lz/windowpanel.lzx#126 -*- */
return [this.content, "height", this, "inset_top", this, "inset_bottom"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
, applied: new LzAlwaysExpr("$mbj", "$mbk", null), height: new LzAlwaysExpr("$mbl", "$mbm", null)}, "class": LzState}, {attrs: {$classrootdepth: 1, frame: new LzAlwaysExpr("$mbp", "$mbq", null), height: 13.9, left: "window_TL_rsc", middle: "window_TM_rsc", name: "top", right: "window_TR_rsc", width: new LzAlwaysExpr("$mbn", "$mbo", null)}, "class": $lzc$class__mcy}, {attrs: {$classrootdepth: 1, frame: new LzAlwaysExpr("$mbt", "$mbu", null), left: "window_ML_rsc", middle: "window_MM_rsc", name: "middle", right: "window_MR_rsc", width: new LzAlwaysExpr("$mbr", "$mbs", null)}, "class": $lzc$class__mcz}, {attrs: {$classrootdepth: 1, frame: new LzAlwaysExpr("$mbx", "$mby", null), left: "window_BL_rsc", middle: "window_BM_rsc", name: "bottom", right: "window_BR_rsc", width: new LzAlwaysExpr("$mbv", "$mbw", null)}, "class": $lzc$class__md0}, {attrs: {$classrootdepth: 1, axis: "y"}, "class": $lzc$class_stableborderlayout}, {attrs: {$classrootdepth: 1, controls: void 0, gripper_left: void 0, gripper_right: void 0, icon: void 0, name: "title_area", title: void 0, titlelayout: void 0, width: new LzAlwaysExpr("$mc3", "$mc4", null), x: new LzAlwaysExpr("$mbz", "$mc0", null), y: new LzAlwaysExpr("$mc1", "$mc2", null)}, "class": $lzc$class__md1}, {attrs: {$classrootdepth: 1, bgcolor: new LzAlwaysExpr("$mco", "$mcp", null), clip: true, name: "content", x: new LzAlwaysExpr("$mck", "$mcl", null), y: new LzAlwaysExpr("$mcm", "$mcn", null)}, "class": $lzc$class__md7}, {attrs: "content", "class": $lzc$class_userClassPlacement}], $lzc$class_basewindow["children"]);static var attributes = new LzInheritedHash($lzc$class_basewindow.attributes);var title;var closeable;var inset_left;var inset_top;var inset_right;var inset_bottom;var titlearea_inset_top;override function $lzc$set_bgcolor ($0) {
/* -*- file: lz/windowpanel.lzx#130 -*- */
this.bgcolor = $0;
var $1 = this["onbgcolor"];
if ($1 && $1.ready) {
$1.sendEvent($0)
}}
/* -*- file: -*- */
var _usecontentwidth;var _usecontentheight;override function construct ($0, $1) {
/* -*- file: lz/windowpanel.lzx#144 -*- */
super.construct($0, $1);


setAttribute("_usecontentwidth", !hassetwidth);
setAttribute("_usecontentheight", !hassetheight)
}


override function init () {
super.init();
checkMinSize()
}


function checkMinSize () {



if (this.width < this.minwidth) {
if (!this._usecontentwidth) {
Debug.write("requested width smaller than minwidth," + " ignored: " + this)
};

this.setAttribute("width", this.minwidth)
};
if (this.height < this.minheight) {
if (!this._usecontentheight) {
Debug.write("requested height smaller than minheight," + " ignored: " + this)
};

this.setAttribute("height", this.minheight)
}}
/* -*- file: -*- */
var top;var middle;var bottom;var title_area;var content;override function _applystyle ($0) {
/* -*- file: lz/windowpanel.lzx#286 -*- */
setTint(this.top, $0.basecolor);
setTint(this.middle, $0.basecolor);
setTint(this.bottom, $0.basecolor);
title_area.title.setAttribute("fgcolor", $0.textcolor);
if (this.bgcolor == null) {
this.content.setAttribute("bgcolor", $0.bgcolor)
}}
/* -*- file: -*- */
function $lzc$class_windowpanel ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
LzNode.mergeAttributes({$attributeDescriptor: {types: {_focusable: "boolean", aaactive: "boolean", aadescription: "string", aaname: "string", aasilent: "boolean", aatabindex: "number", align: "string", allowdrag: "boolean", backgroundrepeat: "string", bgcolor: "color", cachebitmap: "boolean", capabilities: "string", classroot: "string", clickable: "boolean", clickregion: "string", clip: "boolean", cloneManager: "string", contextmenu: "string", cornerradius: "string", cursor: "token", datapath: "string", defaultplacement: "string", doesenter: "boolean", fgcolor: "color", focusable: "boolean", focustrap: "boolean", font: "string", fontsize: "size", fontstyle: "string", frame: "numberExpression", framesloadratio: "number", hasdirectionallayout: "boolean", hassetheight: "boolean", hassetwidth: "boolean", height: "size", id: "ID", ignoreplacement: "boolean", immediateparent: "string", inited: "boolean", initstage: "string", layout: "css", loadratio: "number", mask: "string", name: "token", nodeLevel: "number", opacity: "number", options: "css", parent: "string", pixellock: "boolean", placement: "string", playing: "boolean", resource: "string", resourceheight: "number", resourcewidth: "number", rotation: "numberExpression", shadowangle: "number", shadowblurradius: "number", shadowcolor: "color", shadowdistance: "number", showhandcursor: "boolean", source: "string", stretches: "string", styleclass: "string", subnodes: "string", subviews: "string", text: "html", tintcolor: "string", title: "string", totalframes: "number", transition: "string", unstretchedheight: "number", unstretchedwidth: "number", usegetbounds: "boolean", valign: "string", visibility: "string", visible: "boolean", width: "size", "with": "string", x: "numberExpression", xoffset: "numberExpression", xscale: "numberExpression", y: "numberExpression", yoffset: "numberExpression", yscale: "numberExpression"}}, _usecontentheight: true, _usecontentwidth: true, closeable: false, inset_bottom: 20, inset_left: 6, inset_right: 11, inset_top: 22, title: "", titlearea_inset_top: 6}, $lzc$class_windowpanel.attributes);}
}
