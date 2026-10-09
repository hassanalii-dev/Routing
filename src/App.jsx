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
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      <div className="mx-auto max-w-5xl">
        <header className="mb-8 flex flex-col gap-4 rounded-xl bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-2xl font-bold text-gray-800">
            Our Products
          </h1>

          <nav className="flex gap-5 text-sm font-semibold">
            <NavLink to="/About" className="text-gray-600 hover:text-blue-600">
              About
            </NavLink>
            <NavLink to="/ContactUs" className="text-gray-600 hover:text-blue-600">
              Contact Us
            </NavLink>
          </nav>
        </header>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {products.map((product) => (
            <div
              key={product.id}
              className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              <div className="flex h-52 items-center justify-center rounded-lg bg-gray-50 p-4">
                <img
                  src={product.imageURL}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              <h2 className="mt-4 text-xl font-bold text-gray-800">
                {product.name}
              </h2>

              <p className="mt-2 text-sm text-gray-500">{product.desc}</p>

              <p className="mt-3 text-lg font-semibold text-blue-600">
                ${product.price}
              </p>

              <NavLink
                to={`/products/${product.id}`}
                className="mt-4 inline-block rounded-lg bg-blue-600 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-700"
              >
                View Details
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;