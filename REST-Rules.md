# RESTful API Rules

## 1. Respect http methods (get, post, patch, put, delete) - restful api
## 2. A hybrid server does 2 jobs:

    - at '/users' : render an html page (SSR), when it knows that surely a browser is the client
    - at '/api/users' : sends the data as json, so that a mobile app or react can handle that at the client side
