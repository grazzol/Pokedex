import { Link } from "react-router-dom";
import { PokemonCard } from "../PokemonCard/PokemonCard";
import s from "./PokemonCardList.module.css"
import { ROUTES } from "../../routes/routes";
import { v4 as uuidv4 } from 'uuid';

export function PokemonCardList({ allPokemonList, searchQuery }) {
    if (allPokemonList.length > 0) {
        return (
            <div className={s.container_card_list}>
                {allPokemonList.map((item) => (
                    <Link key={uuidv4()} to={ROUTES.pokemon + "/" + item.id} style={{ textDecoration: 'none' }}><PokemonCard key={uuidv4()} pokemon={item} /></Link>
                ))}
            </div>
        )
    } else {
        return (
            <div className={s.error_message}>
                <p>No Pokemon found with this name : {searchQuery}</p>
            </div>
        )
    }

}