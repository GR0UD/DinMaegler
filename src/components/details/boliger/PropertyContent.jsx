import PropTypes from "prop-types";
import { PiBlueprintThin } from "react-icons/pi";
import { CiImageOn, CiLocationOn, CiHeart } from "react-icons/ci";

function PropertyContent({ apartment }) {
  return (
    <div className="property__content">
      <div className="property__header">
        <h4 className="property__address">
          {apartment.adress1}, {apartment.adress2}
        </h4>
        <div className="property__icons">
          <PiBlueprintThin className="property__icon" />
          <CiImageOn className="property__icon" />
          <CiLocationOn className="property__icon" />
          <CiHeart className="property__icon" />
        </div>
        <h2 className="property__price">
          Kr.{" "}
          {apartment.price.toLocaleString("da-DK", {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          })}
        </h2>
      </div>
      <hr className="property__divider" />

      <table className="property__table">
        <tbody>
          <tr>
            <td className="property__label">Sagsnummer:</td>
            <td className="property__value">{apartment.caseNumber || "-"}</td>
            <td className="property__label">Kælder:</td>
            <td className="property__value">{apartment.basementsize || "-"}</td>
            <td className="property__label">Udbetaling:</td>
            <td className="property__value">
              Kr. {apartment.payment?.toLocaleString("da-DK") || "-"}
            </td>
          </tr>
          <tr>
            <td className="property__label">Boligareal:</td>
            <td className="property__value">
              {apartment.livingspace ? `${apartment.livingspace} m²` : "-"}
            </td>
            <td className="property__label">Byggeår:</td>
            <td className="property__value">{apartment.built || "-"}</td>
            <td className="property__label">Brutto ex ejerudgift:</td>
            <td className="property__value">Kr. {apartment.gross || "-"}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

// ✅ Adding PropTypes validation to fix ESLint errors
PropertyContent.propTypes = {
  apartment: PropTypes.shape({
    adress1: PropTypes.string.isRequired,
    adress2: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    caseNumber: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    basementsize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    payment: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    livingspace: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    built: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    gross: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }).isRequired,
};

export default PropertyContent;
