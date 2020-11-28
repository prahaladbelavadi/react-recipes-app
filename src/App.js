import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const APP_ID = "1d76bf64";
  const APP_KEY = "95b14140b29e04325c2b2ab7b032493f";

  const [recipes, setRecipes] = useState( useState( [] ) );

  // Sample API Request call: curl "https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free"
  const endpoint = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`

  useEffect( () => {
    getRecipes()
  }, [] )

  const getRecipes = async () => {
    const response = await fetch( endpoint );
    const data = await response.json();
    setRecipes( data.hits )
  }

  console.log( recipes )
  return (
    <div className="App">

      <form className="search-form">
        <input type="text" className="search-bar" />
        <button type="submit" className="search-button">Search</button>
      </form>

    </div>
  );
}

export default App;
