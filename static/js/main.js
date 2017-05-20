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
  $("#nouvelles-carousel").owlCarousel({
    nav: true,
    dots: false,
    navText: ['<img src="../img/fleche-gauche.png" alt="" />', '<img src="../img/fleche-droite.png" alt="" />'],
    responsive: {
      // breakpoint from 0 up
      0: {
        items: 1,
        nav: false,
        dots: true
      },
      // breakpoint from 600 up
      600: {
        items: 2
      },
      // breakpoint from 1000 up
      1500: {
        items: 3
      }
    }
  });
  $("#partenaires-carousel").owlCarousel({
    nav: true,
    margin: 90,
    dots: false,
    navText: ['<img src="../img/fleche-gauche.png" alt="" />', '<img src="../img/fleche-droite.png" alt="" />'],
    responsive: {
      // breakpoint from 0 up
      0: {
        items: 2
      },
      // breakpoint from 600 up
      600: {
        items: 3
      },
      // breakpoint from 1000 up
      1000: {
        items: 4
      }
    }
  });
  $('.nouvelles-img').each(function () {
    $(this).hover(function () {
      $('.blue-hover').stop();
      $(this).children('.blue-hover').animate({
        opacity: 1
      }, 400);
      $(this).children('p, h6').css('opacity', '1');
    }, function () {
      $('.blue-hover').stop();
      $(this).children('.blue-hover').css('opacity', '0');
      $(this).children('p, h6').css('opacity', '0');
    });
  });
  $("#histoire .owl-carousel").owlCarousel({
    items: 1,
    nav: true,
    dots: true,
    navText: ['<img src="../../img/fleche-gauche.png" alt="" />', '<img src="../../img/fleche-droite.png" alt="" />']
  });
  $('.year').each(function () {
    var h = $(this).parent().find(".list").height();
    $(this).css('height', h);
    $(this).find('span').css('margin-top', h / 2 - $(this).find('span').height());
  });
  $("#equipe .owl-carousel").owlCarousel({
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      500: {
        items: 2,
        slideBy: 2
      },
      800: {
        items: 3,
        slideBy: 3
      },
      1200: {
        items: 4,
        slideBy: 4
      }
    },
    navText: ['<img src="../../img/fleche-gauche.png" alt="" />', '<img src="../../img/fleche-droite.png" alt="" />']
  });
  $("#news-carousel").owlCarousel({
    nav: true,
    responsive: {
      // breakpoint from 0 up
      0: {
        items: 1,
        nav: false,
        dots: true
      },
      // breakpoint from 600 up
      600: {
        items: 2,
        dots: false
      },
      // breakpoint from 993 up
      993: {
        items: 3,
        dots: false
      }
    },
    navText: ['<img src="../../img/fleche-gauche.png" alt="" />', '<img src="../../img/fleche-droite.png" alt="" />']
  });
  $("#oc-carousel .owl-carousel").owlCarousel({
    items: 1,
    nav: true,
    dots: true,
    navText: ['<img src="../../img/fleche-gauche.png" alt="" />', '<img src="../../img/fleche-droite.png" alt="" />']
  });
  $('.oc-img').each(function () {
    var w = $(this).width();
    $(this).css('min-height', w * 0.60);
  });
  $(window).resize(function () {
    $('.oc-img').each(function () {
      var w = $(this).width();
      $(this).css('min-height', w * 0.60);
    });
  });
  // Select all links with hashes for smooth scroll
  $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
  if (document.getElementById('bh-sl-map-container')) {
  $(function() {
      $('#bh-sl-map-container').storeLocator({
        'autoGeocode': true,
        'fullMapStart': true,
        'featuredLocations': true,
        'locationsPerPage': -1,
        'mapSettings': {zoom: 8},
        'autoComplete': true,
        'autoCompleteDisableListener': true,
        // 'visibleMarkersList': true,
        'infowindowTemplatePath': '/templates/infowindow-description.html',
        'listTemplatePath': '/templates/location-list-description.html',
        'dataType': 'json',
        'lengthUnit': 'km',
        'distanceAlert': 20,
        'sessionStorage': true,
        'nameSearch': true,
        'kilometerLang': 'kilomètre',
        'kilometersLang': 'kilomètres',
        'noResultsTitle': 'Aucun résultat',
        'noResultsDesc': "Nous n'avons trouvé aucune clinique correspondant à vos critères. S'il-vous-plaît les modifier pour que nous puissions vous aider." ,
        'distanceErrorAlert': "Malheureusement, notre clinique la plus proche est à plus de ",
        'autoGeocodeErrorAlert': "Nous n'avons pas réussi à détecter votre position, s'il-vous-plaît remplir les champs de recherche.",
        'addressErrorAlert': "Nous n'avons pas réussi à trouver cette adresse",
        'nextPage': 'Suivant »',
        'prevPage': '« Précédent',
        'maxDistance': true,
        // 'defaultLoc': true,
        // 'defaultLat': 45.5016889,
        // 'defaultLng': 73.56725599999999,
        'dataRaw': data});
    });
  }
});
