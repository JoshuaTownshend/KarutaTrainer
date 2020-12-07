import React from "react"
import CardContainer from "./CardContainer"
import Header from "./Header"
import CurrentCard from "./CurrentCard"
import { cardData } from "../Cards";

class GameContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: cardData,
      score: 0,
      numberOfCards: 12,
      numberOfCardsTemp: 12,
      currentCard: [{}],
      cardsInPlay: [{}],
      cardRangeStart: 0,
      cardRangeStartTemp: 0, //stores input of range, doesnt update the cards until 'start' pressed
      cardRangeFinish: 100,
      cardRangeFinishTemp: 100, //stores input of range, doesnt update the cards until 'start' pressed
      kanjiKanaSelect: "kanji",
    }
  }


  componentDidMount = (e) => {
    const numberOfCards = this.state.numberOfCards;
    //generate an array of cardData.length 
    var rangeStart = this.state.cardRangeStart;
    var rangeFinish = this.state.cardRangeFinish;
    if (rangeFinish - rangeStart < numberOfCards) {
      alert("Range of Cards must be higher than number of cards");
      return;
    } else {
      var values = [];
      for (let i = rangeStart; i < (rangeFinish - rangeStart); i++) {
        values.push(i);
      }
      //generate cardsInPlay
      let cardsInPlayArr = [];
      for (let i = 0; i < numberOfCards; i++) {
        //splice out random num from values[] to prevent same card twice
        const random = values.splice(Math.random() * values.length, 1)[0];
        cardsInPlayArr.push(cardData[random]);
      }
      var rangeCards = cardsInPlayArr.slice(this.state.cardRangeStart, this.state.cardRangeFinish);
      this.setState({
        cardsInPlay: [...rangeCards],
        currentCard: [rangeCards[Math.floor(Math.random() * rangeCards.length)]]
      })
    }
  }

  resetGame = () => {
    var numberOfCards = 12;
    //generate an array of cardData.length 
    var rangeStart = this.state.cardRangeStart;
    var rangeFinish = this.state.cardRangeFinish;
    var values = [];
    for (let i = rangeStart; i < (rangeFinish - rangeStart); i++) {
      values.push(i);
    }
    //generate cardsInPlay
    let cardsInPlayArr = [];
    for (let i = 0; i < numberOfCards; i++) {
      //splice out random num from values[] to prevent same card twice
      const random = values.splice(Math.random() * values.length, 1)[0];
      cardsInPlayArr.push(cardData[random]);
    }
    var rangeCards = cardsInPlayArr.slice(this.state.cardRangeStart, this.state.cardRangeFinish);
    this.setState({
      numberOfCards: 12,
      numberOfCardsTemp: 12,
      score: 0,
      cardRangeStart: 0,
      cardRangeFinish: 100,
      cardRangeStartTemp: 0,
      cardRangeFinishTemp: 100,
      cardsInPlay: [...rangeCards],
      currentCard: [rangeCards[Math.floor(Math.random() * rangeCards.length)]]
    })
  }

  newGame = () => {
    var numberOfCardsTemp = this.state.numberOfCardsTemp;
    //generate an array of cardData.length 
    //var rangeStart = this.state.cardRangeStart;
    //var rangeFinish = this.state.cardRangeFinish;
    var rangeStartTemp = this.state.cardRangeStartTemp;
    var rangeFinishTemp = this.state.cardRangeFinishTemp;
    var values = [];
    for (let i = rangeStartTemp; i < (rangeFinishTemp - rangeStartTemp); i++) {
      values.push(i);
    }
    console.log(values);
    //generate cardsInPlay
    let cardsInPlayArr = [];
    for (let i = 0; i < numberOfCardsTemp; i++) {
      //splice out random num from values[] to prevent same card twice
      const random = values.splice(Math.random() * values.length, 1)[0];
      cardsInPlayArr.push(cardData[random]);
    }
    var rangeCards = cardsInPlayArr.slice(this.state.cardRangeStartTemp, this.state.cardRangeFinishTemp);
    this.setState({
      score: 0,
      numberOfCards: numberOfCardsTemp,
      numberOfCardsTemp: numberOfCardsTemp,
      cardRangeStart: rangeStartTemp,
      cardRangeStartTemp: rangeStartTemp,
      cardRangeFinish: rangeFinishTemp,
      cardRangeFinishTemp: rangeFinishTemp,
      cardsInPlay: [...rangeCards],
      currentCard: [rangeCards[Math.floor(Math.random() * rangeCards.length)]]
    })
  }

  //handles event change for kanji/kana selector
  onValueChange = (event) => {
    this.setState({
      kanjiKanaSelect: event.target.value
    });
  }

  //handles input display for number of cards input
  onChangeCount = (event) => {
    if (event.target.value > cardData.length) {
      event.target.value = cardData.length
    }
    this.setState({
      numberOfCardsTemp: event.target.value
    })
  }

  //handles input display for range inputs
  onChangeStart = (event) => {
    if (event.target.value < this.state.cardRangeFinishTemp && event.target.value >= 1) {
      this.setState({
        cardRangeStartTemp: event.target.value
      })
    }
  }

  onChangeFinish = (event) => {
    if (event.target.value <= cardData.length) {
      this.setState({
        cardRangeFinishTemp: event.target.value
      })
    }
  }



