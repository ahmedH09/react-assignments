import ComponentsDisplay from "./ComponentsDisplay";
import "./ComponentsInfo.css";

function ComponentsInfo() {
  let productsList = [
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
    <div className="container comp2 mt-3">
      <h1 className="text-light">The Basics Upgrade-All New Casual Tees</h1>
      <div className="cardRow">
        {/* <div className="item">
          {productsList.map((productObj, index) => (
            <ComponentsDisplay key={index} productObj={productObj}></ComponentsDisplay>
          ))}
        </div> */}
        <div className="item">
            <ComponentsDisplay productObj={productsList[0]} />
        </div>
        <div className="item">
            <ComponentsDisplay productObj={productsList[1]} />
        </div>
        <div className="item">
            <ComponentsDisplay productObj={productsList[2]} />
        </div>
        <div className="item">
            <ComponentsDisplay productObj={productsList[3]} />
        </div>
      </div>
    </div>
  );
}

export default ComponentsInfo;
