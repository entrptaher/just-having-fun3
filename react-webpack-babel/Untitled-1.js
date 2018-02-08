async () => {
	for (var i = 0; i < 20; i++) {
		console.log("loop started");
		await page1
			.goto("https://www.residentadvisor.net/dj.aspx?country=01")
			.catch(err => {
				console.log("Page load fail : " + err);
				if (
					err == "Error: net::ERR_INTERNET_DISCONNECTED" ||
					err == "Error: net::ERR_NETWORK_CHANGED" ||
					err == "Error: net::ERR_NAME_NOT_RESOLVED"
				) {
					let refreshIntervalId = setInterval(() => {
						handleConnexionError(refreshIntervalId, page1);
					}, 5000);
				}
			});
		console.log("Page loaded : " + i);
		let teub = await page1.evaluate(() => {
			return document.querySelector("a").innerText;
		});
		console.log("Evaluate done : " + teub);
	}

	async function handleConnexionError(refreshIntervalId, page1) {
		console.log("Retrying to connect");
		let errorHandle = true;
		await page1
			.goto("https://www.residentadvisor.net/dj.aspx?country=01")
			.catch(() => {
				errorHandle = false;
			});
		if (errorHandle) {
			console.log("Succesfully Reconnected");
			clearInterval(refreshIntervalId);
			return true;
		} else {
			console.log("Connection Fail Retrying in 10 sec ...");
		}
	}
};

/**
 * checks if error matches
 * @param {Object} err thrown error
 * @return {Boolean}
 */
async function shouldRetry(err) {
	return [
		"Error: net::ERR_INTERNET_DISCONNECTED",
		"Error: net::ERR_NETWORK_CHANGED",
		"Error: net::ERR_NAME_NOT_RESOLVED"
	].includes(err);
}

/**
 * Function to Re navigate endlessly on error
 * @param {Object} config
 * @param {string} config.page the page instance
 * @param {String} config.url url to browse
 * @param {Number} config.delay delay for retry
 * @return {Promise}
 */
async function navigateUrl({ page, url, delay }) {
	try {
		// wait for page load
		const response = await page.goto(url);
		return response;
	} catch (error) {
		if (shouldRetry(error)) {
			// use a delay promise or the built in waitFor function
			await page.waitFor(delay);
			// re navigate
			return navigateUrl({ page, url, delay });
		} else {
			// throw on other errors
			throw new Error(error);
		}
	}
}
