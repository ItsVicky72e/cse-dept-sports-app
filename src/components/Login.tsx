import { useState } from "react";

import "../login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState('');

    const homeNav = useNavigate();

    const getEmail = (e: any) => {
        setEmail(e.target.value);
    };

    const getPassword = (e: any) => {
        setPassword(e.target.value);
    };

    const goToHome = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("email---->" + email);
        console.log("password---->" + password);
        const myuser = {email,password};

        axios.post("http://localhost:8080/cse/dept/sports/login", 
           myuser
        ).then(res => {
            console.log("res---->" + res.data);
            if (res.data === true) {
                homeNav("/disall");
            } else {
                setError("Email and Password are incorrect!!!");
            }
        }).catch(error => {
            console.error('There was an error!', error);
        });
        


    };

    return (
        <div>
            <div className="container h-100">
                <div className="d-flex justify-content-center h-100">
                    <div className="user_card">
                        <div className="d-flex justify-content-center">
                            <div className="brand_logo_container">
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFv-R9W5ujDd5y0WZhQYxMo041ZyZiFgcsHA&s"
                                    className="brand_logo"
                                    alt="Logo"
                                />
                            </div>
                        </div>
                        <div className="d-flex justify-content-center form_container">
                            <form onSubmit={goToHome}>
                                <div>
                                    {error}
                                </div>

                                <div className="input-group mb-3">
                                    <div className="input-group-append">
                                        <span className="input-group-text">
                                            <i className="fas fa-user"></i>
                                        </span>
                                    </div>
                                    <input
                                        type="email"
                                        onChange={getEmail}
                                        className="form-control input_user"
                                        placeholder="enter email"
                                    />
                                </div>
                                <div className="input-group mb-2">
                                    <div className="input-group-append">
                                        <span className="input-group-text">
                                            <i className="fas fa-key"></i>
                                        </span>
                                    </div>
                                    <input
                                        type="password"
                                        onChange={getPassword}
                                        className="form-control input_pass"
                                        placeholder="password"
                                    />
                                </div>
                                <div className="d-flex justify-content-center mt-3 login_container">
                                    <button type="submit" name="button" className="btn login_btn">
                                        Login
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}