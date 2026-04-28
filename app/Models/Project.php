<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $fillable = ['title', 'description', 'image_url', 'repo_link', 'demo_link', 'tags'];
    
    protected $casts = [
        'tags' => 'array',
    ];
}
