import Footer from "../Footer/Footer";
import "./Page.css";

export default function HelpSettings() {
  return (
    <>
      <div className="page">
        <h1 className="page-title">🛠 Help & Settings</h1>

        <p className="page-intro">
          This section provides detailed guidance and configuration options
          to help you use the FLEVR platform efficiently and comfortably.
        </p>

        {/* HELP SECTION */}
        <div className="content-block">
          <h2>Platform help</h2>
          <p>
            FLEVR is designed to be simple and intuitive. If you face any
            difficulty navigating through pages, explore the footer links
            or revisit the settings page for quick access.
          </p>
        </div>

        <div className="content-block">
          <h2>Navigation guidance</h2>
          <p>
            Use the Settings page to manage devices, subscriptions, and
            platform-related links such as Company, Help Center, and
            Language preferences.
          </p>
        </div>

        {/* SETTINGS SECTION */}
        <div className="content-block">
          <h2>Account & device settings</h2>
          <p>
            The settings page displays all active devices linked to your
            account. You can log out from any device for better security.
          </p>
        </div>

        <div className="content-block">
          <h2>Language preferences</h2>
          <p>
            Users can choose their preferred language using the
            “View website in” option available in the footer.
          </p>
        </div>

        {/* HIGHLIGHT */}
        <div className="content-block highlight">
          <h2>Security & control</h2>
          <p>
            FLEVR promotes responsible usage by allowing users to manage
            sessions, understand platform policies, and access help
            whenever required.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}
