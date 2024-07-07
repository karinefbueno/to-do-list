/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/
// import type { HttpContext } from '@adonisjs/core/http'
import router from '@adonisjs/core/services/router'
const UsersController = () => import('#controllers/users_controller')

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.post('/users', [UsersController, 'create'])
router.delete('/users/:id', [UsersController, 'delete'])
router.put('/users/:id', [UsersController, 'update'])
router.get('users', [UsersController, 'getAll'])
router.get('users/:id', [UsersController, 'getById'])
