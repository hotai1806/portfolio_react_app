import React from 'react';

import './App.css';
import './customs.css';


// const useStyles = makeStyles((theme) => ({
  
//   paper: {
//     padding: theme.spacing(5),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//     paddingLeft: theme.spacing(30),
//     backgroundColor: "#757ce8"
 
//   },
// }));

function App() {

  return (
    <div className="App">
      <header className="App-header">
      
      </header>
      <div className="big">
         <div className="div-avatar">
        <img src={require('./images/profile.jpg')} className="avatar" alt='' />
      </div>
      <div className="out-box" >
          <div className="box">
            <div className="right top" >  </div>
                <div className="paper"> Skill</div>
            </div>
            <div className="box">
                <div className="left top" >  </div>
            <div className="paper"> Skill</div>
            </div>
          </div>
      </div>
        
      </div>
   
  );
}

export default App;
