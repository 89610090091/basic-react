import './App.css';
import React, { useDebugValue } from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';

const App = () => {
  return (
    // <BrowserRouter>
    //   <div className="app-wrapper">
    //     <Header />
    //     <Navbar />
    //     <div className='app-wrapper-content'>
    //       <Routes>
    //         <Route path='/profile' element={<Profile />} />
    //         <Route path='/dialogs' element={<Dialogs />} />
    //         <Route path='/News' element={<News />} />
    //         <Route path='/Music' element={<Music />} />
    //         <Route path='/Settings' element={<Settings />} />
    //       </Routes>
    //     </div>
    //   </div>
    // </BrowserRouter>

    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <BrowserRouter>
          <Routes>
            <Route path='/profile' element={<Profile />} />
            <Route path='/dialogs' element={<Dialogs />} />
            <Route path='/News' element={<News />} />
            <Route path='/Music' element={<Music />} />
            <Route path='/Settings' element={<Settings />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
