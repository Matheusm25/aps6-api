'use strict'

const Information = use('App/Models/Information');

class InformationController {
	async index ({ request, response, auth }) {
		const user = await auth.getUser();
		return await Information.query().where('level', '<=', user.accessLevel).fetch();
	}
}

module.exports = InformationController
