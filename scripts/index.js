let bagItems;
onLoad();

function onLoad() {
  let bagItemsStr = localStorage.getItem("bagItems");
  bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
  displayItems();
  displayBagIcon();
}

function addToBag(itemId) {
  bagItems.push(itemId);
  localStorage.setItem("bagItems", JSON.stringify(bagItems));
  displayBagIcon();
}

function displayBagIcon() {
  let bagItemCountEle = document.querySelector(".bag-item-count");
  if (bagItems.length > 0) {
    bagItemCountEle.style.visibility = "visible";
    bagItemCountEle.innerText = bagItems.length;
  } else {
    bagItemCountEle.style.visibility = "hidden";
  }
}

function displayItems() {
  let itemsContainerEle = document.querySelector(".items-container");

  if (!itemsContainerEle) {
    return;
  }

  let innerHtml = "";

  items.forEach((item) => {
    innerHtml += `
        <div class="item-container">
        <img class="item-image" src= "${item.image}" alt="image">
        <div class="rating">${item.rating.stars} ⭐| ${item.rating.count}</div>
        <div class="company-name">${item.company}</div>
        <div class="item-name">${item.item_name}</div>
        <div class="price">
          <span class="current-price">$ ${item.current_price}</span>
          <span class="original-price">$ ${item.original_price}</span>
          <span class="discount">(${item.discount_percentage}% OFF)</span>
        </div>
        <button class="btn-add-bag" onclick="addToBag(${item.id})">Add to Bag</button>
        </div>
        
        
        `;
  });

  itemsContainerEle.innerHTML = innerHtml;
}
