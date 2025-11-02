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

  // Variable to store skills data loaded from JSON
  let skillsData = [];

  // Utility function to generate skill card HTML
  function generateSkillCard(skill) {
    return `
      <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
        <div class="skill-card sr-skill" data-delay="${skill.delay}">
          <div class="skill-card-inner">
            <div class="skill-card-front">
              <div class="skill-title-row">
                <div class="skill-icon">
                  <i class="${skill.icon}"></i>
                </div>
                <h4>${skill.name}</h4>
              </div>
              <span class="badge badge-${skill.level}">${skill.level.charAt(0).toUpperCase() + skill.level.slice(1)}</span>
            </div>
            <div class="skill-card-back">
              <h5>${skill.backTitle}</h5>
              <p>${skill.experience}</p>
              <ul>
                ${skill.skills.map(s => `<li>${s}</li>`).join('')}
              </ul>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // Function to load skills data from JSON file
  async function loadSkillsData() {
    try {
      const response = await fetch('/js/skills-data.json');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      skillsData = await response.json();
    } catch (error) {
      console.error('Error loading skills data:', error);
      skillsData = []; // fallback to empty array
    }
  }

  // Generate skills cards dynamically
  async function initializeSkills() {
    const skillsContainer = document.getElementById('skills-container');
    
    if (skillsContainer) {
      // Load skills data if not already loaded
      if (skillsData.length === 0) {
        await loadSkillsData();
      }
      
      const skillsHTML = skillsData.map(generateSkillCard).join('');
      skillsContainer.innerHTML = skillsHTML;
      
      // Animate cards in with a staggered effect
      setTimeout(() => {
        const skillCards = document.querySelectorAll('.skill-card');
        skillCards.forEach((card, index) => {
          setTimeout(() => {
            card.classList.add('revealed');
            card.setAttribute('style', 'opacity: 1 !important; transform: translateY(0) !important; transition: all 0.6s ease !important;');
          }, index * 100); // Stagger each card by 100ms
        });
      }, 100);
    }
  }

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
  
  // Alternative fallback for skill cards if ScrollReveal isn't available
  else {
    $(document).ready(function() {
      $('.skill-card').each(function(index) {
        $(this).delay(index * 100).animate({
          opacity: 1
        }, 600).addClass('revealed');
      });
    });
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

  // Initialize skills when DOM is ready
  $(document).ready(async function() {
    console.log('Initializing skills...');
    await initializeSkills();
    console.log('Skills initialized');
  });

})(jQuery); // End of use strict

 