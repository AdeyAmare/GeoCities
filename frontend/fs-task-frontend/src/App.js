import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login';
import Signup from './pages/Signup';
import Search from './pages/Search';

import { useSelector } from 'react-redux';
import Navbar from './components/Navbar';

function App() {
  const authState = useSelector(state => state.authReducer)
  let user = authState.user;




  return (
    <BrowserRouter>
      <div className="App">
        {user && <Navbar />}

        <Routes>
          <Route path='/login' element={!user ? <Login /> : <Navigate to="/" />} />
          <Route path='/signup' element={!user ? <Signup /> : <Navigate to="/" />} />
          <Route path='/' element={user ? <Search /> : <Navigate to="/login" />} />
        </Routes>


      </div >
    </BrowserRouter>
  );
}

export default App;
