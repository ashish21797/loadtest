/*
* MongoDb Connection - Mangoose Driver
*/

// Libraries
const mongoose = require('mongoose')
require('dotenv').config()


// Mongoose bydefault add 's after every collection
// mongoose.pluralize(null)

// Mongoose return updated row
mongoose.set('returnOriginal', false)

// Lean Results byDefault
let __setOptions = mongoose.Query.prototype.setOptions
mongoose.Query.prototype.setOptions = function(options, overwrite) {
    __setOptions.apply(this, arguments)
    if(this.mongooseOptions().lean == null) { this.mongooseOptions({lean:true}) }
    return this
}


// Handler FOR DEV
function connect() {
    //let mongoURL = 'mongodb://' + process.env.DB_HOST + ':' + process.env.DB_PORT + '/' + process.env.DB_NAME
    // if(process.env.DB_ADMIN) {
    //     mongoURL = 'mongodb://' + process.env.DB_ADMIN + ':' + process.env.DB_PASS + '@' + process.env.DB_HOST + ':' + process.env.DB_PORT + '/' + process.env.DB_NAME + '?authSource=' + process.env.DB_NAME
    // }
    // if(process.env.DB_CONNECTING_PATH) {
    //     mongoURL = 'mongodb://root:cachy@15.207.239.166:27017/?authMechanism=DEFAULT';
    // }

    // mongodb+srv://ankit:cachy123@cluster0.saedp.mongodb.net/user_details

    //mongoURL = 'mongodb://'+ process.env.MDDB_NAME_DEV+':'+process.env.MDDB_PASS_DEV+'@'+process.env.MDDB_HOST_DEV+':'+process.env.MDDB_PORT_DEV+'/'+'?authMechanism=DEFAULT';
    mongoURL = 'mongodb+srv://'+ process.env.MDDB_NAME_QA+':'+process.env.MDDB_PASS_QA+'@'+process.env.MDDB_HOST_QA+'/user_details';
console.log("mongoURL",mongoURL)
    /*
    * MongoDb Connection
    * https://mongoosejs.com/docs/deprecations.html
    * https://mongoosejs.com/docs/migrating_to_6.html#no-more-deprecation-warning-options
    */
    mongoose.connect(mongoURL)
    return mongoose.connection;
}

// Handler FOR QA
// function connect() {
//     //let mongoURL = 'mongodb://' + process.env.DB_HOST + ':' + process.env.DB_PORT + '/' + process.env.DB_NAME
//     // if(process.env.DB_ADMIN) {
//     //     mongoURL = 'mongodb://' + process.env.DB_ADMIN + ':' + process.env.DB_PASS + '@' + process.env.DB_HOST + ':' + process.env.DB_PORT + '/' + process.env.DB_NAME + '?authSource=' + process.env.DB_NAME
//     // }
//     // if(process.env.DB_CONNECTING_PATH) {
//     //     mongoURL = 'mongodb://root:cachy@15.207.239.166:27017/?authMechanism=DEFAULT';
//     // }
//     mongoURL = 'mongodb://'+ process.env.MDDB_NAME_QA+':'+process.env.MDDB_PASS_QA+'@'+process.env.MDDB_HOST_QA+':'+process.env.MDDB_PORT_QA+'/'+'?authMechanism=DEFAULT';

//     /*
//     * MongoDb Connection
//     * https://mongoosejs.com/docs/deprecations.html
//     * https://mongoosejs.com/docs/migrating_to_6.html#no-more-deprecation-warning-options
//     */
//     mongoose.connect(mongoURL)
//     return mongoose.connection;
// }

// Connect Application
let connection = connect()

// Connection Events
connection.on('error', function(error) {
    console.error('Error in Mongoose connection: ' + error)
})
connection.on('connected', function() {
    console.log('Mongoose is connected !')
})
connection.on('disconnected', function() {
    console.error('Mongoose is disconnected !')
})
connection.on('reconnected', function() {
    console.log('Mongoose is reconnected !')
})
process.on('SIGINT', function(){
    mongoose.connection.close(function(){
        console.log('Mongoose is disconnected due to application termination !')
        process.exit(0)
    })
})
