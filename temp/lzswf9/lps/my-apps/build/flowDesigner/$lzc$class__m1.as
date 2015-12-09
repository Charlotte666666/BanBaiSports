package {
dynamic class $lzc$class__m1 extends LzView implements $lzc$class_draggable {
/* -*- file: mixins/draggable/draggable.lzx#8 -*- */
static var displayName = "<view with='draggable'>";static var children = [{attrs: {$classrootdepth: 1, $mkl: function  ($0) {
/* -*- file: -*- */
with (this) {
/* -*- file: mixins/draggable/draggable.lzx#163 -*- */
var $1 = parent.dragging;
/* -*- file: -*- */
if ($1 !== this["applied"] || !this.inited) {
this.setAttribute("applied", $1)
}}}
, $mkm: function  () {
with (this) {
try {
/* -*- file: mixins/draggable/draggable.lzx#166 -*- */
return [parent, "dragging"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}}
, applied: new LzAlwaysExpr("$mkl", "$mkm", null)}, "class": $lzc$class_dragstate}];static var attributes = new LzInheritedHash(LzView.attributes);var draggable;var destinationtypes;var __splitre;function $lzc$set_destinationtypes ($0) {
/* -*- file: mixins/draggable/draggable.lzx#112 -*- */
var $1 = [], $2 = $0.split(this.__splitre);


this.destinationtypes = $0;
for (var $3 = 0, $4 = $2.length;$3 < $4;$3++) {
var $5 = lz[$2[$3]];
if (!$5) {

continue
};
$1.push($5)
};
this.__classes = $1
}
/* -*- file: -*- */
var dragging;var dragover;var ondrop;function validDestination ($0:$lzc$class_droppable):Boolean {
/* -*- file: mixins/draggable/draggable.lzx#151 -*- */
if (!this.draggable) return false;
var $1 = this.__classes;
for (var $2 = 0, $3 = $1.length;$2 < $3;$2++) {
if ($0 is $1[$2]) {
return true
}};

return false
}





function $mkn ($0) {
if (this.draggable) {
dragmanager.setAttribute("dragging", this)
}}


function $mko ($0) {
if (this.dragging) {
dragmanager.setAttribute("dragging", null)
}}
/* -*- file: -*- */
function $lzc$class__m1 ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
LzNode.mergeAttributes({$CSSDescriptor: {}, $attributeDescriptor: {types: {aaactive: "boolean", aadescription: "string", aaname: "string", aasilent: "boolean", aatabindex: "number", align: "string", backgroundrepeat: "string", bgcolor: "color", cachebitmap: "boolean", capabilities: "string", classroot: "string", clickable: "boolean", clickregion: "string", clip: "boolean", cloneManager: "string", contextmenu: "string", cornerradius: "string", cursor: "token", datapath: "string", defaultplacement: "string", destinationtypes: "string", draggable: "boolean", fgcolor: "color", focusable: "boolean", focustrap: "boolean", font: "string", fontsize: "size", fontstyle: "string", frame: "numberExpression", framesloadratio: "number", hasdirectionallayout: "boolean", hassetheight: "boolean", hassetwidth: "boolean", height: "size", id: "ID", ignoreplacement: "boolean", immediateparent: "string", inited: "boolean", initstage: "string", layout: "css", loadratio: "number", mask: "string", name: "token", nodeLevel: "number", opacity: "number", options: "css", parent: "string", pixellock: "boolean", placement: "string", playing: "boolean", resource: "string", resourceheight: "number", resourcewidth: "number", rotation: "numberExpression", shadowangle: "number", shadowblurradius: "number", shadowcolor: "color", shadowdistance: "number", showhandcursor: "boolean", source: "string", stretches: "string", styleclass: "string", subnodes: "string", subviews: "string", tintcolor: "string", totalframes: "number", transition: "string", unstretchedheight: "number", unstretchedwidth: "number", usegetbounds: "boolean", valign: "string", visibility: "string", visible: "boolean", width: "size", "with": "string", x: "numberExpression", xoffset: "numberExpression", xscale: "numberExpression", y: "numberExpression", yoffset: "numberExpression", yscale: "numberExpression"}}, $delegates: ["onmousedown", "$mkn", null, "onmouseup", "$mko", null], __splitre: new RegExp("\\s*,\\s*"), clickable: true, destinationtypes: "droppable", draggable: true, dragging: null, dragover: null, ondrop: LzDeclaredEvent}, $lzc$class__m1.attributes);}
}
