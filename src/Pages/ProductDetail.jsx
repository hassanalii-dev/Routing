import { NavLink, useParams } from "react-router";

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

  const productInfo = products.find(
    (product) => product.id === Number(id)
  );

  if (!productInfo) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
        <div className="rounded-xl bg-white p-8 text-center shadow-sm">
          <h1 className="text-2xl font-bold text-gray-800">
            Product Not Found
          </h1>
          <NavLink
            to="/home"
            className="mt-4 inline-block text-blue-600 hover:underline"
          >
            Back to Products
          </NavLink>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="mx-auto max-w-3xl rounded-xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <NavLink
          to="/home"
          className="text-sm font-semibold text-blue-600 hover:underline"
        >
          &larr; Back to Products
        </NavLink>

        <div className="mt-6 grid grid-cols-1 items-center gap-8 sm:grid-cols-2">
          <div className="flex h-64 items-center justify-center rounded-lg bg-gray-50 p-5">
            <img
              src={productInfo.imageURL}
              alt={productInfo.name}
              className="max-h-full max-w-full object-contain"
            />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              {productInfo.name}
            </h1>
            <p className="mt-3 text-gray-500">{productInfo.desc}</p>
            <p className="mt-5 text-2xl font-bold text-blue-600">
              ${productInfo.price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;