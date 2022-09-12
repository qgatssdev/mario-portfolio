import './Hero.scss';
const Test = () => {
  return (
    <section className="hero__section">
      <div className="hero__root">
        <div className="hero__root_1">
          <h1>Hello.</h1>
          <div className="hero__spanned__root">
            <span>
              <img
                src={require('../../assets/Rectangle 1.svg').default}
                alt=""
              />
            </span>
            <div className="hero__spanned">
              <p className="hero__spanned_p1">I'm Israel ✌🏾</p>
              <p className="hero__spanned_p2">This is my design portfolio</p>
            </div>
          </div>
        </div>
        <div className="hero__root_2">
          <img src={require('../../assets/Group 1917.svg').default} alt="" />
          <div className="middle__circle"></div>
        </div>
        <div className="hero__root_3">
          <ul>
            <li>UX Research</li>
            <li>UX Research</li>
            <li>UX Research</li>
            <li>UX Research</li>
          </ul>
        </div>
      </div>
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
            <p>Olurotimi.100@gmail.com</p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Test;
