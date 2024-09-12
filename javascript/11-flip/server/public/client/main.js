import { ApiService } from "./api/api-service.js";

/*
TODO:
    Implement UI interaction with the Service
    [Optional]: Read about Optimistic update. Try to implement.
*/

const api = new ApiService();

// api.getProductById("_jappko", "DUPA").then(console.log);

/* EXAMPLE */
const renderProducts = (products) => {
    const list = document.createElement("ul");

    products.forEach(product => {
        const li = document.createElement("li");
        li.textContent = `${product.name} - $ ${product.price}`;
        // ...

        list.appendChild(li);
    });

    document.querySelector("main").appendChild(list);
};

api.getAllProducts()
    .then(products => renderProducts(products));


const getUniqueCategories = (products) => [...new Set(products.map(p => p.category))];

const getAllCategories = async () => {
    const products = await api.getAllProducts();
    return getUniqueCategories(products);
};

getAllCategories().then(console.log);