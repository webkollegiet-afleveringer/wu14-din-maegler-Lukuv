import Footer from "./components/footer";
import Header from "./components/header";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./propertydetail.sass"
import ViewButtons from "./viewButtons";

const API_URL = "https://dinmaegler.onrender.com";

const toAbsoluteImageUrl = (imageUrl) => {
  if (!imageUrl) {
    return "";
  }

  return imageUrl.startsWith("http") ? imageUrl : `${API_URL}${imageUrl}`;
};

function PropertyDetail() {
  const { propertyId } = useParams();
  const [homeData, setHomeData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [activeView, setActiveView] = useState("gallery");
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
  const galleryImage = toAbsoluteImageUrl(homeData?.images?.[0]?.url);
  const floorplanImage = toAbsoluteImageUrl(homeData?.floorplan?.url);
  const mapQuery = homeData?.title || [homeData?.adress1, homeData?.postalcode, homeData?.city].filter(Boolean).join(" ");
  const mapEmbedUrl = mapQuery
    ? `https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed`
    : "";

  const activeImage =
    activeView === "floorplan"
      ? floorplanImage
      : galleryImage;

  const activeImageLabel =
    activeView === "floorplan"
      ? "Plantegning"
      : activeView === "map"
        ? "Kortvisning kommer senere"
        : "Boligbillede";
  useEffect(() => {
    setActiveView("gallery");

    const fetchHome = async () => {
      try {
        const response = await fetch(`${API_URL}/homes/${propertyId}`);

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
      {activeView === "map" && mapEmbedUrl ? (
        <iframe
          className="propertyDetailHeaderMap"
          src={mapEmbedUrl}
          title={`Kort over ${mapQuery}`}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : activeImage ? (
        <img
          className="propertyDetailHeaderImage"
          src={activeImage}
          alt={activeImageLabel}
        />
      ) : (
        <div className="propertyDetailHeaderFallback">
          {activeImageLabel}
        </div>
      )}
      <div className="maxWidth">
        <section className="propertyDetailTopGrid">
          <div>
            {homeData.adress1}
            <p>
              {homeData.city}
              {homeData.postalcode}
            </p>
          </div>
          <ViewButtons activeView={activeView} onViewChange={setActiveView} />
          {formattedPrice}
        </section>
        <article className="propertyDetailArticle" aria-label="Boligoplysninger">
          <dl className="propertyDetailFactList">
            <div className="propertyDetailFactRow">
              <dt>Sagsnummer:</dt>
              <dd>{homeData.id}</dd>
            </div>
            <div className="propertyDetailFactRow">
              <dt>Boligareal:</dt>
              <dd>{homeData.livingspace} m²</dd>
            </div>
            <div className="propertyDetailFactRow">
              <dt>Grundareal:</dt>
              <dd>{homeData.lotsize || "Grundareal blev ikke fundet"} m²</dd>
            </div>
            <div className="propertyDetailFactRow">
              <dt>Rum/værelser:</dt>
              <dd>{homeData.rooms}</dd>
            </div>
            <div className="propertyDetailFactRow">
              <dt>Antal Plan:</dt>
              <dd>(Ikke fundet)</dd>
            </div>
          </dl>

          <dl className="propertyDetailFactList">
            <div className="propertyDetailFactRow">
              <dt>Kælder:</dt>
              <dd>{homeData.basementsize || "-"}</dd>
            </div>
            <div className="propertyDetailFactRow">
              <dt>Byggeår:</dt>
              <dd>{homeData.built || "-"}</dd>
            </div>
            <div className="propertyDetailFactRow">
              <dt>Ombygget:</dt>
              <dd>{homeData.remodel || "-"}</dd>
            </div>
            <div className="propertyDetailFactRow">
              <dt>Energimærke:</dt>
              <dd>{homeData.energylabel || "-"}</dd>
            </div>
          </dl>

          <dl className="propertyDetailFactList">
            <div className="propertyDetailFactRow">
              <dt>Udbetaling</dt>
              <dd>{formattedPayment || "-"}</dd>
            </div>
            <div className="propertyDetailFactRow">
              <dt>Brutto ex ejerudgift</dt>
              <dd>{formattedGross || "-"}</dd>
            </div>
            <div className="propertyDetailFactRow">
              <dt>Netto ex ejerudgift</dt>
              <dd>{formattedNetto || "-"}</dd>
            </div>
            <div className="propertyDetailFactRow">
              <dt>Ejerudgift</dt>
              <dd>{formattedCost || "-"}</dd>
            </div>
          </dl>
        </article>
      </div>
      <Footer />
    </div>
  );
}

export default PropertyDetail;
