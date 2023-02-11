import './Works.scss';

const Works = () => {
  const openInNewTab = (url: any) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div>
      <section className='works__root'>
        <div className='work__root__section1'>
          <h1>Works.</h1>
          <p>
            <span>
              <img
                src={require('../../assets/Rectangle 1.svg').default}
                alt=''
              />
            </span>
            Here's a sample of projects I have worked on.
          </p>
        </div>
        <div className='work__root__section2'>
          <div className='section2__items'>
            <div className='section__flex'>
              <p>NeüRMS Web App Design</p>
              <img src={require('../../assets/01.svg').default} alt='' />
            </div>
          </div>
          <div
            className={'section2__items'}
            onClick={() => openInNewTab('http://app.neurms.com')}
          >
            <img src={require('../../assets/neums.png')} alt='' />
          </div>
          <div
            className={'section2__items'}
            onClick={() =>
              openInNewTab('https://softstructures-velsta.netlify.app/')
            }
          >
            <img src={require('../../assets/siatech.png')} alt='' />
          </div>
          <div className='section2__items'>
            <div className='section__flex'>
              <p>Velsta Services Website Design</p>
              <img src={require('../../assets/02.svg').default} alt='' />
            </div>
          </div>
          <div className='section2__items'>
            <div className='section__flex'>
              <p>Siatech Africa Website Design</p>
              <img src={require('../../assets/03.svg').default} alt='' />
            </div>
          </div>
          <div
            className={'section2__items'}
            onClick={() => openInNewTab('https://siatech.netlify.app/')}
          >
            <img src={require('../../assets/music player.png')} alt='' />
          </div>
          <div
            className='section2__items'
            onClick={() =>
              openInNewTab(
                'https://www.figma.com/proto/NPrqmW4pdTnbg1t08AQn0H/MusicPlayer?page-id=0%3A1&node-id=2%3A2&viewport=401%2C337%2C0.08&scaling=min-zoom&starting-point-node-id=13%3A1487'
              )
            }
          >
            <img src={require('../../assets/music.png')} alt='' />
          </div>
          <div className='section2__items'>
            <div className='section__flex'>
              <p>Music Player Desktop Application</p>
              <img src={require('../../assets/04.svg').default} alt='' />
            </div>
          </div>
          {/* <div className="section2__items">
            <p>The Learner's Intiative </p>
          </div>
          <div className="section2__items">
            <p>The Learner's Intiative </p>
          </div>
          <div className="section2__items">
            <p>The Learner's Intiative </p>
          </div>
          <div className="section2__items">
            <p>The Learner's Intiative </p>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Works;
