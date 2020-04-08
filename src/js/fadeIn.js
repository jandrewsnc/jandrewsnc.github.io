/* global $ */

  // on window scroll...
  $(window).scroll(function () {
    // get element location
    $('.fade-in').children().each(function(i) {
      if (!$(this).hasClass('faded')) {
        let bottomOfObject = $(this).offset().top + $(this).outerHeight();
        let bottomOfWindow = $(window).scrollTop() + $(window).height();

        if (bottomOfWindow > bottomOfObject) {
          $(this).addClass('faded');
        }
      };
    });
  });
