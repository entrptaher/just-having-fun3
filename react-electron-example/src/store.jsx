import { observable, action, autorun, intercept, computed } from "mobx";
import { create, persist } from "mobx-persist";
import localForage from "localforage";
import { createPost } from "./actions";

class Store {
  @persist("list")
  @observable
  users = [];

  @action
  addUser(value) {
    if (!this.users.find(e => e.id === value.id)) {
      this.users.push(value);
    }
  }

  @action
  getUser(id) {
    return this.users.find(e => e.id === id);
  }
}

// create a store and export it
// You can access the store from any component
const store = new Store();
export default store;

autorun(async () => {
  store.users.slice();
  const data = store.users[store.users.length - 1];
  if (data) {
    await createPost(data);
  }
});

// const hydrate = create({
//   storage: localForage,
//   jsonify: true
// });

// console.log(localForage)
// hydrate("some", store).then(() => console.log(store.));
