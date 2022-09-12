import './Footer.scss';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.div
      whileInView={{ x: 0, opacity: 1 }}
      initial={{ x: -10, opacity: 0 }}
      transition={{
        delay: 1,
        bounce: 0.5,
        ease: 'easeInOut',
        duration: 0.6,
      }}
    >
      <section className="footer__root">
        <section className="footer__links">
          <div className="links__1">
            <img src={require('../../assets/ioIcon 2.svg').default} alt="" />
            <p>Olurotimi.100@gmail.com</p>
            <div className="links__1__logos">
              <img
                src={require('../../assets/behance (1) 1.svg').default}
                alt=""
              />
              <img src={require('../../assets/in 1.svg').default} alt="" />
              <img
                src={require('../../assets/instagram 1.svg').default}
                alt=""
              />
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
    </motion.div>
  );
};

export default Footer;
