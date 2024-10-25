import './assets/css/App.css'
import { New_user } from './assets/pages/Login/Components/New_user'
import { Login } from './assets/pages/Login/Login'
import { getAllBootcamps } from './services/bootcamp.services'




function App() {

  {/*ACTUALMENTE ESTÁ SIN REACT-ROUTER PARA MOVILIDAD*/}
  
  return (
    <>

    {/*Quitar comentario para ver el contenido*/}

    
    {/*<New_user/>*/}
    <Login/>

  
  
    </>
  )
}

export default App
