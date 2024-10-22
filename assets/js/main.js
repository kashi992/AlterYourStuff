

$(document).ready(function () {
    // navbar and scroll to top fixed start
    var navbar = $('.navWrap');
    var scrollTopBtn = $('.scrollTop');

    // Single scroll event listener to handle both navbar and scroll button logic
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        // Toggle navbar class
        if (scroll > 50) {
            navbar.addClass('scrolled');
            $("body").addClass("bodyoffset");
        } else {
            navbar.removeClass('scrolled');
            $("body").removeClass("bodyoffset");
        }

        // Toggle scroll to top button class
        if (scroll > 100) {
            scrollTopBtn.addClass('scrolled');
        } else {
            scrollTopBtn.removeClass('scrolled');
        }
    });

    // Scroll to top functionality on button click
    scrollTopBtn.click(function () {
        $('html, body').animate({ scrollTop: 0 }, 'slow');
    });
    // navbar and scroll to top fixed end

    // hero slick start 
    $('.heroSlick').slick({
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        swipe: true,
        swipeToSlide: true,
        dots: false,
        nextArrow: '.slick-next-hero',
        prevArrow: '.slick-prev-hero',

        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
            }

        }, {
            breakpoint: 800,
            settings: {
                slidesToShow: 1,
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]
    });

    const $currentBlocks = $('.contentBlock');
    // Trigger disintegration effect before slide changes
    $('.heroSlick').on('beforeChange', function () {
        $currentBlocks.each(function () {
            $(this).addClass('_block');
        });
    });

    // Reset blocks after slide change for reusability
    $('.heroSlick').on('afterChange', function () {
        $currentBlocks.each(function () {
            $(this).removeClass('_block');
        });
    });

    // hero slick end

    // service slick start 
    $('.serviceInner').slick({
        speed: 1500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        swipe: true,
        swipeToSlide: true,
        dots: false,
        centerMode: true,

        responsive: [{
            breakpoint: 1100,
            settings: {
                slidesToShow: 3,
            }

        }, {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrow: false,
            }
        }]
    });
    // service slick end

    // testimonail slick start 
    $('.tesimonialSlick').slick({
        speed: 1500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        swipe: true,
        swipeToSlide: true,
        dots: true,
        responsive: [{
            breakpoint: 1100,
            settings: {
                slidesToShow: 3,
            }

        }, {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrow: false,
            }
        }]
    });
    // testimonail slick end

    //    onclick outside navbar 
    var $navbar = $('#navbarSupportedContent');
    var $navbarToggler = $('.navbar-toggler');
    var $crossIcon = $('.crossIcon');
    var $overlay = $('.overlay');

    $navbarToggler.click(function (event) {
        event.stopPropagation(); // Prevent event from propagating to higher elements

        // Toggle 'show' class on navbar when toggler is clicked
        $navbar.toggleClass("show");
        $("html").addClass("__html");
        // Check the new state after toggling
        if ($navbar.hasClass("show")) {
            $overlay.addClass("__show");  // Add '__show' class to overlay if navbar now has 'show'
        } else {
            $overlay.removeClass("__show");  // Remove '__show' if navbar does not have 'show'
        }
    });

    // Setup click handler for cross icon
    $crossIcon.click(function (event) {
        event.stopPropagation(); // Stop propagation to avoid triggering document click
        $navbar.removeClass("show");
        $overlay.removeClass("__show");  // Ensure overlay class is removed when cross is clicked
        $("html").removeClass("__html");
    });

    // Click outside navbar
    $(document).click(function (event) {
        // Check if the click is outside the navbar and not on the navbar toggler itself
        if (!$navbar.is(event.target) && $navbar.has(event.target).length === 0 && !$navbarToggler.is(event.target) && !$crossIcon.is(event.target)) {
            $navbar.removeClass("show");
            $overlay.removeClass("__show");  // Also remove '__show' if clicking outside the navbar area
            $("html").removeClass("__html");
        }
    });
    //    onclick outside navbar 

    //    onclick nav-link offset sections start
    $('.navWrap a.nav-link').click(function (e) {
        e.preventDefault();

        // Get the target section's ID from the href attribute
        var targetId = $(this).attr('href');
        var targetElement = $(targetId);

        // Get the height of the fixed navbar
        var navbarHeight = $('.navbar').outerHeight();

        // Scroll to the target section with the adjusted offset
        $('html, body').animate({
            scrollTop: targetElement.offset().top - navbarHeight
        }, 800);  // 800 is the duration of the animation in milliseconds
    });
    //    onclick nav-link offset sections end

});

