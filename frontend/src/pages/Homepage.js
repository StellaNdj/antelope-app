import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Homepage = () => {

  return (
    <div className="homepage">
      <div className="homepage-nav">
        <Navbar></Navbar>
      </div>
      <div className="homepage-content">
        <Outlet/>
      </div>
    </div>
  )
}

export default Homepage;
