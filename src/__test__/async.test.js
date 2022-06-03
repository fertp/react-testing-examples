// callbacks
const asyncFn = (callbackFn) => {
  setTimeout(() => {
    callbackFn(true) 
  }, 1000)
}

// promises
const asyncPromise = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve(true)
  }, 1000)
}) 

describe('Async code', () => {
  test('example async with callback', (done) => {
    asyncFn((param) => {
      expect(param).toBe(true)
      done()
    })
  })

  test('example of async with promises', () => {
    return asyncPromise().then(result => expect(result).toBe(true))
  })

  test('example of async with async await', async () => {
    const result = await asyncPromise()
    expect(result).toBe(true)
  })
})