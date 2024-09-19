import { ApiService } from "./api/api-service.js";
// import { AxiosApiService as ApiService } from "./api/axios/axios-api-service.js";

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

// Axios options for pagination.
api.getAllProducts({ params: { page: 2, limit: 5 } })
    .then(products => renderProducts(products.results));


    
const getUniqueCategories = (products) => [...new Set(products.map(p => p.category))];

const getAllCategories = async () => {
    const products = await api.getAllProducts();
    return getUniqueCategories(products.results);
};

getAllCategories().then(console.log);