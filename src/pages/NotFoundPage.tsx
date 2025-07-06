import React from "react";

const NotFoundPage: React.FC = () => {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>🐾 Oops! This page ran away like a squirrel! 🐾</h1>
      <p>We couldn’t find what you were looking for.</p>
      <p>
        <a href="/" style={{ color: "#007acc", textDecoration: "underline" }}>
          Go back home and sniff around
        </a>
      </p>
      <img
        src="https://placedog.net/400/300?id=5"
        alt="Confused dog looking around"
        style={{ borderRadius: "8px", marginTop: "1rem" }}
      />
    </div>
  );
};

export default NotFoundPage;
