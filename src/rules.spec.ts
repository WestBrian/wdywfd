import {
  initializeTestEnvironment,
  assertSucceeds,
  assertFails,
  RulesTestEnvironment,
} from '@firebase/rules-unit-testing'
import { readFileSync } from 'fs'
import { doc, getDoc, setDoc, setLogLevel } from 'firebase/firestore'

let testEnv: RulesTestEnvironment | undefined

describe('firestore rules', () => {
  beforeAll(async () => {
    setLogLevel('error')

    testEnv = await initializeTestEnvironment({
      projectId: 'whats-for-dinner-cc0f4',
      firestore: {
        rules: readFileSync('firestore.rules', 'utf8'),
        host: 'localhost',
        port: 8080,
      },
    })
  })

  beforeEach(() => {
    testEnv!.clearFirestore()
  })

  afterAll(() => {
    testEnv!.cleanup()
  })

  it('blocks an unauthenticated user from the users collection', async () => {
    const unauthedDb = testEnv!.unauthenticatedContext().firestore()
    await assertFails(getDoc(doc(unauthedDb, 'users/123')))
  }, 20000)

  it('allows a authenticated user to set on the users collection', async () => {
    const unauthedDb = testEnv!.authenticatedContext('123').firestore()
    await assertSucceeds(setDoc(doc(unauthedDb, 'users/123'), { foo: 'bar' }))
  }, 20000)
})
