import Footer from "./components/footer";
import Header from "./components/header";
import { useEffect, useState } from "react";

const API_URL = "https://dinmaegler.onrender.com";

function Agents() {
  const [agents, setAgents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    let isActive = true;

    const loadAgents = async () => {
      try {
        const response = await fetch(`${API_URL}/agents`);

        if (!response.ok) {
          throw new Error("Kunne ikke hente mæglere");
        }

        const data = await response.json();

        if (isActive) {
          setAgents(Array.isArray(data) ? data : []);
        }
      } catch (error) {
        if (isActive) {
          setErrorMessage("Kunne ikke hente mæglere lige nu.");
          console.error("Error fetching agents:", error);
        }
      } finally {
        if (isActive) {
          setIsLoading(false);
        }
      }
    };

    loadAgents();

    return () => {
      isActive = false;
    };
  }, []);

  return (
    <div>
      <Header />
      <main>
        <h1>Mæglere</h1>
        {isLoading ? <p>Indlæser mæglere...</p> : null}
        {errorMessage ? <p>{errorMessage}</p> : null}

        {!isLoading && !errorMessage
          ? agents.map((agent) => (
            <article key={agent?.id || agent?.email || agent?.name}>
              {agent?.image?.url ? <img src={agent.image.url} alt={agent?.name || "Mægler"} /> : null}
              <h2>{agent?.name || "Ukendt navn"}</h2>
              <p>{agent?.title || "Titel ikke oplyst"}</p>
              <p>{agent?.phone || "Telefon ikke oplyst"}</p>
              <p>{agent?.email || "Email ikke oplyst"}</p>
              <p>{agent?.description || "Ingen beskrivelse"}</p>
            </article>
          ))
          : null}
      </main>
      <Footer />
    </div>
  );
}

export default Agents;
