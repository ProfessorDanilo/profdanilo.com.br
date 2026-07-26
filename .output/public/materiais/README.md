# Pasta de materiais

Estrutura esperada:

```
public/materiais/
  d1/
    lista01/
      exercicio01.pdf
      exercicio01.mp4   (opcional)
      exercicio02.pdf
      ...
    lista02/
    ...
  d2/
  d3/
```

Basta colocar/atualizar os arquivos nesta pasta. O site detecta automaticamente
a existência do PDF e do vídeo — quando um deles não existir, será exibida a
mensagem "Resolução em atualização" ou "Vídeo em preparação".

Para trocar o nome ou usar um vídeo do YouTube/Vimeo, edite `src/content/config.ts`
e preencha o campo `pdf` ou `video` do exercício correspondente com a URL desejada.
