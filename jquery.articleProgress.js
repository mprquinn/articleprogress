;(function ( $ ) {
 
    $.fn.articleProgress = function( options ) {
        var s; //alias to settings

        // This is the easiest way to have default options.
        var settings = $.extend({
            // These are the defaults.
            color: 'deeppink',
            backgroundColor: '#efefef',
            article: $('article'),
            topOffset: 0,
            articleHeight: 0
        }, options );

        var mySettings = {
            container: $('.article-progress'), 
            bar: $('.article-progress .bar')
        }

        function init(){
            s = settings;
            m = mySettings;
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
            s.topOffset = s.article.offset().top - parseInt(s.article.css('padding-top'));
            
            $(window).scroll(function(){
                scrolled = $(window).scrollTop();

                if(scrolled > s.topOffset){
                    m.container.addClass('visible');
                    determineHeight(scrolled, s.article.outerHeight());
                }
                else{
                    m.container.removeClass('visible');
                }
            });
        }

        function determineHeight(scrolled, total){
            total = total - s.topOffset;
            scrolled = scrolled - s.topOffset;
            // console.log('scrolled: ' + scrolled);
            var percent = (scrolled / total) * 100;
            drawBar(percent);
        }

        function drawBar(percent){
            m.bar.css({
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