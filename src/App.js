import './App.css';
import AddProduct from './Components/AddProduct';
import ProductsList from './Components/ProductsList';

function App() {
  return (
    <div className="App container">
      <div className='card rounded-3 shadow m-3'>
        <div className='card-body'>
          <div>
            <AddProduct />
          </div>
          <div>
            <ProductsList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
