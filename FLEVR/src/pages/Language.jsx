import Footer from "../Footer/Footer";
import "./Page.css";

export default function Language() {
  return (
    <>
      <div className="page">
        <h1 className="page-title">🌐 View Website in</h1>

        <p className="page-intro">
          FLEVR allows users to explore the platform in different languages.
          This feature ensures better accessibility and a comfortable user
          experience for everyone.
        </p>

        <div className="content-block">
          <h2>Available languages</h2>
          <p>
            Currently, the platform supports the following languages. You can
            switch between them using the language selector in the footer.
          </p>

          <ul className="feature-list">
            <li>English – Default language for full platform access</li>
            <li>Hindi – For native Hindi-speaking users</li>
            <li>Gujarati – For regional language support</li>
          </ul>
        </div>

        <div className="content-block">
          <h2>Why language selection matters</h2>
          <p>
            Language customization improves usability, understanding, and
            engagement. It helps users interact with the platform more
            naturally and confidently.
          </p>
        </div>

        <div className="content-block highlight">
          <h2>Future language support</h2>
          <p>
            As FLEVR grows, more languages may be introduced to make the
            platform accessible to a wider audience.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}
