import styles from './RecipeSinglePage.module.scss';

const RecipeSinglePage = () => {
    return (
        <section className={styles.recipeSingle}>
            <div className="text-container">
                <h3>Ingredients</h3>
                <ul>
                    <li>1 1/2 cups all-purpose flour</li>
                    <li>3 tablespoons sugar</li>
                    <li>1 tablespoon baking powder</li>
                    <li>1/2 teaspoon salt</li>
                    <li>1 and 1/4 cups milk</li>
                    <li>1 egg</li>
                    <li>3 tablespoons melted butter</li>
                    <li>Vegetable oil (to grease the frying pan)</li>
                    <li>Toppings to taste (maple syrup, fresh fruit, whipped cream, etc.)</li>
                </ul>
                <h3>Method of preparation</h3>
                <ol>
                    <li>In a large bowl, combine flour, sugar, baking powder and salt.</li>
                    <li>In another bowl, beat the milk, egg and melted butter until a homogeneous mixture is obtained.</li>
                    <li>Pour the liquid mixture into the bowl with the dry ingredients. </li>
                    <li>Stir gently with a spoon or fouet until the ingredients are just combined. Do not overmix, as this can make the pancakes heavy.</li>
                    <li>Preheat a non-stick skillet over medium heat. Lightly grease the frying pan with vegetable oil.</li>
                    <li>Use about 1/4 cup of the dough for each pancake. Pour the dough into the hot skillet and spread it slightly to form a round pancake.</li>
                    <li>Cook until small bubbles appear on the surface of the pancake and the edges are slightly browned. This takes about 2-3 minutes.</li>
                    <li>Turn the pancake over with a spatula and cook for another 1-2 minutes, or until golden brown completely.</li>
                    <li>Transfer the pancake to a plate and repeat the process with the rest of the dough.</li>
                </ol>
                <h3>Additional Information</h3>
                <p>
                    This recipe makes about 8 medium pancakes. You can adjust the size of the pancakes according to your
                    preference. Enjoy your delicious American pancakes!
                </p>
            </div>
        </section>
    )
}

export default RecipeSinglePage