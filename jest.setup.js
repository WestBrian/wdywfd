import '@testing-library/jest-dom'
import 'whatwg-fetch'

Object.defineProperty(window, 'scrollTo', {
  writable: true,
  value: jest.fn(),
})
