// Preload critical assets
const preloadBackground = new Image();
preloadBackground.src = '/img/header.jpg';

// Import vendor CSS from node_modules
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'magnific-popup/dist/magnific-popup.css';

// Project SCSS
import '../scss/main.scss';

// Add loaded class once styles are processed
document.body.classList.add('loaded');

import $ from 'jquery';
window.$ = window.jQuery = $;

// Bootstrap (bundle) depends on jQuery
import 'bootstrap/dist/js/bootstrap.bundle';
// jQuery plugins
import 'jquery.easing';
import 'scrollreveal';
import 'magnific-popup/dist/jquery.magnific-popup.js';

// Import the site's behavior
import './script.js';

