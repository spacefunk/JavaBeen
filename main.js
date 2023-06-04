// JavaScript Document

//Navigation
 $(document).ready(function() {
    $(".navbar-toggler").click(function() {
      $(".navbar-nav").toggleClass("show");
    });
  });

//shopping cart
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

//checkout
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

    // Get form field values
    var firstName = $('#first-name').val();
    var lastName = $('#last-name').val();
    var phoneNumber = $('#phone-number').val();
    var email = $('#email').val();
    var message = $('#message').val();

    
    if (firstName.trim() === '') {
      return; 
    }

    if (lastName.trim() === '') {
      return; 
    }

    if (phoneNumber.trim() === '') {
      return; 
    }

    if (email.trim() === '') {
      return; 
    }

    if (message.trim() === '') {
      return; 
    }

    // If form is valid, submit it via AJAX
    $.ajax({
      url: 'https://formsubmit.co/amberesthetician.com', 
      type: 'POST',
      data: $(this).serialize(),
      success: function(response) {
  
        console.log(response);
      },
      error: function(xhr, status, error) {
        console.error(error);
      }
    });
  });
});
