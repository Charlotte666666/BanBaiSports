package {
dynamic class $lzc$class__m2 extends LzCanvas {
/* -*- file: chart.lzx#4 -*- */
static var displayName = "<anonymous extends='canvas'>";static var attributes = new LzInheritedHash(LzCanvas.attributes);var dataStr;function $lzc$set_dataStr ($0) {





if ($0 == null) return;
canvas.drawChart($0)
}

function $m1 ($0) {
var $1 = new LzContextMenu();
$1.clearItems();
$1.addItem($1.makeMenuItem("\u6280\u672F\u652F\u6301", new LzDelegate(this, "showAbout")));
canvas.setDefaultContextMenu($1)
}
/* -*- file: #52 -*- */
function showAbout ($0) {
lz.Browser.loadURL("http://www.helpyouworkeasy.com", "blank")
}

function drawChart ($0) {
if (!$0) return;
if (!canvas.chart.drawDone) {
return
};
canvas.chart.initDraw($0)
}
/* -*- file: -*- */
function $lzc$class__m2 ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
LzNode.mergeAttributes({$CSSDescriptor: {}, $attributeDescriptor: {types: {aaactive: "boolean", aadescription: "string", aaname: "string", aasilent: "boolean", aatabindex: "number", accessible: "boolean", align: "string", allowfullscreen: "boolean", appbuilddate: "string", backgroundrepeat: "string", bgcolor: "color", cachebitmap: "boolean", capabilities: "string", classroot: "string", clickable: "boolean", clickregion: "string", clip: "boolean", cloneManager: "string", compileroptions: "string", contextmenu: "string", cornerradius: "string", cursor: "token", dataloadtimeout: "numberExpression", datapath: "string", datasets: "string", debug: "boolean", defaultdataprovider: "string", defaultplacement: "string", embedfonts: "boolean", fgcolor: "color", focusable: "boolean", focustrap: "boolean", font: "string", fontsize: "size", fontstyle: "string", frame: "numberExpression", framerate: "number", framesloadratio: "number", fullscreen: "boolean", hasdirectionallayout: "boolean", hassetheight: "boolean", hassetwidth: "boolean", height: "size", history: "boolean", httpdataprovider: "string", id: "ID", ignoreplacement: "boolean", immediateparent: "string", inited: "boolean", initstage: "string", layout: "css", loadratio: "number", lpsbuild: "string", lpsbuilddate: "string", lpsrelease: "string", lpsversion: "string", mask: "string", mediaerrortimeout: "numberExpression", medialoadtimeout: "numberExpression", name: "token", nodeLevel: "number", opacity: "number", options: "css", parent: "string", percentcreated: "number", pixellock: "boolean", placement: "string", playing: "boolean", proxied: "inheritableBoolean", resource: "string", resourceheight: "number", resourcewidth: "number", rotation: "numberExpression", runtime: "string", screenorientation: "boolean", scriptlimits: "css", shadowangle: "number", shadowblurradius: "number", shadowcolor: "color", shadowdistance: "number", showhandcursor: "boolean", source: "string", stretches: "string", styleclass: "string", subnodes: "string", subviews: "string", tintcolor: "string", title: "string", totalframes: "number", transition: "string", unstretchedheight: "number", unstretchedwidth: "number", usegetbounds: "boolean", valign: "string", visibility: "string", visible: "boolean", width: "size", "with": "string", x: "numberExpression", xoffset: "numberExpression", xscale: "numberExpression", y: "numberExpression", yoffset: "numberExpression", yscale: "numberExpression"}}}, $lzc$class__m2.attributes);}
}
