import React, { useState } from 'react';
import { useHistory } from 'react-router';
import './style.css';


const Login = () => {
    const history = useHistory ()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email.length === 0) {
            alert("Preencha seu Email!");
            return;
        }
        if (password.length === 0) {
            alert("Preencha sua Senha!");
            return;
        }
        history.push("/Mapa");
    };

    return (
        <div className='tela-login'>    
            <h1 className="title">Login</h1>
            <form onSubmit={handleSubmit} >
                <label for='email'>Email</label>
                <div><input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} /></div>
                <label for='password'>Senha</label>
                <div><input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} /></div>
                <button type="submit">Entrar</button>
            </form>    
    </div>
    );
};

export default Login;