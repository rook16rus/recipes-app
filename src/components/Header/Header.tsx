import { NavLink } from "react-router-dom";

import styles from "./Header.module.scss"

import searchIcon from './search-icon.svg'
import logo from './logo.svg'

const Header = () => {
    type TLink = {
        link: string,
        text: string
    }

    const links: Array<TLink> = [
        {
            link: "/",
            text: "Home"
        },
        {
            link: "/recipes",
            text: "Recipes"
        },
        {
            link: "/about",
            text: "About"
        },
    ]

    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.header__wrapper}>
                    <div className={styles.header__logo}>
                        <img src={logo} alt="Logo"/>
                    </div>
                    <ul className={styles.header__menu}>
                        {
                            links.map(({link, text}, i) => {
                                return (
                                    <li className={styles.header__menuItem} key={i}>
                                        <NavLink className={({isActive}) => (isActive ? styles.active : "")} to={link} >{text}</NavLink>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className={styles.header__search}>
                        <img src={searchIcon} alt="Иконка поиска"/>
                        <input className={styles.header__searchInput} type="text" placeholder="Search recipe"/>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;