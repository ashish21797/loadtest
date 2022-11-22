//const mongo = require('./DbConnection/mongoose');
// const DEVpostgres = require('./DbConnection/DevDbPostgresql');
//const QApostgres = require('./DbConnection/QADbPostgresql');
const cachyPostgres = require("./DbConnection/QADbPostgresql");
//const cachyPostgres = require("./DbConnection/DevDbPostgresql");

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

        for (let index = 0; index < numbers.rowCount; index++) {

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


            const apiCall2 = await axios.get(`https://${process.env.CACHY_SERVER_HOST}/cachy/v1/wallet/balance`, {
                headers: {
                    "Authorization": `Basic ${encoded2}`
                }
            }).then(function (response) {

                return response;

            })
                .catch(function (error) {
                    console.log(error);
                });


            let matching_Group = apiCall2.data.matchingGroup

            async function status() {
                let response = await axios.get(
                    `https://${process.env.CACHY_SERVER_HOST}/cachy/v1/storage/auth`,
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
                    "number": numbers.rows[index].number,
                    "group": matching_Group,
                    "filterEnable": false,
                    "categories": [2, 3, 4, 1],
                    "keywords": [2, 3, 4, 5],
                    "filter": { "country": "", "group": "", "gender": 0 },
                    "country": countryCode,
                    "encoded3": encoded3
                };
                //   console.log("data1", data1)
                //creating a default Array constructor
                //adding elements to default constructor with push() function
                defaultConstructorArray.push(data1);

                //iterating array elements with while loop
                var temp = 0;
                while (temp < defaultConstructorArray.length) {
                    console.log("Array element of index defaultConstructorArray[" + temp + "] is :" + defaultConstructorArray[temp]);
                    temp++;
                }
                console.log("defaultConstructorArray.length", defaultConstructorArray.length)


                if (defaultConstructorArray.length == 399) {
                    console.log(defaultConstructorArray.length)
                    console.log("if container");
                    for (let i = 0; i < 399; i++) {
                        console.log("for lopp" + i)
                        axios.put(`https://matching.cachy.com/cachy/v1/matching`, {
                            "gender": defaultConstructorArray[i].gender,
                            "language": defaultConstructorArray[i].language,
                            "number": defaultConstructorArray[i].number,
                            "group": defaultConstructorArray[i].group,
                            "filterEnable": false,
                            "categories": [2, 3, 4, 1],
                            "keywords": [2, 3, 4, 5],
                            "filter": { "country": "", "group": "", "gender": 0 },
                            "country": defaultConstructorArray[i].country
                        }, {
                            headers: {
                                "User-Agent": "Signal-iOS/1.0.0.6 iOS/15.5",
                                "Accept-Language": "en;q=1",
                                "Access-Control-Allow-Origin": "*",
                                "Content-type": "Application/json",
                                "Authorization": `Basic ${defaultConstructorArray[i].encoded3}`
                            }
                        }
                        ).then(function (response) {
                            console.log(response);
                            return response

                        })
                            .catch(function (error) {
                                console.log(error)
                            });
                    }
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
