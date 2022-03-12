console.log("=== USO DO THIS ===");

/*

ORIENTAÇÃO A OBJETOS - CONCEITOS 

--------|-------------|
--------|---OBJETO----|
--------|-------------|
-------/--------------\
-caracteriscas--------ações

--------|-------------|
--------|---CAR-------|
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

const car = {
    marca: "Fiat",
    modelo: "Uno",
    cor: "vermelho",
    ano: 1999,
    velo: {
        min: 0,
        max: 10,
        atual: 0
    },
    status: false,
    ligar: function() {
        return this.status = true;
    },
    desligar: function() {
        return this.status = false;
    },
    acelerar: function() {
        if (this.velo.atual == this.velo.max) {
            return this.velo.atual 
        }else if (this.status){
        //return this.velo.atual = this.velo.atual + 1;
        //return this.velo.atual += 1;
        return ++this.velo.atual;
        } else {
            return this.velo.atual;
        }
        },   
        
    freiar: function() {
        if (this.velo.atual == this.velo.min) {
            return this.velo.atual 
        }else {
        return --this.velo.atual;
        }
        }
};

console.log(car);
console.log(car.modelo, car.ano, car.cor, car.velo.max);