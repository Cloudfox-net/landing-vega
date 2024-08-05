// Vega Checkout

// Header on scroll event
function expandNavbar(e) {
  const navbar = document.getElementById("navbar");
  const scrolledDown = document.body.scrollTop > 40 || document.documentElement.scrollTop > 40;

  if (scrolledDown) {
    navbar.classList.add("scrolled");
  }

  if(!scrolledDown) {
    navbar.classList.remove("scrolled");
  }
}
window.addEventListener('scroll', expandNavbar);


// Show/hide navbar
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    navbar.style.top = "0";
  } else {
    navbar.style.top = "-220px";
  }
  prevScrollpos = currentScrollPos;
}



// Show elements on scroll
const animateHTML = function() {
  let elems, windowHeight;
  const init = function() {
    elems = document.getElementsByClassName('slide-in');
    windowHeight = window.innerHeight
    _addEventHandlers();
  }
  const _addEventHandlers = function() {
    window.addEventListener('scroll', _checkPosition);
    window.addEventListener('resize', init);
  }
  const _checkPosition = function() {
    for (let i = 0; i < elems.length; i++) {
      const posFromTop = elems[i].getBoundingClientRect().top;
      if (posFromTop - windowHeight <= 0) {
        elems[i].className = elems[i].className.replace('slide-in', 'active');
      }
    }
  }
  return {
    init: init
  }
}
animateHTML().init()


// Popup login/signup
const popupLogin = document.querySelector(".login-options");
const popupSignup = document.querySelector(".signup-options");

function showLoginOptions() {
  popupLogin.style.display = "flex";
  popupSignup.style.display = "none";
}
function hideLoginOptions() {
  popupLogin.style.display = "none";
}


function showSignOptions() {
  popupSignup.style.display = "flex";
  popupLogin.style.display = "none";
}
function hideSignOptions() {
  popupSignup.style.display = "none";
}


// jQuery scripts
$(document).ready(function(){


  // Butter scroll momentum
  // butter.init({
  //   wrapperId: 'butter',
  //   wrapperDamper: 0.06,
  //   cancelOnTouch: true
  // });


  // Newsletter feedback
  $(".newsletter form").on("submit", function(event) {
      // event.preventDefault();
      // $("#newsletter").val('');
      $('.newsletter .mail').hide();
      $('.newsletter .feedback').fadeIn();
  });


  // Show/hide mobile menu
  $('.vega > .header .menu-mobile-button').click(function() {
    $('.menu-mobile').addClass('active');
  });
  $('.menu-mobile .close').click(function() {
    $('.menu-mobile').removeClass('active');
  });
  $('.menu-mobile .menu a').click(function() {
    $('.menu-mobile').removeClass('active');
  });


  // Tab plans
  $('.price .tabs .bt-anual').click(function() {
    $(this).addClass('active');
    $('.price .tabs .bt-mensal').removeClass('active');
    $('.plans .mensal').removeClass('active');
    $('.plans .anual').addClass('active');
  });

  $('.price .tabs .bt-mensal').click(function() {
    $(this).addClass('active');
    $('.price .tabs .bt-anual').removeClass('active');
    $('.plans .anual').removeClass('active');
    $('.plans .mensal').addClass('active');
  });


  // Carousels
  $('.possibilities .cards').slick({
    arrows: false,
    infinite: false,
    variableWidth: true,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 599,
        settings: "unslick"
      }
    ]
  });

  $('.sales-recovery .grid').slick({
    arrows: false,
    infinite: false,
    variableWidth: true,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 599,
        settings: "unslick"
      }
    ]
  });

  $('.price .cards-container').slick({
    arrows: false,
    infinite: false,
    variableWidth: true,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 599,
        settings: "unslick"
      }
    ]
  });

  $('.integrations .cards-container').slick({
    arrows: false,
    infinite: false,
    variableWidth: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 1500,
    draggable: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    cssEase: 'linear',
    // mobileFirst: true,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          infinite: false,
          autoplay: false,
          draggable: true,
          speed: 200,
          swipeToSlide: true,
          waitForAnimate: false,
          pauseOnHover: true,
          pauseOnFocus: true
        }
      }
    ]
  });
});