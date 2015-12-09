package {
dynamic class $lzc$class__mq2 extends LzView {
/* -*- file: flowDesigner/FlowDesignerSingle.lzx#150 -*- */
static var displayName = "<anonymous extends='view'>";static var children = [{attrs: {$CSSDescriptor: {}, $attributeDescriptor: {types: {aaactive: "boolean", aadescription: "string", aaname: "string", aasilent: "boolean", aatabindex: "number", align: "string", backgroundrepeat: "string", bgcolor: "color", cachebitmap: "boolean", capabilities: "string", classroot: "string", clickable: "boolean", clickregion: "string", clip: "boolean", cloneManager: "string", contextmenu: "string", cornerradius: "string", cursor: "token", datapath: "string", defaultplacement: "string", fgcolor: "color", focusable: "boolean", focustrap: "boolean", font: "string", fontsize: "size", fontstyle: "string", frame: "numberExpression", framesloadratio: "number", hasdirectionallayout: "boolean", hassetheight: "boolean", hassetwidth: "boolean", height: "size", id: "ID", ignoreplacement: "boolean", immediateparent: "string", inited: "boolean", initstage: "string", layout: "css", loadratio: "number", mask: "string", name: "token", nodeLevel: "number", opacity: "number", options: "css", parent: "string", pixellock: "boolean", placement: "string", playing: "boolean", resource: "string", resourceheight: "number", resourcewidth: "number", rotation: "numberExpression", shadowangle: "number", shadowblurradius: "number", shadowcolor: "color", shadowdistance: "number", showhandcursor: "boolean", source: "string", stretches: "string", styleclass: "string", subnodes: "string", subviews: "string", tintcolor: "string", totalframes: "number", transition: "string", unstretchedheight: "number", unstretchedwidth: "number", usegetbounds: "boolean", valign: "string", visibility: "string", visible: "boolean", width: "size", "with": "string", x: "numberExpression", xoffset: "numberExpression", xscale: "numberExpression", y: "numberExpression", yoffset: "numberExpression", yscale: "numberExpression"}}, $classrootdepth: 2, btn_addJudgeNode: void 0, btn_addNode: void 0, btn_del: void 0, btn_save: void 0, layout: {axis: "x", spacing: 2}, name: "buttons", width: 400, x: 10, y: 2}, children: [{attrs: {$classrootdepth: 3, $delegates: ["onclick", "$mmn", null], clickable: true, icon_res: "btn_save_rsc", name: "btn_save", text: "\u4FDD\u5B58\u6D41\u7A0B\u56FE", visible: new LzAlwaysExpr("$mml", "$mmm", null), width: 95}, "class": $lzc$class__mq3}, {attrs: {$classrootdepth: 3, $delegates: ["onclick", "$mmq", null], clickable: true, icon_res: "btn_del_rsc", name: "btn_del", text: "\u5220\u9664\u5BF9\u8C61", visible: new LzAlwaysExpr("$mmo", "$mmp", null), width: 82}, "class": $lzc$class__mq4}, {attrs: {$classrootdepth: 3, $delegates: ["onclick", "$mmt", null], clickable: true, icon_res: "btn_add_rsc", name: "btn_addNode", text: "\u4EFB\u52A1\u8282\u70B9", visible: new LzAlwaysExpr("$mmr", "$mms", null), width: 82}, "class": $lzc$class__mq5}, {attrs: {$classrootdepth: 3, $delegates: ["onclick", "$mmw", null], clickable: true, icon_res: "btn_add_rsc", name: "btn_addJudgeNode", text: "\u5224\u65AD\u8282\u70B9", visible: new LzAlwaysExpr("$mmu", "$mmv", null), width: 82}, "class": $lzc$class__mq6}], "class": LzView}, {attrs: {$classrootdepth: 2, layout: {axis: "x"}, name: "pointerType", visible: new LzAlwaysExpr("$mmx", "$mmy", null), width: 120, y: 5}, "class": $lzc$class__mq7}, {attrs: {$classrootdepth: 2, $delegates: ["onclick", "$mn3", null], autoDrawShape: true, clickable: true, name: "up", text: "\u4E0A", visible: new LzAlwaysExpr("$mn1", "$mn2", null), width: 22, y: 2}, "class": $lzc$class__mqa}, {attrs: {$classrootdepth: 2, $delegates: ["onclick", "$mn6", null], autoDrawShape: true, clickable: true, name: "down", text: "\u4E0B", visible: new LzAlwaysExpr("$mn4", "$mn5", null), width: 22, y: 2}, "class": $lzc$class__mqb}, {attrs: {$classrootdepth: 2, $delegates: ["onclick", "$mn9", null], autoDrawShape: true, clickable: true, name: "left", text: "\u5DE6", visible: new LzAlwaysExpr("$mn7", "$mn8", null), width: 22, y: 2}, "class": $lzc$class__mqc}, {attrs: {$classrootdepth: 2, $delegates: ["onclick", "$mnc", null], autoDrawShape: true, clickable: true, name: "right", text: "\u53F3", visible: new LzAlwaysExpr("$mna", "$mnb", null), width: 22, y: 2}, "class": $lzc$class__mqd}];static var attributes = new LzInheritedHash(LzView.attributes);function $mmh ($0) {
/* -*- file: #149 -*- */
var $1 = classroot.mode != "view";
/* -*- file: -*- */
if ($1 !== this["visible"] || !this.inited) {
this.setAttribute("visible", $1)
}}
/* -*- file: flowDesigner/FlowDesignerSingle.lzx#149 -*- */
function $mmi () {
/* -*- file: -*- */
try {
/* -*- file: flowDesigner/FlowDesignerSingle.lzx#152 -*- */
return [classroot, "mode"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
/* -*- file: flowDesigner/FlowDesignerSingle.lzx#149 -*- */
function $mmj ($0) {
/* -*- file: #149 -*- */
var $1 = parent.width;
/* -*- file: -*- */
if ($1 !== this["width"] || !this.inited) {
this.setAttribute("width", $1)
}}
/* -*- file: flowDesigner/FlowDesignerSingle.lzx#149 -*- */
function $mmk () {
/* -*- file: -*- */
try {
/* -*- file: flowDesigner/FlowDesignerSingle.lzx#152 -*- */
return [parent, "width"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
var buttons;var pointerType;var up;var down;var left;var right;var $classrootdepth;function $lzc$class__mq2 ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
LzNode.mergeAttributes({$CSSDescriptor: {}, $attributeDescriptor: {types: {aaactive: "boolean", aadescription: "string", aaname: "string", aasilent: "boolean", aatabindex: "number", align: "string", backgroundrepeat: "string", bgcolor: "color", cachebitmap: "boolean", capabilities: "string", classroot: "string", clickable: "boolean", clickregion: "string", clip: "boolean", cloneManager: "string", contextmenu: "string", cornerradius: "string", cursor: "token", datapath: "string", defaultplacement: "string", fgcolor: "color", focusable: "boolean", focustrap: "boolean", font: "string", fontsize: "size", fontstyle: "string", frame: "numberExpression", framesloadratio: "number", hasdirectionallayout: "boolean", hassetheight: "boolean", hassetwidth: "boolean", height: "size", id: "ID", ignoreplacement: "boolean", immediateparent: "string", inited: "boolean", initstage: "string", layout: "css", loadratio: "number", mask: "string", name: "token", nodeLevel: "number", opacity: "number", options: "css", parent: "string", pixellock: "boolean", placement: "string", playing: "boolean", resource: "string", resourceheight: "number", resourcewidth: "number", rotation: "numberExpression", shadowangle: "number", shadowblurradius: "number", shadowcolor: "color", shadowdistance: "number", showhandcursor: "boolean", source: "string", stretches: "string", styleclass: "string", subnodes: "string", subviews: "string", tintcolor: "string", totalframes: "number", transition: "string", unstretchedheight: "number", unstretchedwidth: "number", usegetbounds: "boolean", valign: "string", visibility: "string", visible: "boolean", width: "size", "with": "string", x: "numberExpression", xoffset: "numberExpression", xscale: "numberExpression", y: "numberExpression", yoffset: "numberExpression", yscale: "numberExpression"}}}, $lzc$class__mq2.attributes);}
}
