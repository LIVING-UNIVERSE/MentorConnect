// import mongoose from "mongoose";

// const connectDB= async()=>{
//     try {
//         const connectionInstance= await mongoose.connect(`${process.env.MONGODB_URI}/prescripto`)
//         mongoose.connection.on('connected',()=>console.log('Database Connected'))
//         console.log(`\n MongoDB connectd!!! DB HOST :${connectionInstance.connection.host}`)
        
//     } catch (error) {
//         console.log("MondgoDB database connection error",error)
//     }
// }

// export default connectDB




import mongoose from "mongoose";


let cached = global.__mongoose_conn;
if (!cached) cached = global.__mongoose_conn = { conn: null, promise: null };

const connectDB = async () => {
  try {
    if (cached.conn) return cached.conn;

    if (!cached.promise) {
      cached.promise = mongoose
        .connect(`${process.env.MONGODB_URI}/prescripto`)
        .then((m) => m.connection);
    }

    const connectionInstance = (cached.conn = await cached.promise);

    if (!global.__mongo_logged) {
      mongoose.connection.on("connected", () => console.log("Database Connected"));
      console.log(`\n MongoDB connectd!!! DB HOST :${connectionInstance.host}`);
      global.__mongo_logged = true;
    }

    return connectionInstance;
  } catch (error) {
    console.log("MondgoDB database connection error", error);
    throw error; 
  }
};

export default connectDB;
