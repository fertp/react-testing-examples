const storage = require("../utils/storage")

const saveUsername = (username) => {
  storage.save({ key: 'username', value: username })
}

const getUsername = () => {
  return storage.get({ key: 'username' })
}

module.exports = { 
  saveUsername,
  getUsername
}