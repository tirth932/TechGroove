const mongoose = require('mongoose');
const { connectUserAuthDB } = require('C:/Users/tirth/FSDIndi/FSDIndi/backend/config/dbConnections');

const authtestsetapp = connectUserAuthDB();

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    contact: Number,
    cart: [
        {
            itemId: Object, // ID of the item
            quantity: { type: Number, default: 1 } // Quantity of the item in the cart
        }
    ],
});
module.exports = authtestsetapp.model("User", userSchema);
