package {
dynamic class $lzc$class__mjy extends LzText {
/* -*- file: common/components/CheckBox.lzx#80 -*- */
static var displayName = "<anonymous extends='text'>";static var attributes = new LzInheritedHash(LzText.attributes);function $mjr ($0) {
/* -*- file: #79 -*- */
var $1 = !parent.isEnabled;
/* -*- file: -*- */
if ($1 !== this["visible"] || !this.inited) {
this.setAttribute("visible", $1)
}}
/* -*- file: common/components/CheckBox.lzx#79 -*- */
function $mjs () {
/* -*- file: -*- */
try {
/* -*- file: common/components/CheckBox.lzx#82 -*- */
return [parent, "isEnabled"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
/* -*- file: common/components/CheckBox.lzx#79 -*- */
function $mjt ($0) {
/* -*- file: #79 -*- */
var $1 = parent.width - parent.labelWidth;
/* -*- file: -*- */
if ($1 !== this["width"] || !this.inited) {
this.setAttribute("width", $1)
}}
/* -*- file: common/components/CheckBox.lzx#79 -*- */
function $mju () {
/* -*- file: -*- */
try {
/* -*- file: common/components/CheckBox.lzx#82 -*- */
return [parent, "width", parent, "labelWidth"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
var $classrootdepth;function $lzc$class__mjy ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
LzNode.mergeAttributes({$CSSDescriptor: {}, $attributeDescriptor: {types: {aaactive: "boolean", aadescription: "string", aaname: "string", aasilent: "boolean", aatabindex: "number", align: "string", antiAliasType: "string", backgroundrepeat: "string", bgcolor: "color", cachebitmap: "boolean", capabilities: "string", cdata: "cdata", classroot: "string", clickable: "boolean", clickregion: "string", clip: "boolean", cloneManager: "string", contextmenu: "string", cornerradius: "string", cursor: "token", datapath: "string", defaultplacement: "string", direction: "string", embedfonts: "boolean", fgcolor: "color", focusable: "boolean", focustrap: "boolean", font: "string", fontsize: "size", fontstyle: "string", frame: "numberExpression", framesloadratio: "number", gridFit: "string", hasdirectionallayout: "boolean", hassetheight: "boolean", hassetwidth: "boolean", height: "size", hscroll: "number", id: "ID", ignoreplacement: "boolean", immediateparent: "string", inited: "boolean", initstage: "string", layout: "css", letterspacing: "number", lineheight: "number", loadratio: "number", mask: "string", maxhscroll: "number", maxlength: "numberExpression", maxscroll: "number", multiline: "boolean", name: "token", nodeLevel: "number", opacity: "number", options: "css", parent: "string", pattern: "string", pixellock: "boolean", placement: "string", playing: "boolean", resize: "boolean", resource: "string", resourceheight: "number", resourcewidth: "number", rotation: "numberExpression", scroll: "number", scrollevents: "boolean", scrollheight: "number", scrollwidth: "number", selectable: "boolean", shadowangle: "number", shadowblurradius: "number", shadowcolor: "color", shadowdistance: "number", sharpness: "number", showhandcursor: "boolean", source: "string", stretches: "string", styleclass: "string", subnodes: "string", subviews: "string", text: "html", textalign: "string", textdecoration: "string", textindent: "number", thickness: "number", tintcolor: "string", totalframes: "number", transition: "string", unstretchedheight: "number", unstretchedwidth: "number", usegetbounds: "boolean", valign: "string", visibility: "string", visible: "boolean", width: "size", "with": "string", x: "numberExpression", xoffset: "numberExpression", xscale: "numberExpression", xscroll: "number", y: "numberExpression", yoffset: "numberExpression", yscale: "numberExpression", yscroll: "number"}}}, $lzc$class__mjy.attributes);}
}
