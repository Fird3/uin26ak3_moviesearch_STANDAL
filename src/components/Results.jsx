import Moviecard from "./Moviecard"
// Hjelp av Jesper til å finne ut at det var smartest å ha dette i eget komponent
export default function Results({movies}){
    return(
        <section className="movies-style">        
            {movies?.map((item)=> <Moviecard key={item.imdbID + "rt"} item={item} />)}
        </section>
    )
}