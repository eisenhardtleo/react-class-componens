import React, { Component } from 'react';

class Card extends Component {
    render() {
    return (
        <div className='col'>
            <div className="card" style={{ width: '18rem', textAlign : "center" }}>
            <button className="btn btn-success" onClick={()=>this.props.onIncrement(this.props.card)}>+</button>
            <button className="btn btn-danger" onClick={()=>this.props.onDecrement(this.props.card)}>-</button>
            <img src={this.props.immagine} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{this.props.nome}</h5>
                <p className="card-text">{this.props.prezzo}€</p>
                <button className="btn btn-outline-danger" onClick={()=>this.props.onDelete(this.props.id)}>Elimina<span style={{color:"black"}} className='badge badge-warning'>{this.props.quantità}</span></button>
            </div>
        </div>
        </div>
    )
    }
}

export default Card;
