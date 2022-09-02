import './Footer.scss';
const Footer = () => {
  return (
    <section className="footer__root">
      <section className="footer__links">
        <div className="links__1">
          <img src={require('../../assets/ioIcon 2.svg').default} alt="" />
          <p>hello@olurotimi.design</p>
          <div className="links__1__logos">
            <img
              src={require('../../assets/behance (1) 1.svg').default}
              alt=""
            />
            <img src={require('../../assets/in 1.svg').default} alt="" />
            <img src={require('../../assets/instagram 1.svg').default} alt="" />
            <img src={require('../../assets/twitter 1.svg').default} alt="" />
          </div>
        </div>
        <div className="links__2">
          <p>
            Feel free to reach out.
            <br /> I'm looking forward to <br />
            <span>hearing from you.</span>
          </p>
        </div>
      </section>
      <div className="recognition">
        <p className="recognition__developer">
          Developed by <span>Uche Omodu (qgatss)</span>
        </p>
        <p className="recogntion__rights">
          2022 © Israel Olurotimi. All rights reserved
        </p>
      </div>
    </section>
  );
};

export default Footer;
