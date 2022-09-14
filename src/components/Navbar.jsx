import {Link} from 'react-router-dom'

const Navbar = () => {
    return ( 
        <nav>
            <h1>Pogo</h1>
            
            <div>
                <input type="search" />
                <button>search</button>
            </div>
            
            <Link to="/">Home</Link>
            
            <Link to="/create">Create new Movie</Link>
            
            
        </nav>
    );
}
export default Navbar;