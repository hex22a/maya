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

maya.PluginManager.add('contextmenu', function(editor) {
	var menu, contextmenuNeverUseNative = editor.settings.contextmenu_never_use_native;

	editor.on('contextmenu', function(e) {
		var contextmenu, doc = editor.getDoc();

		// Block maya menu on ctrlKey
		if (e.ctrlKey && !contextmenuNeverUseNative) {
			return;
		}

		e.preventDefault();

		/**
		 * WebKit/Blink on Mac has the odd behavior of selecting the target word or line this causes
		 * issues when for example inserting images see: #7022
		 */
		if (maya.Env.mac && maya.Env.webkit) {
			if (e.button == 2 && doc.caretRangeFromPoint) {
				editor.selection.setRng(doc.caretRangeFromPoint(e.x, e.y));
			}
		}

		contextmenu = editor.settings.contextmenu || 'link image inserttable | cell row column deletetable';

		// Render menu
		if (!menu) {
			var items = [];

			maya.each(contextmenu.split(/[ ,]/), function(name) {
				var item = editor.menuItems[name];

				if (name == '|') {
					item = {text: name};
				}

				if (item) {
					item.shortcut = ''; // Hide shortcuts
					items.push(item);
				}
			});

			for (var i = 0; i < items.length; i++) {
				if (items[i].text == '|') {
					if (i === 0 || i == items.length - 1) {
						items.splice(i, 1);
					}
				}
			}

			menu = new maya.ui.Menu({
				items: items,
				context: 'contextmenu'
			}).addClass('contextmenu').renderTo();

			editor.on('remove', function() {
				menu.remove();
				menu = null;
			});
		} else {
			menu.show();
		}

		// Position menu
		var pos = {x: e.pageX, y: e.pageY};

		if (!editor.inline) {
			pos = maya.DOM.getPos(editor.getContentAreaContainer());
			pos.x += e.clientX;
			pos.y += e.clientY;
		}

		menu.moveTo(pos.x, pos.y);
	});
});