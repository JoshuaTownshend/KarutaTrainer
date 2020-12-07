import React from 'react';
import GameContainer from './GameContainer';
import Poems from './Poems';
import Home from './Home';
import "../App.css"
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="wrapper">
                <ul className="links">
                    <Link to="/KarutaTrainer/">
                        <li>Home</li>
                    </Link>
                    <Link to="/KarutaTrainer/game">
                        <li>Game</li>
                    </Link>
                    <Link to="/KarutaTrainer/poems">
                        <li>Poems</li>
                    </Link>
                </ul>
                <div className="homepage">
                    <Switch>
                        <Route path="/KarutaTrainer/" exact component={Home} />
                        <Route path="/KarutaTrainer/game" component={GameContainer} />
                        <Route path="/KarutaTrainer/poems" exact component={Poems} />
                        {/*<Route path="/poems/:id" component={PoemDetail} />*/}
                    </Switch>
                </div>
            </div>
        </Router>

    )
}


export default App