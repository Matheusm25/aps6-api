'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post('/user', 'UserController.store');
Route.get('/users', 'UserController.index').middleware('auth');

Route.get('/informations', 'InformationController.index').middleware('auth');

Route.post('/sessions', 'SessionController.create');
Route.post('/sessions/username', 'SessionController.createByUsername');