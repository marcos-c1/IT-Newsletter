import './App.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


//Components
import Footer from './components/Footer';

// Screens
import Homescreen from './screens/Homescreen'

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Homescreen} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
