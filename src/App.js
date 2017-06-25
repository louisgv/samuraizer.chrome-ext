import React, {
	Component
} from 'react';

import {
	Button,
	Card,
	Image
} from 'semantic-ui-react'

import './App.css';

const console = {
	log : chrome.extension.getBackgroundPage().console.log
};

export default class App extends Component {

	handleOnClick = () => {
		const articleContent = '{ "documents": [ {"language": "en", "id": "1", "text": "Love, love, love this sofa!!! Had my eye on it for a long time and finally was able to see and sit on one before purchasing. Article is becoming well known here in the midwest! Customer service sent me leather samples and I put them all through testing: chocolate, ketchup, spilled red wine and the leather cleaned off looking like new. Ordering was a breeze and the delivery company couldn\'t have been more accommodating. I look forward to purchasing again from Article."} ]}'

		const url = "https://westus.api.cognitive.microsoft.com/text/analytics/v2.0/keyPhrases";

		fetch(url, {
				method: 'POST',
				body: articleContent,
				headers: {
					"Content-Type": "application/json",
					"Ocp-Apim-Subscription-Key": "50b1ba0dbfb54f33a45ba2440fc0b22c"
				}
			})
			.then(function (res) {
				return res.json();
			})
			.then(function (json) {
				console.log(json);
			});
	}

	render() {
		return(
			<Card fluid>
				<Image src='https://react.semantic-ui.com/assets/images/avatar/large/matthew.png' />
				<Card.Content>
					<Button fluid onClick={this.handleOnClick}>Get some data</Button>
				</Card.Content>
			</Card>
		);
	}
}
