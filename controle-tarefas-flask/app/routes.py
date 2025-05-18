from flask import Blueprint, jsonify, request, abort

bp = Blueprint("routes", __name__)

tarefas = [
    {"id": 1, "titulo": "Estudar Python", "concluido": False},
    {"id": 2, "titulo": "Fazer exercícios", "concluido": True},
]

def encontrar_tarefa(id):
    return next((t for t in tarefas if t["id"] == id), None)

@bp.route("/api/tarefas", methods=["GET"])
def listar_tarefas():
    return jsonify(tarefas)

@bp.route("/api/tarefas/<int:id>", methods=["GET"])
def obter_tarefa(id):
    tarefa = encontrar_tarefa(id)
    if tarefa is None:
        abort(404)
    return jsonify(tarefa)

@bp.route("/api/tarefas", methods=["POST"])
def criar_tarefa():
    if not request.json or "titulo" not in request.json:
        abort(400, description="Faltando o campo 'titulo'")
    nova_tarefa = {
        "id": tarefas[-1]["id"] + 1 if tarefas else 1,
        "titulo": request.json["titulo"],
        "concluido": request.json.get("concluido", False),
    }
    tarefas.append(nova_tarefa)
    return jsonify(nova_tarefa), 201

@bp.route("/api/tarefas/<int:id>", methods=["PUT"])
def atualizar_tarefa(id):
    tarefa = encontrar_tarefa(id)
    if tarefa is None:
        abort(404)
    if not request.json:
        abort(400)
    titulo = request.json.get("titulo", tarefa["titulo"])
    concluido = request.json.get("concluido", tarefa["concluido"])
    if not isinstance(titulo, str) or not isinstance(concluido, bool):
        abort(400)
    tarefa["titulo"] = titulo
    tarefa["concluido"] = concluido
    return jsonify(tarefa)

@bp.route("/api/tarefas/<int:id>", methods=["DELETE"])
def deletar_tarefa(id):
    tarefa = encontrar_tarefa(id)
    if tarefa is None:
        abort(404)
    tarefas.remove(tarefa)
    return jsonify({"resultado": True})
