import React from "react"

class Header extends React.Component {
    render() {
        return (
            <div className="head">
                <h1>Karuta Trainer</h1>
                <span>Score: {this.props.score} <button onClick={this.props.resetScore}>Reset</button></span>
                <div>
                    <form>[     <input type="radio" value="kanji" name="select" onChange={this.props.onValueChange} /> Kanji |
                                <input type="radio" value="hiragana" name="select" onChange={this.props.onValueChange} /> Hiragana |
                                <input type="radio" value="kimariji" name="select" onChange={this.props.onValueChange} /> Kimariji ]
                                <span>[ Number of Cards
                                    <input type="text"
                                id="text"
                                value={this.props.numberOfCardsTemp}
                                onChange={this.props.onChangeCount} /> ]<br />
                                {/*[ Card Range: From 
                                <input type="text"
                                id="text"
                                value={this.props.rangeStartTemp}
                                onChange={this.props.onChangeStart}/> to 
                                <input type="text"
                                id="text"
                                value={this.props.rangeFinishTemp}
                                onChange={this.props.onChangeFinish}/>]*/} </span></form><button onClick={this.props.newGame}> Start </button></div>
            </div>
        )
    }
}

export default Header