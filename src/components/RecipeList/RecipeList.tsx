import styles from './RecipeList.module.scss';

import recipePhoto from './recipe-1.jpg'

const RecipeList = () => {
    return (
        <ul className={styles.list}>
            <li className={styles.list__item}>
                <div className={styles.list__itemPhoto}>
                    <img src={recipePhoto} alt="Фото блюда"/>
                </div>
                <h3 className={styles.list__itemTitle}>Waffles</h3>
                <p className={styles.list__itemText}>
                    Great recipe to eat with friends in the morning.
                </p>
                <a className={styles.list__itemLink} href="#">
                    See recipe
                </a>
            </li>
        </ul>
    )
}

export default RecipeList