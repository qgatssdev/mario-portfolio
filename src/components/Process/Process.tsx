import './Process.scss';
import MediaQuery from 'react-responsive';
import ProcessLines from './ProcessLines';
import ProcessLinesMobile from './ProcessLinesMobile';
import { motion } from 'framer-motion';

const Process = () => {
  return (
    <motion.div
      whileInView={{ scaleX: 1 }}
      initial={{ scaleX: 0 }}
      transition={{
        delay: 0.5,
        bounce: 0.5,
        ease: 'easeInOut',
        duration: 0.6,
      }}
    >
      <section className="section-process">
        <h1>UX PROCESS.</h1>
        <p>
          Focusing on figuring out the right problem to solve is the core of my
          UX process. From research to testing the prototypes, I always aim to
          focus on a user-centric approach through iterative sprints.
        </p>
        <p>
          Whether it's facilitating workshops or getting hands-on, working
          collaboratively allows me to discover the most suitable principles for
          each project, and I'm flexible enough to adapt the UX process when the
          project calls for it.
        </p>
        <div className="lines__diagram">
          <img
            src={
              require('../../assets/f1ddc08cbe0f14eed4bb196e150c25f0 1.svg')
                .default
            }
            alt=""
          />
          <MediaQuery minWidth={250} maxWidth={992}>
            <ProcessLinesMobile />
          </MediaQuery>
          <MediaQuery minWidth={993}>
            <ProcessLines />
          </MediaQuery>
        </div>
      </section>
    </motion.div>
  );
};

export default Process;
