import './App.css';
import rocket from './rocket.png'
import keazoN from './KeazoNBOOKS.png'
import SearchComponent from './Components/SearchComponent';
import Navicons from './Components/Navicons';
import BookInfoComponent from './Components/BookInfoComponent';
import BooksListComponent from './Components/BooksListComponent';
function App() {
  return (
    <div className="App">
      <nav>
        <section id='logo_cont'>
          <img src={rocket} alt="rocket" id='rocket'/>
          <label htmlFor="" id='logo'>KeazoN</label><sub id='logo_sub'>BOOKS</sub>
        </section>
        <SearchComponent></SearchComponent>
        <Navicons></Navicons>
      </nav>

      <BookInfoComponent></BookInfoComponent>

      <label htmlFor="">More Books</label>
      <section>
        <BooksListComponent></BooksListComponent>
      </section>
      
    </div>
  );
}

export default App;
