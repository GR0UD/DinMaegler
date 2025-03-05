import "../../style/home/nyhedsbrev.scss";
import { HiArrowNarrowRight } from "react-icons/hi";

const Nyhedsbrev = () => {
  return (
    <>
      <section className="nyhedsbrev">
        <div className="nyhedsbrev__wrapper">
          <div className="nyhedsbrev__content">
            <p className="nyhedsbrev__text">
              Tilmeld dig vores nyhedsbrev og hold dig opdateret på
              boligmarkedet
            </p>
            <form action="#" method="post" className="nyhedsbrev__form">
              <input
                type="email"
                className="nyhedsbrev__input"
                name="email"
                placeholder="Indtast din email adresse"
                required
              />
              <button type="submit" className="nyhedsbrev__button">
                <HiArrowNarrowRight className="nyhedsbrev__icon" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Nyhedsbrev;
