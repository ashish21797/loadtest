
const mongo = require('./DbConnection/mongoose');
// const DEVpostgres = require('./DbConnection/DevDbPostgresql');
// const QApostgres = require('./DbConnection/QADbPostgresql');
//const cachyPostgres = require("./DbConnection/QADbPostgresql");
const cachyPostgres = require("./DbConnection/DevDbPostgresql");

const axios = require('axios').default;
console.log("getdata")






function sleep(ms) {
    return new Promise(res => setTimeout(res, ms));
}
const getData = async () => {
    try {

        for (let index = 1000000160; index < 1000000170; index++) {




            await sleep(3000);



            let authkey = 'bfef0bda53d40eb5d7aa0da0966407c2'

            let query2 = `SELECT * FROM "accounts" WHERE "number" = '+91${index}'`
            let UUID = await cachyPostgres.cachyPostgresPool.query(query2)
            console.log("UUID", UUID.rows[0].uuid)

            let finalUUID = UUID.rows[0].uuid;
            let countryCode = UUID.rows[0].country_code;
            const credential2 = finalUUID + ':' + authkey;

// fb893709-68da-49f6-86a1-077c5775020a:bfef0bda53d40eb5d7aa0da0966407c2


            console.log("credential2", finalUUID);
            const encoded2 = Buffer.from(credential2, 'utf8').toString('base64');
            console.log("encoded2", encoded2);



            let query3 = `SELECT * FROM "profiles" WHERE "uuid" = '${finalUUID}'`
            // console.log("query3",query3)
            let Gender = await cachyPostgres.cachyPostgresPool.query(query3)
            // console.log("Gender", Gender.rows[0].gender);
            let final_Gender = Gender.rows[0].gender

            await sleep(3000)


            const apiCall2 = await axios.get(`https://cachyserverqa.cachy.com/cachy/v1/wallet/balance`, {
                headers: {
                    "Authorization": `Basic ${encoded2}`
                }
            }).then(function (response) {


                console.log(response.data);


                return response;

            })
                .catch(function (error) {
                    console.log(error);
                });

            deviceName
             let matching_Group = apiCall2.data.matchingGroup

            async function status() {
                let response = await axios.get(
                    `https://cachyserverqa.cachy.com/cachy/v1/storage/auth`,
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
                    "gender": final_Gender,
                    "language": "en",
                    "number": "+91" + [index],
                    "group": matching_Group,
                    "filterEnable": false,
                    "categories": [2, 3, 4, 1],
                    "keywords": [2, 3, 4, 5],
                    "filter": { "country": "", "group": "", "gender": 0 },
                    "country": countryCode
                };
                console.log("data1", data1)
                await sleep(3000);



                await axios.put(`http://matchingqa.cachy.com/cachy/v1/matching`, data1, {
                    headers: {
                        "User-Agent": "Signal-iOS/1.0.0.6 iOS/15.5",
                        "Accept-Language": "en;q=1",
                        "Access-Control-Allow-Origin": "*",
                        "Content-type": "Application/json",
                        "Authorization": `Basic ${encoded3}`
                    }
                }
                ).then(function (response) {
                    console.log(response);
                })
                    .catch(function (error) {
                        console.log(error)
                    });

            }).catch(function (error) {
                console.log(error)
            });

            await sleep(3000);

        }
        return apiCall9
    } catch (e) {
        return e
    }
}
getData();