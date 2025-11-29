import { cart, removeFromCart, calculateCartQuantity} from "../data/cart.js";
import { productList } from "../scripts/amazon.js";
import { formatCurrency } from "./utils/money.js";

//  function to get date in specified format
const getTodayDate = () => {
  // with new Date we get today's date
  const d = new Date();
  //   with getDate() method we get current day of the month
  const day = d.getDate();
  //   eith getFullYear() method we get 4 digits format of year
  const year = d.getFullYear();
  // we use object of months to get wanted format of the month,
  // javascript start counting index from 0
  // example: january = 0, december = 11
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  // with this line we get: the index of current monht of d which is today' s date
  // example: months[11] = december
  let month = months[d.getMonth()];
  //   we use object weekDays to get the day of the week in wanted format
  // ! days are counted from Sunday (with index zero)
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const weekDay = weekDays[d.getDay()];
  //   console.log(year, day, month, weekDay);

  return {
    weekDay,
    month,
    day,
  };
};

// With DOMContent Loaded we ensure that when DOM is loaded, then function renderShopItems is called
document.addEventListener("DOMContentLoaded", (event) => {
  renderItemsInCartSummary();
  calculateCartQuantity();
});

// div in which products in checkout will be listed
const itemsSumaryDiv = document.querySelector(".cart__summary");

function renderItemsInCartSummary() {
  // render through the cart object
  for (const cartItem of cart) {
    const productId = +cartItem.productId;

    // loop through productList object so we can get all necessary information
    for (const product of productList) {
      if (product.id === productId) {

        // create div for each cartItem
        const cartItemContainer = document.createElement("div");
        cartItemContainer.classList.add("cartItemContainer");
        //  container needs to hold specific id (productId) so we can modify the container later
        // cartItemContainer.setAttribute('data-container-id', productId);

        // create span for Delivery date
        const deliveryDate = document.createElement("span");
        deliveryDate.classList.add("deliveryDate");
        deliveryDate.innerHTML = "Delivery date: Tuesday, June 21";
        // append deliveryDate to aprent
        cartItemContainer.appendChild(deliveryDate);

        // insert image of the specific cartItem
        const cartItemPhoto = document.createElement("img");
        cartItemPhoto.src = product.imgSrc;
        cartItemPhoto.classList.add("cartItemPhoto");
        cartItemContainer.appendChild(cartItemPhoto);

        //create div container for product info details
        const cartItemDetails = document.createElement("div");
        cartItemDetails.classList.add("cartItemDetails");

        // create div container for product details
        const productDetail = document.createElement("div");
        productDetail.classList.add("productDetail");

        // create cartItem title
        const cartItemTitle = document.createElement("div");
        cartItemTitle.innerHTML = product.name;
        cartItemTitle.classList.add("cartItemTitle");
        productDetail.appendChild(cartItemTitle);

        //create cartItem price
        const cartItemPrice = document.createElement("div");
        cartItemPrice.classList.add('cartItemPrice');
        cartItemPrice.innerHTML = "$ " + formatCurrency(product.price);
        productDetail.appendChild(cartItemPrice);

        // create div for quantity row
        const quantityContainer = document.createElement("div");
        quantityContainer.classList.add("quantityContainer");

        // create quantity
        const cartItemQuantity = document.createElement("span");
        cartItemQuantity.classList.add("cartItemQuantity");
        cartItemQuantity.innerHTML = "Quantity: " + cartItem.quantity;
        quantityContainer.appendChild(cartItemQuantity);

        // create spans element for buttons update, save and delete
        const updateSpan = document.createElement("span");
        updateSpan.innerHTML = "Update";
        updateSpan.classList.add("update-quantity");
        updateSpan.setAttribute("data-product-update-id", productId);
        quantityContainer.appendChild(updateSpan);

        updateSpan.addEventListener('click', ()=> {
            console.log(productId, "z  updateSpanu");
            cartItemContainer.classList.add('is-editing-quantity');
        })

        // create input element for entering a new quantity in case of update link is clicked
        const quanityInput = document.createElement('input');
        quanityInput.classList.add('quantity-input');
        quantityContainer.appendChild(quanityInput);

        // span created for save the changes made
        const saveSpan = document.createElement("span");
        saveSpan.innerHTML = "Save";
        saveSpan.classList.add("save-quantity");
        saveSpan.setAttribute("data-testid", productId);
        quantityContainer.appendChild(saveSpan);

        const deleteSpan = document.createElement("span");
        deleteSpan.innerHTML = "Delete";
        deleteSpan.classList.add("delete-quantity");
        deleteSpan.setAttribute("data-product-id", productId);
        quantityContainer.appendChild(deleteSpan);

        // after click on delete span the container will be removed from the DOM
        deleteSpan.addEventListener('click', ()=> {
            removeFromCart(productId);
            cartItemContainer.remove();
            // when deleting the item from cart also decrease the amount of items of checkout element
            calculateCartQuantity();
        })

        productDetail.appendChild(quantityContainer);
        // append productDetail to its parent cartItemDetails
        cartItemDetails.appendChild(productDetail);

        // container for delivery options
        const dlvrOptsContainer = document.createElement("div");
        dlvrOptsContainer.classList.add("dlvrOptsContainer");

        // delivery options paragraph text
        const deliveryTextSpan = document.createElement("span");
        deliveryTextSpan.innerHTML = "Choose a delivery option:";
        deliveryTextSpan.classList.add("deliveryTextSpan");
        dlvrOptsContainer.appendChild(deliveryTextSpan);

        // create 3 radio buttons
        for (let i = 0; i <= 2; i++) {
          const deliveryOptionElements = getDeliveryOptionElements(
            i,
            product.id
          );
          dlvrOptsContainer.appendChild(deliveryOptionElements.radioBtn);
          dlvrOptsContainer.appendChild(
            deliveryOptionElements.deliveryOptionDate
          );
          dlvrOptsContainer.appendChild(
            deliveryOptionElements.freeShippingCost
          );
        }

        //append dlvrOptsContainer into its parent
        cartItemDetails.appendChild(dlvrOptsContainer);
        //append cartItemDetails to its parent
        cartItemContainer.appendChild(cartItemDetails);
        // append cartItemContainer to its parent
        itemsSumaryDiv.appendChild(cartItemContainer);

      }
    }
  }
}

// function to create delivery options
function getDeliveryOptionElements(index, productId) {
  const date = getTodayDate();
  // delivery option text
  const deliveryOptionDate = document.createElement("span");
  deliveryOptionDate.innerHTML =
    date.weekDay + ", " + date.month + " " + (date.day+index);
  deliveryOptionDate.classList.add("deliveryOptionDate");

  // cost of shipping in case of radio button is selected
  const freeShippingCost = document.createElement("span");
  freeShippingCost.innerHTML = "free shipping";
  freeShippingCost.classList.add("freeShippingCost");

  // create radio butto for select the delivery option
  const radioBtn = document.createElement("input");
  radioBtn.type = "radio";
  // each group of radio buttons in product container will have the name according its productId
  radioBtn.name = `delivery-option-${productId}`;

  return {
    radioBtn,
    deliveryOptionDate,
    freeShippingCost,
  };
}


