import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const validUsername = "user"; // Замените на ваше имя пользователя
    const validPassword = "pass"; // Замените на ваш пароль

    const handleSubmit = (event) => {
        event.preventDefault();

        if (username === validUsername && password === validPassword) {
            history.push('/home'); // Успешный вход
        } else {
            history.push('/404'); // Некорректные данные
        }
    };

    return (
        <div>
            <h1>Вход в систему</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Имя пользователя:
                    <input 
                        type="text" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        required 
                    />
                </label>
                <br />
                <label>
                    Пароль:
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </label>
                <br />
                <button type="submit">Войти</button>
            </form>
        </div>
    );
};
