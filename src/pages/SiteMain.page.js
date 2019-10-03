import React ,{  useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createBrowserHistory } from 'history';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SendIcon from '@material-ui/icons/Send';
import BallotIcon from '@material-ui/icons/Ballot';
import ComputerIcon from '@material-ui/icons/Computer';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import { makeStyles } from '@material-ui/core/styles';
 




const useStyles = makeStyles(theme => ({
   root: {
     width: '100%',
     maxWidth: 460,
     backgroundColor: '00ffff',
   },
   nested: {
     paddingLeft: theme.spacing(4),
   },
   title: {
      margin: theme.spacing(10, 0, 5),
    },

    boxitem: {
       height : 80 ,
       marginTop: 30 ,
       backgroundColor: '00ffff'


    }

 }));

const SiteMain = () =>{

   const classes = useStyles(); 
   const history = createBrowserHistory();
 
   useEffect(() => {
     const loginStatus = localStorage.getItem('login'); 
     
     if(loginStatus !== 'ok'){

         history.replace('/',{})
         history.go(0)     

     }
    
  },[]);

   const goNext = id => {

      if(id === 1){
         console.log("1");
         history.replace('/ticketlist',{})
         history.go(0)

      }else if(id === 2){

         history.replace('/pslist',{})
         history.go(0)

     
      }else{

         history.replace('/processlist',{})
         history.go(0)


      }

   }

  return( 
    <Container component="main" maxWidth="xs" style = {{backgroundColor: '00ffff'}}>   
       <CssBaseline /> 
       <Typography component="h1" variant="h5" className={classes.title}>
          Select your options here
        </Typography>
       <List  component="nav" className={classes.root} >
         <ListItem button className={classes.boxitem} onClick = { () => goNext(1) }>
         <ListItemIcon>
            <ComputerIcon />
         </ListItemIcon>
         <ListItemText primary="Scale Ticket" />
         </ListItem>
         <ListItem button  className={classes.boxitem}  onClick = { () => goNext(2) }>
         <ListItemIcon>
            <LocalShippingIcon />
         </ListItemIcon>
         <ListItemText primary="Shipping" />
         </ListItem>
         <ListItem button className={classes.boxitem}  onClick = { () => goNext(3) }>
         <ListItemIcon>
            <BallotIcon />
         </ListItemIcon>
         <ListItemText primary="Inventory Management" />
         </ListItem>
       </List>
     </Container> 
  )

}

export default SiteMain