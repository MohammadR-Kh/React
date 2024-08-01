import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Home } from './Home';
import { Menu } from './Menu';


function App() {


  return (
    <div className="App">
      <Router>
        <div>
          <Link to="/menu">Menu</Link>
        </div>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/menu' element={<Menu />}/>
          <Route path='*' element={<h1>Page not Found</h1>}/>
        </Routes>
      </Router>
    </div>
  );
}


export default App;
