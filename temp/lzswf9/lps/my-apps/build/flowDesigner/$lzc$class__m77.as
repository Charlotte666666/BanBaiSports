package {
dynamic class $lzc$class__m77 extends LzView {
/* -*- file: lz/floatinglist.lzx#108 -*- */
static var displayName = "<anonymous extends='view'>";static var children = [{attrs: {$classrootdepth: 2, bottomvisible: new LzAlwaysExpr("$m6o", "$m6p", null), cornerresourcenumber: new LzAlwaysExpr("$m6s", "$m6t", null), height: new LzAlwaysExpr("$m6w", "$m6x", null), name: "shdw", offsety: new LzAlwaysExpr("$m6q", "$m6r", null), opacity: 0.6, width: new LzAlwaysExpr("$m6u", "$m6v", null)}, "class": $lzc$class__m78}, {attrs: {$classrootdepth: 2, bgcolor: 8421504, height: new LzAlwaysExpr("$m70", "$m71", null), name: "borderview", width: new LzAlwaysExpr("$m6y", "$m6z", null)}, "class": $lzc$class__m79}];static var attributes = new LzInheritedHash(LzView.attributes);function $m6k ($0) {
/* -*- file: #107 -*- */
var $1 = immediateparent.width;
/* -*- file: -*- */
if ($1 !== this["width"] || !this.inited) {
this.setAttribute("width", $1)
}}
/* -*- file: lz/floatinglist.lzx#107 -*- */
function $m6l () {
/* -*- file: -*- */
try {
/* -*- file: lz/floatinglist.lzx#110 -*- */
return [immediateparent, "width"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
/* -*- file: lz/floatinglist.lzx#107 -*- */
function $m6m ($0) {
/* -*- file: #107 -*- */
var $1 = immediateparent.height;
/* -*- file: -*- */
if ($1 !== this["height"] || !this.inited) {
this.setAttribute("height", $1)
}}
/* -*- file: lz/floatinglist.lzx#107 -*- */
function $m6n () {
/* -*- file: -*- */
try {
/* -*- file: lz/floatinglist.lzx#110 -*- */
return [immediateparent, "height"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
var shdw;var borderview;var $classrootdepth;function $lzc$class__m77 ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
LzNode.mergeAttributes({$CSSDescriptor: {}, $attributeDescriptor: {types: {aaactive: "boolean", aadescription: "string", aaname: "string", aasilent: "boolean", aatabindex: "number", align: "string", backgroundrepeat: "string", bgcolor: "color", cachebitmap: "boolean", capabilities: "string", classroot: "string", clickable: "boolean", clickregion: "string", clip: "boolean", cloneManager: "string", contextmenu: "string", cornerradius: "string", cursor: "token", datapath: "string", defaultplacement: "string", fgcolor: "color", focusable: "boolean", focustrap: "boolean", font: "string", fontsize: "size", fontstyle: "string", frame: "numberExpression", framesloadratio: "number", hasdirectionallayout: "boolean", hassetheight: "boolean", hassetwidth: "boolean", height: "size", id: "ID", ignoreplacement: "boolean", immediateparent: "string", inited: "boolean", initstage: "string", layout: "css", loadratio: "number", mask: "string", name: "token", nodeLevel: "number", opacity: "number", options: "css", parent: "string", pixellock: "boolean", placement: "string", playing: "boolean", resource: "string", resourceheight: "number", resourcewidth: "number", rotation: "numberExpression", shadowangle: "number", shadowblurradius: "number", shadowcolor: "color", shadowdistance: "number", showhandcursor: "boolean", source: "string", stretches: "string", styleclass: "string", subnodes: "string", subviews: "string", tintcolor: "string", totalframes: "number", transition: "string", unstretchedheight: "number", unstretchedwidth: "number", usegetbounds: "boolean", valign: "string", visibility: "string", visible: "boolean", width: "size", "with": "string", x: "numberExpression", xoffset: "numberExpression", xscale: "numberExpression", y: "numberExpression", yoffset: "numberExpression", yscale: "numberExpression"}}}, $lzc$class__m77.attributes);}
}
