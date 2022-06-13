import React, { useState } from 'react';
import { useHistory } from 'react-router';
import '../LoginForm/login.css';



const LoginForm = () => {
    const history = useHistory()
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
        <body className="corpo">
            <div className="container">
                <div className="form-image">
                   
                </div>
                <div className="form">
                    <h1 className="title">Login</h1>
                    <form onSubmit={handleSubmit} >
                        <div className="form-input"><label for='email'>Email</label>
                            <div className="form-input"><input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} /></div>
                            <label for='password'>Senha</label>
                            <div className="form-input"><input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} /></div>
                        </div>
                        <button type="submit">Entrar</button>
                    </form>
                </div>
            </div>
        </body>
    );
};

export default LoginForm;