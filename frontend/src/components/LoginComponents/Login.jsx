import React, { useEffect } from "react"
import style from "../css/login.module.css"
import logo from "../img/logo.png"
import { useNavigate } from "react-router-dom"

const LoginComponent = () => {
    
    const navigate = useNavigate()

    useEffect(()=> {
        document.title = "sAp &#013 Добро пожаловать"
    })

    function loginClick() {
        let login_value = document.getElementById('loginField').value
        let passsword_value = document.getElementById('pswField').value
        fetch('http://localhost:8080/log', {
            method: 'POST',
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                login: login_value,
                password: passsword_value
            })
        })
        .then(respnse => respnse.json())
        .then(data =>{
            let isLogin = data.right_login
            let isPsw = data.right_psw
            if(isLogin && isPsw) {
                navigate('/')
            }
        })
    }
    function registrationClick() {
        navigate('/registration')
    }
    return(
        <main className={style.loginContainer}>
            <div className={`${style.inputData} ${style.logoContainer}`}>
                <img src={logo} height="100px" />
                <p id={style.logoName}>sAp</p>
            </div>
            <div className={`${style.inputData} ${style.countryContainer}`}>
                <p>Логин</p>
                <input className={style.field} id="loginField" />
                <input type="checkbox" className={style.checkbox} />
            </div>
            <div className={style.inputData}>
                <p>Пароль</p>
                <input className={style.field}  id="pswField" type="password" />
                <input type="checkbox" className={style.checkbox} />
            </div>
            <div className={style.inputData}>
                <p className={style.mail}>Хочу указать почту</p>
                <button id={style.regBtn} onClick={registrationClick}>Зарегистрироваться</button>
                <button id={style.logBtn} onClick={loginClick}>Войти</button>
            </div>
            <div className={`${style.inputData} ${style.agreement}`}>
                <p>Регистрируясь.</p>
                <p>вы принимаете <a>пользовательское соглашение</a></p>
            </div>
        </main>
    )
}

export default LoginComponent