// use export keyword so the variable can be accessed from other files
// cart will save its values to local storage
// as we want to get them, we use methos getItem
// localStorage works only with strings but we want to get object back
// we use JSON.parse to get object
export let cart = JSON.parse(localStorage.getItem('cart'));

// if cart is empty we set the cart with following default values
if(!cart) {
  cart = [
  {
    productId: 1,
    quantity: 2,
  },
  {
    productId: 2,
    quantity: 1,
  },
];
}

// define function for saving the values to localStorage with setItem
// localStorage method works only with strings
// we use JSON.stringify to convert object to string
export function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

// function for removing a product from cart
export function removeFromCart(productId) {
  cart = cart.filter(cartItem => cartItem.productId !== productId);
  saveToStorage();
}

// use module to reuse this function in amazon.js
export function calculateCartQuantity() {
// calculate total quantity of cart
const cartTotalQuantity = cart.reduce((accumulator, cartItem)=> accumulator + cartItem.quantity, 0);
// console.log(cartTotalQuantity);
// parse this value into element for checkout counting items
const checkoutEl = document.querySelector('.checkout__msg-items');
checkoutEl.innerHTML = cartTotalQuantity;
}