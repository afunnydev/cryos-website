jQuery(document).ready(function ($) {
  $('#home-slider').owlCarousel({
    nav: true,
    dots: false,
    items: 1
  });
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
    navText: ['<img src="/img/fleche-gauche.png" alt="" />', '<img src="/img/fleche-droite.png" alt="" />'],
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
    navText: ['<img src="/img/fleche-gauche.png" alt="" />', '<img src="/img/fleche-droite.png" alt="" />'],
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
    navText: ['<img src="/img/fleche-gauche.png" alt="" />', '<img src="/img/fleche-droite.png" alt="" />']
  });
  if (Modernizr.mq('only all and (max-width: 600px)')) {}
  // else if (Modernizr.mq('only all and (min-width: 601px) and (max-width: 992px)')) {
  //   $('.year').each(function () {
  //     var h = $(this).parent().find(".list").height();
  //     $(this).css('height', h);
  //     $(this).find('span').css('margin-top', h / 2 - $(this).find('span').height());
  //   });
  // }
  else {
    $('.year').each(function () {
      var h = $(this).parent().find(".list").height();
      $(this).css('height', h);
      $(this).find('span').css('margin-top', h / 2 - $(this).find('span').height());
    });
    var options = [ 
      {selector: '.item-1 .oc-img', offset: 100, callback: function(el) { $('.item-1 .oc-img, .item-1 .oc-txt').toggleClass('moved'); } }, 
      {selector: '.item-2 .oc-img', offset: 60, callback: function(el) { $('.item-2 .oc-img, .item-2 .oc-txt').toggleClass('moved'); } },
      {selector: '.item-3 .oc-img', offset: 60, callback: function(el) { $('.item-3 .oc-img, .item-3 .oc-txt').toggleClass('moved'); } },
      {selector: '.item-4 .oc-img', offset: 60, callback: function(el) { $('.item-4 .oc-img, .item-4 .oc-txt').toggleClass('moved'); } },
    ]; 
    Materialize.scrollFire(options);
  }
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
    navText: ['<img src="/img/fleche-gauche.png" alt="" />', '<img src="/img/fleche-droite.png" alt="" />']
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
    navText: ['<img src="/img/fleche-gauche.png" alt="" />', '<img src="/img/fleche-droite.png" alt="" />']
  });
  $("#oc-carousel .owl-carousel").owlCarousel({
    items: 1,
    nav: true,
    dots: true,
    navText: ['<img src="/img/fleche-gauche.png" alt="" />', '<img src="/img/fleche-droite.png" alt="" />']
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

  // Change error message
  $('#contact-page input, #contact-page textarea ').on('change invalid', function() {
    var textfield = $(this).get(0);
    
    // 'setCustomValidity not only sets the message, but also marks
    // the field as invalid. In order to see whether the field really is
    // invalid, we have to remove the message first
    textfield.setCustomValidity('');
    
    if (!textfield.validity.valid) {
      textfield.setCustomValidity("S'il-vous-plaît remplir ce champ correctement.");  
    }
  });
  $('#emploi input, #emploi textarea ').on('change invalid', function() {
    var textfield = $(this).get(0);
    
    // 'setCustomValidity not only sets the message, but also marks
    // the field as invalid. In order to see whether the field really is
    // invalid, we have to remove the message first
    textfield.setCustomValidity('');
    
    if (!textfield.validity.valid) {
      textfield.setCustomValidity("S'il-vous-plaît remplir ce champ correctement.");  
    }
  });

  // search bar implementation
  initUI();
        
  /******************
   SEARCH BOX
  ******************/
  var input = $('#search-wrap input');
  var sw = $('#search-wrap');
  var tw = $('.tags-wrap');
  var sr = $('#search-results');
  
  //show the search box
  $('.search-btn').click(function(){
      sw.addClass('active');
      tw.addClass('active');
      input.focus();
  }); 
  
  //close the search box
  $('#content-wrap, #li-4').click(function(){
      //collapse bars
      fcollapse(sw,tw)
      
      //reset search
      nsearch(sr) 
      
  });
  
  /*Collapse Bars Function*/
  function fcollapse(sw, tw){
      sw.removeClass('active');
      tw.removeClass('active');   
  }

  /*Clear/New function*/
  function nsearch(sr){
      input.val('');
      sr.html('<ul id="results"></ul>');
      initUI();
  }

  // pdf click send GA
  $('a.send-ga').click(function(){
    var clickID = $(this).attr('id');
    ga('send', 'event', 'Download', 'PDFclick', clickID);
  })
  var regex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
  var regexUSA = /^\d{5}$/;
  if (document.getElementById('bh-sl-map-container-fr')) {
    $(function() {
        $('#bh-sl-map-container-fr').storeLocator({
          'autoGeocode': false,
          'fullMapStart': true,
          'featuredLocations': true,
          'locationsPerPage': -1,
          'mapSettings': {zoom: 8},
          'autoComplete': false,
          'autoCompleteDisableListener': false,
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
    $('#bh-sl-submit').click(function(){
      var searchVal = $('#bh-sl-address').val();
      var match1 = regex.exec(searchVal);
      var match2 = regexUSA.exec(searchVal);
      if (match1){
          if ( (searchVal.indexOf("-") !== -1 || searchVal.indexOf(" ") !== -1 ) && searchVal.length == 7 ) {
              ga('send', 'event', 'Location', 'Search', searchVal);
          } else if ( (searchVal.indexOf("-") == -1 || searchVal.indexOf(" ") == -1 ) && searchVal.length == 6 ) {
              ga('send', 'event', 'Location', 'Search', searchVal);
          }
      } else if (match2) {
          if ( searchVal.length == 5 ) {
              ga('send', 'event', 'Location', 'Search', searchVal);
          }
      } else {
              alert('Veuillez entrer un code postal valide');
              return false;
      };
    })
  } else if (document.getElementById('bh-sl-map-container-en')) {
    $(function() {
      $('#bh-sl-map-container-en').storeLocator({
        'autoGeocode': false,
        'fullMapStart': true,
        'featuredLocations': true,
        'locationsPerPage': -1,
        'mapSettings': {zoom: 8},
        'autoComplete': false,
        'autoCompleteDisableListener': true,
        // 'autoCompleteOptions': {types: ['(regions)']},
        // 'callbackSuccess': function(callback){console.log(callback)},
        // 'querystringParams': true,
        // 'visibleMarkersList': true,
        'infowindowTemplatePath': '/templates/infowindow-description.html',
        'listTemplatePath': '/templates/location-list-description-en.html',
        'dataType': 'json',
        'lengthUnit': 'km',
        'distanceAlert': 20,
        'sessionStorage': true,
        'nameSearch': true,
        'maxDistance': true,
        // 'defaultLoc': true,
        // 'defaultLat': 45.5016889,
        // 'defaultLng': 73.56725599999999,
        'dataRaw': data});
    });
    $('#bh-sl-submit').click(function(){
      var searchVal = $('#bh-sl-address').val();
      var match1 = regex.exec(searchVal);
      var match2 = regexUSA.exec(searchVal);
      if (match1){
          if ( (searchVal.indexOf("-") !== -1 || searchVal.indexOf(" ") !== -1 ) && searchVal.length == 7 ) {
              ga('send', 'event', 'Location', 'Search', searchVal);
          } else if ( (searchVal.indexOf("-") == -1 || searchVal.indexOf(" ") == -1 ) && searchVal.length == 6 ) {
              ga('send', 'event', 'Location', 'Search', searchVal);
          }
      } else if (match2) {
          if ( searchVal.length == 5 ) {
              ga('send', 'event', 'Location', 'Search', searchVal);
          }
      } else {
              alert('Please enter a valid area code');
              return false;
      };
    })
  }
  
});
