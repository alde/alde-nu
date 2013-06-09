define(
    ['jquery', './movies', './nav'],
    function($, movies, nav) {
        nav.init();
        movies.init();
});
