import { useEffect, useState } from "react"
import History from "../components/History"
import Moviecard from "../components/Moviecard"
import { useOutletContext } from "react-router-dom"
import Results from "../components/Results"

// Mye av det som er kommentert ut er fra forelesning vi hadde om localstorage. 
// Men deler av det er også kommentarer til hjelpemidler jeg har brukt i koden


export default function Home({setMovies, movies}){
    // Hjelp av Ann-Charlott til å komme på at det er her jeg burded sette James-Bond
    const [search, setSearch]= useState("James-Bond")
    
    // const storedHistory = localStorage.getItem("search")
    // const [focused, setFocused]= useState(false)
    // tom array så vi kan legge til ting når vi bruker search og local storage
    // const [history, setHistory]= useState(storedHistory ? JSON.parse(storedHistory) : [])

    // console.log("Denne kommer fra storage", storedHistory)
    
    const baseUrl = `http://www.omdbapi.com/?s=${search}&apikey=`
    
    const apiKey = import.meta.env.VITE_APP_API_KEY

    // useEffect(()=>{
    //     localStorage.setItem("search", JSON.stringify(history))
    // }, [history])

    console.log(movies)
 
    const getMovies = async()=>{ 
        
        //jeg hadde funksjonen selv, men med hjelp av AI fikk jeg vite hvor det var best at jeg satt den. Hjelpen jeg fikk av AI ligger i mappen med bilder.

        if(search.length < 5) return
        try
        {
            const response = await fetch(`${baseUrl}${apiKey}`)
            const data = await response.json()
            setMovies(data.Search)
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

    console.log("dette er search", search)
   
    const handleSubmit = (e) =>{
        // sann den ikke refresher
        e.preventDefault()
        // sann input fjerner tekst etter du har trykket på søk
        e.target.reset()

        // setHistory((prev) => [...prev, search])
    }

    return(
        <main>
            <h1>Film API</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Søk etter film:
                    <input type="search" placeholder="Harry Potter" onChange={handleChange}  /*onBlur={()=> setFocused(false)}*/></input>
                </label>
                {/*focused ? <History history={history} setSearch={setSearch}/> : null*/ }
                 <button onClick={getMovies}>Søk</button>
            </form>
            <Results movies={movies}/>
        </main>
    )
}