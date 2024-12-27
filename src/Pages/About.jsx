import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Landing/Hero";
import Footer from "../Components/Footer";

const About = () => {
  return (
    <div data-bs-theme="dark">
      <Navbar />
      <div className="container mt-5">
        <div className="row justify-content-center">
          {/* About Information Card */}
          <div className="col-md-8">
            <div className="card text-white bg-dark mb-4">
              <div className="card-header text-center">
                <h3>About Us</h3>
              </div>
              <div className="card-body">
                <p className="lead">Welcome to our website! This platform was created with passion and dedication to providing you with the best user experience.</p>

                <h5>Developer</h5>
                <p>
                  This website was developed by <strong>Your Name</strong>, a passionate web developer with experience in creating dynamic, interactive, and user-friendly web applications.
                </p>

                <h5>Technologies Used</h5>
                <ul>
                  <li>React JS</li>
                  <li>Vite</li>
                  <li>Bootstrap</li>
                  <li>JavaScript, HTML, CSS</li>
                </ul>

                <h5>Website Features</h5>
                <p>This website was built with the latest web technologies and a focus on responsive design. It includes features such as:</p>
                <ul>
                  <li>Dynamic content loading</li>
                  <li>Modern and user-friendly interface</li>
                  <li>Fast performance using Vite</li>
                  <li>Responsive design for all devices</li>
                </ul>

                <h5>Thank You for Visiting</h5>
                <p>We hope you enjoy the experience. If you have any questions or feedback, feel free to contact us!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
