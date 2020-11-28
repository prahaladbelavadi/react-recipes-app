import { useEffect, useState } from 'react';
import Recipe from "./Recipe";
import './App.css';

function App() {

  const APP_ID = "1d76bf64";
  const APP_KEY = "95b14140b29e04325c2b2ab7b032493f";

  const [recipes, setRecipes] = useState( [] );
  const [search, setSearch] = useState( '' );
  const [query, setQuery] = useState( 'Turkey' );

  // Sample API Request call: curl "https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free"
  const endpoint = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  useEffect( () => {
    getRecipes();
  }, [query] );

  const getRecipes = async () => {
    const response = await fetch( endpoint );
    const data = response.json();
    setRecipes( data.hits );
  };

  const updateSearch = event => {
    setSearch( event.target.value );
  };

  const getSearch = event => {
    event.preventDefault();
    setQuery( search );
    setSearch( "" );
  };


  return (
    <div className="App">

      <form onSubmit={getSearch} className="search-form">
        <input type="text" className="search-bar" onChange={updateSearch} />
        <button type="submit" className="search-button">Search</button>
      </form>

      <div className="recipes">
        {recipes.map( recipe => (
          // <Recipe title={recipe.recipe.title} calories={recipe.recipe.calories} image={recipe.recipe.image}  />
          // <Recipe title={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image} key={recipe.recipe.id} />
          // <Recipe recipe={recipe.recipe} />
          // <Recipe title={recipe.recipe}/>
          // <Recipe title={recipe.recipe.label} image={recipe.recipe.image} calories={recipe.recipe.calories} key={recipe.recipe.label} ingredients={recipe.recipe.ingredients} />
          <Recipe />
        )
        )}

      </div>
    </div>
  );
}

export default App;
