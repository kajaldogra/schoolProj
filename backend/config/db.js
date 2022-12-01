const mongoose = require('mongoose')

const connectDB = async() =>{
    try {
        // console.log('lkjhgfd',process.env.DB_URL)
      const conn = await mongoose.connect('mongodb://localhost:27017/school')
    //   c\onst conn = await mongoose.connect(process.env)

      console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
    }catch(error){
      console.log(error);
      process.exit(1)
    }
}

module.exports = connectDB;