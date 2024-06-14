import "./Home.css";

const Home = () => {
  return (
    <>
      <section id="Home" className="home">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-7">
              <div className="home__content">
                <h2 className="home__name">
                  Hello, IM
                  <span> Ali Abnar</span>
                </h2>
                <h3 className="home__title">Web Developer</h3>
                <p className="home__caption">
                  Freelancer Web/ Web Designer/ Responsive Design
                </p>
                <div className="home__links-wrapper">
                  <a href="#" className={"app-btn home__link"}>
                    Hire Me
                  </a>

                  <a href="#" className="app-btn app-btn--orange home__link">
                    Get Resume
                  </a>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-5">
              <div className="home__photo"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
