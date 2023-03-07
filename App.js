import './App.css';
import Header from './review/Header';
import Movies from './review/Movies';
import movie from './movie.json';
import Footer from './review/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        {
          movie.map((item) =>
            <Movies title={item.Title} year={item.Year} poster={item.Poster} />
          )
        }
      </div>
      <Footer />
    </div>
  );
}

export default App;
