// let msg = "Olá Mundo!"
// function minhaFuncao(msg) {
//     console.log(msg)
//     window.alert(msg)
// }
// minhaFuncao('Olá Mundo')


// function soma(a, b){
//     let somar = a + b
//     return somar
// }

// let resultado = soma(5, 5)
// console.log(resultado)


// function minhaFuncao(){
//     alert("Você clicou no botão")
// }

// const nomes = [1, 'rafael', 3, 4, true, 'aramis']
// console.log(nomes)
// console.log(nomes.length)// saber o tamanho da constante (iniciando do 0)

// nomes.push(50)// adiciona um elemento ao final do array .push


// nomes.pop()

// nomes.unshift()//Adiciona um elemento no inicio do array
// nomes.shift()// Tira o primeiro elemento da array

// console.log(nomes)


// const numeros = [1, 2, 3, 4, 5]
// const numeros2 = [6, 7, 8, 9]

// const novoArray = numeros.concat(numeros2)//.concat concatena/junta as arrays

// const arrayCortado = novoArray.slice(0, 5)//.slice fatia o array
// console.log(arrayCotado)

// const encontrarNoArray = novoArray.indexOf(5)

// const encontrarNoArray = novoArray.findIndex((numero) =>{
//     return numero === 5
// })

// console.log(encontrarNoArray)

// novoArray.forEach((elemento, indice) => {
//     console.log(elemento)
// })

// const exemploMap = novoArray.map((item) => {
//     return item === 5
// })
// console.log(exemploMap)

// const usuarios = [
//     {
//         nome: "João",
//         idade: "25",
//         profissao: "Desenvolvedor Front-end",
//         salario: 3500
//     },
//     {
//         nome: "Maria",
//         idade: "18",
//         profissao: "Jogador de Vôlei",
//         salario: 40000
//     },
//     {
//         nome: "Jonas",
//         idade: "28",
//         profissao: "Pedreiro",
//         salario: 20000
//     }
// ]

// //FILTER
// // const filtrarUsuarios = usuarios.filter((usuario)=> {
// //     return usuario.salario > 3500
// // })

// // console.log(filtrarUsuarios)



// // REDUCE
// // const somarSalaraios = usuarios.reduce((total, usuario)=> {
// //     return total + usuario.salario
// // }, 0)

// // console.log(somarSalaraios.toLocaleString('pt-BR', {
// //     style: 'currency',
// //     currency: 'BRL'
// // })) 


// // OBJETOS
// let pessoa = {
//     nome: "Maria",
//     idade: 35,
//     hobbies: ["vôlei", "skate", "dormir"],
//     caracteristicas: {
//         cabelo: 'cacheado',
//         altura: 1.65,
//         peso: 65
//     },
//     esta_viva: true
// }
// pessoa.profissao = "Jogador de lol"

// pessoa.idade = 30
// pessoa['esta_viva']

// console.log(pessoa)

// for(const pessoa in pessoas) {
//     console.log(pessoas)
// }

// let {nome: nomePessoa} = nomePessoa
// nomePessoa = 'João'

// console.log(nomePessoa)