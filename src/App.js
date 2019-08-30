import React from 'react'; 
import SignIn from './pages/login.page' 
import SiteMain from './pages/SiteMain.page'
import { BrowserRouter as Router, Route} from 'react-router-dom'

const App = () => {
  return (
    <Router>
    <div className="App">
       <Route exact path="/" component={SignIn} />
       <Route exact path="/mainmenu" component={SiteMain} />
      
    </div>
    </Router>
  );

}

export default App;
