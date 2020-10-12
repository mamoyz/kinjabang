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
    animationTriggerPoint = 40;
  }

  $("header .main-menu ul li a").click(function () {
    setTimeout(() => {
      $("header").removeClass("menu-open");
      $("html").removeClass("popup-visible");
    }, 500);
  });
  $("#toggleMenu").click(function (e) {
    e.preventDefault();
    setTimeout(() => {
      $("header").toggleClass("menu-open");
      $(this).toggleClass("button-open");
      $("html").toggleClass("popup-visible");
    }, 100);
  });
  $(window).on("load", function () {
    $(".autoplayed").addClass("init");
    if ($(window).innerWidth() < 961) {
      $(".autoplayed-xs").addClass("init");
    }
  });
  $(window).on("scroll", function (e) {
    let wtop = $(this).scrollTop();
    if (wtop > 30) {
      $("header").addClass("sticky");
    } else {
      $("header").removeClass("sticky");
    }
    if ($("#about").length) {
      if (wtop + 100 > $("#about").offset().top) {
        $("header .main-menu ul li.current-menu-item").removeClass(
          "current-menu-item"
        );
        $('header .main-menu ul li a[href="./#about"')
          .closest("li")
          .addClass("current-menu-item");
      } else {
        $("header .main-menu ul li.current-menu-item").removeClass(
          "current-menu-item"
        );
        $('header .main-menu ul li a[href="./"')
          .closest("li")
          .addClass("current-menu-item");
      }
      if (wtop + 100 > $(".instagram").offset().top) {
        $("header .main-menu ul li.current-menu-item").removeClass(
          "current-menu-item"
        );
        $('header .main-menu ul li a[href="./"')
          .closest("li")
          .addClass("current-menu-item");
      }
    }
    if (wtop > $(window).innerHeight()) {
      $("#back-to-top").fadeIn();
    } else {
      $("#back-to-top").fadeOut();
    }
    $.each($(".yz-animation"), function () {
      // if ($(window).innerWidth() < 961) return false;
      let offset = $(this).data("offset") || 0;
      if ($(window).innerWidth() < 961) {
        offset = 0;
      }

      if (
        $(window).scrollTop() +
          $(window).innerHeight() * animationTriggerPoint * 0.01 >
        $(this).offset().top + offset
      ) {
        $(this).addClass("init");
      } else {
        if (!$(this).hasClass("once") && !$(this).hasClass("autoplayed-xs")) {
          $(this).removeClass("init");
        }
      }
    });
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

  $("#back-to-top").click(function (e) {
    e.preventDefault();
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      1000,
      "swing"
    );
  });
  if ($(".instructions-heading").length) {
    $.each($(".instructions-heading h2"), function () {
      const html = $(this).find("span").eq(0).html();
      // let index = $(this).find("span").length;
      setInterval(() => {
        $(this).append("<span>" + html + "</span>");
        // $(this).find("span").eq(1).remove();
      }, 8000);
    });
  }
  $("body").onSwipe(function (results) {
    if (results.right == true) {
      if ($("header.menu-open .main-menu ul").length) {
        $("#toggleMenu").click();
      }
    }
  });
  /* 2. HOMEPAGE JS */
  $(".btn-video").click(function (e) {
    e.preventDefault();
    $("html").addClass("popup-visible");
    let videoSrc = $(this).data("video");
    $(".video-popup").addClass("playing");
    setTimeout(() => {
      $(".video-popup").addClass("visible");
    }, 100);
    $(".video-popup .popup-content-inner").html(
      '<video controls autoplay><source src="' +
        videoSrc +
        '" type="video/mp4"></video>'
    );
    $(this).closest(".about-item-desc").addClass("active");
  });
  $(document).on("click", ".video-popup .popup-content-inner video", function (
    e
  ) {
    e.stopPropagation();
    $("html").removeClass("popup-visible");
    $(".about-item-desc").removeClass("active");
  });
  $(document).on("click", ".video-popup .popup-content-inner", function (e) {
    e.preventDefault();
    $(".video-popup").removeClass("playing").removeClass("visible");
    $(".video-popup .popup-content-inner").html("");
    $("html").removeClass("popup-visible");
    $(".about-item-desc").removeClass("active");
  });
  $(document).on("click", "#close-video", function (e) {
    e.preventDefault();
    $(".video-popup").removeClass("playing").removeClass("visible");
    $(".video-popup .popup-content-inner").html("");
    $("html").removeClass("popup-visible");
    $(".about-item-desc").removeClass("active");
  });

  /* 3. ABOUT US PAGE JS */
  // let tempPos = 0;

  $(".home-about-item .btn-popup").click(function (e) {
    e.preventDefault();
    // tempPos = $(window).scrollTop();
    let item = $(this).closest(".home-about-item");
    let itemIndex = $(item).index() % 2;
    let text = $(this).next(".item-content-text").html();
    $(this).closest(".about-item-desc").addClass("active");

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
    $(".about-item-desc").removeClass("active");

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
  if ($(".product-carousel").length) {
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
        "<img src='assets/img/left-arrow.png'>",
        "<img src='assets/img/right-arrow.png'>",
      ],
    });
  }
});
