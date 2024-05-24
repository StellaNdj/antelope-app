import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Table from './components/Table';
import Charts from './components/Charts';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Homepage/>}>
            <Route path='table' element={<Table/>}/>
            <Route path='charts' element={<Charts/>}/>
            <Route index element={<Navigate to='/charts' />}/>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
