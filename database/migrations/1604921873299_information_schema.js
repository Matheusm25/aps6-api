'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class InformationSchema extends Schema {
  up () {
    this.create('information', (table) => {
      table.increments()
      table.integer('level')
      table.string('description')
      table.timestamps()
    })
  }

  down () {
    this.drop('information')
  }
}

module.exports = InformationSchema
