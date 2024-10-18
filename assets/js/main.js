

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
        } else {
            navbar.removeClass('scrolled');
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

        // nextArrow: '.slick-next-testi',
        // prevArrow: '.slick-prev-testi',

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
    // hero slick end

    // service slick start 
    $('.serviceInner').slick({
        speed: 1500,
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        arrows: true,
        swipe: true,
        swipeToSlide: true,
        dots: false,

        nextArrow: '.slick-next-service',
        prevArrow: '.slick-prev-service',

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
});

