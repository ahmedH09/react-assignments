import "./App.css";
import ProductsInfo from "./Components/ProductsInfo";
import ComponentsInfo from './Components/ComponentsInfo'

function App() {
  return (
    <div className="App">
      <h1 className="text-center">React Assignment - 6.1</h1>
      <div className="container-fluid">
        <ProductsInfo />
      </div>
      <div className="container-fluid">
        <ComponentsInfo />
      </div>
    </div>
  );
}

export default App;
