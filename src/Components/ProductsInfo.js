import ProductsCard from "./ProductsCard";
import "./ProductsInfo.css";

function ProductsInfo() {
  let productsList = [
    {
      productImg:
        "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/DW_CC_-_March_379x304._SY304_CB655397356_.jpg",
    },
    {
      productImg:
        "https://images-eu.ssl-images-amazon.com/images/G/31/Symbol/2021/wrs/mencombo_low._SY304_CB666768535_.jpg",
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
    <div className="container">
      <h1 className="text-center">Composition of components</h1>
      {/* component-1*/}
      <div className="cardRow">
        <ProductsCard productObj={productsList[0]}>
          <span>Effective dishwashing for Indian cooking</span>
        </ProductsCard>
        {/* component-2*/}
        <ProductsCard productObj={productsList[1]}>
          <span>Value Packs under ₹599 | Amazon Brands & more</span>
        </ProductsCard>
        {/* component-3*/}
        <ProductsCard productObj={productsList[2]}>
          <span>Up to 45% off | Top offers from Amazon Brand - Solimo</span>
        </ProductsCard>
        {/* component-4*/}
        <ProductsCard productObj={productsList[3]}>
          <span>Up to 60% off | Fitness essentials to set up your home</span>
        </ProductsCard>
      </div>
    </div>
  );
}

export default ProductsInfo;
