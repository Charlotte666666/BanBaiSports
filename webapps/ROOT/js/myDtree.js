// Node objectfunction Node(id, pid, name, url, title, target, open) {
	this.id = id;
	this.pid = pid;
	this.name = name;
	this.url = url;
	this.title = title;
	this.target = target;
	this._io = open || false;
	this._is = false;
	this._ls = false;
	this._hc = false;
	this._ai = 0;
	this._p;
};
// Tree objectfunction dTree(objName) {
	this.config = {
		target					: null,
		folderLinks			: true,
		useSelection		: true,
		useCookies			: true,
		useLines				: true,
		useStatusText		: false,
		closeSameLevel	: false,
		inOrder					: false
	}
	this.obj = objName;
	this.aNodes = [];
	this.aIndent = [];
	this.root = new Node(-1);
	this.selectedNode = null;
	this.selectedFound = false;
	this.completed = false;
};
// Adds a new node to the node arraydTree.prototype.add = function(id, pid, name, url, title, target, open) {	this.aNodes[this.aNodes.length] = new Node(id, pid, name, url, title, target, open);};

// Outputs the tree to the page
dTree.prototype.toString = function() {
	var str = '<ul id="dhtmlgoodies_tree2" class="dhtmlgoodies_tree">';
	if (document.getElementById) {		str += this.addNode(this.root);	} else str += 'Browser not supported.';
	str += '</ul>';
	return str;};
// Creates the tree structuredTree.prototype.addNode = function(pNode) {	var str = '';	var n=0;	for (n; n<this.aNodes.length; n++) {		if (this.aNodes[n].pid == pNode.id) {			str += this.node(this.aNodes[n], this.aNodes[n].id);		}	}	return str;
};dTree.prototype.getNodeById = function(nodeId) {	 for (var i=0; i<this.aNodes.length; i++) {		if (this.aNodes[i].id == nodeId) {			return this.aNodes[i];		}	 }	return null;};dTree.prototype.getNodePath = function(nodeId) {	var str = '';	var n=0;	var pid="";	var node=this.getNodeById(nodeId);	if ( !node ) return "";	str=node.name;	if ( nodeId == 0 ) return str;	while( node && node.pid!=0 && n < 10){     n++;     node=this.getNodeById(node.pid);	 str = node.name + " > " + str;	}	return str;};dTree.prototype.getSubNodesNum = function(nodeId) {	var n=0;	for (var i=0; i<this.aNodes.length; i++) {		if (this.aNodes[i].pid == nodeId) {			n++;		}	}	return n;};
// Creates the node , url and textdTree.prototype.node = function(node, nodeId) {	var str = '<li id="'+nodeId+'"';	if ( nodeId == 0 ) str+=' noDrag="true" noSiblings="true" noDelete="true" noRename="true" ';	str += '><a href="javascript:onSelectedNode(\'' + nodeId + '\');" >' + node.name + "</a>";	this.setCS(node);	if (node._hc) {		str += '<ul>';		str += this.addNode(node);		str += '</ul>';	}	str += '</li>';	return str;};
// Checks if a node has any children and if it is the last siblingdTree.prototype.setCS = function(node) {	if ( node._hc ) return ;	for (var n=0; n<this.aNodes.length; n++) {		if (this.aNodes[n].pid == node.id) {			node._hc = true;			return ;		}	}	node._hc = false;
};