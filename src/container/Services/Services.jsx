import "./Services.css";

const Services = () => {
  return (
    <>
      <section id="Service" className="services">
        <div className="container">
          <div className="section-head">
            <h3 className="section-head__title">Services</h3>
            <p className="section-head__caption">What We Provide You ?</p>
            <span className="section-head__line"></span>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="service service--purple">
                <svg
                  className="service__icon"
                  width="69.016"
                  height="64.973"
                  viewBox="0 0 69.016 64.973"
                >
                  <path
                    id="icon"
                    d="M614.281,2598.986a2.03,2.03,0,0,1,0-4.061h6.631l1.348-4.061h24.48l1.348,4.061h6.631a2.03,2.03,0,0,1,0,4.061Zm-8.222-12.182a6.086,6.086,0,0,1-6.066-6.091v-2.03h69.016v2.03a6.2,6.2,0,0,1-6.2,6.091Zm62.949-12.181H656.741v-6.091a2.028,2.028,0,0,0-2.021-2.03H651.6a18.2,18.2,0,0,0-.719-1.74l2.21-2.22a2.04,2.04,0,0,0,0-2.871l-5.719-5.742a2.015,2.015,0,0,0-2.859,0l-2.211,2.22a18.518,18.518,0,0,0-1.732-.724v-3.136a2.029,2.029,0,0,0-2.022-2.03h-8.087a2.028,2.028,0,0,0-2.022,2.03v3.136a18.5,18.5,0,0,0-1.732.724l-2.211-2.22a2.013,2.013,0,0,0-2.859,0l-5.719,5.742a2.04,2.04,0,0,0,0,2.871l2.21,2.22a18.325,18.325,0,0,0-.719,1.74h-3.124a2.029,2.029,0,0,0-2.022,2.03v6.091H599.992V2540.1a6.085,6.085,0,0,1,6.066-6.09h56.749a6.219,6.219,0,0,1,4.355,1.785,5.982,5.982,0,0,1,1.846,4.3v34.518h0ZM648.65,2548.23a6.07,6.07,0,1,0,6.07-6.09A6.087,6.087,0,0,0,648.65,2548.23Zm-4.307,26.391a10.113,10.113,0,1,0-19.687,0H616.3v-4.061H618.9a2.024,2.024,0,0,0,1.958-1.523,14.019,14.019,0,0,1,1.5-3.619,2.039,2.039,0,0,0-.311-2.467l-1.84-1.848,2.859-2.871,1.84,1.848a2.008,2.008,0,0,0,2.459.312,13.861,13.861,0,0,1,3.6-1.5,2.031,2.031,0,0,0,1.516-1.968v-2.6h4.044v2.6a2.032,2.032,0,0,0,1.516,1.968,13.854,13.854,0,0,1,3.6,1.5,2.007,2.007,0,0,0,2.459-.312l1.84-1.848,2.859,2.871-1.839,1.848a2.039,2.039,0,0,0-.311,2.467,13.984,13.984,0,0,1,1.5,3.619,2.026,2.026,0,0,0,1.959,1.523H652.7v4.061Zm-15.517,0a6.067,6.067,0,1,1,11.347,0Z"
                    transform="translate(-599.992 -2534.013)"
                    fill="#fff"
                  />
                </svg>
                <h4 className="service__title">Web Design</h4>
                <p className="service__caption">
                  Design and experimental aspects of the website.
                </p>
                <svg
                  className="service__wave"
                  width="369.92"
                  height="223.59"
                  viewBox="0 0 369.92 223.59"
                >
                  <path
                    id="shape"
                    d="M1249.08,2700.557s15.007-66.794,51.8-54.34,43.02,57.737,121.7,13.585,95.662-58.3,124.531-23.774S1619,2601.5,1619,2601.5v223.59H1249.08Z"
                    transform="translate(-1249.08 -2601.498)"
                    fill="#803AFB"
                  />
                </svg>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="service service--pink">
                <svg
                  className="service__icon"
                  width="78.997"
                  height="65"
                  viewBox="0 0 78.997 65"
                >
                  <path
                    id="icon"
                    d="M1471.684,2599h-74.368a2.247,2.247,0,0,1-2.315-2.167v-41.167h79v41.167A2.247,2.247,0,0,1,1471.684,2599Zm-23.3-28.166a2.377,2.377,0,0,0-1.636.635,2.068,2.068,0,0,0,0,3.063l7.621,7.134-7.621,7.136a2.067,2.067,0,0,0,0,3.063,2.425,2.425,0,0,0,3.272,0l9.257-8.666a2.069,2.069,0,0,0,0-3.064l-9.257-8.666A2.377,2.377,0,0,0,1448.386,2570.833Zm-9.252,0a2.339,2.339,0,0,0-2.076,1.2l-9.257,17.333a2.032,2.032,0,0,0-.14,1.614,2.195,2.195,0,0,0,1.175,1.294,2.439,2.439,0,0,0,1.033.229,2.329,2.329,0,0,0,2.073-1.2l9.257-17.334a2.029,2.029,0,0,0,.14-1.614,2.191,2.191,0,0,0-1.175-1.294A2.449,2.449,0,0,0,1439.134,2570.835Zm-18.521,0a2.38,2.38,0,0,0-1.636.635l-9.257,8.666a2.071,2.071,0,0,0,0,3.064l9.257,8.666a2.426,2.426,0,0,0,3.273,0,2.069,2.069,0,0,0,0-3.063l-7.621-7.136,7.621-7.134a2.07,2.07,0,0,0,0-3.063A2.381,2.381,0,0,0,1420.613,2570.833Zm-13.885-8.667a2.171,2.171,0,1,0,0,4.333h55.544a2.171,2.171,0,1,0,0-4.333ZM1474,2551.333h-79v-15.167a2.247,2.247,0,0,1,2.315-2.167h74.368a2.247,2.247,0,0,1,2.315,2.167v15.166ZM1462.27,2540.5a2.174,2.174,0,1,0,2.31,2.17A2.245,2.245,0,0,0,1462.27,2540.5Zm-9.259,0a2.174,2.174,0,1,0,2.309,2.17A2.246,2.246,0,0,0,1453.01,2540.5Zm-9.25,0a2.174,2.174,0,1,0,2.309,2.17A2.246,2.246,0,0,0,1443.76,2540.5Zm-37.032,0a2.171,2.171,0,1,0,0,4.333h23.144a2.171,2.171,0,1,0,0-4.333Z"
                    transform="translate(-1395.001 -2533.999)"
                    fill="#fff"
                  />
                </svg>
                <h4 className="service__title">Web Development</h4>
                <p className="service__caption">
                  Building and maintaining a website with coding.
                </p>
                <svg
                  className="service__wave"
                  width="369.92"
                  height="223.59"
                  viewBox="0 0 369.92 223.59"
                >
                  <path
                    id="shape"
                    d="M1249.08,2700.557s15.007-66.794,51.8-54.34,43.02,57.737,121.7,13.585,95.662-58.3,124.531-23.774S1619,2601.5,1619,2601.5v223.59H1249.08Z"
                    transform="translate(-1249.08 -2601.498)"
                    fill="#F5276C"
                  />
                </svg>
              </div>

              <div />
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="service service--orange">
                <svg
                  className="service__icon"
                  width="72.977"
                  height="64.991"
                  viewBox="0 0 72.977 64.991"
                >
                  <path
                    id="icon"
                    d="M660.989,2999H588.011v-46.615h42.336l15.233-18.375h15.408V2999Zm-26.882-18.669h0l3.489,6.324h4.891l-5.935-10.758,5.935-10.758H637.6l-3.49,6.325-3.49-6.325h-4.891l5.936,10.758-5.936,10.758h4.891l3.489-6.324Zm-28.479-15.118v13.411a7.911,7.911,0,1,0,15.821,0v-13.411h-4.276v13.411a3.635,3.635,0,1,1-7.269,0v-13.411Zm22.718-17.132H588.011v-14.072h52l-11.666,14.072h0Zm-13.066-9.271v4.331h4.28v-4.331Zm-9.19,0v4.331h4.28v-4.331Zm-9.19,0v4.331h4.28v-4.331Z"
                    transform="translate(-588.011 -2934.009)"
                    fill="#fff"
                  />
                </svg>
                <h4 className="service__title">Responsive</h4>
                <p className="service__caption">
                  Responsive website development and user experience
                  optimization
                </p>
                <svg
                  className="service__wave"
                  width="369.92"
                  height="223.59"
                  viewBox="0 0 369.92 223.59"
                >
                  <path
                    id="shape"
                    d="M1249.08,2700.557s15.007-66.794,51.8-54.34,43.02,57.737,121.7,13.585,95.662-58.3,124.531-23.774S1619,2601.5,1619,2601.5v223.59H1249.08Z"
                    transform="translate(-1249.08 -2601.498)"
                    fill="#FF5823"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Services;
