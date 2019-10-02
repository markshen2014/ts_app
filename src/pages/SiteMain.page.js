import React ,{  useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createBrowserHistory } from 'history';

const SiteMain = () =>{

  useEffect(() => {
     const loginStatus = localStorage.getItem('login'); 
     const history = createBrowserHistory();
     if(loginStatus !== 'ok'){

         history.replace('/',{})
         history.go(0)     

     }
    
  },[]);


  return( 
    <Container component="main" maxWidth="xs">  
       <CssBaseline /> 
      <Typography component="h1" variant="h5" >
          Welcome
        </Typography>
     </Container> 
  )

}

export default SiteMain