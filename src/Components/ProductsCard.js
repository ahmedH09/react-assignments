import React from "react";
import Products from "./Products";
import "./ProductsCard.css";

function ProductsCard() {
  let productsList = [
    {
      productImage1:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/QC/Home/bedsheet_B06Y5GF9SF_Asins_186x116._SY116_CB409842842_.jpg",
      productTitle1: "Home products",
      productImage2:
        "https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/moritika/pbbaupbgw/xcm_banners_furniture_186x116_186x116_in-en._SY116_CB666250402_.jpg",
      productTitle2: "Furniture",
      productImage3:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GWTransition/2-4_186x116._SY116_CB433910795_.jpg",
      productTitle3: "Home products",
      productImage4:
        "https://images-eu.ssl-images-amazon.com/images/G/31/Symbol/2020/GatewayNK/PC/spb_186x116._SY116_CB433889053_.jpg",
      productTitle4: "Furniture",
    },
    {
      productImage1:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Glasscare1X._SY116_CB410830553_.jpg",
      productTitle1: "Cleaning accessories",
      productImage2:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Rim_tyrecare1x._SY116_CB410830552_.jpg",
      productTitle2: "Tyre & rim care",
      productImage3:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vega_helmet_186x116._SY116_CB405090404_.jpg",
      productTitle3: "Helmet",
      productImage4:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vaccum1x._SY116_CB410830552_.jpg",
      productTitle4: "Vacuum cleaner",
    },
    {
      productImage1:
        "https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/moritika/week27gw/xcm_banners_tvs_186x116-product-badge-4qqt8_186x116_in-en._SY116_CB663888093_.jpg",
      productTitle1: "Smart LED TVs",
      productImage2:
        "https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/moritika/week27gw/xcm_banners_la_186x116_186x116_in-en._SY116_CB663888095_.jpg",
      productTitle2: "Appliances",
      productImage3:
        "https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/moritika/week27gw/xcm_banners_furn_186x116_372x232_in-en._SY116_CB663888090_.jpg",
      productTitle3: "Furniture",
      productImage4:
        "https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/moritika/week27gw/xcm_banners_kitchen_186x116_186x116_in-en._SY116_CB663888093_.jpg",
      productTitle4: "Kitchen products",
    },
    {
      productImage1:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2018/QC/Tools1x._SY116_CB424026090_.jpg",
      productTitle1: "Professional tools",
      productImage2:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2021/BAU_GW_Graphics/PCQC/2._SY116_CB643952439_.jpg",
      productTitle2: "Measuring instruments",
      productImage3:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2021/BAU_GW_Graphics/PCQC/1._SY116_CB643952439_.jpg",
      productTitle3: "Cleaning supplies",
      productImage4:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2018/QC/med1x._SY116_CB424026091_.jpg",
      productTitle4: "Medical supplies",
    },
  ];

  return (
    <div className="text-center">
      <h1 className="">Composition of Components</h1>
      <div className="container cardRow">
        <Products className="" productObj={productsList[0]}>
          <span>Top rated, premium quality | Amazon Brands & more</span>
        </Products>
        <Products className="" productObj={productsList[1]}>
          Automotive essentials | Up to 60% off
        </Products>
        <Products className="" productObj={productsList[2]}>
          Upgrade your home | Amazon Brands & more
        </Products>
        <Products className="" productObj={productsList[3]}>
          Professional tools, testing & more
        </Products>
      </div>
    </div>
  );
}

export default ProductsCard;
