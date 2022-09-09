const Movieslist = ({movies , title}) => {
    return ( 
        <div className="movies-list">
            <h1> {title} </h1>
            {
                movies.map((movie) => {
                    return (
                        <div key={movie.id} className="movie">
                            <h1>Movie name : {movie.movieName} </h1>
                            <h2>Hero : {movie.hero}</h2>
                            <h2>Genere : {movie.genere}</h2>
                        </div>
                    )
                })
            }
        </div> 
        
    );
}
export default Movieslist;