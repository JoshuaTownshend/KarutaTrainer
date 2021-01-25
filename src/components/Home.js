import React from "react"
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import yomi015s from '../yomi015s.jpg';

class Home extends React.Component {

    render() {

        return (
            <>
                <div id="homeContainer" className="homeContainer">
                    <h1>Karuta Trainer</h1>
                    <img alt="Karuta card 15" src={yomi015s} />
                    <ul className="linksHome">
                        <Link to="/game">
                            <li>Game</li>
                        </Link>
                        <Link to="/poems">
                            <li>Poems</li>
                        </Link>
                    </ul>
                    <p>This app was built by <a href="https://github.com/ouchJP/KarutaTrainer" target="_blank">Ouch</a> using React.</p>
                </div>
            </>
        )
    }
}

export default Home;