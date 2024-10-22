import s from "./PokemonCard.module.css"
import { PokemonType } from "../PokemonType/PokemonType"

export function PokemonCard({ pokemon }) {
    return (
        <div className={`${s.container_card} ${s.card}`}>
            <img className={s.image} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`} alt="image du pokemon" />
            <p className={s.title}>#{pokemon.id} {pokemon.name}</p>
            <PokemonType types={pokemon.types}></PokemonType>
        </div >
    )
}