/**
 * Jwt : secure your api
 * ----------------------
 *      Create Token
 * ----------------------
 * 1. client: after user login send user basic info to create token
 * 2. in the server side install: npm i jsonwebtoken
 * 3. import jsonwebtoken
 * 4. jwt.sign(payload, secret, {expires})
 * 5. return token to the client side
 *
 * 6. after receiving the token store it either httponly cookies or local storage(2nd best solution)
 * 7. use a general space onAuthStateChange > AuthProvider
 *
 * -----------------------
 *  send token to server
 * -----------------------
 *
 * 1. for sensitive api call () send authorization headers {authorization: 'Bearer ${token}'}
 *
 * -----------------------
 *      verify token
 * -----------------------
 * 1. create a function verifyJWT (middleware)
 * 2. this function will have three params: req,res,next
 * 3. first check whether the authorization headers exists
 * 4. if not send 401
 * 5. get the token out of authorization header
 * 6. call jwt.verify(token,secret, (err,decoded))
 * 7. if err => send 401
 * 8. set decoded to the req object so that we can retrieve it later
 * 9. call the next() to go to the next function
 *
 *
 * ----------------------
 * 1. check whether token has the email that matches with request email
 */
