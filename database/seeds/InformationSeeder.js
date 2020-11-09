'use strict'

/*
|--------------------------------------------------------------------------
| InformationSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

/** @type {import('@adonisjs/lucid/src/Database')} */
const Database = use('Database')

const Information = use('App/Models/Information')

class InformationSeeder {
  async run () {
    await Information.create({ level: 1, description: 'description 1'});
    await Information.create({ level: 1, description: 'description 2'});
    await Information.create({ level: 1, description: 'description 3'});
    await Information.create({ level: 1, description: 'description 4'});
    await Information.create({ level: 1, description: 'description 5'});
    await Information.create({ level: 1, description: 'description 6'});
    await Information.create({ level: 2, description: 'description 7'});
    await Information.create({ level: 2, description: 'description 8'});
    await Information.create({ level: 2, description: 'description 9'});
    await Information.create({ level: 2, description: 'description 10'});
    await Information.create({ level: 2, description: 'description 11'});
    await Information.create({ level: 2, description: 'description 12'});
    await Information.create({ level: 2, description: 'description 13'});
    await Information.create({ level: 2, description: 'description 14'});
    await Information.create({ level: 2, description: 'description 15'});
    await Information.create({ level: 2, description: 'description 16'});
    await Information.create({ level: 3, description: 'description 17'});
    await Information.create({ level: 3, description: 'description 18'});
    await Information.create({ level: 3, description: 'description 19'});
    await Information.create({ level: 3, description: 'description 20'});
    await Information.create({ level: 3, description: 'description 21'});
  }
}

module.exports = InformationSeeder
