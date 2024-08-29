import { Storage, MapStorageAdapter } from "./src/storage";

/* Storage Abstraction */
const storage = new Storage(localStorage);
const logItem = (storage, key) => console.log({ [key]: storage.get(key) });

storage.set("name", "Adam");
storage.set("age", 42);
logItem(storage, "name");
logItem(storage, "age");

const user = {
  name: "Adam",
  age: 42,
};

storage.set("user", user);
logItem(storage, "user");

storage.delete("name");

/* Memory Storage using Map */

const memoryStorage = new Storage(new MapStorageAdapter(new Map()));
memoryStorage.set("name", "Beth");
memoryStorage.get("name");
logItem(memoryStorage, "name");

console.log(memoryStorage);


const map = memoryStorage.getStorage();
storage.set("memoryStorage", map);

/*
  TODO:
  1. Wykorzystujac poprzedni kod z koszykiem,
  zapisz stan koszyka do LocalStorage
  aby po powrocie do strony koszyk nie przepadał.
  Odpowiednio wyświetl wybrane przedmioty
  na podstawie danych Koszyka zachowanych w LocalStorage.
*/