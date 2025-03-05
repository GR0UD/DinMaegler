import PropTypes from "prop-types";
import { IoIosPaperPlane } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

function PropertyDetails({ apartment }) {
  return (
    <div className="property__details">
      <div className="property__details-content">
        <div className="property__description">
          <h2 className="property__description-title">Beskrivelse</h2>
          <p className="property__text">{apartment.description || "-"}</p>
        </div>

        <div className="property__agent">
          <h2 className="property__agent-title">Ansvarlig mægler</h2>
          <div className="property__agent-info">
            <img
              className="property__agent-image"
              src={apartment.agent.image?.url || ""}
              alt="Agent"
            />
            <div className="property__agent-details">
              <h3 className="property__agent-name">
                {apartment.agent.name || "-"}
              </h3>
              <span className="property__agent-role">
                {apartment.agent.title || "-"}
              </span>
              <div className="property__agent-contact">
                <div className="property__agent-phone">
                  <FaPhoneAlt aria-label="Phone icon" />
                  <a href={`tel:${apartment.agent.phone || ""}`}>
                    {apartment.agent.phone || "-"}
                  </a>
                </div>
                <div className="property__agent-email">
                  <IoIosPaperPlane aria-label="Email icon" />
                  <a href={`mailto:${apartment.agent.email || ""}`}>
                    {apartment.agent.email || "-"}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ✅ Adding PropTypes validation to fix ESLint errors
PropertyDetails.propTypes = {
  apartment: PropTypes.shape({
    description: PropTypes.string,
    agent: PropTypes.shape({
      image: PropTypes.shape({
        url: PropTypes.string,
      }),
      name: PropTypes.string,
      title: PropTypes.string,
      phone: PropTypes.string,
      email: PropTypes.string,
    }),
  }).isRequired,
};

export default PropertyDetails;
