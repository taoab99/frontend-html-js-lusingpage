const FormInputElement = document.querySelector('.hide');
const closeFormElement = document.querySelector('.close-form');
const spanElement = document.querySelectorAll('.slideout-menu > ul > li > .ps-right');
const mobileDropdown = document.querySelectorAll('.navigation-dropdown');
const showMenuMobile = document.getElementById('showMeuMobile');
const roted = document.querySelectorAll('.ps-right');
const menuMobile = document.querySelector('.header-navigation');
const clientHight = document.querySelector('.container-fluid .container-fluid').clientHeight;
const clickSearch = document.querySelector('.header-user a:first-child');
const slideList = document.getElementsByClassName('carousel-index');
const sliderControl = document.querySelectorAll('.carousel-control a');
const banerSale = document.querySelector('.baner-sale');
const productsElement = document.querySelector('.products .row');
const carouserElement = document.querySelector('.carouser');
const cartBox = document.querySelector('.cart-box');
const showCart = document.getElementById('showcart');
const closeCart = document.getElementById('closeCart');
const cartList = document.querySelector('.cart-overflow ul');
const cartnumber = document.querySelector('#cart_number');
const totalMonney = document.querySelector('.moneytotal span:last-child');











const bannerArr = [
    {
        img: './img/banner-christmas-oxa7dexfjqscsyw9eo16u1gkyrvkws65s0maetkdie_900x.jpg',
        title: 'Clother',
        saleUpdate: 'UP TO 50%'
    },
    {
        img: './img/banner-christmas-v2_540x.jpg',
        title: 'Dress',
        saleUpdate: 'UP TO 40% OFF'
    },
    {
        img: './img/banner-christmas-vv3-oxbibr2zr6qd8hl40tpm8zmqamf21tozueti79aa1y_900x.jpg',
        title: 'Accessories',
        saleUpdate: 'UP TO 60% OFF'
    },
    {
        img: './img/banner-christmas-vv4-oxbibp7bdinsl9nubswd403t3uobmfhj65ij8pd2ee-oxc4eikcd8pbv15c5v6jzxmg674pcnulg4i94svqzq_900x.jpg',
        title: 'Footwear',
        saleUpdate: 'UP TO 80% OFF'
    },
];


