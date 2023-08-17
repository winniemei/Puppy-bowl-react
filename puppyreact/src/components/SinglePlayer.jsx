import { useState, useEffect } from 'react'

export default function SinglePlayer() {
    const [player, setPlayer] = useState([]);
    console.log(player)
    useEffect(() => {
        async function fetchSinglePlayer() {
            try {
                const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2306-GHP-ET-WEB-FT-SF/players/${player.id}`);
                const result = await response.json();
                console.log(result);
                setPlayer(result.data.player);
            } catch (error) {
                console.error(error);
            }
        }
        fetchSinglePlayer();
    }, [])
    return (
        <div>
            <h1>SINGLE PLAYER</h1>
            <div>
                {

                            <div>
                                <h4>{player.name}</h4>
                                <h4>{player.id}</h4>
                                <h4>{player.breed}</h4>
                                <img src={player.imageUrl} alt={player.name} />
                                <h4>{player.status}</h4>
                                <button className="back-button">Back to all players</button>
                            </div>
                    }
                
            </div>
        </div>
    )
}