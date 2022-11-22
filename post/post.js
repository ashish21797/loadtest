// Creator: k6 Browser Recorder 0.6.2

import { sleep, group } from 'k6'
import http from 'k6/http'

import jsonpath from 'https://jslib.k6.io/jsonpath/1.0.2/index.js'

export const options = {
    stages: [
      { duration: '1m', target: 10 },
      { duration: '1m', target: 20 },
      { duration: '1m', target: 0 },
    ],
    thresholds: { http_req_duration: ['avg<100', 'p(95)<200'] },
    noConnectionReuse: true,
    userAgent: 'MyK6UserAgentString/1.0',
  };

export default function main() {
  let response

  const vars = {}

  group('page_1 - feed', function () {                                    // open feed section
   
  })
}