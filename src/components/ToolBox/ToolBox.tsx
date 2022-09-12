import './ToolBox.scss';
import { motion } from 'framer-motion';

const ToolBox = () => {
  return (
    <motion.div
      whileInView={{ scale: 1 }}
      initial={{ scale: 0 }}
      transition={{
        delay: 0.5,
        bounce: 0.5,
        ease: 'easeOut',
        duration: 0.6,
      }}
    >
      <section className="toolBox__root">
        <div className="toolBox__section1">
          <h1>TOOLBOX.</h1>
          <div className="toolBox__intro">
            <span>
              <img
                src={require('../../assets/Rectangle 1.svg').default}
                alt=""
              />
            </span>
            <p>
              These are the preferred tools, amongst many, that I've been
              working with to streamline my creative process. I'm always open to
              learning new methodologies, approaches and strategies to hone my
              craft.
            </p>
          </div>
          <div className="toolBox__logo">
            <img src={require('../../assets/figma 1.svg').default} alt="" />
            <img
              src={require('../../assets/iconscout-logo 1.svg').default}
              alt=""
            />
            <img src={require('../../assets/freepik 1.svg').default} alt="" />
            <img
              src={require('../../assets/unsplash-2 1.svg').default}
              alt=""
            />
            <img
              src={
                require('../../assets/0e78588b662396bf532ee37a646c5851 1.svg')
                  .default
              }
              alt=""
            />
            <img
              src={
                require('../../assets/d85bdd7742eb821981ac6ea69234c7a5 1.svg')
                  .default
              }
              alt=""
            />
            <img
              src={require('../../assets/adobe-photoshop 1.svg').default}
              alt=""
            />
            <img src={require('../../assets/pexels 1.svg').default} alt="" />
            <img
              src={
                require('../../assets/cc5a1818db5e01d3c0ac95ebb77c4b91 1.svg')
                  .default
              }
              alt=""
            />
            <img
              src={
                require('../../assets/balsamiq_logo_icon_167815 1.svg').default
              }
              alt=""
            />
            <img src={require('../../assets/stories 1.svg').default} alt="" />
            <img
              src={require('../../assets/dribbble (1) 1.svg').default}
              alt=""
            />
          </div>
        </div>
        <div className="toolBox__section2">
          <img src={require('../../assets/Asset 4 1.svg').default} alt="" />
        </div>
      </section>
    </motion.div>
  );
};

export default ToolBox;
