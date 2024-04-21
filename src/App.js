import Signup from './signup/signup.js';
import SignIn from './sign-in/sign-in-page';
import AdminDash from './admin-dash.js';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/*<Route path='/' element={<Homepage />} /> */}
          <Route path='/' element={<SignIn />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/dashboard' element={<AdminDash />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
