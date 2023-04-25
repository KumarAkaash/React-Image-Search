
import './App.css';
import SearchPhotos from './components/SearchPhotos';


function App() {

  

  return (
    <div className="App">
      
    <div className="container">
    <button className='btn'>Bookmark</button>
    <h1 className="title">React Photo Search</h1>
    
    <SearchPhotos/>
    </div>
    </div>
  );
}

export default App;
