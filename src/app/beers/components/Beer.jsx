import "./beers.css"; // importa los estilos

export default function Beer({beer}){
    return (
        //retorna el JSX siempre tiene que tener 1 contendor
    <div className="beer-card"> 
      <div className="beer-image-container">
        {/* Usamos <img> simple para no configurar dominios remotos de next/image */}
        <img className="beer-image" src={beer.label} alt={beer.name} loading="lazy" />
      </div>

      <div className="beer-info">
        <h3 className="beer-name">{beer.name}</h3>

        <p className="beer-detail">
          <span className="beer-detail-label">Tipo:</span> {beer.type}
        </p>
        <p className="beer-detail">
          <span className="beer-detail-label">ABC:</span> {beer.abv}%
        </p>

        <button className="buy-button" >
          Comprar
        </button>

      </div>
    </div>
  )
}