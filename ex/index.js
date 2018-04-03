const logger = require('./logger')
const duvidaCruel = require('./duvidaCruel')
import Pessoa from './pessoa'
import 'react'
import './estilo.css'

logger.info('Usando o padrão CommonJs')

const pessoa = new Pessoa('Juliano')
console.log(pessoa.toString())

const produto = {
    nome: 'Caneta Bic Preta',
    preco: 1.90,
    desconto: 0.05
}

function clone(objeto) {
    return { ...objeto }
}

const novoProduto = clone(produto)
novoProduto.nome = 'Caneta Bic Azul'

console.log(produto, novoProduto)

export default props => (
    <h1>Olá React</h1>
)
console.log('React Funcionou')