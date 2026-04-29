<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PortfolioController extends Controller
{
    public function getPortfolioData()
    {
        $projects = \App\Models\Project::all();
        $skills = \App\Models\Skill::all();
        $experiences = \App\Models\Experience::all();

        return response()->json([
            'projects' => $projects,
            'skills' => $skills,
            'experiences' => $experiences
        ]);
    }

    public function enviarMensagem(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'subject' => 'required|string|max:255',
            'message' => 'required|string',
        ]);

        \App\Models\Message::create($validated);

        return response()->json(['message' => 'Mensagem enviada com sucesso!'], 201);
    }
}
