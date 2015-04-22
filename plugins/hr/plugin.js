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

maya.PluginManager.add('hr', function(editor) {
	editor.addCommand('InsertHorizontalRule', function() {
		editor.execCommand('mceInsertContent', false, '<hr />');
	});

	editor.addButton('hr', {
		icon: 'hr',
		tooltip: 'Horizontal line',
		cmd: 'InsertHorizontalRule'
	});

	editor.addMenuItem('hr', {
		icon: 'hr',
		text: 'Horizontal line',
		cmd: 'InsertHorizontalRule',
		context: 'insert'
	});
});
