import Footer from "../Footer/Footer";
import "./Page.css";

export default function Company() {
  return (
    <>
      <div className="page company-page">
        <h1 className="page-title">About FLEVR</h1>

        <p className="page-intro">
          FLEVR is a next-generation streaming platform created to deliver a
          smooth, modern and immersive entertainment experience. Built with
          simplicity and performance in mind, FLEVR focuses on usability,
          design, and future-ready technology.
        </p>

        <div className="content-block">
          <h2>🎯 Our Vision</h2>
          <p>
            Our vision is to build a platform where users can enjoy content
            seamlessly across devices. FLEVR aims to combine powerful UI,
            responsive layouts, and intuitive navigation inspired by modern OTT
            platforms.
          </p>
        </div>

        <div className="content-block">
          <h2>⚙️ What We Offer</h2>
          <ul className="feature-list">
            <li>Multi-device access with session control</li>
            <li>Clean and modern user interface</li>
            <li>Fast performance with optimized loading</li>
            <li>Secure account and device management</li>
          </ul>
        </div>

        <div className="content-block highlight">
          <h2>👨‍💻 Built by Students</h2>
          <p>
            FLEVR is developed as a group project by a passionate student team.
            This project focuses on frontend architecture, UI/UX design, and
            real-world application structure using React.
          </p>
        </div>
      </div>

      {/* ✅ Common footer */}
      <Footer />
    </>
  );
}
