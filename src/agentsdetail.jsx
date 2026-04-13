import Footer from "./components/footer";
import Header from "./components/header";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./agentsdetail.sass";

const API_URL = "https://dinmaegler.onrender.com";

function AgentsDetail() {
  const { agentId } = useParams();
  const [agent, setAgent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    let isActive = true;

    const loadAgent = async () => {
      setIsLoading(true);
      setErrorMessage("");

      try {
        const singleResponse = await fetch(`${API_URL}/agents/${agentId}`);

        if (singleResponse.ok) {
          const singleData = await singleResponse.json();

          if (isActive) {
            setAgent(singleData || null);
          }

          return;
        }

        const listResponse = await fetch(`${API_URL}/agents`);

        if (!listResponse.ok) {
          throw new Error("Kunne ikke hente mægler");
        }

        const listData = await listResponse.json();
        const matchedAgent = Array.isArray(listData)
          ? listData.find((item) => String(item?.id) === String(agentId))
          : null;

        if (isActive) {
          setAgent(matchedAgent || null);
        }
      } catch (error) {
        if (isActive) {
          setErrorMessage("Kunne ikke hente mæglerdetaljer lige nu.");
        }

        console.error("Error fetching agent details:", error);
      } finally {
        if (isActive) {
          setIsLoading(false);
        }
      }
    };

    loadAgent();

    return () => {
      isActive = false;
    };
  }, [agentId]);

  const firstName = agent?.name?.split(" ")?.[0] || "mægleren";
  const descriptionText = agent?.description || "Ingen beskrivelse endnu.";

  return (
    <div>
      <Header />
      <main className="agentDetailPage maxWidth">
        {isLoading ? <p className="agentDetailStatus">Indlaeser maegler...</p> : null}
        {errorMessage ? <p className="agentDetailStatus">{errorMessage}</p> : null}
        {!isLoading && !errorMessage && !agent ? <p className="agentDetailStatus">Maegleren blev ikke fundet.</p> : null}

        {!isLoading && !errorMessage && agent ? (
          <section className="agentDetailLayout">
            <div className="agentDetailMainCol">
              <article className="agentProfileCard">
                <div className="agentProfileTop">
                  <div className="agentImageWrap">
                    {agent?.image?.url ? <img src={agent.image.url} alt={agent?.name || "Maegler"} className="agentProfileImage" /> : <div className="agentProfileFallback">Intet billede</div>}
                  </div>

                  <div className="agentIdentity">
                    <div className="agentHeadingRow">
                      <h1>{agent?.name || "Ukendt navn"}</h1>
                      <button type="button" className="agentFavoriteButton" aria-label="Gem mægler">♡</button>
                    </div>

                    <p className="agentTitle">{agent?.title || "Titel ikke oplyst"}</p>

                    <ul className="agentContactList">
                      <li>
                        <img src="/call1.svg" alt="" aria-hidden="true" />
                        <span>{agent?.phone || "Telefon ikke oplyst"}</span>
                      </li>
                      <li>
                        <img src="/paper-plane.svg" alt="" aria-hidden="true" />
                        <span>{agent?.email || "Email ikke oplyst"}</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="agentAboutSection">
                  <h2>Om {agent?.name || "maegleren"}</h2>
                  <svg width="60" height="4" viewBox="0 0 60 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="60" height="4" fill="#162A41" />
                  </svg>

                  <p>{descriptionText}</p>
                </div>
                <form className="agentContactForm" onSubmit={(event) => event.preventDefault()}>
                  <h3>Kontakt {agent?.name || "Jeg ved ikke hvad han hedder 🤷🏿"}</h3>
                  <div className="agentFormRow">
                    <label>
                      Navn
                      <input type="text" placeholder="Indtast navn" />
                    </label>
                    <label>
                      Email
                      <input type="email" placeholder="Indtast email" />
                    </label>
                  </div>
                  <label>
                    Emne
                    <input type="text" placeholder="Hvad drejer din henvendelse sig om?" />
                  </label>
                  <label>
                    Besked
                    <textarea rows="6" placeholder="Skriv din besked her..." />
                  </label>
                  <button type="submit">Send besked</button>
                </form>
              </article>
            </div>

            <aside className="agentDetailSidebar">
              <section className="agentSidebarSearch">
                <h3>Search Property</h3>
                <input type="search" placeholder="Search" aria-label="Search property" />
              </section>

              <section className="agentSidebarCallout">
                <p>Find The Best Property For Rent Or Buy</p>
                <svg width="80" height="4" viewBox="0 0 80 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.5" width="79" height="3" fill="#D3DEE8" stroke="black" />
                </svg>

                <span>Call Us Now</span>
                <strong>+00 123 456 789</strong>
              </section>
            </aside>
          </section>
        ) : null}
      </main>
      <Footer />
    </div>
  );
}

export default AgentsDetail;
