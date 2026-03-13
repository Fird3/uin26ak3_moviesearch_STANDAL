import Moviecard from "./Moviecard"
export default function Results({movies}){
    return(
        <section className="movies-style">        
            {movies?.map((item)=> <Moviecard key={item.imdbID + "rt"} item={item} />)}
        </section>
    )
}