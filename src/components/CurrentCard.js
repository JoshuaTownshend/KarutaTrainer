

import React from "react"

class CurrentCard extends React.Component {


    render() {
        const mystyle = {
            color: "red"
        };

        if (this.props.displayType === "kanji") {
            return (
                <div className="currentCardOuter">
                    <div className="currentCardInner">
                        <p>{this.props.currentCard[0].front}</p>
                    </div>
                </div>
            )
        } else if (this.props.displayType === "hiragana") {
            return (
                <div className="currentCardOuter">
                    <div className="currentCardInner">
                        <p>{this.props.currentCard[0].frontKana}</p>
                    </div>
                </div>
            )
        } else {
            var displayTypeFront = this.props.currentCard[0].frontKana;
            var kimarijiCount = this.props.currentCard[0].kimarijiFront
            return (
                <div className="currentCardOuter">
                    <div className="currentCardInner">
                    <p style={mystyle} class="inline">{displayTypeFront?.slice(0,kimarijiCount)}</p><p class="inline">{displayTypeFront?.slice(kimarijiCount,displayTypeFront.length)}</p>
                    </div>
                </div>
            )
        }
    }
}

export default CurrentCard