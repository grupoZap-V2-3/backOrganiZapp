const User = require('../models/userModel');

const createAuthUser = async (user) => {
  const { firstName, email, password = 'temporalZapopUser123', role = 'phoneHost', cellPhone, gender = 'male' } = user;
  const newUser = new User({
    firstName,
    email,
    gender,
    role,
    cellPhone,
  });
  await newUser.save();
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
  return res.json(authUser);
}
  

module.exports = {
  createUser,
}