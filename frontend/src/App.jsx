import { HashRouter, Routes, Route } from 'react-router-dom';

import ProtectedRoutes from './components/ProtectedRoutes';

import Login from './pages/Login';
import Home from './pages/Home';

import './App.css';

import phrases from './assets/data';
import { useDispatch } from 'react-redux';

import { getPhrasesThunk } from './store/slices/phrases.slice';

function App() {
  const dispacth = useDispatch();

  dispacth(getPhrasesThunk(phrases));

  return (
    <HashRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route element={<ProtectedRoutes />}>
          <Route path='/' element={<Home />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
