package {
dynamic class $lzc$class__m8r extends LzView {
/* -*- file: base/basecombobox.lzx#129 -*- */
static var displayName = "<anonymous extends='view'>";static var children = [{attrs: {$CSSDescriptor: {}, $attributeDescriptor: {types: {applied: "boolean", classroot: "string", cloneManager: "string", datapath: "string", defaultplacement: "string", id: "ID", ignoreplacement: "boolean", immediateparent: "string", inited: "boolean", initstage: "string", name: "token", nodeLevel: "number", options: "css", parent: "string", placement: "string", pooling: "boolean", styleclass: "string", subnodes: "string", transition: "string", "with": "string"}}, $classrootdepth: 2, cbtext: void 0, editbkgnd: void 0, name: "editable_state"}, children: [{attrs: {$classrootdepth: 2, bgcolor: 16777215, height: new LzAlwaysExpr("$m7p", "$m7q", null), name: "editbkgnd", width: new LzAlwaysExpr("$m7n", "$m7o", null)}, "class": $lzc$class__m8s}, {attrs: {$classrootdepth: 2, $delegates: ["onkeydown", "$m7s", null, "onfocus", "$m7t", null, "onblur", "$m7u", null, "onkeyup", "$m7v", null, "onkeydown", "$m7w", null], name: "cbtext", width: new LzOnceExpr("$m7r", null), x: 2, y: 1}, "class": $lzc$class__m8t}], "class": LzState}, {attrs: {$CSSDescriptor: {}, $attributeDescriptor: {types: {applied: "boolean", classroot: "string", cloneManager: "string", datapath: "string", defaultplacement: "string", id: "ID", ignoreplacement: "boolean", immediateparent: "string", inited: "boolean", initstage: "string", name: "token", nodeLevel: "number", options: "css", parent: "string", placement: "string", pooling: "boolean", styleclass: "string", subnodes: "string", transition: "string", "with": "string"}}, $classrootdepth: 2, cbtext: void 0, name: "non_editable_state"}, children: [{attrs: {$classrootdepth: 2, $delegates: ["onkeydown", "$m7z", null, "onmouseup", "$m80", null, "onfocus", "$m81", null, "onblur", "$m82", null, "onkeyup", "$m83", null, "onkeydown", "$m84", null], clickable: true, focusable: true, name: "cbtext", width: new LzAlwaysExpr("$m7x", "$m7y", null), x: 2, y: 1}, "class": $lzc$class__m8u}], "class": LzState}];static var attributes = new LzInheritedHash(LzView.attributes);function $m7h ($0) {
/* -*- file: #128 -*- */
this.setAttribute("x", classroot.text_x)
}
/* -*- file: #128 -*- */
function $m7i ($0) {
/* -*- file: #128 -*- */
this.setAttribute("y", classroot.text_y)
}
/* -*- file: #128 -*- */
function $m7j ($0) {
/* -*- file: #128 -*- */
var $1 = classroot.text_width;
/* -*- file: -*- */
if ($1 !== this["width"] || !this.inited) {
this.setAttribute("width", $1)
}}
/* -*- file: base/basecombobox.lzx#128 -*- */
function $m7k () {
/* -*- file: -*- */
try {
/* -*- file: base/basecombobox.lzx#131 -*- */
return [classroot, "text_width"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
/* -*- file: base/basecombobox.lzx#128 -*- */
function $m7l ($0) {
/* -*- file: #128 -*- */
var $1 = classroot.height - 2 * classroot.bordersize - 2;
/* -*- file: -*- */
if ($1 !== this["height"] || !this.inited) {
this.setAttribute("height", $1)
}}
/* -*- file: base/basecombobox.lzx#128 -*- */
function $m7m () {
/* -*- file: -*- */
try {
/* -*- file: base/basecombobox.lzx#131 -*- */
return [classroot, "height", classroot, "bordersize"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
var _dsblfield;function setupText () {
/* -*- file: base/basecombobox.lzx#133 -*- */
var $0 = classroot.cblist.getText();
if (!$0) {
if (classroot.defaultselection) {
if (classroot.cblist._contentview != null) {
classroot.cblist.selectItemAt(classroot.defaultselection);
$0 = classroot.cblist.getText()
}} else {

$0 = classroot.defaulttext
}};

if (this.cbtext) this.cbtext.setAttribute("text", $0);
if (this._dsblfield) this._dsblfield.setAttribute("text", $0);
parent._applystyle(parent.style)
}
/* -*- file: -*- */
var editable_state;var non_editable_state;var editbkgnd;var cbtext;var $classrootdepth;function $lzc$class__m8r ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
LzNode.mergeAttributes({$CSSDescriptor: {}, $attributeDescriptor: {types: {aaactive: "boolean", aadescription: "string", aaname: "string", aasilent: "boolean", aatabindex: "number", align: "string", backgroundrepeat: "string", bgcolor: "color", cachebitmap: "boolean", capabilities: "string", classroot: "string", clickable: "boolean", clickregion: "string", clip: "boolean", cloneManager: "string", contextmenu: "string", cornerradius: "string", cursor: "token", datapath: "string", defaultplacement: "string", fgcolor: "color", focusable: "boolean", focustrap: "boolean", font: "string", fontsize: "size", fontstyle: "string", frame: "numberExpression", framesloadratio: "number", hasdirectionallayout: "boolean", hassetheight: "boolean", hassetwidth: "boolean", height: "size", id: "ID", ignoreplacement: "boolean", immediateparent: "string", inited: "boolean", initstage: "string", layout: "css", loadratio: "number", mask: "string", name: "token", nodeLevel: "number", opacity: "number", options: "css", parent: "string", pixellock: "boolean", placement: "string", playing: "boolean", resource: "string", resourceheight: "number", resourcewidth: "number", rotation: "numberExpression", shadowangle: "number", shadowblurradius: "number", shadowcolor: "color", shadowdistance: "number", showhandcursor: "boolean", source: "string", stretches: "string", styleclass: "string", subnodes: "string", subviews: "string", tintcolor: "string", totalframes: "number", transition: "string", unstretchedheight: "number", unstretchedwidth: "number", usegetbounds: "boolean", valign: "string", visibility: "string", visible: "boolean", width: "size", "with": "string", x: "numberExpression", xoffset: "numberExpression", xscale: "numberExpression", y: "numberExpression", yoffset: "numberExpression", yscale: "numberExpression"}}}, $lzc$class__m8r.attributes);}
}
