const userRepository = require("../repositories/userRepository");

function getAll() {
  return userRepository.getAll();
}

const getDetail = (id) => {
  return userRepository.getDetail(id);
};

const createUser = async (newUser) => {
  return userRepository.createUser(newUser);
};

const deleteUser = (condition) => {
  return userRepository.deleteUser(condition);
};

module.exports = { getAll, getDetail, createUser, deleteUser };
