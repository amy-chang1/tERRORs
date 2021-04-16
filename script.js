/***************************************
 * Code for the slideshow 
 ***************************************/
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}

/***************************************
 * Functions to place order 
 ***************************************/
let  pizzaPrice;
let totalPrice;

function calculate(pizzaPrice) {

  totalPrice = pizzaPrice + 30.00;

  return totalPrice;
}

function orderMM() {

  pizzaPrice = 180.00;

  alert("You have chosen the Meat Madness Pizza! Proceed to delivery section.");

  return totalPrice = calculate(pizzaPrice);
}

function orderML() {

  pizzaPrice = 130.00;

  alert("You have chosen the Meat Lovers Pizza! Proceed to delivery section.");

   return totalPrice = calculate(pizzaPrice);
}

function orderVL() {

  pizzaPrice = 100.00;

  alert("You have chosen the Vegelicious Pizza! Proceed to delivery section.");

  return totalPrice = calculate(pizzaPrice);
}

function orderVT() {

  pizzaPrice = 140.00;

 alert("You have chosen the Vegetastic Pizza! Proceed to delivery section.");

  return totalPrice = calculate(pizzaPrice);
}



function displayTotal() {

   alert(`Your total price (inclusive of delivery) is: ${totalPrice}`);
}