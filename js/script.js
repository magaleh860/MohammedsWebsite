/*!
 * Start Bootstrap - Creative v4.0.0-beta.2 (https://startbootstrap.com/template-overviews/creative)
 * Copyright 2013-2017 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-creative/blob/master/LICENSE)
 */

// Module-friendly version: import jQuery and expose to window so legacy plugins work
import $ from 'jquery';
// ScrollReveal and magnific-popup are loaded from vendor folders via global script tags in index.html

// Ensure jQuery is available globally for plugins that expect window.jQuery / window.$
window.jQuery = window.$ = $;

import ScrollReveal from 'scrollreveal';

window.ScrollReveal = ScrollReveal;
(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 57)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 57
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Scroll reveal calls
  if (window.ScrollReveal) {
    window.sr = window.ScrollReveal();
    sr.reveal('.sr-icons', {
      duration: 600,
      scale: 0.3,
      distance: '0px'
    }, 200);
    sr.reveal('.sr-button', {
      duration: 1000,
      delay: 200
    });
    sr.reveal('.sr-contact', {
      duration: 600,
      scale: 0.3,
      distance: '0px'
    }, 300);
  }

  // Magnific popup calls (ensure the plugin exists)
  if ($.fn && $.fn.magnificPopup) {
    $('.popup-gallery').magnificPopup({
      delegate: 'a.portfolio-box, a.portfolio-lightbox',
      type: 'image',
      tLoading: 'Loading image #%curr%...',
      mainClass: 'mfp-img-mobile',
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1]
      },
      image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
      }
    });
  }

})(jQuery); // End of use strict

 