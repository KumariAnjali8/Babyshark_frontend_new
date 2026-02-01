import React from "react";

const FeatureCard = ({ title, onClick, loading }) => {
  return (
    <div
      style={{
        ...styles.card,
        opacity: loading ? 0.6 : 1,
        pointerEvents: loading ? "none" : "auto"
      }}
      onClick={onClick}
    >
      <h3 style={styles.title}>{title}</h3>
      <p style={styles.subtitle}>
        {loading ? "Generating..." : "Click to open"}
      </p>
    </div>
  );
};


export default FeatureCard;

const styles = {
  card: {
    backgroundColor: "#121212",
    border: "1px solid #2a2a2a",
    borderRadius: 12,
    padding: 24,
    minHeight: 160,

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    cursor: "pointer",
    transition: "transform 0.2s ease, box-shadow 0.2s ease"
  },

  title: {
    margin: 0,
    fontSize: 18,
    color: "#f5f5f5"
  },

  subtitle: {
    marginTop: 8,
    fontSize: 14,
    color: "#a3a3a3"
  }
};
