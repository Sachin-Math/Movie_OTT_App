import { Link } from "react-router-dom";

const Movieslist = ({movies , title , deleteMovie}) => {
    return ( 
        <div className="movies-list">
            <h1> {title} </h1>
            {
                movies.map((movie) => {
                    return (
                        <Link to={`/moviedetails${movie.id}`}>
                            <div key={movie.id} className="movie">
                                <h1>Movie name : {movie.movieName} </h1>
                                <h2>Hero : {movie.hero}</h2>
                                <h2>Genere : {movie.genere}</h2>
                            </div>
                        </Link>
                        )
                    
                })
            }
        </div> 
        
    );
}
export default Movieslist;