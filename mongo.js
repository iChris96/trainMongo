const mongo = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017'
const querys = require('./query.js')

const conexion = mongo.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err, client) => {
        if (err) {
            console.error(err)
            return
        }
        const db = client.db('trainDB')
        const collection = db.collection('03feb')
        
        querys.query(collection)

        client.close();
    })

exports.conexion = conexion