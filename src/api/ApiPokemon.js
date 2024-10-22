export const ApiPokemon = {
    fetchAllPokemons: async () => {
        const response = await fetch("http://localhost:3001/pokemons")
        const pokemons = await response.json()
        return pokemons
    },
    fetchPokemonByID: async (id) => {
        const response = await fetch("http://localhost:3001/pokemons/" + id)
        const pokemon = await response.json()
        return pokemon
    },
    fetchPokemonReviews: async (id) => {
        const response = await fetch(" http://localhost:3001/reviews/?pokemonId=" + id)
        const reviews = await response.json()
        return reviews
    },
    updatePokemonLike: async (id, status) => {
        const response = await fetch("http://localhost:3001/pokemons/" + id)
        const data = await response.json()
        let updatedResponse;
        if (!status) {
            updatedResponse = { ...data, like: data.like + 1 }
        } else {
            updatedResponse = { ...data, like: data.like - 1 }
        }

        await fetch("http://localhost:3001/pokemons/" + id, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(updatedResponse),
        });
    },
    addReview: async (message) => {
        await fetch("http://localhost:3001/reviews/", {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(message),
        });
    }
}