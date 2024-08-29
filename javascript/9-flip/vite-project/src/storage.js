export class Storage {
    #storage;

    constructor(storage) {
        this.#storage = storage;
    }

    /* TODO: Implement */
    getStorage() {
        return this.#storage;
    }

    get(key) {
        return this.#deserialize(this.#storage.getItem(key));
    }
    
    set(key, value) {
        this.#storage.setItem(key, this.#serialize(value));
    }
    
    delete(key) {
        this.#storage.removeItem(key);
    }

    clear() {
        this.#storage.clear();
    }

    #serialize(data) {
        return JSON.stringify(data);
    }

    #deserialize(serialized) {
        try {
            return JSON.parse(serialized);
        } catch(error) {
            console.log(error);
        }
    } 
}

// const storage = new Storage(localStorage);
// const storage = new Storage(sessionStorage);

export class MapStorageAdapter {
    #map;

    constructor(map) {
        this.#map = map;
    }

    getItem(key) {
        return this.#map.get(key);
    }

    setItem(key, value) {
        this.#map.set(key, value);
    }

    /* TODO: Implement */
    removeItem(key) {}

    clear() {}
}

// const mapAdapter = new MapStorageAdapter(new Map());
// const storage = new Storage(mapAdapter);
