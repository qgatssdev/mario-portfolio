import './MobileHeader.scss';
const MobileHeader = () => {
  return (
    <div className="mobileHeader__root">
      <div>
        <img src={require('../../assets/ioIcon 2.svg').default} alt="" />
      </div>
      <div>
        <img src={require('../../assets/Group 1920.svg').default} alt="" />
      </div>
    </div>
  );
};

export default MobileHeader;
