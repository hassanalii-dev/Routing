import { NavLink } from "react-router";

function App(){
  return(
    <div className="text-red-500">This is App.jsx

      <NavLink to="/about" end>
        <br />
        About
      </NavLink>

    </div>
  )
}

export default App;