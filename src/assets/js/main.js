  /*============== Main Js Start ========*/

(function ($) {
  "use strict";

  /*============== Header Hide Click On Body Js ========*/
  $('.navbar-toggler.header-button').on('click', function() {
    if($('.body-overlay').hasClass('show')){
      $('.body-overlay').removeClass('show');
    }else{
      $('.body-overlay').addClass('show');
    }
  });
  $('.body-overlay').on('click', function() {
    $('.header-button').trigger('click');
  });


/*============== Button Effect  Js ========*/
$('.btn').on('mouseenter', function (e) {
	var parentOffset = $(this).offset(),
		relX = e.pageX - parentOffset.left,
		relY = e.pageY - parentOffset.top;
	$(this).find('span').css({ top: relY, left: relX })
}).on('mouseout', function (e) {
	var parentOffset = $(this).offset(),
		relX = e.pageX - parentOffset.left,
		relY = e.pageY - parentOffset.top;
	$(this).find('span').css({ top: relY, left: relX })
});


$('.theme-btn').on('mouseenter', function (e) {
	var parentOffset = $(this).offset(),
		relX = e.pageX - parentOffset.left,
		relY = e.pageY - parentOffset.top;
	$(this).find('span').css({ top: relY, left: relX })
}).on('mouseout', function (e) {
	var parentOffset = $(this).offset(),
		relX = e.pageX - parentOffset.left,
		relY = e.pageY - parentOffset.top;
	$(this).find('span').css({ top: relY, left: relX })
});



  /* ==========================================
  *     Start Document Ready function
  ==========================================*/
  $(document).ready(function () {

    if ($(".odometer").length) {
      var odo = $(".odometer");
      odo.each(function () {
        $(this).appear(function () {
          var countNumber = $(this).attr("data-count");
          $(this).html(countNumber);
        });
      });
    }
    
    /*================== Password Show Hide Js ==========*/
    $(".toggle-password").on('click', function() {
      $(this).toggleClass(" fa-eye-slash");
      var input = $($(this).attr("id"));
      if (input.attr("type") == "password") {
      input.attr("type", "text");
      } else {
      input.attr("type", "password");
      }
    });

    /*================== Show Login Toggle Js ==========*/
    $('#showlogin').on('click', function () {
      $('#checkout-login').slideToggle(700);
    });

    /*================== Show Coupon Toggle Js ==========*/
    $('#showcupon').on('click', function () {
      $('#coupon-checkout').slideToggle(400);
    });

    /*============** Mgnific Popup **============*/
    $(".image-popup").magnificPopup({
      type: "image",
      gallery: {
          enabled: true,
      },
    });
    
    $('.popup_video').magnificPopup({
        type: 'iframe',
    });

    /*============** Mgnific Popup **============*/
    function mainSlider() {
        var BasicSlider = $('.slider-active');
        BasicSlider.on('init', function (e, slick) {
            var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
            doAnimations($firstAnimatingElements);
        });
        BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
            var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
            doAnimations($animatingElements);
        });
        BasicSlider.slick({
            autoplay: true,
            autoplaySpeed: 10000,
            dots: true,
            infinite: true,
            fade: true,
            arrows: true,
            prevArrow:'<button type="button" class="slick-prev"> <i class="fas fa-chevron-left"></i> </button>',
            nextArrow:'<button type="button" class="slick-next"> <i class="fas fa-chevron-right"></i> </button>',
            responsive: [
                { breakpoint: 991, settings: { dots: false, arrows: false } }
            ]
        });
    
        function doAnimations(elements) {
            var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            elements.each(function () {
                var $this = $(this);
                var $animationDelay = $this.data('delay');
                var $animationType = 'animated ' + $this.data('animation');
                $this.css({
                    'animation-delay': $animationDelay,
                    '-webkit-animation-delay': $animationDelay
                });
                $this.addClass($animationType).one(animationEndEvents, function () {
                    $this.removeClass($animationType);
                });
            });
        }
    }
    mainSlider();

    /*========================= Slick Slider Js Start ==============*/
    $('.testimonial-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 2,
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 1500,
      dots: false,
      pauseOnHover: false,
      arrows: false,
      responsive: [
          {
            breakpoint: 1199,
            settings: {
              arrows: false,
              slidesToShow: 3,
              dots: false,
            }
          },
          {
            breakpoint: 991,
            settings: {
              arrows: false,
              slidesToShow: 2,
              slidesToShow: 2
            }
          },
          {
            breakpoint: 767,
            settings: {
              arrows: false,
              slidesToShow: 1
            }
          }
        ]
    });

    /* ========================= Latest Slider Js Start ===============*/
    $('.latest-products').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover: true,
    speed: 2000 ,
    dots: false,
    arrows: false,
    prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-long-arrow-alt-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fas fa-long-arrow-alt-right"></i></button>',
    responsive: [
        {
            breakpoint: 1199,
            settings: {
            slidesToShow: 4,
            }
        },
        {
            breakpoint: 991,
            settings: {
            slidesToShow: 2,
            }
        },
        {
            breakpoint: 767,
            settings: {
            slidesToShow: 2,
            }
        },
        {
            breakpoint: 400,
            settings: {
            slidesToShow: 1,
            }
        }
        ]
    });
    /* ========================= Latest Slider Js Start ===============*/
    $('.client-slider').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover: true,
    speed: 2000 ,
    dots: false,
    arrows: false,
    prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-long-arrow-alt-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fas fa-long-arrow-alt-right"></i></button>',
    responsive: [
        {
            breakpoint: 1199,
            settings: {
            slidesToShow:6,
            }
        },
        {
            breakpoint: 991,
            settings: {
            slidesToShow: 5
            }
        },
        {
            breakpoint: 767,
            settings: {
            slidesToShow: 4
            }
        },
        {
            breakpoint: 400,
            settings: {
            slidesToShow: 2
            }
        }
        ]
    });

  /*======================= Mouse hover Js Start ============*/
    $('.mousehover-item').on('mouseover', function() {
      $('.mousehover-item').removeClass('active')
      $(this).addClass('active')
    }); 

    /*================== Sidebar Menu Js Start =============== */
    // Sidebar Dropdown Menu Start
    $(".has-dropdown > a").click(function() {
      $(".sidebar-submenu").slideUp(200);
      if (
        $(this)
          .parent()
          .hasClass("active")
      ) {
        $(".has-dropdown").removeClass("active");
        $(this)
          .parent()
          .removeClass("active");
      } else {
        $(".has-dropdown").removeClass("active");
        $(this)
          .next(".sidebar-submenu")
          .slideDown(200);
        $(this)
          .parent()
          .addClass("active");
      }
    });

    /*==================== Sidebar Icon & Overlay js ===============*/
      $(".dashboard-body__bar-icon").on("click", function() {
        $(".sidebar-menu").addClass('show-sidebar'); 
        $(".sidebar-overlay").addClass('show'); 
      });
      $(".sidebar-menu__close, .sidebar-overlay").on("click", function() {
        $(".sidebar-menu").removeClass('show-sidebar'); 
        $(".sidebar-overlay").removeClass('show'); 
      });
  
    /*=================== Nice Select Start Js ==================*/
    // $('select').niceSelect();
  
    /*================= Increament & Decreament Js Start ======*/
      const productQty = $(".product-qty");
      productQty.each(function () {
        const qtyIncrement = $(this).find(".product-qty__increment");
        const qtyDecrement = $(this).find(".product-qty__decrement");
        let qtyValue = $(this).find(".product-qty__value");
        qtyIncrement.on("click", function () {
          var oldValue = parseFloat(qtyValue.val());
          var newVal = oldValue + 1;
          qtyValue.val(newVal).trigger("change");
        });
        qtyDecrement.on("click", function () {
          var oldValue = parseFloat(qtyValue.val());
          if (oldValue <= 0) {
            var newVal = oldValue;
          } else {
            var newVal = oldValue - 1;
          }
          qtyValue.val(newVal).trigger("change");
        });
      });

    /*======================= Event Details Like Js Start =======*/
    $('.hit-like').each(function() {
      $(this).on(click(function() {
        $(this).toggleClass('liked')
      }));
    });

    /* ========================= Odometer Counter Js Start ========== */
      $(".counterup-item").each(function () {
        $(this).isInViewport(function (status) {
          if (status === "entered") {
            for (var i = 0; i < document.querySelectorAll(".odometer").length; i++) {
              var el = document.querySelectorAll('.odometer')[i];
              el.innerHTML = el.getAttribute("data-odometer-final");
            }
          }
        });
      });

    /*============** Number Increment Decrement **============*/
      $(".add").on("click", function () {
        if ($(this).prev().val() < 999) {
          $(this)
            .prev()
            .val(+$(this).prev().val() + 1);
        }
      });
      $(".sub").on("click", function () {
        if ($(this).next().val() > 1) {
          if ($(this).next().val() > 1)
            $(this)
            .next()
            .val(+$(this).next().val() - 1);
        }
      });

    /* =================== User Profile Upload Photo Js Start ========== */
    function readURL(input) {
      if (input.files && input.files[0]) {
          var reader = new FileReader();
          reader.onload = function(e) {
              $('#imagePreview').css('background-image', 'url('+e.target.result +')');
              $('#imagePreview').hide();
              $('#imagePreview').fadeIn(650);
          }
          reader.readAsDataURL(input.files[0]);
      }
    }
    $("#imageUpload").change(function() {
      readURL(this);
    });

  });
    /*==========================================
    *      End Document Ready function
    // ==========================================*/

    /*========================= Preloader Js Start =====================*/
        // $(window).on("load", function(){
        //   $('.preloader').fadeOut(); 
        // })
        $(window).on("load", function(){
        $("#loading").fadeOut();
        })

    /*========================= Header Sticky Js Start ==============*/
    $(window).on('scroll', function() {
      if ($(window).scrollTop() >= 300) {
        $('.header').addClass('fixed-header');
      }
      else {
          $('.header').removeClass('fixed-header');
      }
    }); 
    
    /*============================ Scroll To Top Icon Js Start =========*/
    var btn = $('.scroll-top');

    $(window).scroll(function() {
      if ($(window).scrollTop() > 300) {
        btn.addClass('show');
      } else {
        btn.removeClass('show');
      }
    });

    btn.on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({scrollTop:0}, '300');

    });

    /*============================ Header Search =========*/

    $('.header-search-icon').on('click', function() {
        $('.header-search-hide-show').addClass('show');
        $('.header-search-icon').hide();
        $('.close-hide-show').addClass('show');
    });

    $('.close-hide-show').on('click', function() {
        $('.close-hide-show').removeClass('show');
        $('.header-search-hide-show').removeClass('show');
        $('.header-search-icon').show();
    });


    /*=========================  Light and dark Start =================*/
    var mode = localStorage.getItem("mode") || "light";
    if (mode === "dark") {
    $("body").addClass("dark");
    $("#normal-logo").addClass("hidden");
    $("#dark-logo").removeClass("hidden");
    $("#footer-logo-normal").addClass("hidden");
    $("#footer-logo-dark").removeClass("hidden");
    }
    $("#light-dark-checkbox").click(function() {
    if (mode === "light") {
        mode = "dark";
        $("body").addClass("dark");
        $("#normal-logo").addClass("hidden");
        $("#dark-logo").removeClass("hidden");
        $("#footer-logo-normal").addClass("hidden");
        $("#footer-logo-dark").removeClass("hidden");
    } else {
        mode = "light";
        $("body").removeClass("dark");
        $("#dark-logo").addClass("hidden");
        $("#normal-logo").removeClass("hidden");
        $("#footer-logo-dark").addClass("hidden");
        $("#footer-logo-normal").removeClass("hidden");
    }
    localStorage.setItem("mode", mode);
    });
    /* === dark and light icon handle with local storage ===*/
    $('.mon-icon').on('click', function() {
    $(this).addClass('show');
    $('.sun-icon').addClass('show');
    localStorage.setItem('mode', 'dark');
    });

    $('.sun-icon').on('click', function() {
    $(this).removeClass('show');
    $('.mon-icon').removeClass('show');
    localStorage.setItem('mode', 'light');
    });

    /*=== On page load, check the stored mode and apply it ===*/
    $(document).ready(function() {
    var mode = localStorage.getItem('mode');
    if (mode === 'dark') {
        $('.mon-icon').addClass('show');
        $('.sun-icon').addClass('show');
    } else {
        $('.mon-icon').removeClass('show');
        $('.sun-icon').removeClass('show');
    }
    });

    /*============================ header menu show hide =========*/
    $('.sidebar-menu-show-hide').on('click', function() {
        $('.sidebar-menu-wrapper').addClass('show');
        $(".sidebar-overlay").addClass('show'); 
    });

    $('.sidebar-overlay, .close-hide-show').on('click', function() {
        $('.sidebar-menu-wrapper').removeClass('show');
        $(".sidebar-overlay").removeClass('show'); 
    });


    /*==================== Sidebar Icon & Overlay js ===============*/
    // $(".dashboard-body__bar-icon").on("click", function() {
    //   $(".sidebar-menu").addClass('show-sidebar'); 
    //   $(".sidebar-overlay").addClass('show'); 
    // });
    // $(".sidebar-menu__close, .sidebar-overlay").on("click", function() {
    //   $(".sidebar-menu").removeClass('show-sidebar'); 
    //   $(".sidebar-overlay").removeClass('show'); 
    // });

    // slider swiper activation
    // var swiper = new Swiper(".hero__slider--activation", {
    // slidesPerView: 1,
    // loop: true,
    // clickable: true,
    // speed: 500,
    // spaceBetween: 30,
    // autoplay: {
    //     delay: 3000,
    //     disableOnInteraction: false,
    // },
    // pagination: {
    //     el: ".hero__slider__inner .swiper-pagination",
    //     clickable: true,
    // },
    // });

    // Newsletter popup
    const newsletterPopup = function () {
        const newsletterWrapper = $(".newsletter-popup-wrap");
        const newsletterCloseButton = $(".newsletter-popup-wrap__close-btn");
        const dontShowPopup = $("#newsletter-dont--show");
        const popuDontShowMode = localStorage.getItem("newsletter__show");
      
        if (newsletterWrapper.length && popuDontShowMode == null) {
          $(window).on("load", function () {
            setTimeout(function () {
              $(".sidebar-overlay").addClass("show");
              newsletterWrapper.addClass("newsletter__show");
      
              $(document).on("click", function (event) {
                if (!$(event.target).closest(".newsletter-popup-wrap__inner").length) {
                  $(".sidebar-overlay").removeClass("show");
                  newsletterWrapper.removeClass("newsletter__show");
                }
              });
      
              newsletterCloseButton.on("click", function () {
                $(".sidebar-overlay").removeClass("show");
                newsletterWrapper.removeClass("newsletter__show");
              });
      
              dontShowPopup.on("click", function () {
                if (dontShowPopup.prop("checked")) {
                  localStorage.setItem("newsletter__show", true);
                } else {
                  localStorage.removeItem("newsletter__show");
                }
              });
            }, 3000);
          });
        }
      };
      
      newsletterPopup();
      
  

})(jQuery);


//---- reveal animation 

window.addEventListener('scroll',reveal);

function reveal() {
  const reveals = document.querySelectorAll(".reveal");

  for(let i = 0; i < reveals.length; i++){
    const windowHight = window.innerHeight;
    const revealTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 40;
    console.log(revealPoint)
    if(revealTop < windowHight - revealPoint){
      reveals[i].classList.add('active')
    }
    else{
      reveals[i].classList.remove('active')
    }
  }

}

// 