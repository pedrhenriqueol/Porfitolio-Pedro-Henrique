<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return response()->json([
        'name' => 'Portfolio API',
        'status' => 'online',
        'version' => '1.0'
    ]);
});
