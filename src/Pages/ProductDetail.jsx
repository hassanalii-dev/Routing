import React from "react";
import { useParams } from "react-router";

function ProductDetail() {
  const { id } = useParams();

  const products = [
    {
      id: 2,
      name: "RTX 5070",
      desc: "High performance graphics card",
      price: 100,
      imageURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHzus2FBMIL9WscN_GYyFE6fLOW8Y3VXLrhQ&s",
    },
    {
      id: 3,
      name: "Samsung S25 Ultra",
      desc: "High resolution monitor",
      price: 200,
      imageURL:
        "https://images.samsung.com/pk/smartphones/galaxy-s25-ultra/buy/product_color_silverBlue_PC.png",
    },
  ];

  const productInfo = products.find(product => product.id == id)

  return (
    <div>
      This is Dynamic Page {id}
      <hr />
      <h1>{productInfo.name}</h1>
      <p>{productInfo.desc}</p>
      <p>${productInfo.price}</p>
      <img src={productInfo.imageURL}/>
    </div>
  );
}

export default ProductDetail;