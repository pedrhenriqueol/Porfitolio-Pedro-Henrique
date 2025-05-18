import tkinter as tk
from tkinter import messagebox
import random
import string
import pyperclip

def gerar_senha():
    tamanho = slider_tamanho.get()

    caracteres = ''
    categorias_selecionadas = []
    if var_maiusculas.get():
        caracteres += string.ascii_uppercase
        categorias_selecionadas.append(string.ascii_uppercase)
    if var_minusculas.get():
        caracteres += string.ascii_lowercase
        categorias_selecionadas.append(string.ascii_lowercase)
    if var_numeros.get():
        caracteres += string.digits
        categorias_selecionadas.append(string.digits)
    if var_simbolos.get():
        caracteres += string.punctuation
        categorias_selecionadas.append(string.punctuation)

    if not caracteres:
        messagebox.showwarning("Aviso", "Selecione pelo menos um tipo de caractere!")
        return

    if tamanho < len(categorias_selecionadas):
        messagebox.showwarning("Aviso", f"Tamanho da senha deve ser ao menos {len(categorias_selecionadas)} para incluir todos os tipos selecionados.")
        return

    # Garante que tem pelo menos um caractere de cada tipo selecionado
    senha_lista = [random.choice(cat) for cat in categorias_selecionadas]
    senha_lista += [random.choice(caracteres) for _ in range(tamanho - len(categorias_selecionadas))]
    random.shuffle(senha_lista)
    senha = ''.join(senha_lista)

    entry_resultado.config(show='' if var_mostrar.get() else '*')
    entry_resultado.delete(0, tk.END)
    entry_resultado.insert(0, senha)
    btn_copiar.config(state='normal')

def copiar_senha():
    senha = entry_resultado.get()
    if senha:
        pyperclip.copy(senha)
        messagebox.showinfo("Copiado", "Senha copiada para a área de transferência!")
    else:
        messagebox.showwarning("Aviso", "Nenhuma senha para copiar.")

def toggle_mostrar():
    if var_mostrar.get():
        entry_resultado.config(show='')
    else:
        entry_resultado.config(show='*')

# Interface
janela = tk.Tk()
janela.title("Gerador de Senhas Seguras")
janela.geometry("450x350")
janela.resizable(False, False)

# Frame para organizar melhor
frame = tk.Frame(janela, padx=15, pady=15)
frame.pack(fill='both', expand=True)

# Slider para tamanho
tk.Label(frame, text="Tamanho da senha:").grid(row=0, column=0, sticky='w')
slider_tamanho = tk.Scale(frame, from_=4, to=32, orient='horizontal')
slider_tamanho.set(12)
slider_tamanho.grid(row=0, column=1, sticky='ew')

# Checkbuttons para categorias
var_maiusculas = tk.BooleanVar(value=True)
var_minusculas = tk.BooleanVar(value=True)
var_numeros = tk.BooleanVar(value=True)
var_simbolos = tk.BooleanVar(value=True)
var_mostrar = tk.BooleanVar(value=False)

tk.Checkbutton(frame, text="Incluir letras maiúsculas", variable=var_maiusculas).grid(row=1, column=0, sticky='w', pady=2, columnspan=2)
tk.Checkbutton(frame, text="Incluir letras minúsculas", variable=var_minusculas).grid(row=2, column=0, sticky='w', pady=2, columnspan=2)
tk.Checkbutton(frame, text="Incluir números", variable=var_numeros).grid(row=3, column=0, sticky='w', pady=2, columnspan=2)
tk.Checkbutton(frame, text="Incluir símbolos", variable=var_simbolos).grid(row=4, column=0, sticky='w', pady=2, columnspan=2)

# Botão gerar senha
btn_gerar = tk.Button(frame, text="Gerar Senha", command=gerar_senha)
btn_gerar.grid(row=5, column=0, pady=10, sticky='ew', columnspan=2)

# Entry para resultado
entry_resultado = tk.Entry(frame, width=30, font=("Arial", 14), justify='center')
entry_resultado.grid(row=6, column=0, columnspan=2, pady=10)
entry_resultado.config(state='normal', show='*')

# Mostrar/ocultar senha
chk_mostrar = tk.Checkbutton(frame, text="Mostrar senha", variable=var_mostrar, command=toggle_mostrar)
chk_mostrar.grid(row=7, column=0, sticky='w', columnspan=2)

# Botão copiar (inicialmente desativado)
btn_copiar = tk.Button(frame, text="Copiar", command=copiar_senha, state='disabled')
btn_copiar.grid(row=8, column=0, pady=5, sticky='ew', columnspan=2)

janela.mainloop()
