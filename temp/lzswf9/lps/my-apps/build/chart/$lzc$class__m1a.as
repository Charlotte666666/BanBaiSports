package {
dynamic class $lzc$class__m1a extends LzAnimator {
/* -*- file: common/components/Chart.lzx#910 -*- */
static var displayName = "<anonymous extends='animator'>";static var attributes = new LzInheritedHash(LzAnimator.attributes);function $m16 ($0) {
/* -*- file: #909 -*- */
var $1 = classroot.toHeight;
/* -*- file: -*- */
if ($1 !== this["to"] || !this.inited) {
this.setAttribute("to", $1)
}}
/* -*- file: common/components/Chart.lzx#909 -*- */
function $m17 () {
/* -*- file: -*- */
try {
/* -*- file: common/components/Chart.lzx#912 -*- */
return [classroot, "toHeight"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
var $classrootdepth;function $lzc$class__m1a ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
LzNode.mergeAttributes({$CSSDescriptor: {}, $attributeDescriptor: {types: {attribute: "token", classroot: "string", cloneManager: "string", datapath: "string", defaultplacement: "string", duration: "number", from: "number", id: "ID", ignoreplacement: "boolean", immediateparent: "string", indirect: "boolean", inited: "boolean", initstage: "string", isactive: "boolean", motion: "string", name: "token", nodeLevel: "number", options: "css", parent: "string", paused: "boolean", placement: "string", process: "string", relative: "boolean", repeat: "number", start: "boolean", started: "boolean", styleclass: "string", subnodes: "string", target: "reference", to: "number", transition: "string", "with": "string"}}}, $lzc$class__m1a.attributes);}
}
