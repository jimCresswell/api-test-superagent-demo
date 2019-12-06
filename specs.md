# TOC
   - [For the API at https://jsonplaceholder.typicode.com the request](#for-the-api-at-httpsjsonplaceholdertypicodecom-the-request)
     - [/posts](#for-the-api-at-httpsjsonplaceholdertypicodecom-the-request-posts)
       - [with GET](#for-the-api-at-httpsjsonplaceholdertypicodecom-the-request-posts-with-get)
       - [with POST](#for-the-api-at-httpsjsonplaceholdertypicodecom-the-request-posts-with-post)
<a name=""></a>
 
<a name="for-the-api-at-httpsjsonplaceholdertypicodecom-the-request"></a>
# For the API at https://jsonplaceholder.typicode.com the request
<a name="for-the-api-at-httpsjsonplaceholdertypicodecom-the-request-posts"></a>
## /posts
<a name="for-the-api-at-httpsjsonplaceholdertypicodecom-the-request-posts-with-get"></a>
### with GET
responds with json.

```js
this.request
  .get('/posts')
  .set('Accept', 'application/json')
  .expect('Content-Type', /json/)
  .expect(200, done);
```

<a name="for-the-api-at-httpsjsonplaceholdertypicodecom-the-request-posts-with-post"></a>
### with POST
responds with json.

```js
this.request
  .post('/posts')
  .type('application/json')
  .send(this.data)
  .set('Accept', 'application/json')
  .expect('Content-Type', /json/)
  .expect(201, done);
```

