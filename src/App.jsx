import React from 'react';
import './App.css';
import Post from './Post';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <div style={{ paddingTop: '60px' }}>
      <Post /> {/* Render the Post component */}
      <Post/>
      <Post/>
    </div>
    </div>
  );
}

export default App;
