import logo from './logo.svg';
import './App.css';
import Signup from './signup/signup.js';
    import SignIn from './sign-in/sign-in-page';
import AdminDash from './admin-dash.js';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import AllPromo from './signup/allpromo.js';
import AddPromo from './add-promo.js';
import ManagePromo from './signup/managepromo.js';

function App() {
  return (
   <div>
    <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<Homepage />} /> */}
          <Route path='/signin' element={<SignIn/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/dashboard' element={ <AdminDash/>} />
          
        </Routes>
   {/* <Signup/> */}
        {/* <SignIn/> */}
     
        </BrowserRouter>
   </div>
  );
}

export default App;
