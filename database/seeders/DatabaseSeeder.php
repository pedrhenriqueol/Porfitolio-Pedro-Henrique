<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        \App\Models\Skill::insert([
            ['name' => 'PHP', 'icon_class' => 'fab fa-php', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Laravel', 'icon_class' => 'fab fa-laravel', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Delphi', 'icon_class' => 'fas fa-desktop', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'TypeScript', 'icon_class' => 'fab fa-js', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'React', 'icon_class' => 'fab fa-react', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Java', 'icon_class' => 'fab fa-java', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'MySQL / SQL Server', 'icon_class' => 'fas fa-database', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Tailwind CSS', 'icon_class' => 'fab fa-css3-alt', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Git', 'icon_class' => 'fab fa-git-alt', 'created_at' => now(), 'updated_at' => now()],
        ]);

        \App\Models\Experience::insert([
            [
                'company' => 'Qualisoft Sistemas',
                'role' => 'Desenvolvedor Back-End (Estágio)',
                'period' => 'Mar 2026 - Presente | Ago 2025 - Dez 2025',
                'description' => "• Mantive e evoluí sistema comercial legado (PDV/ERP) em Delphi 6 com 100 usuários diários, preparando base de código para migração para Delphi 11 (UniGui web), reduzindo a complexidade técnica.\n• Otimizei consultas SQL Server e MySQL em cloud (Railway), atuando na unidade crítica uPesquisaProduto, reduzindo tempo de resposta em buscas de 2s para <500ms via índices e refatoração de queries N+1.\n• Desenvolvi e escalei plataformas web críticas utilizando PHP (Laravel), React e TypeScript: o Site do Retaguarda (Módulo Administrativo ERP), focado no controle de inventário e gestão de contas a receber, e o Site dos Conglomerados (Portal de Gestão Multi-empresa).\n• Implementei interfaces modernas com Tailwind CSS para substituir componentes legados, resultando em uma redução de 40% em bugs visuais e melhoria na taxa de suporte técnico.\n• Integrei componentes críticos de automação comercial (ACBR para emissão fiscal, FortesReport), garantindo conformidade legal e consistência de dados para 100% das transações processadas.\n• Debuguei issues herdadas em TDBGrid (células vazias), TClientDataSet (sincronização de dados) e BDE (Paradox), eliminando 8+ bugs críticos que impactavam diretamente as rotinas diárias da operação.",
                'created_at' => now(), 'updated_at' => now()
            ]
        ]);

        \App\Models\Project::insert([
            [
                'title' => 'Site do Retaguarda (PDV/ERP)',
                'description' => 'Módulo administrativo focado no controle de inventário, gestão de contas a receber e integração fiscal. Desenvolvido com Laravel, React e TypeScript.',
                'image_url' => 'https://via.placeholder.com/600x400/1F2833/66FCF1?text=Retaguarda+ERP',
                'repo_link' => null,
                'demo_link' => null,
                'tags' => json_encode(['Laravel', 'React', 'TypeScript']),
                'created_at' => now(), 'updated_at' => now()
            ],
            [
                'title' => 'Site dos Conglomerados',
                'description' => 'Portal de Gestão Multi-empresa permitindo a supervisão centralizada de diferentes unidades de negócio de forma escalável.',
                'image_url' => 'https://via.placeholder.com/600x400/1F2833/45A29E?text=Conglomerados',
                'repo_link' => null,
                'demo_link' => null,
                'tags' => json_encode(['PHP', 'Laravel', 'React']),
                'created_at' => now(), 'updated_at' => now()
            ],
            [
                'title' => 'Migração Delphi para UniGui',
                'description' => 'Trabalho de modernização e refatoração de sistema comercial legado em Delphi 6 (Desktop) preparando-o para rodar nativamente em ambiente Web via Delphi 11 UniGui.',
                'image_url' => 'https://via.placeholder.com/600x400/1F2833/C5C6C7?text=Migração+Legado',
                'repo_link' => null,
                'demo_link' => null,
                'tags' => json_encode(['Delphi', 'Refatoração']),
                'created_at' => now(), 'updated_at' => now()
            ]
        ]);
        
        // Crie o usuário admin
        User::factory()->create([
            'name' => 'Pedro Henrique',
            'email' => 'admin@admin.com',
            'password' => bcrypt('password'),
        ]);
    }
}
