import { test } from '@japa/runner'

test.group('Posts create', () => {
  //assert: objerto que já vem com o japa
  test('example test', async ({ assert }) => {
    assert.equal(2 + 2, 4)
  })
})
