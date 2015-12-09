package {
dynamic class $lzc$class__mql extends LzView {
/* -*- file: flowDesigner/FlowDesignerSingle.lzx#615 -*- */
static var displayName = "<anonymous extends='view'>";static var children = [{attrs: {$classrootdepth: 6, height: 5, width: new LzAlwaysExpr("$mo3", "$mo4", null)}, "class": $lzc$class__mqm}, {attrs: {$classrootdepth: 6, layout: {axis: "x", spacing: 3}, name: "txtView", txt: void 0, width: new LzAlwaysExpr("$mo5", "$mo6", null), x: 2}, "class": $lzc$class__mqn}, {attrs: {$classrootdepth: 6, layout: {axis: "x", spacing: 3}, name: "statusView", txt: void 0, visible: new LzAlwaysExpr("$moc", "$mod", null), width: new LzAlwaysExpr("$moe", "$mof", null), x: 2}, "class": $lzc$class__mqp}, {attrs: {$classrootdepth: 6, hour: void 0, isAlarm: void 0, layout: {axis: "x", spacing: 2}, minute: void 0, name: "alarm", visible: new LzAlwaysExpr("$mol", "$mom", null), width: new LzAlwaysExpr("$mon", "$moo", null), x: 2}, "class": $lzc$class__mqr}, {attrs: {$classrootdepth: 6, $delegates: ["onclick", "$mp4", null], clickable: true, isEnabled: false, labelText: "\u586B\u5199\u8868\u5355", labelWidth: 55, mode: new LzAlwaysExpr("$mp2", "$mp3", null), name: "template_name", visible: new LzAlwaysExpr("$moy", "$moz", null), width: new LzAlwaysExpr("$mp0", "$mp1", null)}, "class": $lzc$class__mqv}, {attrs: {$classrootdepth: 6, fgcolor: new LzOnceExpr("$mp7", null), fontsize: 12, text: "\u6267\u884C\u8005\u6761\u4EF6:(\u4E0D\u586B\u5199\u8868\u793A\u4E0D\u4F5C\u8981\u6C42)", visible: new LzAlwaysExpr("$mp5", "$mp6", null)}, "class": $lzc$class__mqw}, {attrs: {$classrootdepth: 6, $delegates: ["onclick", "$mpe", null], clickable: true, isEnabled: false, labelText: "\u6743\u9650", labelWidth: 35, mode: new LzAlwaysExpr("$mpc", "$mpd", null), name: "right_name", visible: new LzAlwaysExpr("$mp8", "$mp9", null), width: new LzAlwaysExpr("$mpa", "$mpb", null)}, "class": $lzc$class__mqx}, {attrs: {$classrootdepth: 6, $delegates: ["onclick", "$mpl", null], clickable: true, isEnabled: false, labelText: "\u90E8\u95E8", labelWidth: 35, mode: new LzAlwaysExpr("$mpj", "$mpk", null), name: "dept_name", visible: new LzAlwaysExpr("$mpf", "$mpg", null), width: new LzAlwaysExpr("$mph", "$mpi", null)}, "class": $lzc$class__mqy}, {attrs: {$classrootdepth: 6, $delegates: ["onclick", "$mps", null], clickable: true, isEnabled: false, labelText: "\u5E10\u53F7", labelWidth: 35, mode: new LzAlwaysExpr("$mpq", "$mpr", null), name: "user_name", visible: new LzAlwaysExpr("$mpm", "$mpn", null), width: new LzAlwaysExpr("$mpo", "$mpp", null)}, "class": $lzc$class__mqz}, {attrs: {$classrootdepth: 6, $delegates: ["onclick", "$mpz", null], clickable: true, isEnabled: false, labelText: "\u6267\u884C\u903B\u8F91", labelWidth: 55, mode: new LzAlwaysExpr("$mpx", "$mpy", null), name: "rule_name", visible: new LzAlwaysExpr("$mpt", "$mpu", null), width: new LzAlwaysExpr("$mpv", "$mpw", null)}, "class": $lzc$class__mr0}];static var attributes = new LzInheritedHash(LzView.attributes);function $mo1 ($0) {
/* -*- file: #614 -*- */
var $1 = parent.width - 10;
/* -*- file: -*- */
if ($1 !== this["width"] || !this.inited) {
this.setAttribute("width", $1)
}}
/* -*- file: flowDesigner/FlowDesignerSingle.lzx#614 -*- */
function $mo2 () {
/* -*- file: -*- */
try {
/* -*- file: flowDesigner/FlowDesignerSingle.lzx#617 -*- */
return [parent, "width"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
var txtView;var statusView;var alarm;var template_name;var right_name;var dept_name;var user_name;var rule_name;var $classrootdepth;function $lzc$class__mql ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
LzNode.mergeAttributes({$CSSDescriptor: {}, $attributeDescriptor: {types: {aaactive: "boolean", aadescription: "string", aaname: "string", aasilent: "boolean", aatabindex: "number", align: "string", backgroundrepeat: "string", bgcolor: "color", cachebitmap: "boolean", capabilities: "string", classroot: "string", clickable: "boolean", clickregion: "string", clip: "boolean", cloneManager: "string", contextmenu: "string", cornerradius: "string", cursor: "token", datapath: "string", defaultplacement: "string", fgcolor: "color", focusable: "boolean", focustrap: "boolean", font: "string", fontsize: "size", fontstyle: "string", frame: "numberExpression", framesloadratio: "number", hasdirectionallayout: "boolean", hassetheight: "boolean", hassetwidth: "boolean", height: "size", id: "ID", ignoreplacement: "boolean", immediateparent: "string", inited: "boolean", initstage: "string", layout: "css", loadratio: "number", mask: "string", name: "token", nodeLevel: "number", opacity: "number", options: "css", parent: "string", pixellock: "boolean", placement: "string", playing: "boolean", resource: "string", resourceheight: "number", resourcewidth: "number", rotation: "numberExpression", shadowangle: "number", shadowblurradius: "number", shadowcolor: "color", shadowdistance: "number", showhandcursor: "boolean", source: "string", stretches: "string", styleclass: "string", subnodes: "string", subviews: "string", tintcolor: "string", totalframes: "number", transition: "string", unstretchedheight: "number", unstretchedwidth: "number", usegetbounds: "boolean", valign: "string", visibility: "string", visible: "boolean", width: "size", "with": "string", x: "numberExpression", xoffset: "numberExpression", xscale: "numberExpression", y: "numberExpression", yoffset: "numberExpression", yscale: "numberExpression"}}}, $lzc$class__mql.attributes);}
}
