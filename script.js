
// JavaScript Document

//Navigation
$(document).ready(function() {
  $(".hamburger").click(function() {
    $(this).toggleClass("active");
    $(".nav-menu").toggleClass("active");
  });

  $(".nav-link").click(function() {
    $(".hamburger").removeClass("active");
    $(".nav-menu").removeClass("active");
  });
});


//Footer
$(document).ready(function() {
  $('.logo').click(function() {
    alert('Logo clicked!');
  });
});