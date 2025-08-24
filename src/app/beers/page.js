import { beers } from "../data/mocs";
import BeerList from "./components/BeerList";

export default function BeersPage(){
            
    return (
        <div className="container">            
            <BeerList beers={beers} />            
        </div>
    );
}