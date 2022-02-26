import ProductsCard from "./ProductsCard";
import "./ProductsInfo.css";

function ProductsInfo() {
  let productsList = [
    {
      productImg:
        "https://m.media-amazon.com/images/I/81ct9hJAeCL._AC_UL480_QL65_.jpg",
    },
    {
      productImg:
        "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/DW_CC_-_March_379x304._SY304_CB655397356_.jpg",
    },
    
    {
      productImg:
        "https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/moritika/baugwsept/xcm_banners_furniture_pc_cc_379x304_in-en._SY304_CB643322439_.jpg",
    },
    {
      productImg:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img19/Sports/GW_Desktop/1199101_379x304_Compressed._SY304_CB448278349_.jpg",
    },
  ];

  return (
    <div className="container comp1">
      <h1 className="text-center text-light">Composition of components</h1>
      <div className="cardRow">
        {/* component-1*/}
        <div className="item">
          <ProductsCard productObj={productsList[0]}>
          <span>Amazon Brand - Symbol Men's Regular T-Shirt</span>
          </ProductsCard>
        </div>
        {/* component-2*/}
        <div className="item">
          <ProductsCard productObj={productsList[1]}>
            <span>Effective dishwashing for Indian cooking</span>
          </ProductsCard>
        </div>
        {/* component-3*/}
        <div className="item">
          <ProductsCard productObj={productsList[2]}>
            <span>Up to 45% off | Top offers from Amazon Brand - Solimo</span>
          </ProductsCard>
        </div>
        {/* component-4*/}
        <div className="item">
          <ProductsCard productObj={productsList[3]}>
            <span>Up to 60% off | Fitness essentials to set up your home</span>
          </ProductsCard>
        </div>
      </div>
    </div>
  );
}

export default ProductsInfo;
