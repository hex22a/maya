maya.PluginManager.add('blockgrid', function(editor, url) {
    // Add a button that opens a window
    editor.addButton('halfDiv', {
        text: '1/2 div',
        icon: false,
        onclick: function() {
            editor.insertContent('<div class="col-xs-12 col-md-6"></div>');
        }
    });

    editor.addButton('soloDiv', {
        text: '1/1 div',
        icon: false,
        onclick: function() {
            editor.insertContent('<div class="col-xs-12"></div>');
        }
    });

    // Adds a menu item to the tools menu
    editor.addMenuItem('halfDiv', {
        text: '1/2 div',
        context: 'tools',
        onclick: function() {
            editor.insertContent('<div class="col-xs-12 col-md-6"></div>');
        }
    });

    editor.addButton('soloDiv', {
        text: '1/1 div',
        icon: false,
        onclick: function() {
            editor.insertContent('<div class="col-xs-12"></div>');
        }
    });
});