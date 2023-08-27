import styles from './Intro.module.scss'

import bgImg from './intro-bg.jpg'

const Intro = () => {
    return (
        <div className={styles.intro} style={{backgroundImage: `url(${bgImg})`, color: "red"}}>
            <h1 className={styles.intro__title}>
                Get inspired, cook with passion and enjoy unforgettable moments at the table.
            </h1>
        </div>
    )
}

export default Intro