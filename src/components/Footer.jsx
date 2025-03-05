import { FaPhoneAlt } from "react-icons/fa";
import { IoIosPaperPlane } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import "../style/footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__brand">
          <img src="/logo.png" alt="LOGO" />
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words.
          </p>
        </div>

        <div className="footer__content">
          <div className="footer__contact">
            <div className="footer__contact-item">
              <div className="footer__icon">
                <FaPhoneAlt />
              </div>
              <div>
                <small>Ring til os</small>
                <a href="tel:+4570704000">+45 70 70 40 00</a>
              </div>
            </div>
            <div className="footer__contact-item">
              <div className="footer__icon">
                <IoIosPaperPlane />
              </div>
              <div>
                <small>Send en mail</small>
                <a href="mailto:4000@dinmaegler.com">4000@dinmaegler.com</a>
              </div>
            </div>
            <div className="footer__contact-item">
              <div className="footer__icon">
                <IoLocationSharp />
              </div>
              <div>
                <small>Butik</small>
                <a
                  href="https://www.google.com/maps?q=Stændertorvet+78,+4000+Roskilde"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Stændertorvet 78, 4000 Roskilde
                </a>
              </div>
            </div>

            <p className="footer__contact-text">
              Din Mægler Roskilde, er din boligbutik i lokalområdet.
            </p>
          </div>

          <div className="footer__links">
            <ul className="footer__links-list">
              <div>Quick Links</div>
              <li>
                <a href="/boliger">Boliger til salg</a>
              </li>
              <li>
                <a href="/maeglere">Mæglere</a>
              </li>
              <li>
                <a href="/kontakt-os">Kontakt os</a>
              </li>
              <li>
                <a href="/login">Log ind / bliv bruger</a>
              </li>
            </ul>

            <div className="footer__membership">
              <small>Medlem af</small>
              <span className="footer__membership-name">DMS</span>
              <span className="footer__membership-org">
                Dansk Mægler Sammenslutning
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <small>Layout By Jit Banik 2020</small>
      </div>
    </footer>
  );
}
