
test('Implementation example', () => {
  const myMock = jest.fn(x => x + 1)

  // console.log(myMock.mock)

  myMock(1)
  myMock(2)
  myMock(3)

  expect(myMock.mock.calls.length).toBe(3)

  expect(myMock.mock.results[0].value).toBe(2)
  expect(myMock.mock.results[1].value).toBe(3)
  expect(myMock.mock.results[2].value).toBe(4)
})

test('mockReturnValueOnce example', () => {
  const myMock = jest.fn()
    .mockReturnValueOnce(true)
    .mockReturnValueOnce('hello world')

  myMock.mockReturnValueOnce(5)
  
  const result1 = myMock()
  const result2 = myMock()
  const result3 = myMock()

  expect(myMock).toHaveBeenCalledTimes(3)

  expect(result1).toBe(true)
  expect(result2).toBe('hello world')
  expect(result3).toBe(5)
})