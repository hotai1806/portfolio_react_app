import React from 'react';

import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';
import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ContactsIcon from '@material-ui/icons/Contacts';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import HomeIcon from '@material-ui/icons/Home';

import ContactsOutlinedIcon from '@material-ui/icons/ContactsOutlined';
const useStyles = makeStyles((theme) => ({
  root: {
    height: 180,
    position:'absolute',
    top:"75%",
    right: "2%",
    zIndex:1
  },
  wrapper: {
    width: 100 + theme.spacing(2),
  },
  paper: {
    zIndex: 1,
    padding: theme.spacing(2),
    margin: theme.spacing(1),
    float: 'right',
    width:'200px',
    textAlign:'left',
  },

}));

export const SimpleSlide =() => {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
      
      <Button style={{  height: '40px', width:'40px', }}  variant="contained" color="primary" checked={checked} onClick={handleChange} label="Show" >
      <ContactsOutlinedIcon/> 
      </Button>
        <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
          <Paper  elevation={5} className={classes.paper}>
          <div style={{padding:'5px'}} > <ContactsIcon />  0907779873</div>
          <div style={{padding:'5px'}} > <GitHubIcon/> <a href='https://github.com/hotai1806'>hotai1806</a> </div>
          
          <div style={{padding:'5px'}} > <EmailIcon/> hotai1806@gmail.com</div>
          <div style={{padding:'5px'}} > <HomeIcon/> TP.HCM</div>
          </Paper>
        </Slide>
      </div>
    </div>
  );
}