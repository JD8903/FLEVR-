import Footer from "../Footer/Footer";
import "./Page.css";

export default function Privacy() {
  return (
    <>
      <div className="page">
        <h1 className="page-title">🔐 Privacy Policy</h1>

        <p className="page-intro">
          Your privacy is respected. FLEVR does not collect or store any
          personal user data.
        </p>

        <div className="content-block">
          <h2>Data usage</h2>
          <p>
            This project is purely educational and does not involve tracking,
            analytics, or third-party data usage.
          </p>
        </div>

        <div className="content-block highlight">
          <h2>User safety</h2>
          <p>
            The platform is safe to explore and use for learning purposes.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}
