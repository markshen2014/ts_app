import React,{ useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
//import FormControlLabel from '@material-ui/core/FormControlLabel';
//import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
//import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { createBrowserHistory } from 'history'
import axios from 'axios';
import xml2js from 'xml2js';
import urlEncoder from 'postman-url-encoder'
//import PropTypes from 'prop-types'
import { BuildUrl , BuildJob} from '../utils/Utils'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="http://www.scrapitsoftware.com">
      IYB Consultants Inc.
      </Link>{' '}
      {new Date().getFullYear()}
      
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  title: {
    margin: theme.spacing(1, 0, 5),
  },
}));

export default function SignIn() {

  useEffect(() => {    
    localStorage.setItem('login', '');
  },[]);

  const classes = useStyles();
  const history = createBrowserHistory();
   
  const oper_code='~01~~01~02~~02~0301~~03'
  let company_str = ''
  let job_str = 'job_code=validate_login'
  let supplier_str = ''
  
  let url_str = '' 
  let loginok = ''

  const [userForm, setUserForm] = useState({
    user:  '',
    pass: ''
  })

  const [errorStr, setErrorStr] = useState('')

  const handleChange = (e) => {
    setUserForm({ ...userForm, 
               [e.target.name]: e.target.value 
                });
  };

  const checkLogin = async (evt) =>{
    evt.preventDefault(); 
   
    company_str = 'company_code=' + userForm.user;
    supplier_str = 'supplier_code=' + userForm.pass;

    url_str =  BuildUrl([ oper_code, company_str, job_str, supplier_str])    

   // const job_test =  BuildJob(['a','b','c x'])
   // console.log(job_test)
    
    let res = await axios.get(url_str);
    let xmlData =  res.data;     
    

    xml2js.parseString(xmlData, function (err, result) {

       // console.log(result); 
        loginok =  result.root.detail[0].loginok[0];
        //console.log(loginok);     
        
     });

     if(loginok === 'Y'){

         history.replace('/mainmenu',{})
         history.go(0)
         localStorage.setItem('login', 'ok');

     }else{

        setErrorStr('error')
     }  

  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" className={classes.title}>
          Sign in Touch Screen App.
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="user"
            label="User Name"
            name="user"
            autoComplete="email"
            autoFocus
            value={userForm.user}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="pass"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={userForm.pass}
            onChange={handleChange}
          />
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick = {checkLogin}
          >
            Sign In Now
          </Button>

     {
          errorStr?
          <Typography component="h1" variant="h5" className={classes.title}>
           You can not login
          </Typography>
          : ''
     }      
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}