import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Loading.css';

class BigImage extends Component {
    render() {
        return this.props.loading ?
            (<div className="loading">
                <p>Loading...</p>
            </div>) :
            null;
    }
}

export default connect(
    (state) => ({ loading: state.images.loading }),
    {}
)(BigImage);
