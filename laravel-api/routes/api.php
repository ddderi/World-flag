<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\V1\UserController;
use App\Http\Controllers\Api\V1\ScoreController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


// public routes

Route::post('/login',[UserController::class,'login']);
Route::post('/signup',[UserController::class,'register']);


// Protected routes

Route::group(['middleware' => ['auth:sanctum']], function() {
    // router.put('/change_password', userCtrl.changePassword)
    Route::put('/change_password',[UserController::class,'update']);
    // router.put('/scores', userCtrl.updateScore)
    Route::post('/logout',[UserController::class,'logout']);
    Route::post('create_score',[ScoreController::class,'create']);
    Route::put('update_score',[ScoreController::class,'update']);
});




Route::group(['prefix' => 'v1', 'namespace' => 'App\Http\Controllers\Api\V1'], function() {
    Route::apiResource('scores', ScoreController::class);
});

// router.get('/logout', userCtrl.logout)
// router.get('/players', userCtrl.bestPlayers)
// router.get('/cookie', userCtrl.userLogged)

// router.post('/signup', userCtrl.signup)
// router.post('/login', userCtrl.login)

// router.put('/scores', userCtrl.updateScore)
// router.put('/change_password', userCtrl.changePassword)
// router.put('/scores', userCtrl.updateScore)

// router.delete('/:id', userCtrl.deleteUser)