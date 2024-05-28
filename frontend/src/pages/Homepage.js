import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Homepage = () => {

  return (
    <div className="homepage">
      <div className="homepage-nav">
        <Navbar></Navbar>
      </div>
      <div className="homepage-content">
        <h1 className="homepage-title">Antelopes Web App</h1>
        <Outlet/>
      </div>
    </div>
  )
}

export default Homepage;
