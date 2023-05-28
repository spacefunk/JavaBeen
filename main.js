// JavaScript Document

//shopping cart
$(document).ready(function() {
  // Cart array to store selected items
  var cartItems = [];

  // Add to Cart button click event
  $('.add-to-cart').on('click', function() {
    var itemName = $(this).data('item');

    // Add item to cart array
    cartItems.push(itemName);

    // Update cart display
    updateCart();
  });

  // Update the cart display
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

    // Perform form validation here before submitting

    // If form is valid, submit it via AJAX
    $.ajax({
      url: $(this).attr('action'),
      type: 'POST',
      data: $(this).serialize(),
      success: function(response) {
        // Handle successful form submission
        console.log(response);
      },
      error: function(xhr, status, error) {
        // Handle error during form submission
        console.error(error);
      }
    });
  });
});
