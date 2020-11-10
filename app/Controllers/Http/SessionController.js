'use strict'

class SessionController {
  async create ({ request, auth }) {
    const { username, password } = request.all();

    const token = await auth.attempt(username, password);

    return token;
  }

  async createByUsername({ request, response, auth }) {
    const { username } = request.all();
    const User = use('App/Models/User');
    
    const user = await User.findBy('username', username);

    if (!user) {
      response.status(404).send({
        error: 'User was not found.'
      })
    }

    const token = await auth.generate(user);

    return token;
  }
}

module.exports = SessionController
