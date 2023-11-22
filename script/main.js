let bagItems = [] ;

const addToBag = (itemId) => {
    bagItems.push(itemId);
    localStorage.setItem('bagItems' , JSON.stringify(bagItems))
    displayBagIcon();
};

const displayBagIcon = () => {
    const bagItemCountElement = document.querySelector('.bag-item-count');
    if (bagItems.length > 0) {
        bagItemCountElement.innerText = bagItems.length;
        bagItemCountElement.style.visibility = 'visible'
    } else {
        bagItemCountElement.style.visibility = 'hidden';
    }
}

const displayItemsOnHomePage = () => {
    const itemsContainerElement = document.querySelector('.items_container');
    if(!itemsContainerElement) return;
    
    let innerHtml = '';
    items.forEach(item => {
        innerHtml += `
           <div class="item_container">
              <img class="item_image" src="${item.image}" alt="item image">
              <div class="item_rating">
                 ${item.rating.stars} ⭐|${item.rating.count}K
              </div>
              <div class="company_name">${item.company}</div>
              <div class="item_name">${item.item_name}</div>
              <div class="price">
                  <span class="current_price">Rs ${item.current_price}</span>
                  <span class="original_price">Rs ${item.original_price}</span>
                  <span class="discount">(${item.discount_percentage}% OFF)</span>
              </div>
              <button class="btn_add_bag" onClick="addToBag(${item.id})">Add to bag</button>
           </div>`;
    });
    itemsContainerElement.innerHTML = innerHtml;
}
const onLoading = () => {
    const bagItemstr = localStorage.getItem('bagItems')
    bagItems = bagItemstr ? JSON.parse(bagItemstr) : [];
    displayBagIcon();
    displayItemsOnHomePage();
}
onLoading();