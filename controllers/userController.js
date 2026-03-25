const getAllUsers = (req, res) => {
  res.send("Fetching all users");
}

const addingNewUser = (req, res) => {
  res.send("Adding a new user");
}

const getUserById = (req, res, next) => {

  const id = req.params.id;

  if(!id){
      const error = new Error("User ID is required");
      error.statusCode = 400;
      return next(error);
  }

  res.send(`Fetching user with ID: ${id}`);
}

module.exports = { getAllUsers, addingNewUser, getUserById };