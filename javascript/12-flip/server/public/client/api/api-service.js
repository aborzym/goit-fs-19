// import { RestClient } from "./rest-client.js";
import { AxiosRestClient as RestClient } from "./axios/axios-rest-client.js";

// const restClient = new RestClient(
//     "http://localhost:3000/api",
//     { "Content-Type": "application/json" }
// );
// const restClient = new AxiosRestClient(
//     "http://localhost:3000/api",
//     { "Content-Type": "application/json" }
// );
// const apiService = new ApiService(restClient);

export class ApiService {
    /*
        Base URL for RestClient
        Public Service methods
        #handleErorr
    */

    #client;

    constructor() {
        this.#client = new RestClient(
            "http://localhost:3000/api",
            { "Content-Type": "application/json" },
        );
    }

    // Add discountCode feature (it is supported by the server)
    async getAllProducts(options) {
        try {
            return await this.#client.get(`/products`, options);
        } catch (error) {
            console.error(error);
        }
    }

    async getProductById(id, discountCode) {
        const query = discountCode
            ? "?" + new URLSearchParams({ discount: discountCode }).toString()
            : "";

        try {
            return await this.#client.get(`/products/${id}${query}`);
        } catch (error) {
            console.error(error);
        }
    }

    async getAllProductsFromCategory(category) {
        const query = "?" + new URLSearchParams({ category }).toString()

        try {
            return await this.#client.get(`/products${query}`);
        } catch (error) {
            console.error(error);
        }
    }

    async addProduct(product) {
        try {
            return await this.#client.post(`/products`, product);
        } catch (error) {
            console.error(error);
        }
    }

    async updateProduct(productId, updatedProduct) {
        try {
            return await this.#client.patch(`/products/${productId}`, updatedProduct);
        } catch (error) {
            console.error(error);
        }
    }

    async deleteProduct(productId) {
        try {
            return await this.#client.delete(`/products/${productId}`);
        } catch (error) {
            console.error(error);
        }
    }
}
