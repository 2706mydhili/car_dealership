import React,{ useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Login.css'
const Login = () => {
    const [username, setUsername] = useState('.');
    const [password, setPassword] = useState('.');
    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const res = await axios.post('http://localhost:3001/api/auth/login', { username, password });
            alert('Login successful');
            localStorage.setItem('token', res.data.token);
        } catch (err) {
            alert(err.response.data.message);
        }
    };
    return(
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                       type="text"
                       id="password"
                       value={password}
                       onChange={(e) => setPassword(e.target.value)}
                       required
                    />
                </div>
              <button type="submit" className="login-button">Login</button>  
            </form>
            <div className="signup-container">
                <p>Don't have an account</p>
                <Link to="/register" className="signup-button">Sign Up</Link>
            </div>
        </div>
    );
};
export default Login;