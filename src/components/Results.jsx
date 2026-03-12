import Moviecard from "./Moviecard"
export default function Results({movie}){
    return(
        <section className="movies-style">        
            { movie?.map((item)=> <Moviecard key={item.imdbID + "rt"} item={item} />)}
        </section>
    )
}