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

  group('page_1 - https://cachy.com/feed', function () {                                    // open feed section
    response = http.put(
      'https://socialqa.cachy.com/cachy/v1/post/addView',                                  // open post and add view
      {
        '63061699492cb27e08d426ca': '',
      },
      { 
        headers: {
          accept: 'application/json, text/plain, */*',
          authorization:
            'Basic N0M4QzRENkItRUQ4Mi00OTRDLUE1MDItODE0QTM4RDc0NTk1OjkxOGUwY2JhNTEwNzY5MmYzMzM5MTE2YzhmZDgzMzkw',
          'content-type': 'application/x-www-form-urlencoded',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )

    response = http.get(
      'https://cachyserverqa.cachy.com/cachy/v1/comment/63061699492cb27e08d426ca',         //get all comment list off that particular post
      {
        headers: {
          accept: 'application/json, text/plain, */*',
          authorization:
            'Basic N0M4QzRENkItRUQ4Mi00OTRDLUE1MDItODE0QTM4RDc0NTk1OjkxOGUwY2JhNTEwNzY5MmYzMzM5MTE2YzhmZDgzMzkw',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )

    vars['postId1'] = jsonpath.query(response.json(), '$.data[3].postId')[0]

    response = http.get(
      'https://cachyserverqa.cachy.com/cachy/v1/views/63061699492cb27e08d426ca?page=1',    //get updated view of that particular post
      {
        headers: {
          accept: 'application/json, text/plain, */*',
          authorization:
            'Basic N0M4QzRENkItRUQ4Mi00OTRDLUE1MDItODE0QTM4RDc0NTk1OjkxOGUwY2JhNTEwNzY5MmYzMzM5MTE2YzhmZDgzMzkw',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )
    sleep(8.1)

    response = http.put(
      'https://socialqa.cachy.com/cachy/v1/like',                                          //like post
      `{"postId":"${vars['postId1']}","isLike":true}`,
      {
        headers: {
          accept: 'application/json, text/plain, */*',
          authorization:
            'Basic N0M4QzRENkItRUQ4Mi00OTRDLUE1MDItODE0QTM4RDc0NTk1OjkxOGUwY2JhNTEwNzY5MmYzMzM5MTE2YzhmZDgzMzkw',
          'content-type': 'application/json',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )



    response = http.put(
      'https://socialqa.cachy.com/cachy/v1/comment',                                       //comment on post
      `{"postId":"${vars['postId1']}","comment":"loadtesting"}`,
      {
        headers: {
          accept: 'application/json, text/plain, */*',
          authorization:
            'Basic N0M4QzRENkItRUQ4Mi00OTRDLUE1MDItODE0QTM4RDc0NTk1OjkxOGUwY2JhNTEwNzY5MmYzMzM5MTE2YzhmZDgzMzkw',
          'content-type': 'application/json',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )

//https://socialqa.cachy.com/cachy/v1/post/share

response = http.put(
  'https://socialqa.cachy.com/cachy/v1/post/share',                                          // set other post as story 
  `{
    "postId": "63061699492cb27e08d426ca",
    "isStory":true
  }`,
  {
    headers: {
      accept: 'application/json, text/plain, */*',
      authorization:
        'Basic N0M4QzRENkItRUQ4Mi00OTRDLUE1MDItODE0QTM4RDc0NTk1OjkxOGUwY2JhNTEwNzY5MmYzMzM5MTE2YzhmZDgzMzkw',
      'content-type': 'application/json',
      'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"Linux"',
    },
  }
)


    response = http.get(
      'https://cachyserverqa.cachy.com/cachy/v1/comment/63061699492cb27e08d426ca',         // updated comment 
      {
        headers: {
          accept: 'application/json, text/plain, */*',
          authorization:
            'Basic N0M4QzRENkItRUQ4Mi00OTRDLUE1MDItODE0QTM4RDc0NTk1OjkxOGUwY2JhNTEwNzY5MmYzMzM5MTE2YzhmZDgzMzkw',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )

    vars['id1'] = jsonpath.query(response.json(), '$.data[0].id')[0]

    vars['postId2'] = jsonpath.query(response.json(), '$.data[4].postId')[0]

    sleep(21.1)

    response = http.get(
        'https://cachyserverqa.cachy.com/cachy/v1/profile/mention?key=rahul', {            //mention || tag  in comment section
      headers: {
        accept: 'application/json, text/plain, */*',
        authorization:
          'Basic N0M4QzRENkItRUQ4Mi00OTRDLUE1MDItODE0QTM4RDc0NTk1OjkxOGUwY2JhNTEwNzY5MmYzMzM5MTE2YzhmZDgzMzkw',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Linux"',
      },
    })

    vars['uuid1'] = jsonpath.query(response.json(), '$.profiles[0].uuid')[0]

    sleep(2.2)


    response = http.put(
      'https://socialqa.cachy.com/cachy/v1/reply',                                         // reply on comment 
      `{"comment":"@rahul nice comment","commentId":"${vars['id1']}","mentions":["${vars['uuid1']}"],"postId":"${vars['postId2']}"}`,
      {
        headers: {
          accept: 'application/json, text/plain, */*',
          authorization:
            'Basic N0M4QzRENkItRUQ4Mi00OTRDLUE1MDItODE0QTM4RDc0NTk1OjkxOGUwY2JhNTEwNzY5MmYzMzM5MTE2YzhmZDgzMzkw',
          'content-type': 'application/json',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )
    sleep(0.5)

    response = http.get(
      'https://cachyserverqa.cachy.com/cachy/v1/comment/63061699492cb27e08d426ca',         // fetch updated comment 
      {
        headers: {
          accept: 'application/json, text/plain, */*',
          authorization:
            'Basic N0M4QzRENkItRUQ4Mi00OTRDLUE1MDItODE0QTM4RDc0NTk1OjkxOGUwY2JhNTEwNzY5MmYzMzM5MTE2YzhmZDgzMzkw',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )
    sleep(4.5)

    response = http.put(
      'https://socialqa.cachy.com/cachy/v1/comment/like',                                  // like comment 
      `{"commentId":"${vars['id1']}","isLike":true,"isReplyLike":false}`,
      {
        headers: {
          accept: 'application/json, text/plain, */*',
          authorization:
            'Basic N0M4QzRENkItRUQ4Mi00OTRDLUE1MDItODE0QTM4RDc0NTk1OjkxOGUwY2JhNTEwNzY5MmYzMzM5MTE2YzhmZDgzMzkw',
          'content-type': 'application/json',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )
    sleep(0.5)

    response = http.get(
      'https://cachyserverqa.cachy.com/cachy/v1/comment/63061699492cb27e08d426ca',         // get updated comment with like comment 
      {
        headers: {
          accept: 'application/json, text/plain, */*',
          authorization:
            'Basic N0M4QzRENkItRUQ4Mi00OTRDLUE1MDItODE0QTM4RDc0NTk1OjkxOGUwY2JhNTEwNzY5MmYzMzM5MTE2YzhmZDgzMzkw',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )
    sleep(2.2)

    response = http.put(
      'https://socialqa.cachy.com/cachy/v1/comment/like',                                  // like reply comment
      '{"commentId":"630f57e7a136084ac72eeb5f","isLike":true,"isReplyLike":true}',
      {
        headers: {
          accept: 'application/json, text/plain, */*',
          authorization:
            'Basic N0M4QzRENkItRUQ4Mi00OTRDLUE1MDItODE0QTM4RDc0NTk1OjkxOGUwY2JhNTEwNzY5MmYzMzM5MTE2YzhmZDgzMzkw',
          'content-type': 'application/json',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )
    sleep(0.5)

    response = http.get(
      'https://cachyserverqa.cachy.com/cachy/v1/comment/63061699492cb27e08d426ca',         //get updated comment with like comment 
      {
        headers: {
          accept: 'application/json, text/plain, */*',
          authorization:
            'Basic N0M4QzRENkItRUQ4Mi00OTRDLUE1MDItODE0QTM4RDc0NTk1OjkxOGUwY2JhNTEwNzY5MmYzMzM5MTE2YzhmZDgzMzkw',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )
    sleep(3.4)

    response = http.put(
      'https://socialqa.cachy.com/cachy/v1/like',                                          // unlike post
      `{"postId":"${vars['postId2']}","isLike":false}`,
      {
        headers: {
          accept: 'application/json, text/plain, */*',
          authorization:
            'Basic N0M4QzRENkItRUQ4Mi00OTRDLUE1MDItODE0QTM4RDc0NTk1OjkxOGUwY2JhNTEwNzY5MmYzMzM5MTE2YzhmZDgzMzkw',
          'content-type': 'application/json',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )
    sleep(3.4)

    response = http.put(
      'https://socialqa.cachy.com/cachy/v1/comment/like',                                    // unlike comment 
      `{"commentId":"${vars['id1']}","isLike":false,"isReplyLike":true}`,
      {
        headers: {
          accept: 'application/json, text/plain, */*',
          authorization:
            'Basic N0M4QzRENkItRUQ4Mi00OTRDLUE1MDItODE0QTM4RDc0NTk1OjkxOGUwY2JhNTEwNzY5MmYzMzM5MTE2YzhmZDgzMzkw',
          'content-type': 'application/json',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )

    response = http.get(
      'https://cachyserverqa.cachy.com/cachy/v1/comment/63061699492cb27e08d426ca',         //get updated comment with unlike comment 
      {
        headers: {
          accept: 'application/json, text/plain, */*',
          authorization:
            'Basic N0M4QzRENkItRUQ4Mi00OTRDLUE1MDItODE0QTM4RDc0NTk1OjkxOGUwY2JhNTEwNzY5MmYzMzM5MTE2YzhmZDgzMzkw',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )
    sleep(2.2)
    response = http.put(
        'https://socialqa.cachy.com/cachy/v1/comment/like',                                    // unlike reply comment 
        `{"commentId":"${vars['id1']}","isLike":false,"isReplyLike":false}`,
        {
          headers: {
            accept: 'application/json, text/plain, */*',
            authorization:
              'Basic N0M4QzRENkItRUQ4Mi00OTRDLUE1MDItODE0QTM4RDc0NTk1OjkxOGUwY2JhNTEwNzY5MmYzMzM5MTE2YzhmZDgzMzkw',
            'content-type': 'application/json',
            'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

      response = http.get(
        'https://cachyserverqa.cachy.com/cachy/v1/comment/63061699492cb27e08d426ca',       //get updated comment with unlike reply comment 
        {
          headers: {
            accept: 'application/json, text/plain, */*',
            authorization:
              'Basic N0M4QzRENkItRUQ4Mi00OTRDLUE1MDItODE0QTM4RDc0NTk1OjkxOGUwY2JhNTEwNzY5MmYzMzM5MTE2YzhmZDgzMzkw',
            'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )
      sleep(2.2)

    response = http.put(
      'https://socialqa.cachy.com/cachy/v1/comment/like',
      '{"commentId":"630f57e7a136084ac72eeb5f","isLike":false,"isReplyLike":true}',         // like reply comment 
      {
        headers: {
          accept: 'application/json, text/plain, */*',
          authorization:
            'Basic N0M4QzRENkItRUQ4Mi00OTRDLUE1MDItODE0QTM4RDc0NTk1OjkxOGUwY2JhNTEwNzY5MmYzMzM5MTE2YzhmZDgzMzkw',
          'content-type': 'application/json',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )

    response = http.get(
      'https://cachyserverqa.cachy.com/cachy/v1/comment/63061699492cb27e08d426ca',         //get updated comment with reply like comment 
      {
        headers: {
          accept: 'application/json, text/plain, */*',
          authorization:
            'Basic N0M4QzRENkItRUQ4Mi00OTRDLUE1MDItODE0QTM4RDc0NTk1OjkxOGUwY2JhNTEwNzY5MmYzMzM5MTE2YzhmZDgzMzkw',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )
    sleep(25.9)

    response = http.put(
      'https://cachyserverqa.cachy.com/cachy/reportPost',                                  // report post 
      `{"postId":"${vars['postId2']}","abuseId":111,"remarks":"Report profile picture"}`,
      {
        headers: {
          accept: 'application/json, text/plain, */*',
          authorization:
            'Basic N0M4QzRENkItRUQ4Mi00OTRDLUE1MDItODE0QTM4RDc0NTk1OjkxOGUwY2JhNTEwNzY5MmYzMzM5MTE2YzhmZDgzMzkw',
          'content-type': 'application/json',
          'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )



    response = http.put(
        'https://socialqa.cachy.com/cachy/v1/comment/remove',
        '{"commentId":"63109fc5a136084ac72eee64","isReply":false}',                         // delete comment 
        {
          headers: {
            accept: 'application/json, text/plain, */*',
            authorization:
              'Basic N0M4QzRENkItRUQ4Mi00OTRDLUE1MDItODE0QTM4RDc0NTk1OjkxOGUwY2JhNTEwNzY5MmYzMzM5MTE2YzhmZDgzMzkw',
            'content-type': 'application/json',
            'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )


      response = http.get(
        'https://cachyserverqa.cachy.com/cachy/v1/comment/63061699492cb27e08d426ca',         //get updated comment with reply like comment 
        {
          headers: {
            accept: 'application/json, text/plain, */*',
            authorization:
              'Basic N0M4QzRENkItRUQ4Mi00OTRDLUE1MDItODE0QTM4RDc0NTk1OjkxOGUwY2JhNTEwNzY5MmYzMzM5MTE2YzhmZDgzMzkw',
            'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )
      sleep(25.9)

      response = http.put(
        'https://socialqa.cachy.com/cachy/v1/comment/remove',
        '{"commentId": "6310a030a136084ac72eee67","isReply":true}',                         //delete reply comment                
        {
          headers: {
            accept: 'application/json, text/plain, */*',
            authorization:
              'Basic N0M4QzRENkItRUQ4Mi00OTRDLUE1MDItODE0QTM4RDc0NTk1OjkxOGUwY2JhNTEwNzY5MmYzMzM5MTE2YzhmZDgzMzkw',
            'content-type': 'application/json',
            'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )
      response = http.get(
        'https://cachyserverqa.cachy.com/cachy/v1/comment/63061699492cb27e08d426ca',       //get updated comment with reply like comment 
        {
          headers: {
            accept: 'application/json, text/plain, */*',
            authorization:
              'Basic N0M4QzRENkItRUQ4Mi00OTRDLUE1MDItODE0QTM4RDc0NTk1OjkxOGUwY2JhNTEwNzY5MmYzMzM5MTE2YzhmZDgzMzkw',
            'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )
      sleep(5.9)



      response = http.get(
        'https://cachyserverqa.cachy.com/cachy/v1/views/63061699492cb27e08d426ca?page=1',  // get updated views 
        {
          headers: {
            accept: 'application/json, text/plain, */*',
            authorization:
              'Basic N0M4QzRENkItRUQ4Mi00OTRDLUE1MDItODE0QTM4RDc0NTk1OjkxOGUwY2JhNTEwNzY5MmYzMzM5MTE2YzhmZDgzMzkw',
            'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )
      sleep(3.8)
  
      response = http.put(
        'https://cachyserverqa.cachy.com/cachy/v1/following',
        '{"followingUuids":["51c73590-3543-40b4-a21f-a921b8426035"]}',                      //follow from contributers
        {
          headers: {
            accept: 'application/json, text/plain, */*',
            authorization:
              'Basic N0M4QzRENkItRUQ4Mi00OTRDLUE1MDItODE0QTM4RDc0NTk1OjkxOGUwY2JhNTEwNzY5MmYzMzM5MTE2YzhmZDgzMzkw',
            'content-type': 'application/json',
            'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )
  
      response = http.options(
        'https://cachyserverqa.cachy.com/cachy/v1/following', null, {                      //
        headers: {
          accept: '*/*',
          'access-control-request-headers': 'authorization,content-type',
          'access-control-request-method': 'PUT',
          origin: 'https://cachy.com',
          'sec-fetch-mode': 'cors',
        },
      })
      sleep(0.5)
  
      response = http.get(                                                                  //get updated profile
        'https://cachyserverqa.cachy.com/cachy/v1/profile/b0f15c25-62fe-44d5-86de-c6e7b0005a27',
        {
          headers: {
            accept: 'application/json, text/plain, */*',
            authorization:
              'Basic N0M4QzRENkItRUQ4Mi00OTRDLUE1MDItODE0QTM4RDc0NTk1OjkxOGUwY2JhNTEwNzY5MmYzMzM5MTE2YzhmZDgzMzkw',
            'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )
  
      response = http.options(                                                              //
        'https://cachyserverqa.cachy.com/cachy/v1/profile/b0f15c25-62fe-44d5-86de-c6e7b0005a27',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-headers': 'authorization',
            'access-control-request-method': 'GET',
            origin: 'https://cachy.com',
            'sec-fetch-mode': 'cors',
          },
        }
      )
      sleep(3.4)
  
      response = http.put(
        'https://cachyserverqa.cachy.com/cachy/v1/following',                              //follow from contributers
        '{"followingUuids":["b80e146e-011f-4326-adcf-f1d8dbc5eeb0"]}',
        {
          headers: {
            accept: 'application/json, text/plain, */*',
            authorization:
              'Basic N0M4QzRENkItRUQ4Mi00OTRDLUE1MDItODE0QTM4RDc0NTk1OjkxOGUwY2JhNTEwNzY5MmYzMzM5MTE2YzhmZDgzMzkw',
            'content-type': 'application/json',
            'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )
  
      response = http.get(                                                                  //get updated profile
        'https://cachyserverqa.cachy.com/cachy/v1/profile/b0f15c25-62fe-44d5-86de-c6e7b0005a27',
        {
          headers: {
            accept: 'application/json, text/plain, */*',
            authorization:
              'Basic N0M4QzRENkItRUQ4Mi00OTRDLUE1MDItODE0QTM4RDc0NTk1OjkxOGUwY2JhNTEwNzY5MmYzMzM5MTE2YzhmZDgzMzkw',
            'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )
      sleep(4.5)
  
      response = http.put(                                                                  //un-follow from contributers
        'https://cachyserverqa.cachy.com/cachy/v1/unfollow',
        '{"unfollowUuids":["51c73590-3543-40b4-a21f-a921b8426035"]}',
        {
          headers: {
            accept: 'application/json, text/plain, */*',
            authorization:
              'Basic N0M4QzRENkItRUQ4Mi00OTRDLUE1MDItODE0QTM4RDc0NTk1OjkxOGUwY2JhNTEwNzY5MmYzMzM5MTE2YzhmZDgzMzkw',
            'content-type': 'application/json',
            'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )
  
      response = http.options('https://cachyserverqa.cachy.com/cachy/v1/unfollow', null, { //
        headers: {
          accept: '*/*',
          'access-control-request-headers': 'authorization,content-type',
          'access-control-request-method': 'PUT',
          origin: 'https://cachy.com',
          'sec-fetch-mode': 'cors',
        },
      })
      sleep(0.6)
  
      response = http.get(                                                                  //get updated profile
        'https://cachyserverqa.cachy.com/cachy/v1/profile/b0f15c25-62fe-44d5-86de-c6e7b0005a27',
        {
          headers: {
            accept: 'application/json, text/plain, */*',
            authorization:
              'Basic N0M4QzRENkItRUQ4Mi00OTRDLUE1MDItODE0QTM4RDc0NTk1OjkxOGUwY2JhNTEwNzY5MmYzMzM5MTE2YzhmZDgzMzkw',
            'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )
      sleep(2)
  
      response = http.put(                                                                  //un-follow from contributer
        'https://cachyserverqa.cachy.com/cachy/v1/unfollow',
        '{"unfollowUuids":["b80e146e-011f-4326-adcf-f1d8dbc5eeb0"]}',
        {
          headers: {
            accept: 'application/json, text/plain, */*',
            authorization:
              'Basic N0M4QzRENkItRUQ4Mi00OTRDLUE1MDItODE0QTM4RDc0NTk1OjkxOGUwY2JhNTEwNzY5MmYzMzM5MTE2YzhmZDgzMzkw',
            'content-type': 'application/json',
            'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )
  
      response = http.get(                                                                   //get updated profile
        'https://cachyserverqa.cachy.com/cachy/v1/profile/b0f15c25-62fe-44d5-86de-c6e7b0005a27',
        {
          headers: {
            accept: 'application/json, text/plain, */*',
            authorization:
              'Basic N0M4QzRENkItRUQ4Mi00OTRDLUE1MDItODE0QTM4RDc0NTk1OjkxOGUwY2JhNTEwNzY5MmYzMzM5MTE2YzhmZDgzMzkw',
            'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
          },
        }
      )

  })
}