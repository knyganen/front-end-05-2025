import React from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <img className="main-picture" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" alt=""/>
      <h1 className="Pealkiri">Hey, You!</h1>
      <p className="Sisu">I welcome You to my gorgeous page! 
        <br />
        I've collected my passion - photography - to 3 sections: 
        <br />work I've done, hobbies and courses you can take!</p>
      
      <div className="rectangle"></div>

      <div className="navigation-pictures">
        <div className="main-link">
        <Link to="/work">
          <img src="https://picsum.photos/id/1015/600/400" alt="Preview of my work" />
          <p>My portfolio</p>
          </Link>
          
      </div>

      <div className="main-link">
          <Link to="/hobbies">
          <img src="https://picsum.photos/id/1005/600/400" alt="A little bit about the hobbies" />
          <p>Hobbies</p>
          </Link>
          </div>

          <div className="main-link">
          <Link to="/courses">
          <img src="https://picsum.photos/id/1043/600/400" alt="Learn something with me" />
          <p>Find a course!</p>
          </Link>
        </div>
      </div>
      <Routes>
    <Route path="/work" element={ <div>Work</div> }></Route>
    <Route path="/hobbies" element={ <div>Hobbies</div> }></Route>
    <Route path="/courses" element={ <div>Courses</div> }></Route>
     </Routes>

      <iframe 
  width="100%" 
  height="400" 
  src="https://www.youtube.com/embed/bbokXheXhxY" 
  title="YouTube video player"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
  className='video-player'
></iframe>

  <a className="facebook-button" href="https://www.facebook.com/iamkatre">
  <img src="/facebook.png" alt="" />
  <span>Facebook</span>
  </a>
    </div>
    
  );
}

export default App;
