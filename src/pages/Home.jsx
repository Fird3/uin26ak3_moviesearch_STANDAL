import { useEffect, useState } from "react"
import History from "../components/History"
import Moviecard from "../components/Moviecard"
import { useOutletContext } from "react-router-dom"
import Results from "../components/Results"


export default function Home(){
    const [movie, setMovie] = useState([])
    const [search, setSearch]= useState("James-Bond")
    
    // const storedHistory = localStorage.getItem("search")
    // const [focused, setFocused]= useState(false)
    // tom array så vi kan legge til ting når vi bruker search og local storage
    // const [history, setHistory]= useState(storedHistory ? JSON.parse(storedHistory) : [])

    // console.log("Denne kommer fra storage", storedHistory)
    
    const baseUrl = `http://www.omdbapi.com/?s=${search}&apikey=`
    
    // husk å legg til key
    const apiKey = import.meta.env.VITE_APP_API_KEY

    // useEffect(()=>{
    //     localStorage.setItem("search", JSON.stringify(history))
    // }, [history])

    console.log(movie)
 
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

        // Begynner å søke automatisk etter 3 bokstaver, men må fortsatt trykke på søk knappen på å få opp alle søkene
         if(search.length >= 3){
         getMovies()
        }
        else
        {
            null
        }
    }


    console.log("dette er search", search)
   
    const handleSubmit = (e) =>{
        // sann den ikke refresher
        e.preventDefault()
        // sann input fjerner tekst etter du har trykket på søk
        e.target.reset()

        // setHistory((prev) => [...prev, search])

    
    }

    // console.log(movie.map(mo => m movie.filter(item => item?.imdbID === mo.imdbID)))

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
            <Results movie={movie}/>
        </main>
    )
}