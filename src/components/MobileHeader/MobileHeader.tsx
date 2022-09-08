import './MobileHeader.scss';
import { Spiral as Hamburger } from 'hamburger-react';

const MobileHeader = () => {
  return (
    <div className="mobileHeader__root">
      <div>
        <img src={require('../../assets/ioIcon 2.svg').default} alt="" />
      </div>
      <div>
        {/* <img src={require('../../assets/Group 1920.svg').default} alt="" /> */}
        <Hamburger color="#fff" duration={0.8} />
      </div>
    </div>
  );
};

export default MobileHeader;
