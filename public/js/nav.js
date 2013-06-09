define(['jquery'], function($) {

    function start() {
        var current = window.location.pathname;
        
        $('ul.nav li').removeClass('active');

        $('ul.nav').find('a[href="' + current + '"]').closest('li').addClass('active');
    }

    return {
        init: function() {
            start();
        }
    }
});
