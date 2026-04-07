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
  const formattedPrice =
    typeof homeData?.price === "number"
      ? new Intl.NumberFormat("da-DK", {
        style: "currency",
        currency: "DKK",
        maximumFractionDigits: 0,
      }).format(homeData.price)
      : homeData?.price || "Pris ikke oplyst";
  const formattedPayment =
    typeof homeData?.payment === "number"
      ? new Intl.NumberFormat("da-DK", {
        style: "currency",
        currency: "DKK",
        maximumFractionDigits: 0,
      }).format(homeData.payment)
      : homeData?.payment || "Pris ikke oplyst";
  const formattedGross =
    typeof homeData?.gross === "number"
      ? new Intl.NumberFormat("da-DK", {
        style: "currency",
        currency: "DKK",
        maximumFractionDigits: 0,
      }).format(homeData.gross)
      : homeData?.gross || "Pris ikke oplyst";
  const formattedNetto =
    typeof homeData?.netto === "number"
      ? new Intl.NumberFormat("da-DK", {
        style: "currency",
        currency: "DKK",
        maximumFractionDigits: 0,
      }).format(homeData.netto)
      : homeData?.netto || "Pris ikke oplyst";
  const formattedCost =
    typeof homeData?.cost === "number"
      ? new Intl.NumberFormat("da-DK", {
        style: "currency",
        currency: "DKK",
        maximumFractionDigits: 0,
      }).format(homeData.cost)
      : homeData?.cost || "Pris ikke oplyst";
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
        console.log(data);
        //HUSK AT FJERN LOG!!!!

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
        <section className="propertyDetailTopGrid">
          <div>
            {homeData.adress1}
            <p>
              {homeData.city}
              {homeData.postalcode}
            </p>
          </div>
          {formattedPrice}
        </section>
        <article className="propertyDetailArticle" aria-label="Boligoplysninger">
          <dl className="propertyDetailFactList">
            <div className="propertyDetailFactRow">
              <dt>Sagsnummer</dt>
              <dd>{homeData.id}</dd>
            </div>
            <div className="propertyDetailFactRow">
              <dt>Boligareal</dt>
              <dd>{homeData.livingspace}</dd>
            </div>
            <div className="propertyDetailFactRow">
              <dt>Grundareal</dt>
              <dd>{homeData.lotsize}</dd>
            </div>
            <div className="propertyDetailFactRow">
              <dt>Rum/værelser</dt>
              <dd>{homeData.rooms}</dd>
            </div>
            <div className="propertyDetailFactRow">
              <dt>Antal Plan</dt>
              <dd>(Ikke fundet)</dd>
            </div>
          </dl>

          <dl className="propertyDetailFactList">
            <div className="propertyDetailFactRow">
              <dt>Kælder</dt>
              <dd>{homeData.basementsize}</dd>
            </div>
            <div className="propertyDetailFactRow">
              <dt>Byggeår</dt>
              <dd>{homeData.built}</dd>
            </div>
            <div className="propertyDetailFactRow">
              <dt>Ombygget</dt>
              <dd>{homeData.remodel}</dd>
            </div>
            <div className="propertyDetailFactRow">
              <dt>Energimærke</dt>
              <dd>{homeData.energylabel}</dd>
            </div>
          </dl>

          <dl className="propertyDetailFactList">
            <div className="propertyDetailFactRow">
              <dt>Udbetaling</dt>
              <dd>{formattedPayment}</dd>
            </div>
            <div className="propertyDetailFactRow">
              <dt>Brutto ex ejerudgift</dt>
              <dd>{formattedGross}</dd>
            </div>
            <div className="propertyDetailFactRow">
              <dt>Netto ex ejerudgift</dt>
              <dd>{formattedNetto}</dd>
            </div>
            <div className="propertyDetailFactRow">
              <dt>Ejerudgift</dt>
              <dd>{formattedCost}</dd>
            </div>
          </dl>
        </article>
      </div>
      <Footer />
    </div>
  );
}

export default PropertyDetail;
