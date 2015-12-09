package {
dynamic class $lzc$class__mdt extends LzView {
/* -*- file: lz/modaldialog.lzx#34 -*- */
static var displayName = "<anonymous extends='view'>";static var children = [{attrs: {$CSSDescriptor: {}, $attributeDescriptor: {types: {applied: "boolean", classroot: "string", cloneManager: "string", datapath: "string", defaultplacement: "string", id: "ID", ignoreplacement: "boolean", immediateparent: "string", inited: "boolean", initstage: "string", name: "token", nodeLevel: "number", options: "css", parent: "string", placement: "string", pooling: "boolean", styleclass: "string", subnodes: "string", transition: "string", "with": "string"}}, $classrootdepth: 3, $mdk: function  ($0) {
/* -*- file: -*- */
with (this) {
/* -*- file: lz/modaldialog.lzx#34 -*- */
var $1 = !classroot._usecontentwidth;
/* -*- file: -*- */
if ($1 !== this["applied"] || !this.inited) {
this.setAttribute("applied", $1)
}}}
, $mdl: function  () {
with (this) {
try {
/* -*- file: lz/modaldialog.lzx#37 -*- */
return [classroot, "_usecontentwidth"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}}
, $mdm: function  ($0) {
with (this) {
/* -*- file: lz/modaldialog.lzx#36 -*- */
var $1 = parent.immediateparent.width - classroot.content_inset_left - classroot.content_inset_right;
/* -*- file: -*- */
if ($1 !== this["width"] || !this.inited) {
this.setAttribute("width", $1)
}}}
, $mdn: function  () {
with (this) {
try {
/* -*- file: lz/modaldialog.lzx#39 -*- */
return [parent.immediateparent, "width", classroot, "content_inset_left", classroot, "content_inset_right"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}}
, applied: new LzAlwaysExpr("$mdk", "$mdl", null), width: new LzAlwaysExpr("$mdm", "$mdn", null)}, "class": LzState}, {attrs: {$CSSDescriptor: {}, $attributeDescriptor: {types: {applied: "boolean", classroot: "string", cloneManager: "string", datapath: "string", defaultplacement: "string", id: "ID", ignoreplacement: "boolean", immediateparent: "string", inited: "boolean", initstage: "string", name: "token", nodeLevel: "number", options: "css", parent: "string", placement: "string", pooling: "boolean", styleclass: "string", subnodes: "string", transition: "string", "with": "string"}}, $classrootdepth: 3, $mdo: function  ($0) {
with (this) {
/* -*- file: lz/modaldialog.lzx#38 -*- */
var $1 = !classroot._usecontentheight;
/* -*- file: -*- */
if ($1 !== this["applied"] || !this.inited) {
this.setAttribute("applied", $1)
}}}
, $mdp: function  () {
with (this) {
try {
/* -*- file: lz/modaldialog.lzx#41 -*- */
return [classroot, "_usecontentheight"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}}
, $mdq: function  ($0) {
with (this) {
/* -*- file: lz/modaldialog.lzx#41 -*- */
var $1 = parent.immediateparent.height - classroot.content_inset_top - classroot.content_inset_bottom;
/* -*- file: -*- */
if ($1 !== this["height"] || !this.inited) {
this.setAttribute("height", $1)
}}}
, $mdr: function  () {
with (this) {
try {
/* -*- file: lz/modaldialog.lzx#44 -*- */
return [parent.immediateparent, "height", classroot, "content_inset_top", classroot, "content_inset_bottom"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}}
, applied: new LzAlwaysExpr("$mdo", "$mdp", null), height: new LzAlwaysExpr("$mdq", "$mdr", null)}, "class": LzState}];static var attributes = new LzInheritedHash(LzView.attributes);function $mdg ($0) {
/* -*- file: lz/modaldialog.lzx#33 -*- */
var $1 = classroot.content_inset_left;
/* -*- file: -*- */
if ($1 !== this["x"] || !this.inited) {
this.setAttribute("x", $1)
}}
/* -*- file: lz/modaldialog.lzx#33 -*- */
function $mdh () {
/* -*- file: -*- */
try {
/* -*- file: lz/modaldialog.lzx#36 -*- */
return [classroot, "content_inset_left"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
/* -*- file: lz/modaldialog.lzx#33 -*- */
function $mdi ($0) {
/* -*- file: #33 -*- */
var $1 = classroot.content_inset_top;
/* -*- file: -*- */
if ($1 !== this["y"] || !this.inited) {
this.setAttribute("y", $1)
}}
/* -*- file: lz/modaldialog.lzx#33 -*- */
function $mdj () {
/* -*- file: -*- */
try {
/* -*- file: lz/modaldialog.lzx#36 -*- */
return [classroot, "content_inset_top"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
var $classrootdepth;function $lzc$class__mdt ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
LzNode.mergeAttributes({$CSSDescriptor: {}, $attributeDescriptor: {types: {aaactive: "boolean", aadescription: "string", aaname: "string", aasilent: "boolean", aatabindex: "number", align: "string", backgroundrepeat: "string", bgcolor: "color", cachebitmap: "boolean", capabilities: "string", classroot: "string", clickable: "boolean", clickregion: "string", clip: "boolean", cloneManager: "string", contextmenu: "string", cornerradius: "string", cursor: "token", datapath: "string", defaultplacement: "string", fgcolor: "color", focusable: "boolean", focustrap: "boolean", font: "string", fontsize: "size", fontstyle: "string", frame: "numberExpression", framesloadratio: "number", hasdirectionallayout: "boolean", hassetheight: "boolean", hassetwidth: "boolean", height: "size", id: "ID", ignoreplacement: "boolean", immediateparent: "string", inited: "boolean", initstage: "string", layout: "css", loadratio: "number", mask: "string", name: "token", nodeLevel: "number", opacity: "number", options: "css", parent: "string", pixellock: "boolean", placement: "string", playing: "boolean", resource: "string", resourceheight: "number", resourcewidth: "number", rotation: "numberExpression", shadowangle: "number", shadowblurradius: "number", shadowcolor: "color", shadowdistance: "number", showhandcursor: "boolean", source: "string", stretches: "string", styleclass: "string", subnodes: "string", subviews: "string", tintcolor: "string", totalframes: "number", transition: "string", unstretchedheight: "number", unstretchedwidth: "number", usegetbounds: "boolean", valign: "string", visibility: "string", visible: "boolean", width: "size", "with": "string", x: "numberExpression", xoffset: "numberExpression", xscale: "numberExpression", y: "numberExpression", yoffset: "numberExpression", yscale: "numberExpression"}}}, $lzc$class__mdt.attributes);}
}
