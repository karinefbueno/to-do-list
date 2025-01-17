import { ApiResponse } from '@japa/api-client'
import { test } from '@japa/runner'
// import testUtils from '@adonisjs/core/services/test_utils'
import User from '#models/user'
import UserService from '#services/user.service'
import app from '@adonisjs/core/services/app'

test.group('Posts create', (group) => {
  group.each.teardown(async () => {
    // Exclui o usuário criado pelo email
    await User.query().where('email', 'Jo.s@gmail.com').delete()
  })

  test('should create an user', async ({ client, assert }) => {
    const userPayload = {
      name: 'Jo Souto',
      email: 'Jo.s@gmail.com',
      password: 'k!oJ1235',
    }

    type BodyType = {
      user: {
        email: string
        name: string
        createdAt: string
        updatedAt: string
        id: number
      }
    }

    const response: ApiResponse = await client.post('/users').json(userPayload)
    const body: BodyType = response.body()

    console.log(body)
    assert.exists(body.user, 'User undefined')
    assert.isNumber(body.user.id, 'Id is not a number')
    assert.equal(body.user.name, userPayload.name)
    assert.equal(body.user.email, userPayload.email)
    assert.notExists(body.user.password, 'Password defined')
  })
})

// test('It should 409 when email is already in use', async ({ client, assert }) => {
//   class FakeService extends UserService {
//     create() {
//       return [
//         {
//           email: 'Jo.bueno@gmail.com',
//           name: 'Joana',
//           createdAt: '2024-07-11T13:30:58.564+00:00',
//           updatedAt: '2024-07-11T13:30:58.565+00:00',
//           id: 6,
//         },
//       ]
//     }
//   }

//   /**
//    * Swap `UserService` with an instance of
//    * `FakeService`
//    */
//   app.container.swap(UserService, () => {
//     return new FakeService()
//   })
// })
