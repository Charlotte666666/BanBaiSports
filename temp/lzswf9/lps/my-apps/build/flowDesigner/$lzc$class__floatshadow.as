package {
dynamic class $lzc$class__floatshadow extends LzView {
/* -*- file: lz/floatinglist.lzx#38 -*- */
static var tagname = "_floatshadow";static var children = [{attrs: {$classrootdepth: 1, height: new LzAlwaysExpr("$m64", "$m65", null), name: "right", top: void 0, x: new LzAlwaysExpr("$m62", "$m63", null), y: new LzAlwaysExpr("$m60", "$m61", null)}, "class": $lzc$class__m6c}, {attrs: {$classrootdepth: 1, name: "bottom", visible: new LzAlwaysExpr("$m66", "$m67", null), width: new LzAlwaysExpr("$m6a", "$m6b", null), y: new LzAlwaysExpr("$m68", "$m69", null)}, "class": $lzc$class__m6d}];static var attributes = new LzInheritedHash(LzView.attributes);function $m5z ($0) {
/* -*- file: #37 -*- */
this.setCornerResourceNumber(cornerresourcenumber)
}
/* -*- file: -*- */
var inset;var offsety;var shadowsize;var bottomvisible;function $lzc$set_bottomvisible ($0) {
/* -*- file: lz/floatinglist.lzx#44 -*- */
this.setBottomVisible($0)
}
/* -*- file: -*- */
var onbottomvisible;var cornerresourcenumber;function $lzc$set_cornerresourcenumber ($0) {
/* -*- file: lz/floatinglist.lzx#48 -*- */
this.setCornerResourceNumber($0)
}
/* -*- file: -*- */
var oncornerresourcenumber;var right;var bottom;function setBottomVisible ($0) {
/* -*- file: lz/floatinglist.lzx#67 -*- */
this.bottomvisible = $0;
if (onbottomvisible) this.onbottomvisible.sendEvent($0);
this.setCornerResourceNumber(this.cornerresourcenumber)
}

function setCornerResourceNumber ($0) {
if (!this.bottomvisible) {
this.cornerresourcenumber = 3
} else {

this.cornerresourcenumber = 2
};
if (!isinited) return;
this.right.top.setAttribute("frame", this.cornerresourcenumber);
if (oncornerresourcenumber) this.oncornerresourcenumber.sendEvent()
}
/* -*- file: -*- */
function $lzc$class__floatshadow ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
LzNode.mergeAttributes({$CSSDescriptor: {}, $attributeDescriptor: {types: {aaactive: "boolean", aadescription: "string", aaname: "string", aasilent: "boolean", aatabindex: "number", align: "string", backgroundrepeat: "string", bgcolor: "color", cachebitmap: "boolean", capabilities: "string", classroot: "string", clickable: "boolean", clickregion: "string", clip: "boolean", cloneManager: "string", contextmenu: "string", cornerradius: "string", cursor: "token", datapath: "string", defaultplacement: "string", fgcolor: "color", focusable: "boolean", focustrap: "boolean", font: "string", fontsize: "size", fontstyle: "string", frame: "numberExpression", framesloadratio: "number", hasdirectionallayout: "boolean", hassetheight: "boolean", hassetwidth: "boolean", height: "size", id: "ID", ignoreplacement: "boolean", immediateparent: "string", inited: "boolean", initstage: "string", layout: "css", loadratio: "number", mask: "string", name: "token", nodeLevel: "number", opacity: "number", options: "css", parent: "string", pixellock: "boolean", placement: "string", playing: "boolean", resource: "string", resourceheight: "number", resourcewidth: "number", rotation: "numberExpression", shadowangle: "number", shadowblurradius: "number", shadowcolor: "color", shadowdistance: "number", showhandcursor: "boolean", source: "string", stretches: "string", styleclass: "string", subnodes: "string", subviews: "string", tintcolor: "string", totalframes: "number", transition: "string", unstretchedheight: "number", unstretchedwidth: "number", usegetbounds: "boolean", valign: "string", visibility: "string", visible: "boolean", width: "size", "with": "string", x: "numberExpression", xoffset: "numberExpression", xscale: "numberExpression", y: "numberExpression", yoffset: "numberExpression", yscale: "numberExpression"}}, $delegates: ["oninit", "$m5z", null], bottomvisible: true, cornerresourcenumber: 0, inset: 10, offsety: 10, onbottomvisible: LzDeclaredEvent, oncornerresourcenumber: LzDeclaredEvent, shadowsize: 5}, $lzc$class__floatshadow.attributes);}
}
