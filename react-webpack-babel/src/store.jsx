import { observable, action, autorun, intercept, computed } from "mobx";
class Store {
	@observable
	userData = {
		title: "Hello from Mobx",
		count: 0
	};

	@action
	updateTitle(value) {
		this.userData.title = value;
		this.userData.count = this.userData.count + 1;
		console.log(this.userData);
	}

	@computed
	get UserData() {
		return this.userData;
	}
}

// create a store and export it
// You can access the store from any component
const store = new Store();
export default store;
