const admin =  require('firebase-admin');

// Create user for auth
const createAuthUser = async (user) => {
  const { firstName, email, password = 'temporalZapopUser123', role = 'phoneHost', cellPhone } = user;
  const authUserRecord = await admin.auth().createUser({
    firstName,
    email,
    password,
    role,
    cellPhone,
    verified: false,
    disabled: false
  });
  return authUserRecord;
}

const createUser = async (req, res) => {
  const { body } = req;
  const { user } = body;
  // Validate User
  if (!user) { 
    return res.status(400).json({
      message: 'You need to provide a valid user information'
    })
  }
  // Create a new user for Auth
  const authUser = await createAuthUser(user);
  return res.json(authUser);
}
  

module.exports = {
  createUser
}