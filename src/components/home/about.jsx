import { FaHouseMedicalCircleExclamation } from "react-icons/fa6";
import { PiBuildingApartmentFill } from "react-icons/pi";
import { FaLocationDot } from "react-icons/fa6";
import { FaHandsHelping } from "react-icons/fa";
import { FaHandHoldingDollar } from "react-icons/fa6";

// lavet af Peter

export default function About() {
  return (
    <>
      <section className="about">
        <div className="about__content">
          <img className="about__img" src="./about.png" alt="" />
          <div className="about__div">
            <h1 className="about__title">
              <span>vi</span> har fulgt danskerne hjem i snart 4 årtier
            </h1>
            <h3 className="about__title-two">
              <span>det</span> synes vi siger noget om os!
            </h3>
            <p className="about__txt-about">
              <span>it</span> is a long established fact that a reader will be
              distracted by the readable content of a page when looking at its
              layout. <span>the</span> point of using Lorem Ipsum is that it has
              normal distribution.
            </p>
            <p className="about__txt-about">
              <span>it</span> is a long established fact that a reader will be
              distracted by the readable content of a page when looking at its
              layout. <span>the</span> point of using Lorem Ipsum is that it has
              normal distribution.
            </p>
            <div className="about__funfact">
              <div className="about__sold">
                <div className="about__icon-div">
                  <FaHandHoldingDollar className="about__icon-one" />
                </div>
                <div className="about__txt">
                  <h3 className="about__title-three">4829</h3>
                  <p className="about__txt-sale">boliger solgt</p>
                </div>
              </div>
              <div className="about__sold">
                <div className="about__icon-div">
                  <FaHouseMedicalCircleExclamation className="about__icon-one" />
                </div>
                <div className="about__txt">
                  <h3 className="about__title-three">158</h3>
                  <p className="about__txt-sale">boliger til salg</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about__line"></div>

        <div className="about__feature">
          <div className="about__features">
            <div className="about__feature-icon">
              <PiBuildingApartmentFill className="about__icon" />
            </div>
            <div className="about__txt-div">
              <h3 className="about__title-three">
                <span>bestil</span> et salgstjek
              </h3>
              <p className="about__txt-feature">
                <span>med</span> et <span>din mægler</span>{" "}
                <span>salgstjek</span> bliver du opdateret på værdien af din
                bolig.
              </p>
            </div>
          </div>
          <div className="about__features">
            <div className="about__feature-icon">
              <FaLocationDot className="about__icon" />
            </div>
            <div className="about__txt-div">
              <h3 className="about__title-three">74 butikker</h3>
              <p className="about__txt-feature">
                <span>hos</span> <span>din mægler</span> er din bolig til salg i
                alle vores 74 butikker, som er fordelt rundt om i{" "}
                <span>danmark</span>
              </p>
            </div>
          </div>
          <div className="about__features">
            <div className="about__feature-icon">
              <FaHandsHelping className="about__icon" />
            </div>
            <div className="about__txt-div">
              <h3 className="about__title-three">
                <span>tilmeld</span> køberkartotek
              </h3>
              <p className="about__txt-feature">
                <span>når</span> du er tilmeldt vores køberkartotek, bliver du
                kontaktet inden en ny bolig bliver annonceret.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
