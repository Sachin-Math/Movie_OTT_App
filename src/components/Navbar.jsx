import { useState } from 'react';
import {Link} from 'react-router-dom'


const Navbar = () => {
    const [searchVal, setSearchVal] = useState("");

    return ( 
        <nav>
            <h1> Pogo </h1>
            
            <div>
                <input type="search" value={searchVal}
                onChange={(e)=>{setSearchVal(e.target.value)}}
                />
                <Link to={`/search${searchVal}`}>
                    <button>search</button>
                </Link>
            </div>
            
            <Link to="/">Home</Link>
            
            <Link to="/create">Create new Movie</Link>
            
            
        </nav>
    );
}
export default Navbar;