import React, { Component } from 'react';

import { Button, Card, Image } from 'semantic-ui-react'

import './App.css';

export default class App extends Component {

	handleOnClick=()=> {
		console.log("HELLO");
	}

	render() {
		return (
			<Card fluid>
				<Image src='https://react.semantic-ui.com/assets/images/avatar/large/matthew.png' />
				<Card.Content>
					<Button fluid onClick={this.handleOnClick}>Get some data</Button>
				</Card.Content>
			</Card>
		);
	}
}
