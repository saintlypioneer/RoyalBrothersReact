
import "./App.css";
import Search from "./Components/Search_page/Search";
import LoginHeader from './Components/Login/LoginHeader';
import Blogs from './Components/Blogs'
import Footer from './Components/Footer';


import Check from './Pages/Check';

import Home from './Components/Pages/Home';
import Payment from './Components/Pages/Payment'


import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar2';
import Checkout from "./Components/Checkout";
import Profile_Page from "./Components/Login/ProfilePage";
import SignUP from "./Components/Login/signup";

//clear everything before pushing and merging the codes on github

function App() {
  return (
    <div className="App">

       <Navbar /> 
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/payment' element={<Payment />} />
        {/* <Route path='/checkout' element={<Check />} /> */}
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/search' element={<Search />} />
        <Route path='/search/:id' element={<Check />}/>
        <Route path='/login' element={<LoginHeader/>}/>
        <Route path='/signUp' element={<LoginHeader/>}/>
        <Route path='/profile' element={<Profile_Page/>}/>
        <Route path='*' element={<>404</>} />
      </Routes>


   
      <Footer />

    </div>
  );
}

export default App;
