

import Beer from "./Beer"
import "./beers.css";

export default function BeerList({beers}){
 return (
    <section>
      <h1 className="beer-title">Nuestra Selección de Cervezas</h1>
      <div className="beer-grid">
        {beers.map(b => (
          <Beer key={b.name} beer={b} />
        ))}
      </div>
    </section>
  )
  }