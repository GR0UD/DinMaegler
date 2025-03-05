import { IoIosArrowForward } from "react-icons/io";

export default function Notfoundfooter() {
  return (
    <>
      <footer className="notfound-footer">
        <div className="notfound-footer__container">
          <div className="notfound-footer__section footer__about">
            <h2 className="notfound-footer__logo">Ghor Bari</h2>
            <p className="notfound-footer__text">
              There are many variations of passages Lorem Ipsum available, but
              the majority have suffered alteration.
            </p>

            <h4 className="notfound-footer__business-hours-title">
              Business Hour
            </h4>
            <p className="notfound-footer__business-hours-txt">
              Monday - Friday 10:00am - 06:00pm
            </p>
          </div>
          <div className="notfound-footer__section footer__links">
            <h3 className="notfound-footer__title">Important Links</h3>
            <ul className="notfound-footer__list">
              <li className="notfound-footer__item">
                <a href="#" className="notfound-footer__link">
                  <IoIosArrowForward />
                  Our Services
                </a>
              </li>
              <li className="notfound-footer__item">
                <a href="#" className="notfound-footer__link">
                  <IoIosArrowForward />
                  Privacy
                </a>
              </li>
              <li className="notfound-footer__item">
                <a href="#" className="notfound-footer__link">
                  <IoIosArrowForward />
                  Contacts
                </a>
              </li>
              <li className="notfound-footer__item">
                <a href="#" className="notfound-footer__link">
                  <IoIosArrowForward />
                  Meet Our Team
                </a>
              </li>
              <li className="notfound-footer__item">
                <a href="#" className="notfound-footer__link">
                  <IoIosArrowForward />
                  Help Desk
                </a>
              </li>
            </ul>
          </div>
          <div className="notfound-footer__section footer__instagram">
            <h3 className="notfound-footer__title">Follow Instagram</h3>
            <div className="notfound-footer__images">
              {[
                "/gridpicone.png",
                "/gridpictwo.png",
                "/gridpicthree.png",
                "/gridpicfour.png",
                "/gridpicfive.png",
                "/gridpicsix.png",
              ].map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt="Instagram"
                  className="notfound-footer__image"
                />
              ))}
            </div>
          </div>
        </div>
        <div className="notfound-footer__bottom">
          <p className="notfound-footer__copyright">
            All Rights Reserved By Jit Banik 2020
          </p>
        </div>
      </footer>
    </>
  );
}
