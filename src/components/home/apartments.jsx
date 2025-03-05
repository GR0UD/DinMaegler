import { useState, useEffect } from "react";
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

export default function Apartments() {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    const getApartments = async () => {
      const data = await fetchData("/homes?_limit=4&_start=4");
      if (data) setApartments(data);
    };
    getApartments();
  }, []);

  return (
    <section className="apartments">
      <div className="apartments__wrapper">
        <h1 className="apartments__title">Udvalgte boliger</h1>
        <p className="apartments__txt">
          <span>There</span> are many variations of passages of{" "}
          <span>Lorem Ipsum</span> available, but the majority have suffered
          alteration.
        </p>
        <div className="apartments__content">
          {apartments.length > 0 ? (
            apartments.map((apartment) => (
              <article key={apartment.id} className="apartments__card">
                <Link to={`/details/boliger/${apartment.id}`}>
                  <img
                    src={apartment.images[0].url || "/house.png"}
                    alt={apartment.images.name}
                  />
                </Link>
                <div className="apartments__details">
                  <div className="apartments__location">
                    <h4 className="apartments__location-title">
                      <Link to={`/details/boliger/${apartment.id}`}>
                        {apartment.adress1} • {apartment.adress2}
                      </Link>
                    </h4>
                    <p className="apartments__post">
                      {apartment.city} {apartment.postalcode}
                    </p>
                    <p className="apartments__expenditure">
                      <span className="apartments__villa">
                        {apartment.type} •
                      </span>{" "}
                      Ejerudgift: {apartment.cost} kr.
                    </p>
                  </div>
                  <hr />
                  <div className="apartments__stats">
                    <p
                      className="apartments__energylabel"
                      style={{
                        backgroundColor:
                          energyLabelColors[
                            apartment.energylabel?.toUpperCase()
                          ] || "#EB5757",
                      }}
                    >
                      {apartment.energylabel}
                    </p>
                    <p className="apartments__rooms">
                      {apartment.rooms} værelser • {apartment.size} m²
                    </p>
                    <p className="apartments__price">
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
        <div className="apartments__button-container">
          <a href="/boliger" className="apartments__button">
            Se alle boliger
          </a>
        </div>
      </div>
    </section>
  );
}
