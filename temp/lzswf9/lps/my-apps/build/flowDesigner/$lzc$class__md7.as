package {
dynamic class $lzc$class__md7 extends LzView {
/* -*- file: lz/windowpanel.lzx#273 -*- */
static var displayName = "<anonymous extends='view'>";static var children = [{attrs: {$CSSDescriptor: {}, $attributeDescriptor: {types: {applied: "boolean", classroot: "string", cloneManager: "string", datapath: "string", defaultplacement: "string", id: "ID", ignoreplacement: "boolean", immediateparent: "string", inited: "boolean", initstage: "string", name: "token", nodeLevel: "number", options: "css", parent: "string", placement: "string", pooling: "boolean", styleclass: "string", subnodes: "string", transition: "string", "with": "string"}}, $classrootdepth: 2, $mcq: function  ($0) {
/* -*- file: -*- */
with (this) {
/* -*- file: lz/windowpanel.lzx#273 -*- */
var $1 = !classroot._usecontentwidth;
/* -*- file: -*- */
if ($1 !== this["applied"] || !this.inited) {
this.setAttribute("applied", $1)
}}}
, $mcr: function  () {
with (this) {
try {
/* -*- file: lz/windowpanel.lzx#276 -*- */
return [classroot, "_usecontentwidth"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}}
, $mcs: function  ($0) {
with (this) {
/* -*- file: lz/windowpanel.lzx#274 -*- */
var $1 = classroot.width - classroot.inset_left - classroot.inset_right;
/* -*- file: -*- */
if ($1 !== this["width"] || !this.inited) {
this.setAttribute("width", $1)
}}}
, $mct: function  () {
with (this) {
try {
/* -*- file: lz/windowpanel.lzx#277 -*- */
return [classroot, "width", classroot, "inset_left", classroot, "inset_right"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}}
, applied: new LzAlwaysExpr("$mcq", "$mcr", null), width: new LzAlwaysExpr("$mcs", "$mct", null)}, "class": LzState}, {attrs: {$CSSDescriptor: {}, $attributeDescriptor: {types: {applied: "boolean", classroot: "string", cloneManager: "string", datapath: "string", defaultplacement: "string", id: "ID", ignoreplacement: "boolean", immediateparent: "string", inited: "boolean", initstage: "string", name: "token", nodeLevel: "number", options: "css", parent: "string", placement: "string", pooling: "boolean", styleclass: "string", subnodes: "string", transition: "string", "with": "string"}}, $classrootdepth: 2, $mcu: function  ($0) {
with (this) {
/* -*- file: lz/windowpanel.lzx#276 -*- */
var $1 = !classroot._usecontentheight;
/* -*- file: -*- */
if ($1 !== this["applied"] || !this.inited) {
this.setAttribute("applied", $1)
}}}
, $mcv: function  () {
with (this) {
try {
/* -*- file: lz/windowpanel.lzx#279 -*- */
return [classroot, "_usecontentheight"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}}
, $mcw: function  ($0) {
with (this) {
/* -*- file: lz/windowpanel.lzx#277 -*- */
var $1 = classroot.height - classroot.inset_bottom - classroot.inset_top;
/* -*- file: -*- */
if ($1 !== this["height"] || !this.inited) {
this.setAttribute("height", $1)
}}}
, $mcx: function  () {
with (this) {
try {
/* -*- file: lz/windowpanel.lzx#280 -*- */
return [classroot, "height", classroot, "inset_bottom", classroot, "inset_top"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}}
, applied: new LzAlwaysExpr("$mcu", "$mcv", null), height: new LzAlwaysExpr("$mcw", "$mcx", null)}, "class": LzState}];static var attributes = new LzInheritedHash(LzView.attributes);function $mck ($0) {
/* -*- file: lz/windowpanel.lzx#272 -*- */
var $1 = parent.inset_left;
/* -*- file: -*- */
if ($1 !== this["x"] || !this.inited) {
this.setAttribute("x", $1)
}}
/* -*- file: lz/windowpanel.lzx#272 -*- */
function $mcl () {
/* -*- file: -*- */
try {
/* -*- file: lz/windowpanel.lzx#275 -*- */
return [parent, "inset_left"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
/* -*- file: lz/windowpanel.lzx#272 -*- */
function $mcm ($0) {
/* -*- file: #272 -*- */
var $1 = parent.inset_top;
/* -*- file: -*- */
if ($1 !== this["y"] || !this.inited) {
this.setAttribute("y", $1)
}}
/* -*- file: lz/windowpanel.lzx#272 -*- */
function $mcn () {
/* -*- file: -*- */
try {
/* -*- file: lz/windowpanel.lzx#275 -*- */
return [parent, "inset_top"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
/* -*- file: lz/windowpanel.lzx#272 -*- */
function $mco ($0) {
/* -*- file: #272 -*- */
var $1 = classroot.bgcolor;
/* -*- file: -*- */
if ($1 !== this["bgcolor"] || !this.inited) {
this.setAttribute("bgcolor", $1)
}}
/* -*- file: lz/windowpanel.lzx#272 -*- */
function $mcp () {
/* -*- file: -*- */
try {
/* -*- file: lz/windowpanel.lzx#275 -*- */
return [classroot, "bgcolor"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
var $classrootdepth;function $lzc$class__md7 ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
LzNode.mergeAttributes({$CSSDescriptor: {}, $attributeDescriptor: {types: {aaactive: "boolean", aadescription: "string", aaname: "string", aasilent: "boolean", aatabindex: "number", align: "string", backgroundrepeat: "string", bgcolor: "color", cachebitmap: "boolean", capabilities: "string", classroot: "string", clickable: "boolean", clickregion: "string", clip: "boolean", cloneManager: "string", contextmenu: "string", cornerradius: "string", cursor: "token", datapath: "string", defaultplacement: "string", fgcolor: "color", focusable: "boolean", focustrap: "boolean", font: "string", fontsize: "size", fontstyle: "string", frame: "numberExpression", framesloadratio: "number", hasdirectionallayout: "boolean", hassetheight: "boolean", hassetwidth: "boolean", height: "size", id: "ID", ignoreplacement: "boolean", immediateparent: "string", inited: "boolean", initstage: "string", layout: "css", loadratio: "number", mask: "string", name: "token", nodeLevel: "number", opacity: "number", options: "css", parent: "string", pixellock: "boolean", placement: "string", playing: "boolean", resource: "string", resourceheight: "number", resourcewidth: "number", rotation: "numberExpression", shadowangle: "number", shadowblurradius: "number", shadowcolor: "color", shadowdistance: "number", showhandcursor: "boolean", source: "string", stretches: "string", styleclass: "string", subnodes: "string", subviews: "string", tintcolor: "string", totalframes: "number", transition: "string", unstretchedheight: "number", unstretchedwidth: "number", usegetbounds: "boolean", valign: "string", visibility: "string", visible: "boolean", width: "size", "with": "string", x: "numberExpression", xoffset: "numberExpression", xscale: "numberExpression", y: "numberExpression", yoffset: "numberExpression", yscale: "numberExpression"}}}, $lzc$class__md7.attributes);}
}
