jQuery(document).ready(function ($) {
  $('.dropdown-button').dropdown({
    inDuration: 300,
    outDuration: 225,
    constrainWidth: true, // Does not change width of dropdown to that of the activator
    hover: true, // Activate on hover
    gutter: 0, // Spacing from edge
    belowOrigin: true, // Displays dropdown below the button
    alignment: 'left', // Displays dropdown with edge aligned to the left of button
    stopPropagation: false // Stops event propagation
  });
  $('.collapsible').collapsible();
  $('.button-collapse').sideNav({
    menuWidth: 300, // Default is 300
    edge: 'left', // Choose the horizontal origin
    closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
    draggable: true // Choose whether you can drag to open on touch screens
  });
  $("#histoire .owl-carousel").owlCarousel({
    items: 1,
    nav: true,
    navText: ['<img src="../../img/fleche-gauche.png" alt="" />', '<img src="../../img/fleche-droite.png" alt="" />']
  });
  $('.year').each(function(){
    var h = $(this).parent().find(".list").height();
    $(this).css('height',h);
    $(this).find('span').css('margin-top', h/2 - $(this).find('span').height());
  });
  $("#equipe .owl-carousel").owlCarousel({
    items: 3,
    nav: true,
    navText: ['<img src="../../img/fleche-gauche.png" alt="" />', '<img src="../../img/fleche-droite.png" alt="" />']
  });
});