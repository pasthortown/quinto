<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    date_default_timezone_set('America/Bogota');
    return json_encode(date('l jS \of F Y h:i:s A'));
});

$router->group(['middleware' => []], function () use ($router) {
    $router->get('/saluda', ['uses' => 'ExampleController@get']);
    $router->post('/suma', ['uses' => 'ExampleController@suma']);
    $router->post('/ganador', ['uses' => 'ExampleController@ganador']);
});
