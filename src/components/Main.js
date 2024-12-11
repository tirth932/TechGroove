import React from 'react'
import {BrowserRouter as Router,Route,Routes,useLocation} from "react-router-dom";
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import AboutUs from './AboutUs';
import Privacy from './Privacy';
import Faq from './Faq';
import Disclaimer from './Disclaimer'
import Ewaste from './Ewaste'
import Login from './Login';
import Cart from './Cart';
import Signup from './Signup';
import Logout from './Logout';
import ItemDetails from "./ItemDetails"
import PhoneDetail from './PhoneDetail';
import TVDetail from './TVDetail';
import ACDetail from './ACDetail';
import AirBudsDetail from './AirBudsDetail';
import LaptopDetail from './LaptopDetail';
import RefridgeratorDetail from './RefridgeratorDetail';
import PhoneDetailsDisplay from './PhoneDetailsDisplay';
import LaptopDetailsDisplay from './LaptopDetailsDisplay';
import AirbudsDetailsDisplay from './AirbudsDetailsDisplay';
import TVDetailsDisplay from './TVDetailsDisplay';
import ACDetailsDisplay from './ACDetailsDisplay';
import ProductDetail from './ProductDetail';
import RefriDetailsDisplay from './RefriDetailsDisplay';
import ThankYouPage from './ThankYouPage';
import UserDetails from './UserDetails';
import Checkout from './Checkout'; 
import Checkout1 from './Checkout1';
import OrderDetails from './OrderDetails';

const MainContent = () => {
  const location = useLocation();
  return (
    <div>
      {location.pathname !== "/login" && location.pathname !== "/signup" && <Navbar/>}
          {/* <Navbar /> */}
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="aboutUs" element={<AboutUs/>}></Route>
              <Route path='privacy' element={<Privacy/>}></Route>
              <Route path='faq' element={<Faq/>}></Route>
              <Route path='disclaimer' element={<Disclaimer/>}></Route>
              <Route path='ewaste' element={<Ewaste/>}></Route>
              <Route path='login' element={<Login/>}></Route>
              <Route path='signup' element={<Signup/>}></Route>
              <Route path='cart' element={<Cart/>}></Route>
              <Route path="logout" element={<Logout />} />
              <Route path='/category/:category' element={<ItemDetails/>}/>
              <Route path='/phone/:phone' element={<PhoneDetail/>}/>
              <Route path='/laptop/:laptop' element={<LaptopDetail/>}/>
              <Route path='/AC/:AC' element={<ACDetail/>}/> 
              <Route path='/TV/:TV' element={<TVDetail/>}/>
              <Route path='/AirBuds/:AirBuds' element={<AirBudsDetail/>}/>
              <Route path='/Refridgerator/:Refridgerator' element={<RefridgeratorDetail/>}/>
              <Route path="/phoneName/:phoneName" element={<PhoneDetailsDisplay/>}/>
              <Route path="/laptopName/:laptopName" element={<LaptopDetailsDisplay/>}/>
              <Route path="/airbudsName/:airbudsName" element={<AirbudsDetailsDisplay/>}/>
              <Route path="/tvName/:tvName" element={<TVDetailsDisplay/>}/>
              <Route path="/acName/:acName" element={<ACDetailsDisplay/>}/>
              <Route path="/refriName/:refriName" element={<RefriDetailsDisplay/>}/>
              <Route path='/item/:name' element={<ProductDetail/>}/>
              <Route path="/thank-you" element={<ThankYouPage />} />
              <Route path='/user-details/' element={<UserDetails />} />
              <Route path='/checkout' element={<Checkout />} />
              <Route path='/checkout1' element={<Checkout1 />} />
              <Route path="/order-details" element={<OrderDetails />} />
              


          </Routes>
          {location.pathname !== "/login" &&  location.pathname !== "/signup" && <Footer/>  }

    </div>
  )
}

const Main = () => {
  return (
      <Router>
          <MainContent />
      </Router>
  );
};

export default Main 