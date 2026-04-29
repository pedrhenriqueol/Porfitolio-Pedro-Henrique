<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PortfolioController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/portfolio', [PortfolioController::class, 'getPortfolioData']);
Route::post('/contato', [PortfolioController::class, 'enviarMensagem']);
