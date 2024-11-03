import Categories from './components/Categories';
import Header from './components/Header';
import Pizza from './components/Pizza';
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
      <div className='choose-categories'>
        <h2>Все пиццы</h2> 
      </div>
      <div className='pizza-block'>
        <Pizza />
        <Pizza />
        <Pizza />
        <Pizza />
        <Pizza />
        <Pizza />
        <Pizza />
        <Pizza />
      </div>
    </div>
  );
}

export default App;
