import { useEffect, useState } from "react"
import History from "../components/History"

export default function Home(){
    const [search, setSearch]= useState()
    const storedHistory = localStorage.getItem("search")
    const [focused, setFocused]= useState(false)
    // tom array så vi kan legge til ting når vi bruker search og local storage
    const [history, setHistory]= useState(storedHistory ? JSON.parse(storedHistory) : [])

    console.log("Denne kommer fra storage", storedHistory)
    
    const baseUrl = `http://www.omdbapi.com/?s=${search}&apikey=`
    // IKKE SKRIV DET PÅ DENNE MÅTEN
    // IKKE TRYKT
    // U DEAD
    
    // husk å legg til key
    const apiKey = import.meta.env.VITE_APP_API_KEY

    useEffect(()=>{
        localStorage.setItem("search", JSON.stringify(history))
    }, [history])
    

    const getMovies = async()=>{
        try
        {
            const response = await fetch(`${baseUrl}${apiKey}`)
            const data = await response.json()
            console.log(data)
        }
        catch(err){
            console.error(err);
        }
    }

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

   
    const handleSubmit = (e) =>{
        // sann den ikke refresher
        e.preventDefault()
        // sann input fjerner tekst etter du har trykket på søk
        e.target.reset()

        setHistory((prev) => [...prev, search])

    
    }
    console.log(history)
    return(
        <main>
            <h1>Forside</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Søk etter film:
                    <input type="search" placeholder="Harry Potter" onChange={handleChange} onFocus={()=> setFocused(true)} /*onBlur={()=> setFocused(false)}*/></input>
                </label>
                {focused ? <History history={history} setSearch={setSearch}/> : null }
                <button onClick={getMovies}>Søk</button>
            </form>
            
        </main>
    )
}