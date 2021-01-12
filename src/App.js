import './App.css';
import Searchbox from './Components/Searchbox.js';
import Nominations from './Components/Nominations.js';
import Results from './Components/Results.js';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Searchbox />
      <Nominations />
      <Results />
    </div>
  );
}

export default App;
