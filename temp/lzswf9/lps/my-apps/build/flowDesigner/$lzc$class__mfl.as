package {
dynamic class $lzc$class__mfl extends LzNode {
/* -*- file: mixins/draggable/dragmanager.lzx#7 -*- */
static var displayName = "<anonymous extends='node'>";static var attributes = new LzInheritedHash(LzNode.attributes);var dragging;var ondragging;var __dragviews;function $lzc$set_dragging ($0:$lzc$class_draggable) {















var $1 = $0 || this.dragging;
this.dragging = $0;
if ($1) {
$1.setAttribute("dragging", $0);

var $2;
if ($0) {

$2 = this.__dragviews = this.__find($1)
} else if (this.__dragviews) {
$2 = this.__dragviews;
this.__dragviews = null
};

if ($2.length) {

var $3 = $0 ? "activate" : "deactivate";

lz.Track[$3]("dragmanager_" + $1.destinationtypes);


for (var $4 = 0, $5 = $2.length;$4 < $5;$4++) {
$2[$4].setAttribute("dragging", $0)
}}};






if (this.ondragging.ready) {
this.ondragging.sendEvent($0)
}}



function __find ($0):Array {

var $1 = this.__droppable, $2 = [], $3 = $0.destinationtypes;


for (var $4 = 0, $5 = $1.length;$4 < $5;$4++) {
var $6:$lzc$class_droppable = $1[$4];
if ($0.validDestination($6) && $6["validSource"]($0)) {

lz.Track.register($6, "dragmanager_" + $3);
$2.push($6)
}};


return $2
}
/* -*- file: -*- */
var dragover;var ondragover;function $lzc$set_dragover ($0:$lzc$class_droppable) {
/* -*- file: mixins/draggable/dragmanager.lzx#89 -*- */
var $1 = $0 || this.dragover;
this.dragover = $0;
if ($1) {
this.dragging.setAttribute("dragover", $0 != null ? $1 : null);
$1.setAttribute("dragover", $0 != null ? this.dragging : null)
};

if (this.ondragover.ready) {
this.ondragover.sendEvent($0)
}}
/* -*- file: -*- */
var __droppable;function __add ($0:$lzc$class_droppable) {
/* -*- file: mixins/draggable/dragmanager.lzx#108 -*- */
if ($0 is $lzc$class_droppable) {
this.__droppable.push($0);
new (lz.Delegate)(this, "__remove", $0, "ondestroy")
}}



function __remove ($0:$lzc$class_droppable) {

var $1;
if ($0 is $lzc$class_droppable) {
$1 = this.__droppable;
for (var $2 = 0, $3 = $1.length;$2 < $3;$2++) {
if ($1[$2] === $0) {

$1.splice($2, 1);
break
}}}}







function __dropEvent ($0) {


if (this.dragover) {
this.setAttribute("dragover", null)
};
var $1 = this.dragging;
if ($1 && $1.ondrop && $1.ondrop.ready) {
$1.ondrop.sendEvent($0)
};
if ($0 && $0.ondrop && $0.ondrop.ready) {
$0.ondrop.sendEvent($1)
}}
/* -*- file: -*- */
function $lzc$class__mfl ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
LzNode.mergeAttributes({$CSSDescriptor: {}, $attributeDescriptor: {types: {classroot: "string", cloneManager: "string", datapath: "string", defaultplacement: "string", id: "ID", ignoreplacement: "boolean", immediateparent: "string", inited: "boolean", initstage: "string", name: "token", nodeLevel: "number", options: "css", parent: "string", placement: "string", styleclass: "string", subnodes: "string", transition: "string", "with": "string"}}}, $lzc$class__mfl.attributes);}
}
