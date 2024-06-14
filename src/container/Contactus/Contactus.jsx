import "./Contactus.css";

const Contactus = () => {
  return (
    <>
      <section id="Contact us" className="contactus">
        <div className="section-head">
          <h3 className="section-head__title">Contact us</h3>
          <p className="section-head__caption">Let's keep in Touch</p>
          <span className="section-head__line"></span>
        </div>

        <div className="contactus__wrapper">
          <div className="container">
            <div className="contactus__map">
              <svg
                className="contactus__icon"
                width="26"
                height="35.999"
                viewBox="0 0 26 35.999"
              >
                <path
                  id="map_pin"
                  data-name="map pin"
                  d="M634,7348a13.034,13.034,0,0,0-13,13.038c0,8.921,11.634,22.019,12.129,22.572a1.168,1.168,0,0,0,1.742,0c.5-.553,12.129-13.65,12.129-22.572A13.034,13.034,0,0,0,634,7348Zm0,19.6a6.559,6.559,0,1,1,6.541-6.559A6.557,6.557,0,0,1,634,7367.6Z"
                  transform="translate(-621 -7348)"
                  fill="#0abead"
                />
              </svg>
            </div>
            <div className="contact">
              <h4 className="contact__title">Get in Touch</h4>
              <form action="#" className="contact__form">
                <input
                  type="text"
                  className="contact__input"
                  placeholder="Your Name"
                />
                <input
                  type="text"
                  className="contact__input"
                  placeholder="Your Email Address"
                />
                <input
                  type="text"
                  className="contact__input"
                  placeholder="Subject"
                />
                <input
                  type="text"
                  className="contact__input"
                  placeholder="Estimated Budget"
                />
                <textarea
                  className="contact__input contact__input--textarea"
                  rows="5"
                  placeholder="Enter your Message"
                ></textarea>
                <button className="contact__submit" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contactus;
