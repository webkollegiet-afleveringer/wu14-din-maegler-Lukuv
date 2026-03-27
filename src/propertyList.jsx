import { Link } from "react-router";
import Header from "./components/header";
import HouseListing from "./houselisting";
import Footer from "./components/footer";

function PropertyList() {
  return (
    <div>
      <Header />
      <div className="maxWidth">

        <HouseListing />
      </div>
      <Footer />
    </div>
  );
}

export default PropertyList;
