package {
dynamic class $lzc$class_window extends $lzc$class_windowpanel {
/* -*- file: lz/window.lzx#15 -*- */
static var tagname = "window";static var children = LzNode.mergeChildren([{attrs: {$CSSDescriptor: {}, $attributeDescriptor: {types: {applied: "boolean", classroot: "string", cloneManager: "string", datapath: "string", defaultplacement: "string", id: "ID", ignoreplacement: "boolean", immediateparent: "string", inited: "boolean", initstage: "string", name: "token", nodeLevel: "number", options: "css", parent: "string", placement: "string", pooling: "boolean", styleclass: "string", subnodes: "string", transition: "string", "with": "string"}}, $classrootdepth: 1, $mel: function  ($0) {














var $1 = this.classroot.resizable;
/* -*- file: -*- */
if ($1 !== this["applied"] || !this.inited) {
this.setAttribute("applied", $1)
}}
, $mem: function  () {
try {
/* -*- file: lz/window.lzx#33 -*- */
return [this.classroot, "resizable"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
, _resizeControl: void 0, applied: new LzAlwaysExpr("$mel", "$mem", null), name: "resizeable"}, children: [{attrs: {$classrootdepth: 1, $delegates: ["onmouseover", "$mer", null, "onmouseout", "$mes", null, "onmousedown", "$met", null, "onmouseup", "$meu", null, "oninit", "$mev", null], clickable: true, name: "_resizeControl", placement: "null", resource: "window_resizebtn_rsc", x: new LzAlwaysExpr("$men", "$meo", null), y: new LzAlwaysExpr("$mep", "$meq", null)}, "class": $lzc$class__mfg}], "class": LzState}, {attrs: {$classrootdepth: 1, $delegates: ["oninit", "$mey", null], clip: true, name: "menubar", width: new LzAlwaysExpr("$mew", "$mex", null)}, "class": $lzc$class__mfh}, {attrs: {$classrootdepth: 1, $delegates: ["oninit", "$mf1", null], clip: true, name: "toolbar", width: new LzAlwaysExpr("$mez", "$mf0", null)}, "class": $lzc$class__mfi}, {attrs: {$classrootdepth: 1, bgcolor: 6974058, height: new LzAlwaysExpr("$mf4", "$mf5", null), name: "wframe", options: {releasetolayout: true}, wcontent: void 0, width: new LzAlwaysExpr("$mf2", "$mf3", null)}, "class": $lzc$class__mfj}, {attrs: {$classrootdepth: 1, axis: "y"}, "class": $lzc$class_resizelayout}, {attrs: "wcontent", "class": $lzc$class_userClassPlacement}], $lzc$class_windowpanel["children"]);static var attributes = new LzInheritedHash($lzc$class_windowpanel.attributes);var resizable;override function _startResize () {
/* -*- file: lz/window.lzx#25 -*- */
super._startResize();
setAttribute("_usecontentwidth", false);
setAttribute("_usecontentheight", false)
}
/* -*- file: -*- */
var resizeable;var menubar;var toolbar;var wframe;var _resizeControl;override function _applystyle ($0) {
/* -*- file: lz/window.lzx#73 -*- */
super._applystyle($0);
if (this._resizeControl) {
this.setTint(this._resizeControl, $0.basecolor)
}}
/* -*- file: -*- */
function $lzc$class_window ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
LzNode.mergeAttributes({$attributeDescriptor: {types: {_focusable: "boolean", aaactive: "boolean", aadescription: "string", aaname: "string", aasilent: "boolean", aatabindex: "number", align: "string", allowdrag: "boolean", backgroundrepeat: "string", bgcolor: "color", cachebitmap: "boolean", capabilities: "string", classroot: "string", clickable: "boolean", clickregion: "string", clip: "boolean", cloneManager: "string", contextmenu: "string", cornerradius: "string", cursor: "token", datapath: "string", defaultplacement: "string", doesenter: "boolean", fgcolor: "color", focusable: "boolean", focustrap: "boolean", font: "string", fontsize: "size", fontstyle: "string", frame: "numberExpression", framesloadratio: "number", hasdirectionallayout: "boolean", hassetheight: "boolean", hassetwidth: "boolean", height: "size", id: "ID", ignoreplacement: "boolean", immediateparent: "string", inited: "boolean", initstage: "string", layout: "css", loadratio: "number", mask: "string", name: "token", nodeLevel: "number", opacity: "number", options: "css", parent: "string", pixellock: "boolean", placement: "string", playing: "boolean", resource: "string", resourceheight: "number", resourcewidth: "number", rotation: "numberExpression", shadowangle: "number", shadowblurradius: "number", shadowcolor: "color", shadowdistance: "number", showhandcursor: "boolean", source: "string", stretches: "string", styleclass: "string", subnodes: "string", subviews: "string", text: "html", tintcolor: "string", title: "string", totalframes: "number", transition: "string", unstretchedheight: "number", unstretchedwidth: "number", usegetbounds: "boolean", valign: "string", visibility: "string", visible: "boolean", width: "size", "with": "string", x: "numberExpression", xoffset: "numberExpression", xscale: "numberExpression", y: "numberExpression", yoffset: "numberExpression", yscale: "numberExpression"}}, _resizeControl: null, resizable: false}, $lzc$class_window.attributes);}
}
