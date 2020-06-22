import React from 'react';
import logo from './logo.svg';
import './App.css';
import './customs.css';
import Grid from '@material-ui/core/Grid';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
      </header>
      <body  >
        <div className="items">
      <img src={require('./images/profile.jpg')} className="avatar" />
      <div> 
       
        
        abc
        </div>
        </div>
    <Grid container spacing={1}>      
       <Grid container item xs={12} spacing={3} >Skill</Grid>
        </Grid>
      </body>
    </div>
  );
}

export default App;
