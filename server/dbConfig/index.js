import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    const Connection = await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("DB connected succeffully");
  } catch (error) {
    console.log("DB Error: " + error);
  }
};

export default dbConnection;
