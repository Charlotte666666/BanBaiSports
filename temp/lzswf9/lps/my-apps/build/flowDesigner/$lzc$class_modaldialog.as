package {
dynamic class $lzc$class_modaldialog extends $lzc$class_windowpanel {
/* -*- file: lz/modaldialog.lzx#13 -*- */
static var tagname = "modaldialog";static var children = LzNode.mergeChildren([{attrs: {$classrootdepth: 1, height: new LzAlwaysExpr("$mde", "$mdf", null), mdcontent: void 0, name: "mdpadding", width: new LzAlwaysExpr("$mdc", "$mdd", null)}, "class": $lzc$class__mds}, {attrs: "mdcontent", "class": $lzc$class_userClassPlacement}], $lzc$class_windowpanel["children"]);static var attributes = new LzInheritedHash($lzc$class_windowpanel.attributes);function $md8 ($0) {
/* -*- file: #12 -*- */
var $1 = (immediateparent.width - this.width) / 2;
/* -*- file: -*- */
if ($1 !== this["x"] || !this.inited) {
this.setAttribute("x", $1)
}}
/* -*- file: lz/modaldialog.lzx#12 -*- */
function $md9 () {
/* -*- file: -*- */
try {
/* -*- file: lz/modaldialog.lzx#15 -*- */
return [immediateparent, "width", this, "width"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
/* -*- file: lz/modaldialog.lzx#12 -*- */
function $mda ($0) {
/* -*- file: #12 -*- */
var $1 = (immediateparent.height - this.height) / 3;
/* -*- file: -*- */
if ($1 !== this["y"] || !this.inited) {
this.setAttribute("y", $1)
}}
/* -*- file: lz/modaldialog.lzx#12 -*- */
function $mdb () {
/* -*- file: -*- */
try {
/* -*- file: lz/modaldialog.lzx#15 -*- */
return [immediateparent, "height", this, "height"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
var content_inset_left;var content_inset_top;var content_inset_right;var content_inset_bottom;var mdpadding;override function open () {
/* -*- file: lz/modaldialog.lzx#53 -*- */
this.setAttribute("visible", true);
lz.ModeManager.makeModal(this);
this.bringToFront()
}


override function close (...$0) {
this.setAttribute("visible", false);
lz.Focus.clearFocus();
lz.ModeManager.release(this)
}


function passModeEvent ($0, $1) {
return false
}
/* -*- file: -*- */
function $lzc$class_modaldialog ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
LzNode.mergeAttributes({$attributeDescriptor: {types: {_focusable: "boolean", aaactive: "boolean", aadescription: "string", aaname: "string", aasilent: "boolean", aatabindex: "number", align: "string", allowdrag: "boolean", backgroundrepeat: "string", bgcolor: "color", cachebitmap: "boolean", capabilities: "string", classroot: "string", clickable: "boolean", clickregion: "string", clip: "boolean", cloneManager: "string", contextmenu: "string", cornerradius: "string", cursor: "token", datapath: "string", defaultplacement: "string", doesenter: "boolean", fgcolor: "color", focusable: "boolean", focustrap: "boolean", font: "string", fontsize: "size", fontstyle: "string", frame: "numberExpression", framesloadratio: "number", hasdirectionallayout: "boolean", hassetheight: "boolean", hassetwidth: "boolean", height: "size", id: "ID", ignoreplacement: "boolean", immediateparent: "string", inited: "boolean", initstage: "string", layout: "css", loadratio: "number", mask: "string", name: "token", nodeLevel: "number", opacity: "number", options: "css", parent: "string", pixellock: "boolean", placement: "string", playing: "boolean", resource: "string", resourceheight: "number", resourcewidth: "number", rotation: "numberExpression", shadowangle: "number", shadowblurradius: "number", shadowcolor: "color", shadowdistance: "number", showhandcursor: "boolean", source: "string", stretches: "string", styleclass: "string", subnodes: "string", subviews: "string", text: "html", tintcolor: "string", title: "string", totalframes: "number", transition: "string", unstretchedheight: "number", unstretchedwidth: "number", usegetbounds: "boolean", valign: "string", visibility: "string", visible: "boolean", width: "size", "with": "string", x: "numberExpression", xoffset: "numberExpression", xscale: "numberExpression", y: "numberExpression", yoffset: "numberExpression", yscale: "numberExpression"}}, content_inset_bottom: 10, content_inset_left: 14, content_inset_right: 14, content_inset_top: 10, focustrap: true, visible: false, x: new LzAlwaysExpr("$md8", "$md9", null), y: new LzAlwaysExpr("$mda", "$mdb", null)}, $lzc$class_modaldialog.attributes);}
}
