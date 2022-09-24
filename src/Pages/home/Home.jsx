import Featured from "../../Components/featured/Featured";
import FeaturedHotel from "../../Components/featuredHotel/FeaturedHotel";
import Header from "../../Components/header/Header";
import { Navbar } from "../../Components/navbar/Navbar";
import PropertyList from "../../Components/PropertyList/PropertyList";
import "./home.css";
export const Home = () => {
  return (
      <div>
        <Navbar />
        <Header/>
        <div className="homeContainer">
          <Featured/>
          <h1 className="homeTitle">Browse by property type</h1>
          <PropertyList/>
          <h1 className="homeTitle">Homes guests love</h1>
          <FeaturedHotel/>
        </div>
        
      </div>
  );
};
