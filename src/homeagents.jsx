import { useEffect, useState } from "react";
import "./homeagents.sass"

const AGENTS_URL = "https://dinmaegler.onrender.com/agents?_limit=3";

function HomeAgents() {
    const [agents, setAgents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        let isActive = true;

        const loadAgents = async () => {
            try {
                const response = await fetch(AGENTS_URL);

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
                    console.error("Error fetching home agents:", error);
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

    if (isLoading) {
        return <p>Indlæser mæglere...</p>;
    }

    if (errorMessage) {
        return <p>{errorMessage}</p>;
    }

    return (
        <div className="homeAgentGrid">
            {agents.map((agent) => (
                <article className="homeAgentCard" key={agent?.id || agent?.email || agent?.name}>
                    {agent?.image?.url ? <img src={agent.image.url} className="homeAgentImg" alt={agent?.name || "Mægler"} /> : null}
                    <h3>{agent?.name || "Ukendt navn"}</h3>
                    <p>{agent?.title || "Titel ikke oplyst"}</p>
                    <p className="homeAgentContact"><img title={agent.email || "Email er ikke oplyst"} src="Vector1.png" alt="" /><img src="Vector2.png" title={agent?.LinkedIn || "LinkedIn ikke fundet"} alt={agent?.title} /></p>
                </article>
            ))}
        </div>
    );
}

export default HomeAgents;