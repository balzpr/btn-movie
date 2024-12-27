import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Landing/Hero";
import Footer from "../Components/Footer";

const Contact = () => {
  return (
    <div data-bs-theme="dark">
      <Navbar />
      <div className="container mt-5">
        <div className="row justify-content-center">
          {/* Contact Information Card */}
          <div className="col-md-8">
            <div className="card text-white bg-dark mb-4">
              <div className="card-header text-center">
                <h3>Contact Us</h3>
              </div>
              <div className="card-body">
                <p>
                  We value your feedback and strive to improve our service. If you have any inquiries, suggestions, or requests, please don't hesitate to contact us. Below are the ways you can reach
                  out to us:
                </p>

                <div className="mb-4">
                  <h5>Content Removal Requests</h5>
                  <p>
                    If you wish to request the removal of any content from our platform, please feel free to get in touch with us. We're committed to addressing your concerns promptly and
                    professionally.
                  </p>
                </div>

                <div className="mb-4">
                  <h5>General Inquiries</h5>
                  <p>
                    For any general questions, feedback, or suggestions on how we can improve your experience, we're all ears! We welcome any constructive feedback to help make our service better for
                    everyone.
                  </p>
                </div>

                <div className="mb-4">
                  <h5>Instagram</h5>
                  <p>For content removal requests or inquiries, you can contact us directly through Instagram:</p>
                  <a href="https://www.instagram.com/btndev_" target="_blank" rel="noopener noreferrer" className="btn btn-danger">
                    Message us on Instagram
                  </a>
                </div>

                <div className="mb-4">
                  <h5>Email</h5>
                  <p>If you'd prefer to send us an email, we’re happy to help. You can reach us at the email below, and we'll respond as quickly as possible:</p>
                  <a href="mailto:balzpro54@gmail.com" className="btn btn-outline-light">
                    Send an Email
                  </a>
                </div>

                <div className="mb-4">
                  <h5>Additional Ways to Connect</h5>
                  <p>
                    We understand that sometimes reaching out by email or Instagram isn't enough, so we are working on adding more ways to stay in touch. Stay tuned for upcoming features like live
                    chat and community forums!
                  </p>
                </div>

                <div className="mb-4">
                  <h5>Working Hours</h5>
                  <p>
                    Our team is available Monday through Friday, from 9:00 AM to 6:00 PM (UTC). We aim to respond to all inquiries within 24-48 hours, but we appreciate your patience if we experience
                    high volumes of requests.
                  </p>
                </div>

                <div>
                  <h5>Thank You!</h5>
                  <p>
                    Thank you for visiting our website and for your interest in reaching out. We are always looking for ways to improve, and your feedback plays an essential role in making that
                    happen.
                  </p>
                  <p>Our team values your feedback and is committed to addressing your concerns as soon as possible. We are dedicated to creating a positive and enjoyable experience for everyone!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
