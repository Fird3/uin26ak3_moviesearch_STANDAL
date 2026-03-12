
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import '../style/style.css'
export default function Moviecard({item, url}){

    const [apiData, setapiData] = useState({})
    const [apiEndpoint, setApiEndpoint] = useState()
    const {movie} = useParams()


    // const getData = async() =>{
    //     const response = await fetch(url)
    //     const data = await response.json()

    //     setapiData(data)
    //     console.log("sgdf")
    // }
    // console.log("Kommer fra MovieCard: ", movie)
    const {Title, Poster, Year} = item

    // useEffect(()=>{
    //     getData()
    // },[])
  

    // Setapiendpoint har jeg brukt slik vi brukte det i forelesning med pokemon API-et

    return(
         <Link to={Title} onClick={()=>setApiEndpoint()}>
            <article className="moviecard-style">
                <h4>{Title}</h4>
                <p>{Year}</p>
                <img src={Poster} alt={Title}/>
            </article>
        </Link>
    )
}