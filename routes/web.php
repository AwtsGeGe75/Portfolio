<?php
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return inertia('root');
})->name('root');

Route::get('/Home', function () {
    sleep(1);
    return inertia('Home');
})->name('Home');

Route::get('/Profile', function () {
    return inertia('Profile');
})->name('Profile');

Route::get('/About', function () {
    return inertia('About');
})->name('About');

Route::get('/Project', function () {
    return inertia('Project');
})->name('Project');

// Route::get('dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');


require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
