import { observable, action, autorun, intercept } from "mobx";
class Store {
	@observable title = "Hello from Mobx";
	@observable count = 0;

	// various store related actions
	@action
	updateTitle(event) {
		this.title = event.target.value;
	}

	@action
	updateTitle2(value) {
		this.title = value;
		this.count = this.count + 1
	}
}

// create a store and export it
// You can access the store from any component
const store = new Store();

autorun(() => {
	console.log(store);
});

export default store;
