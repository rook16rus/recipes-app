import RecipeList from "../../components/RecipeList/RecipeList";

import styles from './MainPage.module.scss'

const MainPage = () => {
    return (
        <section className={styles.wanted}>
            <h2 className={styles.wanted__title}>
                Most wanted recipes
            </h2>
            <RecipeList />
        </section>
    )
}

export default MainPage