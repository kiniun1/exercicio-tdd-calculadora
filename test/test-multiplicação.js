const { describe } = require('mocha');
const expect = require("chai").expect;
const funcaoMultiplicacao = require('../multiplicação');


describe('Testando multiplicações com múltiplos parametros diferentes', ()=>{
    it('1º Teste: Recebendo 1 parametro, o valor deve ser o mesmo do parametro', async()=>{
        const resultadoMultiplicacao = await funcaoMultiplicacao(1)
        expect(resultadoMultiplicacao).to.equal(1);
    })

    it('2º Teste: Recebendo 2 parametros', async()=>{
        const resultadoMultiplicacao = await funcaoMultiplicacao(7, 6);
        expect(resultadoMultiplicacao).to.equal(42);
    })

    it('3º Teste: Recebendo 2 parametros com posições invertidas', async()=>{
        const resultadoMultiplicacao = await funcaoMultiplicacao(6, 7);
        expect(resultadoMultiplicacao).to.equal(42);
    })

    it('4º Teste: Recebendo 4 parametros', async()=>{
        const resultadoMultiplicacao = await funcaoMultiplicacao(10, 15, 20, 60);
        expect(resultadoMultiplicacao).to.equal(180000);
    })

    it('5º Teste: Recebendo 3 parametros, sendo um positivo no começo', async() => {
        const resultadoMultiplicacao = await funcaoMultiplicacao(3, -8, -14);
        expect(resultadoMultiplicacao).to.equal(336);        
    });

    it('6º Teste: Recebendo 3 parametros, sendo um positivo no meio', async() => {
        const resultadoMultiplicacao = await funcaoMultiplicacao(-3, 8, -14);
        expect(resultadoMultiplicacao).to.equal(336);        
    });

    it('7º Teste: Recebendo 3 parametros, sendo um positivo no final', async() => {
        const resultadoMultiplicacao = await funcaoMultiplicacao(-3, -8, 14);
        expect(resultadoMultiplicacao).to.equal(336);        
    });

    it('8º Teste: Recebendo 2 parametros sendo decimais', async() => {
        const resultadoMultiplicacao = await funcaoMultiplicacao(1.1, 2.2);   
        expect(resultadoMultiplicacao).to.be.closeTo(2.42, 0.001);                 
    });

    it('9º Teste: Recebendo 3 parametros, sendo 2 decimais', async() => {
        const resultadoMultiplicacao = await funcaoMultiplicacao(1.1, 2.2, 2);   
        expect(resultadoMultiplicacao).to.be.closeTo(4.84, 0.001);                 
    });
})