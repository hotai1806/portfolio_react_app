import React from 'react';

import './App.css';
import './customs.css';
import Grid from '@material-ui/core/Grid';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
      </header>
      <div className="big">
         <div className="div-avatar">
        <img src={require('./images/profile.jpg')} className="avatar" alt='' />
      </div>
        <div className="items">
     
      <div> 
       
        
        abc
        </div>
        </div>
    <Grid container spacing={50}>      
       <Grid container item xs={5} spacing={3} >Skill</Grid>
        </Grid>
        <div id="main">
    <div class="top left"></div>
    <div class="top right"></div>
    <div class="bottom left"></div>
    <div class="bottom right"></div>
</div>
      </div>
    </div>
  );
}

export default App;
