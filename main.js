'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => document.getElementById('modal').classList.remove('active')

const TempClient = {//variavel contante 
    nome: "suelen" ,
    email: "suelemo@gmail.com",
    celular: "5555555" ,
    cidade: "Porto Alegre"
}
const getLocalStorage = ()=> JSON.parse(localStorage.getItem('db_client'))?? []
const setLocalStorage = (dbClient)=> localStorage.setItem("db_client",JSON.stringify(dbClient))
//crud - create read update delete 

//create
const createClient = (client) =>{
    const dbClient = getLocalStorage()
    dbClient.push(client)
    setLocalStorage(dbClient)
}
const readClient = () => getLocalStorage()
//update

const updateClient = (index, client) =>{
    const dbClient = readClient()
    dbClient[index] = client
    setLocalStorage(dbClient)
}

//delete 
const deleteClient = (index)=>{
    const dbClient = readClient()
    dbClient.splice(index,1)
    setLocalStorage(dbClient)
}



//aguem me salva kkk, to com fome 


// Eventos
document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)
