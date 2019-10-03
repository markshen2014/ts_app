import React from 'react'; 
import SignIn from './pages/login.page' 
import SiteMain from './pages/SiteMain.page'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import LocalStorageTest from './test/LocalStorageTest'
import TicketListPage from './pages/TicketList.page';
import PSListPage from './pages/PSListPage';
import ProcessListPage from './pages/ProcessList.page';

const App = () => {
  return (
    
    <Router>
    <div className="App">
       <Route exact path="/" component={SignIn} />
       <Route exact path="/mainmenu" component={SiteMain} />
       <Route exact path="/ticketlist" component={TicketListPage} />
       <Route exact path="/pslist" component={PSListPage} />
       <Route exact path="/processlist" component={ProcessListPage} />
      
    </div>
    </Router>
   /*
   <>
   <LocalStorageTest />
   </>
    */

  );

}

export default App;
