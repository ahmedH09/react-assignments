import "./App.css";
import ProductsInfo from "./Components/ProductsInfo";
import ComponentsInfo from './Components/ComponentsInfo'
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1 className="text-center">React Assignment - 6.1</h1>
      <div className="container-fluid">
        <ProductsInfo />
      </div>
      {/* <div className="container-fluid">
        <ComponentsInfo />
      </div> */}

      {/* creating routes */}
      <Routes>
        {/* route for home page */}

          {/* route for first card (link for first card) */}
          <Route path="componentsInfo" element={<ComponentsInfo />}></Route>
        
      </Routes>

    </div>
  );
}

export default App;
