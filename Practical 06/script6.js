const products = [
  { id: 1, name: "Notebook", price: 40 },
  { id: 2, name: "Pen", price: 10 },
  { id: 3, name: "Bag", price: 500 },
  { id: 4, name: "Water Bottle", price: 150 }
];

// Cart starts empty
let cart = [];

// DOM references
const productList = document.getElementById("product-list");
const cartList = document.getElementById("cart-list");
const totalPriceEl = document.getElementById("total-price");

// Render products using map() + join()
function displayProducts() {
  productList.innerHTML = products
    .map((product) => `
      <div class="product-card">
        ${product.name} - ₹${product.price}
        <button onclick="addToCart(${product.id})">
          Add to Cart
        </button>
      </div>`)
    .join("");
}

// Add to cart: find() the product, push() it, redraw
function addToCart(id) {
  const item = products.find((p) => p.id === id);
  cart.push(item);
  displayCart();
}

// Remove from cart: filter() keeps everything except the clicked id
function removeFromCart(id) {
  cart = cart.filter((item) => item.id !== id);
  displayCart();
}

// Total price using reduce()
function calculateTotal() {
  return cart.reduce(
    (sum, item) => sum + item.price,
    0
  );
}

// Render cart and update total
function displayCart() {
  cartList.innerHTML = cart
    .map((item) => `
      <li>${item.name} - ₹${item.price}
        <button onclick="removeFromCart(${item.id})">
         delete
        </button>
      </li>`)
    .join("");

  totalPriceEl.textContent = calculateTotal();
}

// Show products on page load
displayProducts();
