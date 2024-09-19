import axios from "https://cdn.jsdelivr.net/npm/axios@1.7.2/+esm";

export class AxiosApiService {
    /*
        Base URL for RestClient
        Public Service methods
        #handleErorr
    */

    #client;

    constructor() {
        this.#client = axios.create({
            baseURL: "http://localhost:3000/api",
            headers: { "Content-Type": "application/json" }
        });
    }

    // Add discountCode feature (it is supported by the server)
    async getAllProducts() {
        return this.#client.get(`/products`, { params: { page: 2 } })
            .then(res => res.data)
            .catch(console.error);
    }

    // Adapt to Axios client...
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
