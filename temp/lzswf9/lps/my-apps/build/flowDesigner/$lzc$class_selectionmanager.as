package {
dynamic class $lzc$class_selectionmanager extends LzNode {
/* -*- file: utils/selectionmanager.lzx#16 -*- */
static var tagname = "selectionmanager";static var attributes = new LzInheritedHash(LzNode.attributes);var sel;var selectedHash;var selected;var toggle;var lastRangeStart;override function construct ($0, $1) {
/* -*- file: #116 -*- */
super.construct($0, $1);
this.__LZsetSelection([])
}




override function destroy () {
if (this.__LZdeleted) return;
this.__LZsetSelection([]);
super.destroy()
}












function __LZaddToSelection ($0:*, $1:LzView):void {
if ($0 != null && !this.__LZisSelected($0)) {
this.selected.push($0);
this.__LZsetSelected($0, $1, true)
}}









function __LZremoveFromSelection ($0:*, $1:LzView):void {
var $2:int = this.__LZindexOf($0);
if ($2 != -1) {
this.selected.splice($2, 1);
this.__LZsetSelected($0, $1, false)
}}








function __LZindexOf ($0:*):int {
var $1:Array = this.selected;
for (var $2:int = $1.length - 1;$2 >= 0;--$2) {
if ($1[$2] === $0) return $2
};
return -1
}










function __LZupdateSelection ($0:Array, $1:Array):void {
this.__LZsetSelection($0);
for (var $2:int = $1.length - 1;$2 >= 0;--$2) {
var $3:* = $1[$2];
this.__LZsetSelected($3, this.__LZgetView($3), false)
}}










function __LZselectRange ($0:*, $1:LzView):void {
var $2:Array = this.createRange($0, $1);
if ($2 != null) {
var $3:Object = this.__LZsplitRange($2);
this.__LZupdateSelection($3.unchanged, $3.removed);
this.lastRangeStart = $0;
var $4:Array = $3.added;
for (var $5:int = $4.length - 1;$5 >= 0;--$5) {
var $6:* = $4[$5];
this.__LZaddToSelection($6, this.__LZgetView($6))
}} else {

this.clearSelection();
this.lastRangeStart = $0
}}

















function __LZgetSubList ($0:Array, $1:*, $2:*):Array {
var $3:int = -1;
var $4:int = -1;
for (var $5:int = $0.length - 1;$5 >= 0 && ($3 == -1 || $4 == -1);--$5) {
if ($0[$5] === $1) $3 = $5;
if ($0[$5] === $2) $4 = $5
};
var $6:Array = null;
if ($3 != -1 && $4 != -1) {
if ($4 < $3) {
$6 = $0.slice($4, $3 + 1);
$6.reverse()
} else {
$6 = $0.slice($3, $4 + 1)
}};

return $6
}











function __LZgetObject ($0:LzView) {
return $0
}







function __LZgetView ($0:*):LzView {
return $0
}







function __LZsetSelection ($0:Array):void {
var $1:Object = {};
for (var $2:int = $0.length - 1;$2 >= 0;--$2) {
$1[$0[$2].__LZUID] = true
};
this.selectedHash = $1;
this.selected = $0;
this.lastRangeStart = null
}







function __LZisSelected ($0:*):Boolean {
return this.selectedHash[$0.__LZUID] == true
}









function __LZsetSelected ($0:*, $1:LzView, $2:Boolean):void {
if ($2) {
this.selectedHash[$1.__LZUID] = true
} else {
delete this.selectedHash[$1.__LZUID]
};
if ($1[this.sel]) {
$1[this.sel]($2)
}}

















function __LZsplitRange ($0:Array):Object {
var $1:Array = this.selected;
var $2:Object = this.selectedHash;
var $3:Object = {};
var $4:Array = [], $5:Array = [], $6:Array = [];
for (var $7:int = $0.length - 1;$7 >= 0;--$7) {
var $8:LzView = $0[$7];
if ($2[$8.__LZUID]) {
$4.push($8);
$3[$8.__LZUID] = true
} else {
$5.push($8)
}};

for (var $7:int = $1.length - 1;$7 >= 0;--$7) {
var $8:LzView = $1[$7];
if (!$3[$8.__LZUID]) {
$6.push($8)
}};

return {unchanged: $4, added: $5, removed: $6}}














function createRange ($0:*, $1:LzView):Array {
return this.__LZgetSubList($0.immediateparent.subviews, $0, $1)
}










function isSelected ($0):Boolean {
return this.__LZisSelected(this.__LZgetObject($0))
}






function select ($0) {
var $1:* = this.__LZgetObject($0);
var $2:Boolean = this.__LZisSelected($1);
if ($2 && (this.toggle || this.isMultiSelect($0))) {
this.unselect($0)
} else {
if (this.selected.length > 0 && this.isRangeSelect($0)) {
var $3:* = this.lastRangeStart || this.selected[0];
this.__LZselectRange($3, $0)
} else {
if (!this.isMultiSelect($0)) {
var $4:int = $2 ? this.__LZindexOf($1) : -1;
var $5:Array = this.selected;
this.__LZupdateSelection($4 != -1 ? $5.splice($4, 1) : [], $5)
};
this.__LZaddToSelection($1, $0)
}}}








function unselect ($0) {
this.__LZremoveFromSelection(this.__LZgetObject($0), $0)
}





function clearSelection () {
this.__LZupdateSelection([], this.selected)
}





function getSelection ():Array {
return this.selected.concat()
}









function isMultiSelect ($0) {
return lz.Keys.isKeyDown("control")
}









function isRangeSelect ($0) {
return lz.Keys.isKeyDown("shift")
}
/* -*- file: -*- */
function $lzc$class_selectionmanager ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
LzNode.mergeAttributes({$CSSDescriptor: {}, $attributeDescriptor: {types: {classroot: "string", cloneManager: "string", datapath: "string", defaultplacement: "string", id: "ID", ignoreplacement: "boolean", immediateparent: "string", inited: "boolean", initstage: "string", name: "token", nodeLevel: "number", options: "css", parent: "string", placement: "string", sel: "string", styleclass: "string", subnodes: "string", toggle: "boolean", transition: "string", "with": "string"}}, sel: "setSelected"}, $lzc$class_selectionmanager.attributes);}
}
