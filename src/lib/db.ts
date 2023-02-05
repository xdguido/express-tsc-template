const mongoose = require('mongoose');

const { NODE_ENV } = process.env;

export const connectDB = async () => {
    try {
        if (NODE_ENV === 'test') {
            const conn = await mongoose.connect('mongodb://localhost:27017/dev-test');

            return console.log(`MongoDB Connected: ${conn.connection.host}`);
        }
        const conn = await mongoose.connect(process.env.MONGO_URI);
        return console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (err) {
        console.error(err);
        return process.exit(1);
    }
};
