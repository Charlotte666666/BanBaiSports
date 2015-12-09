package {
dynamic class $lzc$class__mjb extends LzText {
/* -*- file: common/components/EditCombobox.lzx#107 -*- */
static var displayName = "<anonymous extends='text'>";static var children = [{attrs: {$classrootdepth: 2, $delegates: ["onselect", "$mj1", null], attach: "bottom", name: "cblist", visible: false, width: new LzAlwaysExpr("$miz", "$mj0", null)}, "class": $lzc$class__mjc}];static var attributes = new LzInheritedHash(LzText.attributes);function $mir ($0) {
/* -*- file: #106 -*- */
var $1 = parent.isEnabled;
/* -*- file: -*- */
if ($1 !== this["visible"] || !this.inited) {
this.setAttribute("visible", $1)
}}
/* -*- file: common/components/EditCombobox.lzx#106 -*- */
function $mis () {
/* -*- file: -*- */
try {
/* -*- file: common/components/EditCombobox.lzx#109 -*- */
return [parent, "isEnabled"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
/* -*- file: common/components/EditCombobox.lzx#106 -*- */
function $mit ($0) {
/* -*- file: #106 -*- */
var $1 = parent.width - parent.label.width - 6;
/* -*- file: -*- */
if ($1 !== this["width"] || !this.inited) {
this.setAttribute("width", $1)
}}
/* -*- file: common/components/EditCombobox.lzx#106 -*- */
function $miu () {
/* -*- file: -*- */
try {
/* -*- file: common/components/EditCombobox.lzx#109 -*- */
return [parent, "width", parent.label, "width"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
/* -*- file: common/components/EditCombobox.lzx#107 -*- */
function $miv ($0) {
/* -*- file: #107 -*- */
this.setAttribute("_blurDel", new (lz.Delegate)(this, "doBlur"))
}
/* -*- file: -*- */
var _blurDel;function $miw ($0) {
/* -*- file: common/components/EditCombobox.lzx#110 -*- */
classroot.onchange.sendEvent($0)
}

function $mix ($0) {
if ($0 == 13) this.onclick.sendEvent()
}

function $miy ($0) {
if (!parent.isEnabled) return;
this.cblist.setAttribute("visible", true);
this._blurDel.unregisterAll();
this._blurDel.register(lz.GlobalMouse, "onclick")
}

function doBlur ($0) {
if (!$0.childOf(this)) {
this.cblist.setAttribute("visible", false);
this._blurDel.unregisterAll()
}}
/* -*- file: -*- */
var cblist;var $classrootdepth;function $lzc$class__mjb ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
LzNode.mergeAttributes({$CSSDescriptor: {}, $attributeDescriptor: {types: {_blurDel: "lz.Delegate", aaactive: "boolean", aadescription: "string", aaname: "string", aasilent: "boolean", aatabindex: "number", align: "string", antiAliasType: "string", backgroundrepeat: "string", bgcolor: "color", cachebitmap: "boolean", capabilities: "string", cdata: "cdata", classroot: "string", clickable: "boolean", clickregion: "string", clip: "boolean", cloneManager: "string", contextmenu: "string", cornerradius: "string", cursor: "token", datapath: "string", defaultplacement: "string", direction: "string", embedfonts: "boolean", fgcolor: "color", focusable: "boolean", focustrap: "boolean", font: "string", fontsize: "size", fontstyle: "string", frame: "numberExpression", framesloadratio: "number", gridFit: "string", hasdirectionallayout: "boolean", hassetheight: "boolean", hassetwidth: "boolean", height: "size", hscroll: "number", id: "ID", ignoreplacement: "boolean", immediateparent: "string", inited: "boolean", initstage: "string", layout: "css", letterspacing: "number", lineheight: "number", loadratio: "number", mask: "string", maxhscroll: "number", maxlength: "numberExpression", maxscroll: "number", multiline: "boolean", name: "token", nodeLevel: "number", opacity: "number", options: "css", parent: "string", pattern: "string", pixellock: "boolean", placement: "string", playing: "boolean", resize: "boolean", resource: "string", resourceheight: "number", resourcewidth: "number", rotation: "numberExpression", scroll: "number", scrollevents: "boolean", scrollheight: "number", scrollwidth: "number", selectable: "boolean", shadowangle: "number", shadowblurradius: "number", shadowcolor: "color", shadowdistance: "number", sharpness: "number", showhandcursor: "boolean", source: "string", stretches: "string", styleclass: "string", subnodes: "string", subviews: "string", text: "html", textalign: "string", textdecoration: "string", textindent: "number", thickness: "number", tintcolor: "string", totalframes: "number", transition: "string", unstretchedheight: "number", unstretchedwidth: "number", usegetbounds: "boolean", valign: "string", visibility: "string", visible: "boolean", width: "size", "with": "string", x: "numberExpression", xoffset: "numberExpression", xscale: "numberExpression", xscroll: "number", y: "numberExpression", yoffset: "numberExpression", yscale: "numberExpression", yscroll: "number"}}}, $lzc$class__mjb.attributes);}
}
