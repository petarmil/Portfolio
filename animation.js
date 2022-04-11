var skills = $('.skill');
var work = $('.work');
var headerContact = $('.header_contact');
var headerSocial = $('.header_social');

var $window = $(window);

function skillsAnimation() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    $.each(skills, function () {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);




        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
            $element.addClass('animate__animated animate__backInLeft');
        } else {
            $element.removeClass('animate__animated animate__backInLeft');
        }


    });
}

function workAnimation() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    $.each(work, function () {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);




        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
            $element.addClass('animate__animated animate__zoomIn');
        } else {
            $element.removeClass('animate__animated animate__zoomIn');
        }


    });
}

function headerContactAnimation() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    $.each(headerContact, function () {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);




        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
            $element.addClass('animate__animated animate__fadeInLeft');
        } else {
            $element.removeClass('animate__animated animate__fadeInLeft');
        }


    });
}

function headerSocialAnimation() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    $.each(headerSocial, function () {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);




        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
            $element.addClass('animate__animated animate__fadeInRight');
        } else {
            $element.removeClass('animate__animated animate__fadeInRight');
        }


    });
}

function headerNavAnimation() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    $.each($('.header_nav'), function () {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);




        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
            $element.addClass('animate__animated animate__fadeInDown');
        } else {
            $element.removeClass('animate__animated animate__fadeInDown');
        }


    });
}

function hamburgerAnimation() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    $.each($('.hamburger'), function () {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);




        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
            $element.addClass('animate__animated animate__rotateIn');
        } else {
            $element.removeClass('animate__animated animate__rotateIn');
        }


    });
}

function mobileMenuAnimation() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    $.each($('.mobile-menu'), function () {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);




        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
            $element.addClass('animate__animated animate__fadeIn');
        } else {
            $element.removeClass('animate__animated animate__fadeIn');
        }


    });
}


$window.on('scroll resize', skillsAnimation);
$window.on('scroll resize', workAnimation);
$window.on('scroll resize', headerContactAnimation);
$window.on('scroll resize', headerSocialAnimation);
$window.on('scroll resize', headerNavAnimation);
$window.on('scroll resize', hamburgerAnimation);
$window.on('scroll resize', mobileMenuAnimation);
$window.trigger('scroll');
