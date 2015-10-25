/* ==========================================================================

    Project: Test Project
    Author: XHTMLized
    Last updated: @@timestamp

   ========================================================================== */

(function($) {

  'use strict';

  var App = {

    /**
     * Init Function
     */
    init: function() {
        App.checkBrowser();
        App.showColorboxSlideshow();
    },

    /**
     * Displays Colorbox after start of the page
     */
    showColorboxSlideshow: function() {
        //Start the plugin
        $("a.colorboxy").colorbox({open: true, rel:'group4', loop: false});

        //Go to the next image after 2 sec delay.
        setInterval($.colorbox.next, 2000);

        //Close the plugin after reaching the last image.
        $(document).bind('cbox_complete', function(){
            var curentImageIndex = $.colorbox.settings.currentImageIndex;
            var totalImages = $.colorbox.settings.totalNumberOfImages;

            if(curentImageIndex == totalImages){
                setTimeout(function(){
                    $.colorbox.close();
                }, 2000);
            }
        });
    },

    /**
     * Change dots css style depends on browser
     */
    checkBrowser: function() {
        var isFirefox = typeof InstallTrigger !== 'undefined';
        var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;

        if(isFirefox) {
            $('hr.dotted').css('border-width', '2px 2px 3px');
        }else if(isSafari){
            $('hr.dotted').css('border-width', '0px 0px 3px');
        }else{
            $('hr.dotted').css('border-width', '0px 0px 2px');
        }
    }

  };

  $(function() {
    App.init();
  });

})(jQuery);
