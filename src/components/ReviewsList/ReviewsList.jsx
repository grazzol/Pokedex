import { ReviewCard } from "../ReviewCard/ReviewCard"
import { v4 as uuidv4 } from 'uuid';
import s from "./ReviewsList.module.css"
import { ApiPokemon } from "../../api/ApiPokemon";
import { useState, useEffect } from "react";

export function ReviewsList({ id }) {

    const [pokemonReviews, setPokemonReviews] = useState()
    const [refresh, setRefresh] = useState(0)

    useEffect(() => {
        fetchPokemonReviewsByID(id)
    }, [refresh])

    async function fetchPokemonReviewsByID(id) {
        const response = await ApiPokemon.fetchPokemonReviews(id)
        setPokemonReviews(response)
    }

    const handleKeyPress = (ev) => {
        if (ev.key === 'Enter') {
            const message = {
                pokemonId: id,
                author: "Me",
                content: ev.target.value
            }
            ApiPokemon.addReview(message)
            setRefresh(refresh + 1)
        }
    }

    if (pokemonReviews) {
        return (
            <div>
                <h1>Reviews</h1>
                <input className={s.input} type="text" placeholder="Add a review" onKeyDown={handleKeyPress} />
                <div className={s.container_reviews}>
                    <ul className={s.list}>
                        {pokemonReviews.map((item) => (
                            <ReviewCard key={uuidv4()} review={item}></ReviewCard>
                        ))}
                    </ul>
                    <div className={s.barre}></div>
                </div>
            </div>
        )
    }

}