/*globals jQuery, window, document, FastClick */
$(function() {
    FastClick.attach(document.body);
});

(function ($, window, document) {
    'use strict';
    
    window.STARTER = window.STARTER || {
        $window: null,
        $body: null,

        init: function () {
            this.$window = $(window);
            this.$body = $('body');
        },
    };

    $(document).on('ready', function () {
        window.STARTER.init();
    });

}(jQuery, window, document));