import { HttpContext } from '@adonisjs/core/http';
import { inject } from '@adonisjs/core';
import UserService from '#services/user.service';

@inject()
export default class UsersController {
  constructor(protected userService: UserService) {}

  async create({ request, response }: HttpContext): Promise<void> {
    try {
      const body = request.only(['email', 'name', 'password']);
      const user = await this.userService.create(body);
      if ('message' in user) {
        return response.badRequest({ message: user.message });
      }
      return response.created({ user });
    } catch (error) {
      return response.internalServerError({ message: 'Failed to create user', error });
    }
  }

  async update({ request, response }: HttpContext): Promise<void> {
    try {
      const { id } = request.params();
      const body = request.only(['email', 'name', 'password']);
      const user = await this.userService.update(id, body);
      if ('message' in user) {
        return response.badRequest({ message: user.message });
      }
      return response.ok({ user });
    } catch (error) {
      return response.internalServerError({ message: 'Failed to update user', error });
    }
  }

  async delete({ request, response }: HttpContext): Promise<void> {
    try {
      const { id } = request.params();
      const result = await this.userService.delete(id);
      if ('message' in result && result.message !== 'User deleted successfully') {
        return response.badRequest({ message: result.message });
      }
      return response.noContent();
    } catch (error) {
      return response.internalServerError({ message: 'Failed to delete user', error });
    }
  }

  async getAll({ response }: HttpContext): Promise<void> {
    try {
      const allUsers = await this.userService.findAll();
      if ('message' in allUsers) {
        return response.internalServerError({ message: allUsers.message });
      }
      return response.ok({ allUsers });
    } catch (error) {
      return response.internalServerError({ message: 'Failed to fetch users', error });
    }
  }

  async getById({ request, response }: HttpContext): Promise<void> {
    try {
      const { id } = request.params();
      const user = await this.userService.findById(id);
      if ('message' in user) {
        return response.badRequest({ message: user.message });
      }
      return response.ok({ user });
    } catch (error) {
      return response.internalServerError({ message: 'Failed to fetch user', error });
    }
  }
}
