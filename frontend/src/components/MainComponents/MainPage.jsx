import React, { useEffect } from "react"
import style from "../css/mainPage.module.css"
import logo from "../img/mainComponentBtn/logo.png"


const MainPageComponent = () => {
    useEffect(()=>{
        document.title = "sAp - удобный игровой менеджер"
    })
    return (
        <div id={style.mainPageContainer}>
            <div id={style.header}></div>
            <div id={style.logoContainer}>
                <img src={logo}/>
            </div>
            <div id={style.fieldContainer}>
                <input placeholder="Введите название сервера, чтобы его найти" />
                <p id={style.setBg}>Поставить свой фон</p>
            </div>
        </div>
    )
}

export default MainPageComponent