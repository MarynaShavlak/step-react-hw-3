import './ContactsList.css';

export const ContactsList = () => {
  return (
    <>
      <ul className="content-list">
        <li className="content-list__item">
          <h2 className="title-2">Location</h2>
          <p>Kiev, Ukraine</p>
        </li>
        <li className="content-list__item">
          <h2 className="title-2">Telegram / WhatsApp</h2>
          <p>
            <a href="tel:+79051234567">+3 8 066-77-88</a>
          </p>
        </li>
        <li className="content-list__item">
          <h2 className="title-2">Email</h2>
          <p>
            <a href="test@test.com">test@test.com</a>
          </p>
        </li>
      </ul>
    </>
  );
};
