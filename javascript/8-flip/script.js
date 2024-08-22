/*
1. Lista produktów
    1.1. Stworzenie karty produktu
    1.2. Spopulowanie karty danymi
    1.3. Wyrenderowanie karty w liscie
    1.4. Wyrenderowanie listy
*/

const el = (tag, props) => Object.assign(document.createElement(tag), props);

const createProductCard = ({ id, image, name, price, description, category }) => {
    const article = el("article", { id, className: "product-card" });

    const img = el("img", { src: image, alt: name });
    const nameElement = el("h3", { className: "name", textContent: name });
    const priceElement = el("p", { className: "price", textContent: price });
    const descriptionElement = el("p", { className: "description", textContent: description });
    const categoryElement = el("span", { className: "category", textContent: category });

    article.append(img, nameElement, priceElement, descriptionElement, categoryElement);
    
    return article;
};

const renderProducts = (products, rootList) => {
    const listItems = products.map(createProductCard)
        .map(card => {
            const li = el("li");
            li.append(card);
            return li;
        });

    const fragment = document.createDocumentFragment();
    fragment.append(...listItems);

    rootList.appendChild(fragment);
};

const productsList = document.querySelector("ul#products-list");
renderProducts(products, productsList);

/*
2. Dodaj/Usuń produkt do/z koszyka.
    2.1. Stwórz stan koszyka w pamięci.
    2.2. Logika dodawania i usuwania produktu z koszyka
    2.3. Podpięcie listenera z handlerem - wydelegowanego.
*/

const cart = new Map();


const toggleProduct = (id) => {
    if (cart.has(id)) {
        cart.delete(id);
    } else {
        const product = products.find(p => p.id === id);
        cart.set(id, product);
    }
    console.log(cart);
};

productsList.addEventListener("click", (event) => {
    // console.log(event.target, event.currentTarget);
    const isProductCard = event.target.classList.contains("product-card") || event.target.parentElement.classList.contains("product-card");
    if (isProductCard) {
        const cardElement = event.target.tagName === "ARTICLE" ? event.target : event.target.parentElement;
        
        cardElement.classList.toggle("selected");

        const productId =  parseInt(cardElement.id, 10);
        toggleProduct(productId);
    }
});

/*
3. Wylistuj podsumowanie koszyka
    3.1. Lista lub tabela produktów, ich cena (dodatkowo kategoria)
    3.2. Suma ceny produktów (mozna wykorzystać lodash.sum() )
    3.3. [DODATKOWO] Najechanie na produkt w liście zaznacza skreślony tekst i kliknięcie powoduje usunięcie produktu z listy. Lista się odświea razem z wykresem.
*/

/*
4. Stworzenie wykresu cen produktów w koszyku na podstawie ich kategori (Plotly)
    4.1. Pogrupuj produkty po kategoriach i zsumuj ich ceny.
    4.2. Skonfiguruj wykres i przekaz mu dane.
*/
