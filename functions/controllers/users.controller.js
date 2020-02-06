const admin =  require('firebase-admin');

// Create user for auth
const createAuthUser = async (user) => {
  const { email, password = 'temporalZapopUser123' } = user;
  const authUserRecord = await admin.auth().createUser({
    email,
    password,
  });

  return authUserRecord;
}

// Maybe not necessary...
const saveUser = async ({ uid, user }) => {
  const { email, role = 'phoneHost', cellPhone } = user;
  const newUser = admin.firestore().doc(`/user`);
  await newUser.set({
    uid,
    email,
    password,
    verified: false,
    role,
    cellPhone,
    disabled: false
  })
  return newUser;
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
  // Create a new user with full information in Firestore
  const newUser = await saveUser({ uid: authUser.uid, user });
  console.log('new user created ', newUser);
  return res.status(newUser);
}
  

module.exports = {
  createUser
}