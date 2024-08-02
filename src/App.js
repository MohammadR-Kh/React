import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Home } from './Home';
import { Menu } from './Menu';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


function App() {

  const client = new QueryClient();

  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <Router>
          <div>
            <Link to="/menu">Menu</Link>
            <Link to="/">Home</Link>
          </div>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/menu' element={<Menu />}/>
            <Route path='*' element={<h1>Page not Found</h1>}/>
          </Routes>
        </Router>
      </QueryClientProvider>
    </div>
  );
}


export default App;
