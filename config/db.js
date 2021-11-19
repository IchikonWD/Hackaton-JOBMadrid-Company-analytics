import Mongoose from 'mongoose';
import colors from 'colors';

const connectDB = async () => {
  try {
    const conn = await Mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(
      colors.green(`MongoDB connected: ${conn.connection.host}`.cyan.bold)
    );
  } catch (err) {
    console.log(`Error: ${err.message}`.red.bold);
  }
};

export default connectDB;
