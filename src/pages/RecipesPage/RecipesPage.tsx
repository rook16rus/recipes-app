import Wanted from "../../components/Wantend/Wanted";

import styles from './RecipePage.module.scss';
import RecipeList from "../../components/RecipeList/RecipeList";

const RecipesPage = () => {
    return (
        <>
            <Wanted />
            <section className={styles.recipes}>
                <div className="narrow-container">
                    <h2 className={styles.recipes__title}>
                        Last Recipes
                    </h2>
                    <RecipeList direction="column" />
                </div>
            </section>
        </>
    )
}

export default RecipesPage