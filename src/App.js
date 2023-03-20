import "./App.css";
import Search from "./Components/Search_page/Search";
import LoginHeader from "./Components/Login/LoginHeader";
import Blogs from "./Components/Blogs";
import Footer from "./Components/Footer";

import Check from "./Pages/Check";

import Home from "./Components/Pages/Home";
import Payment from "./Components/Pages/Payment";

import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar2";
import Checkout from "./Components/Checkout";
import ProfilePage from "./Components/Login/ProfilePage";
import SignUP from "./Components/Login/signup";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import ProfileMenu from "./Components/Login/ProfileMenu";
import Banner from "./Components/Banner/Banner";
import TariffPage from "./Components/tariff_page/TariffPage";
// import MyRides from "./Components/my_ride_page/MyRides";

//clear everything before pushing and merging the codes on github

function App() {
  
  return (
    <div className="App">
      <Banner title="Our delay policy has been changed" />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/payment"
          element={
            <PrivateRoute>
              <Payment />
            </PrivateRoute>
          }
        />
        {/* <Route path='/checkout' element={<Check />} /> */}
        <Route path='/search/:id' element={<PrivateRoute><Check /></PrivateRoute>}/>
        <Route path='/login' element={<LoginHeader/>}/>
        <Route path='/signUp' element={<LoginHeader/>}/>
        <Route path='/profile' element={<PrivateRoute><ProfilePage/></PrivateRoute>}/>
        <Route path='/profilemenu' element={<ProfileMenu/>}/>
        <Route path='*' element={<>404</>} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/search" element={<Search />} />
        <Route path="/tarrif" element={<TariffPage />} />
        {/* <Route path="/rides" element={<MyRides />} /> */}
        <Route
          path="/search/:id"
          element={
            <PrivateRoute>
              <Check />
            </PrivateRoute>
          }
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
