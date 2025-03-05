import { FaPhoneAlt } from "react-icons/fa";
import { IoIosPaperPlane } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import Form from "../components/kontakt/form";

const Kontakt = () => {
  return (
    <>
      <main>
        <section className="heromaegler-section">
          <h1 className="heromaegler-section__title">Kontakt os</h1>
          <div className="heromaegler-section__overlay"></div>
        </section>

        <section className="kontakt">
          <div className="kontakt__wrapper">
            <div className="kontakt__header">
              <h2>Vi sidder klar til at besvare dine spørgsmål</h2>
              <p>
                Der kan opstå tvivl om mange ting nå man gerne vil, eller er i
                gang med at sælge sin bolig. Vores medarbejdere sidder klar alle
                ugens dage til at svare på dine spørgsmål.
              </p>
            </div>

            <div className="kontakt__container">
              <Form />

              <div className="kontakt__container__info">
                <div className="kontakt__container__info__box">
                  <div className="kontakt__container__info__box__icon">
                    <FaPhoneAlt />
                  </div>
                  <h3>Ring til os</h3>
                  <a href="tel:+4570704000">+45 7070 4000</a>
                </div>
                <hr />
                <div className="kontakt__container__info__box">
                  <div className="kontakt__container__info__box__icon">
                    <IoIosPaperPlane />
                  </div>
                  <h3>Send en mail</h3>
                  <a href="mailto:4000@dinmaegler.com">4000@dinmaegler.com</a>
                </div>
                <hr />
                <div className="kontakt__container__info__box">
                  <div className="kontakt__container__info__box__icon">
                    <IoLocationSharp />
                  </div>
                  <h3>Besøg butikken</h3>
                  <a
                    href="https://www.google.com/maps?q=Stændertorvet+78,+4000+Roskilde"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Stændertorvet 78, 4000 Roskilde
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2251.763704484697!2d12.077807676874455!3d55.64092477304299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46525fda8582267b%3A0x3a79b4f713b2bf83!2sSt%C3%A6ndertorvet%2078%2C%204000%20Roskilde!5e0!3m2!1sen!2sdk!4v1740171114918!5m2!1sen!2sdk"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </main>
    </>
  );
};

export default Kontakt;
