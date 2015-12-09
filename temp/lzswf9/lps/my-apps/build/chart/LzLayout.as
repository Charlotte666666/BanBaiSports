package {
dynamic class LzLayout extends LzNode {
/* -*- file: utils/layouts/layout.lzx#15 -*- */
static var tagname = "layout";static var attributes = new LzInheritedHash(LzNode.attributes);var vip;var locked;function $lzc$set_locked ($0) {
/* -*- file: #92 -*- */
if (this.locked == $0) return;
if ($0) {
this.lock()
} else {
this.unlock()
}}
/* -*- file: -*- */
var subviews;var updateDelegate;override function construct ($0, $1) {
/* -*- file: utils/layouts/layout.lzx#127 -*- */
this.locked = 2;

super.construct($0, $1);
this.subviews = [];

this.vip = this.immediateparent as LzView;




if (this.vip.layouts == null) {
this.vip.layouts = [this]
} else {
this.vip.layouts.push(this)
};

this.updateDelegate = new LzDelegate(this, "update");


if (this.immediateparent.isinited) {
this.__parentInit()
} else {
new LzDelegate(this, "__parentInit", this.immediateparent, "oninit")
}}





function $m6 ($0) {

new LzDelegate(this, "gotNewSubview", this.vip, "onaddsubview");


new LzDelegate(this, "removeSubview", this.vip, "onremovesubview");


var $1 = this.vip.subviews.length;

for (var $2 = 0;$2 < $1;$2++) {
this.gotNewSubview(this.vip.subviews[$2])
}}





override function destroy () {
if (this.__LZdeleted) return;
this.releaseLayout(true);
super.destroy()
}











function reset ($0 = null) {
if (this.locked) {
/* -*- file: #191 -*- */
return
};
this.update($0)
}











function addSubview ($0) {
var $1 = $0.options["layoutAfter"];
if ($1) {

this.__LZinsertAfter($0, $1)
} else {
this.subviews.push($0)
}}









function gotNewSubview ($0) {
if (!$0.options["ignorelayout"]) {
this.addSubview($0)
}}








function removeSubview ($0) {
var $1 = this.subviews;
for (var $2 = $1.length - 1;$2 >= 0;$2--) {
if ($1[$2] == $0) {
$1.splice($2, 1);
break
}};


this.reset()
}








function ignore ($0) {

var $1 = this.subviews;
for (var $2 = $1.length - 1;$2 >= 0;$2--) {
if ($1[$2] == $0) {
$1.splice($2, 1);
break
}};

this.reset()
}








function lock () {
this.locked = true
}








function unlock ($0 = null) {
this.locked = false;
this.reset()
}




function __parentInit ($0 = null) {

if (this.locked == 2) {
if (this.isinited) {
this.unlock()
} else {
new LzDelegate(this, "unlock", this, "oninit")
}}}








function releaseLayout ($0 = null) {




if ($0 == null && this.__delegates != null) this.removeDelegates();
if (this.immediateparent && this.vip.layouts) {
for (var $1 = this.vip.layouts.length - 1;$1 >= 0;$1--) {
if (this.vip.layouts[$1] == this) {
this.vip.layouts.splice($1, 1)
}}}}














function setLayoutOrder ($0, $1) {
var $2 = this.subviews;
for (var $3 = $2.length - 1;$3 >= 0;$3--) {
if ($2[$3] === $1) {
$2.splice($3, 1);
break
}};


if ($3 == -1) {

return
};

if ($0 == "first") {
$2.unshift($1)
} else if ($0 == "last") {
$2.push($1)
} else {
for (var $4 = $2.length - 1;$4 >= 0;$4--) {
if ($2[$4] === $0) {
$2.splice($4 + 1, 0, $1);
break
}};


if ($4 == -1) {








$2.splice($3, 0, $1)
}};

this.reset();
return
}









function swapSubviewOrder ($0, $1) {

var $2 = -1;
var $3 = -1;

var $4 = this.subviews;
for (var $5 = $4.length - 1;$5 >= 0 && ($2 < 0 || $3 < 0);$5--) {

if ($4[$5] === $0) {
$2 = $5
};
if ($4[$5] === $1) {
$3 = $5
}};


if ($2 >= 0 && $3 >= 0) {
$4[$3] = $0;
$4[$2] = $1
};



this.reset();
return
}




function __LZinsertAfter ($0, $1) {
var $2 = this.subviews;
for (var $3 = $2.length - 1;$3 >= 0;$3--) {
if ($2[$3] == $1) {
$2.splice($3, 0, $0)
}}}


















function update ($0 = null) {}





override function toString () {
return "lz.layout for view " + this.immediateparent
}
/* -*- file: -*- */
function LzLayout ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
LzNode.mergeAttributes({$CSSDescriptor: {}, $attributeDescriptor: {types: {classroot: "string", cloneManager: "string", datapath: "string", defaultplacement: "string", id: "ID", ignoreplacement: "boolean", immediateparent: "string", inited: "boolean", initstage: "string", name: "token", nodeLevel: "number", options: "css", parent: "string", placement: "string", styleclass: "string", subnodes: "string", transition: "string", "with": "string"}}, $delegates: ["onconstruct", "$m6", null], locked: 2}, LzLayout.attributes);}
}
