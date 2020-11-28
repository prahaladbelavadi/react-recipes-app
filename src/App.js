import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const APP_ID = "1d76bf64";
  const APP_KEY = "95b14140b29e04325c2b2ab7b032493f";


  // Sample API Request call: curl "https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free"
  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`


  // const [state, setState] = useState( 0 )

  const [counter, setCounter] = useState( 0 );

  useEffect( () => {
    console.log( 'Effect has run' )
  }, [counter] )

  return (
    <div className="App">

      <form className="search-form">
        <input type="text" className="search-bar" />
        <button type="submit" className="search-button">Search</button>
      </form>
      <h1 onClick={() => { setCounter( counter + 1 ) }}>{counter}</h1>

    </div>
  );
}

export default App;
