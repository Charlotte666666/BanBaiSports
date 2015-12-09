package {
dynamic class $lzc$class__m3 extends LzCanvas {
/* -*- file: flowDesigner.lzx#6 -*- */
static var displayName = "<anonymous extends='canvas'>";static var attributes = new LzInheritedHash(LzCanvas.attributes);var optStr;var flowStr;function $m2 ($0) {
/* -*- file: #54 -*- */
var $1 = new LzContextMenu();
$1.clearItems();
$1.addItem($1.makeMenuItem("\u5173\u4E8E\u6211\u4EEC", new LzDelegate(this, "showAbout")));
canvas.setDefaultContextMenu($1);

canvas.flowDesigner.setAttribute("mode", "edit")
}

function $lzc$set_optStr ($0) {
if ($0 == null) return;
try {
if ($0 == "deleteObject") {
canvas.flowDesigner.doDeleteObject()
} else if ($0 == "mode_edit") {
canvas.flowDesigner.setAttribute("mode", "edit")
} else if ($0 == "mode_view") {
canvas.flowDesigner.setAttribute("mode", "view")
} else if ($0.indexOf("setTemplate:") != -1) {
$0 = $0.substring(12, $0.length);
canvas.flowDesigner.setTemplate($0)
} else if ($0.indexOf("setRight:") != -1) {
$0 = $0.substring(9, $0.length);
canvas.flowDesigner.setRight($0)
} else if ($0.indexOf("setDept:") != -1) {
$0 = $0.substring(8, $0.length);
canvas.flowDesigner.setDept($0)
} else if ($0.indexOf("setUser:") != -1) {
$0 = $0.substring(8, $0.length);
canvas.flowDesigner.setUser($0)
} else if ($0.indexOf("setRule:") != -1) {
$0 = $0.substring(8, $0.length);
canvas.flowDesigner.setRule($0)
}}
catch ($1) {}}



function $lzc$set_flowStr ($0) {
if ($0 == null) return;
canvas.flowDesigner.drawFlow($0)
}

function showAbout ($0 = null) {
lz.Browser.loadURL("http://www.helpyouworkeasy.com", "_blank")
}
/* -*- file: -*- */
function $lzc$class__m3 ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
LzNode.mergeAttributes({$CSSDescriptor: {}, $attributeDescriptor: {types: {aaactive: "boolean", aadescription: "string", aaname: "string", aasilent: "boolean", aatabindex: "number", accessible: "boolean", align: "string", allowfullscreen: "boolean", appbuilddate: "string", backgroundrepeat: "string", bgcolor: "color", cachebitmap: "boolean", capabilities: "string", classroot: "string", clickable: "boolean", clickregion: "string", clip: "boolean", cloneManager: "string", compileroptions: "string", contextmenu: "string", cornerradius: "string", cursor: "token", dataloadtimeout: "numberExpression", datapath: "string", datasets: "string", debug: "boolean", defaultdataprovider: "string", defaultplacement: "string", embedfonts: "boolean", fgcolor: "color", focusable: "boolean", focustrap: "boolean", font: "string", fontsize: "size", fontstyle: "string", frame: "numberExpression", framerate: "number", framesloadratio: "number", fullscreen: "boolean", hasdirectionallayout: "boolean", hassetheight: "boolean", hassetwidth: "boolean", height: "size", history: "boolean", httpdataprovider: "string", id: "ID", ignoreplacement: "boolean", immediateparent: "string", inited: "boolean", initstage: "string", layout: "css", loadratio: "number", lpsbuild: "string", lpsbuilddate: "string", lpsrelease: "string", lpsversion: "string", mask: "string", mediaerrortimeout: "numberExpression", medialoadtimeout: "numberExpression", name: "token", nodeLevel: "number", opacity: "number", options: "css", parent: "string", percentcreated: "number", pixellock: "boolean", placement: "string", playing: "boolean", proxied: "inheritableBoolean", resource: "string", resourceheight: "number", resourcewidth: "number", rotation: "numberExpression", runtime: "string", screenorientation: "boolean", scriptlimits: "css", shadowangle: "number", shadowblurradius: "number", shadowcolor: "color", shadowdistance: "number", showhandcursor: "boolean", source: "string", stretches: "string", styleclass: "string", subnodes: "string", subviews: "string", tintcolor: "string", title: "string", totalframes: "number", transition: "string", unstretchedheight: "number", unstretchedwidth: "number", usegetbounds: "boolean", valign: "string", visibility: "string", visible: "boolean", width: "size", "with": "string", x: "numberExpression", xoffset: "numberExpression", xscale: "numberExpression", y: "numberExpression", yoffset: "numberExpression", yscale: "numberExpression"}}}, $lzc$class__m3.attributes);}
}
