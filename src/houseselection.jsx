import { useEffect, useState } from "react";
import "./houseselection.sass";
import { Link } from "react-router";

const API_URL = "https://dinmaegler.onrender.com";

const toAbsoluteImageUrl = (imageUrl) => {
    if (!imageUrl) {
        return "";
    }

    return imageUrl.startsWith("http") ? imageUrl : `${API_URL}${imageUrl}`;
};

function HouseSelction() {
    const [homes, setHomes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");


    useEffect(() => {
        let isActive = true;

        const loadHomes = async () => {
            try {
                const response = await fetch(`${API_URL}/homes`);

                if (!response.ok) {
                    throw new Error("Could not load homes");
                }

                const data = await response.json();

                if (isActive) {
                    setHomes(Array.isArray(data) ? data : []);
                }
            } catch (error) {
                if (isActive) {
                    setErrorMessage("Kunne ikke hente boliger lige nu.");
                    console.error("Error fetching house data:", error);
                }
            } finally {
                if (isActive) {
                    setIsLoading(false);
                }
            }
        };

        loadHomes();

        return () => {
            isActive = false;
        };
    }, []);

    if (isLoading) {
        return <div className="HouseSelectionContainer">Indlæser boliger...</div>;
    }

    if (errorMessage) {
        return <div className="HouseSelectionContainer">{errorMessage}</div>;
    }

    return (
        <div className="HouseSelectionContainer">
            {homes.slice(0, 4).map((home) => {
                const imageUrl = toAbsoluteImageUrl(home?.images?.[0]?.url || home?.image?.url);
                const adress1 = home?.adress1 || "Ukendt adresse";
                const cityLine = [home?.postalcode, home?.city].filter(Boolean).join(" ");
                const homeType = home?.type || "Bolig";
                const expensesCost = `Ejerudgift: ${home?.cost ?? "Ikke oplyst"} kr.`;
                const formattedPrice =
                    typeof home?.price === "number" ? `Kr. ${home.price.toLocaleString("da-DK")}` : home?.price;

                return (
                    <article className="HouseSelectionCard" key={home?.id || adress1}>
                        <Link to={"/propertydetail/" + home.id}>
                            {imageUrl ? <img src={imageUrl} className="houseSelectionImage" alt={adress1} /> : null}
                            <div className="houseSelectionInformationMainDiv">
                                <h3>{adress1}</h3>
                                <p>{cityLine}</p>
                                <p className="houseSelectionEjerudgift">
                                    <span className="houseSelectionHomeType">{homeType}</span>
                                    <span>•</span>
                                    <span className="houseSelectionExpensesCost">{expensesCost}</span>
                                </p>
                            </div>
                            <span className="houseSelectionSvgLine">

                                <svg width="492" height="1" viewBox="0 0 492 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="492" height="1" fill="#D3DEE8" />
                                </svg>
                            </span>

                            <div className="houseSelectionPriceDiv">
                                <div className="houseSelectionPriceSpan">
                                    <p className={"houseSelectionEnergy " + home.energylabel}>{home.energylabel}</p>
                                    <p>{home.rooms} værelser • {home.livingspace} m²</p>
                                </div>
                                <p className="houseSelectionPriceP">{formattedPrice || "Pris ikke oplyst"}</p>
                            </div>
                        </Link>
                    </article>
                );
            })}
        </div>
    );
}

export default HouseSelction;
