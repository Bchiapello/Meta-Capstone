import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import OrderOnline from './pages/OrderOnline';
import './styles/App.css';
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom' ;



function App() {
  return (
      <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}/>
          <Route path='/about-me' element={<AboutPage />}/>
          <Route path='/orderonline' element={<OrderOnline />}/>
          <Route path='*' element={<Home />}/>
        </Routes>
      </BrowserRouter>
      </>
  );
}

export default App;
