import Footer from "../Footer/Footer";
import "./Page.css";

export default function About() {
  return (
    <>
      <div className="page">
        <h1 className="page-title">👥 About FLEVR</h1>

        <p className="page-intro">
          FLEVR is not just a project — it is a collaborative learning
          experience built by students to understand real-world web
          development.
        </p>

        <div className="content-block">
          <h2>Project vision</h2>
          <p>
            The goal of FLEVR is to simulate industry-level frontend
            applications using React, modern UI/UX practices, and
            component-based architecture.
          </p>
        </div>

        <div className="content-block">
          <h2>Learning outcomes</h2>
          <p>
            Team members gain hands-on experience with routing, state
            management, layout systems, and reusable components.
          </p>
        </div>

        <div className="content-block highlight">
          <h2>Built by students</h2>
          <p>
            This project emphasizes teamwork, communication, and consistency
            across the application.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}
