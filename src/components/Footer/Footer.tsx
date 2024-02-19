import './Footer.css';

import instagramIcon from './../../img/icons/instagram.svg';
import twitterIcon from './../../img/icons/twitter.svg';
import linkedInIcon from './../../img/icons/linkedIn.svg';
import gitHubIcon from './../../img/icons/gitHub.svg';

const socialLinks = [
  { icon: instagramIcon, alt: 'Instagram', url: '#' },
  { icon: twitterIcon, alt: 'Twitter', url: '#' },
  { icon: gitHubIcon, alt: 'GitHub', url: '#' },
  { icon: linkedInIcon, alt: 'LinkedIn', url: '#' },
];

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            {socialLinks.map((link, index) => (
              <li className="social__item" key={index}>
                <a href={link.url}>
                  <img src={link.icon} alt={link.alt} />
                </a>
              </li>
            ))}
          </ul>
          <div className="copyright">
            <p>© 2024</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
