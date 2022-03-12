console.log("=== OBJETO LITERAL (AUTO-DEFINIDO) ===");

/*

ORIENTAÇÃO A OBJETOS - CONCEITOS 

--------|-------------|
--------|---OBJETO----|
--------|-------------|
-------/--------------\
-caracteriscas--------ações
Define como         Define o que
o obj é              o obj é
                    capaz de fazer

--------|-------------|
--------|---PESSOA----|
--------|-------------|
-------/--------------\
-PROPRIEDADE--------MÉTODO
nome               comer()
altura             andar()
peso               trabalhar()
idade              dormir()
profissao          falar()
natural            ...
nacional
...
*/

const pessoa = {
    nome: "Jose",
    altura: 1.88,
    peso: 99,
    idade: 35,
    profissao: "dev",
    comer: function() {
        return  "nham nham";
    },
    andar: function() {
        return "clac calc ...";
    },
    dormir: function() {
        return "zzz...";
    },
    falar: function() {
        return "bla bla bla";
    }
}

console.log(pessoa); // objeto
console.log(pessoa.nome, pessoa.profissao); // objeto.prop
console.log(pessoa.comer(), pessoa.dormir()); // objeto.metodo()

