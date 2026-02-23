import Footer from "../Footer/Footer";
import "./Page.css";

export default function HelpCenter() {
  return (
    <>
      <div className="page">
        <h1 className="page-title">🛟 Help Center</h1>

        <p className="page-intro">
          The Help Center is designed to provide detailed assistance and
          explanations related to the FLEVR platform.
        </p>

        <div className="content-block">
          <h2>Frequently asked questions</h2>
          <p>
            Most questions related to navigation, layout, and project flow
            are answered here.
          </p>
        </div>

        <div className="content-block highlight">
          <h2>Support philosophy</h2>
          <p>
            FLEVR encourages learning by exploring and understanding how
            each component works.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}
