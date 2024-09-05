import { products } from "./data.js";
/*
    Promisify returning the JSON Data with the Delay and Error chance.
    
    [Optional]: Add `status`, `ok` property based on the status.
    Add `json` async function returning the Data.

    How To:
    - Pass Data via argument.
    - Pass Delay via argument (make it between 1-3 seconds).
    - Pass Error Chance via argument (make it 0-1).
*/

/* fetch = mockedFetch */
export const MockedApi = {
    getProducts: () => {
        return mockedFetch("fake-url.com/products", {
            mock: {
                data: { products },
                delay: 3_000,
                errorChance: 0.05,
            }
        })
        .then(response => response.json())
        .catch(error => console.error(error));
    },
    /* TODO: Implement fetching one product by its ID */
    getProductById: () => {

    },
};


const mockedFetch = (url, options = { mock: { data: {}, delay: 1_000, errorChance: 0 } }) => 
    new Promise((resolve, reject) => {
        const delay = Math.random() * options.mock.delay;
        const isSuccess = Math.random() > options.mock.errorChance;
        const result = {
            status: 200,
            ok: true,
            json: () => Promise.resolve(options.mock.data),
        };

        setTimeout(() => {
            return isSuccess
                ? resolve(result)
                : reject("MockedFetch error.");
        }, delay);
    });

// mockedFetch("fake-url.com", {
//     mock: {
//         data: { products },
//         delay: 3_000,
//         errorChance: 0.05,
//     }
// })
//     .then(console.log)
//     .catch(console.error);