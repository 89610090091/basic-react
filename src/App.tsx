import './App.css';

const App = () => {
  return (
    <div className='app-wrapper'>

      <header className='header'>
        <img src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1724716800&semt=ais_hybrid" alt="" />
      </header>

      <nav className='nav'>
        <div><a href="">Profile</a></div>
        <div><a href="">Messages</a></div>
        <div><a href="">News</a></div>
        <div><a href="">Music</a></div>
        <div><a href="">Settings</a></div>
      </nav>

      <div className='content'>
        <div>
          <img src="https://t4.ftcdn.net/jpg/06/41/10/41/360_F_641104140_lkHlULzw6I1zwaN4I2I3SN3UNHVmawNW.jpg" alt="" />
        </div>
        <div>ava+discription</div>
        <div>My posts</div>
        <div>New post</div>
        <div>
          <div>post 1</div>
          <div>post 2</div>
        </div>
      </div>

    </div>
  );
}

export default App;
