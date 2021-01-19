
import './Player.css';
import React from 'react';
import { Button } from 'reactstrap';

class Player extends React.Component {

    audio;
    constructor(props) {
        super(props);
        this.state = { isPlaying: false }
    }

    playAudio(title) {
        if (!this.state.isPlaying) {
            this.audio = new Audio(`http://fxlib.gasperdobrovoljc.com/api/file/${title}`);
            this.audio.play();
        }
        else
            this.audio.pause();
        this.setState({ isPlaying: !this.state.isPlaying });
        this.audio.addEventListener('ended', () => this.setState({ isPlaying: false }));
    }

    render() {
        return <div className='Player'>
            <Button color={ this.state.isPlaying ? 'success' : 'default' } outline onClick={ () => this.playAudio(this.props.title) }>
                { this.props.title.split('.')[0] }
            </Button>
        </div>
    }
}

export default Player;