import React from 'react'

import Player from '../components/Player';

class Board extends React.Component {

	constructor(props) {
		super(props);
		this.state = { sounds: '' };
	}

	fetchSounds() {
		fetch('http://fxlib.gasperdobrovoljc.com/api/file/')
		.then(res => res.text())
		.then(res => {
			const list = JSON.parse(res).files.map(file => <Player title={ file }></Player>);
			this.setState({ sounds: list });
		});
	}

	componentWillMount() {
		this.fetchSounds();
	}
	
	render() {
		return this.state.sounds;
	}

}

export default Board;