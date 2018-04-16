import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFavs, unfavImage } from '../reducers/images';
import './FavList.css';

const Fav = ({ image, unfavImage }) => (
    <div className="tile" style={ { 'backgroundImage': `url(${image.url})` } }>
        <button onClick={ unfavImage }>x</button>
    </div>
);

class FavList extends Component {
    componentDidMount() {
        this.props.fetchFavs()
    }

    render() {
        if (this.props.favs) {
            const favs = this.props.favs.map((image) => {
                return <Fav
                    key={ image.id }
                    image={ image }
                    unfavImage={ () => {
                        this.props.unfavImage(image.id);
                    } }
                />
            });

            return (
                <div className="container">
                    <h1>Favorites</h1>

                    <div className="favs">
                        { favs }
                    </div>
                </div>
            );
        } else {
            return (<p>You don't have any fav yet</p>);
        }
    }
}

export default connect(
    (state) => ({ favs: state.images.favs }),
    { fetchFavs, unfavImage }
)(FavList);
