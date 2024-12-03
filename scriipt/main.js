// Increment Quantity
function incrementQuantity(button) {
  const input = button.previousElementSibling;
  let currentValue = parseInt(input.value, 10);
  if (!isNaN(currentValue)) {
    input.value = currentValue + 1;
  } else {
    input.value = 1;
  }
}

// Decrement Quantity
function decrementQuantity(button) {
  const input = button.nextElementSibling;
  let currentValue = parseInt(input.value, 10);
  if (!isNaN(currentValue) && currentValue > 1) {
    input.value = currentValue - 1;
  } else {
    input.value = 1; // Prevent negative or zero quantity
  }
}
// Simple cart implementation using an array to store cart items
let cart = [];

// Function to handle adding a product to the cart
function addToCart(productId) {
  // Get the quantity and price of the product
  const quantity = parseInt(
    document.getElementById("quantity-" + productId).value
  );
  const price = document.getElementById(
    "productPrice-" + productId
  ).textContent;
  const title = document
    .querySelector("#productPrice-" + productId)
    .previousElementSibling.textContent.trim();

  // Create a product object with necessary details
  const product = {
    id: productId,
    title: title,
    price: price,
    quantity: quantity,
  };

  // Add the product to the cart
  cart.push(product);

  // You can also store it in localStorage to keep the cart data even after page reload
  localStorage.setItem("cart", JSON.stringify(cart));

  // Alert the user that the product has been added to the cart
  alert(title + " (x" + quantity + ") has been added to your cart!");
  console.log(cart); // To see the cart details in the console
}

// Function to decrement quantity
function decrementQuantity(button) {
  let input = button.closest(".input-group").querySelector("input");
  let value = parseInt(input.value);
  if (value > 1) {
    input.value = value - 1;
  }
}

// Function to increment quantity
function incrementQuantity(button) {
  let input = button.closest(".input-group").querySelector("input");
  let value = parseInt(input.value);
  input.value = value + 1;
}
// Open the Payment Modal
function openPaymentForm(productName, price) {
  // Show the modal
  const modal = document.getElementById("paymentModal");
  modal.style.display = "flex";

  // Fill the form with product details
  document.getElementById("productName").value = productName;
  document.getElementById("price").value = price;
  document.getElementById("quantity").value = 1;

  // Calculate and set the initial total
  calculateTotal();
}

// Close the Payment Modal
function closePaymentForm() {
  const modal = document.getElementById("paymentModal");
  modal.style.display = "none";
}

// Calculate the Total Price
function calculateTotal() {
  const price = parseFloat(document.getElementById("price").value);
  const quantity = parseInt(document.getElementById("quantity").value);
  const total = (price * quantity).toFixed(2);
  document.getElementById("total").value = total;
}

// Update Total Price on Quantity Change
document.getElementById("quantity").addEventListener("input", calculateTotal);

// Handle Form Submission
document
  .getElementById("paymentForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from refreshing the page

    const productName = document.getElementById("productName").value;
    const total = document.getElementById("total").value;
    const paymentMethod = document.getElementById("paymentMethod").value;

    alert(
      `Payment Successful!\nProduct: ${productName}\nTotal: €${total}\nPayment Method: ${paymentMethod}`
    );
    closePaymentForm();
  });
