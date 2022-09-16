import Home from './components/Home';
import Navbar from './components/Navbar';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom' 
import Moviedetails from './components/Moviedetails';
import Addmovie from './components/Addmovie';
import Searchpage from './components/Searchpage';

function App() {

  return (
    <Router>
      <div>  
      
      <Navbar />
      
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          
          <Route path="/moviedetails:id">
            <Moviedetails />
          </Route>
            
          <Route path="/create">
            <Addmovie />
          </Route>

          <Route path="/search:searchVal">
            <Searchpage/>
          </Route>


      </Switch>
      
      
    </div>
    </Router>
    
  );
}

export default App;
