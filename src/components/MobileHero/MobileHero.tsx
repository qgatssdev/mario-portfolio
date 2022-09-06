import './MobileHero.scss';
const MobileHero = () => {
  return (
    <div className="mobileHero__root">
      <h1>Hello.</h1>
      <p className="mobileHero__introduction">
        <span>
          <img src={require('../../assets/Rectangle 1.svg').default} alt="" />
        </span>
        I'm Isreal ✌🏾
      </p>
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
      </div>
      <p className="mobileHero__email">hello@olurotimi.design</p>
      <div className="mobileHero__links">
        <img src={require('../../assets/behance (1) 1.svg').default} alt="" />
        <img src={require('../../assets/in 1.svg').default} alt="" />
        <img src={require('../../assets/instagram 1.svg').default} alt="" />
        <img src={require('../../assets/twitter 1.svg').default} alt="" />
      </div>
    </div>
  );
};

export default MobileHero;
