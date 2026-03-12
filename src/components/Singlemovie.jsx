export default function Singlemovie({item, url}){

       const [apiData, setapiData] = useState({})
    const [apiEndpoint, setApiEndpoint] = useState()
    const {movie} = useParams()

     const getData = async() =>{
            const response = await fetch(url)
            const data = await response.json()
            setapiData(data)
        }
    
         useEffect(()=>{
                getData()
            },[])
    const {Title, Poster, Year} = item
    return(
        <section>
            <h1>{movie}</h1>  
            <h3>{Title}</h3>      
            <p>{Year}</p>
            <img src={Poster} alt={Title}/>  
        </section>
    )
}