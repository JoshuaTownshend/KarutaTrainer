import React from "react"
import { cardData } from "../Cards";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class PoemDetail extends React.Component {

    render() {
        const mystyle = {
            color: "red"
        };
        var idBefore = this.props.match.params.id;
        var id = idBefore - 1;

        var poem = cardData[id];

        var displayTypeFront = poem.frontKana;
        var kimarijiCount = poem.kimarijiFront;

        var displayTypeBack = poem.backKana;
        var kimarijiCountBack = poem.kimarijiBack;

        var poemurlid;

        if (poem.id === 33 || poem.id === 99 || poem.id === 64 || poem.id === 79 || poem.id === 85 || poem.id === 94) {
            poemurlid = "0" + poem.id + "s1.jpg";
        }
        else if (poem.id < 10) {
            poemurlid = "00" + poem.id + "s.jpg";
        }
        else if (poem.id > 10 && poem.id < 99) {
            poemurlid = "0" + poem.id + "s.jpg";
        }
        else if (poem.id === 100) {
            poemurlid = 100 + "s.jpg";
        }

        var imgurl = "https://polygondrill.com/wp-content/uploads/2015/05/yomi" + poemurlid;

        return (
            < >
                <div id="poemsContainer" className="poemsContainer">
                    <header>
                        {/*<Link to={`/KarutaTrainer/poems/${poem.id - 1}`} cards={cardData}>-</Link>*/}<h1>{poem.id}</h1>{/*<Link to={`/KarutaTrainer/poems/${poem.id + 1}`} cards={cardData}>+</Link>*/}
                    </header>
                    <p>詠み人: {poem.author}</p>
                    <p>歌の種類: {poem.theme}</p>
                    <img src={imgurl} alt="karuta card"></img>
                    <p>{poem.front}</p>
                    <p style={mystyle} class="inline">{displayTypeFront?.slice(0, kimarijiCount)}</p><p class="inline">{displayTypeFront?.slice(kimarijiCount, displayTypeFront.length)}</p>
                    <p>{poem.back}</p>
                    <p style={mystyle} class="inline">{displayTypeBack?.slice(0, kimarijiCountBack)}</p><p class="inline">{displayTypeBack?.slice(kimarijiCountBack, displayTypeBack.length)}</p>
                </div>
            </>
        )
    }
}

export default PoemDetail;