import User from '#models/user'
import { Exception } from '@adonisjs/core/exceptions';

export default class UserService {
  async create(body: any) {
    try {
      if (!body.email || !body.name || !body.password) {
        return { message: 'Preencha nome, email e password' };
      }
      const user = await User.create(body);
      return user;
    } catch (error) {
      return { message: 'Failed to create user', error };
    }
  }

  async update(id: string, body: any) {
    try {
      const user = await User.findOrFail(id);
      await user.merge(body);
      await user.save();
      return user;
    } catch (error) {
      if (error instanceof Exception) {
        return { message: 'User not found' };
      }
      return { message: 'Failed to update user', error };
    }
  }
  async delete(id: number) {
    try {
      const user = await User.findOrFail(id);
      await user.delete();
      return { message: 'User deleted successfully' };
    } catch (error) {
      if (error instanceof Exception) {
        return { message: 'User not found' };
      }
      return { message: 'Failed to delete user', error };
    }
  }

  async findAll() {
    try {
      const allUsers = await User.all();
      if (allUsers.length === 0) {
        return { message: 'No users found', allUsers };
      }
      return allUsers;
    } catch (error) {
      return { message: 'Failed to fetch users', error };
    }
  }

  async findById(id: number) {
    try {
      const user = await User.findOrFail(id);
      return user;
    } catch (error) {
      return { message: 'Failed to fetch user', error };
    }
  }
}
