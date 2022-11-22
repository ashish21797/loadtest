'use strict';
const Sequelize = require('sequelize');
// const config = require("../conf/dbconfig").development;
// const chalk = require('chalk');
const Pool = require('pg').Pool
require('dotenv').config()


// const cachyPool = new Sequelize(process.env.MSDB_DATABASE1_QA, process.env.MSDB_NAME_QA,process.env.MSDB_PASS_QA, {
//     //timezone: '+05:30', //here you can pass timezone
//     host: process.env.MSDB_HOST_QA,
//     dialect: 'mariadb',
//     pool: {
//         max: 5,
//         min: 0,
//         idle: 10000
//     }
// });

// const cachySocialPool = new Sequelize(process.env.MSDB_DATABASE2_QA, process.env.MSDB_NAME_QA,process.env.MSDB_PASS_QA, {
//     // timezone: '+05:30', //here you can pass timezone
//     host: process.env.MSDB_HOST_QA,
//     dialect: 'mariadb',
//     pool: {
//         max: 5,
//         min: 0,
//         idle: 10000
//     }
// });

console.log(process.env.PGDB_DATABASE1_QA,process.env.PGDB_USER_QA,process.env.PGDB_PASSWORD_QA)
const cachyPostgresPoolSequelize = new Sequelize(process.env.PGDB_DATABASE1_QA, process.env.PGDB_USER_QA,
    process.env.PGDB_PASSWORD_QA, {
    // timezone: '+05:30', //here you can pass timezone
    host: process.env.PGDB_HOST_QA,
    dialect: 'postgres',
    pool: {
        max: 200,
        min: 0,
        idle: 10000
    }
});
console.log("cachyPostgresPoolSequelize",cachyPostgresPoolSequelize)
const cachyPostgresPoolCorturnSequelize = new Sequelize(process.env.PGDB_DATABASE2_QA, process.env.PGDB_USER_QA,
    process.env.PGDB_PASSWORD_QA, {
    // timezone: '+05:30', //here you can pass timezone
    host: process.env.PGDB_HOST_QA,
    dialect: 'postgres',
    pool: {
        max: 200,
        min: 0,
        idle: 10000
    }
});

const cachyPostgresPool = new Pool({
    user: process.env.PGDB_USER_QA,
    host: process.env.PGDB_HOST_QA,
    database: process.env.PGDB_DATABASE1_QA,
    password: process.env.PGDB_PASSWORD_QA,
    port: process.env.PGDB_PORT_QA,
    max: 200,
})
console.log("cachyPostgresPool",cachyPostgresPool)
const cachyPostgresPoolCorturn = new Pool({
    user: process.env.PGDB_USER_QA,
    host: process.env.PGDB_HOST_QA,
    database: process.env.PGDB_DATABASE2_QA,
    password: process.env.PGDB_PASSWORD_QA,
    port: process.env.PGDB_PORT_QA,
    max: 200,
})

// cachyPool.authenticate()
//     .then(() => {
//         console.log('Mysql Connection has been established successfully for cachyPool.');
//     })
//     .catch(err => {
//         console.log('Unable to connect to the cachyPool database: ', err);
//         throw new Error('mysql error: Connection Failure');
//     })

// cachySocialPool.authenticate()
//     .then(() => {
//         console.log('Mysql Connection has been established successfully for cachySocialPool.');
//     })
//     .catch(err => {
//         console.log('Unable to connect to the cachySocialPool database: ', err);
//         throw new Error('mysql error: Connection Failure');
//     })
cachyPostgresPool.connect().then(client => {
    console.log('Postgres Connection has been established successfully for cachyPostgresPool.');
})
// cachyPostgresPoolCorturn.connect().then(client => {
//     console.log('Postgres Connection has been established successfully for cachyPostgresPool.');
// })
//     .catch(err => {
//         console.log('Unable to connect to the cachyPostgresPool database: ', err);
//         throw new Error('mysql error: Connection Failure');
//     })
// console.log("cachyPool",cachyPool);
// console.log("cachyPool",cachySocialPool)
// console.log("cachyPostgresPool",cachyPostgresPool)

// console.log("cachyPostgresPoolSequelize",cachyPostgresPoolSequelize)
// console.log("cachyPostgresPoolCorturn",cachyPostgresPoolCorturn)
// console.log("cachyPostgresPoolCorturnSequelize",cachyPostgresPoolCorturnSequelize)
// let query1 = `SELECT * FROM pending_accounts WHERE number = '+911000001000'`
// console.log("query",query1)
// let UUID = cachyPostgresPool.query(query1);

// UUID.then(function(result){

// //   console.log("UUID",result.rows[0].uuid)

//       console.log("result",result) // "Some User token"
//    })



module.exports = {
    cachyPostgresPool,
    cachyPostgresPoolSequelize,
    cachyPostgresPoolCorturn,
    cachyPostgresPoolCorturnSequelize
};