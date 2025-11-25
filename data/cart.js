// use export keyword so the variable can be accessed from other files
// cart will save its values to local storage
// as we want to get them, we use methos getItem
// localStorage works only with strings but we want to get object back
// we use JSON.parse to get object
export let cart = localStorage.getItem('cart', JSON.parse(cart));

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
  const newCart = [];

  for(const cartItem of cart) {
    if(cartItem.productId !== productId) {
      newCart.push(cartItem);
    }
  }

  cart = newCart;
  saveToStorage();
}