const { describe } = require('mocha');
const expect = require("chai").expect;
const funcaoDivisao = require('../divisão');


describe('Testando divisões com múltiplos parametros diferentes', ()=>{
    it('1º Teste: Recebendo 1 parametro, o valor deve ser o mesmo do parametro', async()=>{
        const resultadoDivisao = await funcaoDivisao(1)
        expect(resultadoDivisao).to.equal(1);
    })

    it('2º Teste: Recebendo 2 parametros', async()=>{
        const resultadoDivisao = await funcaoDivisao(12, 6);
        expect(resultadoDivisao).to.equal(2);
    })

    it('3º Teste: Recebendo 2 parametros com posições invertidas', async()=>{
        const resultadoDivisao = await funcaoDivisao(6, 12);
        expect(resultadoDivisao).to.equal(0.5);
    })

    it('4º Teste: Recebendo 4 parametros', async()=>{
        const resultadoDivisao = await funcaoDivisao(100, 2, 5, 2);
        expect(resultadoDivisao).to.equal(5);
    })

    it('5º Teste: Recebendo 3 parametros, sendo um positivo no começo', async() => {
        const resultadoDivisao = await funcaoDivisao(49, -7, -7);
        expect(resultadoDivisao).to.equal(1);        
    });

    it('6º Teste: Recebendo 3 parametros, sendo um positivo no meio', async() => {
        const resultadoDivisao = await funcaoDivisao(-49, 7, -7);
        expect(resultadoDivisao).to.equal(1);        
    });

    it('7º Teste: Recebendo 3 parametros, sendo um positivo no final', async() => {
        const resultadoDivisao = await funcaoDivisao(-49, -7, 7);
        expect(resultadoDivisao).to.equal(1);        
    });

    it('8º Teste: Recebendo 2 parametros sendo decimais', async() => {
        const resultadoDivisao = await funcaoDivisao(5, 3);   
        expect(resultadoDivisao).to.be.closeTo(1.66, 0.01);                 
    });

    it('9º Teste: Recebendo 3 parametros, sendo 2 decimais', async() => {
        const resultadoDivisao = await funcaoDivisao(8.5, 6.2, 2);   
        expect(resultadoDivisao).to.be.closeTo(0.68, 0.01);                 
    });
})