import "./Footer.css";

export default function Footer({ setCurrentPage }) {
  return (
    <>
      {/* Divider line */}
      <div className="footer-divider"></div>

      <footer className="footer">
        <div className="footer-grid">

          {/* Column 1 */}
          <div className="footer-column">
            <p
              className="footer-link"
              onClick={() => setCurrentPage("company")}
            >
              Company
            </p>
            <p
              className="footer-link"
              onClick={() => setCurrentPage("about")}
            >
              About us
            </p>
          </div>

          {/* Column 2 */}
          <div className="footer-column">
            <p className="footer-link">View website in</p>
            <select className="language-select">
              <option>English</option>
              <option>Hindi</option>
              <option>Gujarati</option>
            </select>
          </div>

          {/* Column 3 */}
          <div className="footer-column">
            <p
              className="footer-link"
              onClick={() => setCurrentPage("help")}
            >
              Need help?
            </p>
            <p
              className="footer-link"
              onClick={() => setCurrentPage("helpcenter")}
            >
              Visit help center
            </p>
          </div>

          {/* Column 4 */}
          <div className="footer-column">
            <p
              className="footer-link"
              onClick={() => setCurrentPage("privacy")}
            >
              Privacy Policy
            </p>
            <p
              className="footer-link"
              onClick={() => setCurrentPage("terms")}
            >
              Terms & Conditions
            </p>
          </div>

          {/* Social */}
          <div className="footer-item">
            <h4>Connect with us</h4>

            <div className="social-icons">
              {/* Facebook */}
              <span className="icon fb" title="Facebook">
                <svg viewBox="0 0 24 24" width="22" height="22">
                  <path
                    fill="currentColor"
                    d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.1v-2.9h3.3V9.7
                    c0-3.3 2-5.1 4.9-5.1 1.4 0 2.8.3 2.8.3v3.1h-1.6
                    c-1.6 0-2.1 1-2.1 2v2.4h3.6l-.6 2.9h-3v7A10
                    10 0 0 0 22 12z"
                  />
                </svg>
              </span>

              {/* Instagram */}
              <span className="icon ig" title="Instagram">
                <svg viewBox="0 0 24 24" width="22" height="22">
                  <path
                    fill="currentColor"
                    d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5
                    5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5
                    5.8A4.2 4.2 0 1 0 16.2 12 4.2 4.2 0 0
                    0 12 7.8zm4.4-.6a1 1 0 1 0 1 1
                    1 1 0 0 0-1-1z"
                  />
                </svg>
              </span>

              {/* Twitter */}
              <span className="icon tw" title="Twitter">
                <svg viewBox="0 0 24 24" width="22" height="22">
                  <path
                    fill="currentColor"
                    d="M22.4 5.6c-.8.4-1.6.6-2.5.8a4.3
                    4.3 0 0 0 1.9-2.4 8.6 8.6 0 0
                    1-2.7 1 4.3 4.3 0 0 0-7.3 3.9
                    12.2 12.2 0 0 1-8.9-4.5 4.3
                    4.3 0 0 0 1.3 5.8c-.7 0-1.4
                    -.2-2-.5v.1a4.3 4.3 0 0 0
                    3.5 4.2c-.6.2-1.2.2-1.8.1
                    a4.3 4.3 0 0 0 4 3A8.7
                    8.7 0 0 1 2 19.5a12.3
                    12.3 0 0 0 6.7 2c8
                    0 12.4-6.6 12.4-12.4v-.6
                    a8.9 8.9 0 0 0 2.3-2.3z"
                  />
                </svg>
              </span>
            </div>
          </div>

          {/* Empty spacer */}
          <div></div>

          {/* Copyright */}
          <div className="footer-item right copyright">
            © Made by Janki & team
          </div>

        </div>
      </footer>
    </>
  );
}
