import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function AllPlayers() {
    const [players, setPlayers] = useState([]);
    useEffect(() => {
        async function fetchAllPlayers() {
            try {
                const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2306-GHP-ET-WEB-FT-SF/players");
                const result = await response.json();
                setPlayers(result.data.players);
            } catch (error) {
                console.error(error);
            }
        }
        fetchAllPlayers();
    }, [])
    return (
        <div>
            <h1>ALL PLAYERS</h1>
            <div>
                {
                    players.map((player) => {
                        return (
                            <div>
                                <h4>{player.name}</h4>
                                <h4>{player.breed}</h4>
                                <img src={player.imageUrl} alt={player.name} />
                                <Link to="/SinglePlayer/:id}">SEE DETAILS</Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}