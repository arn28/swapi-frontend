import { getIdFromUrl, getPageFromUrl } from '../../utils/helpers'

describe('getIdFromUrl', () => {
  it('should return correct ID when valid URL is provided', () => {
    const url = 'https://example.com/something/42/'
    expect(getIdFromUrl(url)).toBe(42)
  })

  it('should return NaN when invalid URL is provided', () => {
    const url = 'https://example.com/'
    expect(getIdFromUrl(url)).toBe(NaN)
  })
})

describe('getPageFromUrl', () => {
  it('should return correct page number when valid URL is provided', () => {
    const url = 'https://example.com/something?page=3'
    expect(getPageFromUrl(url)).toBe(3)
  })

  it('should return NaN when invalid URL is provided', () => {
    const url = 'https://example.com/'
    expect(getPageFromUrl(url)).toBe(NaN)
  })
})
