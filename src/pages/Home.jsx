import { useEffect, useState } from "react"
import History from "../components/History"
import Moviecard from "../components/Moviecard"


export default function Home(){
    const [movie, setMovie] = useState([])
    const [search, setSearch]= useState()
    const storedHistory = localStorage.getItem("search")
    const [focused, setFocused]= useState(false)
    // tom array så vi kan legge til ting når vi bruker search og local storage
    const [history, setHistory]= useState(storedHistory ? JSON.parse(storedHistory) : [])

    console.log("Denne kommer fra storage", storedHistory)
    
    const baseUrl = `http://www.omdbapi.com/?s=${search}&apikey=`
    
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
            setMovie(data.Search)
            console.log(data)
        }
        catch(err){
            console.error(err);
        }
    }
    
    useEffect(()=> {
        getMovies()
    }, [])

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
            </form>
            <button onClick={getMovies}>Søk</button>
            <section className="movies-style">
                <h2>James Bond</h2>
                {movie?.map((item)=> <Moviecard key={item.imdbID + "rt"} item={item} />)}
            </section>
            
        </main>
    )
}

// Fikk hjelp av Jesper til å finne ut at jeg måtte ha button utenfor form for å få fram alle filmene mine