import './Navbar.css';
import { DarkModeButton } from '../Buttons/DarkmodeBtn';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  const navLinks = [
    { href: './', text: 'Home' },
    { href: './projects', text: 'Projects' },
    { href: './contacts', text: 'Contacts' },
  ];

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <NavLink to="/" className="logo">
            <strong>Freelancer</strong> portfolio
          </NavLink>

          <DarkModeButton />

          <ul className="nav-list">
            {navLinks.map((link, index) => (
              <li key={index} className="nav-list__item">
                <NavLink
                  to={link.href}
                  className={({ isActive }) =>
                    isActive
                      ? 'nav-list__link nav-list__link--active'
                      : 'nav-list__link '
                  }
                >
                  {link.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
