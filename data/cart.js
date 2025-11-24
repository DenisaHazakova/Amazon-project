// use export keyword so the variable can be accessed from other files
export let cart = [
  {
    productId: 1,
    quantity: 2,
  },
  {
    productId: 2,
    quantity: 1,
  },
];


// function for removing a product from cart
export function removeFromCart(productId) {
  const newCart = [];

  for(const cartItem of cart) {
    if(cartItem.productId !== productId) {
      newCart.push(cartItem);
    }
  }

  cart = newCart;
}