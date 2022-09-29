import '@testing-library/jest-dom'
import 'whatwg-fetch'

Object.defineProperty(window, 'scrollTo', {
  writable: true,
  value: jest.fn(),
})

Object.defineProperty(window, 'ResizeObserver', {
  writable: true,
  value: require('resize-observer-polyfill'),
})

Element.prototype.scrollTo = jest.fn()
