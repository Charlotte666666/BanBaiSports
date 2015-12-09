package {
dynamic class $lzc$class_PageNumBar extends LzView {
/* -*- file: common/components/PageNumBar.lzx#3 -*- */
static var tagname = "PageNumBar";static var children = [{attrs: {$classrootdepth: 1, fontsize: 12, name: "label", text: "", textalign: "right", width: new LzAlwaysExpr("$mhb", "$mhc", null), x: 0}, "class": $lzc$class__mhp}, {attrs: {$classrootdepth: 1, $delegates: ["onclick", "$mhf", null], clickable: true, name: "first", opacity: 0.3, resource: "page_first_rsc", x: new LzAlwaysExpr("$mhd", "$mhe", null), y: 4}, "class": $lzc$class__mhq}, {attrs: {$classrootdepth: 1, $delegates: ["onclick", "$mhi", null], clickable: true, name: "pre", opacity: 0.3, resource: "page_pre_rsc", x: new LzAlwaysExpr("$mhg", "$mhh", null), y: 3}, "class": $lzc$class__mhr}, {attrs: {$classrootdepth: 1, $delegates: ["onclick", "$mhl", null], clickable: true, name: "next", opacity: 0.3, resource: "page_next_rsc", x: new LzAlwaysExpr("$mhj", "$mhk", null), y: 3}, "class": $lzc$class__mhs}, {attrs: {$classrootdepth: 1, $delegates: ["onclick", "$mho", null], clickable: true, name: "last", opacity: 0.3, resource: "page_last_rsc", x: new LzAlwaysExpr("$mhm", "$mhn", null), y: 4}, "class": $lzc$class__mht}];static var attributes = new LzInheritedHash(LzView.attributes);var currentPage;var total;var pageSize;var totalPage;var pageChanged;function getPageSize ($0:Number, $1:Number) {







if ($0 >= 18 * 30 + 64 + $1) {
return 30
} else if ($0 >= 18 * 25 + 64 + $1) {
return 25
} else if ($0 >= 18 * 20 + 64 + $1) {
return 20
};
return 10
}

function gotoFirst () {
if (this.currentPage == 1) return;
this.currentPage = 1;
this.pageChanged.sendEvent()
}

function gotoPre () {
if (this.currentPage == 1) return;
this.currentPage = this.currentPage - 1;
this.pageChanged.sendEvent()
}

function gotoNext () {
if (this.currentPage == this.totalPage) return;
this.currentPage = this.currentPage + 1;
this.pageChanged.sendEvent()
}

function gotoLast () {
if (this.currentPage == this.totalPage) return;
this.currentPage = this.totalPage;
this.pageChanged.sendEvent()
}

function reset () {
this.total = 0;
this.totalPage = 1;
this.currentPage = 1
}

function update () {
this.totalPage = Math.round(this.total / this.pageSize);
if (this.totalPage == 0) {
this.totalPage = 1
} else if (this.totalPage * this.pageSize < this.total) {
this.totalPage++
};

this.next.setAttribute("opacity", 1);
this.last.setAttribute("opacity", 1);
this.first.setAttribute("opacity", 1);
this.pre.setAttribute("opacity", 1);
if (this.currentPage == this.totalPage) {
if (this.totalPage == 1) {
this.first.setAttribute("opacity", 0.3);
this.pre.setAttribute("opacity", 0.3)
};
this.next.setAttribute("opacity", 0.3);
this.last.setAttribute("opacity", 0.3)
} else if (this.currentPage == 1) {
this.first.setAttribute("opacity", 0.3);
this.pre.setAttribute("opacity", 0.3)
};
this.label.setAttribute("text", "\u5171" + this.total + "\u6761  \u7B2C" + this.currentPage + "\u9875  \u5171" + this.totalPage + "\u9875")
}
/* -*- file: -*- */
var label;var first;var pre;var next;var last;function $lzc$class_PageNumBar ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
LzNode.mergeAttributes({$CSSDescriptor: {}, $attributeDescriptor: {types: {aaactive: "boolean", aadescription: "string", aaname: "string", aasilent: "boolean", aatabindex: "number", align: "string", backgroundrepeat: "string", bgcolor: "color", cachebitmap: "boolean", capabilities: "string", classroot: "string", clickable: "boolean", clickregion: "string", clip: "boolean", cloneManager: "string", contextmenu: "string", cornerradius: "string", currentPage: "number", cursor: "token", datapath: "string", defaultplacement: "string", fgcolor: "color", focusable: "boolean", focustrap: "boolean", font: "string", fontsize: "size", fontstyle: "string", frame: "numberExpression", framesloadratio: "number", hasdirectionallayout: "boolean", hassetheight: "boolean", hassetwidth: "boolean", height: "size", id: "ID", ignoreplacement: "boolean", immediateparent: "string", inited: "boolean", initstage: "string", layout: "css", loadratio: "number", mask: "string", name: "token", nodeLevel: "number", opacity: "number", options: "css", pageSize: "number", parent: "string", pixellock: "boolean", placement: "string", playing: "boolean", resource: "string", resourceheight: "number", resourcewidth: "number", rotation: "numberExpression", shadowangle: "number", shadowblurradius: "number", shadowcolor: "color", shadowdistance: "number", showhandcursor: "boolean", source: "string", stretches: "string", styleclass: "string", subnodes: "string", subviews: "string", tintcolor: "string", total: "number", totalPage: "number", totalframes: "number", transition: "string", unstretchedheight: "number", unstretchedwidth: "number", usegetbounds: "boolean", valign: "string", visibility: "string", visible: "boolean", width: "size", "with": "string", x: "numberExpression", xoffset: "numberExpression", xscale: "numberExpression", y: "numberExpression", yoffset: "numberExpression", yscale: "numberExpression"}}, currentPage: 1, height: 20, pageChanged: LzDeclaredEvent, pageSize: 20, total: 0, totalPage: 1}, $lzc$class_PageNumBar.attributes);}
}
