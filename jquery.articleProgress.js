;(function ( $ ) {
 
    $.fn.articleProgress = function( options ) {
        var s; //alias to settings

        // This is the easiest way to have default options.
        var settings = $.extend({
            // These are the defaults.
            container: $('.article-progress'),
            bar: $('.article-progress .bar'),
            color: 'deeppink',
            backgroundColor: '#efefef',
            article: $('article'),
            topOffset: 0,
            articleHeight: 0
        }, options );

        function init(){
            s = settings;
            determineHeight();
        }

        function determineHeight(article){
            var bodyHeight = $('body').height,
                height = s.article.outerHeight(),
                boundaryTop = s.article.offset().top,
                bottomHeight = bodyHeight - (boundaryTop + height);

            var total = bodyHeight - (boundaryTop + bottomHeight);
            s.articleHeight = height;
            return heights = {
                articleHeight: height - bottomHeight,
                bodyHeight: bodyHeight,
                finalHeight: total
            }
            // return heights;

        }

        function checkPosition(){
            var scrolled = 0;
            var fixOffset = s.article.offset().top - parseInt(s.article.css('padding-top'));
            
            $(window).scroll(function(){
                scrolled = $(window).scrollTop();

                if(scrolled > fixOffset){
                    s.container.addClass('visible');
                    determineHeight(scrolled, s.article.outerHeight());
                }
                else{
                    s.container.removeClass('visible');
                }
            });
        }

        function determineHeight(scrolled, total){
            scrolled = scrolled - s.topOffset;
            var percent = (scrolled / total) * 100;
            drawBar(percent);
        }

        function drawBar(percent){
            s.bar.css({
                'width': percent + '%'
            });
        }

        function engage(){
            init();
            checkPosition();
        }



        
 
        // Greenify the collection based on the settings variable.
        return engage();
 
    };
 
}( jQuery ));