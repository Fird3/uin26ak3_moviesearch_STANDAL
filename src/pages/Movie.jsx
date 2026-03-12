import { useOutletContext, useParams } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"

export default function Movie({item, url}){
    const {movie} = useParams()
    const [apiData, setapiData] = useState({})
    

    const {Title, Poster, Year} = item

    const getData = async() =>{
        const response = await fetch(url)
        const data = await response.json()
        setapiData(data)
    }

     useEffect(()=>{
            getData()
        },[])

    return(
        <section>
           <h1>{movie}</h1>  
           <h3>{Title}</h3>      
           <p>{Year}</p>
           <img src={Poster} alt={Title}/>  
        </section>
    )
}