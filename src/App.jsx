import Home from './components/Home';
import Navbar from './components/Navbar';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom' 
import Moviedetails from './components/Moviedetails';
import Addmovie from './components/Addmovie';

function App() {

  return (
    <Router>
      <div>  
      
      <Navbar />
      
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          
          <Route path="/moviedetails">
            <Moviedetails />
          </Route>
            
          <Route path="/create">
            <Addmovie />
          </Route>
      </Switch>
      
      
    </div>
    </Router>
    
  );
}

export default App;
