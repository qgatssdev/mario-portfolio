import './About.scss';
import MediaQuery from 'react-responsive';

const About = () => {
  return (
    <section className="about__root">
      <div className="about__UI">
        <MediaQuery minWidth={993}>
          <img src={require('../../assets/UX DESIGNER.svg').default} alt="" />
        </MediaQuery>
      </div>
      <section className="about_me__root">
        <div className="about_me_root__memoji">
          <MediaQuery minWidth={250} maxWidth={992}>
            <img src={require('../../assets/Group 1923.svg').default} alt="" />
          </MediaQuery>
          <MediaQuery minWidth={993}>
            <img src={require('../../assets/Group 1919.svg').default} alt="" />
            <img src={require('../../assets/Image 1.svg').default} alt="" />
          </MediaQuery>
        </div>
        <div className="about_me__details">
          <h1>ABOUT ME.</h1>
          <div className="details__spanned">
            <span>
              <img
                src={require('../../assets/Rectangle 1.svg').default}
                alt=""
              />
            </span>
            <div className="details__spanned__details">
              <p>Full-time UI/UX Designer</p>
              <p>UI/UX Designer</p>
            </div>
          </div>
          <div className="about_me_details__intro">
            <p>
              I'm Israel, and I'm a UI/UX Designer. I started designing as a
              hobby years ago, and now I work as a professional UI/UX designer.
              During this time, I've learnt and collaborated with clients from a
              variety of backgrounds and industries to improve experiences
              through design. I am passionate about solving problems and
              providing solutions that are simple and elegant and turning any
              ideas into elegantly packed, ready-to-use products with
              high-quality designs and uniqueness!
              <br />
              <br />
              <br />
              To learn about my credentials, please check out my resume:
            </p>
            <button>
              <a href="../../ISRAEL RESUMÉ.pdf" download>
                {' '}
                DOWNLOAD RESUMÉ{' '}
              </a>
            </button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
