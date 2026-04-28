<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PortfolioController extends Controller
{
    public function index()
    {
        $projects = \App\Models\Project::all();
        $skills = \App\Models\Skill::all();
        $experiences = \App\Models\Experience::all();

        return inertia('Portfolio/Index', [
            'projects' => $projects,
            'skills' => $skills,
            'experiences' => $experiences
        ]);
    }

    public function storeMessage(\Illuminate\Http\Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'message' => 'required|string',
        ]);

        \App\Models\Message::create($validated);

        return back()->with('success', 'Mensagem enviada com sucesso!');
    }
}
