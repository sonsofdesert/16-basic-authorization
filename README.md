![CF](https://camo.githubusercontent.com/70edab54bba80edb7493cad3135e9606781cbb6b/687474703a2f2f692e696d6775722e636f6d2f377635415363382e706e67) 16: Basic Auth
===

## Submission Instructions
* fork this repository & create a new branch for your work
* write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-susan`
* push to your repository
* submit a pull request to this repository
* submit a link to your PR in canvas
* write a question and observation on canvas

## Learning Objectives  
* students will be able to create basic authorization middleware
* students will be able to test basic authorization for signup/signin routes

## Requirements
#### Configuration
* `package.json`
* `.gitignore`
* `.env`
* `README.md`

## Feature Tasks
* create the following directories to organize your code:
  * **lib**
  * **model**
  * **route**
  * **test**
* create an HTTP server using `express`
* using `mongoose`, create a **User** model with the following properties and options:
  * `username` - *required and unique*
  * `email` - *required and unique*
  * `password` - *required - this must be hashed and can not be stored as plain text*
* Use mongoose middleware to create a pre `'save'` hook that uses `bcrypt` to
  hash a users password if this is the first time the User instance is being
  saved.
* use the **express** `Router` to create a custom router for allowing users to **sign up** and **sign in**

## Server Endpoints
### `/api/signup`
* `POST` request
* The client should pass the username, email and password in the body of the request
* The server should respond with a **200** status code for a proper request that
  successfully creates a new user.
* The server should respond with **400 Bad Request** for a failed request

### `/api/signin`
* `GET` request
* the client should pass the username and password to the server using a `Authorization: Basic Base64(username:password)` header
* The string `"username:password"` should be Base64 encoded
* the server should respond with a **200** status code for requests containing
  legitimate usernames and correct passwords.
* the server should respond with HTTP status **401 Unauthorized** for non-authenticated users.

## Tests
* Move the file `basic-auth.test.js` into your lab directory and configure it
  to run with your sever.
* It has tests that check the status code of your signup and signin routes.
* `/api/signup`
  * `POST` - test expects HTTP status **400**, if no request body has been provided or the body is invalid
  * `POST` - test expects HTTP status **200**, if the request body has been provided and is valid
* `/api/signin`
  * `GET` - test expects HTTP status **401**, if the user could not be authenticated due to an incorrect password
  * `GET` - test expects HTTP status **200**, for a request with a valid basic authorization header

## Stretch Goals
Add more routes to the server beyond `/api/signin` that check for the
`Authorization` header and either allow or prevent users from accessing
addition information.
