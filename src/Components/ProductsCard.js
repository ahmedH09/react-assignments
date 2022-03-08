import React from "react";
import Products from "./Products";
import "./ProductsCard.css";

function ProductsCard() {
  let productsList = [
    {
      productImg:
        "https://m.media-amazon.com/images/I/71E5zB1qbIL._AC_UY327_FMwebp_QL65_.jpg",
      productHeading: "Apple iPhone 12 (64GB) - (Product) RED",
      productRating: "4.6/5",
      cost: "₹55,999",
      totalCost: "₹65,900",
      discount: "₹9,901 (15%)",
    },
    {
      productImg:
        "https://m.media-amazon.com/images/I/71os5DRhuSL._AC_UY327_FMwebp_QL65_.jpg",
      productHeading: "Samsung Galaxy M32 5G (Sky Blue, 8GB RAM, 128GB Storage)",
      productRating: "4.2/5",
      cost: "₹22,999",
      totalCost: "₹25,990",
      discount: "₹2,991 (12%)",
    },
    {
      productImg:
        "https://m.media-amazon.com/images/I/81zLNgcvlaL._AC_UY327_FMwebp_QL65_.jpg",
      productHeading: "Redmi Note 11 (Horizon Blue, 4GB RAM, 64GB Storage)",
      productRating: "3.9/5",
      cost: "₹13,999",
      totalCost: "₹17,999",
      discount: "₹4,000 (22%)",
    },
    {
      productImg:
        "https://m.media-amazon.com/images/I/61iy2Ru9KdS._AC_UY327_FMwebp_QL65_.jpg",
      productHeading: "OnePlus Nord CE 5G (Blue Void, 8GB RAM, 128GB Storage)",
      productRating: "4.1/5",
      cost: "₹24,999",
      totalCost: "₹27,999",
      discount: "₹3,000 (12%)",
    },
    {
      productImg:
        "https://m.media-amazon.com/images/I/51mjLMt9XOL._AC_UL480_FMwebp_QL65_.jpg",
      productHeading: "Men's Solid Regular Fit T-Shirt",
      productRating: "3.8/5",
      cost: "₹335",
      totalCost: "₹1,299",
      discount: "₹964 (74%)",
    },
    {
        productImg:
          "https://m.media-amazon.com/images/I/51BKqwKidvL._AC_UL480_FMwebp_QL65_.jpg",
        productHeading: "Men's Regular Fit Striped Round Neck T-Shirt",
        productRating: "3.8/5",
        cost: "₹380",
        totalCost: "₹1,299",
        discount: "₹919 (71%)",
    },
    {
        productImg:
          "https://m.media-amazon.com/images/I/41nvyksD5lL._AC_UL480_FMwebp_QL65_.jpg",
        productHeading: "Regular Fit Full Sleeve Men's T-Shirt",
        productRating: "3.4/5",
        cost: "₹329",
        totalCost: "₹1,099",
        discount: "₹770 (70%)",
    },
    {
        productImg:
          "https://m.media-amazon.com/images/I/41qcwTYie8L._AC_UL480_FMwebp_QL65_.jpg",
        productHeading: "Tshirt for Men | Cotton t-Shirt| Round Neck Tshirt",
        productRating: "3.6/5",
        cost: "₹349",
        totalCost: "₹999",
        discount: "₹650 (65%)",
    },
  ];

  return (
    <div>
    <div className="container mt-3">
      <h3 className="">Refurbished Mobile Phones</h3>
      <div className="cardRow">
        <div className="item">
            <Products productObj={productsList[0]} />
        </div>
        <div className="item">
            <Products productObj={productsList[1]} />
        </div>
        <div className="item">
            <Products productObj={productsList[2]} />
        </div>
        <div className="item">
            <Products productObj={productsList[3]} />
        </div>
      </div>
    </div>

    <div className="container mt-3">
      <h3 className="">The Basics Upgrade-All New Casual Tees</h3>
      <div className="cardRow">
        <div className="item">
            <Products productObj={productsList[4]} />
        </div>
        <div className="item">
            <Products productObj={productsList[5]} />
        </div>
        <div className="item">
            <Products productObj={productsList[6]} />
        </div>
        <div className="item">
            <Products productObj={productsList[7]} />
        </div>
      </div>
    </div>
    
    </div>
  );
}

export default ProductsCard;
