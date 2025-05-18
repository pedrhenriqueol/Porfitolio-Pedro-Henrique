const listaTarefas = document.getElementById('lista-tarefas');
const formTarefa = document.getElementById('form-tarefa');
const inputTitulo = document.getElementById('input-titulo');
const mensagem = document.getElementById('mensagem');

const API_URL = '/api/tarefas';

async function carregarTarefas() {
    try {
        const res = await fetch(API_URL);
        const tarefas = await res.json();
        listaTarefas.innerHTML = '';

        if(tarefas.length === 0) {
            listaTarefas.innerHTML = '<li>Nenhuma tarefa cadastrada.</li>';
            return;
        }

        tarefas.forEach(tarefa => {
            const li = document.createElement('li');
            li.textContent = tarefa.titulo;
            li.dataset.id = tarefa.id;
            if (tarefa.concluido) li.classList.add('concluido');

            // Container para botões
            const acoes = document.createElement('div');
            acoes.classList.add('botao-acoes');

            // Botão concluir/reabrir
            const btnConcluir = document.createElement('button');
            btnConcluir.textContent = tarefa.concluido ? 'Reabrir' : 'Concluir';
            btnConcluir.addEventListener('click', () => toggleConcluir(tarefa.id, !tarefa.concluido));

            // Botão deletar
            const btnDeletar = document.createElement('button');
            btnDeletar.textContent = 'Excluir';
            btnDeletar.addEventListener('click', () => deletarTarefa(tarefa.id));

            acoes.appendChild(btnConcluir);
            acoes.appendChild(btnDeletar);

            li.appendChild(acoes);
            listaTarefas.appendChild(li);
        });
    } catch (err) {
        mostrarMensagem('Erro ao carregar tarefas', 'error');
    }
}

async function toggleConcluir(id, concluir) {
    try {
        const res = await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({concluido: concluir})
        });
        if (!res.ok) throw new Error('Erro ao atualizar tarefa');
        mostrarMensagem('Tarefa atualizada!', 'success');
        carregarTarefas();
    } catch {
        mostrarMensagem('Erro ao atualizar tarefa', 'error');
    }
}

async function deletarTarefa(id) {
    if (!confirm('Confirma exclusão da tarefa?')) return;
    try {
        const res = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
        if (!res.ok) throw new Error('Erro ao deletar tarefa');
        mostrarMensagem('Tarefa excluída!', 'success');
        carregarTarefas();
    } catch {
        mostrarMensagem('Erro ao deletar tarefa', 'error');
    }
}

formTarefa.addEventListener('submit', async e => {
    e.preventDefault();
    const titulo = inputTitulo.value.trim();
    if (!titulo) return;

    try {
        const res = await fetch(API_URL, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({titulo})
        });
        if (!res.ok) throw new Error('Erro ao criar tarefa');
        inputTitulo.value = '';
        mostrarMensagem('Tarefa criada!', 'success');
        carregarTarefas();
    } catch {
        mostrarMensagem('Erro ao criar tarefa', 'error');
    }
});

function mostrarMensagem(texto, tipo) {
    mensagem.textContent = texto;
    mensagem.className = tipo;
    mensagem.classList.remove('hidden');
    setTimeout(() => mensagem.classList.add('hidden'), 3000);
}

// Inicializa
carregarTarefas();
