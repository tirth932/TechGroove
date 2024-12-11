const mongoose = require('mongoose');
const { connectItemsDB } = require('C:/Users/tirth/FSDIndi/FSDIndi/backend/config/dbConnections');
const User = require('C:/Users/tirth/FSDIndi/FSDIndi/backend/models/user');


const getItem = async (req, res) => {
    const collectionName = "itemDetails";
    const { category } = req.params;
    
    try {
        // Ensure connection is established
        const db = await connectItemsDB();
        const collection = db.collection(collectionName);

        // Fetch data from the collection
        const data = await collection.find({ "category": category }).toArray();
        res.json(data);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
const findItem = async (req, res) => {
    const collectionName = "itemDetails";
    const { name } = req.params;
    
    try {
        // Ensure connection is established
        const db = await connectItemsDB();
        const collection = db.collection(collectionName);

        // Fetch data from the collection
        const data = await collection.find({ "category": name }).toArray();
        res.json(data);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const searchItems = async (req, res) => {
    const collectionName = "itemDetails";
    const { query } = req.query; // Get the search query from the URL

    try {
        // Ensure connection is established
        const db = await connectItemsDB();
        const collection = db.collection(collectionName);

        // Perform a case-insensitive search on brand, name, or category fields
        const data = await collection.find({
            $or: [
                { name: { $regex: query, $options: 'i' } }, // Search by name
                { category: { $regex: query, $options: 'i' } }, // Search by category
                { brand: { $regex: query, $options: 'i' } } // Search by brand
            ]
        }).toArray();

        res.json(data);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getPhoneItem = async (req, res) => {
    const collectionName = "itemDetails";
    const { phone } = req.params;
    try {
        // Ensure connection is established
        const db = await connectItemsDB();
        const collection = db.collection(collectionName);
        // Fetch data from the collection
        const data = await collection.find({ "category": phone }).toArray();
        res.json(data);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
const getLaptopItem = async (req, res) => {
    const collectionName = "itemDetails";
    const { laptop } = req.params;
    try {
        // Ensure connection is established
        const db = await connectItemsDB();
        const collection = db.collection(collectionName);
        // Fetch data from the collection
        const data = await collection.find({ "category": laptop }).toArray();
        res.json(data);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
const getACItem = async (req, res) => {
    const collectionName = "itemDetails";
    const { AC } = req.params;
    try {
        // Ensure connection is established
        const db = await connectItemsDB();
        const collection = db.collection(collectionName);
        // Fetch data from the collection
        const data = await collection.find({ "category": AC }).toArray();
        res.json(data);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
const getTVItem = async (req, res) => {
    const collectionName = "itemDetails";
    const { TV } = req.params;
    try {
        // Ensure connection is established
        const db = await connectItemsDB();
        const collection = db.collection(collectionName);
        // Fetch data from the collection
        const data = await collection.find({ "category": TV }).toArray();
        res.json(data);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
const getAirBudsItem = async (req, res) => {
    const collectionName = "itemDetails";
    const { AirBuds } = req.params;
    try {
        // Ensure connection is established
        const db = await connectItemsDB();
        const collection = db.collection(collectionName);
        // Fetch data from the collection
        const data = await collection.find({ "category": AirBuds }).toArray();
        res.json(data);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
const getRefridgeratorItem = async (req, res) => {
    const collectionName = "itemDetails";
    const { Refridgerator } = req.params;
    try {
        // Ensure connection is established
        const db = await connectItemsDB();
        const collection = db.collection(collectionName);
        // Fetch data from the collection
        const data = await collection.find({ "category": Refridgerator }).toArray();
        res.json(data);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getParticularPhoneDetails = async (req,res) => {
    const collectionName = "itemDetails";
    const { phoneName } = req.params;
    try {
        // Ensure connection is established
        const db = await connectItemsDB();
        const collection = db.collection(collectionName);
        // Fetch data from the collection
        const data = await collection.find({ "name": phoneName }).toArray();
        res.json(data);
    } catch (error) {
        res.status(500).send(error.message);
    }
}
const getParticularLaptopDetails = async (req,res) => {
    const collectionName = "itemDetails";
    const { laptopName } = req.params;
    try {
        // Ensure connection is established
        const db = await connectItemsDB();
        const collection = db.collection(collectionName);
        // Fetch data from the collection
        const data = await collection.find({ "name": laptopName }).toArray();
        res.json(data);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const getParticularTVDetails = async (req,res) => {
    const collectionName = "itemDetails";
    const { tvName } = req.params;
    try {
        // Ensure connection is established
        const db = await connectItemsDB();
        const collection = db.collection(collectionName);
        // Fetch data from the collection
        const data = await collection.find({ "name": tvName }).toArray();
        res.json(data);
    } catch (error) {
        res.status(500).send(error.message);
    }
}
const getParticularACDetails = async (req,res) => {
    const collectionName = "itemDetails";
    const { acName } = req.params;
    try {
        // Ensure connection is established
        const db = await connectItemsDB();
        const collection = db.collection(collectionName);
        // Fetch data from the collection
        const data = await collection.find({ "name": acName }).toArray();
        res.json(data);
    } catch (error) {
        res.status(500).send(error.message);
    }
}
const getParticularAirbudsDetails = async (req,res) => {
    const collectionName = "itemDetails";
    const { airbudsName } = req.params;
    try {
        // Ensure connection is established
        const db = await connectItemsDB();
        const collection = db.collection(collectionName);
        // Fetch data from the collection
        const data = await collection.find({ "name": airbudsName }).toArray();
        res.json(data);
    } catch (error) {
        res.status(500).send(error.message);
    }
}
const getParticularRefriDetails = async (req,res) => {
    const collectionName = "itemDetails";
    const { refriName } = req.params;
    try {
        // Ensure connection is established
        const db = await connectItemsDB();
        const collection = db.collection(collectionName);
        // Fetch data from the collection
        const data = await collection.find({ "name": refriName }).toArray();
        res.json(data);
    } catch (error) {
        res.status(500).send(error.message);
    }
}
const addToCart = async (req, res) => {
    const { itemId, useremail } = req.body; // The ID of the item to be added
    console.log(itemId, useremail);

    try {
        // Find the user by email
        const user = await User.findOne({ email: useremail }); // findOne returns a single document

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Ensure user.cart is an array (initialize if it's undefined)
        if (!user.cart) {
            user.cart = [];
        }

        // Check if the item already exists in the cart
        const existingItemIndex = user.cart.findIndex(item => item.itemId.toString() === itemId);

        if (existingItemIndex > -1) {
            // If item exists in the cart, increase the quantity
            user.cart[existingItemIndex].quantity += 1;
        } else {
            // If item doesn't exist in the cart, add it
            user.cart.push({ itemId, quantity: 1 }); // Add with a default quantity of 1
        }

        // Save the updated user document
        await user.save();

        res.status(200).json({ message: 'Item added to cart', cart: user.cart });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};
const getItemsByCategory = async (req, res) => {
    const collectionName = "itemDetails";
    const { category } = req.params;
    try {
        const db = await connectItemsDB();
        const collection = db.collection(collectionName);
        const data = await collection.find({ category }).toArray();
        res.json(data);
    } catch (error) {
        res.status(500).send(error.message);
    }
};


const fetchCart = async(req,res) => {
        const { useremail } = req.body
        console.log(useremail)

        try {
            const user = await User.findOne({ email: useremail }).populate('cart.itemId'); // Populate cart with item details
            if (!user) {
              return res.status(404).json({ message: 'User not found' });
            }
            console.log(user.cart)
            res.json(user.cart); // Send cart items
          } catch (error) {
            res.status(500).json({ message: 'Error fetching cart items', error });
          }
}

// Update the quantity of an item in the user's cart
const updateCartQuantity = async (req, res) => {
    const { useremail, itemId, quantity } = req.body;

    try {
        const user = await User.findOne({ email: useremail });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const cartItemIndex = user.cart.findIndex(cartItem => cartItem.itemId.name.toString() === itemId);

        if (cartItemIndex > -1) {
            if (quantity > 0) {
                user.cart[cartItemIndex].quantity = quantity; // Update the quantity
            } else {
                // If the quantity is 0, remove the item from the cart
                user.cart.splice(cartItemIndex, 1);
            }

            await user.save();
            return res.status(200).json({ message: 'Cart updated successfully', cart: user.cart });
        } else {
            return res.status(404).json({ message: 'Item not found in cart' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Remove an item from the cart directly
const removeCartItem = async (req, res) => {
    const { useremail, itemId } = req.body;
    console.log(itemId)

    try {
        const user = await User.findOne({ email: useremail });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Remove item from cart
        user.cart = user.cart.filter(cartItem => cartItem.itemId.name.toString() !== itemId);

        await user.save();
        res.status(200).json({ message: 'Item removed from cart', cart: user.cart });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};
module.exports = { getItem,addToCart,getItemsByCategory,fetchCart,searchItems,removeCartItem,updateCartQuantity,findItem,getPhoneItem,getACItem,getAirBudsItem,getLaptopItem,getRefridgeratorItem,getTVItem,getParticularPhoneDetails,getParticularACDetails,getParticularAirbudsDetails,getParticularLaptopDetails,getParticularRefriDetails,getParticularTVDetails };
