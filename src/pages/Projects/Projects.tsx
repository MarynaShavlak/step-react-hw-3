import { ProjectsList } from './../../components/ProjectsList';
import { Footer } from './../../components/Footer';

export const Projects = () => {
  return (
    <>
      <main className="section">
        <div className="container">
          <h2 className="title-1">Projects</h2>
          <ProjectsList />;
        </div>
      </main>
      <Footer />
    </>
  );
};
