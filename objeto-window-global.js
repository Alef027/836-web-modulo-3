console.log("=== OBJETO WINDOW-GLOBAL ==="),

/*
ORIENTAÇÃO A OBJETOS - CONCEITOS 

--------|-------------|
--------|---OBJETO----|
--------|-------------|
-------/--------------\
-caracteriscas--------ações

--------|-------------|
--------|---Window----| => this é a palavra chave que aponta para o objeto contexto da execusão 
--------|---Global----|
--------|-------------|
-------/--------------\
    nome             meuCurso()
    console                 alert()



*/

var nome = "Alef";

function meuCurso() {
    return "Web 836 - Lets Code";
}

console.log(this); // Window
console.log(nome, window.nome);
console.log(meuCurso(), window.meuCurso());
