import { Link } from "react-router-dom";

export default function LoginForm() {
    return (
        <div className="login">
            <form className="login__form">
                <h2 className="login__title">Log ind på din konto</h2>
                <div className="login__input-group">
                    <label className="login__label" htmlFor="email">Email</label>
                    <input className="login__input" type="email" id="email" placeholder="Email" />
                </div>
                <div className="login__input-group">
                    <label className="login__label" htmlFor="password">Password</label>
                    <input className="login__input" type="password" id="password" placeholder="Password" />
                </div>
                <button type="submit" className="login__submit">Log ind</button>
                <p className="login__methods">Log ind med</p>
                <div className="login__social">
                    <button className="login__social-button login__social-button--google">Google</button>
                    <button className="login__social-button login__social-button--facebook">Facebook</button>
                    <button className="login__social-button login__social-button--twitter">Twitter</button>
                </div>
                    <p className="login__register">Har du ikke en konto? <Link to="/register" className="login__register-link">Opret bruger.</Link></p>
                
            </form>
        </div>
    );
}

 