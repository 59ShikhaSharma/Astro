import { useState } from "react"
import { useLogin } from "../hooks/useLogin"

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {login, error, isLoading} = useLogin()

    const handleSubmit = async(event) => {
        event.preventDefault();

        await login(email, password);
    }

    return (
        <>
        <div className="login-container">
        <img  className = "unit-logo2" src = {require("../assets/logo2.png")} alt = "uni"/>
        <form className="login" onSubmit={handleSubmit}>
            <h3 className="log">Log in</h3>

            <label>Email: </label>
            <input
                type="email"
                onChange={(event) => setEmail(event.target.value)}
                value={email}
            />

            <label>Password: </label>
            <input
                type="password"
                onChange={(event) => setPassword(event.target.value)}
                value={password}
            />

            <button disabled = {isLoading}>Login</button>
            {error && <div className="error">{error}</div>}
        </form>
        </div>
        </>

    )

}

export default Login

