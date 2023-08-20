import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ListPage from './screens/List/ListPage' 
import DetailsPage from './screens/Details/DetailsPage';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path='/' element={<ListPage />} exact />
        <Route path='/details/:id' element={<DetailsPage />} />
        
        </Routes>
      </Router>
    
    </div>
  );
}

export default App;
