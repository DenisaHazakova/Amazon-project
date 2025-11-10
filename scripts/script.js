const productList = [
  {
    id: 1,
    imgSrc: "/img/products/athletic-cotton-socks-6-pairs.jpg",
    name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
    rating: 4.5,
    ratingCount: 87,
    price: 10.9,
  },
  {
    id: 2,
    imgSrc: "/img/products/intermediate-composite-basketball.jpg",
    name: "Intermediate Size Basketball",
    rating: 4.0,
    ratingCount: 127,
    price: 20.95,
  },
  {
    id: 3,
    imgSrc: "/img/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
    name: "Adults Plain Cotton T-Shirt - 2 Pack",
    rating: 4.5,
    ratingCount: 56,
    price: 7.99,
  },
  {
    id: 4,
    imgSrc: "/img/products/black-2-slot-toaster.jpg",
    name: "2 Slot Toaster - Black",
    rating: 5.0,
    ratingCount: 2197,
    price: 18.99,
  },
  {
    id: 5,
    imgSrc: "/img/products/6-piece-white-dinner-plate-set.jpg",
    name: "6 Piece White Dinner Plate Set",
    rating: 4.0,
    ratingCount: 37,
    price: 20.67,
  },
  {
    id: 6,
    imgSrc: "/img/products/6-piece-non-stick-baking-set.webp",
    name: "6-Piece Nonstick, Carbon Steel Oven Bakeware Baking Set",
    rating: 4.5,
    ratingCount: 175,
    price: 34.99,
  },
  {
    id: 7,
    imgSrc: "/img/products/plain-hooded-fleece-sweatshirt-yellow.jpg",
    name: "Plain Hooded Fleece Sweatshirt",
    rating: 4.5,
    ratingCount: 317,
    price: 24.0,
  },
  {
    id: 8,
    imgSrc: "/img/products/luxury-tower-set-6-piece.jpg",
    name: "Luxury Towel Set - Graphite Gray",
    rating: 4.5,
    ratingCount: 144,
    price: 35.99,
  },
  {
    id: 9,
    imgSrc: "/img/products/liquid-laundry-detergent-plain.jpg",
    name: "Liquid Laundry Detergent, 110 Loads, 82.5 Fl Oz",
    rating: 4.5,
    ratingCount: 305,
    price: 28.99,
  },
  {
    id: 10,
    imgSrc: "/img/products/knit-athletic-sneakers-gray.jpg",
    name: "Waterproof Knit Athletic Sneakers - Gray",
    rating: 4.0,
    ratingCount: 89,
    price: 33.9,
  },
  {
    id: 11,
    imgSrc: "/img/products/women-chiffon-beachwear-coverup-black.jpg",
    name: "Women's Chiffon Beachwear Cover Up - Black",
    rating: 4.5,
    ratingCount: 235,
    price: 20.7,
  },
  {
    id: 12,
    imgSrc: "/img/products/round-sunglasses-black.jpg",
    name: "Round Sunglasses",
    rating: 4.5,
    ratingCount: 30,
    price: 15.6,
  },
  {
    id: 13,
    imgSrc: "/img/products/women-beach-sandals.jpg",
    name: "Women's Two Strap Buckle Sandals - Tan",
    rating: 4.5,
    ratingCount: 562,
    price: 24.99,
  },
  {
    id: 14,
    imgSrc: "/img/products/blackout-curtain-set-beige.webp",
    name: "Blackout Curtains Set 4-Pack - Beige",
    rating: 4.5,
    ratingCount: 232,
    price: 45.99,
  },
  {
    id: 15,
    imgSrc: "/img/products/men-slim-fit-summer-shorts-gray.jpg",
    name: "Men's Slim-Fit Summer Shorts",
    rating: 4.0,
    ratingCount: 160,
    price: 16.99,
  },
  {
    id: 16,
    imgSrc: "/img/products/electric-glass-and-steel-hot-water-kettle.webp",
    name: "Electric Glass and Steel Hot Tea Water Kettle - 1.7-Liter",
    rating: 5.0,
    ratingCount: 846,
    price: 30.74,
  },
  {
    id: 17,
    imgSrc: "/img/products/facial-tissue-2-ply-18-boxes.jpg",
    name: "Ultra Soft Tissue 2-Ply - 18 Box",
    rating: 4.0,
    ratingCount: 99,
    price: 23.74,
  },
  {
    id: 18,
    imgSrc: "/img/products/straw-sunhat.webp",
    name: "Straw Lifeguard Sun Hat",
    rating: 4.0,
    ratingCount: 215,
    price: 22.0,
  },
  {
    id: 19,
    imgSrc: "/img/products/double-elongated-twist-french-wire-earrings.webp",
    name: "Sterling Silver Sky Flower Stud Earrings",
    rating: 4.5,
    ratingCount: 52,
    price: 17.99,
  },
  {
    id: 20,
    imgSrc: "/img/products/women-stretch-popover-hoodie-black.jpg",
    name: "Women's Stretch Popover Hoodie",
    rating: 4.5,
    ratingCount: 2465,
    price: 13.74,
  },
  {
    id: 21,
    imgSrc: "/img/products/bathroom-rug.jpg",
    name: "Bathroom Bath Rug Mat 20 x 31 Inch - Grey",
    rating: 4.5,
    ratingCount: 119,
    price: 12.5,
  },
  {
    id: 22,
    imgSrc: "/img/products/women-knit-ballet-flat-black.jpg",
    name: "Women's Knit Ballet Flat",
    rating: 4.0,
    ratingCount: 326,
    price: 26.4,
  },
  {
    id: 23,
    imgSrc: "/img/products/men-golf-polo-t-shirt-blue.jpg",
    name: "Men's Regular-Fit Quick-Dry Golf Polo Shirt",
    rating: 4.5,
    ratingCount: 2556,
    price: 15.99,
  },
  {
    id: 24,
    imgSrc: "/img/products/trash-can-with-foot-pedal-50-liter.jpg",
    name: "Trash Can with Foot Pedal - Brushed Stainless Steel",
    rating: 4.5,
    ratingCount: 2286,
    price: 83.0,
  },
  {
    id: 25,
    imgSrc: "/img/products/duvet-cover-set-blue-twin.jpg",
    name: "Duvet Cover Set with Zipper Closure",
    rating: 4.0,
    ratingCount: 456,
    price: 23.99,
  },
  {
    id: 26,
    imgSrc: "/img/products/women-chunky-beanie-gray.webp",
    name: "Women's Chunky Cable Beanie - Gray",
    rating: 5.0,
    ratingCount: 248365,
    price: 12.5,
  },
  {
    id: 27,
    imgSrc: "/img/products/men-chino-pants-beige.jpg",
    name: "Men's Classic-fit Pleated Chino Pants",
    rating: 4.5,
    ratingCount: 9017,
    price: 22.9,
  },
  {
    id: 28,
    imgSrc: "/img/products/men-athletic-shoes-green.jpg",
    name: "Men's Athletic Sneaker",
    rating: 4.0,
    ratingCount: 229,
    price: 38.9,
  },
  {
    id: 29,
    imgSrc: "/img/products/men-navigator-sunglasses-brown.jpg",
    name: "Men's Navigator Sunglasses Pilot",
    rating: 3.5,
    ratingCount: 42,
    price: 16.9,
  },
  {
    id: 30,
    imgSrc: "/img/products/non-stick-cooking-set-15-pieces.webp",
    name: "Non-Stick Cookware Set, Pots, Pans and Utensils - 15 Pieces",
    rating: 4.5,
    ratingCount: 511,
    price: 67.97,
  },
  {
    id: 31,
    imgSrc: "/img/products/vanity-mirror-silver.jpg",
    name: "Vanity Mirror with Heavy Base - Chrome",
    rating: 4.5,
    ratingCount: 130,
    price: 16.49,
  },
  {
    id: 32,
    imgSrc: "/img/products/women-french-terry-fleece-jogger-camo.jpg",
    name: "Women's Fleece Jogger Sweatpant",
    rating: 4.5,
    ratingCount: 248,
    price: 24.0,
  },
  {
    id: 33,
    imgSrc: "/img/products/double-elongated-twist-french-wire-earrings.webp",
    name: "Double Oval Twist French Wire Earrings - Gold",
    rating: 4.5,
    ratingCount: 117,
    price: 24.0,
  },
  {
    id: 34,
    imgSrc: "/img/products/round-airtight-food-storage-containers.jpg",
    name: "Round Airtight Food Storage Containers - 5 Piece",
    rating: 4.0,
    ratingCount: 126,
    price: 28.0,
  },
  {
    id: 35,
    imgSrc: "/img/products/coffeemaker-with-glass-carafe-black.jpg",
    name: "Coffeemaker with Glass Carafe and Reusable Filter - 25 Oz, Black",
    rating: 4.5,
    ratingCount: 1211,
    price: 22.5,
  },
  {
    id: 36,
    imgSrc: "/img/products/blackout-curtains-black.jpg",
    name: "Blackout Curtains Set 42 x 84-Inch - Black, 2 Panels",
    rating: 4.5,
    ratingCount: 363,
    price: 30.99,
  },
  {
    id: 37,
    imgSrc: "/img/products/cotton-bath-towels-teal.webp",
    name: "100% Cotton Bath Towels - 2 Pack, Light Teal",
    rating: 4.5,
    ratingCount: 93,
    price: 21.1,
  },
  {
    id: 38,
    imgSrc: "/img/products/knit-athletic-sneakers-pink.webp",
    name: "Waterproof Knit Athletic Sneakers - Pink",
    rating: 4.0,
    ratingCount: 89,
    price: 33.9,
  },
  {
    id: 39,
    imgSrc: "/img/products/countertop-blender-64-oz.jpg",
    name: "Countertop Blender - 64oz, 1400 Watts",
    rating: 4.0,
    ratingCount: 3,
    price: 107.47,
  },
  {
    id: 40,
    imgSrc: "/img/products/floral-mixing-bowl-set.jpg",
    name: "10-Piece Mixing Bowl Set with Lids - Floral",
    rating: 5.0,
    ratingCount: 679,
    price: 38.99,
  },
  {
    id: 41,
    imgSrc: "/img/products/kitchen-paper-towels-30-pack.jpg",
    name: "2-Ply Kitchen Paper Towels - 30 Pack",
    rating: 4.5,
    ratingCount: 1045,
    price: 57.99,
  },
  {
    id: 42,
    imgSrc: "/img/products/men-cozy-fleece-zip-up-hoodie-red.jpg",
    name: "Men's Full-Zip Hooded Fleece Sweatshirt",
    rating: 4.5,
    ratingCount: 3157,
    price: 24.0,
  },
];

