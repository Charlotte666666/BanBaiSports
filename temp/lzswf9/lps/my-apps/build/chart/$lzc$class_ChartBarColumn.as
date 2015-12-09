package {
dynamic class $lzc$class_ChartBarColumn extends LzView {
/* -*- file: common/components/Chart.lzx#887 -*- */
static var tagname = "ChartBarColumn";static var children = [{attrs: {$CSSDescriptor: {}, $attributeDescriptor: {types: {attribute: "token", classroot: "string", cloneManager: "string", datapath: "string", defaultplacement: "string", duration: "number", from: "number", id: "ID", ignoreplacement: "boolean", immediateparent: "string", indirect: "boolean", inited: "boolean", initstage: "string", isactive: "boolean", motion: "string", name: "token", nodeLevel: "number", options: "css", parent: "string", paused: "boolean", placement: "string", process: "string", relative: "boolean", repeat: "number", start: "boolean", started: "boolean", styleclass: "string", subnodes: "string", target: "reference", to: "number", transition: "string", "with": "string"}}, $classrootdepth: 1, name: "growUp", process: "simultaneous", start: false}, children: [{attrs: {$CSSDescriptor: {}, $attributeDescriptor: {types: {attribute: "token", classroot: "string", cloneManager: "string", datapath: "string", defaultplacement: "string", duration: "number", from: "number", id: "ID", ignoreplacement: "boolean", immediateparent: "string", indirect: "boolean", inited: "boolean", initstage: "string", isactive: "boolean", motion: "string", name: "token", nodeLevel: "number", options: "css", parent: "string", paused: "boolean", placement: "string", process: "string", relative: "boolean", repeat: "number", start: "boolean", started: "boolean", styleclass: "string", subnodes: "string", target: "reference", to: "number", transition: "string", "with": "string"}}, $classrootdepth: 2, attribute: "opacity", duration: 1500, to: 0.7}, "class": LzAnimator}, {attrs: {$classrootdepth: 2, attribute: "height", duration: 700, to: new LzAlwaysExpr("$m16", "$m17", null)}, "class": $lzc$class__m1a}, {attrs: {$classrootdepth: 2, attribute: "y", duration: 700, to: new LzAlwaysExpr("$m18", "$m19", null)}, "class": $lzc$class__m1b}], "class": LzAnimatorGroup}];static var attributes = new LzInheritedHash(LzView.attributes);var clickId;var val;var toHeight;var toY;var tooltip;function $m13 ($0) {






parent.doClick(this.clickId)
}

function $m14 ($0) {
parent.showTooltip(true, this.tooltip);
this.setAttribute("opacity", 1)
}

function $m15 ($0) {
parent.showTooltip(false, "");
this.setAttribute("opacity", 0.7)
}
/* -*- file: -*- */
var growUp;function $lzc$class_ChartBarColumn ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
LzNode.mergeAttributes({$CSSDescriptor: {}, $attributeDescriptor: {types: {aaactive: "boolean", aadescription: "string", aaname: "string", aasilent: "boolean", aatabindex: "number", align: "string", backgroundrepeat: "string", bgcolor: "color", cachebitmap: "boolean", capabilities: "string", classroot: "string", clickId: "string", clickable: "boolean", clickregion: "string", clip: "boolean", cloneManager: "string", contextmenu: "string", cornerradius: "string", cursor: "token", datapath: "string", defaultplacement: "string", fgcolor: "color", focusable: "boolean", focustrap: "boolean", font: "string", fontsize: "size", fontstyle: "string", frame: "numberExpression", framesloadratio: "number", hasdirectionallayout: "boolean", hassetheight: "boolean", hassetwidth: "boolean", height: "size", id: "ID", ignoreplacement: "boolean", immediateparent: "string", inited: "boolean", initstage: "string", layout: "css", loadratio: "number", mask: "string", name: "token", nodeLevel: "number", opacity: "number", options: "css", parent: "string", pixellock: "boolean", placement: "string", playing: "boolean", resource: "string", resourceheight: "number", resourcewidth: "number", rotation: "numberExpression", shadowangle: "number", shadowblurradius: "number", shadowcolor: "color", shadowdistance: "number", showhandcursor: "boolean", source: "string", stretches: "string", styleclass: "string", subnodes: "string", subviews: "string", tintcolor: "string", toHeight: "number", toY: "number", tooltip: "string", totalframes: "number", transition: "string", unstretchedheight: "number", unstretchedwidth: "number", usegetbounds: "boolean", val: "number", valign: "string", visibility: "string", visible: "boolean", width: "size", "with": "string", x: "numberExpression", xoffset: "numberExpression", xscale: "numberExpression", y: "numberExpression", yoffset: "numberExpression", yscale: "numberExpression"}}, $delegates: ["onclick", "$m13", null, "onmouseover", "$m14", null, "onmouseout", "$m15", null], bgcolor: 7977708, clickId: "", clickable: true, height: 0, opacity: 0, toHeight: 0, toY: 0, tooltip: "", val: 0, width: 30}, $lzc$class_ChartBarColumn.attributes);}
}
