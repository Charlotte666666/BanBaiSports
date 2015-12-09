package {
public dynamic class $lzc$class_Tree extends LzView {
/* -*- file: common/components/Tree.lzx#10 -*- */
public static var tagname = "Tree";public static var children = [{attrs: {$classrootdepth: 1, height: 1, name: "_spacing1", width: new LzAlwaysExpr("$msu", "$msv", "='${...}'")}, "class": $lzc$class__mtx}, {attrs: {$classrootdepth: 1, _spacing2: void 0, bgcolor: 15267068, height: new LzAlwaysExpr("$msy", "$msz", "='${...}'"), layout: {axis: "y", spacing: 2}, name: "v", shadowangle: 45, shadowblurradius: 5, shadowcolor: new LzOnceExpr("$mt0", "='$once{...}'"), shadowdistance: 0, tree: void 0, width: new LzAlwaysExpr("$msw", "$msx", "='${...}'"), x: 10}, "class": $lzc$class__mty}, {attrs: {$classrootdepth: 1, visible: new LzAlwaysExpr("$mtv", "$mtw", "='${...}'")}, "class": $lzc$class__mu7}];public static var attributes = new LzInheritedHash(LzView.attributes);public function $mst ($0) {
/* -*- file: -*- */
try {
/* -*- file: common/components/Tree.lzx#9 -*- */
this.setAttribute("bgcolor", gConstant.areaBgColor)
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error && $lzsc$e !== lz["$lzsc$thrownError"]) {
$lzsc$runtime.$reportException("common/components/Tree.lzx", 9, $lzsc$e)
} else {
throw $lzsc$e
}}}
public var dataNodeList;public var nodeIdName;public var nodeTextName;public var nodeParentIdName;public var rootId;public var nodeOrderName;public var currentNode;public var currentNodeDeep;public var dirNameLevel;public var onNodeClick;public function doClick (node_$0) {
try {
/* -*- file: common/components/Tree.lzx#23 -*- */
this.onNodeClick.sendEvent(node_$0)
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error && $lzsc$e !== lz["$lzsc$thrownError"]) {
$lzsc$runtime.$reportException("common/components/Tree.lzx", 22, $lzsc$e)
} else {
throw $lzsc$e
}}}
/* -*- file: common/components/Tree.lzx#26 -*- */
public function getTreeDataNode (dataNode_$0, level_$1) {
/* -*- file: -*- */
try {
/* -*- file: common/components/Tree.lzx#27 -*- */
var node_$2:LzDataElement = lz.DataElement.stringToLzData("<item nodeId='' name='' isleaf='true' />", false, false);
var nodeId_$3:String = dataNode_$0.getAttr(this.nodeIdName);
node_$2.setAttr("nodeId", nodeId_$3);
node_$2.setAttr("name", dataNode_$0.getAttr(this.nodeTextName));

if (level_$1 == 8) return node_$2;

level_$1++;

for (var i_$4 = 0;i_$4 < this.dataNodeList.length;i_$4++) {
if (this.dataNodeList[i_$4].getAttr(this.nodeParentIdName) == nodeId_$3) {
node_$2.setAttr("isleaf", "false");
node_$2.appendChild(this.getTreeDataNode(this.dataNodeList[i_$4], level_$1))
}};

return node_$2
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error && $lzsc$e !== lz["$lzsc$thrownError"]) {
$lzsc$runtime.$reportException("common/components/Tree.lzx", 26, $lzsc$e)
} else {
throw $lzsc$e
}}}
/* -*- file: common/components/Tree.lzx#45 -*- */
public function udpateDatasetList (_dataNodeList_$0, _rootId_$1:String) {
/* -*- file: -*- */
try {
/* -*- file: common/components/Tree.lzx#46 -*- */
if (!_dataNodeList_$0) return;
if (!_rootId_$1) {
this.rootId = _rootId_$1
} else this.rootId = "0";

var dataNode_$2 = null;
this.dataNodeList = _dataNodeList_$0;
for (var i_$3 = 0;i_$3 < this.dataNodeList.length;i_$3++) {
if (this.dataNodeList[i_$3].getAttr(this.nodeIdName) == this.rootId) {
dataNode_$2 = this.dataNodeList[i_$3];
break
}};

if (!dataNode_$2) return;
this.udpateDataset(this.getTreeDataNode(dataNode_$2, 1))
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error && $lzsc$e !== lz["$lzsc$thrownError"]) {
$lzsc$runtime.$reportException("common/components/Tree.lzx", 45, $lzsc$e)
} else {
throw $lzsc$e
}}}
/* -*- file: common/components/Tree.lzx#63 -*- */
public function udpateDataset (_dataNode_$0) {
/* -*- file: -*- */
try {
/* -*- file: common/components/Tree.lzx#64 -*- */
var node_$1:LzDataElement = lz.DataElement.stringToLzData("<item nodeId='-1' name='root' />", false, false);
node_$1.appendChild(_dataNode_$0);
this.v.tree.datapath.setNodes(node_$1.childNodes)
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error && $lzsc$e !== lz["$lzsc$thrownError"]) {
$lzsc$runtime.$reportException("common/components/Tree.lzx", 63, $lzsc$e)
} else {
throw $lzsc$e
}}}
/* -*- file: common/components/Tree.lzx#69 -*- */
public function getParentName (node_$0) {
/* -*- file: -*- */
try {
/* -*- file: common/components/Tree.lzx#70 -*- */
var parentDir_$1:String = "";
if (node_$0.nodeId != this.rootId && node_$0.parent) {
node_$0 = node_$0.parent;
parentDir_$1 = node_$0.text
};
this.currentNodeDeep = 1;
while (node_$0.nodeId != this.rootId && node_$0.parent && this.currentNodeDeep < 10) {
node_$0 = node_$0.parent;
parentDir_$1 = node_$0.text + " ~ " + parentDir_$1;
this.currentNodeDeep++;
if (this.dirNameLevel > 0 && this.currentNodeDeep == this.dirNameLevel) break
};
return parentDir_$1
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error && $lzsc$e !== lz["$lzsc$thrownError"]) {
$lzsc$runtime.$reportException("common/components/Tree.lzx", 69, $lzsc$e)
} else {
throw $lzsc$e
}}}
/* -*- file: common/components/Tree.lzx#85 -*- */
public function getNodeAttValue (id_$0, attName_$1) {
/* -*- file: -*- */
try {
/* -*- file: common/components/Tree.lzx#86 -*- */
for (var i_$2 = 0;i_$2 < this.dataNodeList.length;i_$2++) {
if (this.dataNodeList[i_$2].getAttr(this.nodeIdName) == id_$0) {
return this.dataNodeList[i_$2].getAttr(attName_$1)
}};

return ""
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error && $lzsc$e !== lz["$lzsc$thrownError"]) {
$lzsc$runtime.$reportException("common/components/Tree.lzx", 85, $lzsc$e)
} else {
throw $lzsc$e
}}}
/* -*- file: common/components/Tree.lzx#94 -*- */
public function getNodeDirName (id_$0, attName_$1) {
/* -*- file: -*- */
try {
/* -*- file: common/components/Tree.lzx#95 -*- */
for (var i_$2 = 0;i_$2 < this.dataNodeList.length;i_$2++) {
if (this.dataNodeList[i_$2].getAttr(this.nodeIdName) == id_$0) {
var pid_$3 = this.dataNodeList[i_$2].getAttr(this.nodeParentIdName);
if (pid_$3 == this.rootId) return this.dataNodeList[i_$2].getAttr(attName_$1);
return this.getNodeDirName(pid_$3, attName_$1) + " ~ " + this.dataNodeList[i_$2].getAttr(attName_$1)
}};

return ""
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error && $lzsc$e !== lz["$lzsc$thrownError"]) {
$lzsc$runtime.$reportException("common/components/Tree.lzx", 94, $lzsc$e)
} else {
throw $lzsc$e
}}}
/* -*- file: common/components/Tree.lzx#105 -*- */
public function isHasChildren (id_$0) {
/* -*- file: -*- */
try {
/* -*- file: common/components/Tree.lzx#106 -*- */
for (var i_$1 = 0;i_$1 < this.dataNodeList.length;i_$1++) {
if (this.dataNodeList[i_$1].getAttr(this.nodeParentIdName) == id_$0) {
return true
}};

return false
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error && $lzsc$e !== lz["$lzsc$thrownError"]) {
$lzsc$runtime.$reportException("common/components/Tree.lzx", 105, $lzsc$e)
} else {
throw $lzsc$e
}}}
public var _spacing1;public var v;public function $lzc$class_Tree (parent_$0:LzNode? = null, attrs_$1:Object? = null, children_$2:Array? = null, async_$3:Boolean = false) {
super(parent_$0, attrs_$1, children_$2, async_$3)
}
LzNode.mergeAttributes({$CSSDescriptor: {}, $attributeDescriptor: {types: {aaactive: "boolean", aadescription: "string", aaname: "string", aasilent: "boolean", aatabindex: "number", align: "string", backgroundrepeat: "string", bgcolor: "color", cachebitmap: "boolean", capabilities: "string", classroot: "string", clickable: "boolean", clickregion: "string", clip: "boolean", cloneManager: "string", contextmenu: "string", cornerradius: "string", currentNodeDeep: "number", cursor: "token", datapath: "string", defaultplacement: "string", dirNameLevel: "number", fgcolor: "color", focusable: "boolean", focustrap: "boolean", font: "string", fontsize: "size", fontstyle: "string", frame: "numberExpression", framesloadratio: "number", hasdirectionallayout: "boolean", hassetheight: "boolean", hassetwidth: "boolean", height: "size", id: "ID", ignoreplacement: "boolean", immediateparent: "string", inited: "boolean", initstage: "string", layout: "css", loadratio: "number", mask: "string", name: "token", nodeIdName: "string", nodeLevel: "number", nodeOrderName: "string", nodeParentIdName: "string", nodeTextName: "string", opacity: "number", options: "css", parent: "string", pixellock: "boolean", placement: "string", playing: "boolean", resource: "string", resourceheight: "number", resourcewidth: "number", rootId: "string", rotation: "numberExpression", shadowangle: "number", shadowblurradius: "number", shadowcolor: "color", shadowdistance: "number", showhandcursor: "boolean", source: "string", stretches: "string", styleclass: "string", subnodes: "string", subviews: "string", tintcolor: "string", totalframes: "number", transition: "string", unstretchedheight: "number", unstretchedwidth: "number", usegetbounds: "boolean", valign: "string", visibility: "string", visible: "boolean", width: "size", "with": "string", x: "numberExpression", xoffset: "numberExpression", xscale: "numberExpression", y: "numberExpression", yoffset: "numberExpression", yscale: "numberExpression"}}, bgcolor: new LzOnceExpr("$mst", "='$once{...}'"), clip: true, currentNodeDeep: 1, dirNameLevel: -1, layout: {axis: "y", spacing: 10}, nodeIdName: "nodeId", nodeOrderName: "sort_order", nodeParentIdName: "parentId", nodeTextName: "name", onNodeClick: LzDeclaredEvent, rootId: "0", width: 345}, $lzc$class_Tree.attributes);}
}
