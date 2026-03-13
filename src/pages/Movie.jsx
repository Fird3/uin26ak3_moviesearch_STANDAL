import { useOutletContext, useParams } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"

export default function Movie({movies, item}){
    const {movie} = useParams()
    // const [apiData, setapiData] = useState({})
    // const {Title, Poster, Year} = item

    // const getData = async() =>{
    //     const response = await fetch(url)
    //     const data = await response.json()
    //     setapiData(data)
    // }

    //  useEffect(()=>{
    //         getData()
    //     },[])
    console.log(movie)

    return(
        <section>
           <h1>{movie}</h1>  
           {/* <h2>{Title}</h2> */}

        </section>
    )
}