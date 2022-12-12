const mongoose = require('mongoose');

const dbConnection = async () => {

  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(process.env.MONGODB_CNN, () => {
      console.log('Conectado a la base de datos');
    });    
  } catch (error) {
    console.log(error);
    throw new Error('Error al iniciar la BD revisar el backend');
  }
}


module.exports = {
  dbConnection
}