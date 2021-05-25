const mongoose = require('mongoose')

const connect = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    })
    .then(() => console.log('db connected'))
    .catch((err) => console.log(err))
}

module.exports = { connect }
