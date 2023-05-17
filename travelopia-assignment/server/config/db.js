const mongoose = require("mongoose");

const connect = async () => {
  const con = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log(`MongoDB Connected ${con.connection.host}`);
};

module.exports = connect;
