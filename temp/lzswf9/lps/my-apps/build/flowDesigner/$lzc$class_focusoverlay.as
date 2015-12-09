package {
dynamic class $lzc$class_focusoverlay extends $lzc$class_basefocusview {
/* -*- file: lz/focusoverlay.lzx#20 -*- */
static var tagname = "focusoverlay";static var children = [{attrs: {$classrootdepth: 1, name: "topleft", x: new LzAlwaysExpr("$m9", "$ma", null), y: new LzAlwaysExpr("$mb", "$mc", null)}, "class": $lzc$class__mp}, {attrs: {$classrootdepth: 1, name: "topright", x: new LzAlwaysExpr("$md", "$me", null), y: new LzAlwaysExpr("$mf", "$mg", null)}, "class": $lzc$class__mq}, {attrs: {$classrootdepth: 1, name: "bottomleft", x: new LzAlwaysExpr("$mh", "$mi", null), y: new LzAlwaysExpr("$mj", "$mk", null)}, "class": $lzc$class__mr}, {attrs: {$classrootdepth: 1, name: "bottomright", x: new LzAlwaysExpr("$ml", "$mm", null), y: new LzAlwaysExpr("$mn", "$mo", null)}, "class": $lzc$class__ms}];static var attributes = new LzInheritedHash($lzc$class_basefocusview.attributes);var offset;var topleft;var topright;var bottomleft;var bottomright;override function doFocus ($0) {
/* -*- file: #57 -*- */
super.doFocus($0);
if (visible) this.bounce()
}


function bounce () {
this.animate("offset", 12, duration / 2);
this.animate("offset", 5, duration)
}
/* -*- file: -*- */
function $lzc$class_focusoverlay ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
LzNode.mergeAttributes({offset: 5}, $lzc$class_focusoverlay.attributes);}
}