//handle comparison of clicked card (index) with currentCard
  handleComparison = (index) => {
    console.log(this.state.numberOfCards);
    //get number of cards
    var numberOfCards = this.state.numberOfCards;
    //get score
    let scoreVal = this.state.score;
    //set random choice of cards
    const random = Math.floor(Math.random() * this.state.cardsInPlay.length);
    if (this.state.score % (numberOfCards - 1) === 0 && this.state.score !== 0) {
      //increase score
      scoreVal++;
      //create empty cardsInPlay array
      var rangeStart = this.state.cardRangeStart;
      var rangeFinish = this.state.cardRangeFinish;
      var values = [];
      for (let i = rangeStart; i < (rangeFinish - rangeStart); i++) {
        values.push(i);
      }
      let cardsInPlayArr = [];
      for (let i = 0; i < numberOfCards; i++) {
        const random = values.splice(Math.random() * values.length, 1)[0];
        cardsInPlayArr.push(cardData[random]);
      }
      var rangeCards = cardsInPlayArr.slice(this.state.cardRangeStart, this.state.cardRangeFinish);
      console.log(rangeCards);
      this.setState({
        score: scoreVal,
        cardsInPlay: [...rangeCards],
        currentCard: [rangeCards[Math.floor(Math.random() * rangeCards.length)]]
      })
    } else {
      if (this.state.cardsInPlay[index].id === this.state.currentCard[0].id) {
        scoreVal++;
        this.setState({
          currentCard: [this.state.cardsInPlay[random]],
          score: scoreVal
        })
      }
    }
  }

  render() {

    return (
      <>
        <Header score={this.state.score}
          resetScore={this.resetGame}
          newGame={this.newGame}
          onChangeCount={this.onChangeCount}
          numberOfCardsTemp={this.state.numberOfCardsTemp}
          onValueChange={this.onValueChange}
          rangeStart={this.state.cardRangeStart}
          rangeFinish={this.state.cardRangeFinish}
          rangeStartTemp={this.state.cardRangeStartTemp}
          rangeFinishTemp={this.state.cardRangeFinishTemp} 
          onChangeStart={this.onChangeStart}
          onChangeFinish={this.onChangeFinish}/>
          <CurrentCard 
          displayType={this.state.kanjiKanaSelect}
          currentCard={this.state.currentCard}/>
        <div className="audioDiv">
          <audio controls>
            <source src="" type="audio/mpeg"></source>
            Your browser does not support audio.
          </audio>
        </div>
        <CardContainer cards={this.state.cardsInPlay}
          displayType={this.state.kanjiKanaSelect}
          number={this.state.numberOfCards}
          handleComp={this.handleComparison} />
        <p>To do:</p>
        <ul>
          <li>Prevent repetition of same currentCard</li>
          <li>Add audio for every card -{`>`} play audio on new card</li>
        </ul>
        <footer>
          <p>made by ouch || last updated {document. lastModified}</p>
        </footer>
      </>

    )
  }
}
export default GameContainer