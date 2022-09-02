import './Process.scss';
import ProcessLines from './ProcessLines';
const Process = () => {
  return (
    <section className="section-process">
      <h1>UX PROCESS.</h1>
      <p>
        Focusing on figuring out the right problem to solve is the core of my UX
        process. From research to testing the prototypes, I always aim to focus
        on a user-centric approach through iterative sprints.
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
        <ProcessLines />
      </div>
    </section>
  );
};

export default Process;
