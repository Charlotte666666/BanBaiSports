/*
This file is part of Ext JS 3.4

Copyright (c) 2011-2013 Sencha Inc

Contact:  http://www.sencha.com/contact

GNU General Public License Usage
This file may be used under the terms of the GNU General Public License version 3.0 as
published by the Free Software Foundation and appearing in the file LICENSE included in the
packaging of this file.

Please review the following information to ensure the GNU General Public License version 3.0
requirements will be met: http://www.gnu.org/copyleft/gpl.html.

If you are unsure which license is appropriate for your use, please contact the sales department
at http://www.sencha.com/contact.

Build date: 2013-04-03 15:07:25
*/

// Sample desktop configuration
MyDesktop = new Ext.app.App({
	init :function(){
		Ext.QuickTips.init();
	},

	getModules : function(){
		return [
			new MyDesktop.GridWindow(),
            new MyDesktop.TabWindow(),
            new MyDesktop.AccordionWindow(),
            new MyDesktop.BogusMenuModule(),
            new MyDesktop.BogusModule()
		];
	},

    // config for the start menu
    getStartConfig : function(){
        return {
            title: '系统管理员',
            iconCls: 'user',
            toolItems: [{
                text:'系统设置',
                iconCls:'settings',
                scope:this
            },'-',{
                text:'退出系统',
                iconCls:'logout',
                scope:this
            }]
        };
    }
});



/*
 * Example windows
 */
MyDesktop.GridWindow = Ext.extend(Ext.app.Module, {
    id:'grid-win',
    init : function(){
        this.launcher = {
            text: '邮件',
            iconCls:'icon-grid',
            handler : this.createWindow,
            scope: this
        }
    },

    createWindow : function(){
        var desktop = this.app.getDesktop();
        var win = desktop.getWindow('grid-win');
        if(!win){
            win = desktop.createWindow({
                id: 'grid-win',
                title:'邮件',
                width:740,
                height:480,
                iconCls: 'icon-grid',
                shim:false,
                animCollapse:false,
                constrainHeader:true,

                layout: 'fit',
                items:
                    new Ext.grid.GridPanel({
                        border:false,
                        ds: new Ext.data.Store({
                            reader: new Ext.data.ArrayReader({}, [
                               {name: 'emailTitle'},
                               {name: 'sender'},
                               {name: 'sendTime'}
                            ]),
                            data: Ext.grid.dummyData
                        }),
                        cm: new Ext.grid.ColumnModel([
                            new Ext.grid.RowNumberer(),
                            {header: "标题", width: 200, sortable: true, dataIndex: 'emailTitle'},
                            {header: "发件人", width: 70, sortable: true, dataIndex: 'sender'},
                            {header: "时间", width: 70, sortable: true, dataIndex: 'sendTime'}
                        ]),

                        viewConfig: {
                            forceFit:true
                        },
                        tbar:[{
                            text:'写邮件',
                            tooltip:'Add a new row',
                            iconCls:'add'
                        }, '-', {
                            text:'收件箱',
                            tooltip:'Blah blah blah blaht',
                            iconCls:'option'
                        },'-',{
                            text:'删除邮件',
                            tooltip:'Remove the selected item',
                            iconCls:'remove'
                        }]
                    })
            });
        }
        win.show();
    }
});



MyDesktop.TabWindow = Ext.extend(Ext.app.Module, {
    id:'tab-win',
    init : function(){
        this.launcher = {
            text: '项目管理',
            iconCls:'tabs',
            handler : this.createWindow,
            scope: this
        }
    },

    createWindow : function(){
        var desktop = this.app.getDesktop();
        var win = desktop.getWindow('tab-win');
        if(!win){
            win = desktop.createWindow({
                id: 'tab-win',
                title:'项目管理',
                width:740,
                height:480,
                iconCls: 'tabs',
                shim:false,
                animCollapse:false,
                border:false,
                constrainHeader:true,

                layout: 'fit',
                items:
                    new Ext.TabPanel({
                        activeTab:0,

                        items: [{
                            title: '子标签1',
                            header:false,
                            html : '<p>这里显示内容</p>',
                            border:false
                        },{
                            title: '子标签2',
                            header:false,
                            html : '<p>这里显示内容</p>',
                            border:false
                        },{
                            title: '子标签3',
                            header:false,
                            html : '<p>这里显示内容</p>',
                            border:false
                        },{
                            title: '子标签4',
                            header:false,
                            html : '<p>这里显示内容</p>',
                            border:false
                        }]
                    })
            });
        }
        win.show();
    }
});



