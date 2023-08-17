import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function SinglePlayer() {
    const [player, setPlayer] = useState([]);
    const routeParams = useParams().id;
    console.log(routeParams)
    useEffect(() => {
        async function fetchSinglePlayer() {
            try {
                const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2306-GHP-ET-WEB-FT-SF/players/${routeParams}`);
                const result = await response.json();
                setPlayer(result.data.player);
            } catch (error) {
                console.error(error);
            }
        }
        fetchSinglePlayer();
    }, [])
    return (
        <div>
            <div>
                {

                            <div>
                                <h4>Name: {player.name}</h4>
                                <h4>ID: {player.id}</h4>
                                <h4>Breed: {player.breed}</h4>
                                <img src={player.imageUrl} alt={player.name} />
                                <h4>Status: {player.status}</h4>
                            </div>
                    }
                
            </div>
        </div>
    )
}