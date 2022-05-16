const { describe } = require('mocha');
const expect = require("chai").expect;
const funcaoSoma = require('../soma');


describe('Testando adições com múltiplos parametros diferentes', ()=>{
    it('1º Teste: Recebendo 1 parametro, o valor deve ser o mesmo do parametro', async()=>{
        const resultadoSoma = await funcaoSoma(1)
        expect(resultadoSoma).to.equal(1);
    })

    it('2º Teste: Recebendo 2 parametros', async()=>{
        const resultadoSoma = await funcaoSoma(7, 6);
        expect(resultadoSoma).to.equal(13);
    })

    it('3º Teste: Recebendo 2 parametros com posições invertidas', async()=>{
        const resultadoSoma = await funcaoSoma(6, 7);
        expect(resultadoSoma).to.equal(13);
    })

    it('4º Teste: Recebendo 4 parametros', async()=>{
        const resultadoSoma = await funcaoSoma(10, 15, 20, 60);
        expect(resultadoSoma).to.equal(105);
    })

    it('5º Teste: Recebendo 3 parametros, sendo um negativo', async() => {
        const resultadoSoma = await funcaoSoma(3, 8, -14);
        expect(resultadoSoma).to.equal(-3);        
    });

    it('6º Teste: Recebendo 3 parametros, sendo 2 decimais', async() => {
        const resultadoSoma = await funcaoSoma(1.1, 2.2, -2);   
        expect(resultadoSoma).to.be.closeTo(1.3, 0.001);                 
    });

    it('7º Teste: Recebendo 3 parametros, sendo um positivo no começo', async() => {
        const resultadoSoma = await funcaoSoma(3, -8, -14);
        expect(resultadoSoma).to.equal(-19);        
    });

    it('8º Teste: Recebendo 3 parametros, sendo um positivo no meio', async() => {
        const resultadoSoma = await funcaoSoma(-3, 8, -14);
        expect(resultadoSoma).to.equal(-9);        
    });

    it('9º Teste: Recebendo 3 parametros, sendo um positivo no final', async() => {
        const resultadoSoma = await funcaoSoma(-3, -8, 14);
        expect(resultadoSoma).to.equal(3);        
    });
})