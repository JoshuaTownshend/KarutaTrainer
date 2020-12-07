import React from "react"
import { cardData } from "../Cards";

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
                    <td>{cards.id}</td>
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
                        <h1>Poems (WIP)</h1>
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