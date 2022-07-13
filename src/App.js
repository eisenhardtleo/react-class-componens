import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Card from "./components/Card";

import hamburger from './images/hamburger.jpg';
import insalata from './images/insalata.jpg';
import panzerotti from './images/panzerotti.jpg';
import pizza from './images/pizza.jpg';
import poke from './images/poke.jpg';
import ramen from './images/ramen.jpg';
import sushi from './images/sushi.jpg';
import couscous from './images/cous-cous.jpg';


class App extends Component {
  state = {
    cards : [
      {id: 0, nome : "Hamburger", prezzo : 5.99, immagine : hamburger, quantità : 0},
      {id: 1, nome : "Insalata", prezzo : 1.99, immagine : insalata, quantità : 0},
      {id: 2, nome : "Panzerotti", prezzo : 2.99, immagine : panzerotti, quantità : 0},
      {id: 3, nome : "Pizza", prezzo : 7.99, immagine : pizza, quantità : 0},
      {id: 4, nome : "Poke", prezzo : 9.99, immagine : poke, quantità : 0},
      {id: 5, nome : "Ramen", prezzo : 4.99, immagine : ramen, quantità : 0},
      {id: 6, nome : "Sushi", prezzo : 14.99, immagine : sushi, quantità : 0},
      {id: 7, nome : "Cous cous", prezzo : 3.99, immagine : couscous, quantità : 0}
    ]
  }

  handleDelete = (cardId) => {
    const updatedCards = this.state.cards.filter(card => card.id !== cardId);
    this.setState({cards : updatedCards});
  }

  handleIncrement = card => {
    const cards = [...this.state.cards];
    const id = cards.indexOf(card);
    cards[id] = {...card};
    cards[id].quantità++;
    this.setState({cards});
  }

  render(){
  return (
    <>
      <Navbar />
      <div className="container">
        <h1>Cosa desideri ordinare?</h1>
        <hr />
        <div className="row">
          {this.state.cards.map(card => (
            <Card 
                  key={card.id}
                  id={card.id}
                  nome={card.nome}
                  prezzo={card.prezzo}
                  immagine={card.immagine}
                  quantità={card.quantità}
                  onIncrement={this.handleIncrement}
                  onDelete={this.handleDelete}
                  card={card}
            />
          ))}
        </div>
      </div>
    </>
  );
  }
}

export default App;
