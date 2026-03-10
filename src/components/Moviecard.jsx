import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import '../style/style.css'
export default function Moviecard({url, item}){

    // const [apiData, setapiData] = useState({})
    // const {movie} = useParams()

    // const getData = async() =>{
    //     const response = await fetch(url)
    //     const data = await response.json()

    //     setapiData(data)
    // }
    // console.log("Kommer fra MovieCard: ", movie)

    const {Title, Poster, Year} = item

    

    return(
        <article className="moviecard-style">
            <h4>{Title}</h4>
            <p>{Year}</p>
            <img src={Poster} alt={Title}/>
        </article>
    )
}