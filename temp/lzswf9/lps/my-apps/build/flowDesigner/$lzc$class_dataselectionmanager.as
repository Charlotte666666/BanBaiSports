package {
dynamic class $lzc$class_dataselectionmanager extends $lzc$class_selectionmanager {
/* -*- file: utils/dataselectionmanager.lzx#15 -*- */
static var tagname = "dataselectionmanager";static var attributes = new LzInheritedHash($lzc$class_selectionmanager.attributes);var manager;var __LZsingleClone;override function destroy () {
/* -*- file: #85 -*- */
if (this.__LZdeleted) return;
this.manager = null;
this.__LZsingleClone = null;
super.destroy()
}


override function __LZgetObject ($0:LzView):* {
return $0.datapath.p
}


override function __LZgetView ($0:*):LzView {
if (this.manager != null) {
return this.manager.getCloneForNode($0, true)
} else {
var $1:LzView = this.__LZsingleClone;
if ($1 && $1.datapath.p === $0) {
return $1
} else {
return null
}}}




override function __LZsetSelection ($0:Array):void {
this.selected = $0;
this.lastRangeStart = null
}


override function __LZisSelected ($0:*):Boolean {
return $0 && $0.sel || false
}


override function __LZsetSelected ($0:*, $1:LzView, $2:Boolean):void {
if (this.manager == null && $1 != null) {
this.manager = $1.cloneManager;
this.__LZsingleClone = $2 && this.manager == null ? $1 : null
};
$0.sel = $2;
if ($1 != null) {

$1.datapath.setSelected($2)
}}



override function __LZsplitRange ($0:Array):Object {
var $1:String = "$lzselkey";
var $2:Array = this.selected;
var $3:Array = [], $4:Array = [], $5:Array = [];
for (var $6:int = $0.length - 1;$6 >= 0;--$6) {
var $7 = $0[$6];
if ($7.sel) {
$3.push($7);
$7.setUserData($1, true)
} else {
$4.push($7)
}};

for (var $6:int = $2.length - 1;$6 >= 0;--$6) {
var $7 = $2[$6];
if (!$7.setUserData($1, null)) {
$5.push($7)
}};

return {unchanged: $3, added: $4, removed: $5}}



override function createRange ($0:*, $1:LzView):Array {
if (this.manager == null) {
this.manager = $1.cloneManager;
if (this.manager == null) {
return null
} else {
this.__LZsingleClone = null
}};

return this.__LZgetSubList(this.manager.nodes, $0, $1.datapath.p)
}






override function getSelection ():Array {
var $0:Array = this.selected;
var $1:Array = [];
for (var $2:int = 0, $3:int = $0.length;$2 < $3;++$2) {
$1[$2] = new LzDatapointer(null, {p: $0[$2]})
};
return $1
}
/* -*- file: -*- */
function $lzc$class_dataselectionmanager ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
}
}
