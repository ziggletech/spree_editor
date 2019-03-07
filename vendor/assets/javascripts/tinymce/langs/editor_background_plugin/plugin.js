tinymce.PluginManager.add('editor_background_plugin', function(editor, url) {
    // Add a button that opens a window
    editor.addButton('ebackcolor', {
      text: 'Background color',
      icon: false,
      onclick: function() {
        // Open window

         editor.windowManager.open({
          title: 'Enter Hexcode',
          body: {
              type: 'textbox', 
              name: 'body_bgcolor'},

           onsubmit: function(e) {
            old_content = tinyMCE.activeEditor.getContent({format: 'raw'});

             if (!old_content.startsWith('<div id="con_p" style="background:')) {
              update_content = '<div id="con_p" style="background:'+ e.data.body_bgcolor +'">' + old_content + '</div>';

               tinyMCE.activeEditor.setContent(update_content,{format: 'raw'});
            } else {

               update_content = old_content.replace(/<div id="con_p" style="background:(.*?)">/, '<div id="con_p" style="background:'+ e.data.body_bgcolor +'">')
              tinyMCE.activeEditor.setContent(update_content,{format: 'raw'});
            }


             }
        });
      }
    });

   });
