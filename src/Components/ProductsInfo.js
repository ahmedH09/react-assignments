import ProductsCarousel from "./ProductsCarousel";

function ProductsInfo() {

    let productsList = [
        {
            productImg1:"https://m.media-amazon.com/images/I/51tEyERnJpS._AC_SY200_.jpg",
            productImg2:"https://m.media-amazon.com/images/I/41O6qSud6XL._AC_SY200_.jpg",
            productImg3:"https://m.media-amazon.com/images/I/81YN2c3u93L._AC_SY200_.jpg",
            productImg4:"https://m.media-amazon.com/images/I/71QPsIqbKgL._AC_SY200_.jpg",
            productImg5:"https://m.media-amazon.com/images/I/41gAB7GbI9L._AC_SY200_.jpg",
            productImg6:"https://m.media-amazon.com/images/I/714reuTnBLS._AC_SY200_.jpg",
            productImg7:"https://m.media-amazon.com/images/I/61ayoEIYfDL._AC_SY200_.jpg",
            productImg8:"https://m.media-amazon.com/images/I/41o-CJxD0eS._AC_SY200_.jpg",
            productImg9:"https://m.media-amazon.com/images/I/918Rh-XUN5L._AC_SY200_.jpg",
            productImg10:"https://m.media-amazon.com/images/I/41l6zjzGqjL._AC_SY200_.jpg",
        }
    ];

    return (
        <div className="container text-center border border-dark">
            <h1>Composition of components</h1>
            {/* component-1 (carousel-1) */}
            <ProductsCarousel productObj = {productsList[0]} />
        </div>
    );
}

export default ProductsInfo;