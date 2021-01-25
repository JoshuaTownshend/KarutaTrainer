import React from 'react';
import GameContainer from './GameContainer';
import Poems from './Poems';
import Home from './Home';
import PoemDetail from './PoemDetail';
import "../App.css"
import { BrowserRouter as HashRouter, Router, Switch, Route, Link } from 'react-router-dom';

function App() {
    return (
        <HashRouter basename='/KarutaTrainer/'>
            <div className="wrapper">
                <ul className="links">
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <Link to="/game">
                        <li>Game</li>
                    </Link>
                    <Link to="/poems">
                        <li>Poems</li>
                    </Link>
                </ul>
                <div className="homepage">
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/game" component={GameContainer} />
                        <Route path="/poems" exact component={Poems} />
                        {<Route path="/poems/:id" component={PoemDetail} />}
                    </Switch>
                </div>
            </div>
        </HashRouter>

    )
}


export default App