import { NavLink } from "react-router";

function App() {
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

  return (
    <div>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.desc}</p>
            <p>{product.price}</p>

            <img
              src={product.imageURL}
              width={100}
            />

            <br />

            <NavLink to={`/products/${product.id}`}>
              Detail
            </NavLink>
          </div>
        );
      })}

      <div className="min-h-screen bg-gray-100 p-6">
        <div className="mt-8">
          <NavLink
            to="/About"
            className="font-semibold text-red-500"
          >
            About
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default App;