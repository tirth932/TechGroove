import React from 'react'
import Carousel from './Carousel'
import "../css/Home.css"
import S24 from "../assets/images/S24.png"
import i15 from "../assets/images/iphoneMain.png"
import AppleLogo from "../assets/Logos/AppleLogo.jpg"
import oneplusLogo from "../assets/Logos/oneplusLogo.png"
import AsusLogo from "../assets/Logos/AsusLogo.png"
import BoatLogo from "../assets/Logos/BoatLogo.png"
import DellLogo from "../assets/Logos/DellLogo.jpg"
import HpLogo from "../assets/Logos/HpLogo.jpeg"
import NoiseLogo from "../assets/Logos/NoiseLogo.jpg"
import NothingLogo from "../assets/Logos/Nothing_Logo.webp"
import SamsungLogo from "../assets/Logos/SamsungLogo.png"
import SonyLogo from "../assets/Logos/SonyLogo.webp"
import OfferAds from "../assets/images/OfferAds.webp"
import MacBook from "../assets/images/image.png"
import Boat from "../assets/images/Boat.png"
import Sony from "../assets/images/Sony.png"
import NBanner from "../assets/images/nothingphone2banner.webp"
import LG from "../assets/images/LG.png"
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home'>
      <Carousel />
      <div className='popular'>
        <h1 className='tagName'>Popular Products</h1>
        <div className='popularProduct'>
        <Link to={`/phoneName/Samsung Galaxy S24 Ultra 5G AI Smartphone (Titanium Gray, 12GB, 256GB Storage)/`}> <div className='popularP'>
            <div className='popularInnerLeft'>
              <h1 className='Brand'>SAMSUNG</h1>
              <h2 className='BrandProduct'>Samsung S24 Ultra</h2>
              <p className='price'>Starting Price : ₹1,10,000</p>
              <h4>*Inclusive of all offers</h4>
            </div>
            <div className='popularInnerRight'>
              <img src={S24} alt='Samsung' className='S24'></img>
            </div>
          </div></Link>
          <Link to={`/phoneName/Apple iPhone 15 Pro Max (256 GB) - Natural Titanium/`}>
          <div className='popularP'>
            <div className='popularInnerLeft'>
              <h1 className='Brand'>APPLE</h1>
              <h2 className='BrandProduct'>Iphone 16 pro max</h2>
              <p className='price'>Starting Price : ₹1,44,999</p>
              <h4>*Inclusive of all offers</h4>
            </div>
            <div className='popularInnerRight'>
              <img src={i15} alt='Samsung' className='i15'></img>
            </div>
          </div></Link>
        </div>
      </div>
      <h1 style={{ fontSize: "50px" }}>Brands</h1>
      <div className="scroller">
        <div className="scroller-in-1">

          <img src={AppleLogo} alt="" />
          <img src={SamsungLogo} alt="" />
          <img src={oneplusLogo} alt="" />
          <img src={NothingLogo} alt="" />
          <img src={BoatLogo} alt="" />
          <img src={SonyLogo} alt="" />
          <img src={NoiseLogo} alt="" />
          <img src={DellLogo} alt="" />
          <img src={HpLogo} alt="" />
          <img src={AsusLogo} alt="" />
        </div>
        <div className="scroller-in-1">

          <img src={AppleLogo} alt="" />
          <img src={SamsungLogo} alt="" />
          <img src={oneplusLogo} alt="" />
          <img src={NothingLogo} alt="" />
          <img src={BoatLogo} alt="" />
          <img src={SonyLogo} alt="" />
          <img src={NoiseLogo} alt="" />
          <img src={DellLogo} alt="" />
          <img src={HpLogo} alt="" />
          <img src={AsusLogo} alt="" />
        </div>
      </div>
      <div className='Offer'>
        <img src={OfferAds} alt='' />
      </div>
      <div className='DealOffer'>
        <Link to={`/laptopName/Apple 2024 MacBook Air 15″ Laptop with M3 chip`}><div className='Deal1'>
          <h2>APPLE</h2>
          <h3>MacBook Air</h3>
          <img src={MacBook}></img>
          <h4>*Inclusive of all offers</h4>
        </div></Link>
        <Link to={`/airbudsName/boAt Airdopes Atom 81 TWS Earbuds with Upto 50H Playtime (Opal Black)`}><div className='Deal2'>
          <h2>BOAT</h2>
          <h3>Airdopes Atom 81</h3>
          <img src={Boat}></img>
          <h4>*Inclusive of all offers</h4>
        </div></Link>
        <Link to={`/tvName/Sony Bravia 139 cm (55 inches) 4K Ultra HD Smart LED Google TV KD-55X74L (Black)`}><div className='Deal3'>
          <h2>SONY</h2>
          <h3>Sony Bravia 4K Ultra HD</h3>
          <img src={Sony}></img>
          <h4>*Inclusive of all offers</h4>
        </div></Link>
        <Link to={`/acName/LG 1.5 Ton 5 Star DUAL Inverter Split AC`}><div className='Deal4'>
          <h2>LG</h2>
          <h3>LG 1.5 Ton 5 Star </h3>
          <img src={LG}></img>
          <h4>*Inclusive of all offers</h4>
        </div></Link>
      </div>
      <div className='Banner'>
        <img src={NBanner} alt='' />
      </div>   
      <div className='DealOffer'>
       <Link to={`/laptopName/Apple 2024 MacBook Air 15″ Laptop with M3 chip`}> <div className='Deal5'>
          <h2>APPLE</h2>
          <h3>MacBook Air</h3>
          <img src={MacBook}></img>
          <h4>*Inclusive of all offers</h4>
        </div></Link>
       <Link to={`/airbudsName/boAt Airdopes Atom 81 TWS Earbuds with Upto 50H Playtime (Opal Black)`}> <div className='Deal6'>
        <h2>BOAT</h2>
          <h3>Airdopes Atom 81</h3>
          <img src={Boat}></img>
          <h4>*Inclusive of all offers</h4>
        </div></Link>
        <Link to={`/tvName/Sony Bravia 139 cm (55 inches) 4K Ultra HD Smart LED Google TV KD-55X74L (Black)`}><div className='Deal7'>
        <h2>SONY</h2>
          <h3>Sony Bravia 4K Ultra HD</h3>
          <img src={Sony}></img>
          <h4>*Inclusive of all offers</h4>
        </div></Link>
      </div> 
    </div>
  )
}

export default Home
