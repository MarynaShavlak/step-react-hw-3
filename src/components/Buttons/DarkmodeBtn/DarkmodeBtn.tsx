import './DarkmodeBtn.css';

import sunIcon from './../../../img/icons/sun.svg';
import moonIcon from './../../../img/icons/moon.svg';

export const DarkModeButton = () => {
  return (
    <button className="dark-mode-btn">
      <img src={sunIcon} alt="Light mode" className="dark-mode-btn__icon" />
      <img src={moonIcon} alt="Dark mode" className="dark-mode-btn__icon" />
    </button>
  );
};
