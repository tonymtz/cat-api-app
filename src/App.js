import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Loading from './components/Loading';
import BigImage from './components/BigImage';
import FavList from './components/FavList';

import { NavLink } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div className="App">

                <Router>

                    <main>
                        <nav>
                            <ul>
                                <li>
                                    <NavLink exact to={ '/' } activeClassName="active">Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to={ '/favs' } activeClassName="active">Favs</NavLink>
                                </li>
                            </ul>
                        </nav>

                        <Route path='/favs' component={ FavList }/>

                        <Route exact path='/' component={ BigImage }/>
                    </main>

                </Router>

                <Loading/>
            </div>
        );
    }
}

export default App;
