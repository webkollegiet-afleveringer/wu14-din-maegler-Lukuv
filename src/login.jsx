import { Link } from "react-router";
import Footer from "./components/footer";
import Header from "./components/header";
import "./login.sass"
import { useState } from "react";



function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const loginFunction = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("https://dinmaegler.onrender.com/auth/local", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    identifier: `${email}`,
                    password: `${password}`
                })
            });

            const data = await response.json();

            console.log("Respone:", data);
        } catch (error) {
            console.error("Error", error)
        }
    };
    return (<div> <Header />
        <div className="loginUnderHeader">
            <div className="maxWidth">
                <h2>Account Login</h2>
                <p>
                    <Link to="/">Home</Link>

                    <svg width="2" height="14" viewBox="0 0 2 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect opacity="0.6" width="2" height="14" fill="white" />
                    </svg>

                    <Link to="/login">Login</Link>
                </p>
            </div>
        </div>
        <section className="loginLoginSection">
            <div className="maxWidth">

                <h3>Log ind på din konto</h3>
                <form className="loginInputForm" onSubmit={loginFunction}>
                    <label htmlFor="loginEmail">
                        <legend>Email</legend>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" />
                    </label>
                    <label htmlFor="loginPassword">
                        <legend>Password</legend>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                    </label>
                    <button type="submit">Log ind</button>
                </form>
                <div className="loginQuickLogin">
                    <p>
                        Log ind med
                    </p>
                    <div>
                        <button className="loginQuickButton Google">Google</button>
                        <button className="loginQuickButton Facebook">Facebook</button>
                        <button className="loginQuickButton Twitter">Twitter</button>
                    </div>
                </div>
                <p>Har du ikke en konto? <Link to="register">Opret bruger.</Link></p>
            </div>
        </section>
        <Footer />
    </div>);
}

export default Login;