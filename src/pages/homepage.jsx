import React from 'react';
import Search from '../components/Search';
import { fetchPokmemon } from '../services/retrievePokemon';


export default function HomePage() {

    // Games that are included in each generation.

    // allgen contains all the game; for the case when use presses search and
    // returns all locations.
    const allgen = ["red", "blue", "green", "yellow", "firered",
                    "leafgreen", "gold", "silver", "crystal",
                    "heartgold", "soulsilver", "ruby", "sapphire",
                    "emerald", "omegaruby", "omegasapphire", "diamond",
                    "pearl", "platinum", "brilliantdiamond", "shiningpearl",
                    "black", "white", "black2", "white2",
                    "x", "y", "sun", "moon", "ultrasun", "ultramoon", "sword", "shield"]
    const gen1 = ["red", "blue", "green", "yellow", "firered", "leafgreen"];
    const gen2 = ["gold", "silver", "crystal", "heartgold", "soulsilver"];
    const gen3 = ["ruby", "sapphire", "emerald", "omegaruby", "omegasapphire"];
    const gen4 = ["diamond", "pearl", "platinum", "brilliantdiamond", "shiningpearl"];
    const gen5 = ["black", "white", "black2", "white2"];
    const gen6 = ["x", "y"];
    const gen7 = ["sun", "moon", "ultrasun", "ultramoon"];
    const gen8 = ["sword", "shield"]

    // Tracks timeframe in between button click and query retrieval
    const [loading, setLoading] = React.useState(false);
    // The numbers of results found for the query + filter.
    const [numResults, setNumResults] = React.useState(0);
    // Tracks whether the query was successful or not.
    const [error, setError] = React.useState(false);
    // Error message to user.
    const [errorMessage, setErrorMessage] = React.useState("");
    // The location list from the query + filter.
    const [locations, setLocations] = React.useState();

    // Set the generation for the filters based on the filter.
    const retrievePokemon = async (query, num) => {
        // Set the generation based on filter user selected. 
        let gen = allgen;
        if (num === 1) {
            gen = gen1;
        } else if (num === 2) {
            gen = gen2;
        } else if (num === 3) {
            gen = gen3;
        } else if (num === 4) {
            gen = gen4;
        } else if (num === 5) {
            gen = gen5;
        } else if (num === 6) {
            gen = gen6;
        } else if (num === 7) {
            gen =  gen7;
        } else if (num === 8) {
            gen = gen8;
        }

        // User does not enter anything into search bar.
        if (!query) {
            setErrorMessage("Please Enter a Pokemon")
            return setError(true);
        }
        setError(false);
        setLoading(true);
        // Load time set to 1000ms in between click and query.
        setTimeout(async () => {
            try {
                // Query
                const response = await fetchPokmemon(query);
                const results = await response.json();
                var list = [];
                // Filter the locations based on the game the location is from.
                for (var i = 0; i < results.length; i++) {
                    if (gen.includes(results[i].version_details[0].version.name)) {
                        list.push(results[i].location_area.name);
                    }
                }
                setNumResults(list.length);
                setLocations(list);
                setLoading(false);
            } catch {
                setLoading(false);
                setError(true);
                setErrorMessage("Pokemon Not Found")
            }
        }, 1000)
    }

    // Format results to get rid of hyphens and capitalize words.
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
            <p>{numResults} results found</p>
            {!loading && locations ? (
                locations.map((location) => (
                    <h5>{formatName(location)}</h5>
                ))
            ): null}
        </div>
    )
}