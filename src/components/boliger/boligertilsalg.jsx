import { useEffect, useState } from "react";
import { fetchData } from "../../utils/API";
import { Link } from "react-router-dom";
const energyLabelColors = {
  A: "#10AC84", // Green
  B: "#F2C94C", // Yellow
  C: "#F2994A", // Orange
  D: "#EB5757", // Red
  E: "#F2994A", // Orange
  F: "#EB5757", // Red
  G: "#EB5757", // Red
};

export default function Boligertilsalg() {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    const getApartments = async () => {
      const data = await fetchData("/homes?_limit=8&_start=8");
      if (data) setApartments(data);
    };
    getApartments();
  }, []);

  return (
    <>
      <section className="apartmentsforsale">
        <div className="apartmentsforsale__wrapper">
          <div className="apartmentsforsale__content">
            {apartments.length > 0 ? (
              apartments.map((apartment) => (
                <article key={apartment.id} className="apartmentsforsale__card">
                  <Link to={`/details/boliger/${apartment.id}`}>
                    <img
                      src={apartment.images[0].url || "/house.png"}
                      alt={apartment.images.name}
                    />
                  </Link>
                  <div className="apartmentsforsale__details">
                    <div className="apartmentsforsale__location">
                      <h4 className="apartmentsforsale__location-title">
                        <Link to={`/details/boliger/${apartment.id}`}>
                          {apartment.adress1} • {apartment.adress2}
                        </Link>{" "}
                      </h4>
                      <p className="apartmentsforsale__post">
                        {apartment.city} {apartment.postalcode}
                      </p>
                      <p className="apartmentsforsale__expenditure">
                        <span className="apartmentsforsale__villa">
                          {apartment.type} •
                        </span>{" "}
                        Ejerudgift: {apartment.cost} kr.
                      </p>
                    </div>
                    <hr />
                    <div className="apartmentsforsale__stats">
                      <p
                        className="apartmentsforsale__energylabel"
                        style={{
                          backgroundColor:
                            energyLabelColors[
                              apartment.energylabel?.toUpperCase()
                            ] || "#EB5757",
                        }}
                      >
                        {apartment.energylabel}
                      </p>
                      <p className="apartmentsforsale__rooms">
                        {apartment.rooms} værelser • {apartment.size} m²
                      </p>
                      <p className="apartmentsforsale__price">
                        {apartment.price.toLocaleString("da-DK", {
                          style: "currency",
                          currency: "DKK",
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 0,
                        })}
                      </p>
                    </div>
                  </div>
                </article>
              ))
            ) : (
              <p>Loading apartments...</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
