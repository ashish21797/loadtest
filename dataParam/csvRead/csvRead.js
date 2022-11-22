import { SharedArray } from "k6/data";
import http from "k6/http";
import papaparse from "https://jslib.k6.io/papaparse/5.1.1/index.js";
import encoding from 'k6/encoding';

// init
export let options = {
    vus: 5,
    duration: '5s',
    iterations: 5,
};

const  csvReadCredentials = new SharedArray("credentials", function() {
    return papaparse.parse(open('./credentials.csv'), {header: true}).data; // returning array
});

const  csvReadPost_id = new SharedArray("credentials", function() {
  return papaparse.parse(open('./post_id.csv'), {header: true}).data; // returning array
});

export default function main(){
    // Looping through the credentials
    // for (let data of  csvReadCredentials){
    //     console.log("username",JSON.stringify(data['username']));
    //     console.log("password",JSON.stringify(data['password']));
    // }

    //Random credentials
    // var randomCredentials =  csvReadCredentials[Math.floor(Math.random() *  csvReadCredentials.length)];
    // console.log(randomCredentials['username']);
    // console.log(randomCredentials['password']);

    var Post_id =  csvReadPost_id[Math.floor(Math.random() *  csvReadPost_id.length)]['postId'];


    var username =  csvReadCredentials[Math.floor(Math.random() *  csvReadCredentials.length)]['username'];
    var password =  csvReadCredentials[Math.floor(Math.random() *  csvReadCredentials.length)]['password'];

    // Generate base64 encoded credentials
    var toBeEncoded = username + ':' + password;
    var encodedString = encoding.b64encode(toBeEncoded);
console.log("encodedString",encodedString)
    // console.log(encodedString);

    // let params = {
    //     headers : {
    //     "Authorization": "Basic " + encodedString,
    //     "X-Requested-With": "XMLHttpRequest"
    //     }
    // };

    http.put(
        'https://socialdev.cachy.com/cachy/v1/comment',
        `{"postId":${Post_id},"comment":"wonderfull post for load testing"}`,
        {
          headers: {
            accept: 'application/json, text/plain, */*',
            authorization:
              'Basic' + encodedString,
            'content-type': 'application/json',
            'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )    
};

