import { NavLink } from "react-router";


function About(){
    return(
        <div>This is About

            <NavLink to="/home" end>
        <br />
        Home
      </NavLink>

        </div>
    )
}

export default About;