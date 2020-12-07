import React from "react"
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class Home extends React.Component {

    render() {
        return (
            <>
                <div id="homeContainer" className="homeContainer">
                    <div>
                        <h1>Karuta Trainer</h1>
                        <ul className="linksHome">
                            <Link to="/KarutaTrainer/game">
                                <li>Game</li>
                            </Link>
                            <Link to="/KarutaTrainer/poems">
                                <li>Poems</li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}

export default Home;