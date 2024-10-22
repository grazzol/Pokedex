import s from "./PokemonType.module.css"
import { PKMN_TYPES } from "../../const/PokemonsTypes"

export function PokemonType({ types }) {

    function getColoType(type) {
        const color = PKMN_TYPES.filter((t) => t.name.toLowerCase().includes(type.toLowerCase()))[0].color
        return (color)
    }

    return (
        <div className={s.container}>
            {types.map((item) => (
                <div key={Math.random()} className={s.type} style={{ background: getColoType(item) }}>
                    <p className={s.type_text}>{item}</p>
                </div>
            ))}
        </div>
    )
}