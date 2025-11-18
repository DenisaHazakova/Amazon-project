import { cart } from "../data/cart.js";
import { productList } from "../scripts/amazon.js";
import {formatCurrency} from "./utils/money.js"

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

        //create div container for product info details
        const cartItemDetails = document.createElement('div');
        cartItemDetails.classList.add('cartItemDetails');

        // create cartItem title
        const cartItemTitle = document.createElement("span");
        cartItemTitle.innerHTML = product.name;
        cartItemDetails.appendChild(cartItemTitle);

        //create cartItem price
        const cartItemPrice = document.createElement("span");
        cartItemPrice.innerHTML = '$ ' + formatCurrency(product.price);
        cartItemDetails.appendChild(cartItemPrice);


        // create div for quantity row
        const quantityContainer = document.createElement('div');
        quantityContainer.classList.add('quantityContainer');

        // create quantity
        const cartItemQuantity = document.createElement("span");
        cartItemQuantity.classList.add('cartItemQuantity');
        cartItemQuantity.innerHTML = 'Quantity: ' + cartItem.quantity;
        cartItemDetails.appendChild(cartItemQuantity);
        quantityContainer.appendChild(cartItemQuantity);
        
        // create spans element for buttons update, save and delete
        const updateSpan = document.createElement('span');
        updateSpan.innerHTML = 'Update';
        updateSpan.classList.add('update-quantity');
        updateSpan.setAttribute('data-testid', productId);
        quantityContainer.appendChild(updateSpan);

        const saveSpan = document.createElement('span');
        saveSpan.innerHTML = 'Save';
        saveSpan.classList.add('save-quantity');
        saveSpan.setAttribute('data-testid', productId);
        quantityContainer.appendChild(saveSpan);
        
        const deleteSpan = document.createElement('span');
        deleteSpan.innerHTML = 'Delete';
        deleteSpan.classList.add('delete-quantity');
        deleteSpan.setAttribute('data-testid', productId);
        quantityContainer.appendChild(deleteSpan);

        // container for delivery options
        const dlvrOptsContainer = document.createElement('div');
        dlvrOptsContainer.classList.add('dlvrOptsContainer');

        // delivery options paragraph text
        const deliveryTextSpan = document.createElement('span');
        deliveryTextSpan.innerHTML = 'Choose a delivery option:';
        deliveryTextSpan.classList.add('deliveryTextSpan');
        dlvrOptsContainer.appendChild(deliveryTextSpan);

        //Tuesday delivery option
        const deliveryOptionDate = document.createElement('span');
        deliveryOptionDate.innerHTML = 'Tuesday, November 25';
        deliveryOptionDate.classList.add('deliveryOptionDate');
        dlvrOptsContainer.appendChild(deliveryOptionDate);

        // cost of shipping in case of Tuesday is selected
        const freeShippingCost = document.createElement('span');
        freeShippingCost.innerHTML = 'free shipping';
        freeShippingCost.classList.add('freeShippingCost');
        dlvrOptsContainer.appendChild(freeShippingCost);


        //append quantity Container to its parent
        cartItemDetails.appendChild(quantityContainer);
        //append cartItemDetails to its parent
        cartItemContainer.appendChild(cartItemDetails);
        // append cartItemContainer to its parent
        itemsSumaryDiv.appendChild(cartItemContainer);
      }
    }
  }
}
