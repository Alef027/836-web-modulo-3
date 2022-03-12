console.log("=== OBJETO LITERAL (DINAMICO) ===");

/*

ORIENTAÇÃO A OBJETOS - CONCEITOS 

--------|-------------|
--------|---OBJETO----|
--------|-------------|
-------/--------------\
-caracteriscas--------ações

--------|-------------|
--------|---CARRO-----|
--------|-------------|
-------/---------------\
-PROPRIEDADES--------métodos
marca----------------buzinar()
cor------------------acelerar()
ano------------------ligar()
modelo---------------desligar()
motor----------------freiar()
direção--------------marchaRe()
acessorios-----------seta()
*/

// objeto literal 
const carro = {};

// add propriedades
// sintaxe dot notation(notação de ponto)
//objeto.propriedade; --> ler prop
//objeto.propriedade = valor; --> def prop
carro.marca = "VW";
carro.cor = "preto";
carro.modelo = "Fox";

// bracket notation (notação colchetes)
//objeto["propriedade"]; --> ler prop
//objeto["propriedade"] = valor; --> def prop
carro["ano"] = 2015;
caroo["motor"] = 1.6;
carro["acessorios"] = ["vidros verdes", "travas elétricas"];


// add métodos
// dot notation(notação de ponto)
//objeto.metodo(); --> exec método
//objeto.metodo = function() {} --> def método
carro.buzinar = function() {
    return "bibi";
};

carro.ligar = function() {
    return "ON";
};

// bracket notation (notação colchetes)
//objeto["metodo"] (); --> exec método
//objeto["metodo"] = function({}); --> def método
carro["desligar"] = function() {
    return "OFF";
};

carro["acelerar"] = function() {
    return "VRUMM";
};

console.log(carro);
console.log(carro.ano, carro["modelo"]); // lendo props
console.log(carro.ligar(), carro["desligar"]()); // exec métodos