const { cachyPostgresPool } = require("../DbConnection/DevDbPostgresql")

const axios = require('axios');


const getData = async () => {
    try {

        for (let index = 1000000000; index < 1000001000; index++) {



            const apiCall1 = await axios.get(`https://cachyserver.cachy.com/cachy/v1/accounts/apn/preauth/0000000000000000000000000000000000000000000000000000000000000000/+91${index}/A1F40B02E56E4D188E138FB95B5350/Simulator_iPhone_11_Pro_Max/IN?voip=false`);


            const apiCall2 = await axios.get(`https://cachyserver.cachy.com/cachy/v1/accounts/sms/code/+91${index}?client=ios`);

            const apiCall3 = await axios.get(`http://cachyserver.cachy.com/cachy/v1/accounts/sms/code/+91${index}?client=ios&captcha=03AIIukzhEXF92hkmamMii9iNyCorHk9aZ4SXPr-A685kxEEGnMlUz7qy_oVBbZafnPEsVL70JbYW074oW5TFXnxJarNQvTez4kPqfu6SX_sw1Y6OAj65kgEnxD_42R4KEp7-BgAS37mQ8Zc_WIFwXi5fiiLtLWpn2BUpm98densY2rX3yDBpqPifTXVBSfRW4Or1IAWUViVbhn6NIdf9Q6smnmChovEJGIoXP2LGoOw834adFnU-EyPS8UoNdnVlNNpGIhYTnFf0mUu7y0ZhuuxIgBhF_Rg4c3CfL0lhjTHu2T4mnqCdDFKaRrTjm8bGWIyuDzze80LPT7-_AcPZ3zMC88-q8u6PtCgfbtVFwWKtbuU8b3ACLd4BWZscEx24p1VQxAZsFM4jFGpYkMmUc4pUAYzl5iIq7bNRrn9-B4EaiRPkpuJ-vSOAeMME1cN0mypLbAHnOJdTSiQeES1Fh1Rf5VKblAGRgZmkNQWhiqKmVPWzAvvzNMoY1G0X4qIEmKuP4N8ONRTTu`);









            let query1 = `SELECT verification_code FROM "pending_accounts" WHERE "number" = +91${index}`

            let otp = await cachyPostgresPool.query(query1);

            let username = `+91${index}`
            let authkey = 'bfef0bda53d40eb5d7aa0da0966407c2'

            let credentials = username + ':' + authkey;

            const encoded = Buffer.from(credentials, 'utf8').toString('base64')

            const authorization = 'basic ' + encoded;

            const apiCall4 = await axios.put(`http://cachyserver.cachy.com/cachy/v1/accounts/code/${otp}?transfer=false`, {
                headers: {
                    Authorization: authorization,
                    'Content-Type': 'application/json'
                }
            });

            console.log("apiCall4",apiCall4)






            // console.log(apiCall1)      //const apiCall2 = await axios.get(SOME_URL/apiCall1.data.id)
            let query2 = `SELECT UUID FROM "accounts" WHERE "number" = +91${index}`

            let UUID = await cachyPostgresPool.query(query1);
            let credential2 = UUID + ':' + authkey;
            const encoded2 = Buffer.from(credential2, 'utf8').toString('base64')
            const authorization2 = 'basic ' + encoded2;
            let data = { "unidentifiedAccessKey": "VII7Fdw0mTCt85wfysv9NQ==", "AuthKey": "bfef0bda53d40eb5d7aa0da0966407c2", "capabilities": { "transfer": true, "gv2-3": true, "gv1-migration": true, "gv2-2": true, "gv2": true, "announcementGroup": true }, "unrestrictedUnidentifiedAccess": false, "registrationId": "11006", "fetchesMessages": false, "voice": true, "discoverableByPhoneNumber": false, "video": true, "isLogin": false }

            const apiCall5 = await axios.put('http://cachyserver.cachy.comc/cachy/v1/accounts/attributes/', data, {
                headers: {
                    Authorization: authorization2,
                    'Content-Type': 'application/json'
                }
            });



            const apiCall6 = await axios.put('http://cachyserver.cachy.comc/cachy/v1/accounts/apn', {
                headers: {
                    Authorization: authorization2,
                    'Content-Type': 'application/json'
                }
            });


            let data2 = {
                "profileKey": "HuQYcZ+763XEdTuKYc9TvRD2CIayNe3IVjWJLJE76AM=",
                "identityKey": "BfGc6QO6mUmN2q7fWt52FczL9GeNAs4DzDWW85eF6Soq",
                "preKeys": [{
                    "keyId": 10460170,
                    "publicKey": "BcUnxu62MrRz4T4mU6CRVNbX2reey0sa9Hy36BeWgrsG"
                },
                { "keyId": 10460171, "publicKey": "BSp4Z5kAvQH5lRIDnIpWS2hUPvUEhq9xAmXa2bF77716" },
                { "keyId": 10460172, "publicKey": "BYK17xANlPSm73gYJ0x18VdVvTzLvTcWAp2eOhG85Zp+" },
                { "keyId": 10460173, "publicKey": "BVjP9QoSamW2oFyRVPlLXDcfaeJKKdWltCzgh7kAoml2" },
                { "keyId": 10460174, "publicKey": "Bd6Ag\/YRQw9BeU7XyuFCkAzA8mDpjw6C91JB5Oso3pI7" },
                { "keyId": 10460175, "publicKey": "BQBHrKX4ZCqEZL+fF7JJwgxqNMwJ0494VufBfY4pPVVa" },
                { "keyId": 10460176, "publicKey": "BdCmNSCLkiJLxwHnnC5JeewQlPcSEmBEDe3EmQDP1q4P" },
                { "keyId": 10460177, "publicKey": "BXpn8q4a+0LIOU3gumWThnkaMhb\/z1sFvsU\/1QGgOOdX" },
                { "keyId": 10460178, "publicKey": "BaP6yJMoy\/HjnQ3C3eRwWS0aZAAuhGUzp3Yxp3tP5n1Q" },
                { "keyId": 10460179, "publicKey": "BWWsGyowgzuDyd4HmYvtbMo++lBaY7OdhiMcBb39YvBa" },
                { "keyId": 10460180, "publicKey": "BcIF4uhRTOoKluTWJxiD3eex+ODFajT2zklHPeglY2Y5" },
                { "keyId": 10460181, "publicKey": "BZG+M4YJ1OLCCd5ByIiwM24OnY58MNM6FDSI3f2wWGtM" },
                { "keyId": 10460182, "publicKey": "BVL8mGJW\/SqWPpQWdrgGOv5QHeBbXISZDPt3VoeCGLRb" },
                { "keyId": 10460183, "publicKey": "Bc+8SGwqVIPsiq58a4LuY7Oto9jKIsu+1KKkXQz79YQe" },
                { "keyId": 10460184, "publicKey": "BVX61Ux4jNUPx+i8b1lv+WXSDNYwU0plu\/2AF87qmEhD" },
                { "keyId": 10460185, "publicKey": "BXtNS8wmrk3\/Mgbth+Wh9c7CUz+dpeLcNMLiWWXxPugU" },
                { "keyId": 10460186, "publicKey": "BRjjbXhP3vTk9f7RYc4cjTVnYdAd55B5isPeyAch8qZ+" },
                { "keyId": 10460187, "publicKey": "BYjIPyxamRlKO6UJ62tEwYUD0dtVfKc9eELv2TAcHmJT" },
                { "keyId": 10460188, "publicKey": "Bcjet\/EtH1x5uU9Kw0T7FpmG6vEW\/7iTUjPixqXADz8w" },
                { "keyId": 10460189, "publicKey": "BWLoK9JH6UvkT\/YO9qx8HeKsD+WFrXdwMHvBlMybi0Z8" },
                { "keyId": 10460190, "publicKey": "Bc8\/406BgojfqX1wzfr8+03zl+56WKrCPzXUY4fyj\/IO" },
                { "keyId": 10460191, "publicKey": "BRDcsbmKgEt6pBKVzvhD3h4wbIdN756jgU0bl1\/ghpNm" },
                { "keyId": 10460192, "publicKey": "BWcAcjgnWtT\/HuU\/Veg9Z9uKd9N5ls6cnHXrX3HM9kpm" },
                { "keyId": 10460193, "publicKey": "BUiDJ2mpeayi65woVoRSVucobHQly\/WiapLtOfakBfh5" },
                { "keyId": 10460194, "publicKey": "BcE5CfZmzOXH+jnqNqfKdMDsSv+nhDxUHL9ZFMhFJm8t" },
                { "keyId": 10460195, "publicKey": "BZqG5t7nIk4HZ5t9MczNbmlqG0xrFOuSexfnV0VebDRz" },
                { "keyId": 10460196, "publicKey": "BRg6Scz6X7QRC4qSWM2OpwDnVgKphqs47mOON5RhKQsK" },
                { "keyId": 10460197, "publicKey": "BSmLvTYnu0StYNakBjRSsPXjlbcj6nbLTl5Eg15jvP5J" },
                { "keyId": 10460198, "publicKey": "BdzLy++a\/6FvPtTFivPlJ95TAAFbqlWr7Ar9Mlf9QZVb" },
                { "keyId": 10460199, "publicKey": "BWXT+ASPDxR5FkfpwII2umWMUYe7wtV3shtylTLm9TYv" },
                { "keyId": 10460200, "publicKey": "BQ5kMH7P1vwb8RwiOQqvDYkiY9jGjcsC7mgs7MxZNaxU" },
                { "keyId": 10460201, "publicKey": "BTNL6MXB+KQhcWwqPvWgE1PY8X6yNL4kYVGxZ8adig1S" },
                { "keyId": 10460202, "publicKey": "BRDuCyd+w1aqM0ymEtD67vJLOTMwumteZfxxfdteu6pf" },
                { "keyId": 10460203, "publicKey": "BbxrUbUOCO6Y1svvsBBqRFpVudH6yqLcdafEP3AlWodq" },
                { "keyId": 10460204, "publicKey": "BTuHSrbGXDsjovcpy85boos5ITpuTzj6kMUgMTVF7xkQ" },
                { "keyId": 10460205, "publicKey": "BQYAGbH0eNSqbGpivDwiX1rQjH7G+SHH9kZHh6CEkVRx" },
                { "keyId": 10460206, "publicKey": "BQQHxWl\/Ki+SRueLlYA2bMl8x\/8KRd17f76Rbo40bVYs" },
                { "keyId": 10460207, "publicKey": "BeLxMOAFXIT4w0KJ5Gh4ByzYrSSiW8UwNzJR6TEjyA0X" },
                { "keyId": 10460208, "publicKey": "BcrJyOSIkgTFst9+6eXf59BbKs6PSeKTYFVRbQpOyVUi" },
                { "keyId": 10460209, "publicKey": "BW2pKadOTWmy3sCz+XZoaZcsOQspljhsBLio7solM8Ms" },
                { "keyId": 10460210, "publicKey": "BYbA6VQ9ffl6GF3vVjSkb+vgnPWpoyGRgbLF2sJ9n+Ac" },
                { "keyId": 10460211, "publicKey": "BRuIR8MrvjDMOBFtQlcZ32j+NgTBcQVHT92LFoJM9edb" },
                { "keyId": 10460212, "publicKey": "BTlma1WmQKXOX25FCLFYTiUKa86m60abyhx0R5plHwFA" },
                { "keyId": 10460213, "publicKey": "BXFYmFGuULIxGHhEfU8JKXJ1k\/BetD7BzDdtlk+F9yxH" },
                { "keyId": 10460214, "publicKey": "BbBASeY97uRIl90FUweWKlhN5ZT6TERkxxdK+DVSl\/p2" },
                { "keyId": 10460215, "publicKey": "BWKStMr6i30gd7Idz+N5KBdJlSA9yBMkc2TA2NLxZjN2" },
                { "keyId": 10460216, "publicKey": "BVEDxXusBokcz88I3yZm2riIglVHIoT5wtQOSLgFRb94" },
                { "keyId": 10460217, "publicKey": "Bayx\/4L94yFuwfJryp8FFCpV0ZJLMWA12k17iT9y0ix0" },
                { "keyId": 10460218, "publicKey": "BeuK4KOcxEvASF+cfjl1JVmXPhl5c8g6f8a17S0FUhYs" },
                { "keyId": 10460219, "publicKey": "BZuqv+Odocc1kw0JFJuvJfl69LCK6zGaexduRQTZk0kc" },
                { "keyId": 10460220, "publicKey": "BdelQGwSqjL4BfXdKK3oyvnCl7+Ug\/Tt31aPmgGo15cw" },
                { "keyId": 10460221, "publicKey": "BUc\/JtGx7g4Tcu26XlpKngcc\/u3yCRllX\/fwGdFMrNJD" },
                { "keyId": 10460222, "publicKey": "Bdx+v9zDqJluAYP8ACXUDGMYX4Hu+CjchFEhZHh1LWMP" },
                { "keyId": 10460223, "publicKey": "BSlzMSDqBUIlP7HABlCxLz3wC1DMY3czmdTjnxCcCUwf" },
                { "keyId": 10460224, "publicKey": "BSRtcPF4qwfcYZG0pdzloX3+PLbkFEbGwra37Y0\/ilds" }, { "keyId": 10460225, "publicKey": "BeG\/9MzebwlUFP\/u9AFqi7qxYY\/c5vNiELHqPeSgeJsa" },
                { "keyId": 10460226, "publicKey": "BeHpVI9xw8UEarJ5sDRjFoDNDlLBPQUGRJeelyZWk\/dB" }, { "keyId": 10460227, "publicKey": "BYyR4eGMsslitUuDUMNnzhcjhzHS6xFtsNyKPAZlo95b" },
                { "keyId": 10460228, "publicKey": "BXxf4UzWnXPPL1veZ0igBeIrU4TLurO\/k0HsYYTv+mhy" }, { "keyId": 10460229, "publicKey": "BUB4GGRlUn0ikgI+hbYvNnmiOQFk4LoQj4z8pK6ASilv" },
                { "keyId": 10460230, "publicKey": "BTNClv3CvuYfICPOOqHYx+w7uzPDsDW0+q6B4G08Kbga" }, { "keyId": 10460231, "publicKey": "BU2dasWYh5w7Tyf9xZaXOsal+nYlpk3cBk8V6qupMQI8" },
                { "keyId": 10460232, "publicKey": "BQp51MCI3VVVKvEs209dWbGLRpIH6AKP6kMp0UYIsqID" }, { "keyId": 10460233, "publicKey": "BZedYSgQc3RHn9TrGkaZ3hjTtLmpP6G8If60Y0Yaj9QK" }, { "keyId": 10460234, "publicKey": "BdqpZ3TpB9lWVRGi+5VHNjwllQNe4qiFrRU0zaUhm\/BL" }, { "keyId": 10460235, "publicKey": "BbI7AZxusFkVgle37mNhJRxvpvklYQ\/2B5ELvrH9rgEJ" }, { "keyId": 10460236, "publicKey": "BfxFjjDt0hInveL4FnZNIeroH9NWDF2ZuV3QBZ2Yu\/Vl" }, { "keyId": 10460237, "publicKey": "BThkMEJW1XreLtKqpMs45Kl\/nNVh8ftnbK\/UgYn9nWdJ" }, { "keyId": 10460238, "publicKey": "BfUULIG+pa538NQIuMObp8S4SsMEnXhhK0s2qHO1oEFS" }, { "keyId": 10460239, "publicKey": "BY63\/IKndveyzYl85MWD\/GxV3sCls0a63olKECH0b3Nz" }, { "keyId": 10460240, "publicKey": "BYnM355zKjHmGhXWHWRReDY1DFn\/5DyvYpvYz62Pv8xy" }, { "keyId": 10460241, "publicKey": "BTwD1JoVAil+NsApxLcA3+nu9k5S+ojsfASpW6T3PR9B" },
                { "keyId": 10460242, "publicKey": "BWQOE84rcW+9K37FPb1Lf6AmSvWh5i2h5eKOC4j9P5YW" }, { "keyId": 10460243, "publicKey": "BXfvkuhQ4Z8CAbF9IbyA9rYDBHZLJCdYGOg4n2SGJpkE" }, { "keyId": 10460244, "publicKey": "BYWGghFjEYYbszMTDE0TcquE2BlQ27YrnMWGyZPa8GgZ" }, { "keyId": 10460245, "publicKey": "BVDz1hnvEyd\/fLRqr7CHFXn9EZgM3tOGXBcNN7I3vV52" }, { "keyId": 10460246, "publicKey": "BXwzmq\/mjsJbjWbDNvmhxtkYFHlHcmdRcD5DYOSG1IxO" }, { "keyId": 10460247, "publicKey": "BQvnCpTHTcULau4a+I7ZNRhOjE\/JrOcUVw00IcQ3fwMJ" }, { "keyId": 10460248, "publicKey": "BXr+WUB4ShvNFemK3IHg8E\/\/Zh9TNH6Fcr4dlfjHXp1k" }, { "keyId": 10460249, "publicKey": "BUvCcSv5uaxtvD9ZxApV+gMogKNIvLzm3MtRVjsg0xoR" }, { "keyId": 10460250, "publicKey": "BYleMedL1PgxbkhywpIc8pOWxq94hq6y09\/9uvta6DMJ" }, { "keyId": 10460251, "publicKey": "BdY+\/D0TlM0qiJN4COFxokNktaZ4fskc\/VgtQnaLwQoB" },
                { "keyId": 10460252, "publicKey": "BW1ypz4+4SEX3h2+eDY\/9vz98sphelgkj646C3zL8dtr" }, { "keyId": 10460253, "publicKey": "BTA6CclSvoK135FQ6rGDj4QHjSPu1ErzwsUgSJMAbC1k" }, { "keyId": 10460254, "publicKey": "BaLNq+Pl6gTSCW6fRvtoJsZ7oX0MvumJlvaeZWHk1UAm" }, { "keyId": 10460255, "publicKey": "BRg2NP0zf6mteUjYU3FkiIix+kXyf8oHUZFo1hoIDDlr" }, { "keyId": 10460256, "publicKey": "BRTUsGoFGcQDu6NLkrx3UEYdTwvKW3d858f0fmp7OXVA" }, { "keyId": 10460257, "publicKey": "BaMP+xGQw8RN6uJtmvliLVDEw3zzpZGC580F4BxcPLJ1" }, { "keyId": 10460258, "publicKey": "BXx9dkhW4vBDM6nNxScxDMaU2L\/pVFo5N+D0ut3q5CYn" }, { "keyId": 10460259, "publicKey": "BU2OiUl8d0z5dsZqazI7vlK6XnOmHEJ0DflEGvSEXQ12" }, { "keyId": 10460260, "publicKey": "BY4R0WEvtUbZooKQ4Z58vdy0Bi0Ve1prkdxXXIhenkRE" }, { "keyId": 10460261, "publicKey": "BdQPTeJy9BLqmLYlsRuu49oQh58n44C1cJ3zgV6xerdL" },
                { "keyId": 10460262, "publicKey": "BenyDxvHV8NHGLTjZu5TstcTozNYqgpCfMlpTPmfAZcy" }, { "keyId": 10460263, "publicKey": "BYaFPy2xoUGfNeU6nKf6SatZ2A8HFB9QliPQU+mjiGkj" }, { "keyId": 10460264, "publicKey": "BZUQWXmRareonQcAMQUfXg1O9CBCSwjDh5cnD1ewgbop" }, { "keyId": 10460265, "publicKey": "BXtH6faNqE4YTxBat+Ctl6WCJp32c4AOekDrnHmAoRNB" }, { "keyId": 10460266, "publicKey": "BdzOja8O03s2AsDF+IRoMVOd4XnCpoNzujSCn35uBqhN" }, { "keyId": 10460267, "publicKey": "BQbW3ACHohmQqunz8E\/BYVMWqSuo1A3IK87VZ\/8GK1R\/" }, { "keyId": 10460268, "publicKey": "BY0rkKUKLTelR2FUBEbBlqFB1TmLY1Sj01sY70uxGxw2" }, { "keyId": 10460269, "publicKey": "BfWJndfrH\/fXadJTSt6gUcTfI47RgX+Vs6PX+7M7AcEz" }], "signedPreKey": { "keyId": 746818862, "publicKey": "BWQ2uu6QMFmO2x54mn5PRcXhZL\/eTe3qBErUu8anYCdK", "signature": "59qZC38v\/cFgZP2l22Zra19MGhigdbQmrpjBRxXz10bQp38gcKMVb01rL6iFuvL42zBWDvt8QHUpapIvADHyig==" }
            }

            const apiCall7 = await axios.put('http://cachyserver.cachy.comc/cachy/v2/keys', data2, {
                headers: {
                    Authorization: authorization2,
                    'Content-Type': 'application/json'
                }
            });






            let data3 = {
                "dateOfBirth": "1990-01-01",
                "name": "FaopGbQLvWibgKFbW3E05KzMpiItweBDtnrrZiInC7+hALubGDpSmeXW2MpUcBJ6Zv0NOI49DHfQSjyA3g6+7c+CyJZESqzlv0zRIWoxp3oT",
                "lastName": `testing` + [index], //`Nadia` + (new Date().getTime())
                "firstName": `load` + [index],
                "version": "6a40027605f0e9f9d20f95cd4e46c4bf2fbd703c523224b5a44b41b8c55b5d66",
                "clientName": "CACHYIOS",
                "changeAvatar": false,
                "countryCode": "IN",
                "deviceId": "A1F40B02-E56E-4D18-8E13-8FB95B5350BD",
                "commitment": "ANRXyYiMMSI019CoDH+adsQWN5uzsrhg87T9KMz\\/4U4fjOlruzvT6wNOEEuJwfrm1cy1l5xIB0HyxxVZkpGLJw7UJglhAx8aO32KTRwvFuiTNYbevbyJw2Wm9wRYt22Aag==",
                "avatar": false,
                "deviceName": "Simulator iPhone 11 Pro Max",
                "username": `LD`+[index],
                "password": "5dc8a3b0a34c53eb9526b34c3be79afb5429d7afb2836efb462548779356af3c",
                "email": "",
                "gender": "1",
                "language1": "en"
            };


            const apiCall8 = await axios.put('http://cachyserver.cachy.comc/cachy/v1/profile', data3, {
                headers: {
                    Authorization: authorization2,
                    'Content-Type': 'application/json'
                }
            });

            console.log("apiCall8",apiCall8)

        }
        return apiCall8
    } catch (e) {
        return e
    }
}

getData();