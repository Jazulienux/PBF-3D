import React, { useState, useContext } from 'react';
import { AuthContext } from './index';
import * as firebase from 'firebase';

const Join = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setErrors] = useState("");

    const Auth = useContext(AuthContext);
    const handleForm = e => {
        e.preventDefault();
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(res => {
                if (res.user) {
                    Auth.setLoggedIn(true);
                    alert("User Created Successfully");
                }
            })
            .catch(err => {
                setErrors(err.message);
            })
    };

    const handleLogin = () => {
        const base_provider = new firebase.auth.GoogleAuthProvider();
        firebase.
            auth().
            signInWithPopup(base_provider)
            .then(res => {
                Auth.setLoggedIn(true);
                alert("Success Login");
            })
            .catch(e => {
                setErrors(e.message);
            });
    };

    return (
        <div>
            <h1>Join</h1>
            <form onSubmit={e => handleForm(e)}>
                <input
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    name="email"
                    type="email"
                    placeholder="email"
                    required
                />
                <input
                    onChange={e => setPassword(e.target.value)}
                    name="password"
                    value={password}
                    type="password"
                    placeholder="password"
                    required
                />
                <hr />
                <button className="googleBtn" type="button" onClick={handleLogin}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1024px-Google_%22G%22_Logo.svg.png" alt="logo" />
                    Join With Google
                </button>
                <button type="submit">Join</button>
                <hr />
                <span>{error}</span>
            </form>
        </div>
    );

};

export default Join;