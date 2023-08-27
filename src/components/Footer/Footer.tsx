import styles from './Footer.module.scss';

import logo from '../Header/logo.svg';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__logo}>
                <img src={logo} alt="Логотип"/>
            </div>
        </footer>
    )
}

export default Footer