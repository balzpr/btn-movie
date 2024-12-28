import React from "react";

const Footer = () => {
  return (
    <footer className="footer text-center" style={{marginTop: "50px", padding: "30px 0", backgroundColor: "#1a1a1a", color: "#f8f9fa"}}>
      <div className="container">
        <p className="mb-0">&copy; 2024 BTN Movie. All rights reserved.</p>
        <p>
          Developed by{" "}
          <a href="https://instagram.com/btndev_" target="_blank" rel="noopener noreferrer" style={{color: "#ff6f61", textDecoration: "none"}}>
            BTN Dev
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
