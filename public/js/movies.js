define(['jquery'], function($) {

    function initialize() {
        $('a.delete').on('click', function (ev) {
            ev.preventDefault();
            var url = $(ev.target).parent().attr('href'),
                $row = $(ev.target).closest('tr.movie');

            $.ajax({
                type: 'POST',
                url: url
            }).done(function (response) {
                if (response.status === 200) $row.remove();
            }).fail(function (error) {
                $('#message').slideDown()
                    .html(error.responseJSON.msg)
                    .delay(5000)
                    .slideUp();
            });
        });
    }

    return {
        init: function() {
            initialize();
        }
    }
});
