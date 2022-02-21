import './App.css';
import Search from "./components/search/Search";


function App() {
  return (
    <div className="App">
        <div className='App-header'>
            <h1>Weather App</h1>
            <small>Created by Sallam Rady Ramadan - 17/02/2022</small>
            <Search/>
        </div>
    </div>
  );
}

export default App;
