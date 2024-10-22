import s from "./NotFound.module.css"
import { Link } from "react-router-dom"
import { ROUTES } from "../../routes/routes"

export function NotFound() {
    return (
        <div className={s.page404}>
            <h1>404 - Page Not Found</h1>
            <p>Oops! Click on the Pokeball !! It will redirect you to the Home Page !</p>
            <Link to={ROUTES.index}><img src="./pokeball.png" alt="404 Error" /></Link>
        </div>
    )
}