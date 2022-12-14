import MediaQuery from 'react-responsive';
import './MobileHero.scss';

const MobileHero = () => {
  return (
    <div className="mobileHero__root">
      <h1>Hello.</h1>
      <div className="mobileHero__introduction">
        <span>
          <img src={require('../../assets/Rectangle 1.svg').default} alt="" />
        </span>
        <p>I'm Israel ✌🏾</p>
      </div>
      <p className="mobileHero__introduction__p2">
        {' '}
        This is my design porfolio
      </p>
      <div className="mobileHero__skills">
        <p>UX Research</p>
        <p>UX Design</p>
        <p>UI Design</p>
        <p>Product Analysis</p>
      </div>
      <div className="mobileHero__circle">
        <img
          src={require('../../assets/Group 1917_mobile.svg').default}
          alt=""
        />
        {/* <img
          src={require('../../assets/Ellipse 3.svg').default}
          alt=""
          className="memoji"
        /> */}
        <div className="mobile__ball"></div>
      </div>
      <p className="mobileHero__email">Olurotimi.100@gmail.com</p>
      <div className="mobileHero__links">
        <img src={require('../../assets/behance (1) 1.svg').default} alt="" />
        <img src={require('../../assets/in 1.svg').default} alt="" />
        <img src={require('../../assets/instagram 1.svg').default} alt="" />
        <img src={require('../../assets/twitter 1.svg').default} alt="" />
      </div>
      <div className="UI__des">
        <MediaQuery minWidth={250} maxWidth={992}>
          <img
            src={require('../../assets/UX DESIGNER_mobile.svg').default}
            alt=""
          />
        </MediaQuery>
      </div>
      <div className="scroll">
        <p>
          Scroll{' '}
          <span>
            <img src={require('../../assets/arrow.svg').default} alt="" />
          </span>
        </p>
      </div>
    </div>
  );
};

export default MobileHero;
