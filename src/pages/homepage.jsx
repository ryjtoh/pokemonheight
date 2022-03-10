import React from 'react';
import Search from '../components/Search';
import { fetchPokmemon } from '../services/retrievePokemon';


export default function HomePage() {

    const [pokemon, setPokemon] = React.useState();
    const [loading, setLoading] = React.useState(false);
    const [result, setResult] = React.useState(0);
    const [error, setError] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState("");

    const retrievePokemon = async (query) => {
        if (!query) {
            setErrorMessage("Please Enter a Pokemon")
            return setError(true);
        }
        setError(false);
        setLoading(true);
        setTimeout(async () => {
            try {
                const response = await fetchPokmemon(query);
                const results = await response.json();
                setPokemon(results);
                setResult(results.length)
                setLoading(false);
            } catch {
                setLoading(false);
                setError(true);
                setErrorMessage("Pokemon Not Found")
            }
            
        }, 1000)
        
    }

    const formatName = (name) => {
        const removeHyphen = name.toLowerCase().replace(/-/g, " ")
        const words = removeHyphen.split(" ");
        for (let i = 0; i < words.length; i++) {
            words[i] = words[i][0].toUpperCase() + words[i].substr(1);
        }
        return words.join(" ");
    }
    

    return (
        <div>
            {error ? (<h1>{errorMessage}</h1>) : null}
            <Search retrievePokemon={retrievePokemon} />
            {loading ? (
                <h1>Loading...</h1>
            ): null}
            <h1>{result} results found</h1>
            {!loading && pokemon ? (
                pokemon.map((location) => (
                    <h5>{formatName(location.location_area.name)}</h5>
                ))
            ): null}
        </div>
    )
}