const ObjectPage = {
    l: 0,
    slideIndex: 1,
    move: 100,
    max_move: 100,
    scrollNumber: window.scrollY,
    productsApp: [],

    onload: function () {
        window.onload = function () {
            menuMobile.style.top = clientHight + 'px';
            setTimeout(function () {
                FormInputElement.style.display = 'block';
            }, 5000);

        }
        closeFormElement.onclick = function () {
            FormInputElement.style.display = 'none';
        }
        spanElement.forEach((item, index) => {
            const parenElement = item.parentElement;
            const dropDownElement = parenElement.querySelector('.navigation-dropdown');
            item.onclick = () => {
                if (dropDownElement) {
                    if (dropDownElement.style.display == 'none') {
                        dropDownElement.style.display = 'block';
                        item.style.animation = 'rotated 0.5s ease 0s forwards'
                    } else {
                        dropDownElement.style.display = 'none';
                        item.style.animation = '';
                    }
                }
            }
        })
        mobileDropdown.forEach((item, index) => {
            subTitle = item.querySelectorAll('.ps-right');
            const brotherSubtitle = item.querySelectorAll('.subtitle');
            subTitle.forEach((item, index) => {
                item.onclick = () => {
                    if (brotherSubtitle[index].style.display == 'none') {
                        brotherSubtitle[index].style.display = 'block';
                        item.style.animation = 'rotated 0.5s ease 0s forwards';
                    } else {
                        brotherSubtitle[index].style.display = 'none';
                        item.style.animation = '';
                    }
                }
            })
        })
        showMenuMobile.onclick = () => {

            if (menuMobile.style.width == '100%') {
                menuMobile.style.width = 0;
                showMenuMobile.innerHTML = '<i class="fas fa-align-right"></i>';
            }
            else {
                menuMobile.style.width = '100%';
                showMenuMobile.innerHTML = '&#9747;'
            }
        }
        carouserElement.style.marginTop = clientHight + 'px';
        const newBaner = bannerArr.map((item, index) => {
            return `<div class="col-sm-6 col-lg-3 mb-3">
                        <div class="card rounded-0">
                            <img class="card-img-top d-block"
                                src="${item.img}"
                                alt="${item.title}">
                            <div class="card-body">
                                <h5 class="card-title">${item.title}</h5>
                                <p class="card-text text-danger">${item.saleUpdate}</p>
                            </div>
                        </div>
                    </div>`

        });
        banerSale.innerHTML += newBaner.join('');

        // hiển thị giỏ hàng
        showCart.onclick = function () {
            cartBox.style.display = 'block';
        }

        // đóng giỏ hàng
        cartBox.onclick = function (event) {
            if (event.target === cartBox) {
                cartBox.style.display = 'none';
            }
        }

        closeCart.onclick = function () {
            cartBox.style.display = 'none';
        }
    },
    products: function (arr) {
        if (arr) {

            const products = arr.map((item, index) => {
                let priceElement = '';
                let numberSale = '';
                const price = Math.round(item.price - (item.price / 100 * item.sale));
                if (item.sale > 0) {
                    numberSale = ` <div class="cart-sale">
                                        <span>-${item.sale}%</span>
                                    </div>`
                    priceElement = ` <span>$ ${price}.00</span>`
                }

                return `
                <div class="col-sm-6 col-lg-3 mb-3">
                    <div class="product-items">
                        <div class="product-img mb-3">
                            <div class="card border rounded-0">
                                <img class="card-img-top" src="${item.img}"
                                    alt="ảnh">
                                <div class="card-body">
                                    <a href="#/" class="cart-hover">
                                        <i class="fas fa-shopping-basket"></i>
                                    </a>
                                    <a href="#" class="cart-hover">
                                        <i class="fas fa-search-plus"></i>
                                    </a>
                                    <a href="#" class="cart-hover">
                                        <i class="far fa-heart"></i>
                                    </a>
                                    <a href="#" class="cart-hover">
                                        <i class="fas fa-random"></i>
                                    </a>
                                </div>
                                ${numberSale}
                            </div>
                        </div>
                        <div class="product-description">
                            <p>${item.name}</p>
                            <p>
                                <span>$ ${item.price}.00</span>
                                ${priceElement}
                            </p>
                        </div>
                    </div>
                </div>`
            });
            productsElement.innerHTML = products.join('');
        }

        const addtocart = document.querySelectorAll('.card-body a:first-child');
        // thêm sản phẩm vào giỏ hàng:

        if (addtocart) {
            addtocart.forEach((item, index) => {
                item.onclick = () => {

                    arr[index].soluong = 1;

                    const api = 'https://studiesapijsonserverlusingpage.herokuapp.com/cart';
                    const option = {
                        method: 'POST',
                        body: JSON.stringify(arr[index]),
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }
                    fetch(api, option)
                        .then(function (respons) {
                            return respons.status;
                        })
                        .then(function (status) {
                            if (status === 200) {
                                console.log('thành công');
                            }
                        })
                }
            })
        }
    },
    carousel: function () {

        const pages = Math.ceil(slideList.length / 1);
        sliderControl[0].classList.add('active');
        right_move = () => {
            this.l = this.l + this.move;
            if (slideList == 1) {
                this.l = 0;
            }

            for (const i of slideList) {
                if (this.l > this.max_move) { this.l = this.l - this.move; }
                i.style.left = '-' + this.l + '%';
            }
        }
        left_move = () => {
            this.l = this.l - this.move;
            if (this.l < 0) {
                this.l = 0;
            }
            for (const i of slideList) {
                if (pages > 1) {
                    i.style.left = '-' + this.l + '%';
                }
            }
        }

        sliderControl[0].onclick = () => {
            left_move();
            for (const i of sliderControl) {
                i.classList.remove('active');
            }
            sliderControl[0].classList.add('active');
        }
        sliderControl[1].onclick = () => {
            right_move();
            for (const i of sliderControl) {
                i.classList.remove('active');
            }
            sliderControl[1].classList.add('active');
        }

    },
    handleEvent: function () {
        const headerSearchElement = clickSearch.querySelector('.header-search-box');
        const hidenSearch = document.querySelector('#hidenSearch');
        clickSearch.onclick = () => {
            headerSearchElement.style.display = 'block';
        }
        headerSearchElement.onclick = (event) => {
            if (event.target === hidenSearch) {
                headerSearchElement.style.display = 'none';
            }
        }
        window.onclick = function (event) {
            if (event.target === hidenSearch || event.target === headerSearchElement) {
                headerSearchElement.style.display = 'none';
            }
        }
        window.onscroll = function () {
            const header = document.querySelector('.container-fluid .container-fluid');
            const scrollTop = window.scrollY;
            if (scrollTop > clientHight && scrollTop > this.scrollNumber) {
                header.style.top = "-" + clientHight + 'px';
            }
            else {
                header.style.top = '0';
            }
            this.scrollNumber = scrollTop;
        }
    },
    callAPI: function () {
        var api = "https://studiesapijsonserverlusingpage.herokuapp.com/productsApp";
        fetch(api)
            .then(function (response) {
                return response.json()
            })
            .then(async (data) => {
                this.products(data);
            })
    },
    getcart: function () {
        const api = 'https://studiesapijsonserverlusingpage.herokuapp.com/cart';
        fetch(api)
            .then((respons) => {
                return respons.json();
            })
            .then((data) => {
                let sosanpham = 0;
                let tongtien = 0;
                if (data) {
                    sosanpham = data.length;
                    const list = data.map((item, index) => {
                        const prices = () => {
                            const gia = ((item.price) - (item.price / 100 * item.sale)) * item.soluong;
                            return Math.ceil(gia);
                        }
                        return `
                        <li>
                            <div class="cart-image">
                                <img src="${item.img}" alt="${item.name}">
                            </div>
                            <div class="cart-title">
                                <p>${item.name} <span class="delete">x</span></p>

                                <div class="price">
                                    <div class="price-control">
                                        <span>-</span>
                                        <span>${item.soluong}</span>
                                        <span>+</span>
                                    </div>
                                    <div class="monney">${prices()}.00</div>
                                </div>
                            </div>
                        </li>
                    `
                    });
                    cartList.innerHTML = list.join('');

                    tongtien = data.reduce((total, item) => {
                        const itemgia = ((item.price) - (item.price / 100 * item.sale)) * item.soluong;
                        return total + itemgia;
                    }, 0);
                }
                cartnumber.innerHTML = sosanpham;
                totalMonney.innerHTML = Math.ceil(tongtien) + '.00';

                const deleteElements = document.querySelectorAll('.delete');
                if (deleteElements) {
                    deleteElements.forEach((item, index) => {
                        item.onclick = function () {
                            fetch(`${api}/${data[index].id}`, {
                                method: 'DELETE'
                            })
                                .then(respons => {
                                    return respons.status;
                                })
                                .then(status => {
                                    if (status === 200) {
                                        alert('xóa thành công');
                                    }
                                })
                        }
                    })
                }
            })


    },
    start: function () {
        this.onload();
        this.handleEvent();
        this.carousel();
        this.callAPI();
        this.getcart();
    }
}

ObjectPage.start();