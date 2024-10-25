import React from 'react'
import "./Login.css"
import logo from "../../img/kodigo_logo.png"



export const Login = () => {



  return (
    <div>
      <form id='container'>

      <div> 

      <img id='img_logo' src= {logo} alt='Kodigo_logo'/>
      
      
      </div>


      {/* INGRESO DE DATOS, VALIDACIÓN*/}
      
        
        <input type='text' id='Email_User' placeholder='Nombre de usuario'  />
    
        <input type='password' id='Password_User' placeholder='Contraseña'  />
        
        <button type='submit' id='acceso'>Acceder</button>
        <button type='submit' id='New_user'>Nuevo usuario</button>


        {/*MODIFICAR USUARIOS*/}

        <div id='Container_Modificaciones'>

          <a href='#' id='Modificar_User'>¿Olvidaste tu Contraseña?</a>

          <a href='#'>Aviso de cookies</a>

        </div>


      </form>
    </div>
  )
}
