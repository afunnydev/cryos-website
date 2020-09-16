function pageReady(fn) {
  if (document.readyState != 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
};

function setCookie(name, value, days) {
  var expires = "";

  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days*24*60*60*1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "")  + expires + "; path=/; SameSite=Lax";
}

function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

var footerSpacer = (function() {
  var footerSpacer, panelEl;
  var footerSpacerGap = 30;

  function setSpacerHeight() {
    var panelHeight = parseFloat(getComputedStyle(panelEl, null).height.replace("px", ""));
    footerSpacer.style.paddingTop = (panelHeight - footerSpacerGap) + "px";
  };

  return {
    init: function(panel) {
      footerSpacer = document.querySelector(".landing-footer-spacer");
      panelEl = panel;

      window.addEventListener("resize", setSpacerHeight);
      window.addEventListener("load", setSpacerHeight);
    },
    destroy: function() {
      window.removeEventListener("resize", setSpacerHeight);
      window.removeEventListener("load", setSpacerHeight);
    }
  }
})();

function initRedirectPanel(redirectPanel) {
  var body = document.body;
  var redirect = (localStorage.getItem("redirect") || false) == 'true';
  var checked = (localStorage.getItem("checked") || false) == 'true';
  var closeButton = redirectPanel.querySelector(".info-close");

  if (!redirect && !checked) {
    //url is defined in template layout
    axios(url).then(function(response) {
      var responseData = response.data;

      if (responseData && responseData.region_name === "Quebec") {
        body.classList.add("show-info");
        footerSpacer.init(redirectPanel);
        localStorage.setItem("redirect", true);
        initRedirectLink();
      }

      localStorage.setItem("checked", true);
    });
  }

  if (redirect && checked) {
    body.classList.add("show-info");
    footerSpacer.init(redirectPanel);
    initRedirectLink();
  }

  closeButton.addEventListener('click', function() {
    body.classList.remove("show-info");
    footerSpacer.destroy();
  });
};

function initRedirectLink() {
  var redirectLink = document.querySelector(".redirect-link");

  if (!!getCookie("nf_lang")) return;

  redirectLink.addEventListener("click", function(e) {
    e.preventDefault();

    setCookie("nf_lang", "fr", 365);

    window.location = redirectLink.getAttribute("href");
  });
}

pageReady(function() {
  var redirectPanel = document.querySelector(".info-redirect");

  if (redirectPanel) {
    initRedirectPanel(redirectPanel);
  }
});