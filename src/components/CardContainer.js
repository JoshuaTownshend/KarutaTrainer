import React from "react"

class CardContainer extends React.Component {


    render() {
    const mystyle = {
        color: "blue"
    };

        if (this.props.displayType === "kanji") {
            return (
                <div id="CardContainer" className="cardContainer">
                    {this.props.cards.slice(0, this.props.number).map((cards, index) => (
                        <div id="card" className="cardOuter" onClick={() => this.props.handleComp(index)}>
                            <div className="cardInner">
                                <p key={index}>{cards.back}</p>
                            </div>
                        </div>
                    ))}

                </div>)
        }
        else if (this.props.displayType === "hiragana") {
            return (
                <div id="CardContainer" className="cardContainer">
                    {this.props.cards.slice(0, this.props.number).map((cards, index) => (
                        <div id="card" className="cardOuter" onClick={() => this.props.handleComp(index)}>
                            <div className="cardInner">
                                <p key={index}>{cards.backKana}</p>
                            </div>
                        </div>
                    ))}

                </div>)
        }
        else {
            return (
                <div id="CardContainer" className="cardContainer">
                    {this.props.cards.slice(0, this.props.number).map((cards, index) => (
                        <div id="card" className="cardOuter" onClick={() => this.props.handleComp(index)}>
                            <div className="cardInner">
                                {console.log(cards.kimarijiBack)}
                            <p style={mystyle} class="inline" key={index}>{cards.backKana?.slice(0,cards.kimarijiBack)}</p><p class="inline">{cards.backKana?.slice(cards.kimarijiBack, cards.backKana.length)}</p>
                            </div>
                        </div>
                    ))}

                </div>)
        };
    }
}

export default CardContainer