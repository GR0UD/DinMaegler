import { Link } from "react-router-dom";
import "../style/not-found.scss";
import Notfoundfooter from "../components/Notfoundfooter";

function NotFound() {
  return (
    <>
      <section className="not-found-page">
        <div className="not-found-content">
          <h1>Hov!</h1>
          <p className="not-found-message">
            Du er havnet på en side som ikke findes!
          </p>
          <p className="not-found-description">
            Det er vi kede af! Vi har sendt en besked af sted til vores
            internetbureau, og bedt dem se på fejlen.
          </p>
          <Link to="/" className="not-found-home-link">
            Tilbage til forsiden
          </Link>
        </div>
      </section>
      <Notfoundfooter />
    </>
  );
}

export default NotFound;
