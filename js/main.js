$(function () {
  /* *************JS BY MAMO YZ ********************
  TABLE OF CONTENT
  1. GENERAL JS
  2. HOMEPAGE JS
  3. ABOUT US PAGE JS
  */

  /* 1. GENERAL JS */
  var animationTriggerPoint = 60;
  if ($(window).innerWidth() / $(window).innerHeight() < 1.25) {
    animationTriggerPoint = 50;
  }

  $(window).on("load", function () {
    $(".autoplayed").addClass("init");
  });
  $(window).on("scroll", function () {
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
    let item = $(this).closest(".about-noodle-item");
    let text = $(this).next(".item-content-text").html();
    $("body").addClass("popup-visible");
    $(".about-popup .popup-content .popup-content-inner").html(text);
    setTimeout(() => {
      $(".about-popup .popup-content").css({ transform: "translate(0,0)" });
    }, 100);
    setTimeout(() => {
      $(".about-popup").addClass("visible");
    }, 500);
  });

  $("#close-popup").click(function (e) {
    e.preventDefault();
    $("body").removeClass("popup-visible");
    $(".about-popup .popup-content .popup-content-inner").html("");
    setTimeout(() => {
      $(".about-popup .popup-content").css({
        transform: "translate(-105%, 0)",
      });
    }, 100);
    setTimeout(() => {
      $(".about-popup").removeClass("visible");
    }, 500);
    // $(window).scrollTop(tempPos);
    // console.log(tempPos);
  });
});
