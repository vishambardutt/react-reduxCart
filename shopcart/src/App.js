// import logo from './logo.svg';
import Header from './component/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import CardDetails from './component/CardDetails';
import Cards from './component/Cards';
 // import './App.css';

  function App() {
    return (

      <div>
        <Header />
        
        <Routes>
          <Route path="/" element={<Cards />} />
          <Route path="/cart" element={<CardDetails />} />
        </Routes>
        
      </div>

    );
  }

export default App;


