import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchData } from "../../../utils/API";

import { CiImageOn, CiLocationOn, CiHeart } from "react-icons/ci";
import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
import { IoIosPaperPlane } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import "../../../style/details/property.scss";

function PropertyDetails() {
  const { id } = useParams();
  const [apartment, setApartment] = useState(null);
  const [activeView, setActiveView] = useState("img1");

  useEffect(() => {
    const getApartment = async () => {
      const data = await fetchData(`/homes/${id}`);
      if (data) setApartment(data);
    };
    getApartment();
  }, [id]);

  const ModalImg = [
    {
      img1: apartment?.images?.[0]?.url,
      img2: apartment?.floorplan?.url,
    },
  ];

  if (!apartment) return <div>Loading...</div>;

  return (
    <section className="property">
      {/* Modal */}
      <div className="modal">
        <div
          className="clickable"
          onClick={() =>
            (document.querySelector(".modal").style.display = "none")
          }
        ></div>
        <div className="modal__content">
          {activeView === "img1" && (
            <img
              className="PropertyImg"
              src={ModalImg[0].img1}
              alt="Property Image"
            />
          )}
          {activeView === "img2" && (
            <img
              className="PropertyImg"
              src={ModalImg[0].img2}
              alt="Floorplan"
            />
          )}
          {activeView === "iframe" && (
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2251.763704484697!2d12.077807676874455!3d55.64092477304299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46525fda8582267b%3A0x3a79b4f713b2bf83!2sSt%C3%A6ndertorvet%2078%2C%204000%20Roskilde!5e0!3m2!1sen!2sdk!4v1740171114918!5m2!1sen!2sdk"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          )}
        </div>
        <div className="modal__buttons">
          <CiImageOn
            className="property__icon"
            onClick={() => {
              setActiveView("img1");
              document.querySelector(".modal").style.display = "flex";
            }}
          />
          <HiOutlineSquare3Stack3D
            className="property__icon"
            onClick={() => {
              setActiveView("img2");
              document.querySelector(".modal").style.display = "flex";
            }}
          />
          <CiLocationOn
            className="property__icon"
            onClick={() => {
              setActiveView("iframe");
              document.querySelector(".modal").style.display = "flex";
            }}
          />
          <CiHeart className="property__icon" />
        </div>
      </div>

      {/* Property Hero Section */}
      <div>
        <div className="property__hero">
          <img
            src={apartment.images?.[0]?.url}
            alt="Property"
            className="property__image"
          />
        </div>

        <div className="property__content">
          <div className="property__header">
            <h4 className="property__address">
              {apartment.adress1}, {apartment.adress2}
            </h4>
            <div className="property__icons">
              <CiImageOn
                className="property__icon"
                onClick={() =>
                  setActiveView("img1") ||
                  (document.querySelector(".modal").style.display = "flex")
                }
              />
              <HiOutlineSquare3Stack3D
                className="property__icon"
                onClick={() =>
                  setActiveView("img2") ||
                  (document.querySelector(".modal").style.display = "flex")
                }
              />
              <CiLocationOn
                className="property__icon"
                onClick={() =>
                  setActiveView("iframe") ||
                  (document.querySelector(".modal").style.display = "flex")
                }
              />
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

          {/* Property Table */}
          <table className="property__table">
            <tbody>
              <tr>
                <td className="property__label">Sagsnummer:</td>
                <td className="property__value">
                  {apartment.caseNumber || "-"}
                </td>
                <td className="property__label">Kælder:</td>
                <td className="property__value">
                  {apartment.basementsize || "-"}
                </td>
                <td className="property__label">Udbetaling:</td>
                <td className="property__value">
                  Kr.{" "}
                  {apartment.payment
                    ? apartment.payment.toLocaleString("da-DK", {
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                      })
                    : "-"}
                </td>
              </tr>
              {/* More rows can be added here */}
            </tbody>
          </table>
        </div>
      </div>

      {/* Property Details Section */}
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
                src={apartment.agent.image.url || ""}
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
    </section>
  );
}

export default PropertyDetails;
