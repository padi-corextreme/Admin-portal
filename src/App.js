import Signup from './signup/signup.js';
import SignIn from './sign-in/sign-in-page.jsx';
import AdminDash from './Admin/admin-dash.js';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import AllPromo from './promos/allpromo.js';
import AddPromo from './promos/add-promo.js';
import ManagePromo from './promos/managepromo.js';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignIn />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/dashboard' element={<AdminDash />} />
          <Route path='/newpromo' element={<AddPromo />} />
          <Route path='/allpromos' element={<AllPromo />} />
          <Route path='/managepromos' element={<ManagePromo />} />
        </Routes>
        </BrowserRouter>
   </div>
  );
}

export default App;
