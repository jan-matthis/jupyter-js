/* shortcuts */

require(["base/js/events"], function (events) { 
        events.on("notebook_loaded.Notebook", function () {

                // toggle notebook width
                IPython.keyboard_manager.command_shortcuts.add_shortcut("Ctrl-Shift-f", {
                    help : 'Toggle container width',
                    help_index : 'zzz',
                    handler : function(e) { 
                        
                        //console.log('Toggle Container Width');
        
                        var currentWidth = $('.container').css('width');
                        var newWidth = '100%';
                        if(null == window.originalWidth) {
                            window.originalWidth = currentWidth;
                        } else {
                            if(currentWidth !== window.originalWidth) {
                                newWidth = window.originalWidth;
                            }
                        }
                        $('.container').css('width',newWidth);
                        
                        return false;
                    }}
                );
        
        
        
                // toggle code (hide/show)
                IPython.keyboard_manager.command_shortcuts.add_shortcut("Alt-t", {
                    help : 'Toggle code',
                    help_index : 'zzz',
                    handler : function(e) { 
                        $('div.input').toggle();
                        return false;
                    }}
                );
        
        
        
                // clear all output
                IPython.keyboard_manager.command_shortcuts.add_shortcut("Ctrl-x", {
                    help : 'Clear all output',
                    help_index : 'zzz',
                    handler : function(e) { 
                        IPython.notebook.clear_all_output();
                        return false;
                    }}
                );
        
        
        
                // open qt console
                IPython.keyboard_manager.command_shortcuts.add_shortcut("Shift-q", {
                    help : 'Open QT Console',
                    help_index : 'zzz',
                    handler : function(e) { 
                        IPython.notebook.kernel.execute('%qtconsole');
                        return false;
                    }}
                );

        })
});


/* mathjax */
MathJax.Hub.Config({
        TeX: {
              extensions: ["AMSmath.js"],
              Macros: {
                suml: "{\\sum}",
                argmaxl: ["{argmax #1}",1]
              }
        },
        tex2jax: {
            inlineMath: [ ['$','$'], ["\\(","\\)"] ],
            displayMath: [ ['$$','$$'], ["\\[","\\]"] ]
        },
        displayAlign: 'center', // Change this to 'center' to center equations.
        "HTML-CSS": {
            styles: {'.MathJax_Display': {"margin": 4}}
        }
});
