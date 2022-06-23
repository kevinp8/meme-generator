import React, { useState } from 'react'

function Meme() {

    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg'
    })

    const [allMemeImages, setAllMemeImages] = useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemeImages(data.data.memes))
    }, [])

    function getMemeImage(event) {
        const randomNumber = Math.floor(Math.random() * allMemeImages.length)
        setMeme(prev => ({
            ...prev,
            randomImage: allMemeImages[randomNumber].url
        }))
        event.preventDefault()
    }

    function memeText(event) {
        const {name, value} = event.target
        setMeme(prev => ({
            ...prev,
            [name] : value
        }))
    }

    return (
        <main>
            <form>
                <input type='text' name='topText' placeholder='Top Text' value={meme.topText} onChange={memeText} ></input>
                <input type='text' name='bottomText' placeholder='Bottom Text' value={meme.bottomText} onChange={memeText} ></input>
                <button onClick={getMemeImage}>Get a new meme image 🖼</button>
            </form>
            <div>
                <img src={meme.randomImage} alt='meme template' />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}

export default Meme