MyDesktop.AccordionWindow = Ext.extend(Ext.app.Module, {
    id:'acc-win',
    init : function(){
        this.launcher = {
            text: '通讯录',
            iconCls:'accordion',
            handler : this.createWindow,
            scope: this
        }
    },

    createWindow : function(){
        var desktop = this.app.getDesktop();
        var win = desktop.getWindow('acc-win');
        if(!win){
            win = desktop.createWindow({
                id: 'acc-win',
                title: '通讯录',
                width:250,
                height:450,
                iconCls: 'accordion',
                shim:false,
                animCollapse:false,
                constrainHeader:true,

                tbar:[],

                layout:'accordion',
                border:false,
                layoutConfig: {
                    animate:false
                },

                items: [
                    new Ext.tree.TreePanel({
                        id:'im-tree',
                        title: '人员列表',
                        loader: new Ext.tree.TreeLoader(),
                        rootVisible:false,
                        lines:false,
                        autoScroll:true,
                        tools:[{
                            id:'refresh',
                            on:{
                                click: function(){
                                    var tree = Ext.getCmp('im-tree');
                                    tree.body.mask('Loading', 'x-mask-loading');
                                    tree.root.reload();
                                    tree.root.collapse(true, false);
                                    setTimeout(function(){
                                        tree.body.unmask();
                                        tree.root.expand(true, true);
                                    }, 1000);
                                }
                            }
                        }],
                        root: new Ext.tree.AsyncTreeNode({
                            text:'',
                            children:[{
                                text:'监控室',
                                expanded:true,
                                children:[{
                                    text:'张三',
                                    iconCls:'user',
                                    leaf:true
                                },{
                                    text:'李四',
                                    iconCls:'user',
                                    leaf:true
                                },{
                                    text:'王五',
                                    iconCls:'user',
                                    leaf:true
                                },{
                                    text:'张二',
                                    iconCls:'user',
                                    leaf:true
                                },{
                                    text:'李六',
                                    iconCls:'user',
                                    leaf:true
                                },{
                                    text:'王七',
                                    iconCls:'user',
                                    leaf:true
                                },{
                                    text:'张飞',
                                    iconCls:'user',
                                    leaf:true
                                }]
                            },{
                                text:'资料室',
                                expanded:true,
                                children:[{
                                    text:'李一',
                                    iconCls:'user-girl',
                                    leaf:true
                                },{
                                    text:'王二',
                                    iconCls:'user-girl',
                                    leaf:true
                                },{
                                    text:'小王',
                                    iconCls:'user',
                                    leaf:true
                                },{
                                    text:'佳佳',
                                    iconCls:'user',
                                    leaf:true
                                }]
                            }]
                        })
                    }), new Ext.tree.TreePanel({
                        id:'group-tree',
                        title: '群组',
                        loader: new Ext.tree.TreeLoader(),
                        rootVisible:false,
                        lines:false,
                        autoScroll:true,
                        tools:[{
                            id:'refresh',
                            on:{
                                click: function(){
                                    var tree = Ext.getCmp('im-tree');
                                    tree.body.mask('Loading', 'x-mask-loading');
                                    tree.root.reload();
                                    tree.root.collapse(true, false);
                                    setTimeout(function(){
                                        tree.body.unmask();
                                        tree.root.expand(true, true);
                                    }, 1000);
                                }
                            }
                        }],
                        root: new Ext.tree.AsyncTreeNode({
                            text:'',
                            children:[{
                                text:'信息中心',
                                expanded:true,
                                children:[{
                                    text:'第一小组',
                                    leaf:true
                                },{
                                    text:'第二小组',
                                    leaf:true
                                },{
                                    text:'第三小组',
                                    leaf:true
                                }]
                            },{
                                text:'档案楼',
                                expanded:true,
                                children:[{
                                    text:'第一小组',
                                    leaf:true
                                },{
                                    text:'第二小组',
                                    leaf:true
                                },{
                                    text:'第三小组',
                                    leaf:true
                                }]
                            }]
                        })
                    })
                ]
            });
        }
        win.show();
    }
});

