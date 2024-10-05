import Task from '#models/task'
import { Exception } from '@adonisjs/core/exceptions'

export default class TaskService {
  async create(body: any) {
    try {
      // if (!body.email || !body.name || !body.password) {
      //   return { message: 'Preencha nome, email e password' }
      // }
      const user = await Task.create(body)
      return user
    } catch (error) {
      return { message: 'Failed to create user', error }
    }
  }

  async delete(id: number) {
    try {
      const taks = await Task.findOrFail(id)
      await taks.delete()
      return { message: 'Task deleted successfully' }
    } catch (error) {
      if (error instanceof Exception) {
        return { message: 'Task not found' }
      }
      return { message: 'Failed to delete task', error }
    }
  }
}
