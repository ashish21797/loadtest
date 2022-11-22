// const mongo = require('./DbConnection/mongoose');
// const DEVpostgres = require('./DbConnection/DevDbPostgresql');
//const QApostgres = require('./DbConnection/QADbPostgresql');
const cachyPostgres = require("./DbConnection/QADbPostgresql");
//const cachyPostgres = require("./DbConnection/DevDbPostgresql");
const fs = require('fs');

const axios = require('axios').default;



var defaultConstructorArray = new Array();
var temp = 0;


function sleep(ms) {
    return new Promise(res => setTimeout(res, ms));
}
const getData = async () => {
    try {

        let query1 = `select a.number from accounts a inner join profiles p on a.uuid=p.uuid`
        let numbers = await cachyPostgres.cachyPostgresPool.query(query1)
        console.log("numbers", numbers.rows[0].number)

        for (let index = 0; index < numbers.rowCount; index++){

            await sleep(3000);

            let authkey = 'bfef0bda53d40eb5d7aa0da0966407c2'

            let query2 = `SELECT * FROM "accounts" WHERE "number" = '${numbers.rows[index].number}'`
            console.log("query2",query2)
            let UUID = await cachyPostgres.cachyPostgresPool.query(query2)
            console.log("UUID", UUID.rows[0].uuid)

            let finalUUID = UUID.rows[0].uuid;
            let countryCode = UUID.rows[0].country_code;
            const credential2 = finalUUID + ':' + authkey;
            console.log("credential2", finalUUID);
            const encoded2 = Buffer.from(credential2, 'utf8').toString('base64');
            console.log("encoded2", encoded2);

            let query3 = `SELECT * FROM "profiles" WHERE "uuid" = '${finalUUID}'`
            // console.log("query3",query3)
            let Gender = await cachyPostgres.cachyPostgresPool.query(query3)
            // console.log("Gender", Gender.rows[0].gender);
            let final_Gender = Gender.rows[0].gender

            await sleep(3000)



            async function status() {
                let response = await axios.get(
                    `https://cachyserver.cachy.com/cachy/v1/storage/auth`,
                    {
                        headers: {
                            "Authorization": `Basic ${encoded2}`
                        }
                    }
                );
                return response.data;
            } status().then(async (data) => {

                var username = data.username
                var password = data.password
                let credential3 = username + ':' + password;

                const encoded3 = Buffer.from(credential3, 'utf8').toString('base64');

                console.log("encoded3", encoded3)

                let data1 = {
                    "encoded3": encoded3
                };

                defaultConstructorArray.push(data1);

                var temp = 0;
                while (temp < defaultConstructorArray.length) {
                    console.log("Array element of index defaultConstructorArray[" + temp + "] is :" + defaultConstructorArray[temp]);
                    temp++;
                }
                console.log("defaultConstructorArray.length", defaultConstructorArray.length)


                if (defaultConstructorArray.length == 1000) {

                    console.log("defaultConstructorArray after 10 records"  + defaultConstructorArray);

                    fs.writeFileSync(__dirname + '/db/auth.json', JSON.stringify(defaultConstructorArray));

                }
                return

            }).catch(function (error) {
                console.log(error)
            });
        }
        return
    } catch (e) {
        return e
    }
}
getData();


// console.log(defaultConstructorArray)
