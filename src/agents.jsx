import Footer from "./components/footer";
import Header from "./components/header";
import { useEffect, useState } from "react";
import "./agents.sass"
import { Link } from "react-router";

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
      <main className="agentGrid">
        <div className="maxWidth">

          {isLoading ? <p>Indlæser mæglere...</p> : null}
          {errorMessage ? <p>{errorMessage}</p> : null}

          {!isLoading && !errorMessage

            ? agents.map((agent) => (
              <article className="agentCard" key={agent?.id || agent?.email || agent?.name}>
                <Link to={"/agentsdetail/" + agent.id}>
                  {agent?.image?.url ? <img src={agent.image.url} className="agentImg" alt={agent?.name || "Mægler"} /> : null}
                  <h3>{agent?.name || "Ukendt navn"}</h3>
                  <p>{agent?.title || "Titel ikke oplyst"}</p>
                  <p className="agentContact"><img title={agent.email || "Email er ikke oplyst"} src="Vector1.png" alt="" /><img src="Vector2.png" title={agent?.LinkedIn || "LinkedIn ikke fundet"} alt={agent?.title} /></p>
                </Link>
              </article>
            ))
            : null}
        </div>
      </main>
      <Footer />
    </div >
  );
}

export default Agents;
