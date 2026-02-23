import Footer from "../Footer/Footer";
import "./Page.css";

export default function Terms() {
  return (
    <>
      <div className="page">
        <h1 className="page-title">📜 Terms & Conditions</h1>

        <p className="page-intro">
          By accessing this project, you agree that it is intended only for
          educational and demonstration purposes.
        </p>

        <div className="content-block">
          <h2>Usage policy</h2>
          <p>
            The content and code are not meant for commercial deployment.
          </p>
        </div>

        <div className="content-block highlight">
          <h2>Disclaimer</h2>
          <p>
            Features and UI may change as part of the learning process.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}
