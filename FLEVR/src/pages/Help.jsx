import Footer from "../Footer/Footer";
import "./Page.css";

export default function Help() {
  return (
    <>
      <div className="page">
        <h1 className="page-title">❓ Help</h1>

        <p className="page-intro">
          Need assistance while using FLEVR? This section provides guidance
          for common questions and usage help.
        </p>

        <div className="content-block">
          <h2>Navigation help</h2>
          <p>
            Use the settings page to explore different sections like Company,
            About, Help Center, and more.
          </p>
        </div>

        <div className="content-block highlight">
          <h2>Technical guidance</h2>
          <p>
            If you face issues related to UI or navigation, revisit the
            project structure or contact the team.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}
