<?php

use Illuminate\Http\Request;

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


// sample API
//Route::get('/rooms',function(){
//
//	return \App\Room::all();
//
//});

Route::get('/gallery',function(){
    return \App\GalleryTable::all();

});

Route::get('/contacts',function(){
    return ;

});
Route::get('/news',function(){
    return ;

});

Route::get('/catalog',function(){
    return ;

});

Route::get('/product',function(){
    return ;

});


//Route::get('/blog',[ 'uses' => 'Controller@blog']);


Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:api');



