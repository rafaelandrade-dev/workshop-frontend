import { useEffect, useState } from "react"
import Loader from "./components.jsx/Loader/loader"


function App() {

  const [imagem, setImagem] = useState()

  useEffect( ()=> {
    //Executar a função
    getImagem()
  }, [])

  const getImagem = async() => {

    const response = await fetch("https://dog.ceo/api/breeds/image/random")

    const data = await response.json() 
    
    setImagem(data)

  }

  return(
    <div className="app">

      {typeof(imagem) === 'undefined' ?
        <Loader/>

        :

        <img src= {imagem.message}></img>
      }

    </div>


  )

  // const [nome, setNome] = useState('Vazio')

  // useEffect(()=> {
  //   console.log
  // }, [])
  
  // return (

  //   <div className="app">
      
  //     <input type={"text"} onChange={(e)=> setNome(e.target.value)  }></input>

  //     <p>Nome: {nome}</p>
  //   </div>

  // )
}

export default App
