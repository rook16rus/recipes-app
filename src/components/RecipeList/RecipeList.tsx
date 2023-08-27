import classNames from "classnames";

import styles from './RecipeList.module.scss';

import recipePhoto from './recipe-1.jpg'

type RecipeListProps = {
    direction?: "column" | "row"
}

const RecipeList = ({direction = "row"}: RecipeListProps) => {
    const clazz = classNames(
        styles.list,
        {[styles["list--column"]]: direction === "column"}
    )

    return (
        <ul className={clazz}>
            <li className={styles.list__item}>
                <div className={styles.list__itemPhoto}>
                    <img src={recipePhoto} alt="Фото блюда"/>
                </div>
                <div className={styles.list__itemContent}>
                    <h3 className={styles.list__itemTitle}>Waffles</h3>
                    <p className={styles.list__itemText}>
                        Great recipe to eat with friends in the morning.
                    </p>
                    <a className={styles.list__itemLink} href="#">
                        See recipe
                    </a>
                </div>
            </li>
        </ul>
    )
}

export default RecipeList