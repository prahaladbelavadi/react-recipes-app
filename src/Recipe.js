import React from 'react';
import styles from './recipe.module.css';

export default function Recipe( props ) {
    const { title, image, calories, ingredients } = props;
    return (
        <div className={styles.recipe}>
            <h1>{title}</h1>
            <p>{calories}</p>
            <img src={image} alt={title} className={styles.image} />
            <ol>
                {ingredients.map( ingredient =>
                    ( <li>{ingredient}</li> )
                )}
            </ol>
        </div>
    );
}

