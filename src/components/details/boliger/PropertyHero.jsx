import PropTypes from "prop-types";

function PropertyHero({ imageUrl }) {
  return (
    <div className="property__hero">
      <img src={imageUrl} alt="Property" className="property__image" />
    </div>
  );
}

PropertyHero.propTypes = {
  imageUrl: PropTypes.string.isRequired,
};

export default PropertyHero;
