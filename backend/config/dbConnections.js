const mongoose = require('mongoose');

const connectUserAuthDB = () => {
    return mongoose.createConnection('mongodb://127.0.0.1:27017/UserAuthenticationIndi', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};


const connectItemsDB = async () => {
    try {
        const uri = 'mongodb://127.0.0.1:27017/AllItemDetails'; // Adjust as necessary
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB');
        return mongoose.connection.db; // Return the native MongoDB driver object
    } catch (error) {
        console.error('Database connection error:', error.message);
        throw error;
    }
};


module.exports = { connectUserAuthDB,connectItemsDB};
