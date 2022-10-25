const Logger = require('logplease');
const logger = Logger.create('utils');
const numeros = require('./numeros')

const numerosPrueba = [2, 3, 101, 201, 202, 100];

for (const num of numerosPrueba) {
    if(numeros.esPar(num))
        logger.info(`El número ${num} es par`)
    else
        logger.error(`El número ${num} no es par`)
}