let mongoose = require('mongoose');
const server = dataBaseUrl; // REPLACE WITH YOUR DB SERVER
const database = dataBaseName;      // REPLACE WITH YOUR DB NAME
require("dotenv").config();
const dataBaseUrl = process.env.dataBaseUrl ;
const dataBaseName = process.env.dataBaseName ;

class Database {
  constructor() {
    this._connect()
  }
_connect() {
     mongoose.connect(`mongodb://${server}/${database}`)
       .then(() => {
         console.log('Database connection successful')
       })
       .catch(err => {
         console.error('Database connection error')
       })
  }
}
module.exports = new Database()