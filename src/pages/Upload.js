import './Upload.css';
import React from 'react';
import axios from 'axios';

import { Button } from 'reactstrap';


class Upload extends React.Component {

    constructor(props) {
        super(props);
        this.state = { selectedFile: null };
    }

    onChangeHandler = event => {
        this.setState({
            selectedFile: event.target.files[0],
            loaded: 0,
        });
    }

    onClickHandler = () => {
        const data = new FormData();
        data.append('sound', this.state.selectedFile);
        axios.post('https://fxlib.gasperdobrovoljc.com/api/upload', data, {})
        .then(res => {
            if (res.data.status === false) {
                alert(res.data.message);
                return;
            } else {
                alert('File successfully uploaded!');
            }
        })
    }

    render() {
        return (
            <div className='Upload'>
                <input name='sound' type='file' onChange={ this.onChangeHandler } />
                <Button color='primary' outline onClick={ this.onClickHandler } >Upload</Button>
            </div>
        );
    }
    
}

export default Upload;