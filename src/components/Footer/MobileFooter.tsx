import './MobileFooter.scss';
const MobileFooter = () => {
  return (
    <section className="mobileFooter__root">
      <div className="mobile__logo">
        <img src={require('../../assets/ioIcon 2.svg').default} alt="" />
        <p>hello@olurotimi.design</p>
      </div>
      <div className="mobile__links">
        <img src={require('../../assets/behance (1) 1.svg').default} alt="" />
        <img src={require('../../assets/in 1.svg').default} alt="" />
        <img src={require('../../assets/instagram 1.svg').default} alt="" />
        <img src={require('../../assets/twitter 1.svg').default} alt="" />
      </div>
      <div className="mobile__reach">
        <p>
          Feel free to reach out.
          <br /> I'm looking forward to <br />
          <span>hearing from you.</span>
        </p>
      </div>
      <div className="mobile__recognition">
        <p className="mobile__recognition__p1">
          Developed by <span>Uche Omodu (qgatss)</span>
        </p>
        <p className="mobile__recognition__p2">
          2022 © Israel Olurotimi. All rights reserved
        </p>
      </div>
    </section>
  );
};

export default MobileFooter;
