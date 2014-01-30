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
           
            // console.log(s.article.offset().top);
            // console.log(heights.finalHeight);
            // console.log(heights.articleHeight);
            // var boundary = s.article.offset().top;
            var scrolled = 0;
            // console.log('padding: ' + s.article.css('padding-top'));
            var fixOffset = s.article.offset().top - parseInt(s.article.css('padding-top'));
            $(window).scroll(function(heights){
                // determineHeight(s.article);
                scrolled = $(window).scrollTop();
                if(scrolled > fixOffset){
                    console.log('BOUNDARY');
                    determineHeight(scrolled, s.article.outerHeight());
                }
                
            });
        }

        function determineHeight(scrolled, total){
            // console.log(total);
            scrolled = scrolled - s.topOffset;
            // console.log(scrolled);
            var percent = (scrolled / total) * 100;
            console.log(percent);
        }

        function engage(){
            init();
            checkPosition();
        }



        
 
        // Greenify the collection based on the settings variable.
        return engage();
 
    };
 
}( jQuery ));