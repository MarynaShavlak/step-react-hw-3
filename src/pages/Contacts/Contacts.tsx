import { Navbar } from './../../components/Navbar';
import { Footer } from './../../components/Footer';
import { ContactsList } from './../../components/ContactsList';

export const Contacts = () => {
  return (
    <>
      <Navbar />
      <main className="section">
        <div className="container">
          <h1 className="title-1">Contacts</h1>
          <ContactsList />
        </div>
      </main>
      <Footer />
    </>
  );
};
