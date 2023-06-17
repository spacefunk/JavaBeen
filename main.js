// JavaScript Document

//Navigation
$(document).ready(function() {
  $('.navbar-toggler').click(function() {
    $('.navbar-collapse').toggleClass('show');
  });
});


//Shopping cart
$(document).ready(function() {
  var cartItems = [];

  $('.add-to-cart').on('click', function() {
    var itemName = $(this).data('item');

    cartItems.push(itemName);

    updateCart();
  });

  function updateCart() {
    var cartList = $('#cart-items');
    cartList.empty();

    if (cartItems.length === 0) {
      cartList.append('<li>Your cart is empty</li>');
    } else {
      $.each(cartItems, function(index, item) {
        cartList.append('<li>' + item + '</li>');
      });
    }
  }
});

//Checkout
$(document).ready(function() {
  var cartItems = [];

  $('.add-to-cart').on('click', function() {
    var itemName = $(this).data('item');
    cartItems.push(itemName);
    updateCart();
  });

  $('.checkout-btn').on('click', function() {
    $('#checkout-modal').css('display', 'block');
  });

  $('.close').on('click', function() {
    $('#checkout-modal').css('display', 'none');
  });

  function updateCart() {
    var cartList = $('#cart-items');
    cartList.empty();

    if (cartItems.length === 0) {
      cartList.append('<li>Your cart is empty</li>');
    } else {
      $.each(cartItems, function(index, item) {
        cartList.append('<li>' + item + '</li>');
      });
    }
  }
});

//Contact Form
$(document).ready(function() {
  $('#contact-form').submit(function(e) {
    e.preventDefault();

    $('.error').text('');

    // Validate form fields
    var name = $('#name').val().trim();
    var email = $('#email').val().trim();
    var message = $('#message').val().trim();
    var valid = true;

    if (name === '') {
      $('#name-error').text('Please enter your name');
      valid = false;
    }

    if (email === '') {
      $('#email-error').text('Please enter your email');
      valid = false;
    } else if (!isValidEmail(email)) {
      $('#email-error').text('Please enter a valid email address');
      valid = false;
    }

    if (message === '') {
      $('#message-error').text('Please enter a message');
      valid = false;
    }

    if (valid) {
      $('#success-message').text('Your message has been sent!');
      $('#success-message').show();
      $('#contact-form').hide();
      $('#map-container').removeClass('col');
      $('#map-container').addClass('col-md-6 col-xl-4');
    }
  });

  function isValidEmail(email) {
    var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  }
});
