import json
import random

def carregar_paises(arquivo):
    """Carrega os dados dos países a partir de um arquivo JSON."""
    with open(arquivo, 'r', encoding='utf-8') as f:
        return json.load(f)

def fazer_pergunta(pais):
    """Faz uma pergunta ao jogador sobre o país."""
    pergunta_tipo = random.choice(['gentilico', 'sigla', 'nome_pais'])
    if pergunta_tipo == 'gentilico':
        pergunta = f"Qual é o gentilício do {pais['nome_pais']}?"
        resposta_certa = pais['gentilico']
    elif pergunta_tipo == 'sigla':
        pergunta = f"Qual é a sigla do {pais['nome_pais']}?"
        resposta_certa = pais['sigla']
    else:  # pergunta_tipo == 'nome_pais'
        pergunta = f"Qual é o nome do país cujo gentilício é '{pais['gentilico']}'?"
        resposta_certa = pais['nome_pais']

    resposta_usuario = input(pergunta + " ")

    if resposta_usuario.lower() == resposta_certa.lower():
        print("Correto! 🎉")
        return True
    else:
        print(f"Incorreto. A resposta correta é: {resposta_certa}.")
        return False

def main():
    """Função principal do jogo."""
    paises = carregar_paises('paises.json')
    pontos = 0
    tentativas = 5

    print("Bem-vindo ao Jogo de Perguntas sobre Países!")
    
    for _ in range(tentativas):
        pais = random.choice(paises)
        if fazer_pergunta(pais):
            pontos += 1

    print(f"\nFim do jogo! Você acertou {pontos} de {tentativas} perguntas.")

if __name__ == "__main__":
    main()
