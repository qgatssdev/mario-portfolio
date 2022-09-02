import './Hero.scss';

const Hero = () => {
  return (
    <section className="hero__root">
      <div className="hero__intro">
        <p className="hero__intro_p1">Hello.</p>
        <div className="intro__span">
          <span>
            <img src={require('../../assets/Rectangle 1.svg').default} alt="" />
          </span>
          <div className="intro__span_details">
            <p>I'm Israel ✌🏾</p>
            <p>This is my design portfolio</p>
          </div>
        </div>
      </div>
      <section className="ball__section">
        <img src={require('../../assets/Group 1917.svg').default} alt="" />
        <img src={require('../../assets/Ellipse 3.svg').default} alt="" />
      </section>
      <section className="roles__section">
        <ul>
          <li>UX Research</li>
          <li>UX Design</li>
          <li>UI Design</li>
          <li>Product Analysis</li>
        </ul>
      </section>
      <section className="hero__footer">
        <div className="hero__footer__scroll">
          <p>Scroll</p>
        </div>
        <div className="hero__footer__links">
          <img src={require('../../assets/behance (1) 1.svg').default} alt="" />
          <img src={require('../../assets/in 1.svg').default} alt="" />
          <img src={require('../../assets/instagram 1.svg').default} alt="" />
          <img src={require('../../assets/twitter 1.svg').default} alt="" />
          <div className="hero__footer__links__transform">
            <img src={require('../../assets/Group 21.svg').default} alt="" />
            <p>hello@olurotimi.design</p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Hero;
