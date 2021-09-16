$(document).ready(function () {
  $(".nav__hamburger").click(function (e) {
    e.preventDefault();
    $(".nav").toggleClass("open");
    if ($(".nav").hasClass("open")) {
      $(".mobile").slideDown();
    } else {
      $(".mobile").slideUp();
    }
  });
});
