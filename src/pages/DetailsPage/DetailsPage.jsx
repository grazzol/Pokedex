import { Header } from "../../components/Header/Header"
import { useParams } from "react-router-dom"
import { ApiPokemon } from "../../api/ApiPokemon"
import { useEffect, useState } from "react"
import s from "./DetailsPage.module.css"
import { PokemonType } from "../../components/PokemonType/PokemonType"
import { PourcentageBar } from "../../components/PourcentageBar/PourcentageBar"
import { Like } from "../../components/Like/Like"
import { ReviewsList } from "../../components/ReviewsList/ReviewsList"
import { Loading } from "../../components/Loading/Loading"

export function DetailsPage() {

    const [pokemonDetails, setPokemonDetails] = useState()
    const [likeStatus, setLikeStatus] = useState(false)
    const { id } = useParams()


    useEffect(() => {
        const timer = setTimeout(() => {
            fetchPokemonByID(id)
        }, 2000);

        return () => clearTimeout(timer);
    }, [likeStatus])


    async function fetchPokemonByID(id) {
        const response = await ApiPokemon.fetchPokemonByID(id)
        setPokemonDetails(response)
    }

    console.log(likeStatus)


    if (!pokemonDetails) {
        return (
            <>
                <Header />
                <Loading />
            </>

        )
    } else {

        return (
            <div>
                <Header></Header>
                <div className={s.imagebg}>
                    <img src="/pokeball_bg.svg" alt="bg pokeball" />
                    <div className={s.detailsContainer}>

                        <div className={s.imageContainer}>
                            <img className={s.imagePokemon} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonDetails.id}.svg`} alt="image du pokemon" />
                        </div>

                        <div className={s.details}>
                            <Like className={s.like} like={pokemonDetails.like} id={id} likeStatus={likeStatus} setLikeStatus={setLikeStatus} />
                            <span className={s.pokemonDetailsPlacement}>
                                <h1>{pokemonDetails.name}</h1>
                                <PokemonType types={pokemonDetails.types}></PokemonType>
                            </span>
                            <PourcentageBar stats={pokemonDetails} ></PourcentageBar>
                        </div>

                        <div className={s.review}>
                            <ReviewsList id={id} ></ReviewsList>
                        </div>

                    </div>
                </div>
            </div>
        )
    }

}