import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Women from './Pages/Women';
import Men from './Pages/Men';
import Kids  from './Pages/Kids';
import NavBar from './Components/NavBar';

function App() {
  return (
    <div>
      <Router>
        <NavBar/>
        <Switch>
          <Route path="/women" component={Women}/>
          <Route path="/men" component={Men}/>
          <Route path="/kids" component={Kids}/>
        </Switch>
      </Router>

    </div>
    
    
  );
}

export default App;
