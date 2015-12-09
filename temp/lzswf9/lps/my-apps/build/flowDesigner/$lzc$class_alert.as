package {
dynamic class $lzc$class_alert extends $lzc$class_modaldialog {
/* -*- file: lz/alert.lzx#8 -*- */
static var tagname = "alert";static var children = LzNode.mergeChildren([{attrs: {$classrootdepth: 1, multiline: true, name: "alerttext", resize: true, text: new LzAlwaysExpr("$me1", "$me2", null), x: new LzAlwaysExpr("$mdx", "$mdy", null), y: new LzAlwaysExpr("$mdz", "$me0", null)}, "class": $lzc$class__meh}, {attrs: {$classrootdepth: 1, b1: void 0, x: new LzAlwaysExpr("$me3", "$me4", null), y: new LzAlwaysExpr("$me5", "$me6", null)}, "class": $lzc$class__mei}], $lzc$class_modaldialog["children"]);static var attributes = new LzInheritedHash($lzc$class_modaldialog.attributes);var button1;var button2;var result;var text_x;var text_y;function $mdu ($0) {






















this.setAttribute("minwidth", button2 == "" ? 100 : 170)
}
/* -*- file: -*- */
var onresult;function $mdv ($0) {
/* -*- file: lz/alert.lzx#41 -*- */
var $1 = Math.round(parent.width / 3) - inset_left - inset_right - content_inset_left - content_inset_right;
/* -*- file: -*- */
if ($1 !== this["maxtextwidth"] || !this.inited) {
this.setAttribute("maxtextwidth", $1)
}}
/* -*- file: lz/alert.lzx#41 -*- */
function $mdw () {
/* -*- file: -*- */
try {
/* -*- file: lz/alert.lzx#44 -*- */
return [parent, "width", this, "inset_left", this, "inset_right", this, "content_inset_left", this, "content_inset_right"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
var maxtextwidth;var alerttext;override function open () {
/* -*- file: lz/alert.lzx#67 -*- */
this.result = null;
if (this.onresult) {
this.onresult.sendEvent(null)
};
super.open()
}






override function close (...$0) {
var $1 = $0[0];
this.result = $1;
if (this.onresult) {
this.onresult.sendEvent($1)
};
super.close()
}
/* -*- file: -*- */
function $lzc$class_alert ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
LzNode.mergeAttributes({$attributeDescriptor: {types: {_focusable: "boolean", aaactive: "boolean", aadescription: "string", aaname: "string", aasilent: "boolean", aatabindex: "number", align: "string", allowdrag: "boolean", backgroundrepeat: "string", bgcolor: "color", button1: "string", button2: "string", cachebitmap: "boolean", capabilities: "string", classroot: "string", clickable: "boolean", clickregion: "string", clip: "boolean", cloneManager: "string", contextmenu: "string", cornerradius: "string", cursor: "token", datapath: "string", defaultplacement: "string", doesenter: "boolean", fgcolor: "color", focusable: "boolean", focustrap: "boolean", font: "string", fontsize: "size", fontstyle: "string", frame: "numberExpression", framesloadratio: "number", hasdirectionallayout: "boolean", hassetheight: "boolean", hassetwidth: "boolean", height: "size", id: "ID", ignoreplacement: "boolean", immediateparent: "string", inited: "boolean", initstage: "string", layout: "css", loadratio: "number", mask: "string", name: "token", nodeLevel: "number", opacity: "number", options: "css", parent: "string", pixellock: "boolean", placement: "string", playing: "boolean", resource: "string", resourceheight: "number", resourcewidth: "number", rotation: "numberExpression", shadowangle: "number", shadowblurradius: "number", shadowcolor: "color", shadowdistance: "number", showhandcursor: "boolean", source: "string", stretches: "string", styleclass: "string", subnodes: "string", subviews: "string", text: "html", text_x: "number", text_y: "number", tintcolor: "string", title: "string", totalframes: "number", transition: "string", unstretchedheight: "number", unstretchedwidth: "number", usegetbounds: "boolean", valign: "string", visibility: "string", visible: "boolean", width: "size", "with": "string", x: "numberExpression", xoffset: "numberExpression", xscale: "numberExpression", y: "numberExpression", yoffset: "numberExpression", yscale: "numberExpression"}}, button1: "OK", button2: "", maxtextwidth: new LzAlwaysExpr("$mdv", "$mdw", null), minwidth: new LzOnceExpr("$mdu", null), onresult: LzDeclaredEvent, result: null, text_x: 0, text_y: 0}, $lzc$class_alert.attributes);}
}
