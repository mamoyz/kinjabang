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
  let tempScrollPos = 0;
  $(".about-noodle-item .btn-fill").click(function (e) {
    e.preventDefault();
    console.log(tempScrollPos);
    if ($(this).hasClass("back")) {
      $(".about-noodle-item").removeClass("show").removeClass("hide");
      $(window).scrollTop(tempScrollPos);
      return;
    }
    let item = $(this).closest(".about-noodle-item");
    tempScrollPos = $(window).scrollTop();
    $(".about-noodle-item").removeClass("show").addClass("hide");
    $(item).removeClass("hide").addClass("show");
    let secTop =
      $(".about-noodle-item.show .item-content").offset().top -
      $(window).innerHeight() * 0.5;
    $(window).scrollTop(secTop);
  });
});
