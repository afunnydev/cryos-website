jQuery(document).ready(function($){
  $('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrainWidth: true, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: true, // Displays dropdown below the button
      alignment: 'left', // Displays dropdown with edge aligned to the left of button
      stopPropagation: false // Stops event propagation
    }
  );
  $('.button-collapse').sideNav({
      menuWidth: 300, // Default is 300
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true // Choose whether you can drag to open on touch screens
    }
  );
  $("#nouvelles-carousel").owlCarousel({
    nav: true,
    navText: ['<img src="../img/fleche-gauche.png" alt="" />','<img src="../img/fleche-droite.png" alt="" />'],
    responsive : {
      // breakpoint from 0 up
      0 : {
          items:1,
          nav: false,
          dots: true
      },
      // breakpoint from 600 up
      600 : {
          items:2
      },
      // breakpoint from 1000 up
      1000 : {
          items:3
      }
    }
  });
  $("#partenaires-carousel").owlCarousel({
    nav: true,
    navText: ['<img src="../img/fleche-gauche.png" alt="" />','<img src="../img/fleche-droite.png" alt="" />'],
    responsive : {
      // breakpoint from 0 up
      0 : {
          items:2
      },
      // breakpoint from 600 up
      600 : {
          items:3
      },
      // breakpoint from 1000 up
      1000 : {
          items:5
      }
    }
  });
  $('.nouvelles-img').each(function(){
    $(this).hover(function(){
      $('.blue-hover').stop();
      $(this).children('.blue-hover').animate({
        opacity: 1
      }, 1000);
      $(this).children('p').css('opacity', '1');
    }, function(){
      $(this).children('.blue-hover').css('opacity', '0');
      $(this).children('p').css('opacity', '0');
    });
  });
});