import React, { Component } from 'react';

class Card extends Component {
    render() {
    return (
        <div className='col'>
            <div className="card" style={{ width: '18rem', textAlign : "center" }}>
            <button className="btn btn-primary" onClick={()=>this.props.onIncrement(this.props.card)}>Aggiungi<span className='badge badge-light'>{this.props.quantità}</span></button>
            <img src={this.props.immagine} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{this.props.nome}</h5>
                <p className="card-text">{this.props.prezzo}€</p>
                <button className="btn btn-outline-danger" onClick={()=>this.props.onDelete(this.props.id)}>Elimina</button>
            </div>
        </div>
        </div>
    )
    }
}

export default Card;