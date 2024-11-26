import React from 'react';
import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <Technologies />
    </div>
  );
}

const Header = () => {
  return (
    <div>
      <a href='#'>Home</a>
      <a href='#'>News Feed</a>
      <a href='#'>Message</a>
    </div>
  );
}

const Technologies = () => {
  return (
    <div>
      <ul>
        <li>js</li>
        <li>css</li>
        <li>react</li>
        <li>html</li>
      </ul>
    </div>
  );
}

export default App;
