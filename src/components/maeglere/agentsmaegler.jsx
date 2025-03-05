import { useEffect, useState } from "react";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import { fetchData } from "../../utils/API";
import "../../style/maeglere/agentsmaegler.scss";

export default function Agentsmaegler() {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    const getAgents = async () => {
      const data = await fetchData("/agents?_limit=6");
      if (data) setAgents(data);
    };
    getAgents();
  }, []);
  return (
    <>
      <article className="agentsmaegler">
        <section className="agentsmaegler__grid">
          {agents.length > 0 ? (
            agents.map((agent) => (
              <div key={agent.id} className="agentsmaegler__card">
                <img
                  src={agent.image.url || "/Template.jpg"}
                  alt={agent.name}
                />
                <div className="agentsmaegler__info">
                  <h3>{agent.name}</h3>
                  <p>{agent.title}</p>
                  <div className="agentsmaegler__icons">
                    <a href={`mailto:${agent.email}`}>
                      <FaEnvelope />
                    </a>
                    <a
                      href={agent.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Loading agents...</p>
          )}
        </section>
      </article>
    </>
  );
}
