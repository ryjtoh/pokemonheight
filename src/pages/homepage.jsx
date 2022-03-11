import React from 'react';
import Search from '../components/Search';
import { fetchPokmemon } from '../services/retrievePokemon';


export default function HomePage() {

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

    const [loading, setLoading] = React.useState(false);
    const [result, setResult] = React.useState(0);
    const [error, setError] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState("");
    const [locations, setLocations] = React.useState();

    const retrievePokemon = async (query, num) => {
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

        if (!query) {
            setErrorMessage("Please Enter a Pokemon")
            return setError(true);
        }
        setError(false);
        setLoading(true);
        setTimeout(async () => {
            try {
                console.log("hello")
                const response = await fetchPokmemon(query);
                const results = await response.json();
                var list = [];
                for (var i = 0; i < results.length; i++) {
                    if (gen.includes(results[i].version_details[0].version.name)) {
                        list.push(results[i].location_area.name);
                    }
                }
                setResult(list.length);
                setLocations(list);
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
            <p>{result} results found</p>
            {!loading && locations ? (
                locations.map((location) => (
                    <h5>{formatName(location)}</h5>
                ))
            ): null}
        </div>
    )
}