import { MockedApi } from "./mocked-api.js";

console.log(MockedApi);

/*
Make products load upon button click.
Display spinner while loading.

[Optional:]
Make products reload each minute of the hour that is both divisible by 3 & 5.
Display in website or console last time reloaded.
*/

const el = (tag, props) => Object.assign(document.createElement(tag), props);

const createProductElement = (product) => {
    const textContent = `${product.name} - $ ${product.price}`;
    const li = el("li", { className: "product", textContent });

    return li;
};

const renderList = (products, targetElement) => {    
    const fragment = document.createDocumentFragment();
    fragment.append(...products.map(createProductElement));
    targetElement.appendChild(fragment);
};

const btn = document.querySelector("button");
const list = document.querySelector("ol#products");

const createSpinner = () => el("div", { className: "spinner" });

const reloadProducts = () => {
    list.replaceChildren(createSpinner());

    MockedApi.getProducts().then(data => {
        list.replaceChildren();
        
        console.log(data);
        renderList(data.products, list);
    });
};

btn.addEventListener("click", reloadProducts);

/* Reload products when minutes divisible by 3 & 5. Display time when last reloaded. */
const interval = setInterval(() => {
    
}, 30_000);
