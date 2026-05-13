import React from "react";
import "./TestimonialCard.css";

/**
 * TestimonialCard
 *
 * Props:
 *  - quote  {string}  The testimonial text (without quotation marks)
 *  - name   {string}  The attribution name
 */
const TestimonialCard = ({ quote = "text", name = "text" }) => {
  return (
    <div className="tc-card">
      <blockquote className="tc-quote">
        {quote && <p className="tc-quote__text">"{quote}"</p>}
        {name && <footer className="tc-quote__attribution">- {name}</footer>}
      </blockquote>
    </div>
  );
};

export default TestimonialCard;