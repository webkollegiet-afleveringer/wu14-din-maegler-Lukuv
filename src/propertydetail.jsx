import Footer from "./components/footer";
import Header from "./components/header";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./propertydetail.sass"

function PropertyDetail() {
  const { propertyId } = useParams();
  const [homeData, setHomeData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchHome = async () => {
      try {
        const response = await fetch(
          `https://dinmaegler.onrender.com/homes/${propertyId}`
        );

        if (!response.ok) {
          throw new Error("Kunne ikke hente data");
        }

        const data = await response.json();
        setHomeData(data);
      } catch (err) {
        setError("Der skete en fejl ved hentning af data.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchHome();
  }, [propertyId]);


  if (isLoading) return <p>Indlæser...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <Header />
      <img className="propertyDetailHeaderImage" src={homeData.images[0].url}></img>
      <div className="maxWidth">
        <p>Du kigger på detaljer for huset på {propertyId}</p>
      </div>
      <Footer />
    </div>
  );
}

export default PropertyDetail;
