(function ($) {
    $.fn.slideShow = function (options) {

//           Supplying default options

        options = $.extend({
            timeOut: 3000,
            showNavigation: true,
            pauseOnHover: true,
            swipeNavigation: true
        }, options);


//        Variables
        var intervals = [],
            slideshowImgs = [],
            originalSrc,
            img,
            cont,
            width,
            height,

//        Creates an object with all the elements with a 'data-slideshow' attribute

            container = this.filter(function () {
                return $(this).data('slideshow');
            });

//        Cycle through all the elements from the container object
//        Later on we'll use the "i" variable to distinguish the separate slideshows from one another

        for (var i = 0; i < container.length; i++) {

            cont = $(container[i]);

            width = container.eq(i).outerWidth(true);
            height = container.eq(i).outerHeight(true);

//            For every separate slideshow, create a helper <div>, each with its own ID.
//            In those we'll store the images for our slides.

            var helpdiv = $('<div id="slideshow-container-' + i + '" class="slideshow" >');

            helpdiv.height(height);
            helpdiv.width(width);

//            If this option is enabled, call a function that appends buttons

            if (options.showNavigation) {
                createNavigation();
            }

//            Append the original image to the helper <div>

            originalSrc = cont.attr('src');
            img = $('<div class="slide" style="background-image: url(' + originalSrc + ')">');
            img.appendTo(helpdiv);

//            Append the images from the data-slideshow attribute

            slideshowImgs[i] = cont.attr('data-slideshow').split("|");

            for (var j = 0; j < slideshowImgs[i].length; j++) {

                img = $('<div class="slide"  ' +  'index='+ j + ' style="background-image: url(' + slideshowImgs[i][j] + ')">');
                img.appendTo(helpdiv);

            }

//            Replace the original element with the helper <div>

            cont.replaceWith(helpdiv);

//            Activate the slideshow

            automaticSlide(i)

        }


        // Functions

//          Slideshow auto switch

        function automaticSlide(index) {

            // Hide all the images except the first one
            $('#slideshow-container-' + index + ' .slide:gt(0)').hide();

            // Every few seconds fade out the first image, fade in the next one,
            // then take the first and append it to the container again, where it becomes last

            intervals[index] = setInterval(function () {
                    $('#slideshow-container-' + index + ' .slide:first').fadeOut("slow")
                        .next('.slide').fadeIn("slow")
                        .end().appendTo('#slideshow-container-' + index + '');
                },
                options.timeOut);
        }


//           Pause on hover and resume on mouse leave

        if (options.pauseOnHover) {
            (function hoverPause() {
                $('.slideshow').on({
                    'mouseenter.hover': function () {
                        clearInterval(intervals[($(this).attr('id').split('-')[2])])
                    },
                    'mouseleave.hover': function () {
                        automaticSlide($(this).attr('id').split('-')[2])
                    }
                });
            })()
        }


//          We use this to prevent the slideshow from resuming once we've stopped it

        function hoverStop(id) {
            $('#' + id + '').off('mouseenter.hover mouseleave.hover');
        }


//          Create the navigation buttons

        function createNavigation() {

//            The buttons themselves
            var leftArrow = $('<div class="leftBtn slideBtn hide">');
            var rightArrow = $('<div class="rightBtn slideBtn hide">');
//            Arrows for the buttons
            var nextPointer = $('<span class="pointer next"></span>');
            var prevPointer = $('<span class="pointer previous"></span>');

            prevPointer.appendTo(leftArrow);
            nextPointer.appendTo(rightArrow);

            leftArrow.appendTo(helpdiv);
            rightArrow.appendTo(helpdiv);
        }

//          Slideshow manual switch

        if (options.showNavigation) {

//            This shows the navigation when the mouse enters the slideshow
//            and hides it again when it leaves it

            $('.slideshow').on({
                'mouseenter': function () {
                    $(this).find('.leftBtn, .rightBtn').removeClass('hide')
                },
                'mouseleave': function () {
                    $(this).find('.leftBtn, .rightBtn').addClass('hide')
                }
            });

//            Upon click, stop the automatic slideshow and change the slide

            $('.leftBtn').on('click', function () {

                // Clear the corresponding interval to stop the slideshow
                // (intervals is an array, so we give it the number of the slideshow container)

                clearInterval(intervals[($(this).parent().attr('id').split('-')[2])]);

                // Make the last slide visible and set it as first in the slideshow container

                $(this).parent().find('.slide:last').fadeIn("slow")
                    .insertBefore($(this).parent().find('.slide:first').fadeOut("slow"));

                hoverStop($(this).parent().attr('id'));
            });

            $('.rightBtn').on('click', function () {

                // Clear the corresponding interval to stop the slideshow
                clearInterval(intervals[($(this).parent().attr('id').split('-')[2])]);

                // Fade out the current image and append it to the parent, making it last
                // Fade in the next one

                $(this).parent().find('.slide:first').fadeOut("slow")
                    .next('.slide').fadeIn("slow")
                    .end().appendTo($(this).parent());

                hoverStop($(this).parent().attr('id'));
            });
        }

//              Change slide on swipe

        // Same as the 'on click' functions, but we use hammer.js this time

        if (options.swipeNavigation) {
            $('.slideshow').hammer().on({
                "swiperight": function () {
                    clearInterval(intervals[($(this).attr('id').split('-')[2])]);

                    $(this).find('.slide:last').fadeIn("slow")
                        .insertBefore($(this).find('.slide:first').fadeOut("slow"))

                },
                "swipeleft": function () {
                    clearInterval(intervals[($(this).attr('id').split('-')[2])]);

                    $(this).find('.slide:first').fadeOut("slow")
                        .next('.slide').fadeIn("slow")
                        .end().appendTo($(this));
                }
            })
        }

    }
}(jQuery)
    )
;
