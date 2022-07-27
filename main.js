//Variables desktop menu
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

//Variables menu mobile
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

//Variables carrito de compras 
const shopingCar = document.querySelector('.navbar-shopping-cart');
const shoppingCartContiner = document.querySelector('#shoppingCartContiner');

const productDetail = document.querySelector('#productDetail');
const closetDetail = document.querySelector('.product-detail-close');

//Events listener 
menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMenupMenu);
shopingCar.addEventListener('click', toggleShopingCar);
closetDetail.addEventListener('click', closeProductDetail);

//Funsiones
function toggleDesktopMenu () {
    const asideClosed = shoppingCartContiner.classList.contains('inactive');
    const detailClosed = productDetail.classList.contains('inactive'); 

    if (!asideClosed) {
        shoppingCartContiner.classList.add('inactive');
    } else if (!detailClosed) {
        productDetail.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMenupMenu () {
    const asideClosed = shoppingCartContiner.classList.contains('inactive');
    
    if (!asideClosed) {
        shoppingCartContiner.classList.add('inactive');
    }
    closeProductDetail();

    mobileMenu.classList.toggle('inactive');
}

function toggleShopingCar () {
    const mobileMenuClosed = mobileMenu.classList.contains('inactive');
    const desktopMenuClosed = desktopMenu.classList.contains('inactive');
    const productDetailClosed = productDetail.classList.contains('inactive');

    if (!mobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    } else if (!desktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    } else if (!productDetailClosed) {
        productDetail.classList.add('inactive');
    }

    shoppingCartContiner.classList.toggle('inactive');

}

function openProductDetail () {
    shoppingCartContiner.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    productDetail.classList.remove('inactive');
}

function closeProductDetail () {
    productDetail.classList.add('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Mouse',
    price: 50,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'F1 Manager',
    price: 100,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

const cardsContainer = document.querySelector('.cards-container');

function renderProducts (arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetail);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
        const productInfoPrice = document.createElement('p');
        productInfoPrice.innerText = '$' + product.price;
        const productInfoName = document.createElement('p');
        productInfoName.innerText = product.name;
    
        productInfoDiv.appendChild(productInfoPrice);
        productInfoDiv.appendChild(productInfoName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productInfo.appendChild(productInfoDiv);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}
renderProducts(productList)