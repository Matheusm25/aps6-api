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
    await Information.create({ level: 1, description: 'Orci varius natoque elit et.'});
    await Information.create({ level: 1, description: 'In hac habitasse platea ex.'});
    await Information.create({ level: 1, description: 'Aliquam ut ex leo. Vivamus.'});
    await Information.create({ level: 1, description: 'Sed non commodo felis. Etiam.'});
    await Information.create({ level: 2, description: 'Fusce elit varius justo in.'});
    await Information.create({ level: 2, description: 'Duis id mi ac nisi.'});
    await Information.create({ level: 2, description: 'In non ornare ex. Aliquam.'});
    await Information.create({ level: 2, description: 'Non ex interdum metus, quis.'});
    await Information.create({ level: 2, description: 'Ut nisl nisl, interdum vel.'});
    await Information.create({ level: 2, description: 'Sed vulputate lectus ut magna.'});
    await Information.create({ level: 2, description: 'Sed vulputate molestie neque in.'});
    await Information.create({ level: 2, description: 'Nunc ex mattis elit, id.'});
    await Information.create({ level: 2, description: 'Phasellus et ante ante. Nam.'});
    await Information.create({ level: 2, description: 'ex eget tempus risus. elit.'});
    await Information.create({ level: 3, description: 'In a non libero. Vestibulum.'});
    await Information.create({ level: 3, description: 'Mauris sit amet laoreet nunc.'});
    await Information.create({ level: 3, description: 'Mauris et auctor eros, a.'});
    await Information.create({ level: 3, description: 'Etiam eget ex sed eros.'});
    await Information.create({ level: 3, description: 'Nullam non mi et augue.'});
  }
}

module.exports = InformationSeeder
