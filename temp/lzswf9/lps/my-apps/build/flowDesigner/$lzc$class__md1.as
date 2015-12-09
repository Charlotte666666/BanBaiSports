package {
dynamic class $lzc$class__md1 extends LzView {
/* -*- file: lz/windowpanel.lzx#198 -*- */
static var displayName = "<anonymous extends='view'>";static var children = [{attrs: {$classrootdepth: 2, name: "titlelayout"}, "class": $lzc$class__md2}, {attrs: {$classrootdepth: 2, clip: true, frame: new LzAlwaysExpr("$mc5", "$mc6", null), name: "gripper_left", resource: "window_gripper_rsc", width: 16, y: 1}, "class": $lzc$class__md3}, {attrs: {$CSSDescriptor: {}, $attributeDescriptor: {types: {aaactive: "boolean", aadescription: "string", aaname: "string", aasilent: "boolean", aatabindex: "number", align: "string", backgroundrepeat: "string", bgcolor: "color", cachebitmap: "boolean", capabilities: "string", classroot: "string", clickable: "boolean", clickregion: "string", clip: "boolean", cloneManager: "string", contextmenu: "string", cornerradius: "string", cursor: "token", datapath: "string", defaultplacement: "string", fgcolor: "color", focusable: "boolean", focustrap: "boolean", font: "string", fontsize: "size", fontstyle: "string", frame: "numberExpression", framesloadratio: "number", hasdirectionallayout: "boolean", hassetheight: "boolean", hassetwidth: "boolean", height: "size", id: "ID", ignoreplacement: "boolean", immediateparent: "string", inited: "boolean", initstage: "string", layout: "css", loadratio: "number", mask: "string", name: "token", nodeLevel: "number", opacity: "number", options: "css", parent: "string", pixellock: "boolean", placement: "string", playing: "boolean", resource: "string", resourceheight: "number", resourcewidth: "number", rotation: "numberExpression", shadowangle: "number", shadowblurradius: "number", shadowcolor: "color", shadowdistance: "number", showhandcursor: "boolean", source: "string", stretches: "string", styleclass: "string", subnodes: "string", subviews: "string", tintcolor: "string", totalframes: "number", transition: "string", unstretchedheight: "number", unstretchedwidth: "number", usegetbounds: "boolean", valign: "string", visibility: "string", visible: "boolean", width: "size", "with": "string", x: "numberExpression", xoffset: "numberExpression", xscale: "numberExpression", y: "numberExpression", yoffset: "numberExpression", yscale: "numberExpression"}}, $classrootdepth: 2, name: "icon"}, "class": LzView}, {attrs: {$classrootdepth: 2, fgcolor: new LzAlwaysExpr("$mc7", "$mc8", null), name: "title", opacity: new LzAlwaysExpr("$mc9", "$mca", null), resize: false, text: new LzAlwaysExpr("$mcb", "$mcc", null), width: new LzAlwaysExpr("$mcd", "$mce", null), y: -1}, "class": $lzc$class__md4}, {attrs: {$classrootdepth: 2, clip: true, frame: new LzAlwaysExpr("$mcf", "$mcg", null), name: "gripper_right", resource: "window_gripper_rsc", y: 1}, "class": $lzc$class__md5}, {attrs: {$CSSDescriptor: {}, $attributeDescriptor: {types: {aaactive: "boolean", aadescription: "string", aaname: "string", aasilent: "boolean", aatabindex: "number", align: "string", backgroundrepeat: "string", bgcolor: "color", cachebitmap: "boolean", capabilities: "string", classroot: "string", clickable: "boolean", clickregion: "string", clip: "boolean", cloneManager: "string", contextmenu: "string", cornerradius: "string", cursor: "token", datapath: "string", defaultplacement: "string", fgcolor: "color", focusable: "boolean", focustrap: "boolean", font: "string", fontsize: "size", fontstyle: "string", frame: "numberExpression", framesloadratio: "number", hasdirectionallayout: "boolean", hassetheight: "boolean", hassetwidth: "boolean", height: "size", id: "ID", ignoreplacement: "boolean", immediateparent: "string", inited: "boolean", initstage: "string", layout: "css", loadratio: "number", mask: "string", name: "token", nodeLevel: "number", opacity: "number", options: "css", parent: "string", pixellock: "boolean", placement: "string", playing: "boolean", resource: "string", resourceheight: "number", resourcewidth: "number", rotation: "numberExpression", shadowangle: "number", shadowblurradius: "number", shadowcolor: "color", shadowdistance: "number", showhandcursor: "boolean", source: "string", stretches: "string", styleclass: "string", subnodes: "string", subviews: "string", tintcolor: "string", totalframes: "number", transition: "string", unstretchedheight: "number", unstretchedwidth: "number", usegetbounds: "boolean", valign: "string", visibility: "string", visible: "boolean", width: "size", "with": "string", x: "numberExpression", xoffset: "numberExpression", xscale: "numberExpression", y: "numberExpression", yoffset: "numberExpression", yscale: "numberExpression"}}, $classrootdepth: 2, close_btn: void 0, closeable: void 0, name: "controls"}, children: [{attrs: {$CSSDescriptor: {}, $attributeDescriptor: {types: {applied: "boolean", classroot: "string", cloneManager: "string", datapath: "string", defaultplacement: "string", id: "ID", ignoreplacement: "boolean", immediateparent: "string", inited: "boolean", initstage: "string", name: "token", nodeLevel: "number", options: "css", parent: "string", placement: "string", pooling: "boolean", styleclass: "string", subnodes: "string", transition: "string", "with": "string"}}, $classrootdepth: 3, $mch: function  ($0) {
/* -*- file: -*- */
with (this) {
/* -*- file: lz/windowpanel.lzx#262 -*- */
var $1 = classroot.closeable;
/* -*- file: -*- */
if ($1 !== this["applied"] || !this.inited) {
this.setAttribute("applied", $1)
}}}
, $mci: function  () {
with (this) {
try {
/* -*- file: lz/windowpanel.lzx#265 -*- */
return [classroot, "closeable"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}}
, applied: new LzAlwaysExpr("$mch", "$mci", null), close_btn: void 0, name: "closeable"}, children: [{attrs: {$classrootdepth: 3, $delegates: ["onclick", "$mcj", null], clickable: true, name: "close_btn", resource: "window_closebtn_rsc", styleable: true, x: 2}, "class": $lzc$class__md6}], "class": LzState}], "class": LzView}];static var attributes = new LzInheritedHash(LzView.attributes);function $mbz ($0) {
/* -*- file: lz/windowpanel.lzx#197 -*- */
var $1 = classroot.inset_left;
/* -*- file: -*- */
if ($1 !== this["x"] || !this.inited) {
this.setAttribute("x", $1)
}}
/* -*- file: lz/windowpanel.lzx#197 -*- */
function $mc0 () {
/* -*- file: -*- */
try {
/* -*- file: lz/windowpanel.lzx#200 -*- */
return [classroot, "inset_left"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
/* -*- file: lz/windowpanel.lzx#197 -*- */
function $mc1 ($0) {
/* -*- file: #197 -*- */
var $1 = classroot.titlearea_inset_top;
/* -*- file: -*- */
if ($1 !== this["y"] || !this.inited) {
this.setAttribute("y", $1)
}}
/* -*- file: lz/windowpanel.lzx#197 -*- */
function $mc2 () {
/* -*- file: -*- */
try {
/* -*- file: lz/windowpanel.lzx#200 -*- */
return [classroot, "titlearea_inset_top"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
/* -*- file: lz/windowpanel.lzx#197 -*- */
function $mc3 ($0) {
/* -*- file: #197 -*- */
var $1 = classroot.width - classroot.inset_left - classroot.inset_right;
/* -*- file: -*- */
if ($1 !== this["width"] || !this.inited) {
this.setAttribute("width", $1)
}}
/* -*- file: lz/windowpanel.lzx#197 -*- */
function $mc4 () {
/* -*- file: -*- */
try {
/* -*- file: lz/windowpanel.lzx#200 -*- */
return [classroot, "width", classroot, "inset_left", classroot, "inset_right"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
var titlelayout;var gripper_left;var icon;var title;var gripper_right;var controls;var $classrootdepth;function $lzc$class__md1 ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
LzNode.mergeAttributes({$CSSDescriptor: {}, $attributeDescriptor: {types: {aaactive: "boolean", aadescription: "string", aaname: "string", aasilent: "boolean", aatabindex: "number", align: "string", backgroundrepeat: "string", bgcolor: "color", cachebitmap: "boolean", capabilities: "string", classroot: "string", clickable: "boolean", clickregion: "string", clip: "boolean", cloneManager: "string", contextmenu: "string", cornerradius: "string", cursor: "token", datapath: "string", defaultplacement: "string", fgcolor: "color", focusable: "boolean", focustrap: "boolean", font: "string", fontsize: "size", fontstyle: "string", frame: "numberExpression", framesloadratio: "number", hasdirectionallayout: "boolean", hassetheight: "boolean", hassetwidth: "boolean", height: "size", id: "ID", ignoreplacement: "boolean", immediateparent: "string", inited: "boolean", initstage: "string", layout: "css", loadratio: "number", mask: "string", name: "token", nodeLevel: "number", opacity: "number", options: "css", parent: "string", pixellock: "boolean", placement: "string", playing: "boolean", resource: "string", resourceheight: "number", resourcewidth: "number", rotation: "numberExpression", shadowangle: "number", shadowblurradius: "number", shadowcolor: "color", shadowdistance: "number", showhandcursor: "boolean", source: "string", stretches: "string", styleclass: "string", subnodes: "string", subviews: "string", tintcolor: "string", totalframes: "number", transition: "string", unstretchedheight: "number", unstretchedwidth: "number", usegetbounds: "boolean", valign: "string", visibility: "string", visible: "boolean", width: "size", "with": "string", x: "numberExpression", xoffset: "numberExpression", xscale: "numberExpression", y: "numberExpression", yoffset: "numberExpression", yscale: "numberExpression"}}}, $lzc$class__md1.attributes);}
}
