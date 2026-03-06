import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function Moviecard(url){
    const [apiData, setapiData] = useState({})
    const {movie} = useParams()

    const getData = async() =>{
        const response = await fetch(url)
        const data = await response.json()

        setapiData(data)
    }
    console.log("Kommer fra MovieCard: ", movie)

    

    return(
        <article>
          <h1>hello</h1>
        </article>
    )
}