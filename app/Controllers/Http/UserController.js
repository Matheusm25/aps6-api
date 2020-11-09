'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const User = use('App/Models/User');

/**
 * Resourceful controller for interacting with users
 */
class UserController {
  /**
   * Show a list of all users.
   * GET users
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async index ({ request, response, view }) {
    return await User.query().where('active', true).fetch();
  }

  /**
   * Create/save a new user.
   * POST users
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const data = request.only(['username', 'password', 'accessLevel']);
    const user = await User.create(data);
    response.status(201);
    return user;
  }

  /**
   * Display a single user.
   * GET users/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async show ({ params, request, response }) {
    try {
      const { id } = params;
      const user = await User.findOrFail(id);
      response.send(user);
    } catch (err) {
      response.send({
        error: 'User was not found',
      });
    }
  }

  /**
   * Update user details.
   * PUT or PATCH users/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const { id } = params;
    const { password, active, accessLevel } = request.body;

    try {
      const user = await User.findOrFail(id);

      if (!password && active === undefined) {
        response.send({
          error: 'Password was not provided',
        });
      } else if (password && active === undefined) {
        user.password = password;
        user.save();
        response.send(user);
      } else if (accessLevel && active === undefined) {
        user.accessLevel = accessLevel;
        user.save();
        response.send(user);
      } else if (active !== undefined) {
        if (user.active) {
          response.send({
            error: 'User is already active',
          });
        } else {
          user.active = true;
          user.save();
          response.send(user);
        }
      }
    } catch (err) {
      response.send({
        error: 'User was not found.',
      });
    }
  }

  /**
   * Delete a user with id.
   * DELETE users/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    try {
      const { id } = params;
      const user = await User.findOrFail(id);

      if (!user.active) {
        response.send({
          error: 'User is already inactive.',
        });
      } else {
        user.active = false;
        await user.save();
        response.send({
          message: 'User desactivate.',
        });
      }
    } catch (err) {
      response.send({
        error: 'User was not found.',
      });
    }
  }
}

module.exports = UserController
