
import { Link } from 'react-router-dom'
import { useState } from 'react'
import '../style/style.css'
export default function Moviecard({item}){

    const [apiEndpoint, setApiEndpoint] = useState()

    const {Title, Poster, Year} = item

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