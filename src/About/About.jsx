import { NavLink } from "react-router";

function About() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4 py-8">
      <div className="w-full max-w-lg rounded-xl border border-gray-200 bg-white p-8 text-center shadow-sm">
        <h1 className="text-2xl font-bold text-gray-800">About Us</h1>

        <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-blue-500"></div>

        <p className="mt-5 leading-7 text-gray-600">
          Welcome to our product store. Explore our products and view their
          details to learn more.
        </p>

        <NavLink
          to="/home"
          className="mt-6 inline-block rounded-lg bg-blue-600 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-700"
        >
          Back to Home
        </NavLink>
      </div>
    </div>
  );
}

export default About;