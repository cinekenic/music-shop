const elements = {
    removeCartItemsButton: document.querySelectorAll('.btn-danger'),
    addToCard: document.querySelectorAll('.shop-item-button'),
    cardItems: document.querySelector('.cart-items'),
    totalPrice: document.querySelector('.cart-total-price'),
};


function ready() {
    for (let i = 0; i < elements.removeCartItemsButton.length; i++) {
        elements.removeCartItemsButton[i].addEventListener('click', removeCartItem)
    }

    for (let i = 0; i < elements.addToCard.length; i++) {
        elements.addToCard[i].addEventListener('click', add)
    }
}

function removeCartItem(event) {
    event.target.parentElement.parentElement.remove()
    updateTotal()
}

ready()

function add(event) {
    let shopItem = event.target.parentElement.parentElement;
    let title = shopItem.querySelector('.shop-item-title').innerText;
    let price = shopItem.querySelector('.shop-item-price').innerText;
    let image = shopItem.querySelector('.shop-item-image').src;
    createItem(title, price, image)
    updateTotal()
}

function createItem(title, price, image) {
    let cardRow = document.createElement('div')
    cardRow.classList.add('cart-row');

    let titleItem = elements.cardItems.querySelectorAll('.cart-item-title')
    for (let el = 0; el < titleItem.length; el++){
        if (titleItem[el].innerText == title){
            alert('nie możesz dodać do koszyka');
            return
        }
    }

    let content = ` 
            <div class="cart-item cart-column">
                <img class="cart-item-image" src="${image}" width="100" height="100">
                <span class="cart-item-title">${title}</span>
            </div>
            <span class="cart-price cart-column">${price}</span>
            <div class="cart-quantity cart-column">
                <input class="cart-quantity-input" type="number" value="1">
                <button class="btn btn-danger" type="button">REMOVE</button>
            </div>`
    console.log(content)
    cardRow.innerHTML = content
    elements.cardItems.appendChild(cardRow);
    cardRow.querySelector(".btn-danger").addEventListener('click', removeCartItem)
    console.log(elements.totalPrice)




}


function updateTotal() {
    let cartRow = elements.cardItems.querySelectorAll('.cart-row');
    let total = 0;
    for (let el = 0; el < cartRow.length; el++) {
        console.log(cartRow[el]);
        let priceElement = cartRow[el].querySelector('.cart-price');
        let price = parseFloat(priceElement.innerText.replace('$', ''));
        let quantityElement = cartRow[el].querySelector('.cart-quantity-input');
        let quantity = quantityElement.value;
        total = total + quantity * price
    }
    console.log(total)
    total = Math.round(total * 100) / 100;
    elements.totalPrice.textContent = `$${total}`
}




//obsługa quantitty
//obsługa purchase

