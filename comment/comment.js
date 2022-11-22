// Creator: k6 Browser Recorder 0.6.2

import { sleep, group } from 'k6'
import http from 'k6/http'

import jsonpath from 'https://jslib.k6.io/jsonpath/1.0.2/index.js'

export const options = { vus: 10, duration: '5m' }

export default function main() {
  let response

  const vars = {}

  group('page_1 - https://cachy.com/nikhil', function () {
    response = http.get('https://storage.googleapis.com/cachy-dev-bucket/ppmvc8AZ4rLBERO4Uzdv', {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Linux"',
      },
    })

    response = http.get(
      'https://cachyserverdev.cachy.com/cachy/v1/comment/62fb41e645f4784b01b274a0',
      {
        headers: {
          accept: 'application/json, text/plain, */*',
          authorization:
            'Basic YjBmMTVjMjUtNjJmZS00NGQ1LTg2ZGUtYzZlN2IwMDA1YTI3OlZ2Zzg2dnk0QkduL1pBQ3NkaVk5cFRDdQ==',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )

    vars['postId1'] = jsonpath.query(response.json(), '$.data[19].postId')[0]

    response = http.get(
      'https://cachyserverdev.cachy.com/cachy/v1/views/62fb41e645f4784b01b274a0?page=1',
      {
        headers: {
          accept: 'application/json, text/plain, */*',
          authorization:
            'Basic YjBmMTVjMjUtNjJmZS00NGQ1LTg2ZGUtYzZlN2IwMDA1YTI3OlZ2Zzg2dnk0QkduL1pBQ3NkaVk5cFRDdQ==',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )
    sleep(75.6)

    response = http.put(
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
    ) .check(res, {
      'working fines': (r) => r.status === 200 && r.body.indexOf('successfully authorized') !== -1,
    });

    response = http.options('https://socialdev.cachy.com/cachy/v1/comment', null, {
      headers: {
        accept: '*/*',
        'access-control-request-headers': 'authorization,content-type',
        'access-control-request-method': 'PUT',
        origin: 'https://cachy.com',
        'sec-fetch-mode': 'cors',
      },
    })
    sleep(1)

    response = http.get(
      'https://cachyserverdev.cachy.com/cachy/v1/comment/62fb41e645f4784b01b274a0',
      {
        headers: {
          accept: 'application/json, text/plain, */*',
          authorization:
            'Basic YjBmMTVjMjUtNjJmZS00NGQ1LTg2ZGUtYzZlN2IwMDA1YTI3OlZ2Zzg2dnk0QkduL1pBQ3NkaVk5cFRDdQ==',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )
  })
}