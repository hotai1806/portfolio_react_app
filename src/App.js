import React from 'react';

import './App.css';
import './customs.css';
import {SimpleSlide} from './components/';

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
      <div className="sumary" >I strive and work hard to succeed.Optimistic for life. Don't be sorry. Be better</div> 
      </header>
      <div className="big">
       
         <div className="div-avatar">
        <img src={require('./images/profile.jpg')} className="avatar" alt='' />
      </div>
  
      

      <div className="out-box" >
      
          <div className="box">
           
            <div className="right top" >  </div>
                <div className="paper"> <u>Project</u>
                <div>Buid online shop with Django </div>
                <ul >
                  <li> Build a web store to sell mobile phone</li>
                  <li>Store data in database </li>
                  <li> Technologies used : HTML, CSS, Python, Django, SQLite </li>
                  <li>Github: <a href="https://github.com/hotai1806/online_shoping_django"></a>https://github.com/hotai1806/online_shoping_django  </li>
                  <li>Demo: <a href="https://herokudjangoapp1999.herokuapp.com/">link</a> </li>
                </ul>
                <div>Catch chicken eggs game</div>
                <ul >
                  <li> Make game catching eggs</li>
                  <li> Technologies used : Pyglet, Python </li>
                  <li>Github: <a href="https://github.com/hotai1806/catch_chicken_eggs"></a>https://github.com/hotai1806/catch_chicken_eggs  </li>
                  
                </ul>
                
                </div>
            </div>
            <SimpleSlide  />
            <div className="box">
           
                <div className="left top" >  </div>
            <div className="paper"> Skill
            <div >PROFICENT</div>
                <ul >
                  <li>Python</li>
                  
                  
                </ul>
           
            <div >FAMLILAR</div>
                <ul >
                  <li>C#, C++</li>
                  
                  
                </ul>
           
            <div >FREAMEWORK-LIBRARY</div>
                <ul >
                  <li>Django</li>
                  
                  
                </ul>
            
            <div >DATABASE</div>
                <ul >
                  <li>MYSQL, SQLite, SQLSERVER</li>
                  
                  
                </ul>
                <div >OTHER</div>
                <ul >
                  <li>HTML5, CSS3, GIT, LINUX</li>
                  
                  
                </ul>
            </div>
            </div>
          </div>
      </div>
        <footer> <div className="footer"></div></footer>
      </div>
      
   
  );
}

export default App;
