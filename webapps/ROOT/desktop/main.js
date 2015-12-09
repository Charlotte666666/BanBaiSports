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
            title: 'ϵͳ����Ա',
            iconCls: 'user',
            toolItems: [{
                text:'ϵͳ����',
                iconCls:'settings',
                scope:this
            },'-',{
                text:'�˳�ϵͳ',
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
            text: '�ʼ�',
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
                title:'�ʼ�',
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
                            {header: "����", width: 200, sortable: true, dataIndex: 'emailTitle'},
                            {header: "������", width: 70, sortable: true, dataIndex: 'sender'},
                            {header: "ʱ��", width: 70, sortable: true, dataIndex: 'sendTime'}
                        ]),

                        viewConfig: {
                            forceFit:true
                        },
                        tbar:[{
                            text:'д�ʼ�',
                            tooltip:'Add a new row',
                            iconCls:'add'
                        }, '-', {
                            text:'�ռ���',
                            tooltip:'Blah blah blah blaht',
                            iconCls:'option'
                        },'-',{
                            text:'ɾ���ʼ�',
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
            text: '��Ŀ����',
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
                title:'��Ŀ����',
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
                            title: '�ӱ�ǩ1',
                            header:false,
                            html : '<p>������ʾ����</p>',
                            border:false
                        },{
                            title: '�ӱ�ǩ2',
                            header:false,
                            html : '<p>������ʾ����</p>',
                            border:false
                        },{
                            title: '�ӱ�ǩ3',
                            header:false,
                            html : '<p>������ʾ����</p>',
                            border:false
                        },{
                            title: '�ӱ�ǩ4',
                            header:false,
                            html : '<p>������ʾ����</p>',
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
            text: 'ͨѶ¼',
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
                title: 'ͨѶ¼',
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
                        title: '��Ա�б�',
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
                                text:'�����',
                                expanded:true,
                                children:[{
                                    text:'����',
                                    iconCls:'user',
                                    leaf:true
                                },{
                                    text:'����',
                                    iconCls:'user',
                                    leaf:true
                                },{
                                    text:'����',
                                    iconCls:'user',
                                    leaf:true
                                },{
                                    text:'�Ŷ�',
                                    iconCls:'user',
                                    leaf:true
                                },{
                                    text:'����',
                                    iconCls:'user',
                                    leaf:true
                                },{
                                    text:'����',
                                    iconCls:'user',
                                    leaf:true
                                },{
                                    text:'�ŷ�',
                                    iconCls:'user',
                                    leaf:true
                                }]
                            },{
                                text:'������',
                                expanded:true,
                                children:[{
                                    text:'��һ',
                                    iconCls:'user-girl',
                                    leaf:true
                                },{
                                    text:'����',
                                    iconCls:'user-girl',
                                    leaf:true
                                },{
                                    text:'С��',
                                    iconCls:'user',
                                    leaf:true
                                },{
                                    text:'�Ѽ�',
                                    iconCls:'user',
                                    leaf:true
                                }]
                            }]
                        })
                    }), new Ext.tree.TreePanel({
                        id:'group-tree',
                        title: 'Ⱥ��',
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
                                text:'��Ϣ����',
                                expanded:true,
                                children:[{
                                    text:'��һС��',
                                    leaf:true
                                },{
                                    text:'�ڶ�С��',
                                    leaf:true
                                },{
                                    text:'����С��',
                                    leaf:true
                                }]
                            },{
                                text:'����¥',
                                expanded:true,
                                children:[{
                                    text:'��һС��',
                                    leaf:true
                                },{
                                    text:'�ڶ�С��',
                                    leaf:true
                                },{
                                    text:'����С��',
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
            text: '��Ŀ '+(++windowIndex),
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
                html : '<p>��Ŀ����</p>',
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
            text: 'OAϵͳ',
            iconCls: 'bogus',
            handler: function() {
				return false;
			},
            menu: {
                items:[{
                    text: '��Ŀ '+(++windowIndex),
                    iconCls:'bogus',
                    handler : this.createWindow,
                    scope: this,
                    windowId: windowIndex
                    },{
                    text: '��Ŀ '+(++windowIndex),
                    iconCls:'bogus',
                    handler : this.createWindow,
                    scope: this,
                    windowId: windowIndex
                    },{
                    text: '��Ŀ '+(++windowIndex),
                    iconCls:'bogus',
                    handler : this.createWindow,
                    scope: this,
                    windowId: windowIndex
                    },{
                    text: '��Ŀ '+(++windowIndex),
                    iconCls:'bogus',
                    handler : this.createWindow,
                    scope: this,
                    windowId: windowIndex
                    },{
                    text: '��Ŀ '+(++windowIndex),
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
    ['�ʼ�����1','����','9/1 12:00am'],
    ['�ʼ�����2','����','9/1 12:00am'],
    ['�ʼ�����3','����','9/1 12:00am'],
    ['�ʼ�����4','����','9/1 12:00am'],
    ['�ʼ�����5','����','9/1 12:00am'],
    ['�ʼ�����6','����','9/1 12:00am'],
    ['�ʼ�����7','����','9/1 12:00am'],
    ['�ʼ�����8','����','9/1 12:00am'],
    ['�ʼ�����9','����','9/1 12:00am'],
    ['�ʼ�����10','����','9/1 12:00am'],
    ['�ʼ�����11','����','9/1 12:00am'],
    ['�ʼ�����12','����','9/1 12:00am'],
    ['�ʼ�����13','����','9/1 12:00am'],
    ['�ʼ�����14','����','9/1 12:00am'],
    ['�ʼ�����15','����','9/1 12:00am'],
    ['�ʼ�����16','����','9/1 12:00am'],
    ['�ʼ�����17','����','9/1 12:00am'],
    ['�ʼ�����18','����','9/1 12:00am'],
    ['�ʼ�����19','����','9/1 12:00am'],
    ['�ʼ�����20','����','9/1 12:00am']
];