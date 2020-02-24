const getIdTokenFromHeaders = (headers) => {
  const { authorization = '' } = headers;
  const [ , idToken = '' ] = authorization.split('Bearer ');
  return idToken;
}

const validateToken = async (req, res, next) => {
  const idToken = getIdTokenFromHeaders(req.headers);
  try {
    // Decode Token (Passport)
    // console.log(decodedIdToken);
    // Add user info to request.
    // req.user = decodedIdToken;
    return next();
  } catch (error) {
    console.error('Error while verifying Firebase ID token:', error);
    return next();
    // Remove previous line and Uncomment next line when ready to validate tokens
    // return res.status(403).send('Unauthorized');
  }
};

module.exports = {
  validateToken
}
