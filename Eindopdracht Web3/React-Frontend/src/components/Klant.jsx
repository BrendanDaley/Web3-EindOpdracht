import React from 'react'
import axios from 'axios';

const Klant = () => {
    return (
        <div>
            <h1>Log In</h1>
            <label>E-mail</label>
            <input type="email"/>
            <label>Password</label>
            <input type="password" name='passwordInput'/>
            <button>
                {/*Hier de log in functie maken  */}
            </button>
        </div>
    )
}

export default Klant
