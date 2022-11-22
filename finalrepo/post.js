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