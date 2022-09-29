import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { login } from "../actions/auth";
import Loader from "react-loader-spinner";


const Login = ({ login, isAuthenticated, loading }) => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
      
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    const { email, password } = formData;


    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();

        login(email, password);
    };

    if (isAuthenticated) return <Redirect to="/dashboard" />;

    return (
        <div class="container">
            <Helmet>
                <meta charSet="utf-8" />
                <meta
                name="description"
                content="Aplicacion para amantes de los vinos"
                />
                <title>Shop Time | Login</title>
                {/*<link rel="canonical" href="http://mysite.com/activate" /> */}
            </Helmet>


            <form onSubmit={(e) => onSubmit(e)}>
                <div className="form-group">
                <input
                    className="form-control"
                    type="email"
                    placeholder="Email*"
                    name="email"
                    value={email}
                    onChange={(e) => onChange(e)}
                    required
                />
                </div>
                <div className="form-group">
                <input
                    className="form-control"
                    type="password"
                    placeholder="Password*"
                    name="password"
                    value={password}
                    onChange={(e) => onChange(e)}
                    // minLength="6"
                    required
                />
                </div>
                {loading ? (
                <div className="mt-3 d-flex justify-content-center align-items-center">
                    <Loader type="Oval" color="#424242" height={50} width={50} />
                </div>
                ) : (
                <button className="btn btn-primary" type="submit">
                    Login
                </button>
                )}
            </form>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    loading: state.auth.loading,
  });
  
  export default connect(mapStateToProps, { login })(Login);
  