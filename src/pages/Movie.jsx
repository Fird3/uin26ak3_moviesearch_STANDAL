import { useParams } from "react-router-dom"

export default function Movie(){
    const {movie} = useParams()
    return(
        <section>
           <h1>{movie}</h1>
        </section>
    )
}