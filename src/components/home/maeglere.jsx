import { useState, useEffect } from "react";
import "../../style/home/agents.scss";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import { fetchData } from "../../utils/API";

export default function Agents() {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    const getAgents = async () => {
      const data = await fetchData("/agents?_limit=3");
      if (data) setAgents(data);
    };
    getAgents();
  }, []);

  return (
    <article className="coworker">
      <div className="coworker__header">
        <h2>Mød vores engagerede medarbejdere</h2>
        <p>
          Din Mægler er garant for altid veluddannet assistance i dit boligsalg.
          Kontakt en af vores medarbejdere.
        </p>
      </div>
      <section className="coworker__grid">
        {agents.length > 0 ? (
          agents.map((agent) => (
            <div key={agent.id} className="coworker__card">
              <a href={`/details/maeglere/${agent.id}`}>
                <img
                  src={agent.image.url || "/Template.jpg"}
                  alt={agent.name}
                />
              </a>
              <div className="coworker__info">
                <h3>
                  <a href={`/details/maeglere/${agent.id}`}>{agent.name}</a>
                </h3>
                <p>{agent.title}</p>
                <div className="coworker__icons">
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
      <div className="coworker__button-container">
        <a href="/maeglere" className="coworker__button">
          Se alle mæglere
        </a>
      </div>
    </article>
  );
}
