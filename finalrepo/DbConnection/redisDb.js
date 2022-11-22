/**
 * Created by yogesh on 8/31/18.
 */
 "use strict";


 var redis = require('redis');
 var config =  {
    host:process.env.REDIS_HOST,
    port:process.env.REDIS_PORT
}
 const bluebird = require('bluebird');
 
 bluebird.promisifyAll(redis.RedisClient.prototype);
 bluebird.promisifyAll(redis.Multi.prototype);
 
 function RedisClient() {
     if(config && config.host && config.port)
     console.log(config)
     console.log(config.host)
     console.log(config.port)
         return redis.createClient({
             host : config.host,  
             port: config.port,
             // no_ready_check: true,
             //auth_pass: config.password,                                                                                                                                                           
         });
     return redis.createClient();
 }
 
 var RedisClient = new RedisClient();
 
 RedisClient.on('error', function (err) {
     console.log('REDIS: Error ' + err);
 });
 
 RedisClient.on('ready', function() {
     console.log('REDIS is now connected');
 });
 
 module.exports = RedisClient;
 