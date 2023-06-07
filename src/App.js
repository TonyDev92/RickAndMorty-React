import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import HomePage from './pages/home/HomePage';

import CharacterDetail from './components/characterDetail/CharacterDetail';
import SlashPage from './pages/slashpage/SlashPage';




function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<SlashPage />} />
          <Route path='/characters' element={<HomePage />} />
          <Route path='/characters/charactersDetail' element={<CharacterDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
