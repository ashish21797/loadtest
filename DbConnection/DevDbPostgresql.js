'use strict';
const Sequelize = require('sequelize');
// const config = require("../conf/dbconfig").development;
// const chalk = require('chalk');
const Pool = require('pg').Pool
require('dotenv').config()


const cachyPool = new Sequelize(process.env.MSDB_DATABASE1_DEV, process.env.MSDB_NAME_DEV,process.env.MSDB_PASS_DEV, {
    //timezone: '+05:30', //here you can pass timezone
    host: process.env.MSDB_HOST_DEV,
    dialect: 'mariadb',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});
// console.log("cachyPool",cachyPool)


const cachySocialPool = new Sequelize(process.env.MSDB_DATABASE2_DEV, process.env.MSDB_NAME_DEV,process.env.MSDB_PASS_DEV, {
    // timezone: '+05:30', //here you can pass timezone
    host: process.env.MSDB_HOST_DEV,
    dialect: 'mariadb',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

// console.log("cachySocialPool",cachySocialPool)
const cachyPostgresPoolSequelize = new Sequelize(process.env.PGDB_DATABASE1_DEV, process.env.PGDB_USER_DEV,
    process.env.PGDB_PASSWORD_DEV, {
    // timezone: '+05:30', //here you can pass timezone
    host: process.env.PGDB_HOST_DEV,
    dialect: 'postgres',
    pool: {
        max: 200,
        min: 0,
        idle: 10000
    }
});
// console.log("cachyPostgresPoolSequelize",cachyPostgresPoolSequelize)

const cachyPostgresPoolCorturnSequelize = new Sequelize(process.env.PGDB_DATABASE2_DEV, process.env.PGDB_USER_DEV,
    process.env.PGDB_PASSWORD_DEV, {
    // timezone: '+05:30', //here you can pass timezone
    host: process.env.PGDB_HOST_DEV,
    dialect: 'postgres',
    pool: {
        max: 200,
        min: 0,
        idle: 10000
    }
});
// console.log("cachyPostgresPoolCorturnSequelize",cachyPostgresPoolCorturnSequelize)


const cachyPostgresPool = new Pool({
    user: process.env.PGDB_USER_DEV,
    host: process.env.PGDB_HOST_DEV,
    database: process.env.PGDB_DATABASE1_DEV,
    password: process.env.PGDB_PASSWORD_DEV,
    port: process.env.PGDB_PORT_DEV,
    max: 200,
})
// console.log("cachyPostgresPool",cachyPostgresPool)

const cachyPostgresPoolCorturn = new Pool({
    user: process.env.PGDB_USER_DEV,
    host: process.env.PGDB_HOST_DEV,
    database: process.env.PGDB_DATABASE2,
    password: process.env.PGDB_PASSWORD_DEV,
    port: process.env.PGDB_PORT_DEV,
    max: 200,
})
// console.log("cachyPostgresPoolCorturn",cachyPostgresPoolCorturn)


cachyPool.authenticate()
    .then(() => {
        console.log('Mysql Connection has been established successfully for cachyPool.');
    })
    .catch(err => {
        console.log(chalk.red('Unable to connect to the cachyPool database: ', err));
        throw new Error('mysql error: Connection Failure');
    })

cachySocialPool.authenticate()
    .then(() => {
        console.log('Mysql Connection has been established successfully for cachySocialPool.');
    })
    .catch(err => {
        console.log('Unable to connect to the cachySocialPool database: ', err);
        throw new Error('mysql error: Connection Failure');
    })
cachyPostgresPool.connect().then(client => {
    console.log('Postgres Connection has been established successfully for cachyPostgresPool.');
})
cachyPostgresPoolCorturn.connect().then(client => {
    console.log('Postgres Connection has been established successfully for cachyPostgresPoolCorturn.');
})
    .catch(err => {
        console.log('Unable to connect to the cachyPostgresPool database: ', err);
        throw new Error('mysql error: Connection Failure');
    })

module.exports = {
    cachyPool,
    cachySocialPool,
    cachyPostgresPool,
    cachyPostgresPoolSequelize,
    cachyPostgresPoolCorturn,
    cachyPostgresPoolCorturnSequelize

};