'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const User = use('App/Models/User');

class UserSeeder {
  async run () {
    await User.create({ username: 'public', password: 'public', accessLevel: 1 });
    await User.create({ username: 'director', password: 'director', accessLevel: 2 });
    await User.create({ username: 'minister', password: 'minister', accessLevel: 3 });
  }
}

module.exports = UserSeeder