// for example purposes
var windowIndex = 0;

MyDesktop.BogusModule = Ext.extend(Ext.app.Module, {
    init : function(){
        this.launcher = {
            text: '栏目 '+(++windowIndex),
            iconCls:'bogus',
            handler : this.createWindow,
            scope: this,
            windowId:windowIndex
        }
    },

    createWindow : function(src){
        var desktop = this.app.getDesktop();
        var win = desktop.getWindow('bogus'+src.windowId);
        if(!win){
            win = desktop.createWindow({
                id: 'bogus'+src.windowId,
                title:src.text,
                width:640,
                height:480,
                html : '<p>栏目内容</p>',
                iconCls: 'bogus',
                shim:false,
                animCollapse:false,
                constrainHeader:true
            });
        }
        win.show();
    }
});


MyDesktop.BogusMenuModule = Ext.extend(MyDesktop.BogusModule, {
    init : function(){
        this.launcher = {
            text: 'OA系统',
            iconCls: 'bogus',
            handler: function() {
				return false;
			},
            menu: {
                items:[{
                    text: '栏目 '+(++windowIndex),
                    iconCls:'bogus',
                    handler : this.createWindow,
                    scope: this,
                    windowId: windowIndex
                    },{
                    text: '栏目 '+(++windowIndex),
                    iconCls:'bogus',
                    handler : this.createWindow,
                    scope: this,
                    windowId: windowIndex
                    },{
                    text: '栏目 '+(++windowIndex),
                    iconCls:'bogus',
                    handler : this.createWindow,
                    scope: this,
                    windowId: windowIndex
                    },{
                    text: '栏目 '+(++windowIndex),
                    iconCls:'bogus',
                    handler : this.createWindow,
                    scope: this,
                    windowId: windowIndex
                    },{
                    text: '栏目 '+(++windowIndex),
                    iconCls:'bogus',
                    handler : this.createWindow,
                    scope: this,
                    windowId: windowIndex
                }]
            }
        }
    }
});


// Array data for the grid
Ext.grid.dummyData = [
    ['邮件标题1','张三','9/1 12:00am'],
    ['邮件标题2','李四','9/1 12:00am'],
    ['邮件标题3','张三','9/1 12:00am'],
    ['邮件标题4','李四','9/1 12:00am'],
    ['邮件标题5','李四','9/1 12:00am'],
    ['邮件标题6','张三','9/1 12:00am'],
    ['邮件标题7','李四','9/1 12:00am'],
    ['邮件标题8','张三','9/1 12:00am'],
    ['邮件标题9','张三','9/1 12:00am'],
    ['邮件标题10','李四','9/1 12:00am'],
    ['邮件标题11','李四','9/1 12:00am'],
    ['邮件标题12','张三','9/1 12:00am'],
    ['邮件标题13','李四','9/1 12:00am'],
    ['邮件标题14','张三','9/1 12:00am'],
    ['邮件标题15','张三','9/1 12:00am'],
    ['邮件标题16','张三','9/1 12:00am'],
    ['邮件标题17','李四','9/1 12:00am'],
    ['邮件标题18','李四','9/1 12:00am'],
    ['邮件标题19','李四','9/1 12:00am'],
    ['邮件标题20','张三','9/1 12:00am']
];