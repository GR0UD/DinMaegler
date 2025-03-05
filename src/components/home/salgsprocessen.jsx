import "../../style/home/salgsprocessen.scss";
import { FaGooglePlay, FaApple } from "react-icons/fa";

export default function Salgsprocessen() {
  return (
    <section className="salgsprocessen">
      <div className="salgsprocessen__wrapper">
        <div className="salgsprocessen__text-content">
          <h2>Hold dig opdateret på salgsprocessen</h2>
          <p>
            Når du sælger din bolig hos Din Mægler, kommunikerer du nemt med den
            ansvarlige mægler eller butik med vores app. Her kan du også se
            statistik på interessen for din bolig i alle vores salgskanaler.
          </p>
          <div className="salgsprocessen__buttons">
            <button className="salgsprocessen__button salgsprocessen__button--google">
              <FaGooglePlay /> Google Play
            </button>
            <button className="salgsprocessen__button salgsprocessen__button--apple">
              <FaApple /> Apple Store
            </button>
          </div>
        </div>
        <div className="salgsprocessen__image-container">
          <img src="/PhoneOne.png" alt="Phone 1" />
          <img src="/PhoneTwo.png" alt="Phone 2" />
        </div>
      </div>
    </section>
  );
}
