describe('Set up and teardown examples', () => {
  beforeAll(() => {
    console.log('BeforeAll')
  })
  
  beforeEach(() => {
    console.log('BeforeEach')
  })

  afterEach(() => {
    console.log('AfterEach')
  })

  afterAll(() => {
    console.log('AfterAll')
  })

  test('Example 1', () => {
    expect(true).toBe(true)
  })

  test('Example 2', () => {
    expect(true).toBe(true)
  })
})