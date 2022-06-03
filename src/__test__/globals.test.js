describe('Tests group', () => {

  test('description 1', () => {
    expect(false).toBe(false)
  })
  
  test('description 2', () => {
    expect(true).toBe(true)
  })
  
  test('description 3', () => {
    expect(true).toBe(true)
  })

  describe('Tests sub-group', () => {

    test('description 1', () => {
      expect(false).toBe(false)
    })
    
    test('description 2', () => {
      expect(true).toBe(true)
    })

  })
  
})