import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const Moviedetails = () => {
    
    let { id } = useParams();
    
    let {data : movie , pending , error} = useFetch("http://localhost:4000/movies/" + id ) ;
    
    
    
    return ( 
        <div className="movie-details">  
            {pending && <div className="loader"></div>  }
            {movie &&
                <div>
                    <h1>Movie Name : {movie.movieName} </h1>
                    <hr />
                    <h2>Hero : {movie.hero} </h2>
                    <h2>director : {movie.director} </h2>
                    <h2>genere : {movie.genere} </h2>
                    <p>Stoty line : {movie.storyLine}</p>
                    
                </div>
            } 
        </div>
    );
}

export default Moviedetails;