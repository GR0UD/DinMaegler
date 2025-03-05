

export default function RegisterForm() {
    return (
        <div className="login">
            <form className="login__form">
                <h2 className="login__title">Opret bruger hos Din Mægler</h2>
                <div className="login__input-group">
                    <label className="login__label" htmlFor="name">Fulde navn</label>
                    <input className="login__input" type="name" id="name" placeholder="Fulde navn" />
                </div>
                <div className="login__input-group">
                    <label className="login__label" htmlFor="email">Email adresse</label>
                    <input className="login__input" type="email" id="email" placeholder="Email adresse" />
                </div>
                <div className="login__input-group">
                    <label className="login__label" htmlFor="password">Password</label>
                    <input className="login__input" type="password" id="password" placeholder="Password" />
                </div>
                <div className="login__input-group">
                    <label className="login__label" htmlFor="password">Bekræft password</label>
                    <input className="login__input" type="password" id="password" placeholder="Bekræft password" />
                </div>
                <button type="submit" className="login__submit">Opret bruger</button>
                
            </form>
        </div>
    );
}

 