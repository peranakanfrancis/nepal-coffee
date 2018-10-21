// JS Goes here - ES6 supported
;(function () {

	'use strict';
  var goToTop = function() {
    $('.js-gotop').on('click', function(event){
      event.preventDefault();
      $('html, body').animate({
        scrollTop: $('html').offset().top
      }, 500);
      return false;
    });
  };
  // Document on load.
  $(function(){
    goToTop();
  });
}());
