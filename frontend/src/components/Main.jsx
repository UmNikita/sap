import React from "react"
import { Outlet, useNavigate } from "react-router-dom"
import style from "./css/main.module.css"
import logo from "./img/mainComponentBtn/home.png"
import createGroup from "./img/mainComponentBtn/createGroup.png"
import createServer from "./img/mainComponentBtn/createServer.png"
import help from "./img/mainComponentBtn/help.png"
import theme from "./img/mainComponentBtn/theme.png"
import settings from "./img/mainComponentBtn/settings.png"

const MainComponent = () => {
    const navigate = useNavigate()

    const serversMenuClck = () => {
        const sideMenu = document.getElementById(style.currentContainer)
        sideMenu.style.width = "350px"
    }

    const closeDropMenuClck = () => {
        const sideMenu = document.getElementById(style.dropMenuContainer)
        const contentContainer = document.getElementById(style.contentContainer)
        contentContainer.style.filter = "brightness(100%)"
        sideMenu.style.display = "none"
    }

    const openDropMenuClck = () => {
        const sideMenu = document.getElementById(style.dropMenuContainer)
        const contentContainer = document.getElementById(style.contentContainer)
        contentContainer.style.filter = "brightness(60%)"
        sideMenu.style.display = "flex"
    }

    const chatMenuClick = () => {
        const sideMenu = document.getElementById(style.currentContainer)
        sideMenu.style.width = "100px"
    }

    return (
        <main id={style.main}>
            <div id={style.dropMenuContainer} className={style.sidePanel}>
                <button className={style.menuDropBtn} onClick={()=>{navigate('/createServer')}}>
                    <img src={createServer} height="25px" />
                    <span>Создать сервер</span>
                </button>
                <button className={style.menuDropBtn} onClick={()=>{navigate('/createGroup')}}>
                    <img src={createGroup} height="25px" />
                    <span>Создать группу</span>
                </button>
                <button className={style.menuDropBtn} onClick={()=>{navigate('/help')}}>
                    <img src={help} height="25px" />
                    <span>Помощь. Связь с поддержкой</span>
                </button>
                <button className={style.menuDropBtn}>
                    <img src={theme} height="25px" />
                    <span>Тема: Темная</span>
                </button>
                <button className={style.menuDropBtn} id={style.settingsBtn} onClick={()=>{navigate('/settings')}}>
                    <img src={settings} height="25px" />
                    <span>Настройки</span>
                </button>
                <button className={style.menuDropBtn} onClick={closeDropMenuClck}>
                    <img src={logo} height="25px" />
                    <span>На главную</span>
                </button>
                <p id={style.signature}>sAp - Desktop</p>
            </div>
            <div id={style.menuContainer} className={style.sidePanel}>
                <button className={style.menuBtn} id={style.burgerMenu} onClick={openDropMenuClck}></button>
                <button className={style.menuBtn} id={style.chatsMenu} onClick={chatMenuClick}></button>
                <button className={style.menuBtn} id={style.serversMenu} onClick={serversMenuClck}></button>
                <button className={style.menuBtn} id={style.settingsMenu}></button>
                <button className={style.menuBtn} id={style.homeMenu}></button>
            </div>
            <div className={style.sidePanel} id={style.currentContainer}></div>
            <div id={style.contentContainer}>
                <Outlet />
            </div>
        </main>
    )
}

export default MainComponent