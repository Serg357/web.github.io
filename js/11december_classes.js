class Card {
    #_src;
    #_alt;
    #_titleProduct;
    #_descr;
    #_price;
    #_parent;
    
    constructor(src, alt, titleProduct, descr, price, parent) {
        this.src = src;
        this.alt = alt;
        this.titleProduct = titleProduct;
        this.descr = descr;
        this.price = price;
        this.parent = document.querySelector(parent);
    }

    get src() {
        return this.#_src;
    }

    set src(srcVal) {
        this.#_src = srcVal;
    }

    get alt() {
        return this.#_alt;
    }

    set alt(altVal) {
        this.#_alt = altVal;
    }

    get titleProduct() {
        return this.#_titleProduct;
    }

    set titleProduct(titleVal) {
        this.#_titleProduct = titleVal;
    }

    get descr() {
        return this.#_descr;
    }

    set descr(descrVal) {
        this.#_descr = descrVal;
    }

    get price() {
        return this.#_price;
    }

    set price(priceVal) {
        this.#_price = priceVal;
    }

    get parent() {
        return this.#_parent;
    }

    set parent(parentVal) {
        this.#_parent = parentVal;
    }

    createCard() {
        let elem = document.createElement('div');
        elem.classList.add('card__item');
        elem.innerHTML = `
        
        <img class='card__item-image' src='${this.src}' alt='${this.alt}'>
        <h2 class='card__item-title'>${this.titleProduct}</h2>
        <p class='card__item-descr'>${this.descr}</p>
        <div class='card__item__price'>
            <span class='card__item__price-title'>Цена:</span>
            <b class='card__item__price-value'>${this.price} руб.</b> 
        </div>
        `;

        this.parent.append(elem);
    }
}


let cards = [
    {
        src: 'img/headphones-1.jpg',
        alt: 'Наушники 1',
        title: 'Наушники 1',
        descr: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, voluptatem?',
        price: 1000
    },
    {
        src: 'img/headphones-2.jpg',
        alt: 'Наушники 2',
        title: 'Наушники 2',
        descr: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, voluptatem?',
        price: 1300
    },
    {
        src: 'img/headphones-3.jpg',
        alt: 'Наушники 3',
        title: 'Наушники 3',
        descr: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, voluptatem?',
        price: 900
    },
    {
        src: 'img/headphones-1.jpg',
        alt: 'Наушники 4',
        title: 'Наушники 4',
        descr: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, voluptatem?',
        price: 1000
    },
    {
        src: 'img/headphones-2.jpg',
        alt: 'Наушники 5',
        title: 'Наушники 5',
        descr: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, voluptatem?',
        price: 1300
    },
    {
        src: 'img/headphones-3.jpg',
        alt: 'Наушники 6',
        title: 'Наушники 6',
        descr: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, voluptatem?',
        price: 900
    }
]

let card;

for(let i = 0; i < cards.length; i++) {
    card = new Card(cards[i]['src'],
        cards[i]['alt'],
        cards[i]['title'],
        cards[i]['descr'],
        cards[i]['price'],
        '.cards .container').createCard();
}