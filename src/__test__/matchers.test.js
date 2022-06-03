import { toBeTrue } from 'jest-extended'
expect.extend({ toBeTrue })

describe('Matchers', () => {
  test('toBe', () => {
    expect(true).toBeTrue(true)
  })

  test('toEqual', () => {
    const data = { one: 1 }
    data['two'] = 2
    expect(data).toEqual({ one: 1, two: 2 })
  })

  test('not', () => {
    expect(true).not.toBe(false)
  })

  test('string', () => {
    expect('texto').toMatch(/TeXtO/i)
    expect('texto').not.toMatch(/I/)
  })

  test('toContain', () => {
    const arr = ['pizza', 'birra', 'faso']
    expect(arr).toContain('birra')
    expect(arr).not.toContain('pancho')
  })
})