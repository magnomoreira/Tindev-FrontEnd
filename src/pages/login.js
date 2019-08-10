import React from 'react';
import Logo from '../assets/logo.svg';
import './login.css';

export default function login (){
    return (
    <div className = "login-container">
        <form>
        <img src = {Logo} alt = "Tindev" />
        <input placeholder =" Digite seu" ></input>
        <button>Enviar</button>
        </form>
    </div> 
        
    )
}
