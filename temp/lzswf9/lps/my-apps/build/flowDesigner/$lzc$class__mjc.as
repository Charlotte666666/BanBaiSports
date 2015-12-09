package {
dynamic class $lzc$class__mjc extends $lzc$class_floatinglist {
/* -*- file: common/components/EditCombobox.lzx#132 -*- */
static var displayName = "<anonymous extends='floatinglist'>";static var children = LzNode.mergeChildren([], $lzc$class_floatinglist["children"]);static var attributes = new LzInheritedHash($lzc$class_floatinglist.attributes);function $miz ($0) {
/* -*- file: #131 -*- */
var $1 = owner.width;
/* -*- file: -*- */
if ($1 !== this["width"] || !this.inited) {
this.setAttribute("width", $1)
}}
/* -*- file: common/components/EditCombobox.lzx#131 -*- */
function $mj0 () {
/* -*- file: -*- */
try {
/* -*- file: common/components/EditCombobox.lzx#134 -*- */
return [owner, "width"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
/* -*- file: common/components/EditCombobox.lzx#132 -*- */
function $mj1 ($0 = null) {
this.setAttribute("visible", false);
if (parent._blurDel) parent._blurDel.unregisterAll();
if (!$0) return;
owner.setAttribute("text", $0.text)
}
/* -*- file: -*- */
var $classrootdepth;function $lzc$class__mjc ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
}
}
