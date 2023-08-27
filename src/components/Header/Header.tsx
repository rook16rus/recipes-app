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
            link: "#",
            text: "Home"
        },
        {
            link: "#",
            text: "Recipes"
        },
        {
            link: "#",
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
                                        <a href={link}>{text}</a>
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