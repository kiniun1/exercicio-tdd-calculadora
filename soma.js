const funcaoSoma = async(...dados) => {
    return dados.reduce((acumulador, proximoValor) => acumulador + proximoValor);
};
module.exports = funcaoSoma;