import { Header } from "../../components/Header/Header"
import { ApiPokemon } from "../../api/ApiPokemon"
import { PokemonCardList } from "../../components/PokemonCardList/pokemonCardList"
import { SearchBar } from "../../components/SearchBar/SearchBar"
import { useState, useEffect } from "react"

export function HomePage() {

    const [allPokemonList, setAllPokemonList] = useState([])
    const [searchQuery, setSearchQuery] = useState("")
    const filteredPokemonList = allPokemonList.filter((t) => t.name.toLowerCase().includes(searchQuery.toLowerCase()))


    useEffect(() => {
        fetchAllPokemon()
    }, [])

    async function fetchAllPokemon() {
        const response = await ApiPokemon.fetchAllPokemons()
        setAllPokemonList(response)
    }


    const onChange = (text) => {

        if (text === "") {
            setSearchQuery(text)
        } else {
            setSearchQuery(text)
        }
    }

    console.log(filteredPokemonList)

    return (
        <div >
            <Header></Header>
            <SearchBar onChange={onChange}></SearchBar>
            <PokemonCardList allPokemonList={filteredPokemonList} searchQuery={searchQuery} />
        </div>

    )
}