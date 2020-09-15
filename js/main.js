$(function () {
  /* *************JS BY MAMO YZ ********************
  TABLE OF CONTENT
  1. GENERAL JS
  2. HOMEPAGE JS
  3. ABOUT US PAGE JS
  4. PRODUCT PAGE JS
  */

  /* 1. GENERAL JS */
  var animationTriggerPoint = 60;
  if ($(window).innerWidth() / $(window).innerHeight() < 1.25) {
    animationTriggerPoint = 50;
  }

  $(window).on("load", function () {
    $(".autoplayed").addClass("init");
  });
  $(window).on("scroll", function (e) {
    let wtop = $(this).scrollTop();
    if (wtop > 200) {
      $("header").addClass("sticky");
    } else {
      $("header").removeClass("sticky");
    }

    $.each($(".yz-animation"), function () {
      if (
        $(window).scrollTop() +
          $(window).innerHeight() * animationTriggerPoint * 0.01 >
        $(this).offset().top
      ) {
        $(this).addClass("init");
      } else {
        if (!$(this).hasClass("once")) {
          $(this).removeClass("init");
        }
      }
      // if ($(window).scrollTop() + $(window).innerHeight() + 200)
      if (
        $(window).scrollTop() + $(window).innerHeight() + 200 >
        $("body").innerHeight()
      ) {
        $("footer").addClass("init");
      } else {
        $("footer").removeClass("init");
      }
    });
  });

  /* 2. HOMEPAGE JS */
  /* 3. ABOUT US PAGE JS */
  // let tempPos = 0;
  $(".home-about-item .btn-fill").click(function (e) {
    e.preventDefault();
    // tempPos = $(window).scrollTop();
    let item = $(this).closest(".home-about-item");
    let itemIndex = $(item).index() % 2;
    let text = $(this).next(".item-content-text").html();
    if (itemIndex) {
      $(".about-popup").css({ "justify-content": "flex-end" });
      $("#close-popup, .about-popup")
        .removeClass("left-to-right")
        .addClass("right-to-left");
      $("body, html").addClass("popup-visible");
      $(".about-popup .popup-content .popup-content-inner").html(text);
      $(".about-popup .popup-content").css({
        transform: "translate(105vw,0)",
        transition: "none",
      });

      setTimeout(() => {
        $(".about-popup .popup-content").css({
          transform: "translate(0,0)",
          transition: "all 0.5s",
        });
      }, 100);
      setTimeout(() => {
        $(".about-popup").addClass("visible");
      }, 500);
    } else {
      $(".about-popup").css({ "justify-content": "flex-start" });
      $("#close-popup, .about-popup")
        .removeClass("right-to-left")
        .addClass("left-to-right");
      $("body , html").addClass("popup-visible");
      $(".about-popup .popup-content .popup-content-inner").html(text);
      $(".about-popup .popup-content").css({
        transform: "translate(-105vw,0)",
        transition: "none",
      });

      setTimeout(() => {
        $(".about-popup .popup-content").css({
          transform: "translate(0,0)",
          transition: "all 0.5s",
        });
      }, 100);
      setTimeout(() => {
        $(".about-popup").addClass("visible");
      }, 500);
    }
  });

  $("#close-popup").click(function (e) {
    e.preventDefault();

    $(".about-popup .popup-content .popup-content-inner").html("");
    $(".about-popup").removeClass("visible");

    setTimeout(() => {
      if ($(this).hasClass("right-to-left")) {
        $(".about-popup .popup-content").css({
          transform: "translate(105vw, 0)",
        });
      }
      if ($(this).hasClass("left-to-right")) {
        $(".about-popup .popup-content").css({
          transform: "translate(-105vw, 0)",
        });
      }
    }, 100);
    setTimeout(() => {
      $("body, html").removeClass("popup-visible");
      $(this).attr("class", "");
    }, 500);

    // $(window).scrollTop(tempPos);
    // console.log(tempPos);
  });

  /* 4. PRODUCT PAGE JS */

  $(".product-carousel").owlCarousel({
    items: 1,
    margin: 0,
    autoHeight: false,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    nav: true,
    center: true,
    // autoplayHoverPause: true,
    navText: [
      "<img src='assets/img/left-arrow.svg'>",
      "<img src='assets/img/right-arrow.svg'>",
    ],
  });
});
