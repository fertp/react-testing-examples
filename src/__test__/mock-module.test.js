const storage = require('../utils/storage')
const { saveUsername, getUsername } = require('../user/index')

jest.mock('../utils/storage')

test('Save username', () => {
  // Arrange
  const username = 'Juan Perez'
  saveUsername(username)
  expect(storage.save).toHaveBeenCalledTimes(1)
  expect(storage.save.mock.calls.length).toBe(1)
  expect(storage.save).toHaveBeenCalledWith({ key: 'username', value: username })
  expect(storage.save.mock.calls[0][0]).toEqual({ key: 'username', value: username })
})

test('Get username', () => {
  const username = 'Juan Perez'
  storage.get.mockReturnValueOnce(username)
  const result = getUsername()
  expect(storage.get).toHaveBeenCalledTimes(1)
  expect(storage.get).toHaveBeenCalledWith({ key: 'username' })
  expect(result).toBe(username)
})