const itemsListEl = document.querySelector(".items__list");

// With DOMContent Loaded we ensure that when DOM is loaded, then function renderShopItems is called
document.addEventListener("DOMContentLoaded", (event) => {
  renderShopItems();
  renderQuantityDropdown(10);
});

function renderQuantityDropdown(parentEl, quantityMax) {
  //create select element
  const select = document.createElement("select");
  //assign a class
  select.classList.add("item__quantity");
  //assign a name attribute
  select.name = "quantities";

  //create for cycle
  for (let i = 1; i <= quantityMax; i++) {
    //create option element
    const option = document.createElement("option");
    //assign attribute value
    option.value = i;
    // assign its inner HTML value
    option.innerHTML = i;
    //predefine the default value to 1
    if (i === 1) {
      option.selected = true;
    }
    //append it to its parent select
    select.appendChild(option);

    //append the select to the same container passed in
    parentEl.appendChild(select);
  }
}

function renderShopItems() {
  //render through the object itemsList
  for (const product of productList) {
    // create div element
    const itemContainerEl = document.createElement("div");
    //assign the class
    itemContainerEl.classList.add("item__container");
    //create img element
    const img = document.createElement("img");
    //assign src from object productList
    img.src = product.imgSrc;
    //assign alt attribute to img
    img.alt = product.name;
    // assign class to img
    img.classList.add("product__photo");
    // create div element container for product__photo
    const divPhotoContainer = document.createElement("div");
    // assign the class
    divPhotoContainer.classList.add("product__photo-container");
    //append image to divPhotoContainer
    divPhotoContainer.appendChild(img);
    // append divPhotoContainer to itemContainerEl
    itemContainerEl.appendChild(divPhotoContainer);

    //create p element for title
    const title = document.createElement("span");
    //assign the class to title
    title.classList.add("product__name");
    //assign the inner HTML value to it
    title.innerHTML = product.name;
    //append title to its parent
    itemContainerEl.appendChild(title);

    //create element for rating stars
    const ratingStars = document.createElement("img");
    //assign the class
    ratingStars.classList.add("product__rating");
    //assign the img source according the rating of product
    if (product.rating === 3.5) {
      ratingStars.src = "/img/ratings/rating-35.png";
    } else if (product.rating === 4.0) {
      ratingStars.src = "/img/ratings/rating-40.png";
    } else if (product.rating === 4.5) {
      ratingStars.src = "/img/ratings/rating-45.png";
    } else {
      ratingStars.src = "/img/ratings/rating-50.png";
    }
    //assign alt attribute
    ratingStars.alt = "Rating " + product.rating;
    //append the ratingStars to its parent
    itemContainerEl.appendChild(ratingStars);

    //create p element for ratingCount
    const ratingCount = document.createElement("span");
    //assign the class to ratingCount
    ratingCount.classList.add("product__ratingCount");
    //assign the innerHTML
    ratingCount.innerHTML = product.ratingCount;
    //append the ratingCount to its parent
    itemContainerEl.appendChild(ratingCount);

    //create p element for price
    const price = document.createElement("span");
    //assign the class
    price.classList.add("product__price");
    //assign the innerHTML
    price.innerHTML = "$" + product.price;
    //append to parent
    itemContainerEl.appendChild(price);

    //render select element with function renderQuantityDropdown
    renderQuantityDropdown(itemContainerEl, 10);

    //create button
    const btnAddCart = document.createElement("button");
    //assign the class
    btnAddCart.classList.add("btnAddCart");
    // assign id fot the button
    //assign the innerHTML
    btnAddCart.innerHTML = "Add to Cart";
    //assign the data id to button according the id of product
    btnAddCart.setAttribute("data-product-id", product.id);
    //append the buttton to its parent
    itemContainerEl.appendChild(btnAddCart);

    btnAddCart.addEventListener("click", () => onAddProductToCart(product.id));

    //append the full product container to the list
    itemsListEl.appendChild(itemContainerEl);
  }

  function onAddProductToCart(productId) {

      const productInCart = cart.find((item) => (item.productId === productId));
      // if it is in the cart, increase quantity by one
      if (productInCart) {
        productInCart.quantity += 1;
      } else {
        // if the product is not in the cart yet
        cart.push({
          productId,
          quantity: 1,
        });
      }

      //  calculate the total quantity
      let cartQuantity = 0;
      cart.forEach((item)=> {
        cartQuantity += item.quantity;
      })

      // get element for the cart number of items
      document.querySelector('.cart__quantity').innerHTML = cartQuantity

      // console.log('cart quantity: ', cartQuantity);
      // console.log("This is cart: ", cart);
  }
}
