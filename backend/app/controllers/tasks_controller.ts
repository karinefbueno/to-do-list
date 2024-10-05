import type { HttpContext } from '@adonisjs/core/http'
import TaskService from '#services/task.service'
import { inject } from '@adonisjs/core'

@inject()
export default class TasksController {
  constructor(protected taskService: TaskService) {}
  async create({ request, response }: HttpContext): Promise<void> {
    try {
      const body = request.only(['titulo', 'descricao', 'prioridade'])
      const task = await this.taskService.create(body)
      if ('message' in task) {
        return response.badRequest({ message: task.message })
      }
      return response.created({ task })
    } catch (error) {
      return response.internalServerError({ message: 'Failed to create user', error })
    }
  }

  async delete({ request, response }: HttpContext): Promise<void> {
    try {
      const { id } = request.params()
      const result = await this.taskService.delete(id)
      if ('message' in result && result.message !== 'Task deleted successfully') {
        return response.badRequest({ message: result.message })
      }
      return response.noContent()
    } catch (error) {
      return response.internalServerError({ message: 'Failed to delete task', error })
    }
  }
}
