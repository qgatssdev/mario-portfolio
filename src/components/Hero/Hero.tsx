import './Hero.scss';

const Hero = () => {
  return (
    <div className="hero__root">
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
    </div>
  );
};

export default Hero;
