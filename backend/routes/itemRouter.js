const express = require('express');
const { getItem,addToCart,getItemsByCategory,fetchCart,updateCartQuantity,removeCartItem,searchItems,findItem,getParticularLaptopDetails,getParticularAirbudsDetails,getParticularRefriDetails,getParticularACDetails,getParticularTVDetails,getPhoneItem,getLaptopItem,getACItem,getAirBudsItem,getTVItem,getRefridgeratorItem,getParticularPhoneDetails }=require("C:/Users/tirth/FSDIndi/FSDIndi/backend/controllers/itemDetail")

const router = express.Router();
const cors = require('cors');

router.get("/category/:category",getItem)
router.get("/phone/:phone",getPhoneItem)
router.get("/laptop/:laptop",getLaptopItem)
router.get("/AC/:AC",getACItem)
router.get("/AirBuds/:AirBuds",getAirBudsItem)
router.get("/TV/:TV",getTVItem)
router.get("/Refridgerator/:Refridgerator",getRefridgeratorItem)
router.get("/phoneName/:phoneName",getParticularPhoneDetails)
router.get("/laptopName/:laptopName", getParticularLaptopDetails)
router.get("/acName/:acName", getParticularACDetails)
router.get("/tvName/:tvName", getParticularTVDetails)
router.get("/airbudsName/:airbudsName", getParticularAirbudsDetails)
router.get("/refriName/:refriName", getParticularRefriDetails)
router.get("/search/",searchItems)
router.get("/item/:name",findItem)
router.post("/cart/add",  addToCart);
router.post("/cart",fetchCart)
router.post('/cart/update-quantity', updateCartQuantity); // Route to update item quantity
router.post('/cart/remove', removeCartItem); // Route to remove item from cart
router.get('/items/:category', getItemsByCategory);


module.exports = router; 
