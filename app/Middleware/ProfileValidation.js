'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class ProfileValidation {
  /**
   * @param {object} ctx
   * @param {Response} ctx.response
   * @param {Function} next
   */
  async handle ({ response, auth }, next) {
    const user = await auth.getUser();
    if (user.accessLevel !== '3') {
      await next()
    } else {
      return response.status(403).send({
        error: 'Must be ADMIN to access.',
      });
    }
  }
}

module.exports = ProfileValidation
