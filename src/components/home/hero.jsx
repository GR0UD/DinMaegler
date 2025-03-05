const Hero = () => {
  return (
    <>
      <section className="hero-section">
        <div className="hero-section__overlay"></div>

        <header className="hero-section__header">
          <div className="hero-section__header__main-content">
            <h2>Søg efter din drømmebolig</h2>
            <div className="hero-section__header__main-content__search-content">
              <h4>Søg blandt 158 boliger til salg i 74 butikker</h4>
              <p>Hvad skal din næste bolig indeholde</p>
              <form action="#" method="get">
                <input
                  type="text"
                  className="hero-section__header__main-content__search-content__form__input"
                  name="search"
                  placeholder="Søg på fx. glaskeramisk komfur, bryggers, kælder eller lignende"
                  required
                />
                <button
                  type="submit"
                  className="hero-section__header__main-content__search-content__form__button"
                >
                  Søg
                </button>
              </form>
            </div>
          </div>
        </header>
      </section>
    </>
  );
};

export default Hero;
