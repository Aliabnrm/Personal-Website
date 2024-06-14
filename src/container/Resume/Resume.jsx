import "./Resume.css";

const Resume = () => {
  return (
    <>
      <section id="Resume" className="resume">
        <div className="container skew-reset">
          <div className="section-head">
            <h3 className="section-head__title">Resume</h3>
            <p className="section-head__caption">My formal Bio Details</p>
            <span className="section-head__line"></span>
          </div>
          <div className="row">
            <div className="col-5">
              <div className="resume-photo"></div>
            </div>
            <div className="col-12 col-lg-7">
              <div
                className="resume-content resume-content--show"
                id="education"
              >
                <div className="resume-content__item">
                  <div className="resume-content__head">
                    <h5 className="resume-content__title">Html & Css</h5>
                    <span className="resume-content__date">1 to 3 Months</span>
                  </div>
                  <h6 className="resume-content__subtitle">
                    Learned the Framework
                  </h6>
                  <p className="resume-content__description">
                    I was able to learn their Html & Css frameworks such as,
                    flexbox, grid, tailwind, and the basic design of the
                    template in this time period.
                  </p>
                </div>
                <div className="resume-content__item">
                  <div className="resume-content__head">
                    <h5 className="resume-content__title">JS & BootStrap</h5>
                    <span className="resume-content__date">3 to 6 Months </span>
                  </div>
                  <h6 className="resume-content__subtitle">Advanced JS</h6>
                  <p className="resume-content__description">
                    Honestly, it was a bit difficult to learn JavaScript, but
                    with practice and documentation, I was able to gain a good
                    knowledge of JS, then I learned Bootstrap by reading the
                    documentation.
                  </p>
                </div>
                <div className="resume-content__item">
                  <div className="resume-content__head">
                    <h5 className="resume-content__title">React & Git</h5>
                    <span className="resume-content__date">6 to 9 Months</span>
                  </div>
                  <h6 className="resume-content__subtitle">
                    I know React Moderately
                  </h6>
                  <p className="resume-content__description">
                    Starting React required a good knowledge of js, I learned
                    React by searching and updating different sources and
                    project-oriented.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
