import './App.css';

const App = () => {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1724716800&semt=ais_hybrid" alt="" />
      </header>

      <nav className='nav'>
        <div>Profile</div>
        <div>Message</div>
      </nav>

      <div className='content'>
        Main content
      </div>
    </div>
  );
}

export default App;
