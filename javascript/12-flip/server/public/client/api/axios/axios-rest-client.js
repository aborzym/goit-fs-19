import axios from "https://cdn.jsdelivr.net/npm/axios@1.7.2/+esm";

export class AxiosRestClient {
    /*
        BaseURL config injection
        Endpoint, method, data, headers
        HTTP Methods (GET...)
    */
   #client;

    constructor(baseURL, defaultHeaders = {}) {
        this.#client = axios.create({
            baseURL: baseURL,
            headers: defaultHeaders,
        });
    }
    
    async get(endpoint, options) {
        console.log({ options });
        return this.#client.get(endpoint, options)
            .then(res => res.data)
            .catch(this.#handleError);
    }

    async post(endpoint, body) {
        return this.#client.post(endpoint, body)
            .then(res => res.data)
            .catch(this.#handleError);
    }

    async patch(endpoint, body) {
        return this.#client.patch(endpoint, body)
            .then(res => res.data)
            .catch(this.#handleError);
    }

    async put(endpoint, body) {
        return this.#client.put(endpoint, body)
            .then(res => res.data)
            .catch(this.#handleError);
    }

    async delete(endpoint) {
        return this.#client.delete(endpoint)
            .then(res => res)
            .catch(this.#handleError);
    }

    #handleError(error) {
        console.error(error);
    }
}


