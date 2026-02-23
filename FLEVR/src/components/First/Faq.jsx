import { useState } from "react";
import "./Faq.css";

const data = [
  { q: "What is Flver?", a: "Flver is a streaming platform with movies, series, and exclusive content." },
  { q: "How much does Flver cost?", a: "Only at 199 per month." },
  { q: "Where can I watch?", a: "Mobile, laptop, smart TV, tablet, or browser." },
  { q: "How do I cancel?", a: "Cancel anytime from account settings." },
  { q: "What can I watch on Flver?", a: "Action, comedy, thrillers, originals & more." },
  { q: "Is Flver good for kids?", a: "Yes, kids-safe content with parental controls." }
];

export default function Faq() {
  const [open, setOpen] = useState(null);

  return (
    <section className="faq">
      <h1 className="title">Frequently Asked Questions</h1>
      <h2 className="subtitle">WHAT IS FLVER?</h2>

      <div className="faq-box">
        {data.map((item, i) => (
          <div key={i} className={`card ${open === i ? "active" : ""}`}>
            <div className="question" onClick={() => setOpen(open === i ? null : i)}>
              {item.q}
              <span className="icon">{open === i ? "−" : "+"}</span>
            </div>
            <div className="answer">{item.a}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
