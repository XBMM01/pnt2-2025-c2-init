

import Beer from "./Beer"
import "./beers.css";

export default function BeerList({beers}){
 return (
    
      <div className="beer-list-title"> Nuestra Selección de Cervezas 
      <ul className="beer-grid">
        {beers.map(b => (
          <Beer key={b.name} beer={b} />
        ))}
        </ul>
      </div>
   
  )
  }