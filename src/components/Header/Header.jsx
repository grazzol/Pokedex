import { ROUTES } from "../../routes/routes"
import s from "./Header.module.css"
import { Link } from "react-router-dom"

export function Header() {
    return (
        <div className={s.header}>
            <Link to={ROUTES.index}>
                <img className={s.image} src="/pokeball.png" alt="pokeball image" />
                <img className={s.image} src="/pokedex.png" alt="pokedex image" />
            </Link>
        </div>

    )
}