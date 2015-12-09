package {
dynamic class $lzc$class__mqg extends $lzc$class_drawview {
/* -*- file: flowDesigner/FlowDesignerSingle.lzx#581 -*- */
static var displayName = "<anonymous extends='drawview'>";static var attributes = new LzInheritedHash($lzc$class_drawview.attributes);function $mnm ($0) {
/* -*- file: #580 -*- */
var $1 = parent.width;
/* -*- file: -*- */
if ($1 !== this["width"] || !this.inited) {
this.setAttribute("width", $1)
}}
/* -*- file: flowDesigner/FlowDesignerSingle.lzx#580 -*- */
function $mnn () {
/* -*- file: -*- */
try {
/* -*- file: flowDesigner/FlowDesignerSingle.lzx#583 -*- */
return [parent, "width"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
/* -*- file: flowDesigner/FlowDesignerSingle.lzx#580 -*- */
function $mno ($0) {
/* -*- file: #580 -*- */
var $1 = parent.height;
/* -*- file: -*- */
if ($1 !== this["height"] || !this.inited) {
this.setAttribute("height", $1)
}}
/* -*- file: flowDesigner/FlowDesignerSingle.lzx#580 -*- */
function $mnp () {
/* -*- file: -*- */
try {
/* -*- file: flowDesigner/FlowDesignerSingle.lzx#583 -*- */
return [parent, "height"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
/* -*- file: flowDesigner/FlowDesignerSingle.lzx#581 -*- */
function $mnq ($0) {
this.lineWidth = 1;
this.strokeStyle = 10066329;
for (var $1 = 0;$1 < 80;$1++) {
this.moveTo(0, $1 * 20);
this.lineTo(1600, $1 * 20);
this.moveTo($1 * 20, 0);
this.lineTo($1 * 20, 1600)
};
this.stroke()
}
/* -*- file: -*- */
var $classrootdepth;function $lzc$class__mqg ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
}
}
