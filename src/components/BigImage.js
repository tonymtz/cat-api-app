import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchImage, favImage } from '../reducers/images';
import './BigImage.css';

class BigImage extends Component {
    componentDidMount() {
        this.props.fetchImage()
    }

    render() {
        if (this.props.image) {
            const image = this.props.image;

            return (
                <div className="big-image">

                    <div className="img" style={ { 'backgroundImage': `url(${image.url})` } }/>

                    <p>source: { image.source_url }</p>

                    <div className="controls">
                        <button className="next"
                                onClick={ () => {
                                    this.props.fetchImage();
                                } }>
                            X
                        </button>

                        <button className="like"
                                onClick={ () => {
                                    this.props.favImage(this.props.image.id);
                                } }>
                            &lt; 3
                        </button>
                    </div>
                </div>
            );
        } else {
            return (<p>loading</p>);
        }
    }
}

export default connect(
    (state) => ({ image: state.images.image }),
    { fetchImage, favImage }
)(BigImage);
