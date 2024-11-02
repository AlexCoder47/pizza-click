import Categories from './components/Categories';
import Header from './components/Header';
import Sort from './components/Sort';
import './scss/app.scss';

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <div className='second-header'>
        <Categories />
        <Sort />
      </div>
      
      <div>
        sdsd
      </div>
    </div>
  );
}

export default App;
