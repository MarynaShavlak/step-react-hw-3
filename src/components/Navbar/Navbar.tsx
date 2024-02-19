import './Navbar.css';
import { DarkModeButton } from '../Buttons/DarkmodeBtn';

export const Navbar = () => {
  const navLinks = [
    { href: './index.html', text: 'Home', isActive: true },
    { href: './projects.html', text: 'Projects', isActive: false },
    { href: './contacts.html', text: 'Contacts', isActive: false },
  ];

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <a href="./index.html" className="logo">
            <strong>Freelancer</strong> portfolio
          </a>

          <DarkModeButton />

          <ul className="nav-list">
            {navLinks.map((link, index) => (
              <li key={index} className="nav-list__item">
                <a
                  href={link.href}
                  className={`nav-list__link ${
                    link.isActive ? 'nav-list__link--active' : ''
                  }`}
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
