import { useState } from "react";
export default function NewPlayerForm() {
    const [name, setName] = useState("");
    const [breed, setBreed] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2306-GHP-ET-WEB-FT-SF/players",
                {
                    method: "POST",
                    body: JSON.stringify({ name, breed, imageUrl }),
                    headers: { "content-type": "application/json" }
                });
            const result = await response.json();
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <>
            <h1>ADD NEW PLAYER</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    placeholder="Name"
                    onChange={(e) =>
                        setName(e.target.value)
                    }
                />
                <input
                    type="text"
                    id="breed"
                    name="breed"
                    value={breed}
                    placeholder="Breed"
                    onChange={(e) =>
                        setBreed(e.target.value)
                    }
                />
                <input
                    type="url"
                    id="imageUrl"
                    name="imageUrl"
                    value={imageUrl}
                    placeholder="imageUrl"
                    onChange={(e) =>
                        setImageUrl(e.target.value)
                    }
                />
                <button>Submit</button>
            </form>
        </>
    );
}