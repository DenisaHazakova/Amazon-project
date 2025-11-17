import { cart } from "../data/cart.js";
import { productList } from "../scripts/amazon.js";

// With DOMContent Loaded we ensure that when DOM is loaded, then function renderShopItems is called
document.addEventListener("DOMContentLoaded", (event) => {
  renderItemsInCartSummary();
});

// div in which products in checkout will be listed
const itemsSumaryDiv = document.querySelector(".cart__summary");

function renderItemsInCartSummary() {
  // render through the cart object
  for (const cartItem of cart) {
    const productId = +cartItem.productId;
    // let matchingProduct = "";
    // console.log("productId", productId);

    // loop through productList object so we can get all necessary information
    for (const product of productList) {
      if (product.id === productId) {
        // matchingProduct = product;
        console.log('product', product);
        // create div for each cartItem
        const cartItemContainer = document.createElement("div");
        cartItemContainer.classList.add("cartItemContainer");

        // create span for Delivery date
        const deliveryDate = document.createElement("span");
        deliveryDate.classList.add('deliveryDate');
        deliveryDate.innerHTML = "Delivery date: Tuesday, June 21";
        // append deliveryDate to aprent
        cartItemContainer.appendChild(deliveryDate);

        // insert image of the specific cartItem
        const cartItemPhoto = document.createElement("img");
        cartItemPhoto.src = product.imgSrc;
        cartItemPhoto.classList.add("cartItemPhoto");
        cartItemContainer.appendChild(cartItemPhoto);

        // create cartItem title
        const cartItemTitle = document.createElement("span");
        cartItemTitle.innerHTML = product.name;
        cartItemContainer.appendChild(cartItemTitle);

        //create cartItem price
        const cartItemPrice = document.createElement("span");
        cartItemPrice.innerHTML = '$ ' + product.price.toFixed(2);
        cartItemContainer.appendChild(cartItemPrice);

        // create quantity
        const cartItemQuantity = document.createElement("span");
        cartItemQuantity.innerHTML = 'Quantity: ' + cartItem.quantity;
        cartItemContainer.appendChild(cartItemQuantity);

        // append cartItemContainer to its parent
        itemsSumaryDiv.appendChild(cartItemContainer);
      }
    }
  }
}
