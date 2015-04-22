/**
 * plugin.js
 *
 * Copyright, Moxiecode Systems AB
 * Released under LGPL License.
 *
 * License: http://www.maya.com/license
 * Contributing: http://www.maya.com/contributing
 */

/*global maya:true */

maya.PluginManager.add('anchor', function(editor) {
	function showDialog() {
		var selectedNode = editor.selection.getNode(), name = '';

		if (selectedNode.tagName == 'A') {
			name = selectedNode.name || selectedNode.id || '';
		}

		editor.windowManager.open({
			title: 'Anchor',
			body: {type: 'textbox', name: 'name', size: 40, label: 'Name', value: name},
			onsubmit: function(e) {
				editor.execCommand('mceInsertContent', false, editor.dom.createHTML('a', {
					id: e.data.name
				}));
			}
		});
	}

	editor.addButton('anchor', {
		icon: 'anchor',
		tooltip: 'Anchor',
		onclick: showDialog,
		stateSelector: 'a:not([href])'
	});

	editor.addMenuItem('anchor', {
		icon: 'anchor',
		text: 'Anchor',
		context: 'insert',
		onclick: showDialog
	});
});