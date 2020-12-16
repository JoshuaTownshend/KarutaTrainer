import React from "react"
import { cardData } from "../Cards";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class Poems extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: cardData,
        }
    }



    render() {

        const list = cardData.map((cards, index) => {
            return (
                <tr key={index}>
                    <td><Link to={`/KarutaTrainer/poems/${cards.id}`} cards={cardData}>{cards.id}</Link></td>
                    <td>{cards.front}</td>
                    <td>{cards.kimarijiFront}</td>
                    <td>{cards.back}</td>
                    <td>{cards.kimarijiBack}</td>
                    <td>{cards.theme}</td>
                    <td>{cards.author}</td>
                </tr>
            )
        });

        return (
            < >
                <div id="poemsContainer" className="poemsContainer">
                    <header>
                        <h1>Poems</h1>
                    </header>
                    <div id="poemsTableContainer" className="poemsTableContainer">
                        <table>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Front</th>
                                    <th>Kimariji</th>
                                    <th>Back</th>
                                    <th>Kimariji</th>
                                    <th>Theme</th>
                                    <th>Author</th>
                                </tr>
                            </thead>
                            <tbody>
                                {list}
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        )
    }
}

export default Poems;