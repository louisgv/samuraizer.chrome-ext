/*global chrome*/
import React, {
	Component
} from 'react';

import {
	Form,
	Button,
	Card
} from 'semantic-ui-react'

import JSONTree from 'react-json-tree'

import './App.css';

/*
	"Love, love, love this sofa!!! Had my eye on it for a long time and finally was able to see and sit on one before purchasing. Article is becoming well known here in the midwest! Customer service sent me leather samples and I put them all through testing: chocolate, ketchup, spilled red wine and the leather cleaned off looking like new. Ordering was a breeze and the delivery company couldn\'t have been more accommodating. I look forward to purchasing again from Article."
*/

export default class App extends Component {

	state = {
		result: {}
	}

	async handleOnClick (){
		const articleContent = {
			"documents": [
				{
					"language": "en",
					"id": "1",
					"text": this.text
				}
			]
		}

		const url = "https://westus.api.cognitive.microsoft.com/text/analytics/v2.0/keyPhrases";

		const body = JSON.stringify(articleContent);

		const res = await fetch(url, {
				method: 'POST',
				body,
				headers: {
					"Content-Type": "application/json",
					"Ocp-Apim-Subscription-Key": "50b1ba0dbfb54f33a45ba2440fc0b22c"
				}
			});

		const json = await res.json();

		this.setState({
			result: json
		});
	}

	handleChange = (e, {
		value
	}) => {
		this.text = value;
	}

	render() {
		return(
			<Card fluid>
				<Card.Content>
					<Form>
						<Form.TextArea onChange={this.handleChange} label='Email Text' placeholder='Put your email text here' />
						<Button fluid onClick={this.handleOnClick.bind(this)}>Get Cognitive Data</Button>
						<JSONTree data={this.state.result} />
					</Form>
				</Card.Content>
			</Card>
		);
	}
}
