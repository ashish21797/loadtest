// import http from "k6/http"

// export let option ={
//     insecureSkipTLSVerify: true,
//     noConnectionReuse: false,
//     vus:1,
//     duration:'1m'
// };

// export default ()=> {
//     http.get('https://cachy.com/feed');
//     sleep(1);
// };
import http from 'k6/http';
import { sleep } from 'k6';

// init
export let options = {
    insecureSkipTLSVerify: true,
    noConnectionReuse: false,
    stages: [

        { duration: '1m', target: 100 }, // below normal load
        
        { duration: '20s', target: 100 },
        
        { duration: '5s', target: 200}, // normal load
        
        { duration: '10s', target: 200 },
        
        { duration: '15s', target: 300 }, // around the breaking point
        
        { duration: '30s', target: 300 },
        
        { duration: '20s', target: 400 }, // beyond the breaking point
        
        { duration: '40s', target: 400 },
        
        { duration: '5s', target: 0 }, // scale down. Recovery stage.
    ]        
};

// vu script
export default function () {
  const vars = {}
  let response
  let res = http.put(
    'https://socialdev.cachy.com/cachy/v1/comment',
    `{"postId":"${vars['postId1']}","comment":"wonderfull post for load testing"}`,
    {
      headers: {
        accept: 'application/json, text/plain, */*',
        authorization:
          'Basic YjBmMTVjMjUtNjJmZS00NGQ1LTg2ZGUtYzZlN2IwMDA1YTI3OmIwZjE1YzI1LTYyZmUtNDRkNS04NmRlLWM2ZTdiMDAwNWEyNzoxNjYxNzY4Nzg0OjgzNjZjNjhmODEzZmJhYjM4ZjY4',
        'content-type': 'application/json',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Linux"',
      },
    }
  )

  response = http.options('https://socialdev.cachy.com/cachy/v1/comment', null, {
    headers: {
      accept: '*/*',
      'access-control-request-headers': 'authorization,content-type',
      'access-control-request-method': 'PUT',
      origin: 'https://cachy.com',
      'sec-fetch-mode': 'cors',
    },
  })
  console.log(res.status);
  
  sleep(5);
}
