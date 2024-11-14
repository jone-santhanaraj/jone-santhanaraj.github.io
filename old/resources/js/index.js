fetch('./resources/json/pages.json')
	.then((response) => response.json())
	.then((pages) => {
		// Process the data
		const pagesDetails = pages;
		const buttonsContainer = document.getElementById('buttons_container');

		// Loop through the JSON data and create buttons
		for (const key in pagesDetails) {
			if (pagesDetails.hasOwnProperty(key)) {
				const buttonData = pagesDetails[key];

				// Create button element
				const button = document.createElement('button');
				button.className = `site_btn ${key}-btn`;
				button.setAttribute('id', `${key}`);
				button.type = 'submit';
				button.setAttribute(
					'onclick',
					`onClickEventHandler('${key}', '${buttonData.pagelink}');`
				);

				//`onClickEventHandler(${key}, ${buttonData.pagelink});`
				// Create anchor tag
				const anchor = document.createElement('p');
				anchor.textContent = buttonData.pagename;

				// Append anchor tag to button
				button.appendChild(anchor);

				// Append button to buttons container
				buttonsContainer.appendChild(button);
			}
		}
	})
	.catch((error) => {
		// Handle any errors
		console.error('Error:', error);
	});

const onClickEventHandler = (clickOn, redirectTo) => {
	let absoluteUrl = new URL(redirectTo, window.location.href).href;
	window.open(absoluteUrl, '_blank');
	console.log(clickOn + ', ' + absoluteUrl);
};
