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

const Information = use('App/Models/Information')

class InformationSeeder {
  async run () {
    await Information.create({ level: 1, description: 'Nulla quis justo nec mauris.'});
    await Information.create({ level: 1, description: 'Fusce tristique id sapien at.'});
    await Information.create({ level: 1, description: 'Orci varius natoque penatibus et.'});
    await Information.create({ level: 1, description: 'In hac habitasse platea dictumst.'});
    await Information.create({ level: 1, description: 'Aliquam ut rutrum leo. Vivamus.'});
    await Information.create({ level: 1, description: 'Sed non commodo felis. Etiam.'});
    await Information.create({ level: 2, description: 'Fusce malesuada varius justo in.'});
    await Information.create({ level: 2, description: 'Duis id mi ac nisi.'});
    await Information.create({ level: 2, description: 'Praesent non ornare ex. Aliquam.'});
    await Information.create({ level: 2, description: 'Vestibulum ex interdum metus, quis.'});
    await Information.create({ level: 2, description: 'Ut nisl nisl, interdum vel.'});
    await Information.create({ level: 2, description: 'Sed vulputate lectus ut magna.'});
    await Information.create({ level: 2, description: 'Sed vulputate molestie neque in.'});
    await Information.create({ level: 2, description: 'Nunc porttitor mattis elit, id.'});
    await Information.create({ level: 2, description: 'Phasellus et ante ante. Nam.'});
    await Information.create({ level: 2, description: 'Vestibulum eget tempus risus. elit.'});
    await Information.create({ level: 3, description: 'In a lobortis libero. Vestibulum.'});
    await Information.create({ level: 3, description: 'Mauris sit amet laoreet nunc.'});
    await Information.create({ level: 3, description: 'Mauris et auctor eros, a.'});
    await Information.create({ level: 3, description: 'Etiam eget ex sed eros.'});
    await Information.create({ level: 3, description: 'Nullam vestibulum mi et augue.'});
  }
}

module.exports = InformationSeeder
