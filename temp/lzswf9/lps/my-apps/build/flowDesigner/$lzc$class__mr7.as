package {
dynamic class $lzc$class__mr7 extends $lzc$class_FlowDesignerSingle {
/* -*- file: flowDesigner.lzx#101 -*- */
static var displayName = "<anonymous extends='FlowDesignerSingle'>";static var children = LzNode.mergeChildren([], $lzc$class_FlowDesignerSingle["children"]);static var attributes = new LzInheritedHash($lzc$class_FlowDesignerSingle.attributes);function $mr3 ($0) {
/* -*- file: #100 -*- */
var $1 = immediateparent.width;
/* -*- file: -*- */
if ($1 !== this["width"] || !this.inited) {
this.setAttribute("width", $1)
}}
/* -*- file: flowDesigner.lzx#100 -*- */
function $mr4 () {
/* -*- file: -*- */
try {
/* -*- file: flowDesigner.lzx#103 -*- */
return [immediateparent, "width"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
/* -*- file: flowDesigner.lzx#100 -*- */
function $mr5 ($0) {
/* -*- file: #100 -*- */
var $1 = immediateparent.height;
/* -*- file: -*- */
if ($1 !== this["height"] || !this.inited) {
this.setAttribute("height", $1)
}}
/* -*- file: flowDesigner.lzx#100 -*- */
function $mr6 () {
/* -*- file: -*- */
try {
/* -*- file: flowDesigner.lzx#103 -*- */
return [immediateparent, "height"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
var resetWidth;var resetHeight;override function fullScreen () {}
/* -*- file: flowDesigner.lzx#108 -*- */
function doUpdate () {
var $0 = toXMLString();
lz.Browser.callJS("doUpdate", null, $0)
}

override function deleteObject () {
lz.Browser.callJS("deleteObject", null, "")
}

override function selectTemplate () {
lz.Browser.callJS("selectTemplate", null, "")
}

override function selectRight () {
lz.Browser.callJS("selectRight", null, "")
}

override function selectDept () {
lz.Browser.callJS("selectDept", null, "")
}

override function selectUser () {
lz.Browser.callJS("selectUser", null, "")
}

override function selectRule () {
lz.Browser.callJS("selectRule", null, "")
}
/* -*- file: -*- */
function $lzc$class__mr7 ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
LzNode.mergeAttributes({$attributeDescriptor: {types: {_delegateSelect: "lz.Delegate", aaactive: "boolean", aadescription: "string", aaname: "string", aasilent: "boolean", aatabindex: "number", align: "string", backgroundrepeat: "string", bgcolor: "color", cachebitmap: "boolean", capabilities: "string", classroot: "string", clickable: "boolean", clickregion: "string", clip: "boolean", cloneManager: "string", contextmenu: "string", cornerradius: "string", cursor: "token", datapath: "string", defaultplacement: "string", fgcolor: "color", focusable: "boolean", focustrap: "boolean", font: "string", fontsize: "size", fontstyle: "string", frame: "numberExpression", framesloadratio: "number", hasdirectionallayout: "boolean", hassetheight: "boolean", hassetwidth: "boolean", height: "size", id: "ID", ignoreplacement: "boolean", immediateparent: "string", inited: "boolean", initstage: "string", layout: "css", loadratio: "number", mask: "string", mode: "string", name: "token", nodeLevel: "number", opacity: "number", options: "css", parent: "string", pixellock: "boolean", placement: "string", playing: "boolean", resetHeight: "number", resetWidth: "number", resource: "string", resourceheight: "number", resourcewidth: "number", rotation: "numberExpression", selectType: "string", seletedType: "string", shadowangle: "number", shadowblurradius: "number", shadowcolor: "color", shadowdistance: "number", showhandcursor: "boolean", source: "string", stretches: "string", styleclass: "string", subnodes: "string", subviews: "string", tintcolor: "string", totalframes: "number", transition: "string", unstretchedheight: "number", unstretchedwidth: "number", usegetbounds: "boolean", valign: "string", visibility: "string", visible: "boolean", width: "size", "with": "string", x: "numberExpression", xmlString: "string", xoffset: "numberExpression", xscale: "numberExpression", y: "numberExpression", yoffset: "numberExpression", yscale: "numberExpression"}}}, $lzc$class__mr7.attributes);}
}
