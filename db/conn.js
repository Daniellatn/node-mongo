const mongoose = require('mongoose')

async function main() {
  try {
    await mongoose.connect(`mongodb+srv://${process.env.DB_MONGO_USER}:${process.env.DB_MONGO_PASSWORD}@cluster0.yhtvgtd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
    console.log('BD OK')
  } catch (error) {
    console.log('Erro: ' + error)
  }
}

module.exports = main