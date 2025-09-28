'use client';
import { useState } from "react";
import "./beers.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons'

export default function Beer({beer}){
    const [quantity, setQuantity] = useState(0);
    const [message, setMessage] = useState("");
    const [liked, setLiked] = useState(false);

    const handlerPlus = () => { 
        setQuantity(quantity + 1);
    }

    // TODO implementar handlerMinus
    // implementarlo con un solo handler
    // validar que no pueda comprar 0 unidades.

    // TODO mostrar la cantidad de likes

    const handleBuy = () => {
        setMessage(`Has comprado ${quantity} unidades de ${beer.name}`);
        setTimeout(() => setMessage(''), 3000);        
    }

    const toggleLike = () => {  
        setLiked(!liked);
    }

    return (
        <div className="beer-card">
            <div className="beer-image-container">
                <button onClick={toggleLike} className={`heart-button ${liked ? 'liked' : ''}`}>
                    <FontAwesomeIcon icon={liked ? solidHeart : regularHeart} />
                </button>
                <img
                    src={beer.label} 
                    alt={`Etiqueta de ${beer.name}`} 
                    className="beer-image" 
                />
            </div>
            <div className="beer-info">
                <h3 className="beer-name">{beer.name}</h3>
                <div>
                    <p className="beer-details"><span>Tipo:</span>{beer.type}</p>
                    <p className="beer-details"><span>ABV:</span>{beer.abv}%</p>
                </div>
                {/* Control de cantidad */}
                <div className="quantity-control">
                    <span className="quantity-label">Cantidad:</span>
                    <button  className="quantity-button quantity-button-left">-</button>
                    <span className="quantity-display">{quantity}</span>
                    <button onClick={handlerPlus} className="quantity-button quantity-button-right">+</button>
                </div>
              
                {/* botón de compra */}
                <button onClick={handleBuy} className="buy-button">Comprar</button>

                {/* Mensaje de confirmación  */}
                {
                    message && 
                    (<div className="success-message"> 
                        {message}
                    </div>)
                }
            </div>
        </div>
    );          
}