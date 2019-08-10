import React from 'react';
import Logo from '../assets/logo.svg';

export default function login (){
    return (
    <div className = "login-container">
        <form>
        <img src = {Logo} alt = "Tindev" />
        <input placeholder =" Digite seu" ></input>
        <button></button>
        </form>
    </div> 
        
    )
}
