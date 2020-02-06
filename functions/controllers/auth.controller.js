const admin =  require('firebase-admin');

const getIdTokenFromHeaders = (headers) => {
  const { authorization = '' } = headers;
  const [ , idToken = '' ] = authorization.split('Bearer ');
  return idToken;
}

const getUserDetails = (uid) => {
  // TBD
}

const validateToken = async (req, res, next) => {
  const idToken = getIdTokenFromHeaders(req.headers);
  try {
    const decodedIdToken = await admin.auth().verifyIdToken(idToken);
    console.log(decodedIdToken);
    // TODO: get users details from User collection.
    req.user = decodedIdToken;
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
