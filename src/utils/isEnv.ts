/* istanbul ignore file */

export const isDev = process.env.NODE_ENV === 'development'
export const isTest = process.env.NODE_ENV === 'test'
export const isLowerEnv = isDev || isTest
export const isBrowser = typeof window !== 'undefined'
