import React from "react";

const Header = () => {
  return (
    <header style={styles.header}>
      <img style={styles.img} src="./superchefs-logo.png" />
      <img style={styles.menu} src="./menu-icon.svg" />
    </header>
  );
};

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>© fadarse 2025</p>
    </footer>
  );
};

const styles = {
  header: {
    backgroundColor: "#f0f0f0",
    boxShadow: "0 1px 4px",
    color: "#4CAF50",
    height: "3rem",
    width: "100%",
    position: "sticky",
    top: "0",
  },
  img: {
    width: "26px",
    margin: "5px 15px",
    cursor: "pointer",
  },
  menu: {
    position: "absolute",
    right: "15px",
    cursor: "pointer",
    margin: "8px 10px",
  },

  footer: {
    backgroundColor: "#4CAF50",
    height: "2rem",
    color: "white",
    display: "grid",
    textAlign: "center",
    alignContent: "center",
    position: "fixed",
    left: "0",
    bottom: "0",
    width: "100%",
  },
};

export { Header, Footer };
