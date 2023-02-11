import './Skills.scss';

const Skills = () => {
  return (
    <div>
      <section className='skills__root'>
        <h1 className='skills__root__h1'>MY SKILLS.</h1>
        <div className='skills__intro'>
          <span>
            <img src={require('../../assets/Rectangle 1.svg').default} alt='' />
          </span>
          <p>
            These are the main competencies that I developed by working
            collaboratively. <br />I always strive to bring together the right
            techniques and methods to achieve the best possible outcome.
          </p>
        </div>
        <div className='skills__list'>
          <div className='skills__list__display'>
            <h1>UX RESEARCH</h1>
            <ul>
              <li>Problem Statement</li>
              <li>Hypothesis</li>
              <li>Methods and Workshops</li>
              <li>Usability Studies</li>
              <li>Synthesis</li>
            </ul>
          </div>
          <div className='skills__list__display'>
            <h1>UX Design</h1>
            <ul>
              <li>Design Goal</li>
              <li>User-centric-approach</li>
              <li>Wireframe</li>
              <li>Prototype</li>
              <li>Usability Testing</li>
            </ul>
          </div>
          <div className='skills__list__display'>
            <h1>UI Design</h1>
            <ul>
              <li>Design System</li>
              <li>Style Guide</li>
              <li>Layout</li>
              <li>Visual Interface</li>
              <li>Responsive Design</li>
            </ul>
          </div>
          <div className='skills__list__display'>
            <h1>Product Analytics</h1>
            <ul>
              <li>Web Analytics</li>
              <li>Data Visualization</li>
              <li>Competitive Analysis</li>
              <li>Data Insights</li>
              <li>Metrics and KPIs</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
