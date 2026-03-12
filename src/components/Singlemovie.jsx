import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
export default function Singlemovie({item}){

    const [apiData, setapiData] = useState({})
    const [apiEndpoint, setApiEndpoint] = useState()
    const {movie} = useParams()

    
    const {Title, Poster, Year} = item

    return(
        <section>
            <h1>{movie}</h1>  
            <h3>{Title}</h3>      
            <p>{Year}</p>
            <img src={Poster} alt={Title}/>  
        </section>
    )
}