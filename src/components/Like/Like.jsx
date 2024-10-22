import { FcLike } from "react-icons/fc";
import { FcLikePlaceholder } from "react-icons/fc";
import s from "./Like.module.css"
import { ApiPokemon } from "../../api/ApiPokemon.js"

export function Like({ like, id, likeStatus, setLikeStatus }) {


    function handleClick() {
        ApiPokemon.updatePokemonLike(id, likeStatus)
        setLikeStatus(!likeStatus)
    }

    if (!likeStatus) {
        return (
            <div className={s.container}>
                <span className={s.text}><p>{like}</p></span>
                <FcLikePlaceholder size={30} onClick={handleClick}></FcLikePlaceholder>
            </div>
        )
    } else {
        return (
            <div className={s.container}>
                <span className={s.text}><p>{like}</p></span>
                <FcLike size={30} onClick={handleClick}></FcLike>
            </div>
        )
    }


}