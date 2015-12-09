package {
dynamic class $lzc$class__mfk extends LzView {
/* -*- file: lz/window.lzx#55 -*- */
static var displayName = "<anonymous extends='view'>";static var children = [{attrs: {$CSSDescriptor: {}, $attributeDescriptor: {types: {applied: "boolean", classroot: "string", cloneManager: "string", datapath: "string", defaultplacement: "string", id: "ID", ignoreplacement: "boolean", immediateparent: "string", inited: "boolean", initstage: "string", name: "token", nodeLevel: "number", options: "css", parent: "string", placement: "string", pooling: "boolean", styleclass: "string", subnodes: "string", transition: "string", "with": "string"}}, $classrootdepth: 3, $mf8: function  ($0) {
/* -*- file: -*- */
with (this) {
/* -*- file: lz/window.lzx#55 -*- */
var $1 = !classroot._usecontentwidth;
/* -*- file: -*- */
if ($1 !== this["applied"] || !this.inited) {
this.setAttribute("applied", $1)
}}}
, $mf9: function  () {
with (this) {
try {
/* -*- file: lz/window.lzx#58 -*- */
return [classroot, "_usecontentwidth"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}}
, $mfa: function  ($0) {
with (this) {
/* -*- file: lz/window.lzx#56 -*- */
var $1 = parent.immediateparent.width - 2;
/* -*- file: -*- */
if ($1 !== this["width"] || !this.inited) {
this.setAttribute("width", $1)
}}}
, $mfb: function  () {
with (this) {
try {
/* -*- file: lz/window.lzx#59 -*- */
return [parent.immediateparent, "width"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}}
, applied: new LzAlwaysExpr("$mf8", "$mf9", null), width: new LzAlwaysExpr("$mfa", "$mfb", null)}, "class": LzState}, {attrs: {$CSSDescriptor: {}, $attributeDescriptor: {types: {applied: "boolean", classroot: "string", cloneManager: "string", datapath: "string", defaultplacement: "string", id: "ID", ignoreplacement: "boolean", immediateparent: "string", inited: "boolean", initstage: "string", name: "token", nodeLevel: "number", options: "css", parent: "string", placement: "string", pooling: "boolean", styleclass: "string", subnodes: "string", transition: "string", "with": "string"}}, $classrootdepth: 3, $mfc: function  ($0) {
with (this) {
/* -*- file: lz/window.lzx#58 -*- */
var $1 = !classroot._usecontentheight;
/* -*- file: -*- */
if ($1 !== this["applied"] || !this.inited) {
this.setAttribute("applied", $1)
}}}
, $mfd: function  () {
with (this) {
try {
/* -*- file: lz/window.lzx#61 -*- */
return [classroot, "_usecontentheight"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}}
, $mfe: function  ($0) {
with (this) {
/* -*- file: lz/window.lzx#62 -*- */
var $1 = parent.immediateparent.height - parent.immediateparent.menubar.height - parent.immediateparent.toolbar.height - 2;
/* -*- file: -*- */
if ($1 !== this["height"] || !this.inited) {
this.setAttribute("height", $1)
}}}
, $mff: function  () {
with (this) {
try {
/* -*- file: lz/window.lzx#65 -*- */
return [parent.immediateparent, "height", parent.immediateparent.menubar, "height", parent.immediateparent.toolbar, "height"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}}
, applied: new LzAlwaysExpr("$mfc", "$mfd", null), height: new LzAlwaysExpr("$mfe", "$mff", null)}, "class": LzState}];static var attributes = new LzInheritedHash(LzView.attributes);function $mf6 ($0) {
/* -*- file: lz/window.lzx#54 -*- */
var $1 = classroot.content.bgcolor;
/* -*- file: -*- */
if ($1 !== this["bgcolor"] || !this.inited) {
this.setAttribute("bgcolor", $1)
}}
/* -*- file: lz/window.lzx#54 -*- */
function $mf7 () {
/* -*- file: -*- */
try {
/* -*- file: lz/window.lzx#57 -*- */
return [classroot.content, "bgcolor"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
var $classrootdepth;function $lzc$class__mfk ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
LzNode.mergeAttributes({$CSSDescriptor: {}, $attributeDescriptor: {types: {aaactive: "boolean", aadescription: "string", aaname: "string", aasilent: "boolean", aatabindex: "number", align: "string", backgroundrepeat: "string", bgcolor: "color", cachebitmap: "boolean", capabilities: "string", classroot: "string", clickable: "boolean", clickregion: "string", clip: "boolean", cloneManager: "string", contextmenu: "string", cornerradius: "string", cursor: "token", datapath: "string", defaultplacement: "string", fgcolor: "color", focusable: "boolean", focustrap: "boolean", font: "string", fontsize: "size", fontstyle: "string", frame: "numberExpression", framesloadratio: "number", hasdirectionallayout: "boolean", hassetheight: "boolean", hassetwidth: "boolean", height: "size", id: "ID", ignoreplacement: "boolean", immediateparent: "string", inited: "boolean", initstage: "string", layout: "css", loadratio: "number", mask: "string", name: "token", nodeLevel: "number", opacity: "number", options: "css", parent: "string", pixellock: "boolean", placement: "string", playing: "boolean", resource: "string", resourceheight: "number", resourcewidth: "number", rotation: "numberExpression", shadowangle: "number", shadowblurradius: "number", shadowcolor: "color", shadowdistance: "number", showhandcursor: "boolean", source: "string", stretches: "string", styleclass: "string", subnodes: "string", subviews: "string", tintcolor: "string", totalframes: "number", transition: "string", unstretchedheight: "number", unstretchedwidth: "number", usegetbounds: "boolean", valign: "string", visibility: "string", visible: "boolean", width: "size", "with": "string", x: "numberExpression", xoffset: "numberExpression", xscale: "numberExpression", y: "numberExpression", yoffset: "numberExpression", yscale: "numberExpression"}}}, $lzc$class__mfk.attributes);}
}
